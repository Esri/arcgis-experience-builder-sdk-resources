import { React, hooks } from 'jimu-core'
import { NumericInput, Select, CollapsablePanel, Button, Icon } from 'jimu-ui'
import plusIcon from 'jimu-icons/svg/outlined/editor/plus.svg'
import trashIcon from 'jimu-icons/svg/outlined/editor/trash.svg'
import { SidePopper, SettingRow } from 'jimu-ui/advanced/setting-components'
import { LineStyleSelector } from 'jimu-ui/advanced/style-setting-components'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import { BAR_SPACING_PRESET_PX, DEFAULT_BAR_STYLING, FONT_FAMILIES } from '../../config'
import type { IBarStylingConfig, CategoryPosition, ValuePosition, BarHeight, BarCorners, BarSpacing, BarLineStyle, BarColorMode, ConditionalBasis, IConditionalColors } from '../../config'
import defaultMessages from '../translations/default'
import '../setting.css'

export interface BarStylingSidePanelProps {
  isOpen: boolean
  toggle: () => void
  trigger: HTMLElement | HTMLElement[]
  widgetId: string
  barStyling: IBarStylingConfig
  onChange: (next: Partial<IBarStylingConfig>) => void
}

/**
 * Slide-out secondary panel for detailed bar geometry/color/line styling,
 * opened from the Appearance section's "Bar Styling" gear icon. Geometry
 * (height/corners/spacing/max width) is shared/common — Others never gets
 * its own geometry controls, only fill/outline/line-style.
 * isOpen/toggle are transient Builder UI state, never persisted to config.
 */
