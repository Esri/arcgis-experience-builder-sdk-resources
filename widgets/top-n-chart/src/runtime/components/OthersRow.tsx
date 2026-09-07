import { React } from 'jimu-core'
import type { OthersBar } from '../state/types'
import type { IMBarStylingConfig, ValueDisplay } from '../../config'
import { trackHeightPx, cornerRadiusPx, cssLineStyle, resolveRowLayout, formatAggregateValue, formatValueText, textStyle, MIN_VISIBLE_FILL_PX } from '../style/barStyleUtils'

export interface OthersRowProps {
  bar: OthersBar
  maxAbsValue: number
  percent?: number
  valueDisplay: ValueDisplay
  abbreviateValues: boolean
  valueFormatter: Intl.NumberFormat
  barStyling: IMBarStylingConfig
}

/**
 * Others is always non-interactive: it has no real record identity and must
 * never be selectable, focus-targetable, or eligible for Data Actions.
 */
export const OthersRow = (props: OthersRowProps): React.ReactElement => {
  const { bar, maxAbsValue, percent, valueDisplay, abbreviateValues, valueFormatter, barStyling } = props
  const isAvailable = bar.available && bar.value !== null
  const displayValue = isAvailable ? formatAggregateValue(bar.value, valueFormatter, abbreviateValues) : 'Not available'
  const widthPercent = isAvailable && maxAbsValue > 0
    ? Math.min(100, (Math.abs(bar.value) / maxAbsValue) * 100)
    : 0
  const valueText = isAvailable ? formatValueText(displayValue, percent, valueDisplay) : displayValue
  const layout = resolveRowLayout(barStyling.categoryPosition, barStyling.valuePosition)

  const categoryEl = <span className="topn-chart-bar-label" style={textStyle(barStyling.categoryFontFamily, barStyling.categoryFontSize, barStyling.categoryFontColor)} title={bar.label}>{bar.label}</span>
  const valueEl = <span className="topn-chart-bar-value" style={textStyle(barStyling.valueFontFamily, barStyling.valueFontSize, barStyling.valueFontColor)}>{valueText}</span>

  const trackStyle: React.CSSProperties = {
    height: `${trackHeightPx(barStyling.barHeight)}px`,
    borderRadius: `${cornerRadiusPx(barStyling.barCorners)}px`,
    maxWidth: barStyling.maxBarWidth > 0 ? `${barStyling.maxBarWidth}px` : undefined
  }
  const fillStyle: React.CSSProperties = {
    width: `${widthPercent}%`,
    minWidth: widthPercent > 0 ? `${MIN_VISIBLE_FILL_PX}px` : undefined,
    borderRadius: `${cornerRadiusPx(barStyling.barCorners)}px`,
    backgroundColor: barStyling.othersFillColor,
    borderStyle: cssLineStyle(barStyling.othersLineStyle),
    borderWidth: `${barStyling.othersOutlineWidth}px`,
    borderColor: barStyling.othersOutlineColor
  }

  return (
    <li className="topn-chart-bar-row topn-chart-bar-row--others" aria-label={`${bar.label}: ${valueText}`}>
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
    </li>
  )
}
