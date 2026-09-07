import {
  DataSourceTypes,
  Immutable,
  React,
  hooks,
  type IMFieldSchema,
  JimuFieldType,
  type UseDataSource
} from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { NumericInput, Select, Switch, TextInput, Button, CollapsablePanel, Tooltip, Label, Radio } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import './setting.css'
import {
  getFullConfig,
  isAggregationRequiringValueField,
  isPercentSupported,
  MIN_TOP_N,
  MAX_TOP_N,
  type IMConfig,
  type IBarStylingConfig,
  type ITitleFormatConfig,
  type AggregationType,
  type SortDirection,
  type SearchMode,
  type ValueDisplay,
  type VerticalSpacing,
  type SelectionStyle
} from '../config'
import { BarStylingSidePanel } from './setting-panels/bar-style-side-panel'
import { TitleFormatSidePanel } from './setting-panels/title-format-side-panel'
import defaultMessages from './translations/default'

const { useRef, useState } = React

/**
 * Complete Builder Content panel: exactly 4 collapsible sections (Data, Header,
 * Appearance, Tools), following native ExB 1.20 settings density (SettingRow's
 * built-in `label` + `flow`, CollapsablePanel for progressive disclosure).
 * Data Actions are intentionally NOT configured here — handled natively under
 * Experience Builder's Action tab. Appearance stays a custom section rather
 * than the framework's native Style tab (generic background/border panel,
 * not a per-widget extension point for bar colors/geometry).
 */
