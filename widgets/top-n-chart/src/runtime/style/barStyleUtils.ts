import type { BarHeight, BarCorners, BarSpacing, BarLineStyle, CategoryPosition, ValuePosition, ValueDisplay } from '../../config'
import type { React } from 'jimu-core'

export function trackHeightPx (barHeight: BarHeight): number {
  switch (barHeight) {
    case 'SMALL': return 6
    case 'LARGE': return 16
    default: return 10
  }
}

export function cornerRadiusPx (barCorners: BarCorners): number {
  switch (barCorners) {
    case 'SQUARE': return 0
    case 'ROUND': return 999
    default: return 5
  }
}

export function rowGapPx (barSpacing: BarSpacing, spacingPx?: number): number {
  if (typeof spacingPx === 'number' && spacingPx >= 0) return spacingPx
  return barSpacing === 'SPACIOUS' ? 14 : 6
}

export function cssLineStyle (lineStyle: BarLineStyle): 'solid' | 'dashed' | 'dotted' {
  return lineStyle === 'DASHED' ? 'dashed' : (lineStyle === 'DOTTED' ? 'dotted' : 'solid')
}

/** Any non-zero value keeps a visible sliver, so "very small" never reads as "no data". */
export const MIN_VISIBLE_FILL_PX = 3

/** Empty family/color means inherit, so those properties stay undefined. */
export function textStyle (fontFamily: string, fontSize: number, color: string): React.CSSProperties {
  return {
    fontFamily: fontFamily || undefined,
    fontSize: fontSize ? `${fontSize}px` : undefined,
    color: color || undefined
  }
}

export function formatPercentLabel (percent?: number): string {
  if (percent === undefined) return ''
  if (percent > 0 && percent < 0.1) return ' (<0.1%)'
  return ` (${percent.toFixed(1)}%)`
}

const COMPACT_VALUE_SUFFIXES = ['k', 'M', 'B', 'T'] as const

const roundCompactValue = (value: number): number => {
  const roundedMagnitude = Math.round((Math.abs(value) + Number.EPSILON) * 10) / 10
  return Math.sign(value) * roundedMagnitude
}

/** Formats an aggregate with decimal compact suffixes while preserving the active locale. */
export function formatAggregateValue (value: number, valueFormatter: Intl.NumberFormat, abbreviateValues: boolean): string {
  const absoluteValue = Math.abs(value)
  if (!abbreviateValues || !Number.isFinite(value) || absoluteValue < 1000) {
    return valueFormatter.format(value)
  }

  let suffixIndex = Math.min(Math.floor(Math.log10(absoluteValue) / 3) - 1, COMPACT_VALUE_SUFFIXES.length - 1)
  let divisor = 1000 ** (suffixIndex + 1)
  let scaledValue = value / divisor
  let roundedValue = roundCompactValue(scaledValue)

  if (Math.abs(roundedValue) >= 1000 && suffixIndex < COMPACT_VALUE_SUFFIXES.length - 1) {
    suffixIndex += 1
    divisor *= 1000
    scaledValue = value / divisor
    roundedValue = roundCompactValue(scaledValue)
  }

  const compactFormatter = new Intl.NumberFormat(valueFormatter.resolvedOptions().locale, {
    maximumFractionDigits: 1
  })
  return `${compactFormatter.format(roundedValue)}${COMPACT_VALUE_SUFFIXES[suffixIndex]}`
}

/** Builds the row's value text for the configured display mode. */
export function formatValueText (formattedValue: string, percent: number | undefined, valueDisplay: ValueDisplay): string {
  if (valueDisplay === 'PERCENT' && percent !== undefined) {
    return percent > 0 && percent < 0.1 ? '<0.1%' : `${percent.toFixed(1)}%`
  }
  if (valueDisplay === 'VALUE') return formattedValue
  return `${formattedValue}${formatPercentLabel(percent)}`
}

export interface RowLayout {
  categoryOnTop: boolean
  categoryInline: boolean
  categoryOnBottom: boolean
  valueOnTop: boolean
  valueInline: boolean
  valueInside: boolean
  valueOnBottom: boolean
}

/** Resolves where the category label / value text render relative to the track. */
export function resolveRowLayout (categoryPosition: CategoryPosition, valuePosition: ValuePosition): RowLayout {
  return {
    categoryOnTop: categoryPosition === 'TOP_LEFT',
    categoryInline: categoryPosition === 'INLINE_LEFT',
    categoryOnBottom: categoryPosition === 'BOTTOM_LEFT',
    valueOnTop: valuePosition === 'TOP_RIGHT',
    valueInline: valuePosition === 'INLINE_RIGHT',
    valueInside: valuePosition === 'INSIDE_BAR',
    valueOnBottom: valuePosition === 'BOTTOM_RIGHT'
  }
}
