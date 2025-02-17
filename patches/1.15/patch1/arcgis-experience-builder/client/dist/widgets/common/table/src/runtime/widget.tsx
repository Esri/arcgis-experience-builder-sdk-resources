/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  classNames,
  DataSourceComponent,
  type QueriableDataSource,
  Immutable,
  appActions,
  lodash,
  type QueryParams,
  MessageManager,
  DataRecordsSelectionChangeMessage,
  type ClauseValuePair,
  ReactResizeDetector,
  type DataSourceInfo,
  type IMDataSourceInfo,
  getAppStore,
  CONSTANTS,
  DataSourceStatus,
  type IMState,
  dataSourceUtils,
  MutableStoreManager,
  DataSourceManager,
  type DataRecord,
  appConfigUtils,
  WidgetState,
  privilegeUtils,
  AppMode,
  esri,
  type ImmutableArray,
  type QueryRequiredInfo,
  type DataSource,
  cancelablePromise,
  type SceneLayerDataSource,
  AllDataSourceTypes,
  DataSourceTypes,
  ServiceManager,
  SessionManager,
  i18n
} from 'jimu-core'
import { Global } from 'jimu-theme'
import {
  type IMConfig,
  type LayersConfig,
  SelectionModeType,
  TableArrangeType,
  type Suggestion,
  LayerHonorModeType,
  TableDataActionType,
  ResponsiveType
} from '../config'
import {
  loadArcGISJSAPIModules,
  type FeatureDataRecord,
  type FeatureLayerDataSource
} from 'jimu-arcgis'
import defaultMessages from './translations/default'
import {
  WidgetPlaceholder,
  defaultMessages as jimuUIDefaultMessages,
  Button,
  TextInput,
  Tabs,
  Tab,
  Select,
  AdvancedSelect,
  Popper,
  Alert,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DataActionList,
  DataActionListStyle,
  Tooltip
} from 'jimu-ui'
import { versionManager } from '../version-manager'
import { LayoutItemSizeModes } from 'jimu-layouts/layout-runtime'
import { getStyle, getSuggestionStyle } from './style'
import { fetchSuggestionRecords, minusArray, getGlobalTableTools } from './utils'
import { SearchOutlined } from 'jimu-icons/outlined/editor/search'
import { ArrowLeftOutlined } from 'jimu-icons/outlined/directional/arrow-left'
import { CloseOutlined } from 'jimu-icons/outlined/editor/close'
import { MenuOutlined } from 'jimu-icons/outlined/editor/menu'
import { ClearSelectionGeneralOutlined } from 'jimu-icons/outlined/editor/clear-selection-general'
import { RefreshOutlined } from 'jimu-icons/outlined/editor/refresh'
import { ListVisibleOutlined } from 'jimu-icons/outlined/editor/list-visible'
import { ShowSelectionOutlined } from 'jimu-icons/outlined/editor/show-selection'
import { MoreHorizontalOutlined } from 'jimu-icons/outlined/application/more-horizontal'
import { TrashOutlined } from 'jimu-icons/outlined/editor/trash'
import { type ImageryLayerDataSource, type FeatureLayerQueryParams, QueryScope } from 'jimu-core/data-source'
import { type IFeature } from '@esri/arcgis-rest-feature-service'
import { Fragment } from 'react'
import reactiveUtils from 'esri/core/reactiveUtils'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'
// import warningIcon from 'jimu-icons/svg/outlined/suggested/warning.svg'
const { BREAK_POINTS, SELECTION_DATA_VIEW_ID, DATA_VIEW_ID_FOR_NO_SELECTION } = CONSTANTS
const EMPTY_QUERY_PARAMS = { where: '1=1', sqlExpression: null } as QueryParams
const tablePlaceholderIcon = require('./assets/icons/placeholder-table.svg')
const runtimeDataSourceKey = 'runtime-usedDs-info'
const SEARCH_TOOL_MIN_SIZE = 300
const TABLE_BOTTOM_BREAK_POINTS = 430
const notLoad = [DataSourceStatus.NotReady, DataSourceStatus.LoadError]
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()
const messages = Object.assign({}, defaultMessages, jimuUIDefaultMessages)

export interface Props {
  appMode: AppMode
  dataSourcesInfo?: { [dsId: string]: DataSourceInfo }
  isRTL: boolean
  stateShowLoading: boolean
  currentPageId: string
  viewInTableObj: { [id: string]: { daLayerItem: LayersConfig, records: DataRecord[] } }
  enableDataAction: boolean
  isWidthAuto: boolean
  isHeightAuto: boolean
  [propName: string]: any
}

export interface State {
  apiLoaded: boolean
  dataSource: QueriableDataSource
  activeTabId: string
  downloadOpen: boolean
  searchText: string
  selectQueryFlag: boolean
  mobileFlag: boolean
  searchToolFlag: boolean
  bottomResponsiveFlag: boolean
  tableShowColumns: ClauseValuePair[]
  isOpenSearchPopper: boolean
  emptyTable: boolean
  emptyData: boolean
  selectRecords: DataRecord[]
  notReady: boolean
  selfDsChange: boolean
  showLoading: boolean
  interval: number
  autoRefreshLoadingString: string
  isShowSuggestion: boolean
  searchSuggestion: Suggestion[]
  allowDel: boolean
  tableLoaded: boolean
  tableTotal: number
  tableSelected: number
  widgetWidth: number
  isTableEditing: boolean
  exbPrivilege: boolean
}

