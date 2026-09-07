import { React, classNames } from 'jimu-core'
import type { CategoryBar } from '../state/types'
import type { IMBarStylingConfig, SelectionStyle, ValueDisplay } from '../../config'
import { NEGATIVE_BAR_FILL_COLOR, resolveConditionalColor } from '../../config'
import { trackHeightPx, cornerRadiusPx, cssLineStyle, resolveRowLayout, formatAggregateValue, formatPercentLabel, formatValueText, textStyle, MIN_VISIBLE_FILL_PX } from '../style/barStyleUtils'

export interface BarRowProps {
  bar: CategoryBar
  index: number
  maxAbsValue: number
  percent?: number
  valueDisplay: ValueDisplay
  abbreviateValues: boolean
  selectable: boolean
  selected: boolean
  onToggle: (categoryValue: string | number | null) => void
  valueFormatter: Intl.NumberFormat
  barStyling: IMBarStylingConfig
  selectionStyle: SelectionStyle
  /** Derived from selectionStyle: radio for single-select, checkbox otherwise. */
  selectionRole?: 'checkbox' | 'radio'
  /** Roving tabindex value; -1 for non-active options in a radiogroup. */
  rowTabIndex?: number
  /** Supplied only for radio rows, which move selection with the arrow keys. */
  onNavigate?: (from: string | number, target: 'prev' | 'next' | 'home' | 'end') => void
  rowRef?: (el: HTMLLIElement | null) => void
}

export const BarRow = (props: BarRowProps): React.ReactElement => {
  const { bar, maxAbsValue, percent, valueDisplay, abbreviateValues, selectable, selected, onToggle, valueFormatter, barStyling, selectionStyle, selectionRole = 'checkbox', rowTabIndex, onNavigate, rowRef } = props
  const isNegative = bar.value < 0
  const widthPercent = maxAbsValue > 0 ? Math.min(100, (Math.abs(bar.value) / maxAbsValue) * 100) : 0
  const formattedValue = formatAggregateValue(bar.value, valueFormatter, abbreviateValues)
  const percentLabel = formatPercentLabel(percent)
  const valueText = formatValueText(formattedValue, percent, valueDisplay)
  const ariaLabel = `${bar.label}: ${valueText}`
  const layout = resolveRowLayout(barStyling.categoryPosition, barStyling.valuePosition)

  const handleActivate = (): void => {
    if (selectable) onToggle(bar.categoryValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!selectable) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle(bar.categoryValue)
      return
    }
    if (!onNavigate || bar.categoryValue === null) return
    const target = e.key === 'ArrowDown' || e.key === 'ArrowRight'
      ? 'next'
      : (e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? 'prev'
          : (e.key === 'Home' ? 'home' : (e.key === 'End' ? 'end' : null)))
    if (!target) return
    e.preventDefault()
    onNavigate(bar.categoryValue, target)
  }

  const categoryEl = <span className="topn-chart-bar-label" style={textStyle(barStyling.categoryFontFamily, barStyling.categoryFontSize, barStyling.categoryFontColor)} title={bar.label}>{bar.label}</span>
  const valueEl = <span className="topn-chart-bar-value" style={textStyle(barStyling.valueFontFamily, barStyling.valueFontSize, barStyling.valueFontColor)}>{valueText}</span>

  const conditional = barStyling.primaryConditionalColors
  const conditionalInput = conditional?.basis === 'PERCENT' ? percent : bar.value
  const primaryFill = barStyling.primaryBarColorMode === 'CONDITIONAL' && conditional
    ? resolveConditionalColor(conditional as any, conditionalInput, barStyling.primaryFillColor)
    : barStyling.primaryFillColor

  const trackStyle: React.CSSProperties = {
    height: `${trackHeightPx(barStyling.barHeight)}px`,
    borderRadius: `${cornerRadiusPx(barStyling.barCorners)}px`,
    maxWidth: barStyling.maxBarWidth > 0 ? `${barStyling.maxBarWidth}px` : undefined
  }
  const fillStyle: React.CSSProperties = {
    width: `${widthPercent}%`,
    minWidth: bar.value !== 0 ? `${MIN_VISIBLE_FILL_PX}px` : undefined,
    borderRadius: `${cornerRadiusPx(barStyling.barCorners)}px`,
    backgroundColor: isNegative ? NEGATIVE_BAR_FILL_COLOR : primaryFill,
    borderStyle: cssLineStyle(barStyling.primaryLineStyle),
    borderWidth: `${barStyling.primaryOutlineWidth}px`,
    borderColor: barStyling.primaryOutlineColor
  }

  return (
    <li
      ref={rowRef}
      className={classNames('topn-chart-bar-row', 'topn-chart-bar-row--with-indicator', { 'topn-chart-bar-row--selected': selected, 'topn-chart-bar-row--selectable': selectable })}
      role={selectable ? selectionRole : undefined}
      tabIndex={selectable ? (rowTabIndex ?? 0) : undefined}
      aria-checked={selectable ? selected : undefined}
      aria-label={ariaLabel}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      {selectable && (
        <span
          className={classNames('topn-chart-select-indicator', `topn-chart-select-indicator--${selectionStyle.toLowerCase()}`, { 'topn-chart-select-indicator--selected': selected })}
          aria-hidden="true"
        />
      )}
      <div className="topn-chart-bar-row-content">
        {(layout.categoryOnTop || layout.valueOnTop) && (
          <div className="topn-chart-bar-outer-line">
            {layout.categoryOnTop && categoryEl}
            {layout.valueOnTop && valueEl}
          </div>
        )}
        <div className="topn-chart-bar-main-line">
          {layout.categoryInline && categoryEl}
          <span className="topn-chart-bar-track" style={trackStyle} aria-hidden="true">
            <span className="topn-chart-bar-fill" style={fillStyle} />
            {layout.valueInside && <span className="topn-chart-bar-value-inside">{valueText}</span>}
          </span>
          {layout.valueInline && valueEl}
        </div>
        {(layout.categoryOnBottom || layout.valueOnBottom) && (
          <div className="topn-chart-bar-outer-line">
            {layout.categoryOnBottom && categoryEl}
            {layout.valueOnBottom && valueEl}
          </div>
        )}
      </div>
    </li>
  )
}
