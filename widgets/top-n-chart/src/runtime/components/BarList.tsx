import { React } from 'jimu-core'
import type { ChartBar } from '../state/types'
import type { IMConfig } from '../../config'
import { rowGapPx } from '../style/barStyleUtils'
import { BarRow } from './BarRow'
import { OthersRow } from './OthersRow'

export interface BarListProps {
  bars: ChartBar[]
  totalForPercent?: number
  selectable: boolean
  selection: Set<string | number>
  onToggle: (categoryValue: string | number | null) => void
  config: IMConfig
}

export const BarList = (props: BarListProps): React.ReactElement => {
  const { bars, totalForPercent, selectable, selection, onToggle, config } = props

  const maxAbsValue = bars.reduce((max, bar) => {
    const value = bar.kind === 'category' ? bar.value : (bar.value ?? 0)
    return Math.max(max, Math.abs(value))
  }, 0)

  const valueFormatter = React.useMemo(() => new Intl.NumberFormat(), [])
  const listStyle: React.CSSProperties = { gap: `${rowGapPx(config.barStyling.barSpacing, config.barStyling.barSpacingPx)}px` }
  // Conditional colors may need the percentage even when the text shows the raw value.
  const percentNeeded = config.valueDisplay !== 'VALUE' ||
    (config.barStyling.primaryBarColorMode === 'CONDITIONAL' && config.barStyling.primaryConditionalColors.basis === 'PERCENT')

  const isRadio = config.selectionStyle === 'RADIO'
  const selectionRole = isRadio ? 'radio' : 'checkbox'
  const containerRole = selectable ? (isRadio ? 'radiogroup' : 'group') : undefined

  // Others and the null bucket have no selectable identity, so they stay out of the navigation order.
  const navigableValues = React.useMemo(() => bars
    .filter(bar => bar.kind === 'category' && bar.categoryValue !== null)
    .map(bar => (bar as { categoryValue: string | number }).categoryValue),
  [bars])

  const [rovingValue, setRovingValue] = React.useState<string | number | null>(null)
  const [pendingFocus, setPendingFocus] = React.useState<string | number | null>(null)
  const rowRefs = React.useRef(new Map<string | number, HTMLLIElement>())

  React.useEffect(() => {
    if (pendingFocus === null) return
    rowRefs.current.get(pendingFocus)?.focus()
    setPendingFocus(null)
  }, [pendingFocus])

  // A radiogroup is a single tab stop: the selected option, else the last focused, else the first.
  const selectedNavigable = navigableValues.find(value => selection.has(value))
  const activeRovingValue = selectedNavigable ??
    (rovingValue !== null && navigableValues.includes(rovingValue) ? rovingValue : navigableValues[0])

  const navigate = (from: string | number, target: 'prev' | 'next' | 'home' | 'end'): void => {
    if (navigableValues.length === 0) return
    const current = navigableValues.indexOf(from)
    let next: string | number
    if (target === 'home') {
      next = navigableValues[0]
    } else if (target === 'end') {
      next = navigableValues[navigableValues.length - 1]
    } else {
      const delta = target === 'next' ? 1 : -1
      const index = (current + delta + navigableValues.length) % navigableValues.length
      next = navigableValues[index]
    }
    if (next === undefined) return
    // Radio semantics: moving the focus also moves the selection.
    onToggle(next)
    setRovingValue(next)
    setPendingFocus(next)
  }

  return (
    <ol
      className="topn-chart-bar-list"
      style={listStyle}
      role={containerRole}
      aria-label="Top-N categories"
    >
      {bars.map((bar, index) => {
        const barValue = bar.value
        // Share of total only; never derived from the rendered rows.
        const percent = !percentNeeded || !totalForPercent || totalForPercent <= 0 || barValue === null || barValue === undefined
          ? undefined
          : (barValue / totalForPercent) * 100

        if (bar.kind === 'others') {
          return (
            <OthersRow
              key="topn-others"
              bar={bar}
              maxAbsValue={maxAbsValue}
              percent={percent}
              valueDisplay={config.valueDisplay}
              abbreviateValues={config.abbreviateValues}
              valueFormatter={valueFormatter}
              barStyling={config.barStyling}
            />
          )
        }

        const key = bar.categoryValue === null ? `null-${index}` : String(bar.categoryValue)
        const rowSelectable = selectable && bar.categoryValue !== null
        // Checkbox lists keep every row tabbable; a radiogroup exposes only one.
        const rowTabIndex = !rowSelectable
          ? undefined
          : (isRadio ? (bar.categoryValue === activeRovingValue ? 0 : -1) : 0)
        return (
          <BarRow
            key={key}
            bar={bar}
            index={index}
            maxAbsValue={maxAbsValue}
            percent={percent}
            valueDisplay={config.valueDisplay}
            abbreviateValues={config.abbreviateValues}
            selectable={rowSelectable}
            selected={bar.categoryValue !== null && selection.has(bar.categoryValue)}
            onToggle={onToggle}
            valueFormatter={valueFormatter}
            barStyling={config.barStyling}
            selectionStyle={config.selectionStyle}
            selectionRole={selectionRole}
            rowTabIndex={rowTabIndex}
            onNavigate={isRadio && rowSelectable ? navigate : undefined}
            rowRef={(el) => {
              if (bar.categoryValue === null) return
              if (el) rowRefs.current.set(bar.categoryValue, el)
              else rowRefs.current.delete(bar.categoryValue)
            }}
          />
        )
      })}
    </ol>
  )
}
