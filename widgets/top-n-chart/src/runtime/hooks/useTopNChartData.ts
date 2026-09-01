import { React, QueryScope, type QueriableDataSource, type DataRecord, type DataRecordSet } from 'jimu-core'
import { isAggregationRequiringValueField, isPercentSupported, DATA_ACTION_RECORD_CAP, type IMConfig, type SortDirection } from '../../config'

// All queries share one scope so upstream filters apply to the bars and the percentage denominator alike.
const QUERY_OPTIONS = { scope: QueryScope.InRuntimeView }
import {
  AGG_ALIAS,
  GROUP_COUNT_ALIAS,
  TOTAL_COUNT_ALIAS,
  TOTAL_SUM_ALIAS,
  EXCLUDED_STAT_ALIAS,
  buildBaseWhere,
  buildGroupedStatsQuery,
  buildTotalsQuery,
  buildExclusionStatsQuery,
  buildSearchWhere,
  buildFocusResolutionQuery,
  withExtentFilter
} from '../query/queryEngine'
import { computeOthers, type VisibleGroupStat } from '../math/aggregateOthers'
import { publishSelectionChange, publishSelectionClear } from '../messages/publishSelection'
import type { ChartBar, ChartDataState, ChartStatus } from '../state/types'

const { useState, useEffect, useRef, useCallback, useMemo } = React

function toNumberOrNull (raw: any): number | null {
  if (raw === null || raw === undefined || raw === '') return null
  const num = Number(raw)
  return Number.isFinite(num) ? num : null
}

export interface UseTopNChartDataOptions {
  dataSource: QueriableDataSource
  config: IMConfig
  widgetId: string
  /** Extent supplied by the Filter-by-map-extent message action; null when unfiltered. */
  extentFilter?: any
}

export interface UseTopNChartDataResult {
  state: ChartDataState
  showAll: boolean
  setShowAll: (value: boolean) => void
  /** Transient runtime Top N; seeded from config and never written back to it. */
  topN: number
  setTopN: (value: number) => void
  /** Transient runtime sort direction; seeded from config and never written back to it. */
  sortDirection: SortDirection
  setSortDirection: (value: SortDirection) => void
  searchTerm: string
  setSearchTerm: (value: string) => void
  draftSelection: Set<string | number>
  toggleDraftSelection: (categoryValue: string | number | null) => void
  /** Applied categories; when non-empty the runtime shows only these rows. */
  appliedSelection: Set<string | number>
  hasAppliedSelection: boolean
  /** Set when the selection is larger than the Data Action materialization cap. */
  selectionTruncation: { total: number, materialized: number } | null
  applySelection: () => void
  cancelSelection: () => void
  clearSelection: () => void
  retry: () => void
  /** Resolved real DataRecordSet for the currently-applied focus selection; null when nothing is applied. Others is never included. */
  appliedRecordSet: DataRecordSet | null
}

/**
 * Orchestrates the Top-N grouped-statistics query, Others computation, local/server
 * search, and focus-selection resolution/publication. Owned by EXB 2A — Core.
 */