export const BarStylingSidePanel = (props: BarStylingSidePanelProps): React.ReactElement => {
  const { isOpen, toggle, trigger, widgetId, barStyling, onChange } = props
  const translate = hooks.useTranslation(defaultMessages)
  const [openGroup, setOpenGroup] = React.useState<'text' | 'geometry' | 'bars' | null>('text')

  const resetSection = (keys: Array<keyof IBarStylingConfig>): void => {
    const next: Partial<IBarStylingConfig> = {}
    keys.forEach(key => { (next as any)[key] = DEFAULT_BAR_STYLING[key] })
    onChange(next)
  }

  const renderResetRow = (keys: Array<keyof IBarStylingConfig>): React.ReactElement => (
    <div className="topn-chart-reset-row">
      <Button type="secondary" size="sm" onClick={() => resetSection(keys)}>{translate('resetSectionLabel')}</Button>
    </div>
  )

  const renderTextStyleGroup = (
    title: string,
    familyKey: 'categoryFontFamily' | 'valueFontFamily',
    sizeKey: 'categoryFontSize' | 'valueFontSize',
    colorKey: 'categoryFontColor' | 'valueFontColor'
  ): React.ReactElement => (
    <React.Fragment>
      <div className="topn-chart-group-title">{title}</div>
      <SettingRow label={translate('fontFamilyLabel')} flow="wrap">
        <Select
          value={barStyling[familyKey]}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ [familyKey]: e.target.value })}
          className="topn-chart-full-width"
        >
          <option value="">{translate('fontFamilyDefault')}</option>
          {FONT_FAMILIES.map(font => <option key={font} value={font}>{font}</option>)}
        </Select>
      </SettingRow>
      <SettingRow label={translate('fontSizeLabel')} flow="no-wrap">
        <NumericInput
          className="topn-chart-compact-numeric"
          value={barStyling[sizeKey]}
          onChange={(value: number | undefined) => onChange({ [sizeKey]: value ?? DEFAULT_BAR_STYLING[sizeKey] })}
          min={8}
          max={48}
          step={1}
        />
      </SettingRow>
      <SettingRow label={translate('fontColorLabel')} flow="no-wrap">
        <ThemeColorPicker
          value={barStyling[colorKey]}
          onChange={(color: string) => onChange({ [colorKey]: color })}
          aria-label={`${title} ${translate('fontColorLabel')}`}
        />
      </SettingRow>
    </React.Fragment>
  )

  const conditionalColors = barStyling.primaryConditionalColors

  const updateConditional = (next: Partial<IConditionalColors>): void => {
    onChange({
      primaryConditionalColors: {
        basis: conditionalColors.basis,
        breakpoints: [...conditionalColors.breakpoints],
        colors: [...conditionalColors.colors],
        ...next
      }
    })
  }

  /** Keeps breakpoints ascending and de-duplicated, carrying each range's color with it. */
  const commitBreakpoint = (index: number, raw: number | undefined): void => {
    if (raw === undefined || !Number.isFinite(raw)) return
    const paired = conditionalColors.breakpoints.map((bp, i) => ({ bp: i === index ? raw : bp, color: conditionalColors.colors[i] }))
    paired.sort((a, b) => a.bp - b.bp)
    const breakpoints: number[] = []
    const colors: string[] = []
    paired.forEach(entry => {
      // A duplicate would create an empty range, so collapse it away.
      if (breakpoints.length > 0 && entry.bp === breakpoints[breakpoints.length - 1]) return
      breakpoints.push(entry.bp)
      colors.push(entry.color ?? DEFAULT_BAR_STYLING.primaryFillColor)
    })
    updateConditional({ breakpoints, colors })
  }

  const addRange = (): void => {
    const last = conditionalColors.breakpoints[conditionalColors.breakpoints.length - 1]
    const nextBreakpoint = last === undefined ? 0 : last + 1
    updateConditional({
      breakpoints: [...conditionalColors.breakpoints, nextBreakpoint],
      colors: [...conditionalColors.colors.slice(0, conditionalColors.breakpoints.length), DEFAULT_BAR_STYLING.primaryFillColor]
    })
  }

  const removeRange = (index: number): void => {
    if (conditionalColors.breakpoints.length === 0) return
    const breakpoints = conditionalColors.breakpoints.filter((_, i) => i !== index)
    const colors = conditionalColors.colors.filter((_, i) => i !== index)
    updateConditional({ breakpoints, colors })
  }

  const setRangeColor = (index: number, next: string): void => {
    const colors = [...conditionalColors.colors]
    colors[index] = next
    updateConditional({ colors })
  }

  const renderConditionalColors = (): React.ReactElement => (
    <React.Fragment>
      <SettingRow label={translate('conditionalBasisLabel')} flow="wrap">
        <Select
          value={conditionalColors.basis}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateConditional({ basis: e.target.value as ConditionalBasis })}
          className="topn-chart-full-width"
        >
          <option value="VALUE">{translate('conditionalBasisValue')}</option>
          <option value="PERCENT">{translate('conditionalBasisPercent')}</option>
        </Select>
      </SettingRow>
      {conditionalColors.basis === 'PERCENT' && (
        <p className="topn-chart-help-text">{translate('conditionalPercentHint')}</p>
      )}
      <div className="topn-chart-group-title">{translate('colorRangesLabel')}</div>
      {conditionalColors.breakpoints.length === 0 && (
        <p className="topn-chart-help-text">{translate('noRangesHint')}</p>
      )}
      {conditionalColors.breakpoints.map((breakpoint, index) => (
        <div className="topn-chart-range-row" key={`range-${index}`}>
          <span className="topn-chart-range-op" aria-hidden="true">≥</span>
          <NumericInput
            className="topn-chart-range-numeric"
            value={breakpoint}
            onAcceptValue={(value: number | undefined) => commitBreakpoint(index, value)}
            aria-label={translate('rangeLowerBoundLabel', { index: index + 1 })}
          />
          <ThemeColorPicker
            value={conditionalColors.colors[index] ?? DEFAULT_BAR_STYLING.primaryFillColor}
            onChange={(color: string) => setRangeColor(index, color)}
            aria-label={translate('rangeColorLabel', { index: index + 1 })}
          />
          <Button
            type="tertiary"
            size="sm"
            icon
            onClick={() => removeRange(index)}
            title={translate('removeRangeLabel')}
            aria-label={translate('removeRangeLabel')}
          >
            <Icon icon={trashIcon} size={14} />
          </Button>
        </div>
      ))}
      <div className="topn-chart-reset-row">
        <Button type="secondary" size="sm" onClick={addRange}>
          <Icon icon={plusIcon} size={14} />
          <span>{translate('addRangeLabel')}</span>
        </Button>
      </div>
    </React.Fragment>
  )

  const renderBarGroup = (
    title: string,
    fillKey: 'primaryFillColor' | 'othersFillColor',
    outlineWidthKey: 'primaryOutlineWidth' | 'othersOutlineWidth',
    outlineColorKey: 'primaryOutlineColor' | 'othersOutlineColor',
    lineStyleKey: 'primaryLineStyle' | 'othersLineStyle',
    supportsConditional = false
  ): React.ReactElement => {
    const outlineWidth = barStyling[outlineWidthKey]
    const conditional = supportsConditional && barStyling.primaryBarColorMode === 'CONDITIONAL'
    return (
      <React.Fragment>
        <div className="topn-chart-group-title">{title}</div>
        {supportsConditional && (
          <SettingRow label={translate('barColorModeLabel')} flow="wrap">
            <Select
              value={barStyling.primaryBarColorMode}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ primaryBarColorMode: e.target.value as BarColorMode })}
              className="topn-chart-full-width"
            >
              <option value="SINGLE">{translate('barColorSingle')}</option>
              <option value="CONDITIONAL">{translate('barColorConditional')}</option>
            </Select>
          </SettingRow>
        )}
        {conditional ? renderConditionalColors() : (
          <SettingRow label={translate('fillLabel')} flow="no-wrap">
            <ThemeColorPicker
              value={barStyling[fillKey]}
              onChange={(color: string) => onChange({ [fillKey]: color })}
              aria-label={`${title} ${translate('fillLabel')}`}
            />
          </SettingRow>
        )}
        <SettingRow label={translate('outlineWidthLabel')} flow="no-wrap">
          <NumericInput
            className="topn-chart-compact-numeric"
            value={outlineWidth}
            onChange={(value: number | undefined) => onChange({ [outlineWidthKey]: value ?? 0 })}
            min={0}
            max={10}
            step={1}
          />
        </SettingRow>
        {outlineWidth > 0 && (
          <React.Fragment>
            <SettingRow label={translate('outlineColorLabel')} flow="no-wrap">
              <ThemeColorPicker
                value={barStyling[outlineColorKey]}
                onChange={(color: string) => onChange({ [outlineColorKey]: color })}
                aria-label={`${title} ${translate('outlineColorLabel')}`}
              />
            </SettingRow>
            <SettingRow label={translate('outlineStyleLabel')} flow="wrap">
              <LineStyleSelector
                type="normal"
                value={barStyling[lineStyleKey].toLowerCase() as any}
                onChange={(value: string) => onChange({ [lineStyleKey]: value.toUpperCase() as BarLineStyle })}
              />
            </SettingRow>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }

  return (
    <SidePopper
      position="right"
      isOpen={isOpen}
      toggle={toggle}
      trigger={trigger}
      widgetId={widgetId}
      title={translate('barStylingPanelTitle')}
      aria-label={translate('barStylingPanelTitle')}
    >
      <div className="topn-chart-setting bar-styling-side-panel">
        <div className="topn-chart-sections">
        <div className="topn-chart-section">
        <CollapsablePanel
          label={<span className="topn-chart-section-label">{translate('textPlacementGroup')}</span>}
          bottomLine
          isOpen={openGroup === 'text'}
          onRequestOpen={() => setOpenGroup('text')}
          onRequestClose={() => setOpenGroup(prev => (prev === 'text' ? null : prev))}
        >
        <div className="topn-chart-section-content">
        <SettingRow label={translate('categoryPositionLabel')} flow="wrap">
          <Select
            value={barStyling.categoryPosition}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ categoryPosition: e.target.value as CategoryPosition })}
            className="topn-chart-full-width"
          >
            <option value="TOP_LEFT">{translate('positionTopLeft')}</option>
            <option value="INLINE_LEFT">{translate('positionInlineLeft')}</option>
            <option value="BOTTOM_LEFT">{translate('positionBottomLeft')}</option>
          </Select>
        </SettingRow>
        <SettingRow label={translate('valuePositionLabel')} flow="wrap">
          <Select
            value={barStyling.valuePosition}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ valuePosition: e.target.value as ValuePosition })}
            className="topn-chart-full-width"
          >
            <option value="TOP_RIGHT">{translate('positionTopRight')}</option>
            <option value="INLINE_RIGHT">{translate('positionInlineRight')}</option>
            <option value="INSIDE_BAR">{translate('positionInsideBar')}</option>
            <option value="BOTTOM_RIGHT">{translate('positionBottomRight')}</option>
          </Select>
        </SettingRow>
        {renderTextStyleGroup(translate('categoryTextGroup'), 'categoryFontFamily', 'categoryFontSize', 'categoryFontColor')}
        {renderTextStyleGroup(translate('valueTextGroup'), 'valueFontFamily', 'valueFontSize', 'valueFontColor')}
        {renderResetRow([
          'categoryPosition', 'valuePosition',
          'categoryFontFamily', 'categoryFontSize', 'categoryFontColor',
          'valueFontFamily', 'valueFontSize', 'valueFontColor'
        ])}
        </div>
        </CollapsablePanel>
        </div>

        <div className="topn-chart-section">
        <CollapsablePanel
          label={<span className="topn-chart-section-label">{translate('geometryGroup')}</span>}
          bottomLine
          isOpen={openGroup === 'geometry'}
          onRequestOpen={() => setOpenGroup('geometry')}
          onRequestClose={() => setOpenGroup(prev => (prev === 'geometry' ? null : prev))}
        >
        <div className="topn-chart-section-content">
        <SettingRow label={translate('barHeightLabel')} flow="wrap">
          <Select
            value={barStyling.barHeight}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ barHeight: e.target.value as BarHeight })}
            className="topn-chart-full-width"
          >
            <option value="SMALL">{translate('heightSmall')}</option>
            <option value="MEDIUM">{translate('heightMedium')}</option>
            <option value="LARGE">{translate('heightLarge')}</option>
          </Select>
        </SettingRow>
        <SettingRow label={translate('barCornersLabel')} flow="wrap">
          <Select
            value={barStyling.barCorners}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ barCorners: e.target.value as BarCorners })}
            className="topn-chart-full-width"
          >
            <option value="SQUARE">{translate('cornersSquare')}</option>
            <option value="SOFT">{translate('cornersSoft')}</option>
            <option value="ROUND">{translate('cornersRound')}</option>
          </Select>
        </SettingRow>
        <SettingRow label={translate('barSpacingLabel')} flow="wrap">
          <div className="topn-chart-inline-pair">
            <div className="topn-chart-inline-pair-grow">
              <Select
                value={barStyling.barSpacing}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const preset = e.target.value as BarSpacing
                  onChange({ barSpacing: preset, barSpacingPx: BAR_SPACING_PRESET_PX[preset] })
                }}
                className="topn-chart-full-width"
              >
                <option value="COMPACT">{translate('barSpacingCompact')}</option>
                <option value="SPACIOUS">{translate('barSpacingSpacious')}</option>
              </Select>
            </div>
            <NumericInput
              className="topn-chart-compact-numeric"
              value={barStyling.barSpacingPx}
              onChange={(value: number | undefined) => onChange({ barSpacingPx: value ?? BAR_SPACING_PRESET_PX[barStyling.barSpacing] })}
              min={0}
              max={64}
              step={1}
              aria-label={translate('barSpacingPxLabel')}
              title={translate('barSpacingPxLabel')}
            />
          </div>
        </SettingRow>
        <SettingRow label={translate('maxBarWidthLabel')} flow="no-wrap">
          <NumericInput
            className="topn-chart-compact-numeric"
            value={barStyling.maxBarWidth}
            onChange={(value: number | undefined) => onChange({ maxBarWidth: value ?? 0 })}
            min={0}
            max={2000}
            step={10}
          />
        </SettingRow>
        {renderResetRow(['barHeight', 'barCorners', 'barSpacing', 'barSpacingPx', 'maxBarWidth'])}
        </div>
        </CollapsablePanel>
        </div>

        <div className="topn-chart-section">
        <CollapsablePanel
          label={<span className="topn-chart-section-label">{translate('barsGroup')}</span>}
          isOpen={openGroup === 'bars'}
          onRequestOpen={() => setOpenGroup('bars')}
          onRequestClose={() => setOpenGroup(prev => (prev === 'bars' ? null : prev))}
        >
        <div className="topn-chart-section-content">
          {renderBarGroup(translate('primaryBarGroup'), 'primaryFillColor', 'primaryOutlineWidth', 'primaryOutlineColor', 'primaryLineStyle', true)}
          {renderBarGroup(translate('othersBarGroup'), 'othersFillColor', 'othersOutlineWidth', 'othersOutlineColor', 'othersLineStyle')}
          {renderResetRow([
            'primaryFillColor', 'primaryBarColorMode', 'primaryConditionalColors',
            'primaryOutlineColor', 'primaryOutlineWidth', 'primaryLineStyle',
            'othersFillColor', 'othersOutlineColor', 'othersOutlineWidth', 'othersLineStyle'
          ])}
        </div>
        </CollapsablePanel>
        </div>
        </div>
      </div>
    </SidePopper>
  )
}

