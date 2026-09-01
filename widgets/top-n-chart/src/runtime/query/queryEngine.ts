import {
  ClauseLogic,
  ClauseOperator,
  dataSourceUtils,
  Immutable,
  type ClauseValuePair,
  type DataSource,
  type StatisticDefinition,
  type ArcGISQueryParams
} from 'jimu-core'
import type { IMConfig, SortDirection } from '../../config'

const { createSQLClause, createSQLExpression, getArcGISSQL } = dataSourceUtils

/** getArcGISSQL takes an IMSqlExpression, so the mutable expression must be made immutable first. */
function resolveSQL (clause: ReturnType<typeof createSQLClause>, dataSource: DataSource): string | null {
  const sqlExpression = createSQLExpression(ClauseLogic.And, [clause], dataSource)
  const sqlResult = getArcGISSQL(Immutable(sqlExpression) as any, dataSource)
  return sqlResult?.sql || null
}

/** Extent JSON supplied by the Filter-by-map-extent message action, or null when unfiltered. */
export type ExtentFilter = any | null

/** Adds the spatial filter to a query when an extent has been received. */
export function withExtentFilter (params: ArcGISQueryParams, extent: ExtentFilter): ArcGISQueryParams {
  if (!extent) return params
  return { ...params, geometry: extent, geometryType: 'esriGeometryEnvelope' as any, spatialRel: 'esriSpatialRelIntersects' as any }
}

export const AGG_ALIAS = 'topn_agg_value'
export const GROUP_COUNT_ALIAS = 'topn_group_count'
export const TOTAL_COUNT_ALIAS = 'topn_total_count'
export const TOTAL_SUM_ALIAS = 'topn_total_sum'
export const EXCLUDED_STAT_ALIAS = 'topn_excluded_stat'

const STATISTIC_TYPE_MAP: Record<string, StatisticDefinition['statisticType']> = {
  COUNT: 'count',
  SUM: 'sum',
  AVG: 'avg',
  MIN: 'min',
  MAX: 'max'
}

/**
 * Determines whether the category field is numeric, to select the correct SQL clause operator family.
 * IMPLEMENTATION VERIFICATION REQUIRED: confirm `getSchema().fields[name].jimuFieldType` shape against the target install/service.
 */
export function isNumericCategoryField (dataSource: DataSource, fieldName: string): boolean {
  try {
    const schema: any = dataSource.getSchema?.()
    const fieldType = schema?.fields?.[fieldName]?.jimuFieldType
    return fieldType === 'Number'
  } catch (err) {
    return false
  }
}

export function buildBaseWhere (config: IMConfig): string {
  if (config.includeNullCategory) return '1=1'
  return `${config.categoryField} IS NOT NULL`
}

/**
 * Top-N grouped statistics query. Requests the main aggregate plus (for non-COUNT
 * aggregations) a per-group record count, so Others math (notably AVG) never needs
 * to average group averages.
 */
export function buildGroupedStatsQuery (config: IMConfig, where: string, pageSize: number, sortDirection: SortDirection = config.sortDirection): ArcGISQueryParams {
  const outStatistics: StatisticDefinition[] = []
  const outFields: string[] = [config.categoryField, AGG_ALIAS]

  if (config.aggregationType === 'COUNT') {
    outStatistics.push({ statisticType: 'count', onStatisticField: config.categoryField, outStatisticFieldName: AGG_ALIAS })
  } else {
    outStatistics.push({
      statisticType: STATISTIC_TYPE_MAP[config.aggregationType],
      onStatisticField: config.valueField,
      outStatisticFieldName: AGG_ALIAS
    })
    outStatistics.push({ statisticType: 'count', onStatisticField: config.categoryField, outStatisticFieldName: GROUP_COUNT_ALIAS })
    outFields.push(GROUP_COUNT_ALIAS)
  }

  return {
    where,
    groupByFieldsForStatistics: [config.categoryField],
    outStatistics,
    outFields,
    returnGeometry: false,
    page: 1,
    pageSize,
    orderByFields: [`${AGG_ALIAS} ${sortDirection}`, `${config.categoryField} ASC`]
  }
}

/**
 * Ungrouped totals query used as the Others input for COUNT/SUM/AVG.
 * Never used to derive AVG Others directly (see aggregateOthers.ts).
 */
