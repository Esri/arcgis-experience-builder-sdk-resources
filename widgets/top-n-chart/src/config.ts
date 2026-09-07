import { Immutable } from 'jimu-core'
import type { ImmutableObject } from 'seamless-immutable'

export type AggregationType = 'COUNT' | 'SUM' | 'AVG' | 'MIN' | 'MAX'
export type SortDirection = 'DESC' | 'ASC'
export type SearchMode = 'LOCAL' | 'SERVER' | 'BOTH'
export type VerticalSpacing = 'COMPACT' | 'AUTO_DISTRIBUTE'
export type SelectionStyle = 'RADIO' | 'CHECKBOX' | 'TOGGLE'
export type ValueDisplay = 'VALUE' | 'VALUE_PERCENT' | 'PERCENT'
export type BarColorMode = 'SINGLE' | 'CONDITIONAL'
export type ConditionalBasis = 'VALUE' | 'PERCENT'

/**
 * Ordered inclusive lower bounds, so ranges can never gap or overlap.
 * N breakpoints yield N ranges: [b0, b1), [b1, b2), ..., [b(N-1), +infinity).
 * `colors[i]` is the fill for the range starting at `breakpoints[i]`.
 * Values below the first breakpoint fall back to the single fill color.
 */
export interface IConditionalColors {
  basis: ConditionalBasis
  breakpoints: number[]
  colors: string[]
}
export type CategoryPosition = 'TOP_LEFT' | 'INLINE_LEFT' | 'BOTTOM_LEFT'
export type ValuePosition = 'TOP_RIGHT' | 'INLINE_RIGHT' | 'INSIDE_BAR' | 'BOTTOM_RIGHT'
export type BarHeight = 'SMALL' | 'MEDIUM' | 'LARGE'
export type BarCorners = 'SQUARE' | 'SOFT' | 'ROUND'
export type BarSpacing = 'COMPACT' | 'SPACIOUS'
export type BarLineStyle = 'SOLID' | 'DASHED' | 'DOTTED'
export type TitleFormatPreset = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'PARAGRAPH'
export type TextAlign = 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFY'
export type CharacterEffect = 'NONE' | 'SHADOW' | 'OUTLINE' | 'GLOW' | 'GRADIENT' | 'EMBOSS'

/** Maps each heading preset to its default font size (px), matching the reference "Heading N · size" list. */
export const FORMAT_PRESET_SIZE_MAP: Record<TitleFormatPreset, number> = {
  H1: 48,
  H2: 40,
  H3: 32,
  H4: 28,
  H5: 24,
  H6: 18,
  PARAGRAPH: 13
}

/** Title Format side-panel contract (Header section -> gear icon next to Header title). */
export interface ITitleFormatConfig {
  formatPreset: TitleFormatPreset
  fontFamily: string
  fontSize: number
  bold: boolean
  italic: boolean
  underline: boolean
  strikethrough: boolean
  highlightColor: string
  fontColor: string
  textAlign: TextAlign
  characterSpacing: number
  characterEffect: CharacterEffect
}

export type IMTitleFormatConfig = ImmutableObject<ITitleFormatConfig>

/** Bar Styling side-panel contract (Appearance section -> gear icon). */
export interface IBarStylingConfig {
  categoryPosition: CategoryPosition
  valuePosition: ValuePosition
  barHeight: BarHeight
  barCorners: BarCorners
  barSpacing: BarSpacing
  /** Effective row gap in px; seeded from the barSpacing preset but user-adjustable. */
  barSpacingPx: number
  /** Empty string means inherit from the theme. */
  categoryFontFamily: string
  categoryFontSize: number
  categoryFontColor: string
  valueFontFamily: string
  valueFontSize: number
  valueFontColor: string
  maxBarWidth: number
  primaryFillColor: string
  /** SINGLE keeps primaryFillColor; CONDITIONAL resolves the fill from primaryConditionalColors. */
  primaryBarColorMode: BarColorMode
  primaryConditionalColors: IConditionalColors
  primaryOutlineColor: string
  primaryOutlineWidth: number
  primaryLineStyle: BarLineStyle
  othersFillColor: string
  othersOutlineColor: string
  othersOutlineWidth: number
  othersLineStyle: BarLineStyle
}

export type IMBarStylingConfig = ImmutableObject<IBarStylingConfig>

/**
 * Configuration contract for Top-N Chart.
 * Minimum Core-required settings are: categoryField, aggregationType, valueField (conditional), topN.
 * The full Content panel (Header/Appearance/Tools sections) is owned by EXB 2A.1.
 * Data Actions are configured natively under Experience Builder's Action tab, not here.
 */
export interface IConfig {
  categoryField: string
  /** Required when aggregationType !== 'COUNT'. */
  valueField: string
  aggregationType: AggregationType
  sortDirection: SortDirection
  topN: number
  showOthers: boolean
  othersLabel: string
  includeNullCategory: boolean
  nullCategoryLabel: string
  /** Bounds how many groups are ever fetched/considered (also the Show All page size ceiling). */
  retentionLimit: number
  showAllEnabled: boolean
  searchEnabled: boolean
  searchMode: SearchMode
  /** Master switch: runtime rows become selectable and Apply publishes the selection trigger. */
  selectionEnabled: boolean
  selectionStyle: SelectionStyle
  headerTitle: string
  headerVisible: boolean
  titleFormat: ITitleFormatConfig
  /** Whether the row text shows the aggregate, the percentage, or both. */
  valueDisplay: ValueDisplay
  /** Whether aggregate values use compact decimal suffixes such as 55.7k. */
  abbreviateValues: boolean
  verticalSpacing: VerticalSpacing
  multiColumnWideMode: boolean
  barStyling: IBarStylingConfig
}