const TopNChartSetting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { config: partialConfig, id, onSettingChange, useDataSources } = props
  const config = getFullConfig(partialConfig)
  const translate = hooks.useTranslation(defaultMessages)
  const [isBarStylingOpen, setIsBarStylingOpen] = useState(false)
  const barStylingTriggerRef = useRef<HTMLButtonElement>(null)
  const [isTitleFormatOpen, setIsTitleFormatOpen] = useState(false)
  const titleFormatTriggerRef = useRef<HTMLButtonElement>(null)
  // Accordion behavior: only one of Data/Header/Appearance/Tools may be expanded at a time.
  const [openSection, setOpenSection] = useState<'data' | 'header' | 'appearance' | 'tools' | null>('data')

  const setConfigValue = <K extends keyof IMConfig>(key: K, value: IMConfig[K]): void => {
    onSettingChange({ id, config: config.set(key, value) })
  }

  const handleBarStylingChange = (patch: Partial<IBarStylingConfig>): void => {
    const nextBarStyling = { ...config.barStyling, ...patch }
    onSettingChange({ id, config: config.set('barStyling', nextBarStyling) })
  }

  const handleTitleFormatChange = (patch: Partial<ITitleFormatConfig>): void => {
    const nextTitleFormat = { ...config.titleFormat, ...patch }
    onSettingChange({ id, config: config.set('titleFormat', nextTitleFormat) })
  }

  const handleTitleFormatReset = (): void => {
    onSettingChange({ id, config: config.set('titleFormat', getFullConfig(null).titleFormat) })
  }

  const handleDataSourceChange = (newUseDataSources: UseDataSource[]): void => {
    onSettingChange({ id, useDataSources: newUseDataSources })
  }

  const handleCategoryFieldChange = (fields: IMFieldSchema[]): void => {
    setConfigValue('categoryField', fields[0]?.name ?? '')
  }

  const handleValueFieldChange = (fields: IMFieldSchema[]): void => {
    setConfigValue('valueField', fields[0]?.name ?? '')
  }

  const handleAggregationChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setConfigValue('aggregationType', e.target.value as AggregationType)
  }

  const handleSortDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setConfigValue('sortDirection', e.target.value as SortDirection)
  }

  const handleTopNChange = (value: number | undefined): void => {
    if (value === undefined) return
    setConfigValue('topN', Math.min(MAX_TOP_N, Math.max(MIN_TOP_N, Math.round(value))))
  }

  const topNHelp = translate('topNHelp', { min: MIN_TOP_N, max: MAX_TOP_N })

  const handleRetentionLimitChange = (value: number | undefined): void => {
    if (value === undefined) return
    setConfigValue('retentionLimit', value)
  }

  const handleSearchModeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setConfigValue('searchMode', e.target.value as SearchMode)
  }

  const handleVerticalSpacingChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setConfigValue('verticalSpacing', e.target.value as VerticalSpacing)
  }

  const handleSelectionStyleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setConfigValue('selectionStyle', e.target.value as SelectionStyle)
  }

  const fieldSelectorProps = {
    useDataSources: Immutable(useDataSources || []),
    isDataSourceDropDownHidden: true,
    isMultiple: false,
    useDropdown: true,
    widgetId: id
  }

  const requiresValueField = isAggregationRequiringValueField(config.aggregationType)
  const percentSupported = isPercentSupported(config.aggregationType)

  return (
    <div className="topn-chart-setting">
      <div className="topn-chart-setting-datasource">
        <DataSourceSelector
          types={Immutable([DataSourceTypes.FeatureLayer])}
          useDataSources={Immutable(useDataSources || [])}
          onChange={handleDataSourceChange}
          widgetId={id}
          mustUseDataSource
        />
      </div>

      <div className="topn-chart-sections">
      <div className="topn-chart-section">
      <CollapsablePanel
        label={<span className="topn-chart-section-label">{translate('dataSectionLabel')}</span>}
        bottomLine
        isOpen={openSection === 'data'}
        onRequestOpen={() => setOpenSection('data')}
        onRequestClose={() => setOpenSection(prev => (prev === 'data' ? null : prev))}
      >
      <div className="topn-chart-section-content">
        <SettingRow label={translate('categoryFieldLabel')} flow="wrap">
          <FieldSelector {...fieldSelectorProps}
            types={Immutable([JimuFieldType.String, JimuFieldType.Number, JimuFieldType.Date])}
            onChange={handleCategoryFieldChange}
            selectedFields={Immutable(config.categoryField ? [config.categoryField] : [])}
            aria-label={translate('categoryFieldLabel')}
          />
        </SettingRow>
        <SettingRow
          label={translate('valueFieldLabel')}
          flow="wrap"
          className={requiresValueField ? '' : 'topn-chart-row--disabled'}
        >
          <FieldSelector {...fieldSelectorProps}
            types={Immutable([JimuFieldType.Number])}
            onChange={handleValueFieldChange}
            selectedFields={Immutable(config.valueField ? [config.valueField] : [])}
            aria-label={translate('valueFieldLabel')}
          />
        </SettingRow>
        <SettingRow label={translate('aggregationLabel')} flow="wrap">
          <Select value={config.aggregationType} onChange={handleAggregationChange} className="topn-chart-full-width">
            <option value="COUNT">{translate('aggCount')}</option>
            <option value="SUM">{translate('aggSum')}</option>
            <option value="AVG">{translate('aggAvg')}</option>
            <option value="MIN">{translate('aggMin')}</option>
            <option value="MAX">{translate('aggMax')}</option>
          </Select>
        </SettingRow>
        <SettingRow label={translate('sortDirectionLabel')} flow="wrap">
          <Select value={config.sortDirection} onChange={handleSortDirectionChange} className="topn-chart-full-width">
            <option value="DESC">{translate('sortHighest')}</option>
            <option value="ASC">{translate('sortLowest')}</option>
          </Select>
        </SettingRow>
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('topNLabel')}
              <Tooltip title={topNHelp} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={topNHelp}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="no-wrap"
        >
          <NumericInput className="topn-chart-compact-numeric" value={config.topN} onChange={handleTopNChange} min={MIN_TOP_N} max={MAX_TOP_N} step={1} />
        </SettingRow>
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('maxCategoriesLabel')}
              <Tooltip title={translate('maxCategoriesHelp')} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={translate('maxCategoriesHelp')}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="no-wrap"
        >
          <NumericInput className="topn-chart-compact-numeric" value={config.retentionLimit} onChange={handleRetentionLimitChange} min={5} max={500} step={5} />
        </SettingRow>
      </div>
      </CollapsablePanel>
      </div>

      <div className="topn-chart-section">
      <CollapsablePanel
        label={<span className="topn-chart-section-label">{translate('headerSectionLabel')}</span>}
        bottomLine
        isOpen={openSection === 'header'}
        onRequestOpen={() => setOpenSection('header')}
        onRequestClose={() => setOpenSection(prev => (prev === 'header' ? null : prev))}
      >
      <div className="topn-chart-section-content">
        <SettingRow label={translate('showHeaderLabel')} flow="no-wrap">
          <Switch checked={config.headerVisible} onChange={(e: any) => setConfigValue('headerVisible', e.target.checked)} />
        </SettingRow>
        {config.headerVisible && (
          <SettingRow label={translate('headerTitleLabel')} flow="wrap">
            <div className="topn-chart-inline-pair">
              <TextInput
                className="topn-chart-inline-pair-grow"
                value={config.headerTitle}
                placeholder={translate('headerTitlePlaceholder')}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfigValue('headerTitle', e.target.value)}
              />
              <Button
                ref={titleFormatTriggerRef}
                icon
                type="tertiary"
                size="sm"
                title={translate('titleFormatPanelTitle')}
                aria-label={translate('titleFormatPanelTitle')}
                onClick={() => setIsTitleFormatOpen(true)}
              >
                ⚙️
              </Button>
            </div>
          </SettingRow>
        )}
        <TitleFormatSidePanel
          isOpen={isTitleFormatOpen}
          toggle={() => setIsTitleFormatOpen(prev => !prev)}
          trigger={titleFormatTriggerRef.current as HTMLElement}
          widgetId={id}
          titleFormat={config.titleFormat}
          onChange={handleTitleFormatChange}
          onReset={handleTitleFormatReset}
        />
      </div>
      </CollapsablePanel>
      </div>

      <div className="topn-chart-section">
      <CollapsablePanel
        label={<span className="topn-chart-section-label">{translate('appearanceSectionLabel')}</span>}
        bottomLine
        isOpen={openSection === 'appearance'}
        onRequestOpen={() => setOpenSection('appearance')}
        onRequestClose={() => setOpenSection(prev => (prev === 'appearance' ? null : prev))}
      >
      <div className="topn-chart-section-content">
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('valueDisplayLabel')}
              <Tooltip title={translate('valueDisplayHelp')} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={translate('valueDisplayHelp')}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="wrap"
        >
          <Select
            value={config.valueDisplay}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setConfigValue('valueDisplay', e.target.value as ValueDisplay)}
            className="topn-chart-full-width"
          >
            <option value="VALUE">{translate('valueDisplayValue')}</option>
            <option value="VALUE_PERCENT">{translate('valueDisplayValuePercent')}</option>
            <option value="PERCENT">{translate('valueDisplayPercent')}</option>
          </Select>
        </SettingRow>
        {config.valueDisplay !== 'VALUE' && !percentSupported && (
          <p className="topn-chart-help-text">{translate('percentUnavailableHint')}</p>
        )}
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('valueFormatLabel')}
              <Tooltip title={translate('valueFormatHelp')} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={translate('valueFormatHelp')}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="wrap"
        >
          <div className="topn-chart-radio-group" role="radiogroup" aria-label={translate('valueFormatLabel')}>
            <Label className="topn-chart-radio-option">
              <Radio
                id={`${id}-value-format-full`}
                name={`${id}-value-format`}
                checked={!config.abbreviateValues}
                onChange={() => setConfigValue('abbreviateValues', false)}
              />
              <span>{translate('valueFormatFull')}</span>
            </Label>
            <Label className="topn-chart-radio-option">
              <Radio
                id={`${id}-value-format-abbreviated`}
                name={`${id}-value-format`}
                checked={config.abbreviateValues}
                onChange={() => setConfigValue('abbreviateValues', true)}
              />
              <span>{translate('valueFormatAbbreviated')}</span>
            </Label>
          </div>
        </SettingRow>
        <SettingRow label={translate('showOthersLabel')} flow="no-wrap">
          <Switch checked={config.showOthers} onChange={(e: any) => setConfigValue('showOthers', e.target.checked)} />
        </SettingRow>
        {config.showOthers && (
          <SettingRow label={translate('othersLabelLabel')} flow="wrap">
            <TextInput className="topn-chart-full-width" value={config.othersLabel} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfigValue('othersLabel', e.target.value)} />
          </SettingRow>
        )}
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('includeNullLabel')}
              <Tooltip title={translate('includeNullHelp')} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={translate('includeNullHelp')}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="no-wrap"
        >
          <Switch checked={config.includeNullCategory} onChange={(e: any) => setConfigValue('includeNullCategory', e.target.checked)} />
        </SettingRow>
        {config.includeNullCategory && (
          <SettingRow label={translate('nullLabelLabel')} flow="wrap">
            <TextInput className="topn-chart-full-width" value={config.nullCategoryLabel} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfigValue('nullCategoryLabel', e.target.value)} />
          </SettingRow>
        )}
        <SettingRow label={translate('verticalSpacingLabel')} flow="wrap">
          <Select value={config.verticalSpacing} onChange={handleVerticalSpacingChange} className="topn-chart-full-width">
            <option value="COMPACT">{translate('spacingCompact')}</option>
            <option value="AUTO_DISTRIBUTE">{translate('spacingAutoDistribute')}</option>
          </Select>
        </SettingRow>
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('wideModeLabel')}
              <Tooltip title={translate('wideModeHelp')} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={translate('wideModeHelp')}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="no-wrap"
        >
          <Switch checked={config.multiColumnWideMode} onChange={(e: any) => setConfigValue('multiColumnWideMode', e.target.checked)} />
        </SettingRow>
        <SettingRow label={translate('barStylingLabel')} flow="no-wrap">
          <Button
            ref={barStylingTriggerRef}
            icon
            type="tertiary"
            size="sm"
            title={translate('barStylingLabel')}
            aria-label={translate('openBarStylingAriaLabel')}
            onClick={() => setIsBarStylingOpen(true)}
          >
            ⚙️
          </Button>
        </SettingRow>
        <BarStylingSidePanel
          isOpen={isBarStylingOpen}
          toggle={() => setIsBarStylingOpen(prev => !prev)}
          trigger={barStylingTriggerRef.current as HTMLElement}
          widgetId={id}
          barStyling={config.barStyling}
          onChange={handleBarStylingChange}
        />
      </div>
      </CollapsablePanel>
      </div>

      <div className="topn-chart-section">
      <CollapsablePanel
        label={<span className="topn-chart-section-label">{translate('toolsSectionLabel')}</span>}
        isOpen={openSection === 'tools'}
        onRequestOpen={() => setOpenSection('tools')}
        onRequestClose={() => setOpenSection(prev => (prev === 'tools' ? null : prev))}
      >
      <div className="topn-chart-section-content">
        <SettingRow label={translate('enableSearchLabel')} flow="no-wrap">
          <Switch checked={config.searchEnabled} onChange={(e: any) => setConfigValue('searchEnabled', e.target.checked)} />
        </SettingRow>
        {config.searchEnabled && (
          <SettingRow label={translate('searchModeLabel')} flow="wrap">
            <Select value={config.searchMode} onChange={handleSearchModeChange} className="topn-chart-full-width">
              <option value="LOCAL">{translate('searchLocal')}</option>
              <option value="SERVER">{translate('searchServer')}</option>
            </Select>
          </SettingRow>
        )}
        <SettingRow
          label={(
            <span className="topn-chart-label-with-tip">
              {translate('showAllLabel')}
              <Tooltip title={translate('showAllHelp')} placement="top">
                <span className="topn-chart-info-icon" tabIndex={0} role="img" aria-label={translate('showAllHelp')}>ⓘ</span>
              </Tooltip>
            </span>
          )}
          flow="no-wrap"
        >
          <Switch checked={config.showAllEnabled} onChange={(e: any) => setConfigValue('showAllEnabled', e.target.checked)} />
        </SettingRow>
        <SettingRow label={translate('enableSelectionLabel')} flow="no-wrap">
          <Switch checked={config.selectionEnabled} onChange={(e: any) => setConfigValue('selectionEnabled', e.target.checked)} />
        </SettingRow>
        {config.selectionEnabled && (
          <SettingRow label={translate('selectionStyleLabel')} flow="wrap">
            <Select value={config.selectionStyle} onChange={handleSelectionStyleChange} className="topn-chart-full-width">
              <option value="RADIO">{translate('selectionRadio')}</option>
              <option value="CHECKBOX">{translate('selectionCheckbox')}</option>
              <option value="TOGGLE">{translate('selectionToggle')}</option>
            </Select>
          </SettingRow>
        )}
      </div>
      </CollapsablePanel>
      </div>
      </div>
    </div>
  )
}

export default TopNChartSetting