export function buildTotalsQuery (config: IMConfig, where: string): ArcGISQueryParams {
  const outStatistics: StatisticDefinition[] = [
    { statisticType: 'count', onStatisticField: config.categoryField, outStatisticFieldName: TOTAL_COUNT_ALIAS }
  ]
  if (config.aggregationType === 'SUM' || config.aggregationType === 'AVG') {
    outStatistics.push({ statisticType: 'sum', onStatisticField: config.valueField, outStatisticFieldName: TOTAL_SUM_ALIAS })
  }
  return {
    where,
    outStatistics,
    outFields: [config.categoryField],
    returnGeometry: false,
    page: 1,
    pageSize: 1
  }
}

/**
 * Exact MIN/MAX Others query: statistic over every record whose category is NOT
 * one of the visible Top-N categories. Built exclusively through the verified
 * safe-SQL helpers (createSQLClause/createSQLExpression/getArcGISSQL) — never
 * raw string concatenation of category values.
 * Returns null when the exclusion clause cannot be safely built; callers must
 * render Others as "Not available" in that case rather than approximate.
 */
export function buildExclusionStatsQuery (
  config: IMConfig,
  baseWhere: string,
  excludedCategoryValues: Array<string | number>,
  dataSource: DataSource
): ArcGISQueryParams | null {
  if (excludedCategoryValues.length === 0) return null
  const isNumeric = isNumericCategoryField(dataSource, config.categoryField)
  const valuePairs: ClauseValuePair[] = excludedCategoryValues.map(value => ({ value, label: String(value) }))
  const operator = isNumeric ? ClauseOperator.NumberOperatorIsNoneOf : ClauseOperator.StringOperatorIsNoneOf

  try {
    const clause = createSQLClause(config.categoryField, operator, valuePairs)
    const exclusionWhere = resolveSQL(clause, dataSource)
    if (!exclusionWhere) return null
    const statisticType = STATISTIC_TYPE_MAP[config.aggregationType]
    return {
      where: `(${baseWhere}) AND (${exclusionWhere})`,
      outStatistics: [{ statisticType, onStatisticField: config.valueField, outStatisticFieldName: EXCLUDED_STAT_ALIAS }],
      outFields: [config.categoryField],
      returnGeometry: false,
      page: 1,
      pageSize: 1
    }
  } catch (err) {
    return null
  }
}

/**
 * Server-search where-clause: wraps the search term through the safe SQL builder
 * (Contains operator for string fields) rather than manual LIKE concatenation.
 */
export function buildSearchWhere (
  config: IMConfig,
  baseWhere: string,
  searchTerm: string,
  dataSource: DataSource
): string | null {
  const trimmed = searchTerm.trim()
  if (!trimmed) return baseWhere
  const isNumeric = isNumericCategoryField(dataSource, config.categoryField)
  const operator = isNumeric ? ClauseOperator.NumberOperatorIs : ClauseOperator.StringOperatorContains
  const value = isNumeric ? Number(trimmed) : trimmed
  if (isNumeric && Number.isNaN(value as number)) return null
  const valuePairs: ClauseValuePair[] = [{ value, label: trimmed }]

  try {
    const clause = createSQLClause(config.categoryField, operator, valuePairs)
    const searchWhere = resolveSQL(clause, dataSource)
    if (!searchWhere) return null
    return `(${baseWhere}) AND (${searchWhere})`
  } catch (err) {
    return null
  }
}

/**
 * Resolves selected category value(s) into real records for focus-selection
 * publication and Data Action prerequisites (grouped rows have no identity by themselves).
 */
export function buildFocusResolutionQuery (
  config: IMConfig,
  baseWhere: string,
  categoryValues: Array<string | number>,
  dataSource: DataSource,
  maxRecords: number
): ArcGISQueryParams | null {
  if (categoryValues.length === 0) return null
  const isNumeric = isNumericCategoryField(dataSource, config.categoryField)
  const valuePairs: ClauseValuePair[] = categoryValues.map(value => ({ value, label: String(value) }))
  const operator = isNumeric ? ClauseOperator.NumberOperatorIsAnyOf : ClauseOperator.StringOperatorIsAnyOf

  try {
    const clause = createSQLClause(config.categoryField, operator, valuePairs)
    const focusWhere = resolveSQL(clause, dataSource)
    if (!focusWhere) return null
    return {
      where: `(${baseWhere}) AND (${focusWhere})`,
      returnGeometry: false,
      page: 1,
      pageSize: maxRecords
    }
  } catch (err) {
    return null
  }
}
