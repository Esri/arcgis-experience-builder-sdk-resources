import { React, classNames, type QueriableDataSource, type DataRecordSet } from 'jimu-core'
import { Button, Switch, Label, Select, Icon, DataActionList, DataActionListStyle } from 'jimu-ui'
import sortDescendingIcon from 'jimu-icons/svg/outlined/directional/sort-descending-arrow.svg'
import sortAscendingIcon from 'jimu-icons/svg/outlined/directional/sort-ascending-arrow.svg'
import { MIN_TOP_N, MAX_TOP_N, type IMConfig } from '../../config'
import { useTopNChartData } from '../hooks/useTopNChartData'
import { HeaderBar } from './HeaderBar'
import { SearchBox } from './SearchBox'
import { BarList } from './BarList'
import { StatusStates } from './StatusStates'

export interface ChartContainerProps {
  dataSource: QueriableDataSource
  config: IMConfig
  widgetId: string
  /** Set by Builder's Action tab; requires canConsumeDataAction in the manifest. */
  enableDataAction: boolean
  /** Extent supplied by the Filter-by-map-extent message action; null when unfiltered. */
  extentFilter?: any
}

export const ChartContainer = (props: ChartContainerProps): React.ReactElement => {
  const { dataSource, config, widgetId, enableDataAction, extentFilter } = props
  const {
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
  } = useTopNChartData({ dataSource, config, widgetId, extentFilter })

  const showResults = state.status === 'READY' || state.status === 'TOO_MANY_CATEGORIES'
  const hasDraftChanges = draftSelection.size > 0 || hasAppliedSelection
  // Search stays tied to Show All; selection is independent of it.
  const fullListShown = config.showAllEnabled && showAll
  const selectionAvailable = config.selectionEnabled
  const searchAvailable = config.searchEnabled && fullListShown
  // Apply publishes to connected content; the chart itself is never filtered by the selection.
  const categoryCount = state.bars.filter(bar => bar.kind === 'category').length

  const topNOptions = React.useMemo(() => {
    // Preset steps only; the configured value is included so it stays selectable.
    const presets = [3, 5, 10, 15, 20].filter(n => n >= MIN_TOP_N && n <= MAX_TOP_N)
    return Array.from(new Set([...presets, topN])).sort((a, b) => a - b)
  }, [topN])
  const isDescending = sortDirection === 'DESC'
  const sortLabel = isDescending ? 'Sort: Top N' : 'Sort: Bottom N'
  const scopeLabel = isDescending ? 'Showing Top' : 'Showing Bottom'

  // Without an applied selection the actions still operate on the whole data source.
  const actionDataSets: DataRecordSet[] = React.useMemo(() => (
    appliedRecordSet
      ? [appliedRecordSet]
      : [{ name: 'topn-all', label: 'All data', type: 'current', dataSource, records: [] }]
  ), [appliedRecordSet, dataSource])

  React.useEffect(() => {
    if (!searchAvailable && searchTerm) setSearchTerm('')
  }, [searchAvailable, searchTerm, setSearchTerm])
  const containerClassName = classNames('topn-chart-container', {
    'topn-chart-container--compact': config.verticalSpacing === 'COMPACT',
    'topn-chart-container--wide-mode': config.multiColumnWideMode
  })

  return (
    <div className={containerClassName}>
      <HeaderBar
        config={config}
        actions={enableDataAction
          ? (
            <div className="topn-chart-data-actions">
              <DataActionList
                widgetId={widgetId}
                dataSets={actionDataSets}
                listStyle={DataActionListStyle.Dropdown}
                shouldHideEmptyList
              />
            </div>
            )
          : undefined}
      />

      {searchAvailable && (
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
      )}

      {state.banner && (
        <div className="topn-chart-banner">{state.banner}</div>
      )}

      <StatusStates state={state} onRetry={retry} />

      {showResults && (
        <BarList
          bars={state.bars}
          totalForPercent={state.totalForPercent}
          selectable={selectionAvailable}
          selection={draftSelection}
          onToggle={toggleDraftSelection}
          config={config}
        />
      )}

      {selectionTruncation && (
        <div className="topn-chart-banner">
          {`Connected content shows all ${selectionTruncation.total.toLocaleString()} matching records; data actions use the first ${selectionTruncation.materialized.toLocaleString()}.`}
        </div>
      )}

      {(selectionAvailable || hasAppliedSelection) && hasDraftChanges && (
        <div className="topn-chart-selection-actions">
          <Button type="primary" size="sm" onClick={applySelection}>Apply</Button>
          <Button type="secondary" size="sm" onClick={cancelSelection}>Cancel</Button>
          <Button type="tertiary" size="sm" onClick={clearSelection}>Clear</Button>
        </div>
      )}

      {showResults && (
        <div className="topn-chart-footer">
          <span className="topn-chart-footer-scope">
            {showAll
              ? `Showing all ${categoryCount}`
              : (
                <React.Fragment>
                  <span>{scopeLabel}</span>
                  <Select
                    className="topn-chart-footer-topn"
                    size="sm"
                    value={topN}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTopN(Number(e.target.value))}
                    aria-label="Number of top categories"
                  >
                    {topNOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </Select>
                </React.Fragment>
                )}
          </span>

          <Button
            className="topn-chart-footer-sort"
            type="tertiary"
            size="sm"
            onClick={() => setSortDirection(isDescending ? 'ASC' : 'DESC')}
            title={sortLabel}
            aria-label={sortLabel}
          >
            <Icon icon={isDescending ? sortDescendingIcon : sortAscendingIcon} size={14} />
            <span>{sortLabel}</span>
          </Button>

          {config.showAllEnabled && (
            <Label className="topn-chart-showall-label">
              <Switch checked={showAll} onChange={(e: any) => setShowAll(e.target.checked)} />
              <span>Show All</span>
            </Label>
          )}
        </div>
      )}
    </div>
  )
}