export type IMConfig = ImmutableObject<IConfig>

export const DEFAULT_TOP_N = 5
export const MIN_TOP_N = 3
export const MAX_TOP_N = 20
/** Record materialization cap for Data Actions. Native selection is uncapped and uses queryIds. */
export const DATA_ACTION_RECORD_CAP = 2000
export const DEFAULT_RETENTION_LIMIT = 50
export const SEARCH_DEBOUNCE_MS = 300

/** Fixed (non-configurable) negative-value bar color — no Bar Styling setting was requested for it. */
export const NEGATIVE_BAR_FILL_COLOR = '#d93025'
/** Fixed (non-configurable) track background color — no Bar Styling setting was requested for it. */
export const TRACK_FILL_COLOR = '#e0e0e0'

/** Row gap seeded when the user picks a Bar spacing preset. */
export const BAR_SPACING_PRESET_PX: Record<BarSpacing, number> = {
  COMPACT: 6,
  SPACIOUS: 14
}

/** Shared by the Title format and Bar styling panels; '' means inherit from the theme. */
export const FONT_FAMILIES = ['Avenir Next', 'Arial', 'Calibri', 'Georgia', 'Impact', 'Microsoft YaHei', 'Tahoma', 'Times New Roman', 'Verdana']

export const DEFAULT_BAR_STYLING: IBarStylingConfig = {
  categoryPosition: 'INLINE_LEFT',
  valuePosition: 'INLINE_RIGHT',
  barHeight: 'MEDIUM',
  barCorners: 'SOFT',
  barSpacing: 'COMPACT',
  barSpacingPx: 6,
  categoryFontFamily: '',
  categoryFontSize: 14,
  categoryFontColor: '',
  valueFontFamily: '',
  valueFontSize: 14,
  valueFontColor: '',
  maxBarWidth: 0,
  primaryFillColor: '#1a73e8',
  primaryBarColorMode: 'SINGLE',
  primaryConditionalColors: { basis: 'VALUE', breakpoints: [], colors: [] },
  primaryOutlineColor: '#1a73e8',
  primaryOutlineWidth: 0,
  primaryLineStyle: 'SOLID',
  othersFillColor: '#9e9e9e',
  othersOutlineColor: '#9e9e9e',
  othersOutlineWidth: 0,
  othersLineStyle: 'SOLID'
}

/** Esri-default-like starting point: plain paragraph text, no styling applied. */
const DEFAULT_TITLE_FORMAT: ITitleFormatConfig = {
  formatPreset: 'PARAGRAPH',
  fontFamily: 'Avenir Next',
  fontSize: FORMAT_PRESET_SIZE_MAP.PARAGRAPH,
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  highlightColor: '',
  fontColor: '',
  textAlign: 'LEFT',
  characterSpacing: 0,
  characterEffect: 'NONE'
}

const DEFAULT_CONFIG: IConfig = {
  categoryField: '',
  valueField: '',
  aggregationType: 'COUNT',
  sortDirection: 'DESC',
  topN: DEFAULT_TOP_N,
  showOthers: true,
  othersLabel: 'Others',
  includeNullCategory: true,
  nullCategoryLabel: '(No Value)',
  retentionLimit: DEFAULT_RETENTION_LIMIT,
  showAllEnabled: true,
  searchEnabled: true,
  searchMode: 'SERVER',
  selectionEnabled: true,
  selectionStyle: 'CHECKBOX',
  headerTitle: '',
  headerVisible: true,
  titleFormat: DEFAULT_TITLE_FORMAT,
  valueDisplay: 'VALUE_PERCENT',
  abbreviateValues: false,
  verticalSpacing: 'AUTO_DISTRIBUTE',
  multiColumnWideMode: false,
  barStyling: DEFAULT_BAR_STYLING
}

/**
 * Returns a full immutable config with defaults applied to any missing values.
 * barStyling is deep-merged so a partial side-panel edit never drops the rest of the defaults.
 */
export function getFullConfig (config: Partial<IConfig> | IMConfig | null | undefined): IMConfig {
  const plain = config ? { ...(config as Partial<IConfig>) } : {}
  const barStyling = { ...DEFAULT_BAR_STYLING, ...(plain.barStyling as Partial<IBarStylingConfig> || {}) }
  const titleFormat = { ...DEFAULT_TITLE_FORMAT, ...(plain.titleFormat as Partial<ITitleFormatConfig> || {}) }
  // Migrates the retired showPercent boolean.
  if (plain.valueDisplay === undefined && (plain as any).showPercent === false) {
    plain.valueDisplay = 'VALUE'
  }
  return Immutable({ ...DEFAULT_CONFIG, ...plain, barStyling, titleFormat })
}

/** Percentage is a share of the total, so it only applies to additive statistics. */
export function isPercentSupported (aggregationType: AggregationType): boolean {
  return aggregationType === 'COUNT' || aggregationType === 'SUM'
}

/**
 * Resolves the fill for a bar under conditional coloring.
 * Returns the color of the highest breakpoint the value reaches; below the first, the single fill applies.
 */
export function resolveConditionalColor (conditional: IConditionalColors, value: number | null | undefined, fallback: string): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return fallback
  const { breakpoints, colors } = conditional
  for (let i = breakpoints.length - 1; i >= 0; i--) {
    if (value >= breakpoints[i]) return colors[i] ?? fallback
  }
  return fallback
}

export function isAggregationRequiringValueField (aggregationType: AggregationType): boolean {
  return aggregationType !== 'COUNT'
}