export interface tableSelectedItem {
  objectId: number
  feature: IFeature | __esri.Graphic
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig> & Props,
State
> {
  static versionManager = versionManager
  table: __esri.FeatureTable
  dataSourceChange: boolean
  dataActionCanLoad: boolean
  dataActionTableRecords: { [configId: string]: DataRecord[] }
  dropdownCsv: any
  refs: {
    tableContainer: HTMLInputElement
    advancedSelect: HTMLElement
    searchPopup: HTMLDivElement
    currentEl: HTMLElement
    suggestPopup: HTMLDivElement
    countContainer: HTMLDivElement
  }

  updatingTable: boolean
  removeConfig: boolean
  debounceOnResize: (width, height) => void
  dsManager: DataSourceManager
  clickTimer: any
  autoRefreshLoadingTime: any
  resetAutoRefreshTime: any
  suggestionsQueryTimeout: any
  currentRequestId: number
  viewTableId: number
  timerFn: any
  lastSql: string
  promises: Array<cancelablePromise.CancelablePromise<any>> = []
  FeatureTable: typeof __esri.FeatureTable = null
  FeatureLayer: typeof __esri.FeatureLayer = null
  ImageryLayer: typeof __esri.ImageryLayer = null
  OrientedImageryLayer: typeof __esri.OrientedImageryLayer = null
  TableTemplate: typeof __esri.TableTemplate = null
  geometryEngine: typeof __esri.geometryEngine = null
  Polygon: typeof __esri.Polygon = null

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetProps<IMConfig>
  ): Props => {
    const { layoutId, layoutItemId, id } = props
    const currentWidget = state?.appConfig?.widgets?.[id]
    const enableDataAction = currentWidget?.enableDataAction
    const appConfig = state && state.appConfig
    const layout = appConfig.layouts?.[layoutId]
    const layoutSetting = layout?.content?.[layoutItemId]?.setting
    const isHeightAuto =
      layoutSetting?.autoProps?.height === LayoutItemSizeModes.Auto ||
      layoutSetting?.autoProps?.height === true
    const isWidthAuto =
      layoutSetting?.autoProps?.width === LayoutItemSizeModes.Auto ||
      layoutSetting?.autoProps?.width === true
    // runtime ds info map(eg. add data widget)
    const runtimeDataSourceInfos = {}
    const updatedViewInTableObj = props?.mutableStateProps?.viewInTableObj
    for (const key in updatedViewInTableObj) {
      // update label
      const newLabel = updatedViewInTableObj[key]?.daLayerItem?.dataActionDataSource?.dataSourceJson?.label
      if (newLabel) updatedViewInTableObj[key].daLayerItem.name = newLabel
      // update runtime dataSource info
      const dataActionDataSourceId = updatedViewInTableObj[key]?.daLayerItem?.dataActionDataSource?.id
      const dataActionDataSourceInfo = updatedViewInTableObj[key]?.daLayerItem?.dataActionDataSource?.getInfo()
      runtimeDataSourceInfos[`${runtimeDataSourceKey}_${dataActionDataSourceId}`] = dataActionDataSourceInfo
    }
    return {
      appMode: state?.appRuntimeInfo?.appMode,
      isRTL: state?.appContext?.isRTL,
      stateShowLoading: state?.widgetsState?.[props.id]?.showLoading,
      currentPageId: state?.appRuntimeInfo?.currentPageId,
      viewInTableObj: updatedViewInTableObj,
      enableDataAction: enableDataAction === undefined ? true : enableDataAction,
      ...runtimeDataSourceInfos,
      isHeightAuto,
      isWidthAuto
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false,
      dataSource: undefined,
      activeTabId: undefined,
      downloadOpen: false,
      searchText: '',
      selectQueryFlag: false,
      mobileFlag: false,
      searchToolFlag: false,
      bottomResponsiveFlag: false,
      tableShowColumns: undefined,
      isOpenSearchPopper: false,
      emptyTable: false,
      emptyData: false,
      selectRecords: [],
      notReady: false,
      selfDsChange: false,
      showLoading: false,
      interval: 0,
      autoRefreshLoadingString: '',
      isShowSuggestion: false,
      searchSuggestion: [],
      allowDel: true,
      tableLoaded: false,
      tableTotal: 0,
      tableSelected: 0,
      widgetWidth: props?.manifest?.defaultSize?.width || 600,
      isTableEditing: false,
      exbPrivilege: false
    }
    this.dataSourceChange = false
    this.dataActionCanLoad = true
    this.dataActionTableRecords = {}
    this.updatingTable = false
    this.removeConfig = false
    this.currentRequestId = 0
    this.viewTableId = 0
    this.timerFn = null
    this.lastSql = ''
    this.debounceOnResize = lodash.debounce(
      (width, height) => { this.onToolStyleChange(width, height) },
      200
    )
    this.dsManager = DataSourceManager.getInstance()
    this.clickTimer = undefined
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { config } = nextProps
    const { layersConfig } = config
    const { activeTabId } = prevState
    // get data-action table config
    const daLayersConfig = new Widget(nextProps).getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    if ((!activeTabId || allLayersConfig.findIndex(x => x.id === activeTabId) < 0) && allLayersConfig.length > 0) {
      return {
        activeTabId: allLayersConfig[0]?.id
      }
    }
    return null
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules([
        'esri/widgets/FeatureTable',
        'esri/layers/FeatureLayer',
        'esri/layers/ImageryLayer',
        'esri/layers/OrientedImageryLayer',
        'esri/widgets/FeatureTable/support/TableTemplate',
        'esri/geometry/geometryEngine',
        'esri/geometry/Polygon'
      ]).then(modules => {
        ;[this.FeatureTable, this.FeatureLayer, this.ImageryLayer, this.OrientedImageryLayer, this.TableTemplate, this.geometryEngine, this.Polygon] = modules
        this.setState({
          apiLoaded: true
        })
        this.destroyTable().then(() => {
          this.createTable()
        })
      })
    }
  }

  componentWillUnmount () {
    const { id } = this.props
    this.promises.forEach(p => { p.cancel() })
    this.destroyTable()
    clearTimeout(this.suggestionsQueryTimeout)
    clearInterval(this.autoRefreshLoadingTime)
    MutableStoreManager.getInstance().updateStateValue(id, 'viewInTableObj', {})
  }

  componentDidUpdate (prevProps: AllWidgetProps<IMConfig> & Props, prevState: State) {
    const { activeTabId, dataSource, tableLoaded, exbPrivilege } = this.state
    const { id, config, currentPageId, state, appMode, viewInTableObj } = this.props
    const { layersConfig } = config
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const dataActionActiveObj = this.props?.stateProps?.dataActionActiveObj
    const newActiveTabId = dataActionActiveObj?.dataActionTable ? dataActionActiveObj?.activeTabId : activeTabId
    // deal with runtime update caused by setting change
    this.onSettingChangeRuntime()
    // view in table filter change
    this.onFilterChange(newActiveTabId)
    // The activeTab change caused by setting
    const settingChangeTab = this.props?.stateProps?.settingChangeTab || false
    const activeSettingTabId = this.props?.stateProps?.activeTabId
    if (settingChangeTab && activeSettingTabId && (activeTabId !== activeSettingTabId)) {
      this.props.dispatch(
        appActions.widgetStatePropChange(id, 'settingChangeTab', false)
      )
      if (appMode === AppMode.Run) this.onTagClick(activeSettingTabId)
    }
    // reset searchText and suggestion
    const controllerClose = state === WidgetState.Closed
    const pageClose = prevProps.currentPageId !== currentPageId
    const liveClose = prevProps.appMode === AppMode.Run && appMode === AppMode.Design
    if ((controllerClose || pageClose || liveClose) && this.table) {
      this.setState({ searchText: '', isShowSuggestion: false })
    }
    // config change
    const prevCurConfig = prevProps.config.layersConfig?.asMutable({ deep: true }).concat(daLayersConfig).find(
      item => item.id === prevState.activeTabId
    )
    const newCurConfig = allLayersConfig.find(
      item => item.id === newActiveTabId
    )
    // check if the ds is available
    const dsAvailable = this.dsManager.getDataSource(dataSource?.id)
    // close table tab
    if (this.removeConfig) {
      this.removeConfig = false
      if (!newCurConfig) return
    } else {
      const viewInTableIds = viewInTableObj && Object.keys(viewInTableObj)
      if ((viewInTableIds?.length === 0 && !prevCurConfig) || !newCurConfig) return
    }
    // search close
    const orgSearchOn = prevCurConfig?.enableSearch && prevCurConfig?.searchFields
    const newSearchOn = newCurConfig?.enableSearch && newCurConfig?.searchFields
    if (orgSearchOn && !newSearchOn && dsAvailable) {
      dataSource.updateQueryParams(EMPTY_QUERY_PARAMS, id)
    }
    // delete option
    if (newCurConfig?.enableDelete !== prevCurConfig?.enableDelete) {
      this.setState({ allowDel: exbPrivilege && newCurConfig?.enableDelete })
    }
    // setting options change
    const optionChangeFlag = this.settingOptionsChange(prevCurConfig, newCurConfig)
    const tabChange = !dataActionActiveObj?.dataActionTable && prevCurConfig?.id !== newCurConfig?.id
    const tableOptionChange = prevCurConfig?.id === newCurConfig?.id && optionChangeFlag
    if (tabChange || tableOptionChange) {
      this.updatingTable = true
      this.setState(
        {
          searchText: '',
          isShowSuggestion: false,
          tableShowColumns: undefined,
          tableTotal: 0,
          tableSelected: 0,
          selectQueryFlag: false
        },
        () => {
          // reset ds query
          dsAvailable && dataSource?.updateQueryParams(EMPTY_QUERY_PARAMS, id)
          this.destroyTable().then(() => {
            this.createTable()
          })
        }
      )
      return
    }
    // data-action: view in table
    if (dataActionActiveObj?.dataActionTable && this.dataActionCanLoad && !this.updatingTable) {
      this.dataActionCanLoad = false
      this.props.dispatch(
        appActions.widgetStatePropChange(id, 'dataActionActiveObj', { activeTabId: newActiveTabId, dataActionTable: false })
      )
      this.updatingTable = true
      this.setState(
        {
          activeTabId: newActiveTabId,
          searchText: '',
          tableShowColumns: undefined
        },
        () => {
          // reset ds query
          dsAvailable && dataSource?.updateQueryParams(EMPTY_QUERY_PARAMS, id)
          this.destroyTable().then(() => {
            this.createTable()
          })
        }
      )
    }
    // sql change continuously
    if (tableLoaded && !prevState.tableLoaded && this.lastSql) {
      if (this.table.layer && 'definitionExpression' in this.table.layer) {
        (this.table.layer.definitionExpression as any) = this.lastSql
        this.lastSql = ''
      }
    }
  }

  getTimezone = (dataSource) => {
    return dataSourceUtils.getTimezoneAPIFromRuntime(dataSource.getTimezone())
  }

  // deal with runtime update caused by setting change
  onSettingChangeRuntime = () => {
    const { id } = this.props
    const optionChangeSuggestion = this.props?.stateProps?.optionChangeSuggestion || false
    const removeLayerFlag = this.props?.stateProps?.removeLayerFlag || false
    if (optionChangeSuggestion) {
      this.setState({ isShowSuggestion: false })
      this.props.dispatch(
        appActions.widgetStatePropChange(id, 'optionChangeSuggestion', false)
      )
    }
    if (removeLayerFlag) {
      const popover = document.getElementsByClassName(
        'esri-popover esri-popover--open'
      )
      if (popover && popover.length > 0) popover[0].remove()
      this.props.dispatch(
        appActions.widgetStatePropChange(id, 'removeLayerFlag', false)
      )
    }
  }

  // view-in-table filter change
  onFilterChange = (newActiveTabId: string) => {
    const { dataSource, activeTabId } = this.state
    const { viewInTableObj } = this.props
    if (viewInTableObj && activeTabId === newActiveTabId) {
      const viewInTableIds = Object.keys(viewInTableObj)
      const currentTabViewTableIndex = viewInTableIds.findIndex(a => a === newActiveTabId)
      if (currentTabViewTableIndex > -1) {
        const activeViewDs = viewInTableObj[newActiveTabId].daLayerItem.dataActionDataSource
        const activeUseDs = viewInTableObj[newActiveTabId].daLayerItem.useDataSource
        let dsParam: any
        if (activeViewDs) {
          dsParam = (activeViewDs as QueriableDataSource).getCurrentQueryParams()
        } else if (activeUseDs && dataSource) {
          dsParam = dataSource.getCurrentQueryParams()
        }
        const orgExpression = this.table?.layer?.definitionExpression
        if (orgExpression !== undefined && orgExpression !== dsParam?.where) {
          (this.table.layer.definitionExpression as any) = dsParam?.where
        }
      }
    }
  }

  // setting options change
  settingOptionsChange = (prevCurConfig: LayersConfig, newCurConfig: LayersConfig): boolean => {
    let optionChangeFlag = false
    if (prevCurConfig?.id !== newCurConfig?.id) return optionChangeFlag
    const optionKeys = [
      'enableAttachements',
      'enableEdit',
      'allowCsv',
      'enableSelect',
      'selectMode',
      'layerHonorMode',
      'tableFields',
      'columnSetting'
    ]
    const referenceTypeKeys = ['tableFields', 'columnSetting']
    for (const item of optionKeys) {
      const changeFlag = referenceTypeKeys.includes(item) ? !lodash.isDeepEqual(prevCurConfig?.[item], newCurConfig?.[item]) : (prevCurConfig?.[item] !== newCurConfig?.[item])
      if (changeFlag) {
        optionChangeFlag = true
        break
      }
    }
    // when in 'Fit to data' mode, change font size need rerender
    if (prevCurConfig?.headerFontSetting?.fontSize !== newCurConfig?.headerFontSetting?.fontSize && newCurConfig?.columnSetting?.responsiveType === ResponsiveType.Fit) {
      optionChangeFlag = true
    }
    return optionChangeFlag
  }

  getFieldsFromDatasource = () => {
    const { config } = this.props
    const { layersConfig } = config
    const { activeTabId } = this.state
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const curLayer = allLayersConfig
      .find(item => item.id === activeTabId)
    // 'allFields' need recalculate(chart output ds), if dataActionDataSource exists, use it
    const selectedDs = curLayer?.dataActionDataSource || this.dsManager.getDataSource(curLayer?.useDataSource?.dataSourceId)
    const allFieldsSchema = selectedDs?.getSchema()
    const allFields = allFieldsSchema?.fields ? Object.values(allFieldsSchema?.fields) : []
    const defaultInvisible = [
      'CreationDate',
      'Creator',
      'EditDate',
      'Editor',
      'GlobalID'
    ]
    let tableFields = allFields.filter(
      item => !defaultInvisible.includes(item.jimuName)
    )
    // If there are too many columns, only the first 50 columns will be displayed by default
    if (tableFields?.length > 50) {
      tableFields = tableFields.slice(0, 50)
    }
    return { allFields, tableFields }
  }

  onToolStyleChange = (width: number, height: number) => {
    width < BREAK_POINTS[0]
      ? this.setState({ mobileFlag: true })
      : this.setState({ mobileFlag: false })
    width < SEARCH_TOOL_MIN_SIZE
      ? this.setState({ searchToolFlag: true })
      : this.setState({ searchToolFlag: false })
    width < TABLE_BOTTOM_BREAK_POINTS
      ? this.setState({ bottomResponsiveFlag: true })
      : this.setState({ bottomResponsiveFlag: false })
    this.setState({ widgetWidth: width })
  }

  onDataSourceCreated = (dataSource: QueriableDataSource): void => {
    this.setState({ dataSource })
    const isSelectionView = dataSource?.dataViewId === SELECTION_DATA_VIEW_ID
    // The first time you switch a TAB and the target TAB is using dataView, the ds changes after the update
    const isDataView = dataSource?.dataViewId && dataSource?.dataViewId !== 'output' && !isSelectionView
    const hasNoSelectionView = !!dataSource.getMainDataSource().getDataView(DATA_VIEW_ID_FOR_NO_SELECTION)
    const dsChangeCreateTable = !this.updatingTable && ((isSelectionView && hasNoSelectionView) || isDataView)
    if (dsChangeCreateTable) {
      this.updatingTable = true
      this.destroyTable().then(() => {
        this.createTable(dataSource)
      })
    }
  }

  updateGeometryAndSql = (dataSource: QueriableDataSource) => {
    if (!this.table?.layer) return
    const { tableLoaded } = this.state
    const dsParam: any = dataSource?.getCurrentQueryParams()
    const orgExpression = this.table.layer.definitionExpression
    const isDefaultExpression = orgExpression === '' && dsParam?.where === '1=1'
    if (!isDefaultExpression && orgExpression !== dsParam?.where) {
      if (!tableLoaded) {
        this.lastSql = dsParam?.where
      } else {
        (this.table.layer.definitionExpression as any) = dsParam?.where
        this.lastSql = ''
      }
    }
    dataSourceUtils.changeJimuArcGISQueryToJSAPIQuery(dataSource as FeatureLayerDataSource, Immutable(dsParam)).then(res => {
      if (!res) return
      const { geometry, distance, units } = res
      if (!geometry) return
      const sr = geometry?.spatialReference
      const geometryType = (geometry as __esri.Geometry)?.type
      const { isWGS84, isWebMercator } = sr as __esri.SpatialReference
      // eslint-disable-next-line @typescript-eslint/unbound-method
      const useBufferMethod = (isWGS84 || isWebMercator) ? this.geometryEngine.geodesicBuffer : this.geometryEngine.buffer
      const orgGeometryJson = (this.table?.filterGeometry as any)?.toJSON()
      if (geometryType !== 'polygon' && distance && distance <= 0) {
        const emptyBuff = new this.Polygon({ rings: [] })
        if (!lodash.isDeepEqual(orgGeometryJson, emptyBuff?.toJSON())) {
          (this.table.filterGeometry as any) = emptyBuff
        }
      } else if (distance && units) {
        const geometryBuff = useBufferMethod(geometry as any, distance, units as any)
        if (!lodash.isDeepEqual(orgGeometryJson, (geometryBuff as __esri.Polygon)?.toJSON())) {
          (this.table.filterGeometry as any) = geometryBuff
        }
      } else { // only extent change
        (this.table.filterGeometry as any) = geometry
      }
    })
    setTimeout(() => {
      this.asyncSelectedRebuild(dataSource)
    }, 500)
  }

  onDataSourceInfoChange = (
    info: IMDataSourceInfo,
    preInfo?: IMDataSourceInfo
  ) => {
    if (!info) {
      this.destroyTable().then(() => {
        // ds is inaccessible or delete, don't show 'notReady' warning
        this.setState({ notReady: false, emptyTable: true, tableTotal: 0, tableSelected: 0 })
      })
      return
    }
    this.dataSourceChange = true
    if (info?.status === DataSourceStatus.Loaded && preInfo?.status === DataSourceStatus.Loaded) {
      this.dataSourceChange = false
    }
    let { dataSource } = this.state
    const { selectQueryFlag, activeTabId, selfDsChange } = this.state
    const { config, state } = this.props
    const { layersConfig } = config
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const curLayer = allLayersConfig.find(item => item.id === activeTabId)
    const useDS = curLayer?.useDataSource
    const isViewSnapshot = curLayer.dataActionType === TableDataActionType.View
    // If other widgets load data, status will be loaded at the first time
    // This time state.dataSource is undefined
    if ((!dataSource && useDS) || (!isViewSnapshot && dataSource?.id !== useDS?.dataSourceId)) {
      dataSource = this.dsManager.getDataSource(useDS?.dataSourceId) as QueriableDataSource
      if (!dataSource) {
        this.setState({ emptyTable: true, tableTotal: 0, tableSelected: 0 })
        return
      }
    } else if (!dataSource && !useDS) {
      return
    }
    // selection view: status is loaded, but if there is no selection, it should be an empty table
    const isEmptySelectionView = dataSource?.dataViewId === SELECTION_DATA_VIEW_ID && dataSource?.getSourceRecords()?.length === 0
    if (!curLayer.dataActionObject) {
      if (!info?.status || info?.status === DataSourceStatus.NotReady || isEmptySelectionView) {
        this.destroyTable().then(() => {
          this.setState({ notReady: true, emptyTable: true, tableTotal: 0, tableSelected: 0 })
        })
        return
      } else {
        this.setState({ notReady: false, emptyTable: false })
      }
    }
    // loading status
    const showLoading = this.getLoadingStatus(dataSource, info?.status)
    const interval = dataSource?.getAutoRefreshInterval() || 0
    // toggle auto refresh loading status
    this.toggleAutoRefreshLoading(dataSource, showLoading, interval)
    this.setState({ showLoading, interval })
    // shielding info change
    const preSelectedIds = preInfo?.selectedIds
    const newSelectedIds = info?.selectedIds
    const preSourceVersion = preInfo?.sourceVersion
    const newSourceVersion = info?.sourceVersion
    const newVersion = info?.gdbVersion
    const preVersion = preInfo?.gdbVersion
    const newClientVersion = info?.version
    const preClientVersion = preInfo?.version
    const infoStatusNotChange =
      curLayer?.useDataSource?.dataSourceId === dataSource?.id &&
      preInfo?.status === info?.status &&
      preInfo?.instanceStatus === info?.instanceStatus &&
      info?.widgetQueries === preInfo?.widgetQueries &&
      preSelectedIds === newSelectedIds &&
      // If the version change is caused by the table's own modifications, do not renrender
      (preSourceVersion === newSourceVersion || (state === WidgetState.Active && preSourceVersion !== newSourceVersion)) &&
      newVersion === preVersion
    if (
      notLoad.includes(info?.status) ||
      this.updatingTable ||
      infoStatusNotChange
    ) { return }
    // update ds selection (data-action)
    this.setState({ selectRecords: dataSource?.getSelectedRecords() })
    // ds ready create table and selected features change
    const sourceVersionChange = newSourceVersion !== preSourceVersion
    const clientVersionChange = newClientVersion !== preClientVersion
    const tabChange = curLayer?.useDataSource?.dataSourceId !== dataSource?.id
    const outputReapply = (!preInfo?.status || notLoad.includes(preInfo?.status)) && info && !notLoad.includes(info?.status) && info?.instanceStatus !== DataSourceStatus.NotCreated
    const selectedChange = preSelectedIds !== newSelectedIds && (preSelectedIds?.length !== 0 || newSelectedIds?.length !== 0)
    const infoNotChange = info?.status === preInfo?.status && info?.instanceStatus === preInfo?.instanceStatus
    const isOutputDs = dataSource?.getDataSourceJson()?.isOutputFromWidget
    const dsCreated = !curLayer.dataActionObject && info?.status === DataSourceStatus.Unloaded && info?.instanceStatus === DataSourceStatus.Created &&
      !selectedChange && !infoNotChange && !isOutputDs
    if (outputReapply || tabChange || dsCreated || clientVersionChange) {
      const dataActionFlag = curLayer?.dataActionType === TableDataActionType.View ||
        (curLayer?.dataActionType === TableDataActionType.Add && dataSource?.dataViewId !== SELECTION_DATA_VIEW_ID)
      if (dataActionFlag) return
      if (!this.dataActionCanLoad) return
      this.updatingTable = true
      this.destroyTable().then(() => {
        this.createTable(dataSource)
      })
      return
    }
    // hot fix: keep column and order runtime setting when edit a feature with Edit widget
    if (sourceVersionChange) {
      this.onTableRefresh()
    }
    // async click selected
    // Action table does not need to be selected synchronously
    if (preSelectedIds !== newSelectedIds) {
      if (selectQueryFlag) {
        this.asyncSelectedWhenSelection(newSelectedIds || Immutable([]))
        setTimeout(() => {
          this.asyncSelectedRebuild(dataSource)
        }, 500)
      } else {
        if (selfDsChange) {
          this.setState({ selfDsChange: false })
        } else {
          setTimeout(() => {
            this.asyncSelectedRebuild(dataSource)
          }, 500)
        }
      }
    }
  }

  compareAndUpdateTable = (curDsQueryInfo, preDsQueryInfo, isBelongto?: boolean) => {
    const { dataSource, activeTabId } = this.state
    const { config } = this.props
    const { layersConfig } = config
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const curLayer = allLayersConfig.find(item => item.id === activeTabId)
    const { widgetQueries: preWidgetQueries, gdbVersion: preGdbVersion, sourceVersion: presSourceVersion } = preDsQueryInfo
    const { widgetQueries, gdbVersion, needRefresh, sourceVersion } = curDsQueryInfo
    const gdbVersionChange = preGdbVersion && gdbVersion && gdbVersion !== preGdbVersion && this.table
    const widgetQueryChange = !curLayer.dataActionObject && widgetQueries !== preWidgetQueries
    const belongtoSourceVersionChange = isBelongto && presSourceVersion !== sourceVersion
    // gdbVersion/sourceVersion change & auto refresh
    if (gdbVersionChange) {
      const tableLayer: any = this.table.layer
      tableLayer.gdbVersion = gdbVersion
      this.onTableRefresh()
      return
    } else if (needRefresh) {
      this.onTableRefresh()
      return
    }
    // belongto ds sourceVersion change(can't get sql change with getCurrentQueryParams)
    if (belongtoSourceVersionChange) {
      this.updatingTable = true
      this.destroyTable().then(() => {
        this.createTable()
      })
      return
    }
    // widgetQuery change
    if (widgetQueryChange) {
      this.updateGeometryAndSql(dataSource)
    }
  }

  onQueryRequired = (queryRequiredInfo: QueryRequiredInfo, preQueryRequiredInfo?: QueryRequiredInfo) => {
    const { dataSource } = this.state
    const isDataActionTable = this.props?.stateProps?.dataActionActiveObj?.dataActionTable
    if (isDataActionTable || !preQueryRequiredInfo) return
    const dataSourceId = dataSource?.id
    // time extent change
    const dsParam: any = dataSource?.getCurrentQueryParams()
    const time = dsParam?.time
    const tableLayer = this.table?.layer as any
    if (time) {
      const apiTime = dataSourceUtils.changeJimuTimeToJSAPITimeExtent(time)
      const orgTimeExtent = tableLayer?.timeExtent
      const timeNotChange = time?.[0] === orgTimeExtent?.start?.getTime() && time?.[1] === orgTimeExtent?.end?.getTime()
      if (!timeNotChange && tableLayer) tableLayer.timeExtent = apiTime
    } else {
      if (tableLayer) tableLayer.timeExtent = null
    }
    // ds/belongtoDs info
    const curDsRequiredInfo = queryRequiredInfo?.[dataSourceId]
    const preDsRequiredInfo = preQueryRequiredInfo?.[dataSourceId]
    const belongtoDsId = dataSource?.belongToDataSource?.id
    const curBelongtoDsInfo = queryRequiredInfo?.[belongtoDsId]
    const preBelongtoDsInfo = preQueryRequiredInfo?.[belongtoDsId]
    if (!curDsRequiredInfo && !curBelongtoDsInfo) return
    // belongToDataSource info change
    if (curBelongtoDsInfo) {
      this.compareAndUpdateTable(curBelongtoDsInfo, preBelongtoDsInfo, true)
      return
    }
    // dataSource info change
    this.compareAndUpdateTable(curDsRequiredInfo, preDsRequiredInfo)
  }

  getLayerObjectIdField = () => {
    const { dataSource } = this.state
    const objectIdField =
      this.table?.layer?.objectIdField ||
      (dataSource as FeatureLayerDataSource)?.layer?.objectIdField ||
      'OBJECTID'
    return objectIdField
  }

  asyncSelectedWhenSelection = (newSelectedIds: ImmutableArray<string>) => {
    const { dataSource } = this.state
    const objectIdField = this.getLayerObjectIdField()
    const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
    let legal = true
    newSelectedIds.forEach(id => {
      if (!id) legal = false
    })
    const selectedQuery = (newSelectedIds.length > 0 && legal)
      ? `${objectIdField} IN (${newSelectedIds
      .map(id => {
        return id
      })
      .join()})`
      : curQuery.where
    if (this.table && this.table.layer) {
      this.table.clearSelectionFilter()
      const tableInstance = this.table as any
      tableInstance.layer.definitionExpression = selectedQuery
    }
  }

  getImageryLayer = (dataSource, dataRecords?: DataRecord[]): Promise<any> => {
    const ds = dataSource as ImageryLayerDataSource
    const isImagery = dataSource.type === AllDataSourceTypes.ImageryLayer
    const isOrientedImagery = dataSource.type === AllDataSourceTypes.OrientedImageryLayer
    const notToLoad = dataSource?.getDataSourceJson()?.isDataInDataSourceInstance
    let imageLayer
    if (dataRecords?.length > 0) {
      return dataSourceUtils.createJSAPIFeatureLayerByRecords(ds, dataRecords as FeatureDataRecord[])
    } else {
      const curQuery: any = ds.getCurrentQueryParams()
      if (notToLoad) {
        const q: FeatureLayerQueryParams = {
          returnGeometry: true,
          outFields: ['*'],
          notAddFieldsToClient: true
        }
        // Current data source is selection view and selection view is empty indicate that widget is actually using no_selection now.
        const usingNoSelectionView = ds.dataViewId === SELECTION_DATA_VIEW_ID && (!(ds as any).sourceRecords || (ds as any).sourceRecords.length === 0)
        // If widget is using no_selection view, should use pageSize of the no_selection view to load records.
        if (usingNoSelectionView) {
          const noSelectionView = ds.getMainDataSource().getDataView(DATA_VIEW_ID_FOR_NO_SELECTION)
          if (noSelectionView) {
            q.pageSize = ds.getMainDataSource().getDataSourceJson()?.dataViews?.[DATA_VIEW_ID_FOR_NO_SELECTION]?.pageSize
          }
        }
        // chart output and selected features need load
        return ds.query(q).then(async ({ records }) => {
          const dataRecords = await Promise.resolve(records) as FeatureDataRecord[]
          return dataSourceUtils.createJSAPIFeatureLayerByRecords(ds, dataRecords)
        })
      }
      if (ds.itemId) {
        const layerId = ds.layerId ? parseInt(ds.layerId) : ''
        const layerConfig = {
          portalItem: {
            id: ds.itemId,
            portal: {
              url: ds.portalUrl
            }
          },
          definitionExpression: curQuery.where,
          layerId: layerId || undefined
        }
        if (ds.url) (layerConfig as any).url = ds.url
        imageLayer = isImagery ? new this.ImageryLayer(layerConfig) : new this.OrientedImageryLayer(layerConfig)
      } else if (ds.url) {
        imageLayer = isImagery
          ? new this.ImageryLayer({
            definitionExpression: curQuery.where,
            url: ds.url
          })
          : new this.OrientedImageryLayer({
            definitionExpression: curQuery.where,
            url: ds.url
          })
      } else if (ds.layer) {
        return ds?.createJSAPILayerByDataSource().then(layer => {
          return layer
        })
      }
    }
    if (isImagery) {
      if (!this.ImageryLayer) return Promise.resolve(imageLayer)
    } else if (isOrientedImagery) {
      if (!this.OrientedImageryLayer) return Promise.resolve(imageLayer)
    }
    return Promise.resolve(imageLayer)
  }

  getFeatureLayer = (dataSource: QueriableDataSource, dataRecords?: DataRecord[]): Promise<any> => {
    if (dataSource.type === AllDataSourceTypes.ImageryLayer || dataSource.type === AllDataSourceTypes.OrientedImageryLayer) {
      return this.getImageryLayer(dataSource, dataRecords)
    }
    const ds = dataSource as FeatureLayerDataSource
    const notToLoad = dataSource?.getDataSourceJson()?.isDataInDataSourceInstance
    let featureLayer
    if (dataRecords?.length > 0) {
      return dataSourceUtils.createJSAPIFeatureLayerByRecords(ds, dataRecords as FeatureDataRecord[])
    } else {
      const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
      if (notToLoad) {
        const q: FeatureLayerQueryParams = {
          returnGeometry: true,
          outFields: ['*'],
          notAddFieldsToClient: true
        }
        // Current data source is selection view and selection view is empty indicate that widget is actually using no_selection now.
        const usingNoSelectionView = ds.dataViewId === SELECTION_DATA_VIEW_ID && (!(ds as any).sourceRecords || (ds as any).sourceRecords.length === 0)
        // If widget is using no_selection view, should use pageSize of the no_selection view to load records.
        if (usingNoSelectionView) {
          const noSelectionView = ds.getMainDataSource().getDataView(DATA_VIEW_ID_FOR_NO_SELECTION)
          if (noSelectionView) {
            q.pageSize = ds.getMainDataSource().getDataSourceJson()?.dataViews?.[DATA_VIEW_ID_FOR_NO_SELECTION]?.pageSize
          }
        }
        // chart output and selected features need load
        return ds.query(q).then(async ({ records }) => {
          const dataRecords = await Promise.resolve(records) as FeatureDataRecord[]
          return dataSourceUtils.createJSAPIFeatureLayerByRecords(ds, dataRecords)
        })
      }
      // Adjust the order, because ds.layer is a reference type that changes the original data
      // csv upload type ds: only have layer, but not itemId and url
      if (!this.FeatureLayer) return Promise.resolve(featureLayer)
      if (ds.itemId) {
        const layerId = ds.layerId ? parseInt(ds.layerId) : ''
        const layerConfig = {
          portalItem: {
            id: ds.itemId,
            portal: {
              url: ds.portalUrl
            }
          },
          definitionExpression: curQuery.where,
          layerId: layerId || undefined
        }
        if (ds.url) (layerConfig as any).url = ds.url
        featureLayer = new this.FeatureLayer(layerConfig)
      } else if (ds.url) {
        featureLayer = new this.FeatureLayer({
          definitionExpression: curQuery.where,
          url: ds.url
        })
      } else if (ds.layer) {
        // The original method of creating a layer by querying records will lose
        // the data in ds when the filter is set first and then view in table.
        return ds?.createJSAPILayerByDataSource().then(layer => {
          return layer
        })
      } else {
        return Promise.resolve(featureLayer)
      }
    }
    if (notToLoad) { // output ds (dynamic layer, load will rise bug)
      return Promise.resolve(featureLayer)
    } else { // need load to get layer.capabilities
      return featureLayer.load().then(async () => {
        return await Promise.resolve(featureLayer)
      })
    }
  }

  getDsAccessibleInfo = (url: string) => {
    if (!url) return Promise.resolve(false)
    const request = esri.restRequest.request
    return request(`${url}?f=json`).then(info => {
      if (Object.keys(info).includes('error')) {
        return false
      } else {
        return true
      }
    }).catch(err => {
      return false
    })
  }

  getFieldEditable = (layerDefinition, jimuName: string) => {
    const fieldsConfig = layerDefinition?.fields || []
    const orgField = fieldsConfig.find(config => config.name === jimuName)
    const fieldEditable = orgField ? orgField?.editable : true
    return fieldEditable
  }

  dsAsyncSelectTable = (dataSource, selectedItems: DataRecord[] | number[], rowClick: boolean, versionChangeClear?: boolean) => {
    const { id } = this.props
    const tableInstance = this.table as any
    const selectedIds = selectedItems?.map(item => {
      if (item.dataSource) {
        return item.getId()?.toString()
      } else {
        return item?.toString()
      }
    })
    if (versionChangeClear) dataSource.clearSelection()
    const syncSqlResult = (records) => {
      MessageManager.getInstance().publishMessage(
        new DataRecordsSelectionChangeMessage(id, records)
      )
      tableInstance.layer.queryFeatureCount().then(count => {
        count === 0 ? this.setState({ emptyData: true }) : this.setState({ emptyData: false })
      })
      if (records.length > 0) {
        dataSource.selectRecordsByIds(
          records.map(record => record.getId()),
          records
        )
      } else {
        dataSource.clearSelection()
      }
      if (!rowClick) {
        setTimeout(() => {
          this.asyncSelectedRebuild(dataSource)
        }, 500)
      }
    }
    if (selectedIds?.length > 0) {
      dataSource.query({
        objectIds: selectedIds,
        returnGeometry: true,
        outFields: ['*'],
        notAddFieldsToClient: true
      } as QueryParams, { scope: QueryScope.InAllData }).then(result => {
        const records = result?.records
        if (records) syncSqlResult(records)
      })
    } else {
      syncSqlResult([])
    }
  }

  isDataSourceAccessible = (dataSourceId: string, isDataAction?: boolean, actionDataSource?: DataSource): boolean => {
    const hasInstance = !!this.dsManager.getDataSource(dataSourceId)
    let dataSourceIsInProps = false
    if (actionDataSource) {
      dataSourceIsInProps = true
    } else {
      dataSourceIsInProps = isDataAction ? hasInstance : (this.props.useDataSources?.filter(useDs => dataSourceId === useDs.dataSourceId).length > 0)
    }
    return dataSourceIsInProps
  }

  resetUpdatingStatus = (emptyTable: boolean = false) => {
    this.dataSourceChange = false
    this.dataActionCanLoad = true
    this.updatingTable = false
    this.setState({ emptyTable })
  }

  getIsAdvancedPermission = async (currentLayerDs): Promise<boolean> => {
    if (!currentLayerDs) return false
    const layerItemInfo = await currentLayerDs?.fetchItemInfo().then(info => {
      return info
    }).catch(err => {
      console.warn(err)
    })
    if (!layerItemInfo || !layerItemInfo.url) return false
    // user is admin/owner, or user and item are in the same update org
    // If there is no portalUrl, it means it's non-hosted (sampleserver6)
    const portalUrl = ServiceManager.getInstance().getServerInfoByServiceUrl(layerItemInfo.url)?.owningSystemUrl
    if (!portalUrl) return false
    const sessionForItem = SessionManager.getInstance().getSessionByUrl(portalUrl)
    // If there is no session, it means there was no pop-up login
    if (!sessionForItem) return false
    const user = await sessionForItem.getUser()
    const isAdmin = user?.role === 'org_admin' && layerItemInfo?.isOrgItem
    const isOwner = layerItemInfo.owner === user?.username
    const isInUpdatedGroup = await privilegeUtils.isItemInTheUpdatedGroup(layerItemInfo.id, sessionForItem)
    return isAdmin || isOwner || isInUpdatedGroup
  }

  getFilteredUseFields = (schemaFields, definitionFields) => {
    let filteredUseFields = []
    const schemaFieldsKeys = Object.keys(schemaFields)
    // use layer definition fields
    if (definitionFields?.length >= schemaFieldsKeys?.length) {
      filteredUseFields = definitionFields.filter(item => schemaFieldsKeys.includes(item.jimuName || item.name))
    } else {
      schemaFieldsKeys.forEach(key => {
        const currentField = schemaFields[key]
        const hasDefinitionField = definitionFields.find(field => field.name === key)
        // some definition has domain info, if exist, need to merge this info into schemaFields
        filteredUseFields.push({
          ...currentField,
          ...hasDefinitionField
        })
      })
    }
    return filteredUseFields
  }

  dsAsyncClick = (dataSource, selectedItems: DataRecord[] | number[], rowClick: boolean, versionChangeClear?: boolean) => {
    if (this.clickTimer) {
      clearTimeout(this.clickTimer)
    }
    this.clickTimer = setTimeout(() => {
      this.dsAsyncSelectTable(dataSource, selectedItems, rowClick)
      clearTimeout(this.clickTimer)
      this.clickTimer = null
    }, 400)
  }

  getLayerAndNewTable = (dataSource: QueriableDataSource, curLayerConfig: LayersConfig, dataRecords: DataRecord[]) => {
    const { tableShowColumns, selectQueryFlag } = this.state
    const { id } = this.props
    const newId = this.currentRequestId + 1
    this.currentRequestId++
    const isSceneLayer = dataSource?.type === AllDataSourceTypes.SceneLayer || dataSource?.type === AllDataSourceTypes.BuildingComponentSubLayer
    const dataSourceUsed = isSceneLayer ? (dataSource as SceneLayerDataSource).getAssociatedDataSource() : dataSource
    if (dataSourceUsed) {
      const getPrivilege = () => {
        return privilegeUtils.checkExbAccess(privilegeUtils.CheckTarget.Experience).then(exbAccess => {
          return exbAccess?.capabilities
        })
      }
      const tablePromise = cancelablePromise.cancelable(this.getFeatureLayer(dataSourceUsed, dataRecords).then(async layer => {
        if (newId !== this.currentRequestId || !layer || !this.FeatureTable || !this.refs.currentEl || !this.refs.tableContainer || !document) {
          this.resetUpdatingStatus()
          return
        }
        const featureLayer = layer?.layer || layer
        // If 'view in table', use selection view as layer dataSource
        let layerDs = null
        if (dataRecords?.length > 0) {
          this.viewTableId++
          const newDsId = `${dataSourceUsed.id}-${id}-view_in_table-${this.viewTableId}`
          const newSourceLabel = `${dataSourceUsed.belongToDataSource?.getDataSourceJson().sourceLabel}-${this.viewTableId}`
          const layerDsJson = Immutable({
            id: newDsId,
            type: DataSourceTypes.FeatureLayer,
            sourceLabel: newSourceLabel
          })
          const layerDsOption = {
            id: newDsId,
            dataSourceJson: layerDsJson,
            layer: featureLayer
          }
          layerDs = await this.dsManager.createDataSource(layerDsOption)
          this.setState({ dataSource: layerDs as QueriableDataSource })
        }
        // fetch to confirm whether it's a public source
        const accessible = await this.getDsAccessibleInfo(layer?.url)
        // use exb privilege instead of api's supportsUpdateByOthers
        const privilege = await getPrivilege()
        const privilegeEditable = privilege?.canEditFeature
        // New logic of API: The user with advanced permissions can modify the configuration regardless of the configuration
        const isAdvancedPermission = await this.getIsAdvancedPermission(layerDs || dataSource)
        // full editing privileges
        const fullEditingPrivileges = featureLayer?.userHasFullEditingPrivileges
        // check layer capabilities for delete operation
        const layerDefinition = (dataSource as FeatureLayerDataSource)?.getLayerDefinition()
        const layerEditingEnabled = featureLayer?.editingEnabled ?? true
        const isHonorWebmap = curLayerConfig.layerHonorMode === LayerHonorModeType.Webmap
        const canEditFeature = accessible || privilegeEditable
        const normalEditPermission = isHonorWebmap ? canEditFeature : curLayerConfig.enableEdit && canEditFeature
        const normalDeletePermission = isHonorWebmap ? canEditFeature : curLayerConfig.enableDelete && canEditFeature
        let editable = false
        let deletable = false
        if (isAdvancedPermission || (fullEditingPrivileges && layerEditingEnabled)) {
          editable = true
          deletable = true
        } else if (fullEditingPrivileges && !layerEditingEnabled) {
          editable = false
          deletable = false
        } else {
          editable = normalEditPermission
          deletable = normalDeletePermission
        }
        // 'deletable' obtained by advanced permission is not used for the time being #13361
        // this.setState({ allowDel: deletable })
        this.setState({
          allowDel: curLayerConfig.enableDelete && canEditFeature,
          exbPrivilege: canEditFeature
        })
        // fieldConfigs: Priority needs to be considered for 'editable'
        const allFieldsSchema = (dataSourceUsed as DataSource)?.getSchema()
        // sort fields
        const queryParams = dataSource?.getCurrentQueryParams()
        const sortFieldsArray = (queryParams as any)?.orderByFields || []
        const sortFields = {}
        sortFieldsArray.forEach((item, index) => {
          const fieldSort = item.split(' ')
          sortFields[fieldSort[0]] = { direction: fieldSort[1]?.toLowerCase(), initialSortPriority: index }
        })
        // construct tableTemplate
        const columnSetting = curLayerConfig.columnSetting
        const fieldColumnAttr = columnSetting?.responsiveType === ResponsiveType.Fit ? { autoWidth: true } : { autoWidth: false, width: columnSetting?.columnWidth || 200 }
        const { allFields } = this.getFieldsFromDatasource()
        const curColumns = tableShowColumns ? tableShowColumns.map(col => { return { jimuName: col.value } }) : curLayerConfig.tableFields.filter(item => item.visible)
        const invisibleColumns = minusArray(allFields, curColumns).map(item => {
          return item.jimuName
        })
        // For dataview, need to merge its sorting information into default
        let tableTemplate: __esri.TableTemplate
        if (isHonorWebmap) { //  && dataSource.isDataView && dataSource?.dataViewId !== OUTPUT_DATA_VIEW_ID
          const popupInfo = (dataSource as FeatureLayerDataSource)?.getPopupInfo()
          const popupAllFieldInfos = popupInfo?.fieldInfos || []
          // use schemaFields to filter used fields, some field is special and invisible in schema
          const schemaFieldsKeys = Object.keys(allFieldsSchema?.fields)
          const filteredPopupFieldInfos = popupAllFieldInfos.filter(item => schemaFieldsKeys.includes(item.fieldName))
          const useFields = layerDefinition?.fields?.length > 0 ? layerDefinition.fields : allFields
          const filteredUseFields = this.getFilteredUseFields(allFieldsSchema?.fields, useFields)
          tableTemplate = popupInfo?.fieldInfos?.length > 0
            ? new this.TableTemplate({
              columnTemplates: filteredPopupFieldInfos.map(item => {
                const itemKey = item.fieldName
                return {
                  ...item,
                  ...fieldColumnAttr,
                  type: 'field',
                  editable: item.isEditable ?? false,
                  ...(sortFields[itemKey] ? sortFields[itemKey] : {})
                }
              })
            })
            : new this.TableTemplate({
              columnTemplates: filteredUseFields.map(item => {
                const itemKey = item.jimuName || item.name
                return {
                  ...item,
                  ...fieldColumnAttr,
                  type: 'field',
                  fieldName: itemKey,
                  label: item.alias || item.name,
                  editable: this.getFieldEditable(layerDefinition, itemKey),
                  visible: true,
                  ...(sortFields[itemKey] ? sortFields[itemKey] : {})
                }
              })
            })
        } else if (!isHonorWebmap) {
          tableTemplate = new this.TableTemplate({
            columnTemplates: curLayerConfig.tableFields.map(item => {
              const itemKey = item.jimuName || item.name
              const newItem = allFieldsSchema?.fields?.[itemKey]
              return {
                type: 'field',
                ...fieldColumnAttr,
                fieldName: itemKey,
                label: newItem?.alias,
                ...(editable ? { editable: this.getFieldEditable(layerDefinition, itemKey) && item?.editAuthority } : {}),
                visible: invisibleColumns.indexOf(itemKey) < 0,
                ...(sortFields[itemKey] ? sortFields[itemKey] : {})
              }
            })
          })
        }
        // when unselect all fields, do not render table
        if (tableTemplate?.columnTemplates?.length === 0 && !isHonorWebmap) {
          this.resetUpdatingStatus()
          return
        }
        if (editable || deletable) {
          // eslint-disable-next-line
          const that = this
          featureLayer.on('edits', function (event) {
            const { updatedFeatures, deletedFeatures } = event
            // There is no 'add' in api for now
            const updates = updatedFeatures && updatedFeatures.length > 0
            const deletes = deletedFeatures && deletedFeatures.length > 0
            if (updates) {
              const updateFeature = event?.edits?.updateFeatures?.[0]
              if (updateFeature) {
                const record = dataSource.buildRecord(updateFeature)
                dataSource.afterUpdateRecord(record)
              }
            }
            if (deletes) {
              const deleteFeatures = event?.edits?.deleteFeatures
              if (deleteFeatures.length > 0) {
                const deleteIds = []
                deleteFeatures.forEach(deleteFeature => {
                  const record = dataSource.buildRecord(deleteFeature)
                  deleteIds.push(record.getId())
                })
                dataSource.afterDeleteRecordsByIds(deleteIds)
              }
            }
          })
        }
        const dsGdbVersion = (dataSource as FeatureLayerDataSource).getGDBVersion()
        if (dsGdbVersion) featureLayer.gdbVersion = dsGdbVersion
        const timeExtent = (queryParams as any)?.time
        if (timeExtent) {
          const apiTime = dataSourceUtils.changeJimuTimeToJSAPITimeExtent(timeExtent)
          featureLayer.timeExtent = apiTime
        }
        // Clear table container before create new table.
        this.refs.tableContainer.innerHTML = ''
        const container = document.createElement('div')
        container.className = `table-container-${id}`
        this.refs.tableContainer.appendChild(container)
        this.table = new this.FeatureTable({
          layer: featureLayer,
          container: container,
          visibleElements: {
            header: false,
            menu: false,
            menuItems: {
              clearSelection: false,
              refreshData: false,
              toggleColumns: false
            },
            selectionColumn: false
          },
          menuConfig: { items: [] },
          ...(tableTemplate ? { tableTemplate } : {}),
          multiSortEnabled: true,
          attachmentsEnabled: curLayerConfig.enableAttachements,
          editingEnabled: editable,
          timeZone: this.getTimezone(dataSource)
        })
        // for table total/selected count
        reactiveUtils.watch(() => (this.table?.viewModel as any)?.size, tableTotal => {
          this.setState({ tableTotal })
        })
        reactiveUtils.watch(() => this.table?.highlightIds?.length, tableSelected => {
          this.setState({ tableSelected })
        })
        // table editing state, for api limitation, click through while editing will cause the selected event to be triggered
        reactiveUtils.watch(() => this.table?.columns.some(column => !!(column as any).activeEditInfo), isTableEditing => {
          this.setState({ isTableEditing })
        })
        // When table is not loaded, buttons in tool should be disabled
        reactiveUtils.watch(() => this.table.state, (tableState) => {
          if (tableState === 'loaded') {
            this.setState({ tableLoaded: true })
          } else {
            this.setState({ tableLoaded: false })
          }
        })
        // async selected
        // View in table does not need to be selected synchronously
        const dataActionIsAdd = curLayerConfig.dataActionType === TableDataActionType.Add
        const dataActionObject = curLayerConfig.dataActionObject
        if (!dataActionObject) {
          setTimeout(() => {
            if (selectQueryFlag) this.asyncSelectedWhenSelection(Immutable(dataSource.getSelectedRecordIds() || []))
          }, 500)
        }
        if (dataActionIsAdd) {
          setTimeout(() => {
            this.asyncSelectedRebuild(dataSource)
          }, 500)
        }
        const tableInstance = this.table as any
        // Because the api does not handle the bubbling of double-click events, double-clicking a line to
        // start editing results in selecting and then canceling, so the deferred canceling method is used
        if (curLayerConfig.enableSelect) {
          const rowClickFn = ({ feature, objectId: thisId }) => {
            // click uncontent cell (ed. title)
            if (!feature) return
            // edit mode cancel cell-click
            if (this.state.isTableEditing) return
            // Delay click function
            clearTimeout(this.timerFn)
            this.timerFn = setTimeout(() => {
              this.setState({ selfDsChange: true })
              const objectId = thisId || feature.getObjectId()
              const originalSelected = this.table.highlightIds
              const thisSelected = originalSelected.includes(objectId)
              if (curLayerConfig.selectMode === SelectionModeType.Single) {
                this.table.highlightIds.removeAll()
              }
              thisSelected
                ? this.table.highlightIds.remove(objectId)
                : this.table.highlightIds.add(objectId)
              const selectedIds = tableInstance.highlightIds?.toArray()
              if (selectedIds?.length === 0) {
                if (this.state.selectQueryFlag) this.table.clearSelectionFilter()
                this.resetTableExpression()
                this.setState({ selectQueryFlag: false })
              }
              const isViewSnapshot = curLayerConfig.dataActionType === TableDataActionType.View
              this.dsAsyncClick(isViewSnapshot ? layerDs : dataSource, selectedIds, true)
            }, 200)
          }
          tableInstance.on('cell-click', rowClickFn)
        }
        // dblclick cancel click event
        tableInstance?.domNode?.addEventListener('dblclick', eve => {
          clearTimeout(this.timerFn)
        })
        if (!dataRecords) this.updateGeometryAndSql(dataSource)
        this.resetUpdatingStatus()
      }))
      // cancel previous promise
      if (this.promises.length !== 0) {
        this.promises.forEach(p => { p.cancel() })
      }
      this.promises.push(tablePromise)
    }
  }

  createTable = (newDataSource?) => {
    const { config } = this.props
    const { layersConfig } = config
    const { activeTabId } = this.state
    let { dataSource } = this.state
    if (newDataSource) dataSource = newDataSource
    // add data-action table config to all configs
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const curLayerConfig = allLayersConfig.find(item => item.id === activeTabId)
    if (!curLayerConfig) {
      this.dataActionCanLoad = true
      this.updatingTable = false
      return
    }
    // add data widget data action
    const { dataActionDataSource } = curLayerConfig
    if (dataActionDataSource) {
      dataSource = dataActionDataSource as QueriableDataSource
    }
    if (!dataSource || notLoad.includes(dataSource?.getInfo()?.status)) {
      this.dataActionCanLoad = true
      this.updatingTable = false
      return
    }
    // ds judgment
    const dataActionObject = curLayerConfig.dataActionObject
    if (dataSource?.dataViewId === SELECTION_DATA_VIEW_ID) {
      if (!dataSource?.getDataSourceJson()?.isDataInDataSourceInstance ||
        (!dataActionObject && dataSource?.getSourceRecords().length === 0)
      ) {
        this.resetUpdatingStatus(true)
        return
      } else {
        this.setState({ emptyTable: false })
      }
    }
    // Determine whether the ds has change to curLayer's ds
    const curDsId = dataActionDataSource ? dataActionDataSource?.id : curLayerConfig?.useDataSource?.dataSourceId
    const isCurDs = curLayerConfig.dataActionType === TableDataActionType.View || curDsId === dataSource?.id
    if (!isCurDs) {
      this.dataActionCanLoad = true
      this.updatingTable = false
      return
    }
    // Check whether ds is available
    if (!this.isDataSourceAccessible(curDsId, dataActionObject, dataActionDataSource)) {
      this.resetUpdatingStatus(true)
      return
    }
    const dataRecords = this.dataActionTableRecords[curLayerConfig.id]
    if (dataActionObject) {
      if (curDsId) {
        dataSource = this.dsManager.getDataSource(curDsId) as QueriableDataSource
      }
    }
    this.getLayerAndNewTable(dataSource, curLayerConfig, dataRecords)
  }

  asyncSelectedRebuild = (dataSource: QueriableDataSource) => {
    const { selectRecords } = this.state
    let selectedRecordIds = dataSource?.getSelectedRecordIds()
    const belongToSelectedRecordIds = dataSource?.belongToDataSource?.getSelectedRecordIds() || []
    if (dataSource.isDataView && selectedRecordIds.length !== belongToSelectedRecordIds.length) {
      selectedRecordIds = belongToSelectedRecordIds || selectedRecordIds
    }
    this.table?.highlightIds?.removeAll && this.table.highlightIds.removeAll()
    // selection passed from URL parameters
    const curSelectRecords = dataSource?.getSelectedRecords()
    if (curSelectRecords && !lodash.isDeepEqual(selectRecords, curSelectRecords)) {
      this.setState({ selectRecords: curSelectRecords })
    }
    // Synchronize new selection (the record of selectedRecords has different structure)
    // layer/url ds: the featuresArray's structure is not match the 'deselectRows', use primary id
    if (selectedRecordIds?.length > 0) {
      selectedRecordIds.forEach(recordId => {
        if (recordId) this.table?.highlightIds?.add && this.table.highlightIds.add(parseInt(recordId))
      })
    }
  }

  async destroyTable () {
    if (this.table) {
      !this.table.destroyed && this.table.destroy()
    }
    // Clear table container after destroy table.
    if (this.refs.tableContainer) {
      this.refs.tableContainer.innerHTML = ''
    }
    await Promise.resolve()
  }

  formatMessage = (id: string, values?: { [key: string]: any }) => {
    return this.props.intl.formatMessage(
      { id: id, defaultMessage: messages[id] },
      values
    )
  }

  onTagClick = (dataSourceId: string) => {
    const { id } = this.props
    this.setState({
      activeTabId: dataSourceId,
      selectQueryFlag: false,
      tableShowColumns: undefined,
      tableSelected: 0
    })
    this.props.dispatch(
      appActions.widgetStatePropChange(id, 'activeTabId', dataSourceId)
    )
  }

  handleTagChange = evt => {
    const dataSourceId = evt?.target?.value
    const { id } = this.props
    this.setState({
      activeTabId: dataSourceId,
      selectQueryFlag: false,
      tableSelected: 0
    })
    this.props.dispatch(
      appActions.widgetStatePropChange(id, 'activeTabId', dataSourceId)
    )
  }

  onShowSelection = () => {
    const { selectQueryFlag } = this.state
    if (selectQueryFlag) {
      this.table.clearSelectionFilter()
      this.resetTableExpression()
    } else {
      this.table.filterBySelection()
    }
    this.setState({ selectQueryFlag: !selectQueryFlag })
  }

  resetTableExpression = () => {
    const { dataSource } = this.state
    if (this.table?.layer) {
      const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
      const sqlExpression = curQuery.where
      const tableInstance = this.table as any
      tableInstance.layer.definitionExpression = sqlExpression
    }
  }

  resetTable = () => {
    const { id } = this.props
    const { selectQueryFlag, dataSource } = this.state
    if (selectQueryFlag) {
      // reset sql
      this.resetTableExpression()
      this.setState({
        selectQueryFlag: false,
        selfDsChange: true
      })
    }
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(id, [])
    )
    setTimeout(() => {
      this.setState({ searchText: '' })
      dataSource.clearSelection()
      dataSource.updateQueryParams(EMPTY_QUERY_PARAMS, id)
      this.table && this.table.highlightIds.removeAll()
      this.table && this.table.clearSelectionFilter()
    }, 500)
  }

  onSelectionClear = () => {
    this.resetTable()
  }

  onTableRefresh = () => {
    this.table && this.table.refresh()
  }

  onDeleteSelection = () => {
    this.table && this.table.deleteSelection(true)
  }

  getQueryOptions = (curLayer: LayersConfig) => {
    let where = '1=1'
    let sqlExpression = null
    const { useDataSources } = this.props
    const { searchText, dataSource } = this.state
    const useDS = useDataSources && useDataSources[0]
    if (!dataSource || !useDS) return null
    // not queryiable data source, return
    if (!(dataSource).query) {
      return null
    }
    if (searchText && curLayer.enableSearch && curLayer.searchFields) {
      const result = dataSourceUtils.getSQL(searchText, curLayer.searchFields, dataSource, curLayer?.searchExact)
      where = result.sql
      sqlExpression = result
    }
    return { where, sqlExpression }
  }

  handleChange = (searchText: string) => {
    if (!searchText) {
      this.setState({ searchText, isShowSuggestion: false, searchSuggestion: [] }, () => {
        this.handleSubmit()
      })
    } else {
      this.setState({ searchText, isShowSuggestion: searchText?.length > 2 }, () => {
        clearTimeout(this.suggestionsQueryTimeout)
        this.suggestionsQueryTimeout = setTimeout(() => {
          this.getSearchSuggestions(searchText)
        }, 200)
      })
    }
  }

  getSearchSuggestions = (searchText: string) => {
    const { config } = this.props
    const { dataSource, activeTabId } = this.state
    if (searchText?.length < 3) {
      return false
    }
    const curLayer = config.layersConfig?.find(
      item => item.id === activeTabId
    )
    fetchSuggestionRecords(searchText, curLayer, dataSource).then(
      searchSuggestion => {
        this.setState({ searchSuggestion })
      }
    )
  }

  handleSubmit = () => {
    const { dataSource } = this.state
    const { id } = this.props
    const curLayer = this.props.config.layersConfig.find(
      item => item.id === this.state.activeTabId
    )
    if (!curLayer || !dataSource) return
    const tableQuery = this.getQueryOptions(curLayer)
    dataSource.updateQueryParams(tableQuery as QueryParams, id)
  }

  onKeyUp = evt => {
    if (!evt || !evt.target) return
    if (evt.key === 'Enter') {
      this.setState({ isShowSuggestion: false }, () => {
        this.handleSubmit()
      })
    }
  }

  getTextInputPrefixElement = () => {
    const { theme } = this.props
    return (
      <Button
        type='tertiary'
        icon
        size='sm'
        onClick={evt => {
          this.setState({
            isShowSuggestion: false
          }, () => {
            this.handleSubmit()
          })
        }}
        className='search-icon'
      >
        <SearchOutlined color={theme.ref.palette.neutral[700]} />
      </Button>
    )
  }

  renderSearchTools = (hint?: string) => {
    const { searchText, searchToolFlag, isOpenSearchPopper, tableLoaded } = this.state
    const { theme } = this.props

    return (
      <div className='table-search-div'>
        {searchToolFlag
          ? (
            <div
              className='float-right'
              ref={ref => (this.refs.searchPopup = ref)}
            >
              <Button
                type='tertiary'
                icon
                size='sm'
                className='tools-menu'
                title={this.formatMessage('search')}
                onClick={evt => {
                  this.setState({ isOpenSearchPopper: !isOpenSearchPopper })
                }}
              >
                <SearchOutlined />
              </Button>
              <Popper
                placement='right-start'
                reference={this.refs.searchPopup}
                offset={[-10, -30]}
                open={isOpenSearchPopper}
                showArrow={false}
                toggle={e => {
                  this.setState({ isOpenSearchPopper: !isOpenSearchPopper })
                }}
              >
                <div className='d-flex align-items-center table-popup-search m-2'>
                  <Button
                    type='tertiary'
                    icon
                    size='sm'
                    onClick={evt => {
                      this.setState({ isOpenSearchPopper: false })
                    }}
                    className='search-back mr-1'
                  >
                    <ArrowLeftOutlined color={theme.ref.palette.neutral[1100]} />
                  </Button>
                  <TextInput
                    className='popup-search-input'
                    placeholder={hint || this.formatMessage('search')}
                    onChange={e => { this.handleChange(e.target.value) }}
                    value={searchText || ''}
                    onKeyDown={e => { this.onKeyUp(e) }}
                    prefix={this.getTextInputPrefixElement()}
                    allowClear
                    title={hint || this.formatMessage('search')}
                    disabled={!tableLoaded}
                  />
                </div>
              </Popper>
            </div>
            )
          : (
            <div className='d-flex align-items-center table-search'>
              <TextInput
                className='search-input'
                placeholder={hint || this.formatMessage('search')}
                onChange={e => { this.handleChange(e.target.value) }}
                value={searchText || ''}
                onKeyDown={e => { this.onKeyUp(e) }}
                prefix={this.getTextInputPrefixElement()}
                allowClear
                title={hint || this.formatMessage('search')}
                disabled={!tableLoaded}
              />
            </div>
            )}
      </div>
    )
  }

  getInitFields = () => {
    const { activeTabId, dataSource } = this.state
    const { config } = this.props
    const { layersConfig } = config
    // data-action Table
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const curLayer = allLayersConfig.find(item => item.id === activeTabId)
    const { tableFields, allFields, layerHonorMode } = curLayer
    const initSelectTableFields: ClauseValuePair[] = []
    // honor layer settings
    const isHonorWebmap = layerHonorMode === LayerHonorModeType.Webmap
    if (isHonorWebmap && dataSource) {
      const popupInfo = (dataSource as FeatureLayerDataSource)?.getPopupInfo()
      if (popupInfo) {
        const popupAllFieldInfos = popupInfo.fieldInfos || []
        for (const item of popupAllFieldInfos) {
          initSelectTableFields.push({ value: item.fieldName, label: item.label })
        }
      } else {
        // if popupInfo is null, use 'allFields' instead
        for (const item of allFields) {
          initSelectTableFields.push({ value: item.name, label: item.alias })
        }
      }
    } else {
      for (const item of tableFields) {
        if (item.visible) initSelectTableFields.push({ value: item.name, label: item.alias })
      }
    }
    return initSelectTableFields
  }

  onValueChangeFromRuntime = (valuePairs: ClauseValuePair[]) => {
    if (!valuePairs) valuePairs = []
    const { tableShowColumns } = this.state
    const initTableFields = this.getInitFields()
    const tableColumns = tableShowColumns || initTableFields
    const selectFlag = valuePairs.length > tableColumns.length
    minusArray(tableColumns, valuePairs, 'value').forEach(item => {
      selectFlag
        ? this.table.showColumn(item.value)
        : this.table.hideColumn(item.value)
    })
    this.setState({ tableShowColumns: valuePairs })
  }

  getDataActionTable = () => {
    const { viewInTableObj } = this.props
    const dataActionTableArray = []
    for (const key in viewInTableObj) {
      const tableObj = viewInTableObj[key]
      this.dataActionTableRecords[key] = tableObj.records
      dataActionTableArray.push({ ...tableObj.daLayerItem })
    }
    return dataActionTableArray
  }

  onCloseTab = (tabId: string, evt?) => {
    const { id, viewInTableObj } = this.props
    if (evt) evt.stopPropagation()
    this.removeConfig = true
    this.setState({
      tableShowColumns: undefined,
      tableTotal: 0,
      tableSelected: 0
    })
    const newViewInTableObj = viewInTableObj
    delete newViewInTableObj[tabId]
    delete this.dataActionTableRecords[tabId]
    MutableStoreManager.getInstance().updateStateValue(id, 'viewInTableObj', newViewInTableObj)
  }

  getLoadingStatus = (ds?: QueriableDataSource, queryStatus?: DataSourceStatus) => {
    const { stateShowLoading: mustLoading } = this.props
    // loading
    let showLoading = false
    if (
      mustLoading ||
      window.jimuConfig.isInBuilder ||
      (ds && queryStatus === DataSourceStatus.Loading)
    ) {
      showLoading = true
    }
    return showLoading
  }

  setRefreshLoadingString = (showLoading = false) => {
    if (!showLoading) return false
    let time = 0
    // eslint-disable-next-line
    const _this = this
    clearInterval(this.autoRefreshLoadingTime)

    this.autoRefreshLoadingTime = setInterval(() => {
      time++
      _this.setState({
        autoRefreshLoadingString: _this.getLoadingString(time)
      })
    }, 60000)
  }

  getLoadingString = (time: number): string => {
    let loadingString = this.formatMessage('lastUpdateAFewTime')
    if (time > 1 && time <= 2) {
      loadingString = this.formatMessage('lastUpdateAMinute')
    } else if (time > 2) {
      loadingString = this.formatMessage('lastUpdateTime', { updateTime: time })
    }
    return loadingString
  }

  toggleAutoRefreshLoading = (ds: QueriableDataSource, showLoading: boolean, interval: number) => {
    this.resetAutoRefreshTimes(interval, showLoading)
    if (interval > 0) this.setRefreshLoadingString(showLoading)
  }

  resetAutoRefreshTimes = (interval: number, showLoading = false) => {
    // eslint-disable-next-line
    const _this = this
    clearTimeout(this.resetAutoRefreshTime)
    if (interval <= 0) clearInterval(this.autoRefreshLoadingTime)

    this.resetAutoRefreshTime = setTimeout(() => {
      if (showLoading && interval > 0) {
        _this.setState({
          autoRefreshLoadingString: _this.formatMessage('lastUpdateAFewTime')
        })
      }
      _this.setState({
        showLoading: showLoading
      })
    }, 0)
  }

  renderLoading = (showLoading: boolean, interval: number) => {
    const { autoRefreshLoadingString, bottomResponsiveFlag, widgetWidth } = this.state
    const countContainerWidth = this.refs.countContainer?.clientWidth || 0
    const refreshMaxWidth = bottomResponsiveFlag ? 20 : widgetWidth - countContainerWidth - 16
    return (
      <div className='position-absolute refresh-loading-con d-flex align-items-center' style={{ maxWidth: refreshMaxWidth }}>
        {showLoading && <div className='loading-con' />}
        {interval > 0 && (
          <div className='flex-grow-1 auto-refresh-loading text-truncate' title={!bottomResponsiveFlag && autoRefreshLoadingString}>
            {bottomResponsiveFlag
              ? <Tooltip title={autoRefreshLoadingString} showArrow placement='top-end'>
                <Button icon size='sm' type='tertiary' className='d-inline jimu-outline-inside border-0 p-0'>
                  <InfoOutlined size={14}/>
                </Button>
              </Tooltip>
              : autoRefreshLoadingString
            }
          </div>
        )}
      </div>
    )
  }

  renderTableCount = (tableTotal: number, tableSelected: number) => {
    const { bottomResponsiveFlag, widgetWidth } = this.state
    const countMaxWidth = bottomResponsiveFlag ? widgetWidth - 36 : widgetWidth / 2
    const formattedCount = i18n.getIntl().formatNumber(tableTotal, { useGrouping: true })
    const formattedSelected = i18n.getIntl().formatNumber(tableSelected, { useGrouping: true })
    return (
      <div ref='countContainer' className='position-absolute table-count d-flex align-items-center' style={{ maxWidth: countMaxWidth }}>
        <div className='flex-grow-1 total-count-text text-truncate'>
          {this.formatMessage('tableCount', { total: formattedCount, selected: formattedSelected })}
        </div>
      </div>
    )
  }

  onSuggestionConfirm = suggestion => {
    this.setState({
      searchText: suggestion,
      isShowSuggestion: false
    }, () => {
      this.handleSubmit()
    })
  }

  clearMessageAction = () => {
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(this.props.id, [])
    )
    this.setState({ emptyData: false })
  }

  customShowHideButton = () => {
    return <ListVisibleOutlined />
  }

  customShowHideDropdownButton = () => {
    return <Fragment>
      <ListVisibleOutlined className='mr-1'/>
      {this.formatMessage('showHideCols')}
    </Fragment>
  }

  getUsedFields = (curLayer: LayersConfig, dataSource: QueriableDataSource) => {
    if (!curLayer) return { popupAllFields: [], actionUsedFields: [] }
    const popupAllFields: ClauseValuePair[] = []
    if (dataSource) {
      const allFieldsSchema = dataSource?.getSchema()
      const schemaFieldsKeys = Object.keys(allFieldsSchema?.fields)
      const popupInfo = (dataSource as FeatureLayerDataSource)?.getPopupInfo()
      if (popupInfo) {
        const popupAllFieldInfos = popupInfo.fieldInfos || []
        const filteredPopupFieldInfos = popupAllFieldInfos.filter(item => schemaFieldsKeys.includes(item.fieldName))
        for (const item of filteredPopupFieldInfos) {
          if (item.visible) popupAllFields.push({ value: item.fieldName, label: item.label || item.fieldName })
        }
      } else {
        // if popupInfo is null, use definition or 'allFields' instead
        const layerDefinitionFields = (dataSource as FeatureLayerDataSource)?.getLayerDefinition()?.fields
        const useFields = layerDefinitionFields?.length > 0 ? layerDefinitionFields : curLayer.allFields
        const filteredUseFields = (useFields as any[]).filter(item => schemaFieldsKeys.includes(item.jimuName || item.name))
        for (const item of filteredUseFields) {
          popupAllFields.push({ value: item.name, label: item.alias || item.name })
        }
      }
    }
    const isHonorWebmap = curLayer.layerHonorMode === LayerHonorModeType.Webmap
    const actionUsedFields = isHonorWebmap ? popupAllFields.map(item => item.value as string) : curLayer.tableFields.map(item => item.jimuName)
    return { popupAllFields, actionUsedFields }
  }

  renderButtonToolList = (curLayer: LayersConfig, dataSource: QueriableDataSource) => {
    const {
      activeTabId,
      selectQueryFlag,
      tableShowColumns,
      mobileFlag,
      emptyTable,
      tableLoaded,
      tableSelected,
      allowDel
    } = this.state
    const { config, id, enableDataAction } = this.props
    const { layersConfig } = config
    const hasSelected = tableSelected > 0
    const initSelectTableFields = this.getInitFields()
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const isHonorWebmap = curLayer.layerHonorMode === LayerHonorModeType.Webmap
    const advancedTableField: ClauseValuePair[] = curLayer.tableFields?.map(item => {
      return { value: item.name, label: item.alias }
    })
    const { popupAllFields, actionUsedFields } = this.getUsedFields(curLayer, dataSource)
    const dataSourceLabel = dataSource?.getLabel()
    const dataName = this.formatMessage('tableDataActionLabel', { layer: dataSourceLabel || '' })

    return <div className='top-button-list'>
      {curLayer.enableSelect && (
        <div className='top-button ml-2'>
          <Button
            size='sm'
            onClick={this.onShowSelection}
            icon
            title={
              selectQueryFlag
                ? this.formatMessage('showAll')
                : this.formatMessage('showSelection')
            }
            disabled={!tableLoaded || emptyTable || !hasSelected}
          >
            {selectQueryFlag ? <MenuOutlined /> : <ShowSelectionOutlined autoFlip/>}
          </Button>
        </div>
      )}
      {curLayer.enableSelect &&
        <div className='top-button ml-2'>
          <Button
            size='sm'
            onClick={this.onSelectionClear}
            icon
            title={this.formatMessage('clearSelection')}
            disabled={!tableLoaded || emptyTable || !hasSelected}
          >
            <ClearSelectionGeneralOutlined />
          </Button>
        </div>
      }
      {curLayer.enableRefresh &&
        <div className='top-button ml-2'>
          <Button
            size='sm'
            onClick={this.onTableRefresh}
            icon
            title={this.formatMessage('refresh')}
            disabled={!tableLoaded || emptyTable}
          >
            <RefreshOutlined />
          </Button>
        </div>
      }
      {allowDel &&
        <div className='top-button ml-2'>
          <Button
            size='sm'
            onClick={this.onDeleteSelection}
            icon
            title={this.formatMessage('deleteRecords')}
            disabled={!tableLoaded || emptyTable || !hasSelected}
          >
            <TrashOutlined />
          </Button>
        </div>
      }
      <div className='top-button ml-2'>
        <AdvancedSelect
          size='sm'
          title={this.formatMessage('showHideCols')}
          buttonProps={{ icon: true, disabled: !tableLoaded || emptyTable, arrow: false }}
          fluid
          staticValues={isHonorWebmap ? popupAllFields : advancedTableField}
          sortValuesByLabel={false}
          isMultiple
          selectedValues={tableShowColumns || initSelectTableFields}
          isEmptyOptionHidden={false}
          onChange={this.onValueChangeFromRuntime}
          customDropdownButtonContent={this.customShowHideButton}
        />
      </div>
      {dataSource && !mobileFlag && enableDataAction &&
        <Fragment>
          {
            allLayersConfig.map(item => {
              const isCurrentDataSource = item.id === activeTabId
              const dataActionDropdown = isCurrentDataSource && !emptyTable
                ? <Fragment key={item.id}>
                  <span className='tool-dividing-line'></span>
                  <div className='top-button data-action-btn'>
                    <DataActionList
                      widgetId={id}
                      listStyle={DataActionListStyle.Dropdown}
                      dataSets={[{ dataSource, type: 'selected', records: dataSource.getSelectedRecords(), fields: actionUsedFields, name: dataName }]}
                    />
                  </div>
                </Fragment>
                : ''
              return dataActionDropdown
            })
          }
        </Fragment>
      }
    </div>
  }

  renderDropdownToolList = (curLayer: LayersConfig, dataSource: QueriableDataSource) => {
    const {
      activeTabId,
      selectQueryFlag,
      tableShowColumns,
      mobileFlag,
      emptyTable,
      tableLoaded,
      tableSelected,
      allowDel
    } = this.state
    const { config, id, enableDataAction } = this.props
    const { layersConfig } = config
    const hasSelected = tableSelected > 0
    const isHonorWebmap = curLayer.layerHonorMode === LayerHonorModeType.Webmap
    const advancedTableField = curLayer.tableFields?.map(item => {
      return { value: item.name, label: item.alias }
    })
    const initSelectTableFields = this.getInitFields()
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    const { popupAllFields, actionUsedFields } = this.getUsedFields(curLayer, dataSource)
    const dataSourceLabel = dataSource?.getLabel()
    const dataName = this.formatMessage('tableDataActionLabel', { layer: dataSourceLabel || '' })

    return <div className='d-flex ml-2 dropdown-list-container'>
      <Dropdown size='sm' className='d-inline-flex dropdown-list'>
        <DropdownButton
          arrow={false}
          icon
          size='sm'
          title={this.formatMessage('options')}
        >
          <MoreHorizontalOutlined />
        </DropdownButton>
        <DropdownMenu>
          {curLayer.enableSelect &&
            <Fragment>
              <DropdownItem key='showSelection' onClick={this.onShowSelection} disabled={!tableLoaded || emptyTable || !hasSelected}>
                {selectQueryFlag ? <MenuOutlined className='mr-1'/> : <ShowSelectionOutlined className='mr-1' autoFlip/>}
                {selectQueryFlag
                  ? this.formatMessage('showAll')
                  : this.formatMessage('showSelection')
                }
              </DropdownItem>
              <DropdownItem key='clearSelection' onClick={this.onSelectionClear} disabled={!tableLoaded || emptyTable || !hasSelected}>
                <ClearSelectionGeneralOutlined className='mr-1'/>
                {this.formatMessage('clearSelection')}
              </DropdownItem>
            </Fragment>
          }
          {curLayer.enableRefresh &&
            <DropdownItem key='refresh' onClick={this.onTableRefresh} disabled={!tableLoaded || emptyTable}>
              <RefreshOutlined className='mr-1'/>
              {this.formatMessage('refresh')}
            </DropdownItem>
          }
          {allowDel &&
            <DropdownItem key='delete' onClick={this.onDeleteSelection} disabled={!tableLoaded || emptyTable || !hasSelected}>
              <TrashOutlined className='mr-1'/>
              {this.formatMessage('deleteRecords')}
            </DropdownItem>
          }
          <DropdownItem key='showHideCols' tag='div' toggle={false} disabled={!tableLoaded || emptyTable}>
            <AdvancedSelect
              size='sm'
              title={this.formatMessage('showHideCols')}
              buttonProps={{ arrow: false, type: 'tertiary', className: 'p-0 table-hide-hover-color' }}
              fluid
              staticValues={isHonorWebmap ? popupAllFields : advancedTableField}
              sortValuesByLabel={false}
              isMultiple
              selectedValues={tableShowColumns || initSelectTableFields}
              isEmptyOptionHidden={false}
              onChange={this.onValueChangeFromRuntime}
              customDropdownButtonContent={this.customShowHideDropdownButton}
            />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {dataSource && mobileFlag && enableDataAction &&
        <Fragment>
          {
            allLayersConfig.map(item => {
              const isCurrentDataSource = item.id === activeTabId
              const dataActionDropdown = isCurrentDataSource && !emptyTable
                ? <Fragment key={item.id}>
                  <span className='tool-dividing-line'></span>
                  <div className='horizontal-action-dropdown'>
                    <DataActionList
                      widgetId={id}
                      listStyle={DataActionListStyle.Dropdown}
                      dataSets={[{ dataSource, type: 'selected', records: dataSource.getSelectedRecords(), fields: actionUsedFields, name: dataName }]}
                    />
                  </div>
                </Fragment>
                : ''
              return dataActionDropdown
            })
          }
        </Fragment>
      }
     </div>
  }

  render () {
    const {
      activeTabId,
      mobileFlag,
      emptyTable,
      notReady,
      showLoading,
      interval,
      isShowSuggestion,
      searchSuggestion,
      tableTotal,
      tableSelected,
      widgetWidth
    } = this.state
    let { dataSource } = this.state
    const { config, id, theme, enableDataAction, isHeightAuto, isWidthAuto } = this.props
    const { layersConfig, arrangeType } = config
    // data-action Table
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({ deep: true }).concat(daLayersConfig)
    let useDataSource
    const curLayer = allLayersConfig.find(item => item.id === activeTabId)
    if (curLayer?.dataActionDataSource) dataSource = curLayer.dataActionDataSource as QueriableDataSource
    if (allLayersConfig.length > 0) {
      useDataSource = curLayer
        ? curLayer.useDataSource
        : allLayersConfig[0].useDataSource
    }
    const classes = classNames(
      'jimu-widget',
      'widget-table',
      'table-widget-' + id
    )

    if (allLayersConfig.length === 0) {
      return (
        <WidgetPlaceholder
          widgetId={id}
          iconSize='large'
          style={{ position: 'absolute', left: 0, top: 0 }}
          icon={tablePlaceholderIcon}
          data-testid='tablePlaceholder'
        />
      )
    }

    const horizontalTag = arrangeType === TableArrangeType.Tabs
    const dataSourceLabel = dataSource?.getLabel()
    const outputDsWidgetId = appConfigUtils.getWidgetIdByOutputDataSource(useDataSource)
    const appConfig = getAppStore().getState()?.appConfig
    const widgetLabel = appConfig?.widgets?.[outputDsWidgetId]?.label
    const partProps = { id, enableDataAction, isHeightAuto, isWidthAuto, headerFontSetting: curLayer?.headerFontSetting, emptyTable, horizontalTag, widgetWidth }
    const searchOn = curLayer?.enableSearch && curLayer?.searchFields?.length !== 0
    const toolListNode = mobileFlag ? this.renderDropdownToolList(curLayer, dataSource) : this.renderButtonToolList(curLayer, dataSource)
    // If 'view in table', use selection view
    const useLayerDs = curLayer.dataActionObject && curLayer.dataActionType === TableDataActionType.View

    return (
      <div className={classes} css={getStyle(theme, mobileFlag, searchOn, partProps)} ref={el => (this.refs.currentEl = el)}>
        <div className='surface-1 border-0 h-100'>
          <div className='table-indent'>
            <div
              className={`d-flex ${
                horizontalTag ? 'horizontal-tag-list' : 'dropdown-tag-list'
              }`}
            >
              {/* someting wrong in lint check for Tabs */}
              {horizontalTag
                ? (
                  <Fragment>
                    <Tabs type='underline' onChange={this.onTagClick} className='tab-flex' value={activeTabId} onClose={this.onCloseTab} scrollable>
                      {
                        allLayersConfig.map(item => {
                          const isDataAction = !!item.dataActionObject
                          return (
                            <Tab
                              key={item.id}
                              id={item.id}
                              title={item.name}
                              className='text-truncate tag-size'
                              closeable={isDataAction}
                            >
                              <div className='mt-2' />
                            </Tab>
                          )
                        }) as any
                      }
                    </Tabs>
                  </Fragment>
                  )
                : (
                  <Select
                    size='sm'
                    value={activeTabId}
                    onChange={this.handleTagChange}
                    className='top-drop'
                  >
                    {allLayersConfig.map(item => {
                      return (
                        <option key={item.id} value={item.id} title={item.name}>
                          <div className='table-action-option'>
                            <div className='table-action-option-tab' title={item.name}>{item.name}</div>
                            {item.dataActionObject &&
                            <div className='table-action-option-close'>
                              <Button
                                size='sm'
                                icon
                                type='tertiary'
                                onClick={(evt) => { this.onCloseTab(item.id, evt) }}
                              >
                                <CloseOutlined size='s' />
                              </Button>
                            </div>
                            }
                          </div>
                        </option>
                      )
                    })}
                  </Select>
                  )
              }
              {!searchOn && toolListNode}
            </div>
            <div
              className={`${
                arrangeType === TableArrangeType.Tabs
                  ? 'horizontal-render-con'
                  : 'dropdown-render-con'
              }`}
            >
              <div className='table-header' ref='suggestPopup'>
                {searchOn && this.renderSearchTools(curLayer?.searchHint)}
                {searchOn &&
                  <Popper
                    css={getSuggestionStyle()}
                    placement='bottom-start'
                    reference={this.refs.suggestPopup}
                    offset={[0, -2]}
                    open={isShowSuggestion}
                    trapFocus={false}
                    autoFocus={false}
                    toggle={e => {
                      this.setState({ isShowSuggestion: !isShowSuggestion })
                    }}
                  >
                    {searchSuggestion.map((suggestion, index) => {
                      const suggestionHtml = sanitizer.sanitize(
                        suggestion.suggestionHtml
                      )
                      return (
                        <Button
                          key={index}
                          type='secondary'
                          size='sm'
                          onClick={() => { this.onSuggestionConfirm(suggestion.suggestion) }}
                          dangerouslySetInnerHTML={{ __html: suggestionHtml }}
                        />
                      )
                    })}
                  </Popper>
                }
                {searchOn && toolListNode}
              </div>
              {emptyTable &&
                <div className='placeholder-table-con'>
                  <WidgetPlaceholder
                    icon={require('./assets/icon.svg')}
                    message={this.formatMessage('noData')}
                  />
                  {notReady &&
                    <div className='placeholder-alert-con'>
                      <Alert
                        form='tooltip'
                        size='small'
                        type='warning'
                        text={this.formatMessage('outputDataIsNotGenerated', { outputDsLabel: dataSourceLabel, sourceWidgetName: widgetLabel })}
                      />
                    </div>
                  }
                </div>
              }
              {/* Hide the Reset button temporarily */}
              {/* {emptyData &&
                <div className='placeholder-reset-con'>
                  <WidgetPlaceholder
                    icon={warningIcon}
                    message={this.formatMessage('noData')}
                  />
                  <Button
                    className="placeholder-reset-button"
                    size='sm'
                    title={this.formatMessage('reset')}
                    onClick={this.clearMessageAction}
                  >
                    {this.formatMessage('reset')}
                  </Button>
                </div>
              } */}
              <div ref='tableContainer' className='table-con' />
              {curLayer?.updateText && (showLoading || interval > 0) && this.renderLoading(showLoading, interval)}
              {curLayer?.showCount && this.renderTableCount(tableTotal, tableSelected)}
              <div className='ds-container'>
                {(dataSource || useDataSource) &&
                  <DataSourceComponent
                    widgetId={id}
                    useDataSource={Immutable(useDataSource)}
                    dataSource={useLayerDs ? dataSource : null}
                    onDataSourceCreated={this.onDataSourceCreated}
                    onDataSourceInfoChange={this.onDataSourceInfoChange}
                    onQueryRequired={this.onQueryRequired}
                  />
                }
              </div>
              <Global styles={getGlobalTableTools(theme)} />
            </div>
          </div>
        </div>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.debounceOnResize}
        />
      </div>
    )
  }
}