export function useTopNChartData (options: UseTopNChartDataOptions): UseTopNChartDataResult {
  const { dataSource, config, widgetId, extentFilter } = options

  const [state, setState] = useState<ChartDataState>({ status: 'LOADING', bars: [], isSearching: false })
  const [showAll, setShowAll] = useState(false)
  const [topN, setTopN] = useState(config.topN)
  const [sortDirection, setSortDirection] = useState<SortDirection>(config.sortDirection)
  const [searchTerm, setSearchTermState] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [draftSelection, setDraftSelection] = useState<Set<string | number>>(new Set())
  const [appliedSelection, setAppliedSelection] = useState<Set<string | number>>(new Set())
  const [appliedRecordSet, setAppliedRecordSet] = useState<DataRecordSet | null>(null)
  const [selectionTruncation, setSelectionTruncation] = useState<{ total: number, materialized: number } | null>(null)
  const [retryToken, setRetryToken] = useState(0)

  const sequenceRef = useRef(0)
  const selectionSequenceRef = useRef(0)
  const lastGoodBarsRef = useRef<{ bars: ChartBar[], totalForPercent?: number }>({ bars: [] })
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const setSearchTerm = useCallback((value: string) => {
    setSearchTermState(value)
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedSearchTerm(value)
    }, 300)
  }, [])

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    }
  }, [])

  useEffect(() => { setTopN(config.topN) }, [config.topN])
  useEffect(() => { setSortDirection(config.sortDirection) }, [config.sortDirection])

  // Minimal styling-derived dependency: only this boolean may trigger a query, never barStyling itself.
  const needsPercentForConditionalColor =
    config.barStyling.primaryBarColorMode === 'CONDITIONAL' &&
    config.barStyling.primaryConditionalColors.basis === 'PERCENT'

  const retry = useCallback(() => setRetryToken(t => t + 1), [])

  useEffect(() => {
    let cancelled = false
    const mySequence = ++sequenceRef.current

    async function run (): Promise<void> {
      if (!config.categoryField) {
        setState({ status: 'UNCONFIGURED', message: 'Please configure a category field.', bars: [], isSearching: false })
        return
      }
      if (isAggregationRequiringValueField(config.aggregationType) && !config.valueField) {
        setState({ status: 'UNCONFIGURED', message: 'Please configure a value field for this aggregation.', bars: [], isSearching: false })
        return
      }

      const isSearchActive = config.searchEnabled && debouncedSearchTerm.trim().length > 0
      const searchIsServer = isSearchActive && (config.searchMode === 'SERVER' || config.searchMode === 'BOTH')
      const searchIsLocal = isSearchActive && (config.searchMode === 'LOCAL' || config.searchMode === 'BOTH')

      setState(prev => ({ ...prev, status: prev.bars.length > 0 ? prev.status : 'LOADING', isSearching: isSearchActive }))

      try {
        const baseWhere = buildBaseWhere(config)
        let effectiveWhere = baseWhere

        if (searchIsServer) {
          const searchWhere = buildSearchWhere(config, baseWhere, debouncedSearchTerm, dataSource)
          if (searchWhere === null) {
            if (!cancelled && sequenceRef.current === mySequence) {
              setState(prev => ({
                ...prev,
                isSearching: false,
                banner: 'Search failed, showing previous results.'
              }))
            }
            return
          }
          effectiveWhere = searchWhere
        }

        const pageSize = showAll ? config.retentionLimit : topN

        const groupedQuery = withExtentFilter(buildGroupedStatsQuery(config, effectiveWhere, pageSize, sortDirection), extentFilter)
        const groupedResult = await dataSource.query(groupedQuery as any, QUERY_OPTIONS)

        if (cancelled || sequenceRef.current !== mySequence) return

        const records: DataRecord[] = groupedResult.records || []

        let categoryBars: ChartBar[] = records.map((record) => {
          const rawCategory = record.getFieldValue(config.categoryField)
          const isNull = rawCategory === null || rawCategory === undefined || rawCategory === ''
          const value = toNumberOrNull(record.getFieldValue(AGG_ALIAS)) ?? 0
          return {
            kind: 'category',
            categoryValue: isNull ? null : rawCategory,
            label: isNull ? config.nullCategoryLabel : String(rawCategory),
            value,
            isNull
          }
        })

        const visibleGroups: VisibleGroupStat[] = records.map((record) => {
          const aggValue = toNumberOrNull(record.getFieldValue(AGG_ALIAS)) ?? 0
          const count = config.aggregationType === 'COUNT'
            ? aggValue
            : (toNumberOrNull(record.getFieldValue(GROUP_COUNT_ALIAS)) ?? 0)
          return { aggValue, count }
        })

        // Local search filters the already-fetched groups; the percentage denominator
        // always remains the full-dataset total, never the filtered subset.
        if (searchIsLocal) {
          const term = debouncedSearchTerm.trim().toLowerCase()
          categoryBars = categoryBars.filter(bar => bar.kind === 'category' && bar.label.toLowerCase().includes(term))
        }

        let othersBar: ChartBar | null = null
        let totalForPercent: number | undefined

        const othersApplicable = config.showOthers && !showAll && !isSearchActive
        // The denominator is needed for percent text and for percent-based conditional colors alike.
        const percentApplicable =
          (config.valueDisplay !== 'VALUE' || needsPercentForConditionalColor) &&
          isPercentSupported(config.aggregationType)

        let totalCount: number | undefined
        let totalSum: number | undefined

        if (othersApplicable || percentApplicable) {
          const totalsQuery = withExtentFilter(buildTotalsQuery(config, baseWhere), extentFilter)
          const totalsResult = await dataSource.query(totalsQuery as any, QUERY_OPTIONS)
          if (cancelled || sequenceRef.current !== mySequence) return
          const totalsRecord = totalsResult.records?.[0]
          totalCount = totalsRecord ? (toNumberOrNull(totalsRecord.getFieldValue(TOTAL_COUNT_ALIAS)) ?? undefined) : undefined
          totalSum = totalsRecord ? (toNumberOrNull(totalsRecord.getFieldValue(TOTAL_SUM_ALIAS)) ?? undefined) : undefined
        }

        if (percentApplicable) {
          totalForPercent = config.aggregationType === 'COUNT' ? totalCount : totalSum
        }

        if (othersApplicable) {
          let excludedStat: number | null | undefined
          if (config.aggregationType === 'MIN' || config.aggregationType === 'MAX') {
            const excludedValues = records
              .map(r => r.getFieldValue(config.categoryField))
              .filter(v => v !== null && v !== undefined && v !== '')
            const exclusionQuery = buildExclusionStatsQuery(config, baseWhere, excludedValues, dataSource)
            if (exclusionQuery) {
              try {
                const exclusionResult = await dataSource.query(withExtentFilter(exclusionQuery, extentFilter) as any, QUERY_OPTIONS)
                if (cancelled || sequenceRef.current !== mySequence) return
                const exclusionRecord = exclusionResult.records?.[0]
                excludedStat = exclusionRecord ? toNumberOrNull(exclusionRecord.getFieldValue(EXCLUDED_STAT_ALIAS)) : null
              } catch (err) {
                excludedStat = null
              }
            } else {
              excludedStat = null
            }
          }

          const othersResult = computeOthers({
            aggregationType: config.aggregationType,
            visibleGroups,
            totalCount,
            totalSum,
            excludedStat
          })

          const hasRemainder = (config.aggregationType === 'COUNT' || config.aggregationType === 'SUM')
            ? (othersResult.value !== null && othersResult.value > 0)
            : othersResult.available

          if (hasRemainder || !othersResult.available) {
            othersBar = {
              kind: 'others',
              label: config.othersLabel,
              value: othersResult.value,
              available: othersResult.available
            }
          }
        }

        const bars: ChartBar[] = othersBar ? [...categoryBars, othersBar] : categoryBars
        const truncated = showAll && groupedResult.exceededTransferLimit === true

        const status: ChartStatus = bars.length === 0
          ? 'EMPTY'
          : (truncated ? 'TOO_MANY_CATEGORIES' : 'READY')

        lastGoodBarsRef.current = { bars, totalForPercent }

        if (!cancelled && sequenceRef.current === mySequence) {
          setState({
            status,
            bars,
            totalForPercent,
            isSearching: false,
            banner: truncated ? 'Showing the first results only; more categories exist than can be displayed.' : undefined
          })
        }
      } catch (err) {
        if (!cancelled && sequenceRef.current === mySequence) {
          const previousBars = lastGoodBarsRef.current.bars
          if (isSearchActive && previousBars.length > 0) {
            setState({
              status: 'READY',
              bars: previousBars,
              totalForPercent: lastGoodBarsRef.current.totalForPercent,
              isSearching: false,
              banner: 'Search failed, showing previous results.'
            })
          } else {
            setState({
              status: 'UNSUPPORTED',
              message: 'Unable to retrieve grouped statistics from this data source.',
              bars: [],
              isSearching: false
            })
          }
        }
      }
    }

    run()

    return () => { cancelled = true }
  }, [
    dataSource,
    widgetId,
    config.categoryField,
    config.valueField,
    config.aggregationType,
    config.valueDisplay,
    needsPercentForConditionalColor,
    sortDirection,
    topN,
    config.showOthers,
    config.othersLabel,
    config.includeNullCategory,
    config.nullCategoryLabel,
    config.retentionLimit,
    config.searchEnabled,
    config.searchMode,
    showAll,
    debouncedSearchTerm,
    extentFilter,
    retryToken
  ])

  const toggleDraftSelection = useCallback((categoryValue: string | number | null) => {
    if (categoryValue === null) return // Others (and the null bucket) are never selectable identities to publish
    setDraftSelection(prev => {
      const next = new Set(prev)
      if (next.has(categoryValue)) {
        next.delete(categoryValue)
      } else {
        if (config.selectionStyle === 'RADIO') next.clear()
        next.add(categoryValue)
      }
      return next
    })
  }, [config.selectionStyle])

  const applySelection = useCallback(() => {
    const values = Array.from(draftSelection)
    setAppliedSelection(new Set(values))

    if (values.length === 0) {
      selectionSequenceRef.current += 1
      setAppliedRecordSet(null)
      setSelectionTruncation(null)
      dataSource.selectRecordsByIds([])
      publishSelectionClear(widgetId, dataSource.id)
      return
    }

    const baseWhere = buildBaseWhere(config)
    const resolutionQuery = buildFocusResolutionQuery(config, baseWhere, values, dataSource, DATA_ACTION_RECORD_CAP)
    if (!resolutionQuery) {
      selectionSequenceRef.current += 1
      setAppliedRecordSet(null)
      setSelectionTruncation(null)
      dataSource.selectRecordsByIds([])
      publishSelectionClear(widgetId, dataSource.id)
      return
    }

    const scopedQuery = withExtentFilter(resolutionQuery, extentFilter)
    const mySequence = ++selectionSequenceRef.current

    const resolve = async (): Promise<void> => {
      // queryIds is documented as unlimited, so native selection covers the whole category.
      const idsResult = await (dataSource as any).queryIds?.(scopedQuery as any, QUERY_OPTIONS)
      if (selectionSequenceRef.current !== mySequence) return
      const ids: Array<string | number> = idsResult?.ids ?? []
      dataSource.selectRecordsByIds(ids)

      // Records are materialized only for Data Actions and the selection message.
      const result = await dataSource.query(scopedQuery as any, QUERY_OPTIONS)
      if (selectionSequenceRef.current !== mySequence) return
      const records = result.records || []
      publishSelectionChange(widgetId, dataSource.id, records)
      // Others has no real DataRecord identity and is excluded by construction (buildFocusResolutionQuery only ever resolves real category values).
      setAppliedRecordSet(records.length > 0
        ? { name: 'topn-selected', label: 'Selected categories', type: 'selected', dataSource, records }
        : null)
      const total = ids.length || records.length
      setSelectionTruncation(total > records.length ? { total, materialized: records.length } : null)
    }

    resolve().catch(() => {
      if (selectionSequenceRef.current !== mySequence) return
      setAppliedRecordSet(null)
      setSelectionTruncation(null)
      dataSource.selectRecordsByIds([])
      publishSelectionClear(widgetId, dataSource.id)
    })
  }, [draftSelection, config, dataSource, widgetId, extentFilter])

  const cancelSelection = useCallback(() => {
    setDraftSelection(new Set(appliedSelection))
  }, [appliedSelection])

  const clearSelection = useCallback(() => {
    selectionSequenceRef.current += 1
    setDraftSelection(new Set())
    setAppliedSelection(new Set())
    setAppliedRecordSet(null)
    setSelectionTruncation(null)
    dataSource.selectRecordsByIds([])
    publishSelectionClear(widgetId, dataSource.id)
  }, [dataSource, widgetId])

  const hasAppliedSelection = useMemo(() => appliedSelection.size > 0, [appliedSelection])

  return {
    state,
    showAll,
    setShowAll,
    topN,
    setTopN,
    sortDirection,
    setSortDirection,
    searchTerm,
    setSearchTerm,
    draftSelection,
    toggleDraftSelection,
    appliedSelection,
    hasAppliedSelection,
    selectionTruncation,
    applySelection,
    cancelSelection,
    clearSelection,
    retry,
    appliedRecordSet
  }
}
