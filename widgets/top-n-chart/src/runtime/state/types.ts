export type ChartStatus =
  | 'UNCONFIGURED'
  | 'LOADING'
  | 'READY'
  | 'EMPTY'
  | 'ERROR'
  | 'UNSUPPORTED'
  | 'TOO_MANY_CATEGORIES'

export interface CategoryBar {
  kind: 'category'
  /** Raw category field value (string/number), or null for the null-category bucket. */
  categoryValue: string | number | null
  label: string
  value: number
  isNull: boolean
}

export interface OthersBar {
  kind: 'others'
  label: string
  value: number | null
  available: boolean
}

export type ChartBar = CategoryBar | OthersBar

export interface ChartDataState {
  status: ChartStatus
  message?: string
  bars: ChartBar[]
  /** Denominator for percent display; undefined when percent is not meaningful for the aggregation type. */
  totalForPercent?: number
  /** True while a search request is in flight; previous good bars remain visible underneath. */
  isSearching: boolean
  /** Non-blocking banner text (e.g. search failure keeping stale results, too-many-categories notice). */
  banner?: string
}
