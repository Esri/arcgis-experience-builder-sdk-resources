import type { AggregationType } from '../../config'

export interface VisibleGroupStat {
  /** The group's aggregate value (COUNT/SUM/AVG/MIN/MAX result for that category). */
  aggValue: number
  /** The group's record count. Required for AVG Others math; ignored otherwise. */
  count: number
}

export interface OthersMathInput {
  aggregationType: AggregationType
  visibleGroups: VisibleGroupStat[]
  /** Ungrouped total record count over the same filtered universe (COUNT/AVG Others input). */
  totalCount?: number
  /** Ungrouped total sum of the value field over the same filtered universe (SUM/AVG Others input). */
  totalSum?: number
  /** Exact MIN/MAX statistic over every non-visible category. null/undefined = could not be computed safely. */
  excludedStat?: number | null
}

export interface OthersResult {
  /** null means "not applicable" (nothing excluded) or "not available" per `available`. */
  value: number | null
  /** false means Others must be rendered as "Not available" — never silently approximated. */
  available: boolean
}

const NOT_AVAILABLE: OthersResult = { value: null, available: false }

/**
 * Computes the synthetic Others value for the given aggregation type.
 * AVG Others is derived from total-sum/total-count minus the visible groups'
 * contributions — never as an average of the visible groups' averages.
 */
export function computeOthers (input: OthersMathInput): OthersResult {
  const { aggregationType, visibleGroups, totalCount, totalSum, excludedStat } = input

  switch (aggregationType) {
    case 'COUNT': {
      if (totalCount === undefined) return NOT_AVAILABLE
      const visibleSum = visibleGroups.reduce((sum, g) => sum + g.aggValue, 0)
      const remainder = totalCount - visibleSum
      return { value: remainder, available: remainder >= 0 }
    }
    case 'SUM': {
      if (totalSum === undefined) return NOT_AVAILABLE
      const visibleSum = visibleGroups.reduce((sum, g) => sum + g.aggValue, 0)
      return { value: totalSum - visibleSum, available: true }
    }
    case 'AVG': {
      if (totalSum === undefined || totalCount === undefined) return NOT_AVAILABLE
      const visibleSum = visibleGroups.reduce((sum, g) => sum + (g.aggValue * g.count), 0)
      const visibleCount = visibleGroups.reduce((sum, g) => sum + g.count, 0)
      const remainderCount = totalCount - visibleCount
      const remainderSum = totalSum - visibleSum
      if (remainderCount <= 0) return { value: null, available: true } // nothing left outside the Top-N
      return { value: remainderSum / remainderCount, available: true }
    }
    case 'MIN':
    case 'MAX': {
      if (excludedStat === null || excludedStat === undefined) return NOT_AVAILABLE
      return { value: excludedStat, available: true }
    }
    default:
      return NOT_AVAILABLE
  }
}
