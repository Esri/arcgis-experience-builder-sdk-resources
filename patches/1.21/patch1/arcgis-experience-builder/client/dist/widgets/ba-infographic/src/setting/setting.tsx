/** @jsx jsx */
import { React, jsx, css, getAppStore, Immutable, lodash, type ImmutableArray, proxyUtils, SupportedUtilityType, type UseUtility, SessionManager } from 'jimu-core'
import { type AllWidgetSettingProps, getAppConfigAction, helpUtils } from 'jimu-for-builder'
import { SettingSection, SettingRow, MapWidgetSelector, SidePopper } from 'jimu-ui/advanced/setting-components'
import { Radio, TextArea, CollapsablePanel, Select, Switch, Label, Button, Icon, Checkbox, Popper, NumericInput, Tabs, Tab } from 'jimu-ui'
import defaultMessages from './translations/default'
import { getStyle } from './lib/style'
import { ArcgisBaSearch, ArcgisReportList } from '../../node_modules/@arcgis/business-analyst-components/dist/components'
import { defineCustomElements } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/loader'
import { GEClient } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/util/mobile/GEClient'
import { TokenProvider } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/util/mobile/TokenProvider'
import { AppResourceManager } from 'jimu-for-builder'
// import { appConfigUtils } from 'jimu-core'
import { InfographicsCacheUtil } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/util/mobile/InfographicsCacheUtil'
import type CachedInfographicParams from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/util/mobile/InfographicsCacheUtil'
//import { processResourceUrl } from 'jimu-core/lib/utils/resource-utils'
// import { ResourceType } from 'jimu-core'

import { ColorPicker } from 'jimu-ui/basic/color-picker'
import { Mode, ViewMode, TravelDirection, TrafficType, type TravelMode } from '../config'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'
import ChartColumnOutlined from 'jimu-icons/svg/outlined/data/chart-column.svg'
import PinEsriOutlined from 'jimu-icons/svg/outlined/gis/pin-esri.svg'
import PolygonOutlined from 'jimu-icons/svg/outlined/gis/polygon.svg'
import downOutlinedIcon from 'jimu-icons/svg/outlined/directional/down.svg'
import upOutlinedIcon from 'jimu-icons/svg/outlined/directional/up.svg'
import { GeoenrichmentFilled } from 'jimu-icons/filled/data/geoenrichment'
import RingsIcon from './assets/rings32.svg'
import DriveIcon from './assets/drivetime32.svg'
import WalkIcon from './assets/walktime32.svg'
import { UtilitySelector } from 'jimu-ui/advanced/utility-selector'
import CloseOutlined from 'jimu-icons/svg/outlined/editor/close.svg'
import { ACLUtils } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/ACLUtils'
import { getCountries, getValidHierarchies, getLatestHierarchyID, getActiveHierarchyId } from '../countries'
import BaAppState from '../ba-app-state.js'
import { objectSignature } from '../compare-objects'

// import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol'
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol'
// import { Operation } from 'jimu-ui/advanced/rich-text-editor'

// import { setTime } from 'react-datepicker/dist/date_utils'
// import { has } from '@amcharts/amcharts5/.internal/core/util/Array'
interface CachedLocationType { lat: number, lon: number };
enum InfoBufferType { ring = 'ring', drivetime = 'drivetime', walktime = 'walktime' }
enum Setting_BaSearchTypeNumber { all = '0', address = '1', boundary = '2' }
export const BaAppSearchScopeConvertType = {
  0: 'all',
  1: 'address',
  2: 'boundary'
}
// TM - Travel mode types now imported from config

export interface TravelModeOptions {
  mode: string | TravelMode | undefined // Support both enum/string itemId and TravelMode object
  direction: TravelDirection
  useTrafficEnabled: boolean
  useTrafficChecked: boolean
  trafficType: TrafficType
  offsetTime: number
  offsetDay: string
  offsetHr: string
}

export interface CachedInfoObjectType {
  name: string | undefined
  location: CachedLocationType | undefined
  buffers: any
  report: any
  url: string | undefined
}

const popperStyles = () => {
  return css`
      width: 240px;
      padding: 10px;

      h1, h2, h3, h4, h5, h6 {
        color: var(--sys-color-surface-paperText);
      }

      .btn-primary {
        min-width: 100px;
        color: var(--sys-color-action-text);
        background-color: var(--sys-color-action-default);
        border: 1px solid var(--sys-color-divider-secondary);
        box-shadow: 0 2px 12px 0 rgba(95,95,255,0.10); /* reduced shadow for theme consistency */
      }
    `
}
enum CachedInfographicStatusEnum {
  NotAvailable,
  CacheCompleted,
  CurrentlyRunning,
  Error,
  ReadyToCache,
  SettingsHaveChanged,
  CacheCleared
}

enum MaxBuffers {
  Rings = 1000,
  DriveMinutes = 300,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  DriveMile = 300,
  DriveKm = 482.8,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  WalkMinutes = 300,
  WalkMile = 27,
  WalkKm = 43.45
}

const supportedUtilityTypes = [SupportedUtilityType.GeoEnrichment]
// const supportedGeocodingUtilityTypes = [SupportedUtilityType.GeoCoding]

const defaultFillSymbol = {
  type: 'esriSFS',
  color: [245, 172, 70, 102],
  outline: {
    type: 'esriSLS',
    color: [204, 50, 2, 179],
    width: 1,
    style: 'esriSLSSolid'
  },
  style: 'esriSFSSolid'
}
const widgetDefaultFillSymbol = {
  color: [245, 172, 70, 0.4],
  outline: {
    color: [204, 50, 2, 0.7],
    width: 1
  }
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {
  // export default class Setting extends React.Component<AllWidgetSettingProps<any>, any> {
  static SettingRegistry: any = {}

  enableCachedInfographics: boolean = false

  // stateManager: StateManager
  sidePopperTrigger = React.createRef<HTMLDivElement>()
  _mapWidgetId: string | undefined
  settingOuterDivRef: React.RefObject<HTMLDivElement>
  modeInfoRef: React.RefObject<unknown>
  cacheInfographicInfoRef: React.RefObject<unknown>
  linkInfographicRef: React.RefObject<unknown>
  allowSearchInfoRef: React.RefObject<unknown>
  useLatestDSInfoRef: React.RefObject<unknown>
  runOnMapClickInfoRef: React.RefObject<unknown>
  runInWidgetInfoRef: React.RefObject<unknown>
  exportDirectlyInfoRef: React.RefObject<unknown>
  userBufferInfoRef: React.RefObject<unknown>
  allowChoiceInfoRef: React.RefObject<unknown>
  _checkedItemsList: { user: any[], shared: any[], public: any[], gallery: any[], tabular: any[] } | undefined
  _ignoreNextDefaultClick: boolean = false
  sessionToken: string | null = null
  _hasSetDefaults: boolean = false
  portalOnlineGEProxy: boolean
  cachedInfographicSettingsSelection: any = null
  _presetReportsListCache: any = undefined
  _pendingConfigPropWaiters: Array<{
    name: string
    expectedValue: any
    resolve: ( value: any ) => void
    reject: ( error: Error ) => void
    timeoutId: ReturnType<typeof setTimeout> | null
  }> = []
  _runInWidgetContext = {
    allowExport: undefined,
    zoomLevel: undefined,
  }
  _defaultAccordionCollapseHandler: ( ( ev: Event ) => void ) | null = null

  // TM
  travelModeDefaults: TravelModeOptions = {
    mode: undefined, // Travel modes will come from service only
    direction: TravelDirection.away,
    useTrafficEnabled: true,
    useTrafficChecked: false,
    trafficType: TrafficType.live,
    offsetTime: 0, // Now
    offsetDay: '', // localized Monday
    offsetHr: '' // localized 12 PM
  }
  _dtoStates = [
    // Note: stTravelModeData is handled separately to preserve full object structure
    'stTravelDirection',
    'stUseTrafficChecked',
    'stTrafficType',
    'stOffsetTime',
    'stOffsetDay',
    'stOffsetHr'
  ]
  //state - placeholder state not used for now
  _baAppStateId: string
  _baAppStoreName: string | undefined = BaAppState.BA_WIDGET_STORE // default store ID
  _onReadyNotificationsTodo: any[] = []
  _baAppStateServiceComponent: any
  _searchScopeKey: string = 'searchScope'
  _searchScopeLockedKey: string = 'searchScopeLocked'
  _compName = 'Setting' + this.props.id
  _topDivId: string
  _cachedInfographicObject: any = null
  _cachedInfographicItemResourceName = 'cachedInfographic.json'
  _pendingHierarchyId: string | null = null
  _geographiesChecked: boolean = true

  constructor ( props: AllWidgetSettingProps<any> ) {
    super( props )
    Setting.SettingRegistry[this.props.id] = this
    this.settingOuterDivRef = React.createRef()

    // this.stateManager = new StateManager( "arcgis-app-state" );

    this.modeInfoRef = React.createRef()
    this.cacheInfographicInfoRef = React.createRef()
    this.linkInfographicRef = React.createRef()
    this.allowSearchInfoRef = React.createRef()
    this.runOnMapClickInfoRef = React.createRef()
    this.runInWidgetInfoRef = React.createRef()
    this.exportDirectlyInfoRef = React.createRef()
    this.userBufferInfoRef = React.createRef()
    this.allowChoiceInfoRef = React.createRef()
    this.useLatestDSInfoRef = React.createRef()

    this._hasSetDefaults = false
    const initialScope = this.searchTypeToScope( props.config.appSearchScope || props.config.baSearchType || Setting_BaSearchTypeNumber.all )
    const initialSearchType = this.searchTypeToNumber( initialScope ) || Setting_BaSearchTypeNumber.all
    const isAll = this.compareSearchTypes( initialSearchType, Setting_BaSearchTypeNumber.all )
    const geogEnabled = isAll || this.compareSearchTypes( initialSearchType, Setting_BaSearchTypeNumber.boundary )
    const ptsEnabled = isAll || this.compareSearchTypes( initialSearchType, Setting_BaSearchTypeNumber.address )
    this._baAppStateId = 'baAppState-settings-' + this.props.id
    this._topDivId = 'baSettingsTopDiv-' + this.props.id

    defineCustomElements( window )

    this._geographiesChecked = geogEnabled
    this.state = {
      countries: null,
      error: null,
      modePopperOpen: false,
      cacheInfographicPopperOpen: false,
      useLatestDSInfoIconOpen: false,
      allowSearchInfoIconOpen: false,
      allowBufferInfoIconOpen: false,
      allowInfographicChoiceIconOpen: false,
      runOnMapClickInfoIconOpen: false,
      runInWidgetInfoIconOpen: false,
      exportDirectlyInfoIconOpen: false,
      settingsOpen: true,
      presetGeneralOpen: true,
      presetLocationDataOpen: false,
      presetBuffersOpen: false,
      presetInfographicsOpen: false,
      presetGeoEnrichmentOpen: false,
      workflowGeneralOpen: true,
      workflowLocationDataOpen: false,
      workflowSearchOpen: false,
      workflowBuffersOpen: false,
      workflowInfographicsOpen: false,
      workflowInfographicSettingsOpen: true,
      workflowGeoEnrichmentOpen: false,
      // presetGeoCodingOpen: false,
      availableHierarchies: null,
      selectedHierarchyObj: null,
      selectedCountry: props.config.sourceCountry, // Setting.tsx local country state value init from shared prop
      // all geography levels available in hierarchy
      availableGeographyLevels: props.config.availableGeographyLevels,
      // geography levels that are selected/checked
      activeGeographyLevels: props.config.selectedGeographyLevels,
      baSearchType: initialSearchType,
      geographiesChecked: geogEnabled,
      pointsOfInterestChecked: ptsEnabled,
      presetShowSearchInput: false,
      presetSearchSidePopper: false,
      presetBufferSidePopper: false,
      presetInfographicSidePopper: false,
      presetCachedInfographicSidePopper: false,
      workflowSearchSidePopper: false,
      workflowBufferSidePopper: false,
      workflowInfographicSidePopper: false,
      workflowShowSearchInput: false,
      workflowGeographiesExpanded: false,
      presetBuffersQueued: false,
      stPresetBuffer: props.config.presetBuffer || InfoBufferType.ring,
      stPresetRingsBuffer1: null,
      stPresetRingsBuffer2: null,
      stPresetRingsBuffer3: null,
      stPresetRingsBufferUnit: null,
      stPresetDrivetimeBuffer1: null,
      stPresetDrivetimeBuffer2: null,
      stPresetDrivetimeBuffer3: null,
      stPresetDrivetimeBufferUnit: null,
      stPresetWalktimeBuffer1: null,
      stPresetWalktimeBuffer2: null,
      stPresetWalktimeBuffer3: null,
      stPresetWalktimeBufferUnit: null,
      stViewMode: ViewMode.Auto,
      // default is minutes
      maxDriveBuffer: MaxBuffers.DriveMinutes,
      maxWalkBuffer: MaxBuffers.WalkMinutes,
      portalUrl: props.portalUrl,
      geocodeUrl: props.portalSelf.helperServices && props.portalSelf.helperServices.geocode && props.portalSelf.helperServices.geocode[0].url,
      geoenrichmentServiceUrl: props.portalSelf.helperServices && props.portalSelf.helperServices.geoenrichment && props.portalSelf.helperServices.geoenrichment.url,
      routingUtilityUrl: props.portalSelf.helperServices && props.portalSelf.helperServices.routingUtilities && props.portalSelf.helperServices.routingUtilities.url,
      searchbarEnabled: props.config.searchbarEnabled,
      drawPointEnabled: props.config.drawPointEnabled,
      drawPolygonEnabled: props.config.drawPointEnabled,
      portalHelpUrl: '',
      stUseTrafficChecked: false,
      stTravelModeData: '',
      stTravelDirection: TravelDirection.away,
      stTrafficType: TrafficType.live,
      stOffsetTime: 0,
      stOffsetDay: 'Monday',
      stOffsetHr: '12:00 PM',
      travelModes: [],
      isLoadingTravelModes: false,
      cachedInfographicStatus: CachedInfographicStatusEnum.NotAvailable
    }

    this.onPropertyChange( 'syncBufferSettings', false )
    // Need to set proxy referrer if proxy is already configured from creating a copy of existing app
    if ( props.config.geoenrichmentConfig?.useUtility?.utilityId ) {
      this.setProxyReferrer()
    }
  }

  getToken () {
    if ( !this.sessionToken ) {
      if ( SessionManager ) {
        this.sessionToken = SessionManager.getInstance()?.getMainSession()?.token
      }
    }
    return this.sessionToken
  }

  presetColors = [
    { label: 'Paper', value: 'var(--sys-color-surface-paper)', color: 'var(--sys-color-surface-paper)' },
    { label: 'Overlay', value: 'var(--sys-color-surface-overlay)', color: 'var(--sys-color-surface-overlay)' },
    { label: 'Primary', value: 'var(--sys-color-brand-primary)', color: 'var(--sys-color-brand-primary)' },
    { label: 'White', value: '#FFFFFF', color: '#FFFFFF' }
  ]

  preloadData = () => {
    this.setDefaults()
  }
  // This function fixes the search type value to a consistent format
  fixSearchType = ( t: any ) => {
    if ( t === 'all' || t === '0' ) {
      return ( Setting_BaSearchTypeNumber.all )
    } else if ( t === 'address' || t === 'locations' || t === '1' ) {
      return ( Setting_BaSearchTypeNumber.address )
    } else if ( t === 'boundary' || t === 'boundaries' || t === '2' ) {
      return ( Setting_BaSearchTypeNumber.boundary )
    }
  }
  // This function compares search types with fixing to ensure consistent comparison
  // Returns true if search types are the same, false if different
  compareSearchTypes = ( t1: any, t2: any ) => {
    const fixedT1 = this.fixSearchType( t1 )
    const fixedT2 = this.fixSearchType( t2 )
    return fixedT1 === fixedT2
  }
  searchTypeToNumber = ( t: any ) => {
    if ( t === 'all' || t === '0' ) {
      return ( Setting_BaSearchTypeNumber.all )
    } else if ( t === 'address' || t === 'locations' || t === '1' ) {
      return ( Setting_BaSearchTypeNumber.address )
    } else if ( t === 'boundary' || t === 'boundaries' || t === '2' ) {
      return ( Setting_BaSearchTypeNumber.boundary )
    }
  }

  searchTypeToScope = ( t: any ): string => {
    const typeNum = this.searchTypeToNumber( t )
    const key = ACLUtils.isDef( typeNum ) ? String( typeNum ) : '0'
    return BaAppSearchScopeConvertType[key] || 'all'
  }

  syncSearchScopeToBaAppState = ( scopeInput?: any, lockedInput?: boolean ) => {
    const scope = this.searchTypeToScope( scopeInput )
    const locked = typeof lockedInput === 'boolean' ? lockedInput : scope !== 'all'

    let svc = this._baAppStateServiceComponent
    if ( !svc ) {
      svc = BaAppState.getServiceComponent( this.getSettingOuterDiv(), this._baAppStateId )
      if ( svc ) {
        this._baAppStateServiceComponent = svc
      }
    }
    if ( !svc ) {
      return
    }

    const currScope = svc.getState( this._baAppStoreName, this._searchScopeKey )
    if ( currScope !== scope ) {
      svc.setState( this._baAppStoreName, this._searchScopeKey, scope )
    }

    const currLocked = svc.getState( this._baAppStoreName, this._searchScopeLockedKey )
    if ( currLocked !== locked ) {
      svc.setState( this._baAppStoreName, this._searchScopeLockedKey, locked )
    }
  }

  missingBuffers = ( bufferType: InfoBufferType ) => {
    const {
      widgetMode,
      workflowEnableUserConfigBuffers,
      presetBuffer,
      presetRingsBuffer1,
      presetRingsBuffer2,
      presetRingsBuffer3,
      presetDrivetimeBuffer1,
      presetDrivetimeBuffer2,
      presetDrivetimeBuffer3,
      presetWalktimeBuffer1,
      presetWalktimeBuffer2,
      presetWalktimeBuffer3,
      workflowBuffer,
      workflowRingsBuffer1,
      workflowRingsBuffer2,
      workflowRingsBuffer3,
      workflowDrivetimeBuffer1,
      workflowDrivetimeBuffer2,
      workflowDrivetimeBuffer3,
      workflowWalktimeBuffer1,
      workflowWalktimeBuffer2,
      workflowWalktimeBuffer3
    } = this.props.config

    if ( widgetMode === Mode.Preset ) {
      switch ( bufferType ) {
        case InfoBufferType.ring:
          if ( presetBuffer === InfoBufferType.ring && ACLUtils.notDef( presetRingsBuffer1 ) && ACLUtils.notDef( presetRingsBuffer2 ) && ACLUtils.notDef( presetRingsBuffer3 ) ) {
            return true
          }
          break
        case InfoBufferType.drivetime:
          if ( presetBuffer === InfoBufferType.drivetime && ACLUtils.notDef( presetDrivetimeBuffer1 ) && ACLUtils.notDef( presetDrivetimeBuffer2 ) && ACLUtils.notDef( presetDrivetimeBuffer3 ) ) {
            return true
          }
          break
        case InfoBufferType.walktime:
          if ( presetBuffer === InfoBufferType.walktime && ACLUtils.notDef( presetWalktimeBuffer1 ) && ACLUtils.notDef( presetWalktimeBuffer2 ) && ACLUtils.notDef( presetWalktimeBuffer3 ) ) {
            return true
          }
          break
        // default:
        //   return false
      }
    } else {
      if ( ACLUtils.notDef( workflowEnableUserConfigBuffers ) ) {
        return true
      } else if ( !workflowEnableUserConfigBuffers ) {
        switch ( bufferType ) {
          case InfoBufferType.ring:
            if ( workflowBuffer === InfoBufferType.ring && ACLUtils.notDef( workflowRingsBuffer1 ) && ACLUtils.notDef( workflowRingsBuffer2 ) && ACLUtils.notDef( workflowRingsBuffer3 ) ) {
              return true
            }
            break
          case InfoBufferType.drivetime:
            if ( workflowBuffer === InfoBufferType.drivetime && ACLUtils.notDef( workflowDrivetimeBuffer1 ) && ACLUtils.notDef( workflowDrivetimeBuffer2 ) && ACLUtils.notDef( workflowDrivetimeBuffer3 ) ) {
              return true
            }
            break
          case InfoBufferType.walktime:
            if ( workflowBuffer === InfoBufferType.walktime && ACLUtils.notDef( workflowWalktimeBuffer1 ) && ACLUtils.notDef( workflowWalktimeBuffer2 ) && ACLUtils.notDef( workflowWalktimeBuffer3 ) ) {
              return true
            }
            break
          // default:
          //   return false
        }
      }
    }
  }

  _presetChangedTimer: ReturnType<typeof setTimeout> | null = null
  _cancelPresetTimer () {
    if ( this._presetChangedTimer ) {
      clearTimeout( this._presetChangedTimer )
      this._presetChangedTimer = null
    }
  }

  _setPresetBuffersChanged () {
    this._cancelPresetTimer()
    requestAnimationFrame( () => {
      this.onPropertyChange( 'presetBuffersHaveChanged', true )
      this._presetChangedTimer = setTimeout( () => {
        this._cancelPresetTimer()
        this.onPropertyChange( 'presetBuffersHaveChanged', false )
      }, 0 )
    } )
  }

  // NOTE: When changing default values, also verify they are updated in the widget constructor as that is
  // called prior to this for new Experience Builder app creation
  setDefaults () {
    const changeArr = []
    const { appSearchScope, appSearchScopeLocked, baSearchType } = this.props.config
    // BA App State service component states - - - - - - - - - - - - - -
    //
    const scope = this.searchTypeToScope( appSearchScope || baSearchType || Setting_BaSearchTypeNumber.all )
    const lock = ( typeof appSearchScopeLocked !== 'undefined' )
      ? appSearchScopeLocked
      : !( scope === Setting_BaSearchTypeNumber.all || scope === 'all' )
    // Defines the search state used by the search dropdown
    changeArr.push( { name: 'appSearchScope', value: scope } )

    // Defines if the search scope is locked (not user changeable).
    // This property determines if the search scope dropdown is
    // shown along side the input of the search component
    changeArr.push( { name: 'appSearchScopeLocked', value: lock } )

    const scopeSearchType = this.searchTypeToNumber( scope ) || Setting_BaSearchTypeNumber.all
    const gCheck: boolean = scopeSearchType === Setting_BaSearchTypeNumber.all || scopeSearchType === Setting_BaSearchTypeNumber.boundary
    this.updateGeographiesChecked( gCheck )
    this.updateState( 'pointsOfInterestChecked', scopeSearchType === Setting_BaSearchTypeNumber.all || scopeSearchType === Setting_BaSearchTypeNumber.address )
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //
    // Other config defaults
    if ( ACLUtils.notDef( this.props.config.isSavedExperience ) ) {
      changeArr.push( { name: 'isSavedExperience', value: false } )
    }
    if ( ACLUtils.notDef( this.props.config.hasInitializedGeographyLevels ) ) {
      changeArr.push( { name: 'hasInitializedGeographyLevels', value: false } )
    }
    if ( ACLUtils.notDef( this.props.config.widgetMode ) ) {
      changeArr.push( { name: 'widgetMode', value: Mode.Workflow } )
    }
    if ( ACLUtils.notDef( this.props.config.viewMode ) ) {
      changeArr.push( { name: 'viewMode', value: ViewMode.Auto } )
    }
    if ( ACLUtils.notDef( this.props.config.sourceCountry ) ) {
      changeArr.push( { name: 'sourceCountry', value: 'US' } )
    }
    if ( ACLUtils.notDef( this.props.config.widgetPlaceholderText ) ) {
      changeArr.push( { name: 'widgetPlaceholderText', value: this.localeString( 'widgetPlaceholderText' ) } )
    }
    if ( ACLUtils.notDef( this.props.config.widgetPlaceholderTextToggle ) ) {
      changeArr.push( { name: 'widgetPlaceholderTextToggle', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowIntroText ) || this.props.config.workflowIntroText === defaultMessages.introTextWithDraw ) {
      changeArr.push( { name: 'workflowIntroText', value: this.localeString( 'introTextWithDraw' ) } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowIntroTextReports ) || this.props.config.workflowIntroTextReports === defaultMessages.infographicDesc ) {
      changeArr.push( { name: 'workflowIntroTextReports', value: this.localeString( 'infographicDesc' ) } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowIntroTextBuffers ) || this.props.config.workflowIntroTextBuffers === defaultMessages.bufferExtentDesc ) {
      changeArr.push( { name: 'workflowIntroTextBuffers', value: this.localeString( 'bufferExtentDesc' ) } )
    }
    if ( ACLUtils.notDef( this.props.config.langCode ) ) {
      changeArr.push( { name: 'langCode', value: 'en-us' } )
    }
    if ( ACLUtils.notDef( this.props.config.cachedInfographicSettingsLastSelection ) ) {
      changeArr.push( { name: 'cachedInfographicSettingsLastSelection', value: null } )
    }
    if ( ACLUtils.notDef( this.props.config.igBackgroundColor ) ) {
      changeArr.push( { name: 'igBackgroundColor', value: '#525659' } )
    }
    if ( ACLUtils.notDef( this.props.config.runReportOnClick ) ) {
      changeArr.push( { name: 'runReportOnClick', value: false } )
    }
    if ( ACLUtils.notDef( this.props.config.allowExport ) ) {
      changeArr.push( { name: 'allowExport', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.displayHeader ) ) {
      changeArr.push( { name: 'displayHeader', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.headerColor ) ) {
      changeArr.push( { name: 'headerColor', value: '#151515' } )
    }
    if ( ACLUtils.notDef( this.props.config.headerTextColor ) ) {
      changeArr.push( { name: 'headerTextColor', value: '#FFFFFF' } )
    }
    if ( ACLUtils.notDef( this.props.config.imageExport ) ) {
      changeArr.push( { name: 'imageExport', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.pdf ) ) {
      changeArr.push( { name: 'pdf', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.dynamicHtml ) ) {
      changeArr.push( { name: 'dynamicHtml', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.excel ) ) {
      changeArr.push( { name: 'excel', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.fullscreen ) ) {
      changeArr.push( { name: 'fullscreen', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.zoomLevel ) ) {
      changeArr.push( { name: 'zoomLevel', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowEnableSearch ) ) {
      changeArr.push( { name: 'workflowEnableSearch', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowDisplayIntroText ) ) {
      changeArr.push( { name: 'workflowDisplayIntroText', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.restrictSearch ) ) {
      changeArr.push( { name: 'restrictSearch', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowEnableUserConfigBuffers ) ) {
      changeArr.push( { name: 'workflowEnableUserConfigBuffers', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.baSearchType ) ) {
      changeArr.push( { name: 'baSearchType', value: Setting_BaSearchTypeNumber.all } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowAvailableBufferRings ) ) {
      changeArr.push( { name: 'workflowAvailableBufferRings', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowAvailableBufferDrivetime ) ) {
      changeArr.push( { name: 'workflowAvailableBufferDrivetime', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowAvailableBufferWalktime ) ) {
      changeArr.push( { name: 'workflowAvailableBufferWalktime', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.presetSearchSelectedObject ) ) {
      changeArr.push( { name: 'presetSearchSelectedObject', value: null } )
    }
    if ( ACLUtils.notDef( this.props.config.presetSelectedReport ) ) {
      changeArr.push( { name: 'presetSelectedReport', value: null } )
    }
    if ( ACLUtils.notDef( this.props.config.presetSelectedReportName ) ) {
      changeArr.push( { name: 'presetSelectedReportName', value: null } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowSearchSelectedObject ) ) {
      changeArr.push( { name: 'workflowSearchSelectedObject', value: null } )
    }
    if ( ACLUtils.notDef( this.props.config.autoSelectLatestDataSource ) ) {
      changeArr.push( { name: 'autoSelectLatestDataSource', value: false } )
    }
    if ( ACLUtils.notDef( this.props.config.standardInfographicID ) ) {
      changeArr.push( { name: 'standardInfographicID', value: undefined } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowIntroTextReportCheckbox ) ) {
      changeArr.push( { name: 'workflowIntroTextReportCheckbox', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowIntroTextBuffersCheckbox ) ) {
      changeArr.push( { name: 'workflowIntroTextBuffersCheckbox', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowEnableInfographicChoice ) ) {
      changeArr.push( { name: 'workflowEnableInfographicChoice', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowRunInWidget ) ) {
      changeArr.push( { name: 'workflowRunInWidget', value: false } )
    }
    if ( this.props.config.workflowRunInWidget === true && this.props.config.displayHeader !== true ) {
      changeArr.push( { name: 'displayHeader', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.defaultReport ) ) {
      changeArr.push( { name: 'defaultReport', value: undefined } )
    }
    if ( ACLUtils.notDef( this.props.config.reportList ) ) {
      changeArr.push( { name: 'reportList', value: {} } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowBuffer ) ) {
      changeArr.push( { name: 'workflowBuffer', value: InfoBufferType.ring } )
    }
    if ( this.missingBuffers( InfoBufferType.ring ) ) {
      changeArr.push( { name: 'workflowRingsBuffer1', value: 1 } )
    }
    if ( this.missingBuffers( InfoBufferType.ring ) ) {
      changeArr.push( { name: 'workflowRingsBuffer2', value: 3 } )
    }
    if ( this.missingBuffers( InfoBufferType.ring ) ) {
      changeArr.push( { name: 'workflowRingsBuffer3', value: 5 } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowRingsBufferUnit ) ) {
      changeArr.push( { name: 'workflowRingsBufferUnit', value: 'miles' } )
    }
    if ( this.missingBuffers( InfoBufferType.drivetime ) ) {
      changeArr.push( { name: 'workflowDrivetimeBuffer1', value: 5 } )
    }
    if ( this.missingBuffers( InfoBufferType.drivetime ) ) {
      changeArr.push( { name: 'workflowDrivetimeBuffer2', value: 10 } )
    }
    if ( this.missingBuffers( InfoBufferType.drivetime ) ) {
      changeArr.push( { name: 'workflowDrivetimeBuffer3', value: 15 } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowDrivetimeBufferUnit ) ) {
      changeArr.push( { name: 'workflowDrivetimeBufferUnit', value: 'minutes' } )
    }
    if ( this.missingBuffers( InfoBufferType.walktime ) ) {
      changeArr.push( { name: 'workflowWalktimeBuffer1', value: 5 } )
    }
    if ( this.missingBuffers( InfoBufferType.walktime ) ) {
      changeArr.push( { name: 'workflowWalktimeBuffer2', value: 10 } )
    }
    if ( this.missingBuffers( InfoBufferType.walktime ) ) {
      changeArr.push( { name: 'workflowWalktimeBuffer3', value: 15 } )
    }
    if ( ACLUtils.notDef( this.props.config.workflowWalktimeBufferUnit ) ) {
      changeArr.push( { name: 'workflowWalktimeBufferUnit', value: 'minutes' } )
    }

    if ( !this._hasSetDefaults ) {
      this._hasSetDefaults = true

      changeArr.push( { name: 'presetBuffersHaveChanged', value: false } )

      if ( ACLUtils.notDef( this.props.config.presetBuffer ) && ACLUtils.notDef( this.state.stPresetBuffer ) ) {
        this.updateState( 'stPresetBuffer', InfoBufferType.ring )
        //changeArr.push({ name: 'presetBuffer', value: InfoBufferType.ring })
      } else if ( ACLUtils.notDef( this.props.config.presetBuffer ) && ACLUtils.isDef( this.state.stPresetBuffer ) ) {
        changeArr.push( { name: 'presetBuffer', value: this.state.stPresetBuffer } )
      } else {
        this.updateState( 'stPresetBuffer', this.props.config.presetBuffer )
      }
      if ( this.missingBuffers( InfoBufferType.ring ) ) {
        this.updateState( 'stPresetRingsBuffer1', 1 )
        //changeArr.push({ name: 'presetRingsBuffer1', value: 1 })
      } else if ( ACLUtils.notDef( this.props.config.presetRingsBuffer1 ) && ACLUtils.isDef( this.state.stPresetRingsBuffer1 ) ) {
        changeArr.push( { name: 'presetRingsBuffer1', value: this.state.stPresetRingsBuffer1 } )
      } else {
        this.updateState( 'stPresetRingsBuffer1', this.props.config.presetRingsBuffer1 )
      }
      if ( this.missingBuffers( InfoBufferType.ring ) ) {
        this.updateState( 'stPresetRingsBuffer2', 3 )
        //changeArr.push({ name: 'presetRingsBuffer2', value: 3 })
      } else if ( ACLUtils.notDef( this.props.config.presetRingsBuffer2 ) && ACLUtils.isDef( this.state.stPresetRingsBuffer2 ) ) {
        changeArr.push( { name: 'presetRingsBuffer2', value: this.state.stPresetRingsBuffer2 } )
      } else {
        this.updateState( 'stPresetRingsBuffer2', this.props.config.presetRingsBuffer2 )
      }
      if ( this.missingBuffers( InfoBufferType.ring ) ) {
        this.updateState( 'stPresetRingsBuffer3', 5 )
        //changeArr.push({ name: 'presetRingsBuffer3', value: 5 })
      } else if ( ACLUtils.notDef( this.props.config.presetRingsBuffer3 ) && ACLUtils.isDef( this.state.stPresetRingsBuffer3 ) ) {
        changeArr.push( { name: 'presetRingsBuffer3', value: this.state.stPresetRingsBuffer3 } )
      } else {
        this.updateState( 'stPresetRingsBuffer3', this.props.config.presetRingsBuffer3 )
      }
      if ( ACLUtils.notDef( this.props.config.presetRingsBufferUnit ) && ACLUtils.notDef( this.state.stPresetRingsBufferUnit ) ) {
        this.updateState( 'stPresetRingsBufferUnit', 'miles' )
      } else if ( ACLUtils.notDef( this.props.config.presetRingsBufferUnit ) && ACLUtils.isDef( this.state.stPresetRingsBufferUnit ) ) {
        changeArr.push( { name: 'presetRingsBufferUnit', value: this.state.stPresetRingsBufferUnit } )
      } else {
        this.updateState( 'stPresetRingsBufferUnit', this.props.config.presetRingsBufferUnit )
      }
      if ( this.missingBuffers( InfoBufferType.drivetime ) ) {
        this.updateState( 'stPresetDrivetimeBuffer1', 5 )
      } else if ( ACLUtils.notDef( this.props.config.presetDrivetimeBuffer1 ) && ACLUtils.isDef( this.state.stPresetDrivetimeBuffer1 ) ) {
        changeArr.push( { name: 'presetDrivetimeBuffer1', value: this.state.stPresetDrivetimeBuffer1 } )
      } else {
        this.updateState( 'stPresetDrivetimeBuffer1', this.props.config.presetDrivetimeBuffer1 )
      }
      if ( this.missingBuffers( InfoBufferType.drivetime ) ) {
        this.updateState( 'stPresetDrivetimeBuffer2', 10 )
      } else if ( ACLUtils.notDef( this.props.config.presetDrivetimeBuffer2 ) && ACLUtils.isDef( this.state.stPresetDrivetimeBuffer2 ) ) {
        changeArr.push( { name: 'presetDrivetimeBuffer2', value: this.state.stPresetDrivetimeBuffer2 } )
      } else {
        this.updateState( 'stPresetDrivetimeBuffer2', this.props.config.presetDrivetimeBuffer2 )
      }
      if ( this.missingBuffers( InfoBufferType.drivetime ) ) {
        this.updateState( 'stPresetDrivetimeBuffer3', 15 )
      } else if ( ACLUtils.notDef( this.props.config.presetDrivetimeBuffer3 ) && ACLUtils.isDef( this.state.stPresetDrivetimeBuffer3 ) ) {
        changeArr.push( { name: 'presetDrivetimeBuffer3', value: this.state.stPresetDrivetimeBuffer3 } )
      } else {
        this.updateState( 'stPresetDrivetimeBuffer3', this.props.config.presetDrivetimeBuffer3 )
      }
      if ( ACLUtils.notDef( this.props.config.presetDrivetimeBufferUnit ) && ACLUtils.notDef( this.state.stPresetDrivetimeBufferUnit ) ) {
        this.updateState( 'stPresetDrivetimeBufferUnit', 'minutes' )
      } else if ( ACLUtils.notDef( this.props.config.presetDrivetimeBufferUnit ) && ACLUtils.isDef( this.state.stPresetDrivetimeBufferUnit ) ) {
        changeArr.push( { name: 'presetDrivetimeBufferUnit', value: this.state.stPresetDrivetimeBufferUnit } )
      } else {
        this.updateState( 'stPresetDrivetimeBufferUnit', this.props.config.presetDrivetimeBufferUnit )
      }
      if ( this.missingBuffers( InfoBufferType.walktime ) ) {
        this.updateState( 'stPresetWalktimeBuffer1', 5 )
      } else if ( ACLUtils.notDef( this.props.config.presetWalktimeBuffer1 ) && ACLUtils.isDef( this.state.stPresetWalktimeBuffer1 ) ) {
        changeArr.push( { name: 'presetWalktimeBuffer1', value: this.state.stPresetWalktimeBuffer1 } )
      } else {
        this.updateState( 'stPresetWalktimeBuffer1', this.props.config.presetWalktimeBuffer1 )
      }
      if ( this.missingBuffers( InfoBufferType.walktime ) ) {
        this.updateState( 'stPresetWalktimeBuffer2', 10 )
      } else if ( ACLUtils.notDef( this.props.config.presetWalktimeBuffer2 ) && ACLUtils.isDef( this.state.stPresetWalktimeBuffer2 ) ) {
        changeArr.push( { name: 'presetWalktimeBuffer2', value: this.state.stPresetWalktimeBuffer2 } )
      } else {
        this.updateState( 'stPresetWalktimeBuffer2', this.props.config.presetWalktimeBuffer2 )
      }
      if ( this.missingBuffers( InfoBufferType.walktime ) ) {
        this.updateState( 'stPresetWalktimeBuffer3', 15 )
      } else if ( ACLUtils.notDef( this.props.config.presetWalktimeBuffer3 ) && ACLUtils.isDef( this.state.stPresetWalktimeBuffer3 ) ) {
        changeArr.push( { name: 'presetWalktimeBuffer3', value: this.state.stPresetWalktimeBuffer3 } )
      } else {
        this.updateState( 'stPresetWalktimeBuffer3', this.props.config.presetWalktimeBuffer3 )
      }
      if ( ACLUtils.notDef( this.props.config.presetWalktimeBufferUnit ) && ACLUtils.notDef( this.state.stPresetWalktimeBufferUnit ) ) {
        this.updateState( 'stPresetWalktimeBufferUnit', 'minutes' )
      } else if ( ACLUtils.notDef( this.props.config.presetWalktimeBufferUnit ) && ACLUtils.isDef( this.state.stPresetWalktimeBufferUnit ) ) {
        changeArr.push( { name: 'presetWalktimeBufferUnit', value: this.state.stPresetWalktimeBufferUnit } )
      } else {
        this.updateState( 'stPresetWalktimeBufferUnit', this.props.config.presetWalktimeBufferUnit )
      }
    }
    if ( ACLUtils.notDef( this.props.config.searchbarEnabled ) ) {
      changeArr.push( { name: 'searchbarEnabled', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.drawPointEnabled ) ) {
      changeArr.push( { name: 'drawPointEnabled', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.drawPolygonEnabled ) ) {
      changeArr.push( { name: 'drawPolygonEnabled', value: true } )
    }
    // Travel mode will be set from service data, no local defaults
    // if ( ACLUtils.notDef( this.props.config.travelModeData ) ) {
    //   changeArr.push( { name: 'travelModeData', value: DEFAULT_TRAVEL_MODE } )
    // }
    // Add defaults for other travel mode properties
    if ( ACLUtils.notDef( this.props.config.travelDirection ) ) {
      changeArr.push( { name: 'travelDirection', value: TravelDirection.away } )
    }
    if ( ACLUtils.notDef( this.props.config.useTrafficEnabled ) ) {
      changeArr.push( { name: 'useTrafficEnabled', value: true } )
    }
    if ( ACLUtils.notDef( this.props.config.useTrafficChecked ) ) {
      changeArr.push( { name: 'useTrafficChecked', value: false } )
    }
    if ( ACLUtils.notDef( this.props.config.trafficType ) ) {
      changeArr.push( { name: 'trafficType', value: TrafficType.live } )
    }
    if ( ACLUtils.notDef( this.props.config.offsetTime ) ) {
      changeArr.push( { name: 'offsetTime', value: 0 } )
    }
    if ( ACLUtils.notDef( this.props.config.offsetDay ) ) {
      changeArr.push( { name: 'offsetDay', value: 'Monday' } )
    }
    if ( ACLUtils.notDef( this.props.config.offsetHr ) ) {
      changeArr.push( { name: 'offsetHr', value: '12:00 PM' } )
    }
    this.onMultiplePropertyChange( changeArr )
  }

  // Max values based on limitations of GE
  // Drive time (minutes): 300
  // Drive time (miles): 300
  // Drive time (km): 482.8
  // Walk time (minutes): 540
  // Walk time (miles): 27
  // Walk time (km): 43.45

  setMaxBuffers ( bufferType, bufferUnit = null ) {
    const { widgetMode, workflowDrivetimeBufferUnit, workflowWalktimeBufferUnit } = this.props.config
    const { stPresetDrivetimeBufferUnit, stPresetWalktimeBufferUnit } = this.state
    let useUnit
    if ( ACLUtils.isDef( bufferUnit ) ) {
      useUnit = bufferUnit
    } else {
      if ( widgetMode === Mode.Preset ) {
        useUnit = bufferType === InfoBufferType.drivetime ? stPresetDrivetimeBufferUnit : stPresetWalktimeBufferUnit
      } else {
        useUnit = bufferType === InfoBufferType.drivetime ? workflowDrivetimeBufferUnit : workflowWalktimeBufferUnit
      }
    }

    if ( ( bufferType === InfoBufferType.drivetime ) && ACLUtils.isDef( useUnit ) ) {
      if ( useUnit === 'minutes' ) {
        this.updateState( 'maxDriveBuffer', MaxBuffers.DriveMinutes )
        this.enforceMax( InfoBufferType.drivetime, MaxBuffers.DriveMinutes )
      } else if ( useUnit === 'miles' ) {
        this.updateState( 'maxDriveBuffer', MaxBuffers.DriveMile )
        this.enforceMax( InfoBufferType.drivetime, MaxBuffers.DriveMile )
      } else if ( useUnit === 'kilometers' ) {
        this.updateState( 'maxDriveBuffer', MaxBuffers.DriveKm )
        this.enforceMax( InfoBufferType.drivetime, MaxBuffers.DriveKm )
      }
    }
    if ( ( bufferType === InfoBufferType.walktime ) && ACLUtils.isDef( useUnit ) ) {
      if ( useUnit === 'minutes' ) {
        this.updateState( 'maxWalkBuffer', MaxBuffers.WalkMinutes )
        this.enforceMax( InfoBufferType.walktime, MaxBuffers.WalkMinutes )
      } else if ( useUnit === 'miles' ) {
        this.updateState( 'maxWalkBuffer', MaxBuffers.WalkMile )
        this.enforceMax( InfoBufferType.walktime, MaxBuffers.WalkMile )
      } else if ( useUnit === 'kilometers' ) {
        this.updateState( 'maxWalkBuffer', MaxBuffers.WalkKm )
        this.enforceMax( InfoBufferType.walktime, MaxBuffers.WalkKm )
      }
    }
  }

  enforceMax ( bufferType, max ) {
    const { widgetMode } = this.props.config
    const { workflowDrivetimeBuffer1, workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowWalktimeBuffer1, workflowWalktimeBuffer2, workflowWalktimeBuffer3 } = this.props.config
    const { stPresetDrivetimeBuffer1, stPresetDrivetimeBuffer2, stPresetDrivetimeBuffer3, stPresetWalktimeBuffer1, stPresetWalktimeBuffer2, stPresetWalktimeBuffer3 } = this.state

    if ( widgetMode === Mode.Preset ) {
      if ( bufferType === InfoBufferType.drivetime ) {
        if ( stPresetDrivetimeBuffer1 > max ) this.updateBufferValue( 'stPresetDrivetimeBuffer1', max )
        if ( stPresetDrivetimeBuffer2 > max ) this.updateBufferValue( 'stPresetDrivetimeBuffer2', max )
        if ( stPresetDrivetimeBuffer3 > max ) this.updateBufferValue( 'stPresetDrivetimeBuffer3', max )
      } else if ( bufferType === InfoBufferType.walktime ) {
        if ( stPresetWalktimeBuffer1 > max ) this.updateBufferValue( 'stPresetWalktimeBuffer1', max )
        if ( stPresetWalktimeBuffer2 > max ) this.updateBufferValue( 'stPresetWalktimeBuffer2', max )
        if ( stPresetWalktimeBuffer3 > max ) this.updateBufferValue( 'stPresetWalktimeBuffer3', max )
      }
    } else {
      if ( bufferType === InfoBufferType.drivetime ) {
        if ( workflowDrivetimeBuffer1 > max ) this.updateBufferValue( 'workflowDrivetimeBuffer1', max )
        if ( workflowDrivetimeBuffer2 > max ) this.updateBufferValue( 'workflowDrivetimeBuffer2', max )
        if ( workflowDrivetimeBuffer3 > max ) this.updateBufferValue( 'workflowDrivetimeBuffer3', max )
      } else if ( bufferType === InfoBufferType.walktime ) {
        if ( workflowWalktimeBuffer1 > max ) this.updateBufferValue( 'workflowWalktimeBuffer1', max )
        if ( workflowWalktimeBuffer2 > max ) this.updateBufferValue( 'workflowWalktimeBuffer2', max )
        if ( workflowWalktimeBuffer3 > max ) this.updateBufferValue( 'workflowWalktimeBuffer3', max )
      }
    }
  }

  /** updateBufferValue
   * This updates either the state or prop according to context, and
   * for Preset Mode it also shows the Apply button
   *
   *  name = either state name for Preset Mode, or prop name for Workflow
   *  value = new value
   */
  updateBufferValue ( name: string, value: any ) {
    const { widgetMode } = this.props.config
    if ( widgetMode === Mode.Workflow ) {
      this.onPropertyChange( name, value )
    } else {
      this.updateState( name, value )
      requestAnimationFrame( () => {
        this._showApplyButton()
      } )
    }
  }

  handleBufferChange ( name: string, value: any, bufferType: any ) {
    this.updateBufferValue( name, value )

    requestAnimationFrame( () => {
      // Only check for drivetime buffer unit changes
      if (
        name === 'workflowDrivetimeBufferUnit' ||
        name === 'stPresetDrivetimeBufferUnit'
      ) {
        this.setMaxBuffers( bufferType, value )

        // Determine which state/prop to update
        const { widgetMode } = this.props.config
        const isPreset = widgetMode === Mode.Preset

        // Use the new buffer unit directly for filtering
        const travelModes = this.getFilteredTravelModes( value )
        let defaultModeId

        if ( value === 'minutes' ) {
          defaultModeId =
            travelModes.find( m => m.name.toLowerCase().includes( 'driving time' ) )?.itemId ||
            travelModes[0]?.itemId
        } else if ( value === 'kilometers' || value === 'miles' ) {
          defaultModeId =
            travelModes.find( m => m.name.toLowerCase().includes( 'driving distance' ) )?.itemId ||
            travelModes[0]?.itemId
        }

        if ( defaultModeId ) {
          // Get the full travel mode object instead of just the ID
          const selectedTravelMode = travelModes.find( m => m.itemId === defaultModeId )
          if ( selectedTravelMode ) {
            // Create a clean travel mode object to avoid nested duplication
            const travelModeWithId = {
              ...selectedTravelMode.travelModeData,
              itemId: selectedTravelMode.itemId,
              name: selectedTravelMode.name,
              description: selectedTravelMode.description
            }

            if ( isPreset ) {
              // For preset mode, update both state and config
              this.updateBufferValue( 'stTravelModeData', selectedTravelMode.itemId )
              this.onPropertyChange( 'travelModeData', travelModeWithId )
            } else {
              this.updateBufferValue( 'travelModeData', travelModeWithId )
            }
          }
        }
      } else {
        this.setMaxBuffers( bufferType )
      }
    } )
  }

  // Called when BA App State is found (already exists) or if created: when it has been added
  // to the DOM and is ready
  onAppStateReady () {
    if ( !this._baAppStateServiceComponent ) {
      this._baAppStateServiceComponent = BaAppState.getServiceComponent( this.getSettingOuterDiv(), this._baAppStateId )
    }
  }

  handleIgSettingChange ( name: string, value: any ) {
    // if ( name === 'workflowRunInWidget' ) {
    //   // The context is whatever the two settings were the last time we entered into
    //   // workflowRunInWidget mode
    //   const ctx = this._runInWidgetContext

    //   if ( value === true ) {
    //     // save current context settings
    //     ctx.allowExport = this.props.config.allowExport
    //     ctx.zoomLevel = this.props.config.zoomLevel

    //     this.onMultiplePropertyChange( [
    //       { name: 'workflowRunInWidget', value: true },
    //       { name: 'allowExport', value: false },
    //       { name: 'zoomLevel', value: false },
    //       { name: 'displayHeader', value: true }
    //     ] )
    //   } else {
    //     // restore context for the two props
    //     this.onMultiplePropertyChange( [
    //       { name: name, value: value },
    //       { name: 'allowExport', value: typeof ctx.allowExport !== undefined ? ctx.allowExport : true },
    //       { name: 'zoomLevel', value: typeof ctx.zoomLevel !== undefined ? ctx.zoomLevel : true }
    //     ] )
    //     // reset context
    //     this._runInWidgetContext = { allowExport: undefined, zoomLevel: undefined }
    //   }
    //   return
    // }

    if ( name === 'displayHeader' && this.props.config.workflowRunInWidget && value === false ) {
      this.onPropertyChange( 'displayHeader', true )
      return
    }

    this.onPropertyChange( name, value )
  }

  _toPropName ( s ): string {
    const sEnd = s.trim().substr( 3 )
    const sPre: string = ( s.substr( 2, 1 ) as string ).toLowerCase()
    return ACLUtils.hasText( sEnd ) && ACLUtils.hasText( sPre ) ? sPre + sEnd : null
  }

  syncDtoStatesFromProps () {
    for ( let ii = 0; ii < this._dtoStates.length; ii++ ) {
      const stName = this._dtoStates[ii]
      const pName = this._toPropName( stName )
      const stVal = this.state[stName]
      if ( this.props.config[pName] !== stVal ) {
        this.updateState( stName, this.props.config[pName] )
      }
    }

    // Handle stTravelModeData separately
    const travelModeData = this.props.config.travelModeData
    if ( travelModeData ) {
      // If travelModeData is an object, use its itemId; if it's a string, use it directly
      const travelModeId = typeof travelModeData === 'object' ? travelModeData.itemId : travelModeData
      if ( this.state.stTravelModeData !== travelModeId ) {
        this.updateState( 'stTravelModeData', travelModeId )
      }
    } else if ( this.state.stTravelModeData && !travelModeData ) {
      // If config has no travel mode but state does, clear the state
      this.updateState( 'stTravelModeData', '' )
    }
  }

  applyPresetDto () {
    const changeArr = []
    let changed = false
    for ( let ii = 0; ii < this._dtoStates.length; ii++ ) {
      const stName = this._dtoStates[ii]
      const pName = this._toPropName( stName )
      const stVal = this.state[stName]
      if ( this.props.config[pName] !== stVal ) {
        changeArr.push( { name: pName, value: stVal } )
        changed = true
      }
    }

    // Handle stTravelModeData separately to preserve full object structure
    if ( this.state.stTravelModeData && this.state.travelModes.length > 0 ) {
      // Find the full travel mode object from the itemId stored in state
      const selectedTravelMode = this.state.travelModes.find( mode => mode.itemId === this.state.stTravelModeData )
      if ( selectedTravelMode ) {
        // Create a clean travel mode object to avoid nested duplication
        const travelModeWithId = {
          ...selectedTravelMode.travelModeData,
          itemId: selectedTravelMode.itemId,
          name: selectedTravelMode.name,
          description: selectedTravelMode.description
        }
        if ( this.props.config.travelModeData !== travelModeWithId ) {
          changeArr.push( { name: 'travelModeData', value: travelModeWithId } )
          changed = true
        }
      }
    }

    this.onMultiplePropertyChange( changeArr )

    if ( changed ) {
      this._setPresetBuffersChanged()
    }
  }

  applyPresetBuffers () {
    const changeArr = []
    const {
      presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3, presetRingsBufferUnit, presetDrivetimeBuffer1,
      presetDrivetimeBuffer2, presetDrivetimeBuffer3, presetDrivetimeBufferUnit, presetWalktimeBuffer1, presetWalktimeBuffer2,
      presetWalktimeBuffer3, presetWalktimeBufferUnit
    } = this.props.config
    const {
      stPresetBuffer, stPresetRingsBuffer1, stPresetRingsBuffer2, stPresetRingsBuffer3, stPresetRingsBufferUnit, stPresetDrivetimeBuffer1,
      stPresetDrivetimeBuffer2, stPresetDrivetimeBuffer3, stPresetDrivetimeBufferUnit, stPresetWalktimeBuffer1, stPresetWalktimeBuffer2,
      stPresetWalktimeBuffer3, stPresetWalktimeBufferUnit
    } = this.state

    if ( presetBuffer !== stPresetBuffer ) {
      changeArr.push( { name: 'presetBuffer', value: stPresetBuffer } )
    }
    if ( presetRingsBuffer1 !== stPresetRingsBuffer1 ) {
      changeArr.push( { name: 'presetRingsBuffer1', value: isNaN( parseFloat( stPresetRingsBuffer1 ) ) ? null : parseFloat( stPresetRingsBuffer1 ) } )
    }
    if ( presetRingsBuffer2 !== stPresetRingsBuffer2 ) {
      changeArr.push( { name: 'presetRingsBuffer2', value: isNaN( parseFloat( stPresetRingsBuffer2 ) ) ? null : parseFloat( stPresetRingsBuffer2 ) } )
    }
    if ( presetRingsBuffer3 !== stPresetRingsBuffer3 ) {
      changeArr.push( { name: 'presetRingsBuffer3', value: isNaN( parseFloat( stPresetRingsBuffer3 ) ) ? null : parseFloat( stPresetRingsBuffer3 ) } )
    }
    if ( presetRingsBufferUnit !== stPresetRingsBufferUnit ) {
      changeArr.push( { name: 'presetRingsBufferUnit', value: stPresetRingsBufferUnit } )
    }
    if ( presetDrivetimeBuffer1 !== stPresetDrivetimeBuffer1 ) {
      changeArr.push( { name: 'presetDrivetimeBuffer1', value: isNaN( parseFloat( stPresetDrivetimeBuffer1 ) ) ? null : parseFloat( stPresetDrivetimeBuffer1 ) } )
    }
    if ( presetDrivetimeBuffer2 !== stPresetDrivetimeBuffer2 ) {
      changeArr.push( { name: 'presetDrivetimeBuffer2', value: isNaN( parseFloat( stPresetDrivetimeBuffer2 ) ) ? null : parseFloat( stPresetDrivetimeBuffer2 ) } )
    }
    if ( presetDrivetimeBuffer3 !== stPresetDrivetimeBuffer3 ) {
      changeArr.push( { name: 'presetDrivetimeBuffer3', value: isNaN( parseFloat( stPresetDrivetimeBuffer3 ) ) ? null : parseFloat( stPresetDrivetimeBuffer3 ) } )
    }
    if ( presetDrivetimeBufferUnit !== stPresetDrivetimeBufferUnit ) {
      changeArr.push( { name: 'presetDrivetimeBufferUnit', value: stPresetDrivetimeBufferUnit } )
    }
    if ( presetWalktimeBuffer1 !== stPresetWalktimeBuffer1 ) {
      changeArr.push( { name: 'presetWalktimeBuffer1', value: isNaN( parseFloat( stPresetWalktimeBuffer1 ) ) ? null : parseFloat( stPresetWalktimeBuffer1 ) } )
    }
    if ( presetWalktimeBuffer2 !== stPresetWalktimeBuffer2 ) {
      changeArr.push( { name: 'presetWalktimeBuffer2', value: isNaN( parseFloat( stPresetWalktimeBuffer2 ) ) ? null : parseFloat( stPresetWalktimeBuffer2 ) } )
    }
    if ( presetWalktimeBuffer3 !== stPresetWalktimeBuffer3 ) {
      changeArr.push( { name: 'presetWalktimeBuffer3', value: isNaN( parseFloat( stPresetWalktimeBuffer3 ) ) ? null : parseFloat( stPresetWalktimeBuffer3 ) } )
    }
    if ( presetWalktimeBufferUnit !== stPresetWalktimeBufferUnit ) {
      changeArr.push( { name: 'presetWalktimeBufferUnit', value: stPresetWalktimeBufferUnit } )
    }
    if ( changeArr.length > 0 ) {
      this.onMultiplePropertyChange( changeArr )
      this._setPresetBuffersChanged()
    }
  }

  reportSelectedHandler ( ev: any ) {
    const { widgetMode } = this.props.config
    const changeArr = []
    this.closeDefaultReportPanel()
    if ( widgetMode === Mode.Preset ) {
      changeArr.push( { name: 'presetSelectedReport', value: ev.detail.id } )
      changeArr.push( { name: 'presetSelectedReportName', value: ev.detail.name } )
    } else {
      changeArr.push( { name: 'workflowSelectedReport', value: ev.detail.id } )
      changeArr.push( { name: 'workflowSelectedReportName', value: ev.detail.name } )
    }

    if ( ev.detail.reportID ) {
      // changeArr.push( { name: 'selectedReportIDName', value: ev.detail.reportID } )
      changeArr.push( { name: 'standardInfographicID', value: ev.detail.reportID } )

    }
    this.onMultiplePropertyChange( changeArr )

    requestAnimationFrame( () => {
      this.applyPresetDto()
      this.applyPresetBuffers()

      this._hideApplyButton()
    } )
  }

  accordionInitHandler ( data: any ) {
    this.onPropertyChange( 'reportList', data.detail )
  }

  baSearchResultsHandler ( ev: any ) {
    this.onSiteObjectChanged( { origin: 'basearch', data: ev } )
  }

  _findReportInList ( reportId: string, list: any ) {
    let result
    if ( reportId && list && list.length > 0 ) {
      for ( let ii = 0; ii < list.length; ii++ ) {
        const rep = list[ii]
        if ( rep?.id === reportId ) {
          result = rep
          break
        }
      }
    }
    return result
  }

  /* Find a report in any of our standard lists */
  _getReportItem ( reportId: string, list: any ): boolean {
    let item, rep
    if ( list ) {
      rep = this._findReportInList( reportId, list.user )
      if ( !rep ) {
        rep = this._findReportInList( reportId, list.shared )
      }
      if ( !rep ) {
        rep = this._findReportInList( reportId, list.public )
      }
      if ( !rep ) {
        rep = this._findReportInList( reportId, list.gallery )
      }
      if ( !rep ) {
        rep = this._findReportInList( reportId, list.tabular )
      }
      if ( rep ) {
        item = rep
      }
    }
    return item
  }

  _listHasDefaultReport ( list: any ): boolean {
    let found: boolean = false
    const report = this.getDefaultReport()
    if ( report && report.id ) {
      const rep: any = this._getReportItem( report.id, list )
      if ( rep && rep.id && rep.isChecked ) {
        found = true
      }
    }
    return found
  }

  reportCheckedHandler ( ev: any ) {
    this.closeDefaultReportPanel()

    const reportList = this.props.config.reportList
    const incomingReports = ev.detail.reports
    let newPublicList = []; let newUserList = []; let newSharedList = []; let newGalleryList = []; let newTabularList = []
    //const report = ev.detail.detail.report

    if ( reportList.public && reportList.public.length > 0 ) {
      newPublicList = reportList.public.map( item => {
        const matchingReport = incomingReports.find( r => r.id === item.id )
        if ( matchingReport ) {
          return { ...item, isChecked: matchingReport.isChecked }
        }
        return item
      } )
    }

    if ( reportList.user && reportList.user.length > 0 ) {
      newUserList = reportList.user.map( item => {
        const matchingReport = incomingReports.find( r => r.id === item.id )
        if ( matchingReport ) {
          return { ...item, isChecked: matchingReport.isChecked }
        }
        return item
      } )
    }

    if ( reportList.shared && reportList.shared.length > 0 ) {
      newSharedList = reportList.shared.map( item => {
        const matchingReport = incomingReports.find( r => r.id === item.id )
        if ( matchingReport ) {
          return { ...item, isChecked: matchingReport.isChecked }
        }
        return item
      } )
    }

    if ( reportList.gallery && reportList.gallery.length > 0 ) {
      newGalleryList = reportList.gallery.map( item => {
        const matchingReport = incomingReports.find( r => r.id === item.id )
        if ( matchingReport ) {
          return { ...item, isChecked: matchingReport.isChecked }
        }
        return item
      } )
    }
    if ( reportList.tabular && reportList.tabular.length > 0 ) {
      newTabularList = reportList.tabular.map( item => {
        const matchingReport = incomingReports.find( r => r.id === item.id )
        if ( matchingReport ) {
          return { ...item, isChecked: matchingReport.isChecked }
        }
        return item
      } )
    }
    const list = {
      public: newPublicList,
      shared: newSharedList,
      user: newUserList,
      gallery: newGalleryList,
      tabular: newTabularList
    }
    this.onPropertyChange( 'reportList', list )

    // reset the default if it is no longer checked/available
    if ( !this._listHasDefaultReport( list ) ) {
      this.resetDefaultReport()
    }
  }

  // onSiteObjectChanged()
  //
  // When we change the location or boundary being used for reports
  // the notification goes through here.  One source is the 'searchResults'
  // event listener [just above].  The other source is a direct call by
  // the map-actions handler when the user clicks on a linked map, or when
  // the user selects a search result from the embedded map-search control.
  //
  // In either case, we take the search result and set the state variables,
  // which then triggers another render in the widget.  At the same time,
  // we notify the MapActions that we need to update the buffers or geometry
  // showing on the linked map.
  //
  onSiteObjectChanged ( searchResult ) {
    if ( !searchResult ) return

    if ( searchResult.origin === 'basearch' ) {
      // data is coming from arcgis-ba-search result
      const e = searchResult.data
      let result: any = {}
      if ( e.detail.type === 'location' ) {
        result = {
          type: 'location',
          name: e.detail.name,
          address: e.detail.address,
          lat: e.detail.location.lat,
          lon: e.detail.location.lon
        }
      } else if ( e.detail.type === 'geography' ) {
        //setup geometry compatible with infographic component
        const geom: any = {
          type: 'polygon',
          rings: e.detail.geometry,
          spatial: { wkid: 102100 },
          latitude: 34.055561, // placeholder
          longitude: -117.182602
        }
        result = {
          type: 'geography',
          name: e.detail.title,
          areaId: e.detail.areaId,
          geography: {
            sourceCountry: e.detail.attributes.CountryAbbr,
            levelId: e.detail.attributes.DataLayerID,
            hierarchy: e.detail.attributes.Hierarchy,
            id: e.detail.areaId,
            attributes: e.detail.attributes,
            symbol: defaultFillSymbol
          },
          geometry: geom
        }
      }
      // updating these props will tell the widget the search object has changed
      // Also, it will tell the widget that a linked map may need updating
      if ( e.detail.mode && e.detail.mode === Mode.Preset ) {
        this.onPropertyChange( 'presetSearchSelectedObject', JSON.stringify( result ) )
        this.updateState( 'presetShowSearchInput', false )
      } else {
        this.onPropertyChange( 'workflowSearchSelectedObject', JSON.stringify( result ) )
        this.updateState( 'workflowShowSearchInput', false )
      }
    }
  }

  // TM
  /**
   * time24ToLocale
   * @param langCode Language code like 'en-US'
   * @param time24 Time to localize in the format 'hh:mm'
   * @returns localized time string
   */
  time24ToLocale ( langCode: string, time24: string ) {
    if ( langCode && time24 ) {
      const d = new Date( Date.parse( '01 Jan 2024 ' + time24 + ' UTC' ) )
      const tm = d.toLocaleTimeString( langCode, { timeZone: 'UTC', hour: 'numeric', minute: 'numeric' } )
      return tm
    } else {
      throw new Error( 'time24ToLocale: invalid args' )
    }
  }

  // TM
  // If 'travelModeData' is null or undefined, we set all the travel mode props to their defaults
  // Also handles backward compatibility for old 'drivingMode' property
  //
  checkTravelModeDefaults () {
    const { travelModeData, drivingMode, widgetMode } = this.props.config

    // Don't proceed if travel modes haven't loaded yet
    if ( this.state.isLoadingTravelModes || this.state.travelModes.length === 0 ) {
      return
    }

    // Check for backward compatibility: if we have old drivingMode but no travelModeData
    if ( !travelModeData && drivingMode && typeof drivingMode === 'string' ) {
      // Try to find travel mode by matching name (case-insensitive) or itemId
      const matchedTravelMode = this.state.travelModes.find( mode =>
        ( mode.name && mode.name.toLowerCase() === drivingMode.toLowerCase() ) ||
        mode.itemId === drivingMode
      )

      if ( matchedTravelMode ) {
        // Convert old drivingMode to new travelModeData structure
        const travelModeWithId = {
          ...matchedTravelMode.travelModeData,
          itemId: matchedTravelMode.itemId,
          name: matchedTravelMode.name,
          description: matchedTravelMode.description
        }
        this.onMultiplePropertyChange( [
          { name: 'travelModeData', value: travelModeWithId },
          { name: 'drivingMode', value: undefined } // Remove old property
        ] )

        // Also update state for preset mode
        if ( widgetMode === Mode.Preset ) {
          this.updateState( 'stTravelModeData', matchedTravelMode.itemId )
        }
        return // Exit early since we've set the travel mode
      } else {
        //console.warn(`BA Infographic: Could not find travel mode matching old drivingMode: "${drivingMode}". Available travel modes:`,
        this.state.travelModes.map( mode => mode.name )
      }
    }

    // Only set defaults if we don't have travelModeData and travel modes are loaded
    if ( !travelModeData && this.state.travelModes.length > 0 ) {
      // Set defaults - use first available travel mode from service
      const defs = this.travelModeDefaults
      const offTime = defs.offsetTime
      const langCode = getAppStore()?.getState()?.appContext?.locale || 'en-US'
      const offDay = this.localeString( 'mon' )
      const offHr = this.time24ToLocale( langCode, '12:00' )

      // Use first available travel mode from service
      const defaultDrivingMode = this.state.travelModes[0]

      // Create a clean travel mode object to avoid nested duplication
      const travelModeWithId = {
        ...defaultDrivingMode.travelModeData,
        itemId: defaultDrivingMode.itemId,
        name: defaultDrivingMode.name,
        description: defaultDrivingMode.description
      }

      const changeArr = [
        { name: 'travelModeData', value: travelModeWithId },
        { name: 'travelDirection', value: defs.direction },
        { name: 'useTrafficEnabled', value: defs.useTrafficEnabled },
        { name: 'useTrafficChecked', value: defs.useTrafficChecked },
        { name: 'trafficType', value: defs.trafficType },
        { name: 'offsetTime', value: offTime },
        { name: 'offsetDay', value: offDay },
        { name: 'offsetHr', value: offHr }
      ]
      this.onMultiplePropertyChange( changeArr )

      // Also update state for preset mode
      if ( widgetMode === Mode.Preset ) {
        this.updateState( 'stTravelModeData', defaultDrivingMode.itemId )
      }
    }
  }

  // called just before Render
  static getDerivedStateFromProps ( props, state ) {
    // Get the Setting instance for the active settings
    const inst = Setting.SettingRegistry[props.id]
    const token = SessionManager?.getInstance()?.getMainSession()?.token

    if ( inst ) {
      const { viewMode } = inst.props.config
      const isPendingHierarchySync = !!inst._pendingHierarchyId && inst.props.config.selectedHierarchy !== inst._pendingHierarchyId

      if ( inst._pendingHierarchyId && inst.props.config.selectedHierarchy === inst._pendingHierarchyId ) {
        inst._pendingHierarchyId = null
      }

      // sync viewMode
      if ( inst.state.stViewMode !== viewMode ) {
        const vm = ( typeof viewMode !== 'undefined' && viewMode === ViewMode.Auto ) ? undefined : viewMode
        inst.updateState( 'stViewMode', vm )
      }

      if ( inst.state.selectedHierarchyObj === null || inst.state.countries === null ) {
        const langCode = getAppStore().getState().appContext.locale || 'en'
        const geUrl = inst.state.geoenrichmentServiceUrl ? inst.state.geoenrichmentServiceUrl : 'https://geoenrich.arcgis.com/arcgis/rest/services/World/GeoEnrichmentServer'

        if ( langCode && geUrl && token && ( !inst.state.countries || inst.state.countries.length <= 0 ) ) {
          getCountries( langCode, geUrl, token ).then( ( countries ) => {
            if ( countries ) {
              // Get the hierarchies for the selected country
              const hierarchies = getValidHierarchies( inst.props.config.sourceCountry, countries )
              inst.updateState( 'availableHierarchies', hierarchies )

              if ( !inst.props.config.selectedHierarchy ) {
                // update new widget selectedHierarchy to the default
                const def = hierarchies.find( o => o.default )
                if ( def ) {
                  inst.updateState( 'selectedHierarchyObj', def )
                  inst.onPropertyChange( 'selectedHierarchy', def.ID )
                  inst._syncGeographyLevels( def )
                }
              } else if ( !isPendingHierarchySync ) {
                const h = hierarchies.find( o => o.ID === inst.props.config.selectedHierarchy )
                inst.updateState( 'selectedHierarchyObj', h )
                // Always sync geography levels on first load to ensure defaults are
                // refreshed from the selected hierarchy (config.json may be stale).
                // _syncGeographyLevels preserves any previously selected items.
                inst._syncGeographyLevels( h )
              }
              // Now update the state with the modified data.countries
              inst.updateState( 'countries', countries )
              // TM
              if ( inst.state.travelModes.length > 0 ) {
                inst.checkTravelModeDefaults()
              }
            }
          } )
        }
      } else {
        const countries = inst.state.countries
        // Get the hierarchies for the selected country
        const hierarchies = getValidHierarchies( inst.props.config.sourceCountry, countries )
        inst.updateState( 'availableHierarchies', hierarchies )

        if ( !inst.props.config.selectedHierarchy ) {
          // update new widget selectedHierarchy to the default
          const def = hierarchies.find( o => o.default )
          if ( def ) {
            inst.updateState( 'selectedHierarchyObj', def )
            inst.onPropertyChange( 'selectedHierarchy', def.ID )
            if ( !inst.state.activeGeographyLevels ) {
              inst._syncGeographyLevels( def )
            }
          }
        } else if ( !isPendingHierarchySync ) {
          const h = hierarchies.find( o => o.ID === inst.props.config.selectedHierarchy )
          inst.updateState( 'selectedHierarchyObj', h )
          if ( !inst.state.activeGeographyLevels ) {
            inst._syncGeographyLevels( h )
          }
        }
        // TM
        if ( inst.state.travelModes.length > 0 ) {
          inst.checkTravelModeDefaults()
        }
      }
    }
    // if (props.name !== state.name) {
    //   //Change in props
    //   return {
    //     name: props.name
    //   }
    // }
    return null // No change to state
  }

  async componentDidMount () {
    this.preloadData()

    // console.log( "SETTING - cached infographics enabled = ", this.enableCachedInfographics )
    if ( !this.enableCachedInfographics ) {
      this.onClearCache()
    }

    window.addEventListener( 'ba-app-state-ready', () => {
      this.onAppStateReady()
    } )

    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this

    helpUtils.getWidgetHelpLink( 'ba-infographic' ).then( url => {
      self.setState( { portalHelpUrl: url } )
    } )

    this.syncDtoStatesFromProps()

    // Load travel modes first, then check defaults
    await this.loadTravelModes()

    // After travel modes are loaded, check for defaults and backward compatibility
    this.checkTravelModeDefaults()
  }

  // Sets the check state of the workflow search geographies main checkbox
  updateGeographiesChecked ( checked: boolean ): void {
    this._geographiesChecked = checked
    this.updateState( 'geographiesChecked', checked )
  }

  /** _syncGeographyLevels
   *
   * hierarchy = currently active hierarchy
   * force = (Optional) arg that sets all levels according to the 'checked' value
   *          ex: force= {checked: true} // sets all the levels to checked
   */
  _syncGeographyLevels = ( hierarchy, force?) => {
    // state of geographies checked comes from instance variable
    // all geographies checked changes must go thru this.updateGeographiesChecked()
    //
    const isNewWidget = typeof this.props.config.hasInitializedGeographyLevels === 'undefined' || this.props.config.hasInitializedGeographyLevels === false
    // let geoChecked = this._geographiesChecked
    if ( hierarchy && hierarchy.geographyLevels && hierarchy.geographyLevels.length > 0 ) {
      // update selected states for updated geography levels without losing previous selected states
      const hierLevels = hierarchy.geographyLevels
      const newlySelected = []
      let selectedLevels
      let selectedPrev = []
      if ( isNewWidget ) {
        force = true // for new widget we want to set all the levels to checked according to the default hierarchy
        newlySelected.push( ...hierLevels )
        // if ( !this._geographiesChecked ) {
        //   geoChecked = true
        // }
      } else {
        if ( this.state.activeGeographyLevels ) {
          selectedPrev = this.state.activeGeographyLevels
        } else if ( this.props.config.selectedGeographyLevels ) {
          selectedPrev = this.props.config.selectedGeographyLevels
        }
      }

      // update selected levels list
      /**
       * Here we should make sure that we only have levels in the 'hierarchy',
       *  and then check any from the 'active' list that are also found in the
       *  'hierarchy' levels.
       *
       *  All the other levels should be unchecked.
       */
      if ( !force ) {
        if ( hierLevels && hierLevels.length > 0 ) {
          for ( let ii = 0; ii < hierLevels.length; ii++ ) {
            const l = hierLevels[ii]

            if ( !force ) {
              const selPrev = selectedPrev.includes( l )

              // capture if we had it selected before
              if ( selPrev ) {
                newlySelected.push( l )
              }
            } else if ( force.checked ) {
              newlySelected.push( l )
            }
          }
        }
      }
      if ( newlySelected.length > 0 ) {
        selectedLevels = newlySelected
      } else {
        selectedLevels = hierLevels
      }

      this.onMultiplePropertyChange( [
        { name: 'isSavedExperience', value: true },
        { name: 'hasInitializedGeographyLevels', value: true },
        { name: 'availableGeographyLevels', value: hierLevels },
        { name: 'selectedGeographyLevels', value: selectedLevels }
        // { name: 'geographiesChecked', value: geoChecked }
      ] )
      // all levels in hierarchy
      this.updateState( 'availableGeographyLevels', hierLevels )
      // active = selected/checked levels (from available)
      this.updateState( 'activeGeographyLevels', selectedLevels )
    }
  }

  onPropertyChange = ( name, value ) => {
    const { config, id } = this.props
    if ( value === config[name] ) {
      return
    }
    const newConfig = config.set( name, value )
    const alterProps = {
      id,
      config: newConfig
    }
    this.props.onSettingChange( alterProps )
  }

  waitForConfigPropChange = ( name: string, expectedValue: any, timeoutMs: number = 3000 ): Promise<any> => {
    const currentValue = this.props.config?.[name]
    if ( lodash.isDeepEqual( currentValue, expectedValue ) ) {
      return Promise.resolve( currentValue )
    }

    return new Promise( ( resolve, reject ) => {
      const waiter = {
        name,
        expectedValue,
        resolve,
        reject,
        timeoutId: null as ReturnType<typeof setTimeout> | null
      }

      if ( timeoutMs > 0 ) {
        waiter.timeoutId = setTimeout( () => {
          this._pendingConfigPropWaiters = this._pendingConfigPropWaiters.filter( w => w !== waiter )
          reject( new Error( `Timed out waiting for config.${name}` ) )
        }, timeoutMs )
      }

      this._pendingConfigPropWaiters.push( waiter )
    } )
  }

  _resolveConfigPropWaiters = ( prevConfig, nextConfig ) => {
    if ( this._pendingConfigPropWaiters.length === 0 ) {
      return
    }

    const remaining = []
    this._pendingConfigPropWaiters.forEach( waiter => {
      const prevValue = prevConfig?.[waiter.name]
      const nextValue = nextConfig?.[waiter.name]
      const didChange = !lodash.isDeepEqual( prevValue, nextValue )
      const matchesExpected = lodash.isDeepEqual( nextValue, waiter.expectedValue )

      if ( didChange && matchesExpected ) {
        if ( waiter.timeoutId ) {
          clearTimeout( waiter.timeoutId )
        }
        waiter.resolve( nextValue )
      } else {
        remaining.push( waiter )
      }
    } )

    this._pendingConfigPropWaiters = remaining
  }

  componentWillUnmount () {
    const panel = this.getDefaultReportPanel()
    if ( panel && this._defaultAccordionCollapseHandler ) {
      panel.removeEventListener( 'accordionCollapsed', this._defaultAccordionCollapseHandler as EventListener )
      this._defaultAccordionCollapseHandler = null
    }

    this._pendingConfigPropWaiters.forEach( waiter => {
      if ( waiter.timeoutId ) {
        clearTimeout( waiter.timeoutId )
      }
      waiter.reject( new Error( 'Setting unmounted before config prop update resolved' ) )
    } )
    this._pendingConfigPropWaiters = []
  }

  onMultiplePropertyChange = ( changeArr ) => {
    const { config, id } = this.props
    let newConfig = config
    changeArr.forEach( item => {
      if ( item.value === config[item.name] ) return
      newConfig = newConfig.set( item.name, item.value )
    } )
    const alterProps = {
      id,
      config: newConfig
    }
    this.props.onSettingChange( alterProps )
  }

  // Handle widget mode changes with travel mode preservation
  onWidgetModeChange = ( newMode: Mode ) => {
    // Store the current travel mode before changing modes
    let currentTravelMode = null

    if ( this.props.config.widgetMode === Mode.Preset && newMode === Mode.Workflow ) {
      // Switching from Preset to Workflow: get travel mode from state
      if ( this.state.stTravelModeData && this.state.travelModes.length > 0 ) {
        currentTravelMode = this.state.travelModes.find( mode => mode.itemId === this.state.stTravelModeData )
      }
    } else if ( this.props.config.widgetMode === Mode.Workflow && newMode === Mode.Preset ) {
      // Switching from Workflow to Preset: use config travel mode
      currentTravelMode = this.props.config.travelModeData
    }

    // Change the widget mode
    this.onPropertyChange( 'widgetMode', newMode )

    // Preserve the travel mode if we found one
    if ( currentTravelMode ) {
      requestAnimationFrame( () => {
        // Ensure we store only the clean travel mode object
        const cleanTravelMode = currentTravelMode?.travelModeData
          ? { ...currentTravelMode.travelModeData, itemId: currentTravelMode.itemId, name: currentTravelMode.name, description: currentTravelMode.description }
          : currentTravelMode

        if ( newMode === Mode.Preset ) {
          // Set both config and state for preset mode
          this.onPropertyChange( 'travelModeData', cleanTravelMode )
          const travelModeId = typeof cleanTravelMode === 'object' ? cleanTravelMode.itemId : cleanTravelMode
          this.updateState( 'stTravelModeData', travelModeId )
        } else {
          // Set config for workflow mode
          this.onPropertyChange( 'travelModeData', cleanTravelMode )
        }
      } )
    }
  }

  setProxyReferrer () {
    // Set geoenrichment proxy referrer
    let baProxyReferrer = ''
    const win: any = window as any
    const jimuCfg: any = win.jimuConfig

    switch ( jimuCfg.hostEnv ) {
      case 'prod':
        baProxyReferrer = 'https://bao.arcgis.com/'
        break
      case 'qa':
        baProxyReferrer = 'https://baoqa.arcgis.com/'
        break
      case 'dev':
        baProxyReferrer = 'https://baodev.arcgis.com/'
        break
    }

    proxyUtils.registerProxyReferrer( baProxyReferrer )
  }

  onGeoenrichmentUtilityChange = ( utilities: ImmutableArray<UseUtility> ) => {
    this.setProxyReferrer()

    if ( utilities?.[0]?.utilityId !== this.props.config.geoenrichmentConfig?.useUtility?.utilityId ) {
      const newConfig = { useUtility: utilities?.[0] }
      this.onPropertyChange( 'geoenrichmentConfig', newConfig )

      const { id } = this.props

      this.props.onSettingChange( {
        id,
        config: this.props.config.setIn( ['geoenrichmentConfig', 'useUtility'], utilities?.[0] ),
        // useUtilities: this.getUsedUtilities( utilities?.[0], this.props.config.geocodingConfig?.useUtility )
        useUtilities: this.getUsedUtilities( utilities?.[0] )
      } )
    }
  }

  // onGeocodingUtilityChange = ( utilities: ImmutableArray<UseUtility> ) => {
  //   this.setProxyReferrer()
  //
  //   if ( utilities?.[0]?.utilityId !== this.props.config.geocodingConfig?.useUtility?.utilityId ) {
  //     const newConfig = { useUtility: utilities?.[0] }
  //     this.onPropertyChange( 'geocodingConfig', newConfig )
  //
  //     const { id } = this.props
  //
  //     this.props.onSettingChange( {
  //       id,
  //       config: this.props.config.setIn( ['geocodingConfig', 'useUtility'], utilities?.[0] ),
  //       useUtilities: this.getUsedUtilities( this.props.config.geoenrichmentConfig?.useUtility, utilities?.[0] )
  //     } )
  //   }
  // }

  getUsedUtilities ( geoenrichmentUtility?: UseUtility ): UseUtility[] {
    // return [geoenrichmentUtility, geocodingUtility].filter( utility => Boolean( utility ) )
    return [geoenrichmentUtility].filter( utility => Boolean( utility ) )
  }

  onCachedInfographicStatusChanged = ( prevStatus: CachedInfographicStatusEnum, nextStatus: CachedInfographicStatusEnum ) => {
    // console.log( 'cachedInfographicStatus changed', {
    //   previous: prevStatus,
    //   current: nextStatus
    // } )

    const cacheInfographicButtonId = this.props.id + '_ciButton'
    const btn = document.getElementById( cacheInfographicButtonId ) as HTMLCalciteButtonElement
    if ( btn ) {
      // update the cache infographic button state in the side popper
      switch ( nextStatus ) {
        case CachedInfographicStatusEnum.ReadyToCache: {
          btn.disabled = false
          btn.loading = false
          break
        }
        case ( CachedInfographicStatusEnum.CacheCompleted ): {
          btn.disabled = false
          btn.loading = false
          break
        }
        case ( CachedInfographicStatusEnum.CurrentlyRunning ): {
          btn.disabled = true
          btn.loading = true
          break
        }
        case ( CachedInfographicStatusEnum.Error ): {
          btn.disabled = false
          btn.loading = false
          break
        }
        case ( CachedInfographicStatusEnum.NotAvailable ): {
          btn.disabled = true
          btn.loading = false
          break
        }
        case ( CachedInfographicStatusEnum.SettingsHaveChanged ): {
          btn.disabled = false
          btn.loading = false
          break
        }
        case ( CachedInfographicStatusEnum.CacheCleared ): {
          btn.disabled = false
          btn.loading = false
          break
        }
        // default: {
        //   btn.disabled = false
        //   btn.loading = false
        // }
      }
    }
  }
  // isSavedCIStatusDifferent () {
  //   const prev = this.props.config.cachedInfographicSettingsLastSelection
  //   const now = this.cachedInfographicSettingsSelection
  //   return !prev ? false : ( prev != now )
  // }

  // updateState changes the state to the new value, unless the
  // old and new values are the same, then it does nothing
  updateState ( name: string, value: any, callback?: any ) {
    let isSame: boolean

    const before = this.state[name]
    const after = value
    if ( typeof this.state[name] === 'object' ) {
      isSame = lodash.isDeepEqual( before, after )
    } else {
      isSame = before === after
    }
    if ( !isSame ) {
      this.setState( ( prevState ) => ( {
        ...prevState,
        [name]: value
      } ), callback )
    }
  }

  getKeys ( obj: any ) {
    let k
    const keys = []
    for ( k in obj ) {
      // eslint-disable-next-line no-prototype-builtins
      if ( obj.hasOwnProperty( k ) ) {
        keys.push( k )
      }
    }
    return keys
  }

  shallowObjectComparisonAreEqual ( obj1, obj2 ) {
    if ( !obj1 && !obj2 ) return true
    if ( ( !obj1 && obj2 ) || ( !obj2 && obj1 ) ) return false
    const keys1 = this.getKeys( obj1 )
    const keys2 = this.getKeys( obj2 )

    return keys1.length === keys2.length &&
      keys1.every( ( key ) => {
        const hasProp = Object.prototype.hasOwnProperty.call( obj2, key )
        if ( !hasProp ) return false
        // object props compare true if they are both objects (shallow)
        if ( typeof obj1[key] === 'object' ) {
          return ( obj2[key] && typeof obj2[key] === 'object' )
        } else {
          return ( hasProp && obj1[key] === obj2[key] )
        }
      } )
  }

  isObject ( object ) {
    return object != null && typeof object === 'object'
  }

  _onDataSourceChanged = ( country?, selectedHierarchyId?) => {
    const { countries, selectedCountry } = this.state
    const { widgetMode } = this.props.config
    let countryObj = null

    this._presetReportsListCache = {} // clear saved reports
    if ( country ) {
      countryObj = countries.find( o => o.id === country )
    } else if ( selectedCountry ) {
      countryObj = countries.find( o => o.id === selectedCountry )
    }
    if ( !countryObj ) {
      return
    }
    // update default hierarchy
    const filteredHierarchies = []
    for ( let ii = 0; ii < countryObj.hierarchies.length; ii++ ) {
      const h = countryObj.hierarchies[ii]
      if ( h.ID !== 'landscape' ) {
        filteredHierarchies.push( h )
      }
    }
    let hier
    if ( selectedHierarchyId ) {
      // validate the hierarchy arg
      hier = filteredHierarchies.find( h => h.ID === selectedHierarchyId )
    }
    if ( !hier ) {
      const defHier = filteredHierarchies.find( h => h.default )
      hier = defHier || filteredHierarchies[0]
      selectedHierarchyId = hier.ID
    }
    // Update our 'countries' data defaults to match our new selected hierarchy
    for ( let ii = 0; ii < filteredHierarchies.length; ii++ ) {
      const h = filteredHierarchies[ii]
      if ( h.ID === selectedHierarchyId ) {
        filteredHierarchies[ii].default = true
      } else {
        filteredHierarchies[ii].default = false
      }
    }
    // updating default hierarchy Geography Levels
    let availableLevels
    if ( filteredHierarchies ) {
      for ( let ii = 0; ii < filteredHierarchies.length; ii++ ) {
        const h = filteredHierarchies[ii]
        if ( h && h.ID === selectedHierarchyId ) {
          availableLevels = h.levelsInfo?.geographyLevels
          break
        }
      }
    }

    // update related states
    this.updateState( 'presetSearchSidePopper', false )
    this.updateState( 'presetBufferSidePopper', false )
    this.updateState( 'presetInfographicSidePopper', false )
    this.updateState( 'presetCachedInfographicSidePopper', false )
    this.updateState( 'workflowSidePopper', false )
    this.updateState( 'workflowBufferSidePopper', false )
    this.updateState( 'workflowInfographicSidePopper', false )
    this.updateState( 'availableHierarchies', filteredHierarchies )
    this.updateState( 'selectedHierarchyObj', hier )

    if ( widgetMode === Mode.Preset ) {
      this.updateState( 'presetShowSearchInput', true )
    } else {
      this.updateState( 'workflowShowSearchInput', true )
    }
    this.onPropertyChange( 'presetBuffersAccepted', false )

    // Allow this country selection UI handler to complete before
    // setting props & state
    requestAnimationFrame( () => {
      // update the shared props between Setting and Widget
      const changeArr = [
        { name: 'selectedGeographyLevels', value: availableLevels },
        { name: 'availableGeographyLevels', value: availableLevels },
        {
          name: 'selectedHierarchy',
          value: hier.ID
        },
        { name: 'langCode', value: getAppStore().getState().appContext.locale || 'en' },
        { name: 'sourceCountry', value: countryObj.id },
        { name: 'reportList', value: {} },
        { name: 'defaultReport', value: undefined },
        { name: 'presetSelectedReport', value: null },
        { name: 'presetSelectedReportName', value: null },
        { name: 'presetSearchSelectedObject', value: null },
        { name: 'workflowSearchSelectedObject', value: null },
        { name: 'standardInfographicID', value: null },
        { name: 'presetCachedInfographicSidePopper', value: false }
      ]

      this.onMultiplePropertyChange( changeArr )
      this.updateState( 'availableGeographyLevels', availableLevels )
      // select all levels
      this.updateState( 'activeGeographyLevels', availableLevels )
    } )
  }

  updateSelectedCountry = ( country ) => {
    this.onPropertyChange( 'autoSelectLatestDataSource', false )
    this._onDataSourceChanged( country )
  }

  onDataSourceChange = ( eOrValue ) => {
    const selectedHierarchyId = typeof eOrValue === 'string'
      ? eOrValue
      : eOrValue?.currentTarget?.value ?? eOrValue?.target?.value ?? eOrValue?.detail?.value ?? eOrValue?.value
    const currentHierarchyId = this.state.selectedHierarchyObj?.ID || this.props.config.selectedHierarchy
    if ( !selectedHierarchyId || selectedHierarchyId === currentHierarchyId ) {
      return
    }

    this._pendingHierarchyId = selectedHierarchyId

    // Commit selected hierarchy first to avoid a one-render rollback from
    // derived-state syncing before _onDataSourceChanged finishes.
    this.onPropertyChange( 'selectedHierarchy', selectedHierarchyId )
    this._onDataSourceChanged( this.state.selectedCountry, selectedHierarchyId )
  }

  showPresetSearchElement () {
    const { widgetMode } = this.props.config

    // Ensure Preset search is visible for Preset Mode
    if ( widgetMode === Mode.Preset ) {
      const delay = () => {
        const searchId = ACLUtils.fixId( this.props.id + '_preset_search' )
        const searchElem = ACLUtils.queryElement.call( this, searchId, this.getSettingOuterDiv() )
        if ( searchElem ) {
          const outer = ACLUtils.queryElement.call( this, 'div.baSearchOuter', searchElem )
          if ( outer ) {
            outer.style.visibility = 'visible'
          }
        }
      }
      setTimeout( delay, 500 )
    }
  }

  isGeographyLevelSelected = ( level ) => {
    let isFound = false
    if ( level && level.length > 0 ) {
      const checkedItems = this.state.activeGeographyLevels || this.props.config.selectedGeographyLevels
      const l = checkedItems.find( o => o === level )
      if ( l ) { isFound = true }

    }
    return isFound
  }

  updateGeographyLevelCheck = ( level, checked ) => {

    const checkedItems = this.state.activeGeographyLevels
    let selectedLevels: any[]
    if ( !checked ) {
      const removeLevelIdx = checkedItems.indexOf( level.level )
      selectedLevels = [
        ...checkedItems.slice( 0, removeLevelIdx ),
        ...checkedItems.slice( removeLevelIdx + 1 )
      ]
      // update the parent checkbox
    } else {
      if ( !this.isGeographyLevelSelected( level ) ) {
        selectedLevels = [
          ...checkedItems,
          level.level
        ]
      }
    }
    this.onPropertyChange( 'selectedGeographyLevels', selectedLevels )
    this.updateState( 'activeGeographyLevels', selectedLevels )

    const geogChecked: boolean = selectedLevels && selectedLevels.length > 0
    this.updateGeographiesChecked( geogChecked )
  }

  async setCISavedSignature ( signature: any ) {
    // console.log( 'setCISavedSignature changing selection to: ', signature )
    if ( this.cachedInfographicSettingsSelection !== signature ) {
      this.cachedInfographicSettingsSelection = signature // runtime
    }

    if ( this.props.config.cachedInfographicSettingsLastSelection !== signature ) {
      this.onPropertyChange( 'cachedInfographicSettingsLastSelection', signature )
      await this.waitForConfigPropChange( 'cachedInfographicSettingsLastSelection', signature, 3000 )
        // .then( () => {
        //   // console.log( 'setCISavedSignature confirmed config.cachedInfographicSettingsLastSelection is now', signature )
        // } )
        .catch( ( err ) => {
          console.warn( 'setCISavedSignature config update timeout error', err )
        } )
    }
  }

  // create a signature for each setting so that we can compare if
  // the settings have changed since the last time the user selected them
  async captureSelectedStates () {
    // console.log( 'captureSelectedStates...' )
    // const self = this
    const _failedToGenerateSignature = () => {
      this.setCISavedSignature( null )
      if ( this.state.cachedInfographicStatus !== CachedInfographicStatusEnum.NotAvailable ) {
        // console.log( "captureSelectedStates setting status to: NotAvailable" )

        this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.NotAvailable )
      }
    }

    if ( !this.isCachingReady() ) {
      // console.log( 'SETTINGS clearing signature' )
      if ( this.isValidCachedObject() ) {
        // console.log( "captureSelectedStates setting status to: SettingsHaveChanged" )

        this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.SettingsHaveChanged )
      } else {
        _failedToGenerateSignature()
      }
    } else {
      const signature = await this.generateSettingsSignature()
      if ( !signature ) {
        _failedToGenerateSignature()
        return
      }
      if ( !this.cachedInfographicSettingsSelection ) {
        // if we don't have a cached selection, try to set it
        // console.log( 'SETTINGS init signature to:', signature )

        this.setCISavedSignature( signature )
        const ciState = this.state.cachedInfographicStatus
        // We dont change the status if its already running, completed, or in error,
        // otherwise we might interrupt a caching process
        if ( ciState !== CachedInfographicStatusEnum.CurrentlyRunning && // in progress
          ciState !== CachedInfographicStatusEnum.ReadyToCache && // already ready to cache
          ciState !== CachedInfographicStatusEnum.CacheCompleted && // cache completed
          ciState !== CachedInfographicStatusEnum.Error ) {

          if ( ciState !== CachedInfographicStatusEnum.ReadyToCache && ciState !== CachedInfographicStatusEnum.CacheCleared ) {
            // console.log( "captureSelectedStates setting status to: ReadyToCache" )

            this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.ReadyToCache )
          }
        }
      } else {
        // console.log( 'SETTINGS comparing signatures:', this.cachedInfographicSettingsSelection, signature )
        // We have a previous selection, compare it to the current one
        if ( this.cachedInfographicSettingsSelection !== signature ) {
          // user changed the settings - update the selection
          // console.log( 'SETTINGS changing signature to:', signature )
          this.setCISavedSignature( signature )
          // If the selection has changed, update the status to indicate settings have changed
          if ( this.state.cachedInfographicStatus !== CachedInfographicStatusEnum.SettingsHaveChanged ) {
            // console.log( "captureSelectedStates setting status to: SettingsHaveChanged" )
            this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.SettingsHaveChanged )
          }
        }
        // else {
        //   // user selected or left the same settings - do nothing
        // }
      }
    }
  }

  // Generates a unique hash signature of the current settings
  // this works even if the settings are in a different order, as long
  // as the values are the same
  async generateSettingsSignature () {
    try {
      // we need the location, buffers, and infographic settings
      const cfg = this.props.config
      const selectedObject = cfg.presetSearchSelectedObject
      const infographic = cfg.presetSelectedReport
      const bufObj = {
        presetBuffer: cfg.presetBuffer,
        presetDrivetimeBuffer1: cfg.presetDrivetimeBuffer1,
        presetDrivetimeBuffer2: cfg.presetDrivetimeBuffer2,
        presetDrivetimeBuffer3: cfg.presetDrivetimeBuffer3,
        presetDrivetimeBufferUnit: cfg.presetDrivetimeBufferUnit,
        presetRingsBuffer1: cfg.presetRingsBuffer1,
        presetRingsBuffer2: cfg.presetRingsBuffer2,
        presetRingsBuffer3: cfg.presetRingsBuffer3,
        presetRingsBufferUnit: cfg.presetRingsBufferUnit,
        presetWalktimeBuffer1: cfg.presetWalktimeBuffer1,
        presetWalktimeBuffer2: cfg.presetWalktimeBuffer2,
        presetWalktimeBuffer3: cfg.presetWalktimeBuffer3,
        presetWalktimeBufferUnit: cfg.presetWalktimeBufferUnit
      }
      const buffers = bufObj

      if ( infographic && selectedObject ) {
        const obj = {
          selectedObject,
          buffers,
          infographic
        }
        const signature = await objectSignature( obj )
        return signature
      }
    } catch ( err ) {
      console.warn( 'Error generating settings signature', err )
    }
    return null
  }

  componentDidUpdate ( prevProps, prevState ) {
    const { id, sourceCountry, selectedGeographyLevels, baSearchType, viewMode, widgetMode, hasInitializedGeographyLevels } = this.props.config
    const { selectedCountry, pointsOfInterestChecked, activeGeographyLevels } = this.state

    if ( prevProps.config !== this.props.config ) {
      this._resolveConfigPropWaiters( prevProps.config, this.props.config )
    }

    // console.log( 'componentDidUpdate restoring signature', this.props.config.cachedInfographicSettingsLastSelection )
    // Restore CI signature from last session
    this.cachedInfographicSettingsSelection = this.props.config.cachedInfographicSettingsLastSelection

    if ( prevState.cachedInfographicStatus !== this.state.cachedInfographicStatus ) {
      this.onCachedInfographicStatusChanged( prevState.cachedInfographicStatus, this.state.cachedInfographicStatus )
    }

    /** Sync the following
     *  - activeGeographyLevels
     *  - appSearchScope
     *  - appSearchScopeLocked
     *  - baSearchType
     *  - geographiesChecked
     *  - pointsOfInterestChecked
     *  - searchtype
     *  - selectedCountry
     *  - selectedGeographyLevels
     *  - stTravelModeData
     *  - travelModeData
     *  - viewMode
     */
    // This inserts the BaAppState service component first time only at the top of the widget
    this.insertBaAppStateServiceComponent()

    // run the async captureSelectedStates function to create a signature of the current settings
    this.captureSelectedStates()

    if ( this.state.stViewMode !== viewMode ) {
      const vm = ( typeof viewMode !== 'undefined' && viewMode === ViewMode.Auto ) ? undefined : viewMode
      this.updateState( 'stViewMode', vm )
    }
    // Handle widget mode changes - sync travel mode data between config and state
    if ( prevProps.config.widgetMode !== widgetMode ) {
      if ( widgetMode === Mode.Preset ) {

        // Switching TO preset mode: sync config travelModeData to state stTravelModeData
        const travelModeData = this.props.config.travelModeData
        if ( travelModeData ) {
          const travelModeId = typeof travelModeData === 'object' ? travelModeData.itemId : travelModeData
          this.updateState( 'stTravelModeData', travelModeId )
        }
      } else if ( widgetMode === Mode.Workflow ) {
        // Switching TO workflow mode: apply preset state to config if we have it
        if ( this.state.stTravelModeData && this.state.travelModes.length > 0 ) {
          const selectedTravelMode = this.state.travelModes.find( mode => mode.itemId === this.state.stTravelModeData )
          if ( selectedTravelMode && this.props.config.travelModeData !== selectedTravelMode ) {
            this.onPropertyChange( 'travelModeData', selectedTravelMode )
          }
        }
      }
    }

    if ( this.props.config.travelModeData !== prevProps.config.travelModeData ) {
      const travelModeData = this.props.config.travelModeData
      // Update state based on whether we have an object or just an itemId
      if ( travelModeData && typeof travelModeData === 'object' ) {
        this.updateState( 'stTravelModeData', travelModeData.itemId )
      } else {
        this.updateState( 'stTravelModeData', travelModeData )
      }
    }
    if ( prevState.isLoadingTravelModes && !this.state.isLoadingTravelModes && this.state.travelModes.length > 0 ) {
      this.checkTravelModeDefaults()
    }
    // sync Setting UI's country local state with the value
    // shared between Settings & Widget
    if ( selectedCountry !== sourceCountry ) {
      this.updateState( 'selectedCountry', sourceCountry )
    }
    // sync selected geography levels
    if ( !activeGeographyLevels && selectedGeographyLevels ) {
      this.updateState( 'activeGeographyLevels', selectedGeographyLevels )
    }

    // Geography levels
    //
    // pull state from UI checkboxes
    let poiChecked = pointsOfInterestChecked // default to true for new widget without this state initialized
    let geoChecked = this._geographiesChecked
    let isAll = poiChecked && geoChecked
    let geogEnabled = isAll || geoChecked
    let ptsEnabled = isAll || poiChecked
    // If nothing is selected in local state, recover from saved config first.
    if ( !poiChecked && !geoChecked ) {
      const recoveredType = this.searchTypeToNumber( this.props.config.appSearchScope || baSearchType || Setting_BaSearchTypeNumber.all ) || Setting_BaSearchTypeNumber.all
      poiChecked = recoveredType === Setting_BaSearchTypeNumber.all || recoveredType === Setting_BaSearchTypeNumber.address
      geoChecked = recoveredType === Setting_BaSearchTypeNumber.all || recoveredType === Setting_BaSearchTypeNumber.boundary
      isAll = poiChecked && geoChecked
      geogEnabled = isAll || geoChecked
      ptsEnabled = isAll || poiChecked
    }

    if ( !hasInitializedGeographyLevels ) {
      // Pull state from persisted config for first loads of the widget.
      // appSearchScope is the authoritative setting for runtime scope.
      const persistedType = this.searchTypeToNumber( this.props.config.appSearchScope || baSearchType || Setting_BaSearchTypeNumber.all ) || Setting_BaSearchTypeNumber.all
      poiChecked = persistedType === Setting_BaSearchTypeNumber.all || persistedType === Setting_BaSearchTypeNumber.address
      geoChecked = persistedType === Setting_BaSearchTypeNumber.all || persistedType === Setting_BaSearchTypeNumber.boundary
      isAll = poiChecked && geoChecked
      geogEnabled = isAll || geoChecked
      ptsEnabled = isAll || poiChecked
      //
    }
    const locked = !isAll

    // Sync POI & Geography levels with searchType prop if needed
    const searchType = isAll ?
      Setting_BaSearchTypeNumber.all : geogEnabled && !ptsEnabled ? Setting_BaSearchTypeNumber.boundary : Setting_BaSearchTypeNumber.address

    // Apply both checkbox states explicitly so reload does not drift back to ALL.
    if ( this.state.pointsOfInterestChecked !== poiChecked ) {
      this.updateState( 'pointsOfInterestChecked', poiChecked )
    }
    if ( this._geographiesChecked !== geoChecked ) {
      this.updateGeographiesChecked( geoChecked )
    }

    // Set 'baSearchType' to one of 'all', 'boundaries', or 'locations' - update it based on the current checkbox states
    if ( !this.compareSearchTypes( this.state.baSearchType, searchType ) ) {
      this.updateState( 'baSearchType', searchType )
    }
    if ( searchType === Setting_BaSearchTypeNumber.address ) {
      // Turn off all geography levels if geographies is un-checked
      if ( this.state.activeGeographyLevels && this.state.activeGeographyLevels.length > 0 ) {
        this.updateState( 'activeGeographyLevels', [] )
      }
      if ( this.props.config.selectedGeographyLevels && this.props.config.selectedGeographyLevels.length > 0 ) {
        this.onPropertyChange( 'selectedGeographyLevels', [] )
      }
    }

    // ---
    // if ( this.props.config !== prevProps.config ) {
    //   this.preloadData()
    // }
    const elem: any = document.getElementById( id + '_reports' )
    if ( elem ) {
      elem.setMultipleChoice( false )
    }
    const wfElem: any = document.getElementById( id + '_wf-reports' )
    if ( wfElem ) {
      wfElem.setMultipleChoice( true )
    }

    setTimeout( () => {
      const scope = this.searchTypeToScope( searchType )
      this.onMultiplePropertyChange( [
        { name: 'baSearchType', value: searchType },
        { name: 'searchtype', value: searchType },
        { name: 'appSearchScope', value: scope },
        { name: 'appSearchScopeLocked', value: locked }
      ] )
      this.syncSearchScopeToBaAppState( scope, locked )
    }, 0 )

    const validCache = this.isValidCachedObject()

    const locationPanel = ACLUtils.queryElementById.call( this, this.props.id + '_locationSettingsPanel' )
    locationPanel && this._disableNode( locationPanel, validCache )

    const bufferPanel = ACLUtils.queryElementById.call( this, this.props.id + '_bufferSettingsPanel' )
    bufferPanel && this._disableNode( bufferPanel, validCache )

    const infographicPanel = ACLUtils.queryElementById.call( this, this.props.id + '_infographicsSettingsPanel' )
    infographicPanel && this._disableNode( infographicPanel, validCache )

  }

  onDefaultInfographicChanged ( info ) {
    if ( info ) {
      this.onPropertyChange( 'defaultReport', info )

      requestAnimationFrame( () => {
        this.initializeReportComponents( true )
      } )
    }
  }

  initializeReportComponents ( mergeWithLatest?: boolean ) {
    const token = this.getToken()

    /** IMPORTANT: Makes sure the UI is updated */
    requestAnimationFrame( async () => {
      const { user } = this.props
      const { sourceCountry, selectedHierarchy, autoSelectLatestDataSource, reportList } = this.props.config
      const { workflowEnableInfographicChoice } = this.props.config
      const langCode = getAppStore().getState().appContext.locale || 'en'

      const presetReports: any = document.getElementById( this.props.id + '_reports' )
      if ( presetReports ) {
        const activeH = getActiveHierarchyId( this.props.config.selectedHierarchy, this.props.config.autoSelectLatestDataSource )
        const savedReportList = this._presetReportsListCache || {}
        this._presetReportsListCache = await presetReports.initialize( user.username, token, sourceCountry, activeH, langCode, false, savedReportList )

        presetReports.style.width = '100%'
        presetReports.style.padding = '3px !important'
      }
      const wfReports: any = document.getElementById( this.props.id + '_wf-reports' )
      if ( wfReports ) {
        const def = this.getDefaultReport()
        const defReport = ( def ) ? JSON.stringify( def ) : undefined
        const activeH = getActiveHierarchyId( selectedHierarchy, autoSelectLatestDataSource )

        if ( workflowEnableInfographicChoice ) {
          const rList = ( reportList && ( reportList.public || reportList.user || reportList.shared || reportList.gallery || reportList.tabular ) ) ? reportList : {}
          wfReports.initialize( user.username, token, sourceCountry, activeH, langCode, true, rList, defReport, mergeWithLatest )
          wfReports.style.width = '100%'
          wfReports.style.padding = '3px !important'
          wfReports.setAttribute( 'showCheckboxes', true )
        } else {
          wfReports.initialize( user.username, token, sourceCountry, activeH, langCode, false, {}, defReport )
          wfReports.style.width = '100%'
          wfReports.style.padding = '3px !important'
          wfReports.setAttribute( 'showCheckboxes', false )
        }
      }
    } )
  }

  showInfographicsLoading () {
    // display the busy spinner
    const busy = document.getElementById( this.props.id + '_loading-infos' )
    if ( busy ) {
      busy.style.display = 'block'
    }
  }

  hideInfographicsLoading () {
    // hide the busy spinner
    const busy = document.getElementById( this.props.id + '_loading-infos' )
    if ( busy ) {
      busy.style.display = 'hidden' // should be 'none' ?
    }
  }

  refreshInfographicReports () {
    this.showInfographicsLoading()
    this.initializeReportComponents()
    this.hideInfographicsLoading()
  }

  toggleSidePopper = ( name: string ) => {
    // ensure other poppers are closed
    this.updateState( 'presetSearchSidePopper', false )
    this.updateState( 'presetBufferSidePopper', false )
    this.updateState( 'presetInfographicSidePopper', false )
    this.updateState( 'presetCachedInfographicSidePopper', false )
    this.updateState( 'workflowSidePopper', false )
    this.updateState( 'workflowBufferSidePopper', false )
    this.updateState( 'workflowInfographicSidePopper', false )

    // open popper
    const isOpening: boolean = !this.state[name]
    this.updateState( name, !this.state[name] )
    if ( isOpening ) {
      const refreshListAndMergeWithLatest = true
      setTimeout( () => { this.initializeReportComponents( refreshListAndMergeWithLatest ) }, 0 )
    }
    this.showPresetSearchElement()
    // TODO: update geography list
  }

  setSearchResultLabel = ( str ) => {
    const { id } = this.props
    const elem = document.getElementById( id + '_searchResult' )
    if ( elem ) elem.innerText = str
  }

  onMapWidgetSelected = ( useMapWidgetIds: string[] ) => {
    this._mapWidgetId = useMapWidgetIds[0]
    this.props.onSettingChange( {
      id: this.props.id,
      useMapWidgetIds
    } )
    const idsLike = useMapWidgetIds as unknown as { length?: number, size?: number }
    const selectedCount = idsLike?.length ?? idsLike?.size ?? 0
    if ( selectedCount > 0 ) {
      const mapWidget = useMapWidgetIds.toString()
      const appConfigActions = getAppConfigAction()
      const appConfig = appConfigActions.appConfig
      const widgetConfig = appConfig.widgets[useMapWidgetIds[0]].config
      this.props.onSettingChange( {
        id: mapWidget,
        config: {
          ...widgetConfig,
          toolConfig: {
            ...widgetConfig.toolConfig,
            canSearch: false
          }
        }
      } )
    }
  }

  localeString = ( string ) => {
    return this.props.intl.formatMessage( { id: string, defaultMessage: defaultMessages[string] } )
  }

  getThemeObject = () => {
    return {
      brand: '#007F94',
      brandHover: '#00aabb',
      brandPress: '#00aabb',
      foreground1: '#181818ff',
      foreground2: '#4a4a4aff',
      text1: '#fafafaff',
      text2: '#a8a8a8ff',
      text3: '#ffffffff',
      border: '#a8a8a8',
      border2: '#929292ff',
      border3: '#181818',
      accordionBackground: '#ffffff',
      accordionForeground: '#000000',
      text: '#181818',
      background: '#ffffff',
      foreground: '#181818',
      textInverse: '#ffffff',
      backgroundInverse: '#181818',
      borderInverse: '#ffffff',
      scrollbar: '#cccccc',
      scrollbarBG: '#f5f5f5'
    }
  }

  onToggleInfographicChoice ( val: boolean ) {
    this.onPropertyChange( 'workflowEnableInfographicChoice', val )

    requestAnimationFrame( () => {
      this.initializeReportComponents()
    } )
  }

  stringifyTheme = () => {
    // Theme colors should match ExB
    const themeString = this.getThemeObject()
    return JSON.stringify( themeString )
  }

  onToggleEnableMapSearch = ( checked ) => {
    if ( checked !== this.props.config.searchbarEnabled ) {
      this.onPropertyChange( 'searchbarEnabled', checked )
    }
  }

  onSearchTypeChanged = ( searchType, checked ) => {

    let poi: boolean = searchType === 'pointsOfInterest' ? checked : this.state.pointsOfInterestChecked
    let geo: boolean = searchType === 'geographies' ? checked : this._geographiesChecked

    const isAll: boolean = poi && geo
    switch ( searchType ) {
      case ( 'pointsOfInterest' ): {
        const isChecked = checked
        const geogChecked = isAll || geo

        if ( !geogChecked && !checked ) {
          // force check on points (not able to have both un-checked)
          poi = true
        }
        if ( this.state.pointsOfInterestChecked !== poi ) {
          this.updateState( 'pointsOfInterestChecked', isChecked )
        }
        const searchType = isAll ? Setting_BaSearchTypeNumber.all : poi ? Setting_BaSearchTypeNumber.address : Setting_BaSearchTypeNumber.boundary

        const delay = () => {
          // update BA App state search scope - - -
          const scope: string = ( isAll ) ? 'all' : ( poi ) ? 'address' : 'boundary'
          const lock: boolean = !( scope === 'all' )
          this.onMultiplePropertyChange( [
            { name: 'baSearchType', value: searchType },
            { name: 'appSearchScope', value: scope },
            { name: 'appSearchScopeLocked', value: lock }
          ] )
          this.syncSearchScopeToBaAppState( scope, lock )

          requestAnimationFrame( () => {
            this.renderMainBufferButton()
          } )
        }
        setTimeout( delay, 0 )
        break
      }
      case ( 'geographies' ): {
        let isChecked = geo
        const locsEnabled = isAll || poi
        if ( !locsEnabled && !checked ) {
          // force check on points (not able to have both un-checked)
          isChecked = true
        }
        geo = isChecked
        if ( this._geographiesChecked !== geo ) {
          this.updateGeographiesChecked( geo )
        }
        const searchType = geo ? poi ? Setting_BaSearchTypeNumber.all : Setting_BaSearchTypeNumber.boundary : Setting_BaSearchTypeNumber.address
        // const searchType = isChecked ? poi ? Setting_BaSearchTypeNumber.all : Setting_BaSearchTypeNumber.boundary : Setting_BaSearchTypeNumber.address
        const delay = () => {
          // Turn off all geography levels if geographies is un-checked
          this.toggleAllGeographyLevels( isChecked )
          // update BA App state search scope - - -
          const scope: string = ( poi && geo ) ? 'all' : ( !poi && geo ) ? 'boundary' : 'address'
          const lock: boolean = !( scope === 'all' )


          this.onMultiplePropertyChange( [
            { name: 'baSearchType', value: searchType },
            { name: 'appSearchScope', value: scope },
            { name: 'appSearchScopeLocked', value: lock }
          ] )
          this.syncSearchScopeToBaAppState( scope, lock )
        }
        setTimeout( delay, 0 )
        break
      }
    }
  }

  toggleAllGeographyLevels = ( checked ) => {
    const poi: boolean = this.state.pointsOfInterestChecked
    const hier = this.state.selectedHierarchyObj
    if ( !hier ) {
      console.warn( 'No hierarchy found when toggling all geography levels' )
      return
    }
    const allLevels = hier.geographyLevels
    // Note: the levels can all be toggled on/off only if POI search is enabled, otherwise it
    // could leave the user with no search options.
    if ( !poi ) {
      return
    }

    // turn all levels on/off
    if ( !checked ) {
      this.onPropertyChange( 'selectedGeographyLevels', [] )
      this.updateState( 'activeGeographyLevels', [] )
    } else {
      this.onPropertyChange( 'selectedGeographyLevels', allLevels )
      this.updateState( 'activeGeographyLevels', allLevels )
    }
    this._syncGeographyLevels( hier, true )
  }
  isCachingReady = (): boolean => {
    // console.log( 'Checking if caching is ready...' )
    // const { presetBuffersQueued } = this.state
    const { widgetMode, presetSearchSelectedObject, presetSelectedReportName } = this.props.config
    // Pre-check of search object, buffers, and infographic
    if ( widgetMode !== Mode.Preset ||
      !presetSearchSelectedObject ||
      !presetSelectedReportName ||
      !ACLUtils.hasText( presetSelectedReportName ) ) {
      return false
    }
    // let hasBuffers: boolean = false

    const obj = JSON.parse( presetSearchSelectedObject )
    if ( !obj ) return false

    const locName: string = obj.type === 'location' ? obj.address : obj.name
    if ( !ACLUtils.hasText( locName ) ) return false

    const hasLocation: boolean = obj.type ? ( obj.type === 'geography' || obj.type === 'location' ) : false
    // if the location selected is a Boundary - we disable the Buffers button
    // if ( ( obj && ( obj.type === 'geography' ) ) || presetBuffersQueued ) { //TODO: presetBuffersQueued is not set in preset right away
    //   hasBuffers = true
    // }
    //
    //
    return hasLocation
  }

  isValidCachedObject = (): boolean => {
    if ( this.props.config.widgetMode === Mode.Workflow ) {
      return false
    }
    let result = false
    const obj = this.props.config.presetCachedInfographicObject

    if ( obj ) {
      const validName: boolean = obj.name && ACLUtils.hasText( obj.name )
      const isLoc: boolean = obj.selectedObject?.type === 'location'
      const isGeog: boolean = obj.selectedObject?.type === 'geography'
      const validLoc: boolean = isLoc || isGeog
      const hasBuffers: boolean = obj.buffers
      const validReport: boolean = obj.report && ACLUtils.hasText( obj.report )
      const validUrl: boolean = obj.url && ACLUtils.hasText( obj.url )
      const validTime: boolean = typeof obj.timestamp !== 'undefined'
      const buffersOk: boolean = isGeog ? true : hasBuffers

      result = validName && validLoc && buffersOk && validReport && validUrl && validTime
    }
    return result
  }
  onShowCachingPopup = () => {
    // console.log( '%cCache button clicked', 'font-size:13pt;color:orange' )
    try {
      this.onClickCacheInfographic()
    } catch ( err ) {
      console.error( '@@@ onClickCacheInfographic error:', err )
    }
  }

  /** onClickCacheInfographic
   * This function will handle both caching a new infographic and clearing an existing cached infographic
   * based on whether we have a valid cached object or not. If we have a valid cached object
   * (presetCachedInfographicObject), clicking the button will clear the cache and reset the
   * presetCachedInfographicObject property to null, allowing the user to start fresh with new
   * preset selections for location, buffer, and report.
   *
   * If we do not have a valid cached object, clicking the button will create one based on the current
   * preset selections (location, buffer, and report) and save the result in the presetCachedInfographicObject
   * property.
   *
   * Note: if this handler creates a new cached object, the displayed infographic will be using the cached data from
   * that time forward until the cache is cleared.  Once cleared, the preset infographic will display
   * as it would normally (without the cache) based on the current settings.
   */
  async onClickCacheInfographic () {

    BaAppState.logTemp( 'onClickCacheInfographic ..............' )
    if ( !this.isCachingReady() || this.props.config.widgetMode === Mode.Workflow ) {
      BaAppState.logTemp( 'onClickCacheInfographic: caching not ready or in workflow mode' )
      return
    }
    const { presetSearchSelectedObject, presetSelectedReportName } = this.props.config
    let resourceUrl
    // let actualUrl
    const widgetId = this.props.id
    const appResourceManager = AppResourceManager.getInstance()

    const obj = JSON.parse( presetSearchSelectedObject )
    const locName: string = obj.type === 'location' ? obj.address : obj.name
    const c = this.props.config

    // make sure the resource is removed before creating this
    this.onClearCache()

    // Change the cache status to 'currently running'
    // console.log( "onClickCacheInfographic setting status to: CurrentlyRunning" )
    this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.CurrentlyRunning )

    let units: string = ''
    const rings: any[] = []
    // let geography: any = null
    // let geometry: any = null
    const traffic: boolean = c.useTrafficEnabled && c.useTrafficChecked
    let dt: any = null
    if ( obj.type === 'location' ) {
      if ( c.presetBuffer === 'ring' ) {
        rings[0] = c.presetRingsBuffer1
        rings[1] = c.presetRingsBuffer2
        rings[2] = c.presetRingsBuffer3
        units = c.presetRingsBufferUnit
      } else if ( c.presetBuffer === 'drivetime' ) {
        rings[0] = c.presetDrivetimeBuffer1
        rings[1] = c.presetDrivetimeBuffer2
        rings[2] = c.presetDrivetimeBuffer3
        units = c.presetDrivetimeBufferUnit
      } else if ( c.presetBuffer === 'walktime' ) {
        rings[0] = c.presetWalktimeBuffer1
        rings[1] = c.presetWalktimeBuffer2
        rings[2] = c.presetWalktimeBuffer3
        units = c.presetWalktimeBufferUnit
      }
      if ( traffic ) {
        dt = {
          trafficType: c.trafficType,
          trafficTimeOfDay: c.trafficTimeOfDay,
          trafficCustomTime: c.trafficCustomTime,
          travelDirection: c.travelDirection,
          travelModeData: c.travelModeData
        }
      }
    }
    // } else if ( obj.type === 'geography' ) {
    //   geography = obj.geography
    //   geometry = obj.geometry
    // }
    const buffers = {
      buffer: c.presetBuffer,
      bufferUnits: units,
      rings: rings,
      useTraffic: traffic,
      trafficData: dt,
    }

    /* selectedObject contents example
     *
     * location sample:
     *
     * obj = {
     *   address: "Redlands, California",
     *   lat: 34.0555616,
     *   lon: -117.1826034,
     *   name: "Redlands, CA",
     *   type: "location"
     * }
     *
     * geography sample:
     *
     * obj = {
     *  "type": "geography",
     *   "name": "Riverside County, CA",
     *   "areaId": "06065",
     *   geography: {sourceCountry: 'US', levelId: 'US.Counties', hierarchy: 'esri2025', id: '06065', attributes: {…}, …}
     *   geometry: {type: 'polygon', rings: Array(1), spatial: {…}, latitude: 34.055561, longitude: -117.182602}
     * }
     */

    const infoObj: any = {
      name: locName,
      selectedObject: obj,
      report: presetSelectedReportName,
      // for now:  using hardcoded url since we don't have a real infographic generation process in place.
      // TODO: This will need to be updated to the actual infographic url once we have that ready
      // url: 'https://baodev.arcgis.com/InfographicsPlayer/BAMobile/24.R02/reportPlayer/InfographicFromResource.html#resourceUrl=https://devext.arcgis.com/sharing/rest/content/items/1e80e048ac3540a7909dee8225179695/resources/b6c5277f0b00434a9c51dde763fef7fc.txt&portalUrl=https://devext.arcgis.com&noExportOptions=true&allowDynamicQuery=true', // placeholder until we generate real infographic and get the url
      url: '',
      timestamp: Date.now()
    }
    if ( obj.type === 'location' ) {
      infoObj.buffers = buffers
    }

    try {
      // console.log( '%cSETTING getIGData...', 'color:blue;font-size:13pt' )
      const settings: CachedInfographicParams = this.getCachedInfographicSettings()

      // console.log( '%cEXB Setting: Creating cached infographic', 'color:green;font-size:13pt', settings )

      // Create the actual cached infographic data
      const ci = await InfographicsCacheUtil.createCacheInfographic( settings )
      if ( !ci ) {
        // console.log( 'Error: infographic cache generation failed' )
        this.onClearCache()
        // Change the cache status to 'Error' and change the Cache infographic button to suit
        // console.log( "onClickCacheInfographic setting status to: Error" )

        this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.Error )
        return
      }
      // Create the item resource for the cached infographic
      const testFile = new File( [ci], 'cachedInfographic.txt', { type: 'text/plain' } )
      const result = await appResourceManager.uploadWidgetResource( widgetId, testFile )
      if ( result && result.success && result.resource?.url ) {
        // The resource url is a relative url that gets hydrated at runtime in the arcgis-infographic component
        resourceUrl = result.resource.url
        infoObj.url = resourceUrl
        // console.log( "onClickCacheInfographic setting status to: CacheCompleted" )

        this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.CacheCompleted )

        // Save the session signature for the current cached infographic settings so we can compare against it later to know if settings have changed since the cache was created

        const sig = await this.generateSettingsSignature()

        this.setCISavedSignature( sig )

        // const actualUrl = appConfigUtils.processResourceUrl( resourceUrl )
        // console.log( "SETTING CI url = ", actualUrl )

        // console.log( 'Cached data URL =', actualUrl )

        // console.log( '%cEXB Setting: resource created successfully', 'color:green;font-size:13pt', resourceUrl )

        // //at runtime, determine appResourceUrl based on the environment (dev, staging, prod) and use that to construct the actual url to the resource
        // actualUrl = appConfigUtils.processResourceUrl( resourceUrl )
        // if ( actualUrl && ACLUtils.hasText( actualUrl ) ) {
        //   const idx = actualUrl.lastIndexOf( 'token=' )
        //   if ( idx > -1 ) {
        //     actualUrl = actualUrl.substring( 0, idx - 1 )
        //   }
        //   console.log( '%cResource url for cached infographic -> ', 'color:yellow;font-size:13pt;', resourceUrl, actualUrl )
        //   infoObj.url = actualUrl
        // }
      } else {
        // console.log( "onClickCacheInfographic setting status to: Error" )

        this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.Error )
      }
      // - - - - - - - - - - - - - - - - - - -
      // Store the cached infographic details in our Settings props.  That is picked up by
      // the Widget and set in the app state.  The arcgis-infographic sees the state change
      // and renders the cached infographic (disregarding other infographic props)
      this.onPropertyChange( 'presetCachedInfographicObject', infoObj )

      //disable location, buffer and infographics changes while we have a cached infographic - those settings would just cause confusion
      const locationPanel = ACLUtils.queryElementById.call( this, this.props.id + '_locationSettingsPanel' )
      locationPanel && this._disableNode( locationPanel, true )

      const bufferPanel = ACLUtils.queryElementById.call( this, this.props.id + '_bufferSettingsPanel' )
      bufferPanel && this._disableNode( bufferPanel, true )

      const infographicPanel = ACLUtils.queryElementById.call( this, this.props.id + '_infographicsSettingsPanel' )
      infographicPanel && this._disableNode( infographicPanel, true )

    } catch ( err ) {
      console.error( '@@@ onClickCacheInfographic error:', err )
      this.onClearCache()
      // Change the cache status to 'Error' and change the Cache infographic button to suit
      // console.log( "onClickCacheInfographic setting status to: Error" )
      this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.Error )
    }
  }

  _disableNode ( parentNode, disabled: boolean = true ) {
    parentNode.disabled = disabled
    parentNode.style.opacity = disabled ? '0.5' : '1.0'
    const nodes = parentNode.getElementsByTagName( '*' )
    for ( let i = 0; i < nodes.length; i++ ) {
      nodes[i].disabled = disabled
    }
  }

  onClearCache () {
    BaAppState.logTemp( 'onClickClearCache' )
    const widgetId = this.props.id
    const appResourceManager = AppResourceManager.getInstance()

    // const inUseWidgetResources = appResourceManager.getInUseWidgetResources( widgetId )
    // const shouldNotRemove = inUseWidgetResources.includes( resource.url )

    // Remove the item resource for the cached infographic
    appResourceManager.removeWidgetResource( widgetId, this._cachedInfographicItemResourceName )

    // Clear both persisted values together so one stale config snapshot cannot overwrite the other.
    this.onMultiplePropertyChange( [
      { name: 'presetCachedInfographicObject', value: null },
      { name: 'cachedInfographicSettingsLastSelection', value: null }
    ] )

    // Clear the cached settings signature to allow new cache creation with current settings
    // console.log( 'SETTINGS clearing cache and signature, was:', this.cachedInfographicSettingsSelection )

    this.cachedInfographicSettingsSelection = null
    this.waitForConfigPropChange( 'presetCachedInfographicObject', null, 3000 )
      .then( () => {
        // console.log( 'onClearCache confirmed config.presetCachedInfographicObject is null' )
      } )
      .catch( ( err ) => {
        console.warn( 'onClearCache did not observe config update in time', err )
      } )
    // console.log( "onClearCache setting status to: undefined" )

    this.updateState( 'cachedInfographicStatus', CachedInfographicStatusEnum.CacheCleared )

    //enable location, buffer and infographics changes after cached infographic is cleared
    const locationPanel = ACLUtils.queryElementById.call( this, this.props.id + '_locationSettingsPanel' )
    locationPanel && this._disableNode( locationPanel, false )

    const bufferPanel = ACLUtils.queryElementById.call( this, this.props.id + '_bufferSettingsPanel' )
    bufferPanel && this._disableNode( bufferPanel, false )

    const infographicPanel = ACLUtils.queryElementById.call( this, this.props.id + '_infographicsSettingsPanel' )
    infographicPanel && this._disableNode( infographicPanel, false )

    // const check = this.isValidCachedObject()
    // console.log( 'onClearCache - is there a valid cached object after clearing cache? ', check )
  }

  onClickClearCache = () => {
    try {
      this.onClearCache()
    } catch ( err ) {
      console.error( '@@@ onClickClearCache error:', err )
    }
  }

  renderCacheInfographicPopperContent = () => {
    BaAppState.logTemp( 'renderCacheInfographicPopperContent' )

    //  = new this.CachedInfoObject( 'tom', 99 )
    // BaAppState.logTemp( ' _cachedInfographicObject -> ', infoObj.name, infoObj.age )

    // const self = this
    // const { presetCachedInfographicSidePopper } = this.state
    const { presetSearchSelectedObject, widgetMode } = this.props.config

    const hasCachedInfographic = this.isValidCachedObject()

    const obj = presetSearchSelectedObject ? JSON.parse( presetSearchSelectedObject ) : null
    const locName: string = obj ? obj.type === 'location' ? obj.address : obj.name : ''
    const hasLocation = obj && ACLUtils.hasText( locName ) && ( obj.type === 'geography' || obj.type === 'location' )

    const sDesc: string = this.localeString( 'presetCacheInfographicLabel' )
    // const sLinkText: string = this.localeString( 'presetCacheInfographicLink' )
    const sBufferLabel: string = this.localeString( 'presetCacheInfographicBufferLabel' )
    // const sReportLabel: string = this.localeString( 'presetCacheInfographicReportLabel' )
    // const sHasBeenCachedLabel: string = this.localeString( 'presetCacheInfographicHasBeenCached' )
    let sCachedInfographicMessage: string
    // const sClearCacheLabel: string = this.localeString( 'presetCacheInfographicClear' )
    // const sCacheButtonNowLabel: string = this.localeString( 'presetCacheInfographicCacheNow' )
    // const sBufferUsesBdy: string = this.localeString( 'bufferUsesBoundary' )
    const sLocationLabel: string = this.localeString( 'presetCacheInfographicLocationLabel' )
    const sLearnMoreText: string = this.localeString( 'presetCacheInfographicLink' )
    const style = css`
          .widget-setting-get-map-coordinates {
            .checkbox - row {
            display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
            }
          }

          .bufferInput {
            width: 20% !important;
          }

          .bufferUnits {
            width: 40% !important;
          }
          `

    const cacheInfographicButtonId = this.props.id + '_ciButton'
    // const cacheInfographicMessageId = this.props.id + '_ciMessage'
    // const isReadyToCache: boolean = this.isCachingReady()

    // only displays in Preset Mode
    if ( widgetMode === Mode.Preset ) {
      // const hasCachedItem = false

      // The only was the cache button is enabled is if we have a location or boundary, buffer (if applies), and infographic
      // const cacheButtonEnabled = false

      // buffer
      // const hasBuffer = false
      // location type that is geography cannot have buffers
      if ( hasLocation && obj.type === 'location' ) {
        BaAppState.logTemp( 'has location' )
      }
      // const reportName: string = presetSelectedReportName
      const infoLabel: string = this.localeString( 'infographic' )
      const win: any = window as any
      const jimuCfg: any = win.jimuConfig
      const ciStatus = this.state.cachedInfographicStatus

      if ( typeof ciStatus === 'undefined' ) {
        sCachedInfographicMessage = ''
      } else {
        // Set the cache infographic button message by context
        switch ( ciStatus ) {
          case ( CachedInfographicStatusEnum.ReadyToCache ): {
            sCachedInfographicMessage = ''
            break
          }
          case ( CachedInfographicStatusEnum.CacheCompleted ): {
            sCachedInfographicMessage = this.localeString( 'presetCacheInfographicHasBeenCached' )
            break
          }
          case ( CachedInfographicStatusEnum.CurrentlyRunning ): {
            sCachedInfographicMessage = this.localeString( 'presetCacheInfographicPleaseWait' )
            break
          }
          case ( CachedInfographicStatusEnum.Error ): {
            sCachedInfographicMessage = this.localeString( 'networkResponseError' )
            break
          }
          case ( CachedInfographicStatusEnum.NotAvailable ): {
            sCachedInfographicMessage = ''
            break
          }
          case ( CachedInfographicStatusEnum.SettingsHaveChanged ): {
            sCachedInfographicMessage = this.localeString( 'presetCacheInfographicHasBeenCachedExpQuotes' )
            break
          }
          case ( CachedInfographicStatusEnum.CacheCleared ): {
            sCachedInfographicMessage = this.localeString( 'presetCacheInfographicHasBeenClearedMessage' )
            break
          }
          default: {
            sCachedInfographicMessage = ''
          }
        }
      }

      return (
        <div className='d-flex flex-column' style={{ padding: '12px', width: '250px' }}>
          <div style={{ marginBottom: '8px', whiteSpace: 'pre-wrap' }}>
            {sDesc}
            {
              !jimuCfg.isInPortal &&
              <div className='pt-2 text-sm-left'>
                <a href='https://links.esri.com/ba-exb/credits' target='_blank'>{sLearnMoreText}</a>
              </div >
            }
          </div>
          <br></br>
          <div className='text-truncate py-1'>
            {sLocationLabel}
          </div>
          {this.renderLocationButton()}

          <br></br>
          <div className='text-truncate py-1'>
            {sBufferLabel}
          </div>
          {this.renderCacheSidebarBufferButton()}

          <br></br>
          <div className='text-truncate py-1'>
            {infoLabel}
          </div>
          {this.renderInfographicButton()}
          <br></br>
          {
            CachedInfographicStatusEnum.CacheCompleted && ( sCachedInfographicMessage === this.localeString( 'presetCacheInfographicHasBeenCached' ) ) && (
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <calcite-icon icon='check-circle' scale='s' />
                <div className='py-1'>
                  {sCachedInfographicMessage}
                  <br></br>
                </div>
              </div>
            )
          }
          {
            CachedInfographicStatusEnum.CacheCleared && ( sCachedInfographicMessage === this.localeString( 'presetCacheInfographicHasBeenClearedMessage' ) ) && (
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <calcite-icon icon='check-circle' scale='s' />
                <div className='py-1'>
                  {sCachedInfographicMessage}
                  <br></br>
                </div>
              </div>
            )
          }

          {
            CachedInfographicStatusEnum.SettingsHaveChanged && ( sCachedInfographicMessage === this.localeString( 'presetCacheInfographicHasBeenCachedExpQuotes' ) ) && (
              <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
                <calcite-icon icon='exclamation-mark-triangle' scale='s' style={{ marginTop: '8px' }} />
                <div className='py-1'>
                  {sCachedInfographicMessage}
                  <br></br>
                </div>
              </div>
            )
          }
          {
            !CachedInfographicStatusEnum.CacheCompleted && (
              <div className='py-1'>
                {sCachedInfographicMessage}
                <br></br>
              </div>
            )
          }
          {
            !hasCachedInfographic && (
              <div css={style} className='mx-2 mt-4'>
                <SettingRow flow='wrap'>
                  <div className='w-100' ref={this.sidePopperTrigger}>
                    <calcite-button id={cacheInfographicButtonId} loading={false} disabled={false} onClick={() => { this.onShowCachingPopup() }} style={{ width: '100%', '--calcite-button-text-color': '#fff' }}>
                      {this.localeString( 'cacheInfographic' )}
                    </calcite-button>
                  </div>
                </SettingRow>
              </div >
            )
          }
          {
            hasCachedInfographic && (
              <div css={style} className='mx-2 mt-4'>
                <SettingRow flow='wrap'>
                  <div className='w-100' ref={this.sidePopperTrigger}>
                    <calcite-button id={cacheInfographicButtonId} loading={false} onClick={this.onClickClearCache} style={{ width: '100%', '--calcite-button-text-color': '#fff' }}>{this.localeString( 'presetCacheInfographicClear' )}</calcite-button>
                  </div>
                </SettingRow>
              </div >
            )
          }
        </div>
      )
    } else return null
  }
  renderLocationButton = () => {
    // const self = this
    BaAppState.logTemp( 'renderLocationButton' )
    const { presetSearchSelectedObject } = this.props.config
    const obj = presetSearchSelectedObject ? JSON.parse( presetSearchSelectedObject ) : null
    const locName: string = obj ? obj.type === 'location' ? obj.address : obj.name : ''
    const hasLocation = obj && ACLUtils.hasText( locName ) && ( obj.type === 'geography' || obj.type === 'location' )
    // const sLocLabel: string = this.localeString( 'presetCacheInfographicLocationLabel' )

    return (

      <SettingRow style={{ marginBottom: '8px' }}>
        {hasLocation
          ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default', pointerEvents: 'none' }}
            css={css`
              &:hover {
                background: var(--sys-color-secondary-dark);
                border-color: var(--sys-color-secondary-main);
                color: inherit;
                box-shadow: none;
              }
            `}>

            <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
              <Icon size='l' icon={obj.type === 'location' ? PinEsriOutlined : PolygonOutlined} />
            </div>
            <div className='d-flex' style={{ flex: '1 1 auto', paddingLeft: '4px', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
              {locName}
            </div>
          </Button>

          : <Button type='tertiary' className='unselectedStateButtonDashed' style={{ cursor: 'default', pointerEvents: 'none' }}
            css={css`
              &:hover {
                background: transparent;
                border: 1px dashed var(--ref-palette-neutral-800);
                color: var(--sys-color-primary-light);
                box-shadow: none;
              }
            `}>
            {this.localeString( 'setLocation' )}
          </Button>
        }
      </SettingRow>
    )
  }
  renderInfographicButton = () => {
    const { presetSelectedReportName } = this.props.config
    const selectString = this.localeString( 'selectAnInfographic' )
    const cObject = this.props.config.presetCachedInfographicObject
    const reportName = cObject ? cObject.report : presetSelectedReportName

    return (
      <SettingRow>
        {reportName
          ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default', pointerEvents: 'none' }}>
            <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
              <Icon size='l' icon={ChartColumnOutlined} />
            </div>
            <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', marginLeft: '4px', justifyContent: 'end', flexDirection: 'column' }}>
              {reportName}
            </div>
          </Button>
          : <Button type='tertiary' className='unselectedStateButtonDashed' style={{ cursor: 'default', pointerEvents: 'none' }}>
            {selectString}

          </Button>
        }
      </SettingRow>
    )
  }

  renderMainBufferButton = () => {
    const { stPresetBuffer, presetBuffersQueued } = this.state
    const { widgetMode } = this.props.config
    let disableBuffers

    if ( widgetMode === Mode.Preset ) {
      if ( !presetBuffersQueued ) {
        // if the location selected is a Boundary - we disable the Buffers button
        disableBuffers = false
        if ( this.props.config.presetSearchSelectedObject ) {
          const obj = JSON.parse( this.props.config.presetSearchSelectedObject )
          if ( obj && ( obj.type === 'geography' || !this.state.pointsOfInterestChecked ) ) {
            disableBuffers = true
          }
        }

        switch ( stPresetBuffer ) {
          case 'ring': {
            return (
              <div className="mt-1 d-flex" style={{ width: '100%' }}>
                <Button className='w-100 d-flex selectedStateButton' disabled={disableBuffers} style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={( e ) => { this.clearPresetBufferSelection( e ) }} >
                  <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                    <Icon size='l' icon={RingsIcon} style={{ marginRight: '4px' }} />
                  </div>
                  <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                    {this.localeString( 'rings' )}
                  </div>
                  <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'flex-end' }} title={this.localeString( 'editBuffers' )} onClick={( e ) => { this.clearPresetBufferSelection( e ) }}>
                    <Icon size='s' icon={CloseOutlined} />
                  </span>
                </Button>
                <br></br>
              </div>
            )
          }
          case 'drivetime': {
            // console.log( "BUFFER setting DT WITH CLICK" )
            return (
              <div className="mt-1 d-flex" style={{ width: '100%' }}>
                <Button className='w-100 d-flex selectedStateButton' disabled={disableBuffers} style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default' }} onClick={( e ) => { this.clearPresetBufferSelection( e ) }}>
                  <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                    <Icon size='l' icon={DriveIcon} style={{ marginRight: '3px' }} />
                  </div>
                  <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                    {this.localeString( InfoBufferType.drivetime )}
                  </div>
                  <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'flex-end' }} title={this.localeString( 'editBuffers' )} onClick={( e ) => { this.clearPresetBufferSelection( e ) }}>
                    <Icon size='s' icon={CloseOutlined} />
                  </span>
                </Button>
                <br></br>
              </div>
            )
          }
          case 'walktime': {
            return (
              <div className="mt-1 d-flex" style={{ width: '100%' }}>
                <Button className='w-100 d-flex selectedStateButton' disabled={disableBuffers} style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default' }} onClick={( e ) => { this.clearPresetBufferSelection( e ) }}>
                  <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                    <Icon size='l' icon={WalkIcon} style={{ marginRight: '2px' }} />
                  </div>
                  <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                    {this.localeString( InfoBufferType.walktime )}
                  </div>
                  <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'flex-end' }} title={this.localeString( 'editBuffers' )} onClick={( e ) => { this.clearPresetBufferSelection( e ) }}>
                    <Icon size='s' icon={CloseOutlined} />
                  </span>
                </Button>
                <br></br>
              </div>
            )
          }
          default:
            break
        }
      } else {
        return (
          <div className="mt-1 d-flex" style={{ width: '100%' }}>
            <Button type='tertiary' className='unselectedStateButtonDashed' style={{ width: '100%', cursor: 'default' }} onClick={() => { this.toggleSidePopper( 'presetBufferSidePopper' ) }}>
              {this.localeString( 'setBuffers' )}
            </Button>
            <br></br>
          </div>
        )
      }
    }
  }

  renderCacheSidebarBufferButton = () => {
    const { stPresetBuffer, presetBuffersQueued } = this.state
    const { widgetMode } = this.props.config
    let disableBuffers

    if ( widgetMode === Mode.Preset ) {
      if ( !presetBuffersQueued ) {
        // if the location selected is a Boundary - we disable the Buffers button
        disableBuffers = false
        if ( this.props.config.presetSearchSelectedObject ) {
          const obj = JSON.parse( this.props.config.presetSearchSelectedObject )
          if ( obj && ( obj.type === 'geography' || !this.state.pointsOfInterestChecked ) ) {
            disableBuffers = true
          }
        }

        switch ( stPresetBuffer ) {
          case 'ring': {
            // no X button and no click handler
            return (
              <div className="mt-1 d-flex" style={{ width: '100%' }}>
                <Button className='w-100 d-flex selectedStateButton' disabled={disableBuffers} style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default', pointerEvents: 'none' }}>
                  <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                    <Icon size='l' icon={RingsIcon} style={{ marginRight: '4px' }} />
                  </div>
                  <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                    {this.localeString( 'rings' )}
                  </div>
                </Button>
                <br></br>
              </div>
            )
          }
          case 'drivetime': {
            return (
              <div className="mt-1 d-flex" style={{ width: '100%' }}>
                <Button className='w-100 d-flex selectedStateButton' disabled={disableBuffers} style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default', pointerEvents: 'none' }}>
                  <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                    <Icon size='l' icon={DriveIcon} style={{ marginRight: '3px' }} />
                  </div>
                  <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                    {this.localeString( InfoBufferType.drivetime )}
                  </div>
                </Button>
                <br></br>
              </div>
            )
          }
          case 'walktime': {
            return (
              <div className="mt-1 d-flex" style={{ width: '100%' }}>
                <Button className='w-100 d-flex selectedStateButton' disabled={disableBuffers} style={{ flex: '1 1 auto', alignItems: 'stretch', cursor: 'default', pointerEvents: 'none' }}>
                  <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                    <Icon size='l' icon={WalkIcon} style={{ marginRight: '2px' }} />
                  </div>
                  <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                    {this.localeString( InfoBufferType.walktime )}
                  </div>
                </Button>
                <br></br>
              </div>
            )
          }
          default:
            break
        }
      } else {
        return (
          <div className="mt-1 d-flex" style={{ width: '100%' }}>
            <Button type='tertiary' className='unselectedStateButtonDashed' style={{ width: '100%', cursor: 'default', pointerEvents: 'none' }}>
              {this.localeString( 'setBuffers' )}
            </Button>
            <br></br>
          </div>
        )
      }
    }
  }

  clearSearchObj = () => {
    const { widgetMode } = this.props.config
    if ( widgetMode === Mode.Preset ) {
      this.onPropertyChange( 'presetSearchSelectedObject', null )
      this.updateState( 'presetShowSearchInput', true )
    } else {
      this.onPropertyChange( 'workflowSearchSelectedObject', null )
      this.updateState( 'workflowShowSearchInput', true )
    }
  }

  clearPresetBufferSelection = ( e?: React.MouseEvent<HTMLElement> ) => {
    if ( e ) {
      e.stopPropagation()
      e.preventDefault()
    }

    // Returning to the secondary buffer panel allows users to pick a new preset buffer immediately.
    this.onPropertyChange( 'presetBuffersAccepted', false )
    this.updateState( 'presetBuffersQueued', true )
    this.toggleSidePopper( 'presetBufferSidePopper' )
  }

  clearPresetInfographicSelection = ( e?: React.MouseEvent<HTMLElement> ) => {
    if ( e ) {
      e.stopPropagation()
      e.preventDefault()
    }

    this.onMultiplePropertyChange( [
      { name: 'presetSelectedReport', value: null },
      { name: 'presetSelectedReportName', value: null }
    ] )
  }

  clearGeoenrichmentSelection = ( e?: React.MouseEvent<HTMLElement> ) => {
    if ( e ) {
      e.stopPropagation()
      e.preventDefault()
    }

    const { id } = this.props
    this.props.onSettingChange( {
      id,
      config: this.props.config.setIn( ['geoenrichmentConfig', 'useUtility'], undefined ),
      useUtilities: this.getUsedUtilities( undefined )
    } )
  }

  openDefaultInfographicPanel = () => {
    const { reportList, sourceCountry, selectedHierarchy, autoSelectLatestDataSource } = this.props.config
    const { user } = this.props
    //populate list of selected infographics
    const elemId = this.props.id + '_def-selected-reports'
    const selectedList = { user: [], shared: [], public: [], gallery: [], tabular: [] }
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    const langCode = getAppStore().getState().appContext.locale || 'en'
    const token = this.getToken()
    const activeH = getActiveHierarchyId( selectedHierarchy, autoSelectLatestDataSource )

    const _extract = ( name, items?) => {
      if ( reportList[name] ) {
        const list = ( items ) || reportList[name]
        if ( list && list.length > 0 ) {
          for ( let ii = 0; ii < reportList[name].length; ii++ ) {
            const item = reportList[name][ii]
            if ( item && item.isChecked ) {
              selectedList[name].push( item )
            }
          }
        }
      }
    }
    ['user', 'shared', 'public'].forEach( o => { _extract( o ) } )
    if ( reportList.gallery ) { _extract( 'gallery', reportList.gallery.data ) }
    if ( reportList.tabular ) { _extract( 'tabular', reportList.tabular.data ) }

    const panel = this.getDefaultReportPanel()
    if ( panel ) {
      panel.style.display = 'block'
    }

    this._checkedItemsList = selectedList
    // Note: the report list may not exist when first opening the collapsablePanel
    // We need to let it instantiate before initialization
    function _delay () {
      // init report list to match our results
      const reports: any = document.getElementById( elemId )
      if ( reports ) {
        let def = self.getDefaultReport()
        if ( def ) { def = JSON.stringify( def ) }
        if ( selectedList ) {
          self._presetReportsListCache = reports.initialize( user.username, token, sourceCountry, activeH, langCode, false, selectedList, def )
        } else if ( self._presetReportsListCache ) {
          reports.initialize( user.username, token, sourceCountry, activeH, langCode, false, self._presetReportsListCache, def )
        } else {
          self._presetReportsListCache = reports.initialize( user.username, token, sourceCountry, activeH, langCode, false, {}, def )
        }

        if ( self._defaultAccordionCollapseHandler ) {
          reports.removeEventListener( 'accordionCollapsed', self._defaultAccordionCollapseHandler as EventListener )
        }
        self._defaultAccordionCollapseHandler = () => {
          requestAnimationFrame( () => {
            const reportListElem: any = document.getElementById( elemId )
            const accordions: NodeListOf<any> | undefined = reportListElem?.shadowRoot?.querySelectorAll( 'ba-accordion' )
            if ( !accordions || accordions.length <= 0 ) {
              self.closeDefaultReportPanel()
              return
            }

            let hasExpanded = false
            for ( let ii = 0; ii < accordions.length; ii++ ) {
              const accordion = accordions[ii]
              const accItem: any = accordion?.shadowRoot?.querySelector( 'calcite-accordion-item' )
              if ( accItem?.expanded === true ) {
                hasExpanded = true
                break
              }
            }

            if ( !hasExpanded ) {
              self.closeDefaultReportPanel()
            }
          } )
        }
        reports.addEventListener( 'accordionCollapsed', self._defaultAccordionCollapseHandler as EventListener )
      }
    }
    setTimeout( _delay, 0 )
  }

  closeDefaultReportPanel = () => {
    requestAnimationFrame( () => {
      const panel = this.getDefaultReportPanel()
      if ( panel ) {
        panel.style.display = 'none'
      }
    } )
  }

  onChangeDrivetimeToggle = ( value: any ) => {
    const checked: boolean = value === true
    this.onPropertyChange( 'displayDrivetimeOptions', checked )
  }

  onSettingsDefaultReportSelected = ( ev ) => {
    // user chose report as default
    const id = ev.detail?.id
    const name = ev.detail?.name

    if ( id && name ) {
      this.onDefaultInfographicChanged( { id, name } )
    }
    this.closeDefaultReportPanel()
  }

  resetDefaultReport = () => {
    const _delay = () => {
      this.onDefaultInfographicChanged( { id: undefined, name: undefined } )
      this.closeDefaultReportPanel()
    }
    setTimeout( _delay, 0 )
  }

  getDefaultReportPanel = () => {
    const { id } = this.props
    const elemId = id + '_def-selected-reports'
    const panel: any = document.getElementById( elemId )
    return panel
  }

  _defaultReportIsValid = ( report ) => {
    return ( report && report.id && report.id.length > 0 && report.name && report.name.length > 0 )
  }

  getDefaultReport = () => {
    let result
    const { defaultReport } = this.props.config

    if ( this._defaultReportIsValid( defaultReport ) ) {
      result = {
        id: defaultReport.id,
        name: defaultReport.name
      }
    }
    return result
  }

  getDefaultReportLabel = () => {
    let name
    const { defaultReport } = this.props.config

    if ( defaultReport && this._defaultReportIsValid( defaultReport ) ) {
      name = defaultReport.name
    } else { name = this.localeString( 'selectDefaultInfographic' ) }
    return name
  }

  /** getValidSelectedHierarchyID
   * This function checks the state of the auto-select-latest button.  If
   * that is checked, then this will return an empty string which causes GE to
   * use the latest hierarchy.
   * @param available - available hierarchies for this country
   * @param selected - selected hierarchy
   * @returns
   */
  getValidSelectedHierarchyID = ( available, selected ): string => {
    const { autoSelectLatestDataSource } = this.props.config

    if ( !autoSelectLatestDataSource ) {
      // if auto-select is not enabled, then we return the selected hierarchy ID

      const specified = ( selected && available && available.find( ( h ) => h.ID === selected.ID ) ) ? selected : undefined
      if ( specified && specified.ID ) {
        return specified.ID
      }

      const configHierarchyId = this.props.config.selectedHierarchy
      if ( configHierarchyId && available && available.find( ( h ) => h.ID === configHierarchyId ) ) {
        return configHierarchyId
      }
    }
    return ''
  }

  /** resetLocationAndInfographic */
  onSelectLatestDataSource = (): void => {
    const c = this.props.config.sourceCountry
    const selHierId = getLatestHierarchyID( c, this.state.countries )
    // as if the user changed the selected data source...
    requestAnimationFrame( () => {
      this._onDataSourceChanged( c, selHierId )
    } )
  }

  async loadTravelModes () {
    if ( this.state.travelModes.length > 0 ) return // Already loaded

    this.setState( { isLoadingTravelModes: true } )

    try {
      const username = this.props.user?.username
      const token = this.getToken()
      if ( username && token ) {
        TokenProvider.setToken( username, token )
      }
      const win: any = window as any
      const jimuCfg: any = win.jimuConfig
      const response = await GEClient.getTravelModes( token, jimuCfg.hostEnv, this.state.routingUtilityUrl )

      const typedResponse = response as any

      let travelModes: TravelMode[] = []
      if ( typedResponse && typedResponse.results && Array.isArray( typedResponse.results ) && typedResponse.results.length > 0 ) {
        const supportedTravelModesResult = typedResponse.results.find(
          ( result: any ) => result.paramName === 'supportedTravelModes'
        )

        if ( supportedTravelModesResult &&
          supportedTravelModesResult.value &&
          supportedTravelModesResult.value.features &&
          Array.isArray( supportedTravelModesResult.value.features ) ) {

          travelModes = supportedTravelModesResult.value.features.map( ( feature: any ) => {
            const attrs = feature.attributes

            let travelModeDetails: any = {}
            try {
              if ( attrs.TravelMode && typeof attrs.TravelMode === 'string' ) {
                travelModeDetails = JSON.parse( attrs.TravelMode )
              }
            } catch ( e ) {
              console.warn( 'Error parsing TravelMode JSON:', e )
            }

            return {
              name: attrs.Name || attrs.AltName || 'Unknown Mode',
              itemId: attrs.TravelModeId || '',
              type: travelModeDetails.type || 'AUTOMOBILE',
              description: attrs.Name || attrs.AltName || '',
              travelModeData: travelModeDetails
            }

          } )
        }
      }

      if ( travelModes.length === 0 ) {
        console.warn( 'No travel modes loaded from API service' )
      }

      this.setState( { travelModes } )

    } catch ( error ) {
      console.error( 'Error loading travel modes from service:', error )
      this.setState( { travelModes: [] } )
    } finally {
      this.setState( { isLoadingTravelModes: false } )
    }
  }

  getFilteredTravelModes ( bufferUnitOverride?: string ): TravelMode[] {
    const { workflowDrivetimeBufferUnit, widgetMode } = this.props.config
    const { stPresetDrivetimeBufferUnit } = this.state

    if ( !this.state.travelModes ) return []

    // Determine which buffer unit to use based on mode or override
    let bufferUnit
    if ( bufferUnitOverride ) {
      bufferUnit = bufferUnitOverride
    } else if ( widgetMode === Mode.Preset ) {
      bufferUnit = stPresetDrivetimeBufferUnit
    } else {
      bufferUnit = workflowDrivetimeBufferUnit
    }

    if ( !bufferUnit ) return this.state.travelModes

    const unit = bufferUnit.toLowerCase()


    const timeAttributeFilters: string[] = ['TravelTime', 'TruckTravelTime']
    let impedanceFilters: string[]
    if ( unit === 'minutes' ) {
      impedanceFilters = ['TravelTime', 'TruckTravelTime']
    } else {
      impedanceFilters = ['Kilometers', 'Miles']
    }

    const filtered = this.state.travelModes.filter( mode => {
      const impedance = mode.travelModeData?.impedanceAttributeName
      const timeAttr = mode.travelModeData?.timeAttributeName
      return (
        impedanceFilters.includes( impedance ) &&
        timeAttributeFilters.includes( timeAttr )
      )
    } )

    return filtered
  }

  getDefaultTravelModeForUnit ( bufferUnit: string, travelModes: TravelMode[] ): string | undefined {
    if ( !bufferUnit || !travelModes || travelModes.length === 0 ) return undefined
    const unit = bufferUnit.toLowerCase()
    if ( unit === 'minutes' ) {
      // Prefer "Driving Time"
      const drivingTime = travelModes.find( m => m.name.toLowerCase().includes( 'driving time' ) )
      return drivingTime?.itemId || travelModes[0].itemId
    } else {
      // Prefer "Driving Distance"
      const drivingDistance = travelModes.find( m => m.name.toLowerCase().includes( 'driving distance' ) )
      return drivingDistance?.itemId || travelModes[0].itemId
    }
  }

  getDrivingModeOptions () {
    if ( this.state.isLoadingTravelModes ) {
      return (
        <option value="" disabled>
          {this.localeString( 'loading' ) || 'Loading...'}
        </option>
      )
    }

    // Filter travel modes based on buffer unit from config
    const filteredModes = this.getFilteredTravelModes()

    // Sort alphabetically by name
    const sortedModes = filteredModes.sort( ( a, b ) => a.name.localeCompare( b.name ) )

    return sortedModes.map( mode => (
      <option
        key={mode.itemId}
        value={mode.itemId}
        selected={
          ( this.props.config.travelModeData?.itemId === mode.itemId || this.props.config.travelModeData === mode.itemId ) ||
          this.state.stTravelModeData === mode.itemId
        }
      >
        {mode.name}
      </option>
    ) )
  }

  // TM - Backward compatibility migration
  // Migrates old 'drivingMode' property (string name) to new 'travelModeData' (object)
  migrateDrivingModeToTravelModeData () {
    const { travelModeData, drivingMode } = this.props.config

    // Only migrate if we have old drivingMode but no new travelModeData
    if ( !travelModeData && drivingMode && typeof drivingMode === 'string' && this.state.travelModes.length > 0 ) {
      // Try to find travel mode by matching name (case-insensitive)
      const matchedTravelMode = this.state.travelModes.find( mode =>
        mode.name && mode.name.toLowerCase() === drivingMode.toLowerCase()
      )

      if ( matchedTravelMode ) {
        // Convert old drivingMode to new travelModeData structure
        const travelModeWithId = {
          ...matchedTravelMode.travelModeData,
          itemId: matchedTravelMode.itemId,
          name: matchedTravelMode.name,
          description: matchedTravelMode.description
        }
        this.onMultiplePropertyChange( [
          { name: 'travelModeData', value: travelModeWithId },
          { name: 'drivingMode', value: undefined } // Remove old property
        ] )
        return true // Migration successful
      } else {
        //console.warn(`BA Infographic: Could not find travel mode matching old drivingMode: "${drivingMode}". Available travel modes:`,
        this.state.travelModes.map( mode => mode.name )
      }
    }
    return false // No migration needed or failed
  }
  getSettingOuterDiv = () => {
    let elem: any
    if ( typeof React !== 'undefined' ) {
      elem = this.settingOuterDivRef?.current
    }
    return elem
  }
  // This function ensures the BaAppState service component is in the DOM and ready to be used.
  // If it is not found, it will be added to the top of the widget's container div.  This allows
  // the widget and all child components to use the same BA App State service for syncing state
  // across multiple separate instances of the widget and with the settings panel (which is
  // sandboxed from the main widget component and cannot access the service component directly).
  insertBaAppStateServiceComponent () {
    if ( !this._baAppStateServiceComponent ) {
      const svc = BaAppState.getServiceComponent( this.getSettingOuterDiv(), this._baAppStateId )
      if ( !svc ) {
        requestAnimationFrame( () => {
          if ( !this._baAppStateServiceComponent ) {

            const baState = BaAppState.getServiceComponent( this.getSettingOuterDiv(), this._baAppStateId )
            if ( !baState ) {

              const topDiv = document.getElementById( this._topDivId )
              if ( topDiv ) {
                // Insert the BAAppState component
                const topHtml = `<ba-app-state id="${this._baAppStateId}"></ba-app-state>`
                topDiv.insertAdjacentHTML( 'afterbegin', topHtml )
              }
            } else {
              this._baAppStateServiceComponent = baState
            }
          }
        } )
      } else {
        this._baAppStateServiceComponent = svc
      }
    }
  }
  //state
  // onElementReady = called by child components when they are loaded.  This is
  // setup in our JSX where the 'readyCallback' prop is passed to the child components
  // (search-step, buffers-step, infographics-step).
  //
  // The purpose of this function is to allow any component that has children
  // (ex: workflow) to set the BaAppStateId on child components once they are
  // ready to go.  That assures they have access to the same BaAppState as the
  // host/widget.
  //
  onElementReady ( elem: any ) {
    if ( this._baAppStateId ) {
      if ( elem ) {
        elem.setBaAppStateId( this._baAppStateId )
        // ArcgisReportList can paint with default light colors on first load.
        // Apply theme object immediately when the element is ready.
        if ( elem?.tagName?.toLowerCase?.() === 'arcgis-report-list' && typeof elem.setColors === 'function' ) {
          elem.setColors( this.getThemeObject() )
        }
      }
    } else {
      // perform this later when BaAppState is ready
      this._onReadyNotificationsTodo.push( elem )
    }
  }
  checkIfReadyNotificationsTodo () {
    if ( this._onReadyNotificationsTodo.length > 0 && this._baAppStateId && this._baAppStateServiceComponent ) {
      this._onReadyNotificationsTodo.forEach( ( elem: any ) => {
        if ( elem ) {
          elem.setBaAppStateId( this._baAppStateId )
          if ( elem?.tagName?.toLowerCase?.() === 'arcgis-report-list' && typeof elem.setColors === 'function' ) {
            elem.setColors( this.getThemeObject() )
          }
        }
      } )
      this._onReadyNotificationsTodo = []
    }
  }
  isUsingBuffers = () => {
    const { widgetMode, presetSearchSelectedObject } = this.props.config
    const { pointsOfInterestChecked } = this.state

    if ( widgetMode === Mode.Preset ) {
      if ( presetSearchSelectedObject ) {
        const obj = JSON.parse( presetSearchSelectedObject )
        // if the location selected is a Boundary - we hide the Buffers button
        if ( obj && obj.type === 'geography' ) {
          return false
        }
      }
    } else if ( !pointsOfInterestChecked ) {
      return false
    }
    return true
  }
  onShowCachingInfo = () => {
    this.updateState( 'modePopperOpen', true )
    const btn = this.modeInfoRef?.current as HTMLElement | null
    if ( btn ) {
      const handler = () => {
        setTimeout( () => { this.updateState( 'modePopperOpen', false ) }, 6000 )
        btn.removeEventListener( 'mouseleave', handler )
      }
      btn.addEventListener( 'mouseleave', handler )
    }
  }

  isEmpty ( obj ) {
    if ( obj == null ) return true
    if ( obj.length > 0 ) return false
    if ( obj.length === 0 ) return true
    if ( typeof obj === 'number' ) return false
    if ( typeof obj !== 'object' ) return true
    for ( const key in obj ) {
      if ( Object.prototype.hasOwnProperty.call( obj, key ) ) return false
    }
    return true
  }

  _showApplyButton () {
    this.updateState( 'presetBuffersQueued', true )
  }

  _hideApplyButton () {
    this.updateState( 'presetBuffersQueued', false )
  }
  isLocationType ( v ) {
    if ( typeof v !== 'string' ) {
      return false
    }
    return ( v && ( v?.toLowerCase() === 'location' || v?.toLowerCase() === 'point' ) )
  }

  getLatLon ( obj ): CachedLocationType | undefined {
    const results = undefined
    if ( obj ) {
      if ( obj.lat && obj.lon ) {
        return { lat: obj.lat, lon: obj.lon }
      } else if ( obj.latitude && obj.longitude ) {
        return { lat: obj.latitude, lon: obj.longitude }
      }
    }
    return results
  }

  getWorkflowBuffers () {
    // TODO: fix these refs using state @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const { workflowEnableUserConfigBuffers, workflowBuffer, workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3, workflowRingsBufferUnit, workflowDrivetimeBuffer1, workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowDrivetimeBufferUnit, workflowWalktimeBuffer1, workflowWalktimeBuffer2, workflowWalktimeBuffer3, workflowWalktimeBufferUnit } = this.props.config
    const { workflowRuntimeBuffer, workflowRuntimeRingsBuffer1, workflowRuntimeRingsBuffer2, workflowRuntimeRingsBuffer3, workflowRuntimeRingsBufferUnit, workflowRuntimeDrivetimeBuffer1, workflowRuntimeDrivetimeBuffer2, workflowRuntimeDrivetimeBuffer3, workflowRuntimeDrivetimeBufferUnit, workflowRuntimeWalktimeBuffer1, workflowRuntimeWalktimeBuffer2, workflowRuntimeWalktimeBuffer3, workflowRuntimeWalktimeBufferUnit } = this.state
    let workflowBufferArray
    if ( ACLUtils.isDef( workflowEnableUserConfigBuffers ) && workflowEnableUserConfigBuffers === false ) {
      workflowBufferArray = {
        buffer: workflowBuffer,
        ringsBuffer1: workflowRingsBuffer1,
        ringsBuffer2: workflowRingsBuffer2,
        ringsBuffer3: workflowRingsBuffer3,
        ringsBufferUnit: workflowRingsBufferUnit,
        drivetimeBuffer1: workflowDrivetimeBuffer1,
        drivetimeBuffer2: workflowDrivetimeBuffer2,
        drivetimeBuffer3: workflowDrivetimeBuffer3,
        drivetimeBufferUnit: workflowDrivetimeBufferUnit,
        walktimeBuffer1: workflowWalktimeBuffer1,
        walktimeBuffer2: workflowWalktimeBuffer2,
        walktimeBuffer3: workflowWalktimeBuffer3,
        walktimeBufferUnit: workflowWalktimeBufferUnit
      }
    } else {
      workflowBufferArray = {
        buffer: workflowRuntimeBuffer,
        ringsBuffer1: workflowRuntimeRingsBuffer1,
        ringsBuffer2: workflowRuntimeRingsBuffer2,
        ringsBuffer3: workflowRuntimeRingsBuffer3,
        ringsBufferUnit: workflowRuntimeRingsBufferUnit,
        drivetimeBuffer1: workflowRuntimeDrivetimeBuffer1,
        drivetimeBuffer2: workflowRuntimeDrivetimeBuffer2,
        drivetimeBuffer3: workflowRuntimeDrivetimeBuffer3,
        drivetimeBufferUnit: workflowRuntimeDrivetimeBufferUnit,
        walktimeBuffer1: workflowRuntimeWalktimeBuffer1,
        walktimeBuffer2: workflowRuntimeWalktimeBuffer2,
        walktimeBuffer3: workflowRuntimeWalktimeBuffer3,
        walktimeBufferUnit: workflowRuntimeWalktimeBufferUnit
      }
    }
    return workflowBufferArray
  }

  onApplyButtonClicked () {
    requestAnimationFrame( () => {
      this.onPropertyChange( 'syncBufferSettings', true )
      this.applyPresetDto()
      this.applyPresetBuffers()
      this._hideApplyButton()
    } )
  }

  buildInfographicOptions ( doStateUpdate: boolean = true ): any {
    const {
      widgetMode, viewMode, displayHeader, zoomLevel, fullscreen, excel,
      imageExport, pdf, dynamicHtml, igBackgroundColor, headerColor, headerTextColor,
      runReportOnClick
    } = this.props.config
    const {
      presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3,
      presetRingsBufferUnit, presetDrivetimeBuffer1, presetDrivetimeBuffer2,
      presetDrivetimeBuffer3, presetDrivetimeBufferUnit, presetWalktimeBuffer1,
      presetWalktimeBuffer2, presetWalktimeBuffer3, presetWalktimeBufferUnit, travelModeData,
      travelDirection, trafficType, offsetTime,
      offsetDay, offsetHr
    } = this.props.config
    const { infographicOptions, showInfographicModal } = this.state

    // PERFORMANCE: Cache options to avoid rebuilding when config hasn't changed
    // const configHash = JSON.stringify( {
    //   widgetMode, presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3,
    //   presetRingsBufferUnit, presetDrivetimeBuffer1, presetDrivetimeBuffer2, presetDrivetimeBuffer3,
    //   presetDrivetimeBufferUnit, presetWalktimeBuffer1, presetWalktimeBuffer2, presetWalktimeBuffer3,
    //   presetWalktimeBufferUnit, viewMode, displayHeader, showInfographicModal,
    //   stUseTrafficChecked: this.state.stUseTrafficChecked
    // } )

    // if ( this._cachedInfographicOptions && this._lastOptionsConfig === configHash ) {
    //   return this._cachedInfographicOptions
    // }

    const workflowBuffers = this.getWorkflowBuffers()

    let options; let buffer1; let buffer2; let buffer3; let bufferType: InfoBufferType; let units
    const showFullscreen = widgetMode === Mode.Preset && !showInfographicModal ? fullscreen : false

    let bufferArray = []

    if ( widgetMode === Mode.Preset ) {
      bufferType = presetBuffer
      buffer1 = bufferType === InfoBufferType.ring ? presetRingsBuffer1 : bufferType === InfoBufferType.drivetime ? presetDrivetimeBuffer1 : presetWalktimeBuffer1
      buffer2 = bufferType === InfoBufferType.ring ? presetRingsBuffer2 : bufferType === InfoBufferType.drivetime ? presetDrivetimeBuffer2 : presetWalktimeBuffer2
      buffer3 = bufferType === InfoBufferType.ring ? presetRingsBuffer3 : bufferType === InfoBufferType.drivetime ? presetDrivetimeBuffer3 : presetWalktimeBuffer3
      units = bufferType === InfoBufferType.ring ? presetRingsBufferUnit : bufferType === InfoBufferType.drivetime ? presetDrivetimeBufferUnit : presetWalktimeBufferUnit

      options = {
        bufferType,
        bufferUnits: units
      }
    } else {
      bufferType = workflowBuffers.buffer
      buffer1 = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBuffer1 : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBuffer1 : workflowBuffers.walktimeBuffer1
      buffer2 = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBuffer2 : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBuffer2 : workflowBuffers.walktimeBuffer2
      buffer3 = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBuffer3 : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBuffer3 : workflowBuffers.walktimeBuffer3
      units = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBufferUnit : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBufferUnit : workflowBuffers.walktimeBufferUnit
      options = {
        bufferType,
        bufferUnits: units
      }
    }

    if ( !this.isEmpty( buffer1 ) ) {
      bufferArray.push( Number( buffer1 ) )
    }
    if ( !this.isEmpty( buffer2 ) ) {
      bufferArray.push( Number( buffer2 ) )
    }
    if ( !this.isEmpty( buffer3 ) ) {
      bufferArray.push( Number( buffer3 ) )
    }
    if ( bufferArray.length === 0 ) {
      if ( bufferType === InfoBufferType.ring ) {
        bufferArray = [1, 3, 5]
      } else {
        bufferArray = [5, 10, 15]
      }
    }

    const sharedOptions = {
      bufferSizes: bufferArray,
      drivetimeOptions: {
        travelModeData: travelModeData, // Support both object and string from service
        offsetTime,
        offsetHr,
        offsetDay,
        travelDirection,
        trafficType,
        useTrafficEnabled: true,
        useTrafficChecked: this.state.stUseTrafficChecked
      },
      viewMode,
      report: {
        showHeader: displayHeader,
        showZoomLevel: !zoomLevel,
        showFullscreen
      },
      export: {
        excel,
        image: imageExport,
        pdf,
        dynamicHtml
      },
      style: {
        igBackgroundColor,
        headerColor,
        headerTextColor
      },
      map: {
        runReportOnClick,
        showSearch: false
      }
    }
    function _optionsHasChanged ( a, b ) {
      if ( a && b ) {
        if ( a.bufferSizes.length === b.bufferSizes.length ) {
          for ( let ii = 0; ii < a.bufferSizes.length; ii++ ) {
            if ( a.bufferSizes[ii] !== b.bufferSizes[ii] ) { return true }
          }
          if ( a.bufferType !== b.bufferType ) { return true }
          if ( a.bufferUnits !== b.bufferUnits ) { return true }
          return false
        } else { return true }
      } else { return true }
    }

    const combinedOptions = Object.assign( {}, options, sharedOptions )
    if ( _optionsHasChanged( infographicOptions, combinedOptions ) && doStateUpdate ) {
      this.updateState( 'infographicOptions', combinedOptions )
    }

    const result: any = {
      bufferType,
      bufferUnits: units,
      bufferSizes: bufferArray,
      infographicOptions: combinedOptions
    }

    // // PERFORMANCE: Cache the result
    // this._cachedInfographicOptions = result
    // this._lastOptionsConfig = JSON.stringify( {
    //   widgetMode, presetBuffer: this.props.config.presetBuffer,
    //   presetRingsBuffer1: this.props.config.presetRingsBuffer1,
    //   presetRingsBuffer2: this.props.config.presetRingsBuffer2,
    //   presetRingsBuffer3: this.props.config.presetRingsBuffer3,
    //   presetRingsBufferUnit: this.props.config.presetRingsBufferUnit,
    //   stUseTrafficChecked: this.state.stUseTrafficChecked
    // } )

    return result
  }

  buildInfographicStyleOptions ( options: any ): any {
    // console.log( "SETTING STYLE OPTIONS..." )
    const opt = options.infographicOptions
    const sty = opt.style
    const rep = opt?.report
    const exp = opt?.export
    const expOptions = {
      "excel": exp ? exp.excel : true,
      "image": exp ? exp.image : true,
      "pdf": exp ? exp.pdf : true,
      "print": exp ? exp.print : true,
      "dynamicHtml": exp ? exp.dynamicHtml : true
    }
    const fullscreen = ( rep?.showFullscreen ) ? rep.showFullscreen : true

    const obj = {
      "showCloseButton": true, //TODO: implement this
      "showHeader": options.infographicOptions?.report?.showHeader,
      "viewMode": options.infographicOptions?.viewMode,
      "resizeMode": undefined,//TODO: implement this
      "showFullscreenButton": fullscreen,
      "disableZoom": opt.disableZoom ? opt.disableZoom : false,
      "exportOptions": expOptions,
      "theme": {
        "background": sty.igBackgroundColor,
        "headerBackground": sty.headerColor,
        "headerText": sty.headerTextColor
      },
      "hideCombineSheets": false//TODO: implement this
    }
    return obj
  }

  getCachedInfographicSettings ( announce?: boolean ): any {
    let searchObj, reportId
    // const {selectedCountry, workflowRuntimeSelectedReport, workflowRuntimeSearchSelectedObject, presetSearchObject} = this.state
    const { selectedCountry, availableHierarchies, selectedHierarchyObj } = this.state

    const { user } = this.props
    const { presetSelectedReport, widgetMode, workflowSearchSelectedObject, workflowSelectedReport, presetSearchSelectedObject, viewMode } = this.props.config
    const token = this.getToken()
    let logged = false
    let selectedHierarchyConfig = this.getValidSelectedHierarchyID( availableHierarchies, selectedHierarchyObj )

    this.portalOnlineGEProxy = this.state.geoenrichmentServiceUrl?.includes( 'sharing/servers' ) || this.state.geoenrichmentServiceUrl?.includes( '/appservices/' ) || this.state.geoenrichmentServiceUrl?.includes( 'usrsvcs/servers' )

    const langCode = getAppStore().getState().appContext.locale || 'en'
    const win: any = window as any
    const jimuCfg: any = win.jimuConfig


    const _logErr = ( msg ) => {
      if ( typeof announce !== 'undefined' && announce ) {
        if ( !logged ) {
          logged = true
          console.groupCollapsed( '%c BA Widget infographic warning:', 'color:#bf551e;font-size:8pt' )
        }
      }
    }

    try {
      if ( ( ACLUtils.hasText( user?.username ) && ACLUtils.hasText( token ) ) || this.portalOnlineGEProxy ) {
        if ( ACLUtils.hasText( selectedCountry ) && ACLUtils.hasText( langCode ) ) {
          //
          if ( widgetMode === Mode.Preset ) {
            if ( ACLUtils.hasText( presetSelectedReport ) ) {
              reportId = presetSelectedReport
              if ( presetSearchSelectedObject !== null ) {
                searchObj = JSON.parse( presetSearchSelectedObject )
              } else if ( ACLUtils.hasText( workflowSearchSelectedObject ) ) {
                searchObj = JSON.parse( workflowSearchSelectedObject )
              } else if ( presetSearchSelectedObject != null ) {
                searchObj = JSON.parse( presetSearchSelectedObject )
                if ( typeof selectedHierarchyConfig === 'undefined' ) {
                  selectedHierarchyConfig = searchObj?.geography?.hierarchy
                }
              }
            } else {
              _logErr( ' missing Preset Report ID' )
            }
            if ( !searchObj ) {
              _logErr( ' missing presetSearchObject state' )
            }
          } else {
            if ( ACLUtils.hasText( workflowSelectedReport ) ) {
              reportId = ACLUtils.hasText( presetSelectedReport ) ? presetSelectedReport : workflowSelectedReport
              if ( ACLUtils.isDef( workflowSearchSelectedObject ) ) {
                searchObj = JSON.parse( workflowSearchSelectedObject )
              } else {
                if ( ACLUtils.isDef( workflowSearchSelectedObject ) ) {
                  searchObj = JSON.parse( workflowSearchSelectedObject )
                }
              }
              if ( !searchObj ) {
                _logErr( ' workflow is missing either [workflowRuntimeSearchSelectedObject or workflowSearchSelectedObject]' )
              }
            } else {
              _logErr( ' missing Workflow Report ID' )
            }
          }

          if ( ACLUtils.isDef( searchObj ) ) {
            if ( searchObj.type ) {
              //
              // const win: any = window
              // Location
              if ( this.isLocationType( searchObj.type ) ) {
                const location: CachedLocationType = this.getLatLon( searchObj )
                if ( location?.lat && location?.lon ) {

                  const bufferOptions = this.buildInfographicOptions( false )
                  const styleOptions = this.buildInfographicStyleOptions( bufferOptions )
                  const data = {
                    env: jimuCfg?.hostEnv,
                    username: user?.username,
                    token,
                    country: selectedCountry,
                    selectedHierarchy: selectedHierarchyConfig,
                    langCode,
                    reportId: reportId,
                    styleOptions: styleOptions,
                    buffers: bufferOptions,
                    location: location,
                    locationName: searchObj.name || searchObj.displayName || searchObj.address,
                    viewMode,
                    attributes: JSON.stringify( searchObj.attributes ? searchObj.attributes : {} ),
                    portalOnlineGEProxy: this.portalOnlineGEProxy
                  }
                  return data
                }
                //
                // geography or boundary
              } else if ( searchObj.type === 'geography' ) {
                // Correct the geography hierarchy to match the selected data source
                if ( typeof ( searchObj.geography?.hierarchy ) !== 'undefined' && searchObj.geography.hierarchy !== selectedHierarchyConfig ) {
                  searchObj.geography.hierarchy = selectedHierarchyConfig
                }

                const simpleFillSymbol = new SimpleFillSymbol( widgetDefaultFillSymbol )
                const bufferOptions = this.buildInfographicOptions( false )
                const styleOptions = this.buildInfographicStyleOptions( bufferOptions )

                const data: any = {
                  env: jimuCfg.hostEnv,
                  username: user?.username,
                  token,
                  country: selectedCountry,
                  selectedHierarchy: selectedHierarchyConfig,
                  langCode,
                  reportId: reportId,
                  styleOptions: styleOptions,
                  buffers: bufferOptions,
                  // location: reportLoc,
                  locationName: searchObj.name,
                  viewMode,
                  attributes: JSON.stringify( searchObj.attributes ? searchObj.attributes : {} ),
                  ...searchObj.symbol ? { symbol: searchObj.symbol } : { symbol: simpleFillSymbol },
                  portalOnlineGEProxy: this.portalOnlineGEProxy
                }
                if ( searchObj.geography ) {
                  data.geography = JSON.stringify( searchObj.geography )
                }
                if ( searchObj.geometry ) {
                  data.geometry = JSON.stringify( searchObj.geometry )
                }
                return data

              } else {
                _logErr( ' invalid search result type' )
              }
            } else {
              _logErr( ' invalid search results type' )
            }
          } else {
            _logErr( ' missing search results' )
          }
        } else {
          _logErr( ' missing langCode or country' )
        }
      } else {
        _logErr( ' missing username/token' )
      }
      console.groupEnd()
    } catch ( ex ) {
    }
    return undefined
  }

  render () {
    const {
      selectedCountry, activeGeographyLevels, pointsOfInterestChecked, presetBuffersQueued,
      maxDriveBuffer, maxWalkBuffer, stViewMode, portalHelpUrl, availableHierarchies, selectedHierarchyObj
    } = this.state

    const {
      reportList, drawPointEnabled, searchbarEnabled, drawPolygonEnabled, showIncrementButtons, displayDrivetimeOptions,
      travelModeData, travelDirection, useTrafficChecked, trafficType, offsetTime, offsetDay, offsetHr,
      workflowEnableUserConfigBuffers, workflowAvailableBufferRings, workflowBuffer, workflowRingsBuffer1,
      workflowRingsBuffer2, workflowRingsBuffer3, workflowRingsBufferUnit, workflowAvailableBufferDrivetime,
      workflowDrivetimeBuffer1, workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowDrivetimeBufferUnit,
      workflowAvailableBufferWalktime, workflowEnableInfographicChoice, workflowIntroTextReportCheckbox,
      workflowIntroTextReports, workflowWalktimeBuffer1, workflowWalktimeBuffer2, workflowWalktimeBuffer3,
      workflowWalktimeBufferUnit, workflowIntroTextBuffersCheckbox, workflowIntroTextBuffers, workflowEnableSearch,
      workflowDisplayIntroText, workflowIntroText, widgetMode, igBackgroundColor, runReportOnClick, allowExport, imageExport,
      dynamicHtml, excel, pdf, fullscreen, zoomLevel, displayHeader, headerColor, headerTextColor, sourceCountry,
      widgetPlaceholderText, widgetPlaceholderTextToggle, workflowSearchSelectedObject, presetSearchSelectedObject,
      presetSelectedReport, presetSelectedReportName, workflowSelectedReport, autoSelectLatestDataSource, workflowRunInWidget,
      exportDirectly, presetCachedInfographicObject
    } = this.props.config

    const {
      stPresetBuffer, stPresetRingsBuffer1, stPresetRingsBuffer2, stPresetRingsBuffer3, stPresetRingsBufferUnit,
      stPresetDrivetimeBuffer1, stPresetDrivetimeBuffer2, stPresetDrivetimeBuffer3, stPresetDrivetimeBufferUnit,
      stPresetWalktimeBuffer1, stPresetWalktimeBuffer2, stPresetWalktimeBuffer3, stPresetWalktimeBufferUnit,
      countries, modePopperOpen, settingsOpen, presetSearchSidePopper, allowInfographicChoiceIconOpen,
      workflowInfographicSidePopper, presetInfographicSidePopper, presetBufferSidePopper, workflowBufferSidePopper,
      allowBufferInfoIconOpen, presetShowSearchInput, workflowSearchSidePopper, allowSearchInfoIconOpen, useLatestDSInfoIconOpen,
      runOnMapClickInfoIconOpen, runInWidgetInfoIconOpen, exportDirectlyInfoIconOpen,
      presetGeneralOpen, presetLocationDataOpen, presetBuffersOpen, presetInfographicsOpen, presetGeoEnrichmentOpen,
      workflowGeneralOpen, workflowLocationDataOpen, workflowSearchOpen, workflowBuffersOpen, workflowInfographicsOpen, workflowInfographicSettingsOpen, workflowGeoEnrichmentOpen,
      stTravelModeData, stTravelDirection, stTrafficType, stOffsetTime, stOffsetDay, stOffsetHr,
      workflowShowSearchInput, workflowGeographiesExpanded, stUseTrafficChecked, presetCachedInfographicSidePopper, presetCachingOpen,
      cacheInfographicPopperOpen
    } = this.state

    const { theme, useMapWidgetIds, user, id } = this.props
    const mapWidgetIdsLike = useMapWidgetIds as unknown as { length?: number, size?: number }
    const hasSelectedMapWidget = ( mapWidgetIdsLike?.length ?? mapWidgetIdsLike?.size ?? 0 ) > 0

    // console.log( 'SETTING RENDER with status=', CachedInfographicStatusEnum[this.state.cachedInfographicStatus] ?? this.state.cachedInfographicStatus )
    // TM
    // const travelModeDefaults: TravelModeOptions = {
    //   mode: DrivingMode.driving,
    //   direction: TravelDirection.toward
    // }
    const _useTrafficEnabled = true
    const langCode = getAppStore().getState().appContext.locale || 'en'
    const token = this.getToken()
    const presetSearchObj = presetSearchSelectedObject ? JSON.parse( presetSearchSelectedObject ) : ''
    const workflowSearchObj = workflowSearchSelectedObject ? JSON.parse( workflowSearchSelectedObject ) : ''
    const selectedGeoenrichmentUtility = this.props.config.geoenrichmentConfig?.useUtility
    const selectedGeoenrichmentUtilityLabelRaw =
      selectedGeoenrichmentUtility?.label ||
      selectedGeoenrichmentUtility?.name ||
      selectedGeoenrichmentUtility?.utilityName ||
      ''
    const selectedGeoenrichmentUtilityLabel =
      ( typeof selectedGeoenrichmentUtilityLabelRaw === 'string' && /^utility_\d+$/i.test( selectedGeoenrichmentUtilityLabelRaw ) )
        ? this.localeString( 'geoEnrichment' )
        : ( selectedGeoenrichmentUtilityLabelRaw || this.localeString( 'geoEnrichment' ) )

    const validSelectedHierarchyID = this.getValidSelectedHierarchyID( availableHierarchies, selectedHierarchyObj )

    // set disabled state of the Buffers button
    let buffersButtonDisabled: boolean = workflowSearchObj && workflowSearchObj.type === 'geography'
    if ( !buffersButtonDisabled && presetSearchObj && presetSearchObj.type === 'geography' ) {
      buffersButtonDisabled = true
    }

    const style = css`
          .widget-setting-get-map-coordinates {
            .checkbox-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8px;
            }
          }

          .baDashedSettingsButton {
            border: 1px dashed var(--ref-palette-neutral-800);

            &.jimu-btn, &.jimu-btn:hover {
              color: var(--sys-color-primary-light);
              background: transparent;
            }

            &:hover {
              border: 1px dashed var(--ref-palette-neutral-900);
            }
          }

          .component-map-selector .jimu-widget-setting--row-label {
            margin-bottom: 4px;
          }

          .bufferInput {
            width: 20% !important;
          }

          .bufferUnits {
            width: 40% !important;
          }
        `
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this

    const isUsingBuffers = () => {
      return true
    }

    const onAllowWorkflowSearch = ( flag ) => {
      const originalState = flag
      requestAnimationFrame( () => {
        if ( originalState ) {
          this.updateState( 'baSearchType', this.props.config.baSearchType || Setting_BaSearchTypeNumber.all )
        } else {
          this.onPropertyChange( 'baSearchType', Setting_BaSearchTypeNumber.all )
        }
        const changeArr = [
          { name: 'workflowSearchSelectedObject', value: null },
          { name: 'workflowEnableSearch', value: originalState },
          { name: '' }
        ]
        this.onMultiplePropertyChange( changeArr )
        if ( originalState ) {
          this.updateState( 'workflowShowSearchInput', true )
        }
      } )
    }
    const onClickSelectDefaultReport = ( ev ) => {
      if ( self._ignoreNextDefaultClick ) {
        self._ignoreNextDefaultClick = false
        return
      }

      const panel = self.getDefaultReportPanel()
      const isPanelOpen = !!panel && panel.style.display !== 'none'

      if ( isPanelOpen ) {
        self.closeDefaultReportPanel()
      } else {
        self.openDefaultInfographicPanel()
      }
    }
    const onClickClearDefaultReport = ( ev ) => {
      self.resetDefaultReport()
      self._ignoreNextDefaultClick = true
    }
    const getSelectedExportDefaultFormat = (): 'pdf' | 'image' | 'dynamicHtml' | 'excel' => {
      if ( pdf ) return 'pdf'
      if ( !exportDirectly && imageExport ) return 'image'
      if ( dynamicHtml ) return 'dynamicHtml'
      if ( excel ) return 'excel'
      return 'pdf'
    }
    const setExportDefaultFormat = ( format: 'pdf' | 'image' | 'dynamicHtml' | 'excel' ) => {
      const next = {
        pdf: format === 'pdf',
        imageExport: format === 'image',
        dynamicHtml: format === 'dynamicHtml',
        excel: format === 'excel'
      }
      self.onMultiplePropertyChange( [
        { name: 'pdf', value: next.pdf },
        { name: 'imageExport', value: next.imageExport },
        { name: 'dynamicHtml', value: next.dynamicHtml },
        { name: 'excel', value: next.excel }
      ] )
    }
    const onAllowFormatChoiceChange = ( checked: boolean ) => {
      if ( checked ) {
        self.onMultiplePropertyChange( [
          { name: 'allowExport', value: true },
          { name: 'pdf', value: true },
          { name: 'imageExport', value: !exportDirectly },
          { name: 'dynamicHtml', value: true },
          { name: 'excel', value: true }
        ] )
      } else {
        self.onMultiplePropertyChange( [
          { name: 'allowExport', value: false },
          { name: 'pdf', value: false },
          { name: 'imageExport', value: false },
          { name: 'dynamicHtml', value: false },
          { name: 'excel', value: false }
        ] )
      }
    }

    const onWorkflowAllowExportChange = ( checked: boolean ) => {
      if ( checked ) {
        self.onMultiplePropertyChange( [
          { name: 'allowExport', value: true },
          { name: 'pdf', value: true },
          { name: 'imageExport', value: true },
          { name: 'dynamicHtml', value: true },
          { name: 'excel', value: true }
        ] )
        return
      }

      self.onMultiplePropertyChange( [
        { name: 'allowExport', value: false },
        { name: 'pdf', value: false },
        { name: 'imageExport', value: false },
        { name: 'dynamicHtml', value: false },
        { name: 'excel', value: false }
      ] )
    }
    const onToggleExportDirectly = () => {
      self.onPropertyChange( 'exportDirectly', !exportDirectly )
    }
    const win: any = window as any
    const jimuCfg: any = win.jimuConfig
    const learnMoreUrl = jimuCfg.isInPortal ? portalHelpUrl : 'https://links.esri.com/ba-exb/modes'
    const learnMoreCachedUrl = jimuCfg.isInPortal ? portalHelpUrl : 'https://links.esri.com/ba-exb/cache-infographics'

    const modeLabel = (
      <div className='w-100 d-flex'>
        <div className='text-truncate p-1'>
          {self.localeString( 'mode' )
          }
        </div>
        <React.Fragment>
          <Button
            type='tertiary'
            className='widget-help-btn' icon size='sm'
            onClick={() => { self.updateState( 'modePopperOpen', !modePopperOpen ) }}
            onMouseEnter={() => { self.updateState( 'modePopperOpen', true ) }}
            ref={self.modeInfoRef as React.RefObject<HTMLButtonElement>}
          >
            <InfoOutlined />
            <Popper
              arrowOptions
              css={popperStyles}
              open={modePopperOpen}
              placement='right'
              offsetOptions={10}
              reference={self.modeInfoRef}
              toggle={() => { self.updateState( 'modePopperOpen', false ) }}
            >
              <span className='sr-only'>{self.localeString( 'mode' )}</span>
              <h5>{self.localeString( 'mode' )}</h5>
              <p>{self.localeString( 'modeInfoLine1' )}</p>
              <p>{self.localeString( 'modeInfoLine2' )}</p>
              <Button className='float-right' type='primary' size='sm' href={learnMoreUrl} target='_blank'>
                {self.localeString( 'learnMore' )}
              </Button>
            </Popper>
          </Button>
        </React.Fragment>
      </div >
    )
    const cachedInfographicInfoMessage = self.isValidCachedObject() ? self.localeString( 'presetCacheInfographicHasBeenCached' ) : self.localeString( 'presetCacheInfographicInfo' )

    const cacheInfographicLabel = (
      <div className='w-100 d-flex'>
        <div className='text-truncate p-1'>
          {self.localeString( 'cacheInfographic' )
          }
        </div>
        <React.Fragment>
          <Button
            type='tertiary'
            className='widget-help-btn' icon size='sm'
            onClick={() => { self.updateState( 'cacheInfographicPopperOpen', !cacheInfographicPopperOpen ) }}
            onMouseEnter={() => { self.updateState( 'cacheInfographicPopperOpen', true ) }}
            ref={self.cacheInfographicInfoRef as React.RefObject<HTMLButtonElement>}
          >
            <InfoOutlined />
            <span className='sr-only'>{this.localeString( 'presetCacheInfographicCacheNow' )}</span>
            <Popper
              arrowOptions
              css={popperStyles}
              open={cacheInfographicPopperOpen}
              placement='right'
              offsetOptions={10}
              reference={self.cacheInfographicInfoRef}
              toggle={() => { self.updateState( 'cacheInfographicPopperOpen', false ) }}
            >
              <span className='sr-only'>{self.localeString( 'presetCacheInfographicCacheNow' )}</span>
              <h5>{self.localeString( 'presetCacheInfographicCacheNow' )}</h5>
              <p>{cachedInfographicInfoMessage}</p>
              <Button className='float-right' type='primary' size='sm' href={learnMoreCachedUrl} target='_blank'>
                {self.localeString( 'learnMore' )}
              </Button>
            </Popper>
          </Button>
        </React.Fragment>
      </div >
    )

    const popperOuterStyle: React.CSSProperties = {
      //padding: '12px !important'
    }
    const infographicSettingsPanelStyle: React.CSSProperties = {
      backgroundColor: '#181818',
      border: '1px solid #2f2f2f',
      borderRadius: '4px',
      padding: '5px 10px'
    }
    const viewModeValue: string = ( stViewMode != null && stViewMode !== 'auto' ) ? stViewMode : ViewMode.Auto

    const pinIcon = PinEsriOutlined
    const polygonIcon = PolygonOutlined
    // const searchIcon = SearchOutlined

    const infographicsLoadingSpinner: React.CSSProperties = {
      position: 'relative',
      top: '0px',
      left: 'calc(50% - 16px)',
      transform: 'scale(0.8)',
      width: '24px',
      height: '24px',
      display: 'hidden',
      marginBottom: '20px'
    }

    const timeOffsets = [
      { value: 0, label: self.localeString( 'now' ) },
      ...Array.from( { length: 48 }, ( _, index ) => {
        const minutes = ( index + 1 ) * 15
        const hours = Math.floor( minutes / 60 )
        const mins = minutes % 60
        return {
          value: minutes,
          label: hours > 0
            ? `+${hours} ${self.localeString( 'offsetHr' )} ${mins > 0 ? mins + ' ' + self.localeString( 'min' ) : ''}`
            : `+${mins} ${self.localeString( 'min' )}`
        }
      } )
    ]

    // Days of the week
    const daysOfWeek = [
      self.localeString( 'mon' ),
      self.localeString( 'tues' ),
      self.localeString( 'wed' ),
      self.localeString( 'thurs' ),
      self.localeString( 'fri' ),
      self.localeString( 'sat' ),
      self.localeString( 'sun' )

    ]

    // Generate time options in 15-minute increments up to 24 hours
    const timeOptions = Array.from( { length: 96 }, ( _, index ) => {
      const totalMinutes = index * 15
      const hours24 = Math.floor( totalMinutes / 60 )
      const minutes = totalMinutes % 60
      const hours12 = hours24 % 12 || 12 // Convert to 12-hour format, treating 0 as 12
      const period = hours24 < 12 ? 'AM' : 'PM' // Determine AM/PM
      const formattedTime = `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`

      return {
        value: formattedTime,
        label: formattedTime
      }
    } )

    const cachedInfographicDisplayInfo: string | undefined = this.isValidCachedObject() ? presetCachedInfographicObject.info : undefined
    const cachedInfographicDisplayName: string | undefined = this.isValidCachedObject() ? cachedInfographicDisplayInfo : this.localeString( 'presetCacheInfographicButtonLabel' )

    const onPresetAllowExportChange = ( checked: boolean ) => {
      if ( checked ) {
        self.onMultiplePropertyChange( [
          { name: 'allowExport', value: true },
          { name: 'pdf', value: true },
          { name: 'imageExport', value: true },
          { name: 'dynamicHtml', value: true },
          { name: 'excel', value: true }
        ] )
        return
      }

      self.onMultiplePropertyChange( [
        { name: 'allowExport', value: false },
        { name: 'pdf', value: false },
        { name: 'imageExport', value: false },
        { name: 'dynamicHtml', value: false },
        { name: 'excel', value: false }
      ] )
    }

    const onPresetExportFormatChange = ( formatName: 'pdf' | 'imageExport' | 'dynamicHtml' | 'excel', checked: boolean ) => {
      const next = {
        pdf,
        imageExport,
        dynamicHtml,
        excel,
        [formatName]: checked
      }
      const hasAnyFormat = next.pdf || next.imageExport || next.dynamicHtml || next.excel

      self.onMultiplePropertyChange( [
        { name: 'pdf', value: next.pdf },
        { name: 'imageExport', value: next.imageExport },
        { name: 'dynamicHtml', value: next.dynamicHtml },
        { name: 'excel', value: next.excel },
        { name: 'allowExport', value: hasAnyFormat }
      ] )
    }

    const onWorkflowExportFormatChange = ( formatName: 'pdf' | 'imageExport' | 'dynamicHtml' | 'excel', checked: boolean ) => {
      const next = {
        pdf,
        imageExport,
        dynamicHtml,
        excel,
        [formatName]: checked
      }
      const hasAnyFormat = next.pdf || next.imageExport || next.dynamicHtml || next.excel

      self.onMultiplePropertyChange( [
        { name: 'pdf', value: next.pdf },
        { name: 'imageExport', value: next.imageExport },
        { name: 'dynamicHtml', value: next.dynamicHtml },
        { name: 'excel', value: next.excel },
        { name: 'allowExport', value: hasAnyFormat }
      ] )
    }

    const renderInfographicSettingsContent = () => {
      const firstSectionLabelStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '13px',
        color: 'var(--sys-color-surface-paperText)',
        marginTop: '18px',
        marginBottom: '8px'
      }
      const sectionLabelStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '13px',
        color: 'var(--sys-color-surface-paperText)',
        marginTop: '11px',
        marginBottom: '8px'
      }
      const sectionSeparatorStyle: React.CSSProperties = {
        borderTop: '1px solid var(--sys-color-divider-secondary)',
        margin: '8px 0'
      }
      const allowExportValue = allowExport === true

      return (
        <React.Fragment>
          {/* ── Run section ── */}
          {hasSelectedMapWidget && (
            <React.Fragment>
              <div style={firstSectionLabelStyle}>{self.localeString( 'run' )}</div>
              <SettingRow label={
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {self.localeString( 'runReportOnClick' )}
                  <Button type='tertiary' className='widget-help-btn' icon size='sm'
                    style={{
                      minWidth: '20px',
                      width: '20px',
                      height: '20px',
                      padding: '2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'visible'
                    }}
                    onClick={() => { self.updateState( 'runOnMapClickInfoIconOpen', !runOnMapClickInfoIconOpen ) }}
                    onMouseEnter={() => { self.updateState( 'runOnMapClickInfoIconOpen', true ) }}
                    onMouseLeave={() => { self.updateState( 'runOnMapClickInfoIconOpen', false ) }}
                    ref={self.runOnMapClickInfoRef as React.RefObject<HTMLButtonElement>}
                  >
                    <InfoOutlined />
                    <span className='sr-only'>{self.localeString( 'runOnMapClickInfo' )}</span>
                    <Popper arrowOptions css={popperStyles} open={runOnMapClickInfoIconOpen} placement='right' offsetOptions={10} reference={self.runOnMapClickInfoRef} toggle={() => { self.updateState( 'runOnMapClickInfoIconOpen', false ) }}>
                      <p>{self.localeString( 'runOnMapClickInfo' )}</p>
                    </Popper>
                  </Button>
                </span>
              }>
                <Switch className='can-x-switch' data-key='runReportOnClick'
                  checked={runReportOnClick} onChange={e => {
                    self.handleIgSettingChange( 'runReportOnClick', e.target.checked )
                  }} />
              </SettingRow>
            </React.Fragment>
          )}

          {/* ── Display section ── */}
          {hasSelectedMapWidget && <div style={sectionSeparatorStyle} />}
          <div style={sectionLabelStyle}>{self.localeString( 'display' )}</div>

          <SettingRow flow='no-wrap' label={self.localeString( 'viewMode' )}>
            <Select className='w-50' name='viewMode' size='sm' value={viewModeValue} onChange={e => { self.handleIgSettingChange( 'viewMode', e.target.value ) }}>
              <option key={ViewMode.Auto} value={ViewMode.Auto}>{self.localeString( 'autoLayout' )}</option>
              <option key={ViewMode.Full} value={ViewMode.Full}>{self.localeString( 'fullPages' )}</option>
              <option key={ViewMode.Stack} value={ViewMode.Stack}>{self.localeString( 'panelsInStack' )}</option>
              <option key={ViewMode.Slides} value={ViewMode.Slides}>{self.localeString( 'panelsInSlides' )}</option>
              <option key={ViewMode.StackAll} value={ViewMode.StackAll}>{self.localeString( 'panelsInStackAll' )}</option>
            </Select>
          </SettingRow>

          <SettingRow label={self.localeString( 'backgroundColor' )}>
            <ColorPicker
              style={{ padding: '0' }} width={26} height={14}
              color={igBackgroundColor}
              onChange={value => {
                self.handleIgSettingChange( 'igBackgroundColor', value )
              }}
              presetColors={self.presetColors}
            />
          </SettingRow>

          <SettingRow tag='label' style={workflowRunInWidget ? { opacity: 0.5 } : undefined} label={self.localeString( 'displayHeader' )}>
            <Switch
              className='can-x-switch'
              data-key='displayHeader'
              disabled={!!workflowRunInWidget}
              checked={displayHeader}
              onChange={e => {
                self.handleIgSettingChange( 'displayHeader', e.target.checked )
              }} />
          </SettingRow>

          {displayHeader && (
            <React.Fragment>
              <SettingRow label={self.localeString( 'headerColor' )}>
                <ColorPicker
                  style={{ padding: '0' }} width={26} height={14} disableAlpha
                  color={headerColor}
                  onChange={value => {
                    self.handleIgSettingChange( 'headerColor', value )
                  }}
                  presetColors={self.presetColors}
                />
              </SettingRow>
              <SettingRow label={self.localeString( 'headerTextColor' )}>
                <ColorPicker
                  style={{ padding: '0' }} width={26} height={14} disableAlpha
                  color={headerTextColor}
                  onChange={value => {
                    self.handleIgSettingChange( 'headerTextColor', value )
                  }}
                  presetColors={self.presetColors}
                />
              </SettingRow>
              {self.props.config.viewMode && self.props.config.viewMode !== 'slides' && (
                <SettingRow tag='label' label={self.localeString( 'zoomLevel' )}>
                  <Switch className='can-x-switch' data-key='zoomLevel' checked={zoomLevel} onChange={e => { self.handleIgSettingChange( 'zoomLevel', e.target.checked ) }} />
                </SettingRow>
              )}
              {widgetMode === Mode.Preset && (
                <SettingRow tag='label' label={self.localeString( 'fullscreen' )}>
                  <Switch className='can-x-switch' data-key='fullscreen' checked={fullscreen} onChange={e => { self.handleIgSettingChange( 'fullscreen', e.target.checked ) }} />
                </SettingRow>
              )}

              {/* ── Export section ── */}
              <div style={sectionSeparatorStyle} />
              <div style={sectionLabelStyle}>{self.localeString( 'export' )}</div>

              <SettingRow tag='label' label={self.localeString( 'allowExport' )}>
                <Switch className='can-x-switch' data-key='allowExport'
                  checked={allowExportValue} onChange={e => {
                    onPresetAllowExportChange( e.target.checked )
                  }} />
              </SettingRow>

              {allowExportValue && (
                <div style={{ marginTop: '16px' }}>
                  <SettingRow tag='label' label={self.localeString( 'pdf' )} >
                    <Checkbox checked={pdf} onChange={e => {
                      onPresetExportFormatChange( 'pdf', e.target.checked )
                    }} />
                  </SettingRow>
                  <SettingRow tag='label' label={self.localeString( 'imageExport' )}>
                    <Checkbox checked={imageExport} onChange={e => {
                      onPresetExportFormatChange( 'imageExport', e.target.checked )
                    }} />
                  </SettingRow>
                  <SettingRow tag='label' label={self.localeString( 'dynamicHtml' )}>
                    <Checkbox checked={dynamicHtml} onChange={e => {
                      onPresetExportFormatChange( 'dynamicHtml', e.target.checked )
                    }} />
                  </SettingRow>
                  <SettingRow tag='label' label={self.localeString( 'excel' )}>
                    <Checkbox checked={excel} onChange={e => {
                      onPresetExportFormatChange( 'excel', e.target.checked )
                    }} />
                  </SettingRow>
                </div>
              )
              }

            </React.Fragment >
          )
          }
        </React.Fragment >
      )
    }

    const renderWorkflowInfographicSettingsContent = () => {
      const firstSectionLabelStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '13px',
        color: 'var(--sys-color-surface-paperText)',
        marginTop: '18px',
        marginBottom: '8px'
      }
      const sectionLabelStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '13px',
        color: 'var(--sys-color-surface-paperText)',
        marginTop: '11px',
        marginBottom: '8px'
      }
      const sectionSeparatorStyle: React.CSSProperties = {
        borderTop: '1px solid var(--sys-color-divider-secondary)',
        margin: '8px 0'
      }
      const selectedDefaultFormat = getSelectedExportDefaultFormat()
      const allowFormatChoiceEnabled = workflowEnableInfographicChoice && allowExport === true
      const isDisplayHeaderEnabled: boolean = !!workflowRunInWidget || this.props.config.displayHeader

      if ( exportDirectly ) {
        const showHtmlSettings = selectedDefaultFormat === 'dynamicHtml'

        return (
          <React.Fragment>
            {workflowEnableInfographicChoice && (
              <SettingRow className='mt-3' tag='label' label={self.localeString( 'allowFormatChoice' )}>
                <Switch
                  className='can-x-switch'
                  checked={allowExport === true}
                  onChange={e => {
                    onAllowFormatChoiceChange( e.target.checked )
                  }}
                />
              </SettingRow>
            )}

            <SettingRow flow='no-wrap' label={self.localeString( allowFormatChoiceEnabled ? 'defaultFormat' : 'format' )}>
              <Select
                style={{ width: '75px' }}
                name='defaultExportFormat'
                size='sm'
                value={selectedDefaultFormat}
                onChange={e => {
                  setExportDefaultFormat( e.target.value as 'pdf' | 'dynamicHtml' | 'excel' )
                }}
              >
                <option value='pdf'>PDF</option>
                <option value='dynamicHtml'>HTML</option>
                <option value='excel'>{self.localeString( 'excel' )}</option>
              </Select>
            </SettingRow>

            {showHtmlSettings && (
              <React.Fragment>
                <SettingRow flow='no-wrap' label={self.localeString( 'viewMode' )}>
                  <Select className='w-50' name='viewMode' size='sm' value={viewModeValue} onChange={e => { self.handleIgSettingChange( 'viewMode', e.target.value ) }}>
                    <option key={ViewMode.Auto} value={ViewMode.Auto}>{self.localeString( 'autoLayout' )}</option>
                    <option key={ViewMode.Full} value={ViewMode.Full}>{self.localeString( 'fullPages' )}</option>
                    <option key={ViewMode.Stack} value={ViewMode.Stack}>{self.localeString( 'panelsInStack' )}</option>
                    <option key={ViewMode.Slides} value={ViewMode.Slides}>{self.localeString( 'panelsInSlides' )}</option>
                    <option key={ViewMode.StackAll} value={ViewMode.StackAll}>{self.localeString( 'panelsInStackAll' )}</option>
                  </Select>
                </SettingRow>

                <SettingRow label={self.localeString( 'backgroundColor' )}>
                  <ColorPicker
                    style={{ padding: '0' }} width={26} height={14}
                    color={igBackgroundColor}
                    onChange={value => {
                      self.handleIgSettingChange( 'igBackgroundColor', value )
                    }}
                    presetColors={self.presetColors}
                  />
                </SettingRow>

                <SettingRow tag='label' style={workflowRunInWidget ? { opacity: 0.5 } : undefined} label={self.localeString( 'displayHeader' )}>
                  <Switch
                    className='can-x-switch'
                    data-key='displayHeader'
                    disabled={!!workflowRunInWidget}
                    checked={displayHeader}
                    onChange={e => {
                      self.handleIgSettingChange( 'displayHeader', e.target.checked )

                    }} />
                </SettingRow>

                {displayHeader && (
                  <React.Fragment>
                    <SettingRow label={self.localeString( 'headerColor' )}>
                      <ColorPicker
                        style={{ padding: '0' }} width={26} height={14} disableAlpha
                        color={headerColor}
                        onChange={value => {
                          self.handleIgSettingChange( 'headerColor', value )
                        }}
                        presetColors={self.presetColors}
                      />
                    </SettingRow>
                    <SettingRow label={self.localeString( 'headerTextColor' )}>
                      <ColorPicker
                        style={{ padding: '0' }} width={26} height={14} disableAlpha
                        color={headerTextColor}
                        onChange={value => {
                          self.handleIgSettingChange( 'headerTextColor', value )
                        }}
                        presetColors={self.presetColors}
                      />
                    </SettingRow>

                    <SettingRow tag='label' label={self.localeString( 'zoomLevel' )}>
                      <Switch className='can-x-switch' checked={zoomLevel} onChange={e => { self.handleIgSettingChange( 'zoomLevel', e.target.checked ) }} />
                    </SettingRow>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        )
      }

      const showWorkflowDisplaySection = !exportDirectly || selectedDefaultFormat === 'dynamicHtml'
      return (
        <React.Fragment>
          {/* ── Run section ── */}
          <div style={firstSectionLabelStyle}>{self.localeString( 'run' )}</div>

          <SettingRow>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                <span style={{ color: 'var(--sys-color-surface-paperText)' }}>{self.localeString( 'runInWidget' )}</span>
                <Button
                  type='tertiary'
                  className='widget-help-btn'
                  icon
                  size='sm'
                  onClick={() => { self.updateState( 'runInWidgetInfoIconOpen', !runInWidgetInfoIconOpen ) }}
                  onMouseEnter={() => { self.updateState( 'runInWidgetInfoIconOpen', true ) }}
                  onMouseLeave={() => { self.updateState( 'runInWidgetInfoIconOpen', false ) }}
                  ref={self.runInWidgetInfoRef as React.RefObject<HTMLButtonElement>}
                >
                  <InfoOutlined />
                  <span className='sr-only'>{self.localeString( 'runInWidgetInfo' )}</span>
                  <Popper arrowOptions css={popperStyles} open={runInWidgetInfoIconOpen} placement='right' offsetOptions={10} reference={self.runInWidgetInfoRef} toggle={() => { self.updateState( 'runInWidgetInfoIconOpen', false ) }}>
                    <p>{self.localeString( 'runInWidgetInfo' )}</p>
                  </Popper>
                </Button>
              </span>
              <Switch
                className='can-x-switch'
                data-key='workflowRunInWidget'
                checked={!!workflowRunInWidget}
                onChange={e => {
                  self.handleIgSettingChange( 'workflowRunInWidget', e.target.checked )
                }}
              />
            </div>
          </SettingRow>

          {showWorkflowDisplaySection && (
            <React.Fragment>
              {/* ── Display section ── */}
              <div style={sectionSeparatorStyle} />
              <div style={sectionLabelStyle}>{self.localeString( 'display' )}</div>

              <SettingRow flow='no-wrap' label={self.localeString( 'viewMode' )}>
                <Select className='w-50' name='viewMode' size='sm' value={viewModeValue} onChange={e => { self.handleIgSettingChange( 'viewMode', e.target.value ) }}>
                  <option key={ViewMode.Auto} value={ViewMode.Auto}>{self.localeString( 'autoLayout' )}</option>
                  <option key={ViewMode.Full} value={ViewMode.Full}>{self.localeString( 'fullPages' )}</option>
                  <option key={ViewMode.Stack} value={ViewMode.Stack}>{self.localeString( 'panelsInStack' )}</option>
                  <option key={ViewMode.Slides} value={ViewMode.Slides}>{self.localeString( 'panelsInSlides' )}</option>
                  <option key={ViewMode.StackAll} value={ViewMode.StackAll}>{self.localeString( 'panelsInStackAll' )}</option>
                </Select>
              </SettingRow>

              <SettingRow label={self.localeString( 'backgroundColor' )}>
                <ColorPicker
                  style={{ padding: '0' }} width={26} height={14}
                  color={igBackgroundColor}
                  onChange={value => {
                    self.handleIgSettingChange( 'igBackgroundColor', value )
                  }}
                  presetColors={self.presetColors}
                />
              </SettingRow>

              <SettingRow tag='label' style={workflowRunInWidget ? { opacity: 0.5 } : undefined} label={self.localeString( 'displayHeader' )}>
                <Switch
                  className='can-x-switch'
                  data-key='displayHeader'
                  checked={workflowRunInWidget ? true : displayHeader}
                  disabled={!!workflowRunInWidget}
                  onChange={e => {
                    self.handleIgSettingChange( 'displayHeader', e.target.checked )

                  }}
                />
              </SettingRow>

              {isDisplayHeaderEnabled && (
                <React.Fragment>
                  <SettingRow label={self.localeString( 'headerColor' )}>
                    <ColorPicker
                      style={{ padding: '0' }} width={26} height={14} disableAlpha
                      color={headerColor}
                      onChange={value => {
                        self.handleIgSettingChange( 'headerColor', value )
                      }}
                      presetColors={self.presetColors}
                    />
                  </SettingRow>
                  <SettingRow label={self.localeString( 'headerTextColor' )}>
                    <ColorPicker
                      style={{ padding: '0' }} width={26} height={14} disableAlpha
                      color={headerTextColor}
                      onChange={value => {
                        self.handleIgSettingChange( 'headerTextColor', value )
                      }}
                      presetColors={self.presetColors}
                    />
                  </SettingRow>

                  <SettingRow tag='label' label={self.localeString( 'zoomLevel' )}>
                    <Switch className='can-x-switch' checked={zoomLevel} onChange={e => { self.handleIgSettingChange( 'zoomLevel', e.target.checked ) }} />
                  </SettingRow>
                </React.Fragment>
              )}
            </React.Fragment>
          )}

          {/* ── Export section ── */}
          {isDisplayHeaderEnabled && (
            <div>
              <div style={sectionSeparatorStyle} />
              <div style={sectionLabelStyle}>{self.localeString( 'export' )}</div>

              <SettingRow tag='label' label={self.localeString( 'allowExport' )}>
                <Switch
                  className='can-x-switch'
                  checked={allowExport === true}
                  onChange={e => {
                    onWorkflowAllowExportChange( e.target.checked )
                  }}
                />
              </SettingRow>

              {!exportDirectly && allowExport === true && (
                <React.Fragment>
                  <SettingRow tag='label' label={self.localeString( 'pdf' )}>
                    <Checkbox checked={pdf} onChange={e => { onWorkflowExportFormatChange( 'pdf', e.target.checked ) }} />
                  </SettingRow>
                  <SettingRow tag='label' label={self.localeString( 'imageExport' )}>
                    <Checkbox checked={imageExport} onChange={e => { onWorkflowExportFormatChange( 'imageExport', e.target.checked ) }} />
                  </SettingRow>
                  <SettingRow tag='label' label={self.localeString( 'dynamicHtml' )}>
                    <Checkbox checked={dynamicHtml} onChange={e => { onWorkflowExportFormatChange( 'dynamicHtml', e.target.checked ) }} />
                  </SettingRow>
                  <SettingRow tag='label' label={self.localeString( 'excel' )}>
                    <Checkbox checked={excel} onChange={e => { onWorkflowExportFormatChange( 'excel', e.target.checked ) }} />
                  </SettingRow>
                </React.Fragment>
              )}
            </div>
          )}
        </React.Fragment>
      )
    }

    function onGeographiesCheckChanged ( e: any ): void {
      // const { availableGeographyLevels, activeGeographyLevels } = self.state
      const isChecked: boolean = e.target.checked
      // console.log( 'SETTING onGeographiesCheckChanged', isChecked )
      self.updateGeographiesChecked( isChecked )
      self.toggleAllGeographyLevels( isChecked )
      self.onSearchTypeChanged( 'geographies', isChecked )
      // requestAnimationFrame( () => {

      // } )
      // always show the dropdown contents
      self.updateState( 'workflowGeographiesExpanded', true )
    }

    return (
      <div id={this._topDivId} style={{ width: '100%', height: '100%' }}>
        <div css={getStyle( theme )}>
          <div className='widget-setting-bao' style={{ display: 'relative' }}>
            {/* Select Mode */}
            <SettingSection className='map-selector-section' title={modeLabel}>
              <div className='mode-group w-100 mt-1'>
                <div className='d-flex justify-content-between w-100'>

                  <Button onClick={( e: any ) => { self.onWidgetModeChange( e.currentTarget.value ) }} name='mode' value={Mode.Workflow} type='tertiary' vertical={true} title={self.localeString( 'workflowIcon' )}>
                    <Icon autoFlip className={`mode-img mode-img-h ${widgetMode === Mode.Workflow && 'active'}`} icon={require( './assets/Workflow108x80.svg' )} />
                    {self.localeString( 'workflow' )}
                  </Button>
                  <Button onClick={( e: any ) => { self.onWidgetModeChange( e.currentTarget.value ) }} name='mode' value={Mode.Preset} type='tertiary' vertical={true} title={self.localeString( 'presetIcon' )} >
                    <Icon autoFlip className={`mode-img mode-img-h ${widgetMode === Mode.Preset && 'active'}`} icon={require( './assets/InfographicPreset108x80.svg' )} />
                    {self.localeString( 'preset' )}
                  </Button>
                </div>
              </div >
            </SettingSection >

            {/* Link Map Widget */}
            <SettingSection className='map-selector-section'>
              <CollapsablePanel
                label={self.localeString( 'general' )}
                isOpen={widgetMode === Mode.Preset ? presetGeneralOpen : workflowGeneralOpen}
                onRequestOpen={() => {
                  if ( widgetMode === Mode.Preset ) {
                    self.updateState( 'presetGeneralOpen', true )
                  } else {
                    self.updateState( 'workflowGeneralOpen', true )
                  }
                }}
                onRequestClose={() => {
                  if ( widgetMode === Mode.Preset ) {
                    self.updateState( 'presetGeneralOpen', false )
                  } else {
                    self.updateState( 'workflowGeneralOpen', false )
                  }
                }}
              >
                {widgetMode === Mode.Preset &&
                  <React.Fragment>
                    <SettingRow
                      className='mt-3'
                      tag='label'
                      label={
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          <Checkbox style={{ cursor: 'pointer' }} checked={widgetPlaceholderTextToggle} onChange={e => { self.onPropertyChange( 'widgetPlaceholderTextToggle', e.target.checked ) }} />
                          <span style={{ marginLeft: '8px' }}>{self.localeString( 'introTextCheckbox' )}</span>
                        </span>
                      }
                    >
                    </SettingRow>
                    <TextArea className='w-100 mt-2' spellCheck={true} height={80} value={widgetPlaceholderText} onChange={e => { self.onPropertyChange( 'widgetPlaceholderText', e.target.value ) }} />
                  </React.Fragment>
                }
                <div css={style}>
                  <div className='widget-setting-get-map-coordinates'>
                    <SettingRow className='mt-3 mb-1' label={self.localeString( 'selectAMapWidget' )} />
                    <SettingRow className='mt-1'>
                      <MapWidgetSelector onSelect={self.onMapWidgetSelected} useMapWidgetIds={useMapWidgetIds} showLabel={false} />
                    </SettingRow>
                    {hasSelectedMapWidget && ( widgetMode === Mode.Workflow || widgetMode === Mode.Preset ) && (
                      <div className='drawnGraphicContainer' >
                        <SettingRow
                          tag='label'
                          label={
                            self.localeString( 'searchToolOnMap' )
                          }
                        >
                          <Switch
                            aria-label={self.localeString( 'searchToolOnMap' )}
                            checked={searchbarEnabled}
                            onChange={( e ) => { self.onToggleEnableMapSearch( e.target.checked ) }}
                          />
                        </SettingRow >
                      </div >
                    )}

                    {
                      hasSelectedMapWidget && widgetMode === Mode.Workflow && (
                        <div className='drawnGraphicContainer' style={{ marginTop: '14px' }}>
                          <SettingRow role='group' aria-label={self.localeString( 'drawingToolsTips' )} flow='wrap' className='d-block mb-0' label={self.localeString( 'drawingToolsTips' )}>

                          </SettingRow>
                          <div className='drawnGraphicContainer' style={{ marginTop: '-4px' }}>
                            {/* Point Draw Mode */}
                            <SettingRow
                              tag='label'
                              label={
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                  <Icon size='l' icon={pinIcon} style={{ marginRight: '8px' }} />
                                  {self.localeString( 'drawModePoint' )}
                                </span >
                              }
                            >
                              <Switch
                                aria-label={self.localeString( 'drawModePoint' )}
                                checked={drawPointEnabled}
                                onChange={e => { self.onPropertyChange( 'drawPointEnabled', e.target.checked ) }}
                              />
                            </SettingRow >

                            {/* Polygon Draw Mode */}
                            < SettingRow
                              tag='label'
                              label={
                                < span style={{ display: 'flex', alignItems: 'center' }}>
                                  <Icon size='l' icon={polygonIcon} style={{ marginRight: '8px' }} />

                                  {self.localeString( 'drawModePolygon' )}
                                </span >
                              }
                            >
                              <Switch
                                aria-label={self.localeString( 'drawModePolygon' )}
                                checked={drawPolygonEnabled}
                                onChange={e => { self.onPropertyChange( 'drawPolygonEnabled', e.target.checked ) }}
                              />
                            </SettingRow >
                          </div >

                        </div >
                      )}
                  </div >
                </div >
              </CollapsablePanel>
            </SettingSection >

            {/* Location Settings */}
            < SettingSection>
              <div id={self.props.id + '_locationSettingsPanel'}>
                <CollapsablePanel
                  label={self.localeString( 'locationAndData' )}
                  isOpen={widgetMode === Mode.Preset ? presetLocationDataOpen : workflowLocationDataOpen}
                  onRequestOpen={() => {
                    if ( widgetMode === Mode.Preset ) {
                      self.updateState( 'presetLocationDataOpen', true )
                    } else {
                      self.updateState( 'workflowLocationDataOpen', true )
                    }
                  }}
                  onRequestClose={() => {
                    if ( widgetMode === Mode.Preset ) {
                      self.updateState( 'presetLocationDataOpen', false )
                    } else {
                      self.updateState( 'workflowLocationDataOpen', false )
                    }
                  }}
                >
                  <SettingRow className='mt-3' flow='wrap' label={self.localeString( 'selectCountry' )}>
                    <Select name='sourceCountry' size='sm' value={selectedCountry} onChange={e => { self.updateSelectedCountry( e.target.value ) }}>
                      {countries && countries.map( ( country ) => {
                        return (
                          <option key={country.id} value={country.id}>{country.name}</option>
                        )
                      } )}
                    </Select>
                  </SettingRow>
                  {availableHierarchies && availableHierarchies.length > 1 &&
                    <SettingRow flow='wrap' label={self.localeString( 'data-source' )}>
                      <Select name='selectedHierarchy' size='sm' value={validSelectedHierarchyID} onChange={( e ) => { self.onDataSourceChange( e.currentTarget.value ) }} disabled={autoSelectLatestDataSource}>
                        {availableHierarchies && availableHierarchies.map( ( h ) => {
                          return (
                            <option key={h.ID} value={h.ID}>{h.alias}</option>
                          )
                        } )}
                      </Select>
                    </SettingRow>
                  }
                  {selectedCountry && selectedCountry === 'US' &&
                    < SettingRow
                      tag='label'
                      label={
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                          <span>{self.localeString( 'useLatestDataSource' )}</span>
                          <Button
                            type='tertiary'
                            className='widget-help-btn'
                            icon
                            size='sm'
                            onMouseEnter={() => { self.updateState( 'useLatestDSInfoIconOpen', true ) }}
                            onMouseLeave={() => { self.updateState( 'useLatestDSInfoIconOpen', false ) }}
                            ref={self.useLatestDSInfoRef as React.RefObject<HTMLButtonElement>}
                            style={{ marginLeft: '0' }}
                          >
                            <InfoOutlined />
                            <span className='sr-only'>
                              {self.localeString( 'introTextWithDraw' )}
                            </span>
                            <Popper arrowOptions css={popperStyles} open={useLatestDSInfoIconOpen} placement='right' offsetOptions={10} reference={self.useLatestDSInfoRef} toggle={() => { self.updateState( 'useLatestDSInfoIconOpen', false ) }}>
                              <h5>{self.localeString( 'infoUseLatestDS' )}</h5>
                              <p>{self.localeString( 'infoUseLatestDSDescription' )}</p>
                            </Popper>
                          </Button>
                        </span>
                      }
                    >
                      <Switch className='can-x-switch' data-key='displayHeader' checked={autoSelectLatestDataSource}
                        onChange={e => {
                          self.handleIgSettingChange( 'autoSelectLatestDataSource', e.target.checked )
                          self.onSelectLatestDataSource()
                        }} />
                    </SettingRow>
                  }

                  {widgetMode === Mode.Preset
                    ? <React.Fragment>
                      <SettingRow>
                        {presetSearchObj && ( presetSearchObj.name || presetSearchObj.address )
                          ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={() => { self.toggleSidePopper( 'presetSearchSidePopper' ) }}>

                            <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                              <Icon size='l' icon={presetSearchObj.type === 'location' ? PinEsriOutlined : PolygonOutlined} />
                            </div>
                            <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                              {presetSearchObj.type === 'location' ? presetSearchObj.address : presetSearchObj.name}
                            </div>
                            <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearSearch' )} onClick={( e ) => {
                              e.stopPropagation()
                              e.preventDefault()
                              self.clearSearchObj()
                            }}>
                              <Icon size='s' icon={CloseOutlined} />
                            </span>
                          </Button>

                          : <Button type='tertiary' className='unselectedStateButtonDashed' onClick={() => { self.toggleSidePopper( 'presetSearchSidePopper' ) }}>
                            {self.localeString( 'setLocation' )}
                          </Button>
                        }
                      </SettingRow>
                      {
                        presetSearchSidePopper && (
                          <SidePopper isOpen title={self.localeString( 'setLocation' )} position='right' toggle={() => { self.toggleSidePopper( 'presetSearchSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>
                            <div className='p-4'>
                              <SettingRow className='mt-4' label={self.localeString( 'presetLocationLabel' )} />
                              <SettingRow>
                                {presetSearchObj && !presetShowSearchInput
                                  ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={() => { self.clearSearchObj() }} >
                                    <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                                      <Icon size='l' icon={presetSearchObj.type === 'location' ? PinEsriOutlined : PolygonOutlined} />
                                    </div>
                                    <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                                      {presetSearchObj.type === 'location' ? presetSearchObj.address : presetSearchObj.name}
                                    </div>
                                    <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearSearch' )}>
                                      <Icon size='s' icon={CloseOutlined} />
                                    </span>
                                  </Button>
                                  : <ArcgisBaSearch
                                    id={id + '_preset_search'}
                                    baStateId={this._baAppStateId}
                                    className='w-100'
                                    style={{ position: 'relative', width: '100%' }}
                                    username={user.username}
                                    mode={widgetMode}
                                    env={jimuCfg.hostEnv}
                                    geoenrichmentUrl={self.state.geoenrichmentServiceUrl ? self.state.geoenrichmentServiceUrl : null}
                                    geocodeUrl={self.state.geocodeUrl ? self.state.geocodeUrl : null}
                                    token={token}
                                    sourceCountry={selectedCountry}
                                    selectedHierarchy={selectedHierarchyObj.ID}
                                    langCode={langCode}
                                    activeLevels={JSON.stringify( self.state.activeGeographyLevels )}
                                    colors={self.getThemeObject()}
                                    theme={2}
                                    onSearchResults={ev => { self.baSearchResultsHandler( ev ) }}
                                    readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                                  />
                                }
                              </SettingRow >
                            </div >
                          </SidePopper >
                        )
                      }
                    </React.Fragment >
                    : null
                  }
                </CollapsablePanel>
              </div>
            </SettingSection >

            {
              widgetMode === Mode.Workflow &&
              <SettingSection>
                <CollapsablePanel
                  label={self.localeString( 'search' )}
                  isOpen={workflowSearchOpen}
                  onRequestOpen={() => {
                    self.updateState( 'workflowSearchOpen', true )
                  }}
                  onRequestClose={() => {
                    self.updateState( 'workflowSearchOpen', false )
                  }}
                >
                  <SettingRow className='mt-3'>
                    {workflowSearchObj && ( workflowSearchObj.name || workflowSearchObj.address )
                      ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={() => { self.toggleSidePopper( 'workflowSearchSidePopper' ) }}>
                        <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                          <Icon size='l' icon={workflowSearchObj.type === 'location' ? PinEsriOutlined : PolygonOutlined} />
                        </div>
                        <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                          {workflowSearchObj.type === 'location' ? workflowSearchObj.address : workflowSearchObj.name}
                        </div>
                        <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearSearch' )} onClick={( e ) => {
                          e.stopPropagation()
                          e.preventDefault()
                          self.clearSearchObj()
                        }}>
                          <Icon size='s' icon={CloseOutlined} />
                        </span>
                      </Button>
                      : <Button type='primary' onClick={() => { self.toggleSidePopper( 'workflowSearchSidePopper' ) }} style={{ width: '100%' }}>
                        {self.localeString( 'customizeSearch' )}
                      </Button>
                    }

                  </SettingRow>
                  {
                    workflowSearchSidePopper && (
                      <SidePopper isOpen title={self.localeString( 'customizeSearchBtn' )} position='right' toggle={() => { self.toggleSidePopper( 'workflowSearchSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>
                        <div className='p-4'>
                          <SettingRow label={
                            <React.Fragment>
                              {self.localeString( 'allowRuntimeSearch' )}
                              <Button type='tertiary' className='widget-help-btn' icon size='sm' onClick={() => { self.updateState( 'allowSearchInfoIconOpen', !allowSearchInfoIconOpen ) }} onMouseEnter={() => { self.updateState( 'allowSearchInfoIconOpen', true ) }} onMouseLeave={() => { self.updateState( 'allowSearchInfoIconOpen', false ) }} ref={self.allowSearchInfoRef as React.RefObject<HTMLButtonElement>} >
                                <InfoOutlined />
                                <span className='sr-only'>
                                  {self.localeString( 'introTextWithDraw' )}
                                </span>
                                <Popper arrowOptions css={popperStyles} open={allowSearchInfoIconOpen} placement='right' offsetOptions={10} reference={self.allowSearchInfoRef} toggle={() => { self.updateState( 'allowSearchInfoIconOpen', false ) }} >
                                  <h5>{self.localeString( 'allowRuntimeSearch' )}</h5>
                                  <p>{self.localeString( 'allowRuntimeSearchInfo' )}</p>
                                </Popper>
                              </Button>
                            </React.Fragment>
                          }>
                            <Switch className='can-x-switch' data-key='workflowEnableSearch' checked={workflowEnableSearch} onChange={e => { onAllowWorkflowSearch( e.target.checked ) }} />
                          </SettingRow>
                          {workflowEnableSearch
                            ? <React.Fragment>
                              {self.localeString( 'userConfigLocationDesc' )}
                              <SettingRow>
                                <Checkbox style={{ cursor: 'pointer' }} className='mr-2' checked={workflowDisplayIntroText} onChange={e => { self.onPropertyChange( 'workflowDisplayIntroText', e.target.checked ) }} />
                                {self.localeString( 'introTextCheckbox' )}
                              </SettingRow>
                              <TextArea className='w-100 mt-2' spellCheck={true} height={80} value={workflowIntroText} onChange={e => { self.onPropertyChange( 'workflowIntroText', e.target.value ) }} />
                            </React.Fragment >
                            : self.localeString( 'userConfigLocationDescOff' )
                          }
                          {
                            !workflowEnableSearch && (
                              <React.Fragment>
                                <SettingRow className='mt-4' label={self.localeString( 'customExtentBoundary' )} />

                                <SettingRow>

                                  {workflowSearchObj && !workflowShowSearchInput
                                    ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={() => { self.clearSearchObj() }} >
                                      <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                                        <Icon size='l' icon={workflowSearchObj.type === 'location' ? PinEsriOutlined : PolygonOutlined} />
                                      </div>
                                      <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                                        {workflowSearchObj.type === 'location' ? workflowSearchObj.address : workflowSearchObj.name}
                                      </div>
                                      <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearSearch' )}>
                                        <Icon size='s' icon={CloseOutlined} />
                                      </span>
                                    </Button>
                                    : <ArcgisBaSearch
                                      id={id + '_workflow_search'}
                                      baStateId={this._baAppStateId}
                                      className='w-100'
                                      style={{ position: 'relative', width: '100%' }}
                                      username={user.username}
                                      mode={widgetMode}
                                      env={jimuCfg.hostEnv}
                                      geoenrichmentUrl={self.state.geoenrichmentServiceUrl ? self.state.geoenrichmentServiceUrl : null}
                                      geocodeUrl={self.state.geocodeUrl ? self.state.geocodeUrl : null}
                                      token={token}
                                      sourceCountry={selectedCountry}
                                      selectedHierarchy={selectedHierarchyObj?.ID}
                                      langCode={langCode}
                                      activeLevels={JSON.stringify( self.state.activeGeographyLevels )}
                                      colors={self.getThemeObject()}
                                      theme={2}
                                      onSearchResults={ev => { self.baSearchResultsHandler( ev ) }}
                                      readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                                    />
                                  }
                                </SettingRow >
                              </React.Fragment >
                            )
                          }

                          {
                            workflowEnableSearch && widgetMode === Mode.Workflow && (
                              <React.Fragment>
                                <SettingRow className="pt-4" label={self.localeString( 'searchControl' )} />
                                <SettingRow>
                                  <Label check centric>
                                    <Checkbox style={{ cursor: 'pointer' }} className='mr-2'
                                      checked={pointsOfInterestChecked} onChange={e => { self.onSearchTypeChanged( 'pointsOfInterest', e.target.checked ) }} />
                                    {self.localeString( 'pointsOfInterest' )}

                                  </Label>
                                </SettingRow>
                                <SettingRow>
                                  <Label check centric>
                                    <Checkbox style={{ cursor: 'pointer' }} className='mr-2'
                                      checked={this._geographiesChecked} onChange={onGeographiesCheckChanged} />
                                    <span
                                      role='button'
                                      tabIndex={0}
                                      style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                      onClick={( e ) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        self.updateState( 'workflowGeographiesExpanded', !workflowGeographiesExpanded )
                                      }}
                                      onKeyDown={( e ) => {
                                        if ( e.key === 'Enter' || e.key === ' ' ) {
                                          e.preventDefault()
                                          e.stopPropagation()
                                          self.updateState( 'workflowGeographiesExpanded', !workflowGeographiesExpanded )
                                        }
                                      }}
                                    >
                                      {self.localeString( 'geographies' )}
                                      <Icon size='s' icon={workflowGeographiesExpanded ? upOutlinedIcon : downOutlinedIcon} />
                                    </span>
                                  </Label>
                                </SettingRow>

                                {
                                  workflowGeographiesExpanded && self.state.availableGeographyLevels &&
                                  self.state.availableGeographyLevels.map( level => {
                                    const matching: string = activeGeographyLevels.find( o => o === level )
                                    const isSelected: boolean = ( typeof matching !== 'undefined' && matching.length > 0 )
                                    return (
                                      <SettingRow>
                                        <Label check centric>
                                          <Checkbox style={{ cursor: 'pointer' }} checked={isSelected}
                                            onChange={e => {
                                              const level = e.target.labels[0].innerText
                                              self.updateGeographyLevelCheck( { level }, !self.isGeographyLevelSelected( level ) )
                                            }} className='ml-4 mr-2' />
                                          {level}
                                        </Label>
                                      </SettingRow>
                                    )
                                  } )
                                }
                              </React.Fragment >
                            )
                          }
                        </div >
                      </SidePopper >
                    )}
                </CollapsablePanel>
              </SettingSection>
            }

            {/* Customize Buffers - - - - - - - - - - - - - - - - - - - - - */}

            {
              ( isUsingBuffers() && widgetMode === Mode.Preset )
                ? <SettingSection>
                  <div id={self.props.id + '_bufferSettingsPanel'}>
                    <CollapsablePanel
                      label={self.localeString( 'buffersLabel' )}
                      isOpen={presetBuffersOpen}
                      onRequestOpen={() => {
                        self.updateState( 'presetBuffersOpen', true )
                      }}
                      onRequestClose={() => {
                        self.updateState( 'presetBuffersOpen', false )
                      }}
                    >
                      <SettingRow className='mt-3' flow='wrap'>
                        {self.renderMainBufferButton()}
                      </SettingRow>

                      {
                        presetBufferSidePopper && (
                          <SidePopper isOpen title={self.localeString( 'setBuffers' )} position='right' toggle={() => { self.toggleSidePopper( 'presetBufferSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>
                            <div className="p-4" style={popperOuterStyle}>
                              <SettingRow>
                                <Label centric>
                                  {self.localeString( 'selectPresetBuffer' )}
                                </Label>
                              </SettingRow>
                              <SettingRow>
                                <Label check centric>

                                  <Radio name='stPresetBuffer' style={{ cursor: 'pointer' }} value={InfoBufferType.ring} className='mr-2' checked={stPresetBuffer === InfoBufferType.ring} onChange={( e ) => { self.handleBufferChange( e.currentTarget.name, e.currentTarget.value, InfoBufferType.ring ) }} />
                                  {self.localeString( 'rings' )}
                                </Label >
                              </SettingRow >
                              <div css={style} className='m-2'>
                                <SettingRow flow='no-wrap' className='w-100 d-flex'>

                                  <NumericInput min='0.1' max={MaxBuffers.Rings} showHandlers={false} name='stPresetRingsBuffer1' data-key='stPresetRingsBuffer1' className='bufferInput' size='sm' value={stPresetRingsBuffer1} onChange={( buffer ) => { self.handleBufferChange( 'stPresetRingsBuffer1', buffer, InfoBufferType.ring ) }} />
                                  <NumericInput min='0.1' max={MaxBuffers.Rings} showHandlers={false} name='stPresetRingsBuffer2' data-key='stPresetRingsBuffer2' className='bufferInput mx-1' size='sm' value={stPresetRingsBuffer2} onChange={( buffer ) => { self.handleBufferChange( 'stPresetRingsBuffer2', buffer, InfoBufferType.ring ) }} />
                                  <NumericInput min='0.1' max={MaxBuffers.Rings} showHandlers={false} name='stPresetRingsBuffer3' data-key='stPresetRingsBuffer3' className='bufferInput' size='sm' value={stPresetRingsBuffer3} onChange={( buffer ) => { self.handleBufferChange( 'stPresetRingsBuffer3', buffer, InfoBufferType.ring ) }} />
                                  <Select name='stPresetRingsBufferUnit' className='bufferUnits ml-1' size='sm' value={stPresetRingsBufferUnit} onChange={( e ) => { self.handleBufferChange( 'stPresetRingsBufferUnit', e.currentTarget.value, InfoBufferType.ring ) }}>
                                    <option value='miles'>{self.localeString( 'milesLow' )}</option>
                                    <option value='kilometers'>{self.localeString( 'kilometerLow' )}</option>
                                  </Select>
                                </SettingRow>
                              </div >
                              <SettingRow>
                                <Label check centric>
                                  <Radio name='stPresetBuffer' style={{ cursor: 'pointer' }} value={InfoBufferType.drivetime} className='mr-2' checked={stPresetBuffer === InfoBufferType.drivetime} onChange={e => { self.handleBufferChange( e.currentTarget.name, e.currentTarget.value, InfoBufferType.drivetime ) }} />
                                  {self.localeString( InfoBufferType.drivetime )}
                                </Label >
                              </SettingRow >
                              <div css={style} className='m-2'>
                                <SettingRow flow='no-wrap' className='w-100 d-flex'>
                                  <NumericInput min='1' max={maxDriveBuffer} showHandlers={false} name='stPresetDrivetimeBuffer1' data-key='stPresetDrivetimeBuffer1' className='bufferInput' size='sm' value={stPresetDrivetimeBuffer1} onChange={( buffer ) => { self.handleBufferChange( 'stPresetDrivetimeBuffer1', buffer, InfoBufferType.drivetime ) }} />
                                  <NumericInput min='1' max={maxDriveBuffer} showHandlers={false} name='stPresetDrivetimeBuffer2' data-key='stPresetDrivetimeBuffer2' className='bufferInput mx-1' size='sm' value={stPresetDrivetimeBuffer2} onChange={( buffer ) => { self.handleBufferChange( 'stPresetDrivetimeBuffer2', buffer, InfoBufferType.drivetime ) }} />
                                  <NumericInput min='1' max={maxDriveBuffer} showHandlers={false} name='stPresetDrivetimeBuffer3' data-key='stPresetDrivetimeBuffer3' className='bufferInput' size='sm' value={stPresetDrivetimeBuffer3} onChange={( buffer ) => { self.handleBufferChange( 'stPresetDrivetimeBuffer3', buffer, InfoBufferType.drivetime ) }} />
                                  <Select name='stPresetDrivetimeBufferUnit' className='bufferUnits ml-1' size='sm' value={stPresetDrivetimeBufferUnit} onChange={( e ) => { self.handleBufferChange( 'stPresetDrivetimeBufferUnit', e.currentTarget.value, InfoBufferType.drivetime ) }}>
                                    <option value='minutes'>{self.localeString( 'minuteLow' )}</option>
                                    <option value='miles'>{self.localeString( 'milesLow' )}</option>
                                    <option value='kilometers'>{self.localeString( 'kilometerLow' )}</option>
                                  </Select>
                                </SettingRow>
                              </div >
                              <SettingRow>
                                <Label check centric>

                                  <Radio name='stPresetBuffer' style={{ cursor: 'pointer' }} value={InfoBufferType.walktime} className='mr-2' checked={stPresetBuffer === InfoBufferType.walktime} onChange={e => { self.handleBufferChange( e.currentTarget.name, e.currentTarget.value, InfoBufferType.walktime ) }} />
                                  {self.localeString( InfoBufferType.walktime )}
                                </Label >
                              </SettingRow >
                              <div css={style} className='m-2'>
                                <SettingRow flow='no-wrap' className='w-100 d-flex mt-2'>
                                  <NumericInput min='1' max={maxWalkBuffer} showHandlers={false} name='stPresetWalktimeBuffer1' data-key='stPresetWalktimeBuffer1' className='bufferInput' size='sm' value={stPresetWalktimeBuffer1} onChange={( buffer ) => { self.handleBufferChange( 'stPresetWalktimeBuffer1', buffer, InfoBufferType.walktime ) }} />
                                  <NumericInput min='1' max={maxWalkBuffer} showHandlers={false} name='stPresetWalktimeBuffer2' data-key='stPresetWalktimeBuffer2' className='bufferInput mx-1' size='sm' value={stPresetWalktimeBuffer2} onChange={( buffer ) => { self.handleBufferChange( 'stPresetWalktimeBuffer2', buffer, InfoBufferType.walktime ) }} />
                                  <NumericInput min='1' max={maxWalkBuffer} showHandlers={false} name='stPresetWalktimeBuffer3' data-key='stPresetWalktimeBuffer3' className='bufferInput' size='sm' value={stPresetWalktimeBuffer3} onChange={( buffer ) => { self.handleBufferChange( 'stPresetWalktimeBuffer3', buffer, InfoBufferType.walktime ) }} />
                                  <Select name='stPresetWalktimeBufferUnit' className='bufferUnits ml-1' size='sm' value={stPresetWalktimeBufferUnit} onChange={( e ) => { self.handleBufferChange( 'stPresetWalktimeBufferUnit', e.currentTarget.value, InfoBufferType.walktime ) }}>
                                    <option value='minutes'>{self.localeString( 'minuteLow' )}</option>
                                    <option value='miles'>{self.localeString( 'milesLow' )}</option>
                                    <option value='kilometers'>{self.localeString( 'kilometerLow' )}</option>
                                  </Select>
                                </SettingRow>
                              </div >

                              {/* Preset Drivetime Options - - - - - - - - - - - - */}
                              {
                                stPresetBuffer === InfoBufferType.drivetime && (
                                  <div className='pt-2'>
                                    {self.localeString( 'mode' )}

                                    <div className='pt-1'>
                                      {/* Travel Mode */}
                                      <Select
                                        key={stPresetDrivetimeBufferUnit}
                                        name='travelModeData'
                                        size='sm'
                                        value={stTravelModeData}
                                        onChange={( e ) => {
                                          // Find the full travel mode object and extract only the travelModeData
                                          const selectedItemId = e.currentTarget.value
                                          const selectedTravelMode = self.state.travelModes.find( mode => mode.itemId === selectedItemId )
                                          if ( selectedTravelMode ) {
                                            // Store only the travelModeData portion to avoid nested duplication
                                            const travelModeWithId = {
                                              ...selectedTravelMode.travelModeData,
                                              itemId: selectedTravelMode.itemId,
                                              name: selectedTravelMode.name,
                                              description: selectedTravelMode.description
                                            }
                                            self.onPropertyChange( 'travelModeData', travelModeWithId )
                                          }
                                          // Also update state for UI
                                          self.updateBufferValue( 'stTravelModeData', selectedItemId )
                                        }}
                                      >
                                        {this.getDrivingModeOptions()}
                                      </Select>
                                    </div>
                                    {/* Travel Direction - Away */}
                                    <div style={{ color: '#fff' }} className='ml-3 pt-2'>
                                      <Label check centric>
                                        <Radio
                                          name='travelDirection'
                                          style={{ cursor: 'pointer' }}
                                          value={TravelDirection.away}
                                          className='mr-2'
                                          checked={stTravelDirection === TravelDirection.away}
                                          onChange={( e ) => { self.updateBufferValue( 'stTravelDirection', e.currentTarget.value ) }}
                                        />
                                        {self.localeString( 'awayFacility' )}
                                      </Label>
                                    </div>
                                    {/* Travel Direction - Toward */}
                                    <div style={{ color: '#fff' }} className='ml-3 pt-1'>
                                      <Label check centric>
                                        <Radio
                                          name='travelDirection'
                                          style={{ cursor: 'pointer' }}
                                          value={TravelDirection.toward}
                                          className='mr-2'
                                          checked={stTravelDirection === TravelDirection.toward}
                                          onChange={( e ) => { self.updateBufferValue( 'stTravelDirection', e.currentTarget.value ) }}
                                        />
                                        {self.localeString( 'towardFacility' )}
                                      </Label>
                                    </div>
                                    {/* Use Traffic Checkbox */}
                                    <div className='pt-3'>
                                      <Label check centric>
                                        <Checkbox
                                          style={{ cursor: 'pointer' }}
                                          className='mr-2'
                                          checked={stUseTrafficChecked === true}
                                          onChange={e => {
                                            self.updateBufferValue( 'stUseTrafficChecked', e.target.checked )
                                          }}
                                        />
                                        {self.localeString( 'useTraffic' )}
                                      </Label>
                                    </div>
                                    {/* Traffic Options */}
                                    {
                                      _useTrafficEnabled && (
                                        <Tabs
                                          className='h-100 pt-2'
                                          type='pills'
                                          fill
                                          defaultValue={TrafficType.live}
                                          value={stTrafficType}
                                          onChange={tt => {
                                            self.updateBufferValue( 'stTrafficType', tt )
                                          }}
                                        >
                                          {/* Traffic Type LIVE */}
                                          <Tab id={TrafficType.live} title={self.localeString( 'liveTraffic' )}>
                                            <div className='traffic-container h-100 pt-2'>
                                              {self.localeString( 'timeOffset' )}
                                              <Select
                                                className='pt-1'
                                                name='offsetTime'
                                                size='sm'
                                                value={stOffsetTime}
                                                onChange={e => {
                                                  const n = parseInt( e.currentTarget.value )
                                                  self.updateBufferValue( 'stOffsetTime', n )
                                                }}
                                              >
                                                {timeOffsets.map( offset => (
                                                  <option key={offset.value} value={offset.value}>
                                                    {offset.label}
                                                  </option>
                                                ) )}
                                              </Select>
                                            </div>
                                          </Tab>
                                          {/* Traffic Type TYPICAL */}
                                          <Tab id={TrafficType.typical} title={self.localeString( 'typicalTraffic' )}>
                                            <div className='pt-2'>
                                              {/* Traffic Typical OffsetDay */}
                                              {self.localeString( 'day' )}
                                              <Select
                                                className='pt-1'
                                                name='offsetDay'
                                                size='sm'
                                                value={stOffsetDay}
                                                onChange={e => {
                                                  self.updateBufferValue( 'stOffsetDay', e.currentTarget.value )
                                                }}
                                              >
                                                {daysOfWeek.map( day => (
                                                  <option key={day} value={day}>
                                                    {day}
                                                  </option>
                                                ) )}
                                              </Select>
                                            </div>

                                            <div className='pt-2'>
                                              {/* Traffic Typical OffsetHr */}
                                              {self.localeString( 'time' )}
                                              <Select
                                                className='pt-1'
                                                name='offsetHr'
                                                size='sm'
                                                value={stOffsetHr}
                                                onChange={e => {
                                                  self.updateBufferValue( 'stOffsetHr', e.currentTarget.value )
                                                }}
                                              >
                                                {timeOptions.map( time => (
                                                  <option key={time.value} value={time.value}>
                                                    {time.label}
                                                  </option>
                                                ) )}
                                              </Select>
                                            </div >
                                          </Tab >
                                        </Tabs >
                                      )
                                    }
                                  </div >
                                )
                              }

                              {
                                presetBuffersQueued && (
                                  <div css={style} className='mx-2 mt-4'>
                                    <SettingRow flow='wrap'>
                                      <div className='w-100' ref={self.sidePopperTrigger}>
                                        <Button type='primary' onClick={() => { self.onApplyButtonClicked() }} style={{ width: '100%' }}>{self.localeString( 'applyBtn' )}</Button>
                                      </div>
                                    </SettingRow>
                                  </div >
                                )
                              }
                            </div >
                          </SidePopper >
                        )
                      }
                    </CollapsablePanel>
                  </div>
                </SettingSection >
                : <SettingSection>
                  <CollapsablePanel
                    label={self.localeString( 'buffersLabel' )}
                    isOpen={workflowBuffersOpen}
                    onRequestOpen={() => {
                      self.updateState( 'workflowBuffersOpen', true )
                    }}
                    onRequestClose={() => {
                      self.updateState( 'workflowBuffersOpen', false )
                    }}
                  >
                    <SettingRow className='mt-3' flow='wrap'>
                      <div className='w-100' ref={self.sidePopperTrigger}>
                        <Button type='primary' disabled={buffersButtonDisabled} onClick={() => { self.toggleSidePopper( 'workflowBufferSidePopper' ) }} style={{ width: '100%' }}>{self.localeString( 'customizeBuffersBtn' )}</Button>
                      </div>
                    </SettingRow>

                    {/* Workflow Customize Buffers - - - - - - - - - - - - - - - - - - - - - */}

                    {
                      workflowBufferSidePopper && (
                        <SidePopper isOpen title={self.localeString( 'customizeBuffersBtn' )} position='right' toggle={() => { self.toggleSidePopper( 'workflowBufferSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>
                          <div className="p-4" style={popperOuterStyle}>
                            {widgetMode === Mode.Workflow && (
                              <React.Fragment>
                                <SettingRow label={
                                  <React.Fragment>
                                    {self.localeString( 'userConfigBuffers' )}
                                    <Button type='tertiary' className='widget-help-btn' icon size='sm' onClick={() => { self.updateState( 'allowBufferInfoIconOpen', !allowBufferInfoIconOpen ) }} onMouseEnter={() => { self.updateState( 'allowBufferInfoIconOpen', true ) }} onMouseLeave={() => { self.updateState( 'allowBufferInfoIconOpen', false ) }} ref={self.userBufferInfoRef as React.RefObject<HTMLButtonElement>} >
                                      <InfoOutlined />
                                      <span className='sr-only'>
                                        {self.localeString( 'userConfigLocationInfo' )}
                                      </span>
                                      <Popper arrowOptions css={popperStyles} open={allowBufferInfoIconOpen} placement='right' offsetOptions={10} reference={self.userBufferInfoRef} toggle={() => { self.updateState( 'allowBufferInfoIconOpen', false ) }} >
                                        <h5>{self.localeString( 'userConfigBuffers' )}</h5>
                                        <p>{self.localeString( 'userConfigLocationInfo' )}</p>
                                      </Popper>
                                    </Button>
                                  </React.Fragment>
                                }>

                                  <Switch className='can-x-switch' data-key='workflowEnableUserConfigBuffers' checked={workflowEnableUserConfigBuffers} onChange={e => { self.onPropertyChange( 'workflowEnableUserConfigBuffers', e.target.checked ) }} />
                                </SettingRow >
                                {
                                  workflowEnableUserConfigBuffers &&
                                  <React.Fragment>
                                    <SettingRow>
                                      <Checkbox style={{ cursor: 'pointer' }} className='mr-2' checked={workflowIntroTextBuffersCheckbox} onChange={e => { self.onPropertyChange( 'workflowIntroTextBuffersCheckbox', e.target.checked ) }} />
                                      {self.localeString( 'introTextCheckbox' )}
                                    </SettingRow>
                                    <TextArea className='w-100 mt-2' spellCheck={true} height={80} value={workflowIntroTextBuffers} onChange={e => { self.onPropertyChange( 'workflowIntroTextBuffers', e.target.value ) }} />
                                  </React.Fragment>
                                }
                                {
                                  workflowEnableUserConfigBuffers && (
                                    <SettingRow className='mt-6' label={self.localeString( 'defaultSettings' )} />
                                  )
                                }
                              </React.Fragment >
                            )
                            }
                            <SettingRow>
                              <Label check centric>
                                {workflowEnableUserConfigBuffers
                                  ? <Checkbox style={{ cursor: 'pointer' }} className='mr-2' checked={workflowAvailableBufferRings === true} onChange={e => { self.handleBufferChange( 'workflowAvailableBufferRings', e.target.checked, InfoBufferType.ring ) }} />
                                  : <Radio name='workflowBuffer' style={{ cursor: 'pointer' }} className='mr-2' checked={workflowBuffer === InfoBufferType.ring} onChange={e => { self.handleBufferChange( 'workflowBuffer', InfoBufferType.ring, InfoBufferType.ring ) }} />
                                }
                                {self.localeString( 'rings' )}
                              </Label>
                            </SettingRow>
                            <div css={style} className='m-2'>
                              <SettingRow flow='no-wrap' className='w-100 d-flex'>
                                <NumericInput min='0.1' max={MaxBuffers.Rings} showHandlers={false} name='workflowRingsBuffer1' data-key='workflowRingsBuffer1' className='bufferInput' size='sm' value={workflowRingsBuffer1} onChange={( buffer ) => { self.handleBufferChange( 'workflowRingsBuffer1', buffer, 'rings' ) }} />
                                <NumericInput min='0.1' max={MaxBuffers.Rings} showHandlers={false} name='workflowRingsBuffer2' data-key='workflowRingsBuffer2' className='bufferInput mx-1' size='sm' value={workflowRingsBuffer2} onChange={( buffer ) => { self.handleBufferChange( 'workflowRingsBuffer2', buffer, 'rings' ) }} />
                                <NumericInput min='0.1' max={MaxBuffers.Rings} showHandlers={false} name='workflowRingsBuffer3' data-key='workflowRingsBuffer3' className='bufferInput' size='sm' value={workflowRingsBuffer3} onChange={( buffer ) => { self.handleBufferChange( 'workflowRingsBuffer3', buffer, 'rings' ) }} />
                                <Select name='workflowRingsBufferUnit' className='bufferUnits ml-1' size='sm' value={workflowRingsBufferUnit} onChange={( e ) => { self.handleBufferChange( 'workflowRingsBufferUnit', e.currentTarget.value, 'rings' ) }}>
                                  <option value='miles'>{self.localeString( 'milesLow' )}</option>
                                  <option value='kilometers'>{self.localeString( 'kilometerLow' )}</option>
                                </Select>
                              </SettingRow>
                            </div >
                            <SettingRow>
                              <Label check centric>
                                {workflowEnableUserConfigBuffers
                                  ? <Checkbox style={{ cursor: 'pointer' }} className='mr-2' checked={workflowAvailableBufferWalktime === true} onChange={e => { self.handleBufferChange( 'workflowAvailableBufferWalktime', e.target.checked, InfoBufferType.walktime ) }} />
                                  : <Radio name='workflowBuffer' style={{ cursor: 'pointer' }} className='mr-2' checked={workflowBuffer === InfoBufferType.walktime} onChange={e => { self.handleBufferChange( 'workflowBuffer', InfoBufferType.walktime, InfoBufferType.walktime ) }} />
                                }
                                {self.localeString( InfoBufferType.walktime )}
                              </Label>
                            </SettingRow>
                            <div css={style} className='m-2'>
                              <SettingRow flow='no-wrap' className='w-100 d-flex mt-2'>
                                <NumericInput min='1' max={maxWalkBuffer} showHandlers={false} name='workflowWalktimeBuffer1' data-key='workflowWalktimeBuffer1' className='bufferInput' size='sm' value={workflowWalktimeBuffer1} onChange={( buffer ) => { self.handleBufferChange( 'workflowWalktimeBuffer1', buffer, InfoBufferType.walktime ) }} />
                                <NumericInput min='1' max={maxWalkBuffer} showHandlers={false} name='workflowWalktimeBuffer2' data-key='workflowWalktimeBuffer2' className='bufferInput mx-1' size='sm' value={workflowWalktimeBuffer2} onChange={( buffer ) => { self.handleBufferChange( 'workflowWalktimeBuffer2', buffer, InfoBufferType.walktime ) }} />
                                <NumericInput min='1' max={maxWalkBuffer} showHandlers={false} name='workflowWalktimeBuffer3' data-key='workflowWalktimeBuffer3' className='bufferInput' size='sm' value={workflowWalktimeBuffer3} onChange={( buffer ) => { self.handleBufferChange( 'workflowWalktimeBuffer3', buffer, InfoBufferType.walktime ) }} />
                                <Select name='workflowWalktimeBufferUnit' className='bufferUnits ml-1' size='sm' value={workflowWalktimeBufferUnit} onChange={( e ) => { self.handleBufferChange( 'workflowWalktimeBufferUnit', e.currentTarget.value, InfoBufferType.walktime ) }}>
                                  <option value='minutes'>{self.localeString( 'minuteLow' )}</option>
                                  <option value='miles'>{self.localeString( 'milesLow' )}</option>
                                  <option value='kilometers'>{self.localeString( 'kilometerLow' )}</option>
                                </Select>
                              </SettingRow>
                            </div >
                            <SettingRow>
                              <Label check centric>
                                {workflowEnableUserConfigBuffers
                                  ? <Checkbox style={{ cursor: 'pointer' }} className='mr-2' checked={workflowAvailableBufferDrivetime === true} onChange={e => { self.handleBufferChange( 'workflowAvailableBufferDrivetime', e.target.checked, InfoBufferType.drivetime ) }} />
                                  : <Radio name='workflowBuffer' style={{ cursor: 'pointer' }} className='mr-2' checked={workflowBuffer === InfoBufferType.drivetime} onChange={e => { self.handleBufferChange( 'workflowBuffer', InfoBufferType.drivetime, InfoBufferType.drivetime ) }} />
                                }
                                {self.localeString( InfoBufferType.drivetime )}
                              </Label>
                            </SettingRow>
                            <div css={style} className='m-2'>
                              <SettingRow flow='no-wrap' className='w-100 d-flex'>
                                <NumericInput min='1' max={maxDriveBuffer} showHandlers={false} name='workflowDrivetimeBuffer1' data-key='workflowDrivetimeBuffer1' className='bufferInput' size='sm' value={workflowDrivetimeBuffer1} onChange={( buffer ) => { self.handleBufferChange( 'workflowDrivetimeBuffer1', buffer, InfoBufferType.drivetime ) }} />
                                <NumericInput min='1' max={maxDriveBuffer} showHandlers={false} name='workflowDrivetimeBuffer2' data-key='workflowDrivetimeBuffer2' className='bufferInput mx-1' size='sm' value={workflowDrivetimeBuffer2} onChange={( buffer ) => { self.handleBufferChange( 'workflowDrivetimeBuffer2', buffer, InfoBufferType.drivetime ) }} />
                                <NumericInput min='1' max={maxDriveBuffer} showHandlers={false} name='workflowDrivetimeBuffer3' data-key='workflowDrivetimeBuffer3' className='bufferInput' size='sm' value={workflowDrivetimeBuffer3} onChange={( buffer ) => { self.handleBufferChange( 'workflowDrivetimeBuffer3', buffer, InfoBufferType.drivetime ) }} />
                                <Select name='workflowDrivetimeBufferUnit' className='bufferUnits ml-1' size='sm' value={workflowDrivetimeBufferUnit} onChange={( e ) => { self.handleBufferChange( 'workflowDrivetimeBufferUnit', e.currentTarget.value, InfoBufferType.drivetime ) }}>
                                  <option value='minutes'>{self.localeString( 'minuteLow' )}</option>
                                  <option value='miles'>{self.localeString( 'milesLow' )}</option>
                                  <option value='kilometers'>{self.localeString( 'kilometerLow' )}</option>
                                </Select>
                              </SettingRow>
                            </div >
                            <div className='pt-3'>
                              <SettingRow tag='label'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                  <span>{self.localeString( 'incrementButtonsLabel' )}</span>
                                  <Switch
                                    className='can-x-switch'
                                    style={{ alignSelf: 'flex-end' }}
                                    data-key='dynamicHtml'
                                    checked={showIncrementButtons}
                                    onChange={e => { self.onPropertyChange( 'showIncrementButtons', e.target.checked ) }}
                                  />
                                </div >
                              </SettingRow >
                              {/* Workflow DTO toggle - - - - - - - - - - - - - - - - - - - - - */}
                              {
                                ( workflowEnableUserConfigBuffers && workflowAvailableBufferDrivetime ) ||
                                  ( !workflowEnableUserConfigBuffers && workflowBuffer === InfoBufferType.drivetime )
                                  ? (
                                    <SettingRow tag='label'>
                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <span>{self.localeString( 'driveTimeOptions' )}</span>
                                        <Switch
                                          className='can-x-switch'
                                          style={{ alignSelf: 'flex-end' }}
                                          data-key='dynamicHtml'
                                          checked={displayDrivetimeOptions}
                                          onChange={e => { self.onChangeDrivetimeToggle( e.target.checked ) }}
                                        />
                                      </div >
                                    </SettingRow >
                                  )
                                  : null
                              }
                            </div >
                            {/* Workflow Drivetime Options - - - - - - - - - - - - - */}
                            {
                              displayDrivetimeOptions && (
                                ( workflowEnableUserConfigBuffers && workflowAvailableBufferDrivetime ) ||
                                ( !workflowEnableUserConfigBuffers && workflowBuffer === InfoBufferType.drivetime )
                              ) && (
                                <div className='pt-2'>

                                  {self.localeString( 'mode' )}
                                  <div className='pt-1'>
                                    <Select
                                      key={workflowDrivetimeBufferUnit} // For Workflow mode
                                      name='travelModeData'
                                      size='sm'
                                      value={travelModeData?.itemId || travelModeData}
                                      onChange={( e ) => {
                                        // Find the full travel mode object and extract only the travelModeData
                                        const selectedItemId = e.currentTarget.value
                                        const selectedTravelMode = self.state.travelModes.find( m => m.itemId === selectedItemId )
                                        if ( selectedTravelMode ) {
                                          // Store only the travelModeData portion to avoid nested duplication
                                          const travelModeWithId = {
                                            ...selectedTravelMode.travelModeData,
                                            itemId: selectedTravelMode.itemId,
                                            name: selectedTravelMode.name,
                                            description: selectedTravelMode.description
                                          }
                                          // Update both the config and the buffer value to ensure consistency
                                          self.onPropertyChange( 'travelModeData', travelModeWithId )
                                          self.updateBufferValue( 'travelModeData', travelModeWithId )
                                        } else {
                                          // Fallback for string values
                                          self.updateBufferValue( 'travelModeData', selectedItemId )
                                        }
                                      }}
                                    >
                                      {this.getDrivingModeOptions()}
                                    </Select>
                                  </div>
                                  <div style={{ color: '#fff' }} className='ml-3 pt-2'>
                                    <Label check centric>
                                      <Radio
                                        name='travelDirection'
                                        style={{ cursor: 'pointer' }}
                                        value={TravelDirection.away}
                                        className='mr-2'
                                        checked={travelDirection === TravelDirection.away}
                                        onChange={( e ) => { self.updateBufferValue( 'travelDirection', e.currentTarget.value ) }}
                                      />
                                      {self.localeString( 'awayFacility' )}
                                    </Label>
                                  </div>
                                  <div style={{ color: '#fff' }} className='ml-3 pt-1'>
                                    <Label check centric>
                                      <Radio
                                        name='travelDirection'
                                        style={{ cursor: 'pointer' }}
                                        value={TravelDirection.toward}
                                        className='mr-2'
                                        checked={travelDirection === TravelDirection.toward}
                                        onChange={( e ) => { self.updateBufferValue( 'travelDirection', e.currentTarget.value ) }}
                                      />
                                      {self.localeString( 'towardFacility' )}
                                    </Label>
                                  </div>
                                  <div className='pt-3'>
                                    <Label check centric>
                                      <Checkbox
                                        style={{ cursor: 'pointer' }}
                                        className='mr-2'
                                        checked={useTrafficChecked === true}
                                        onChange={e => {
                                          self.updateBufferValue( 'useTrafficChecked', e.target.checked )
                                        }}
                                      />
                                      {self.localeString( 'useTraffic' )}
                                    </Label>
                                  </div>
                                  {
                                    _useTrafficEnabled && (
                                      <Tabs
                                        className='h-100 pt-2'
                                        type='pills'
                                        fill
                                        defaultValue={TrafficType.live}
                                        value={trafficType}
                                        onChange={selection => {
                                          self.updateBufferValue( 'trafficType', selection )
                                        }}
                                      >
                                        <Tab id={TrafficType.live} title={self.localeString( 'liveTraffic' )}>
                                          <div className='traffic-container h-100 pt-2'>
                                            {self.localeString( 'timeOffset' )}
                                            <Select
                                              className='pt-1'
                                              name='offsetTime'
                                              size='sm'
                                              value={offsetTime}
                                              onChange={e => {
                                                const n = parseInt( e.currentTarget.value )
                                                self.updateBufferValue( 'offsetTime', n )
                                              }}
                                            >
                                              {timeOffsets.map( offset => (
                                                <option key={offset.value} value={offset.value}>
                                                  {offset.label}
                                                </option>
                                              ) )}
                                            </Select>
                                          </div>
                                        </Tab>
                                        <Tab id={TrafficType.typical} title={self.localeString( 'typicalTraffic' )}>
                                          <div className='pt-2'>
                                            {self.localeString( 'day' )}
                                            <Select
                                              className='pt-1'
                                              name='offsetDay'
                                              size='sm'
                                              value={offsetDay}
                                              onChange={e => {
                                                self.updateBufferValue( 'offsetDay', e.currentTarget.value )
                                              }}
                                            >
                                              {daysOfWeek.map( day => (
                                                <option key={day} value={day}>
                                                  {day}
                                                </option>
                                              ) )}
                                            </Select>
                                          </div>
                                          <div className='pt-2'>

                                            {self.localeString( 'time' )}
                                            <Select
                                              className='pt-1'
                                              name='offsetHr'
                                              size='sm'
                                              value={offsetHr}
                                              onChange={e => {
                                                self.updateBufferValue( 'offsetHr', e.currentTarget.value )
                                              }}
                                            >
                                              {timeOptions.map( time => (
                                                <option key={time.value} value={time.value}>
                                                  {time.label}
                                                </option>
                                              ) )}
                                            </Select>
                                          </div >
                                        </Tab >
                                      </Tabs >
                                    )
                                  }
                                </div >
                              )
                            }

                          </div >
                        </SidePopper >
                      )
                    }
                  </CollapsablePanel>
                </SettingSection >
            }

            {/* Customize Infographics - - - - - - - - - - - - - - - - - - - - - */}
            {
              widgetMode === Mode.Preset
                ? <SettingSection>
                  <div id={self.props.id + '_infographicsSettingsPanel'}>
                    <CollapsablePanel
                      label={self.localeString( 'infographics' )}
                      isOpen={presetInfographicsOpen}
                      onRequestOpen={() => {
                        self.updateState( 'presetInfographicsOpen', true )
                      }}
                      onRequestClose={() => {
                        self.updateState( 'presetInfographicsOpen', false )
                      }}
                    >
                      <SettingRow className='mt-3'>
                        {presetSelectedReportName
                          ? <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={() => { self.toggleSidePopper( 'presetInfographicSidePopper' ) }} >
                            <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                              <Icon size='l' icon={ChartColumnOutlined} />
                            </div>
                            <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column' }}>
                              {presetSelectedReportName}
                            </div>
                            <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearDefaultInfographic' )} onClick={( e ) => { self.clearPresetInfographicSelection( e ) }}>
                              <Icon size='s' icon={CloseOutlined} />
                            </span>
                          </Button>
                          : <Button type='tertiary' className='unselectedStateButtonDashed' onClick={() => { self.toggleSidePopper( 'presetInfographicSidePopper' ) }} >
                            {self.localeString( 'selectAnInfographic' )}

                          </Button>
                        }
                      </SettingRow>
                      {
                        !jimuCfg.isInPortal &&
                        <div className='pt-2 text-sm-right'>
                          <a href='https://links.esri.com/ba-exb/credits' target='_blank'>{self.localeString( 'creditUsage' )}</a>
                        </div >
                      }
                      {
                        presetInfographicSidePopper &&
                        <SidePopper isOpen title={self.localeString( 'selectAnInfographic' )} position='right' toggle={() => { self.toggleSidePopper( 'presetInfographicSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>

                          {/* --------------------REPORT LIST SIDE POPPER CONTENT*/}
                          <div className='p-4' style={popperOuterStyle}>
                            <img id={id + '_loading-infos'} src={require( '../runtime/assets/largeBusy.gif' )} style={infographicsLoadingSpinner}></img>

                            <ArcgisReportList
                              id={id + '_reports'}
                              baStateId={this._baAppStateId}
                              env={jimuCfg.hostEnv}
                              username={user.username}
                              token={token}
                              geoenrichmentUrl={self.state.geoenrichmentServiceUrl ? self.state.geoenrichmentServiceUrl : null}
                              portalUrl={self.state.portalUrl ? self.state.portalUrl : null}
                              colors={self.stringifyTheme()}
                              selectedReportId={presetSelectedReport}
                              showCheckboxes={false}
                              sourceCountry={sourceCountry}
                              hierarchy={selectedHierarchyObj?.ID}
                              langCode={langCode}
                              style={{ width: '100%', marginTop: '-42px' }}
                              onReportSelected={ev => { self.reportSelectedHandler( ev ) }}
                              onReportChecked={ev => { self.reportCheckedHandler( ev ) }}
                              readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                            />
                            <SettingRow className='mt-5 pb-2' label={self.localeString( 'viewOptions' )} />
                            <div style={infographicSettingsPanelStyle}>
                              <CollapsablePanel
                                label={self.localeString( 'infographicSettings' )}
                                isOpen={settingsOpen}
                                onRequestOpen={() => {
                                  self.updateState( 'settingsOpen', true )
                                }}
                                onRequestClose={() => {
                                  self.updateState( 'settingsOpen', false )
                                }}
                              >

                                {renderInfographicSettingsContent()}

                              </CollapsablePanel>
                            </div>
                          </div>
                        </SidePopper>
                      }
                    </CollapsablePanel>
                  </div>
                </SettingSection >
                : <SettingSection>
                  <CollapsablePanel
                    label={self.localeString( 'infographics' )}
                    isOpen={workflowInfographicsOpen}
                    onRequestOpen={() => {
                      self.updateState( 'workflowInfographicsOpen', true )
                    }}
                    onRequestClose={() => {
                      self.updateState( 'workflowInfographicsOpen', false )
                    }}
                  >
                    <SettingRow className='mt-3'>
                      <Button type='primary' onClick={() => { self.toggleSidePopper( 'workflowInfographicSidePopper' ) }} style={{ width: '100%' }}>
                        {self.localeString( 'customizeInfographicsBtn' )}
                      </Button>
                    </SettingRow>
                    {
                      !jimuCfg.isInPortal &&
                      <div className='pt-2 text-sm-right'>
                        <a href='https://links.esri.com/ba-exb/credits' target='_blank'>{self.localeString( 'creditUsage' )}</a>
                      </div >
                    }
                    {
                      workflowInfographicSidePopper && (
                        <SidePopper isOpen title={widgetMode === Mode.Workflow ? self.localeString( 'customizeInfographicsBtn' ) : self.localeString( 'selectAnInfographic' )} position='right' toggle={() => { self.toggleSidePopper( 'workflowInfographicSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>
                          <div css={getStyle( theme )}>
                            {/* --------------------REPORT LIST SIDE POPPER CONTENT*/}
                            <div className='p-4' style={popperOuterStyle}>
                              <SettingRow label={
                                <React.Fragment>
                                  {self.localeString( 'allowInfographicChoice' )}
                                  <Button type='tertiary' className='widget-help-btn' icon size='sm' onClick={() => { self.updateState( 'allowInfographicChoiceIconOpen', !allowInfographicChoiceIconOpen ) }} onMouseEnter={() => { self.updateState( 'allowInfographicChoiceIconOpen', true ) }} onMouseLeave={() => { self.updateState( 'allowInfographicChoiceIconOpen', false ) }} ref={self.allowSearchInfoRef as React.RefObject<HTMLButtonElement>} >
                                    <InfoOutlined />
                                    <span className='sr-only'>
                                      {self.localeString( 'allowRuntimeReportInfo' )}
                                    </span>
                                    <Popper arrowOptions css={popperStyles} open={allowInfographicChoiceIconOpen} placement='right' offsetOptions={10} reference={self.allowSearchInfoRef} toggle={() => { self.updateState( 'allowInfographicChoiceIconOpen', false ) }} >
                                      <h5>{self.localeString( 'allowInfographicChoice' )}</h5>
                                      <p>{self.localeString( 'allowInfographicInfo' )}</p>

                                    </Popper>
                                  </Button>
                                </React.Fragment>
                              }>
                                <Switch className='can-x-switch' data-key='workflowEnableInfographicChoice' checked={workflowEnableInfographicChoice} onChange={e => { self.onToggleInfographicChoice( e.target.checked ) }} />
                              </SettingRow >
                              {/*TODO: change to report list string*/}
                              <div style={{ color: '#b8b8b8' }}>
                                {workflowEnableInfographicChoice ? self.localeString( 'allowInfographicChoiceDesc' ) : self.localeString( 'selectAnInfographic' )}
                              </div>
                              {
                                workflowEnableInfographicChoice &&
                                <React.Fragment>
                                  <SettingRow>
                                    <Checkbox style={{ cursor: 'pointer' }} className='mr-2' checked={workflowIntroTextReportCheckbox} onChange={e => { self.onPropertyChange( 'workflowIntroTextReportCheckbox', e.target.checked ) }} />
                                    <span style={{ color: '#d0d0d0' }}>{self.localeString( 'introTextCheckbox' )}</span>
                                  </SettingRow>
                                  <TextArea className='w-100 mt-2' spellCheck={true} height={80} value={workflowIntroTextReports} onChange={e => { self.onPropertyChange( 'workflowIntroTextReports', e.target.value ) }} />
                                </React.Fragment>
                              }
                              <SettingRow className='mt-6 pb-2' label={self.localeString( 'selectInfographics' )} />
                              <img id={id + '_loading-infos'} src={require( '../runtime/assets/largeBusy.gif' )} style={infographicsLoadingSpinner}></img>
                              {
                                workflowEnableInfographicChoice
                                  ? (
                                    <ArcgisReportList
                                      id={id + '_wf-reports'}
                                      baStateId={this._baAppStateId}
                                      env={jimuCfg.hostEnv}
                                      geoenrichmentUrl={self.state.geoenrichmentServiceUrl ? self.state.geoenrichmentServiceUrl : null}
                                      portalUrl={self.state.portalUrl ? self.state.portalUrl : null}
                                      username={user.username}
                                      token={token}
                                      colors={self.stringifyTheme()}
                                      sourceCountry={sourceCountry}
                                      hierarchy={selectedHierarchyObj?.ID}
                                      langCode={langCode}
                                      showCheckboxes={true}
                                      selectedReportId={workflowSelectedReport}
                                      reportList={JSON.stringify( reportList )}
                                      style={{ width: '100%', marginTop: '-42px' }}
                                      onReportSelected={ev => { self.reportSelectedHandler( ev ) }}
                                      onReportChecked={ev => { self.reportCheckedHandler( ev ) }}
                                      onAccordionInit={ev => { self.accordionInitHandler( ev ) }}
                                      readyCallback={( elem ) => { self.onElementReady.bind( self )( elem ) }} />
                                  )
                                  : (
                                    <ArcgisReportList
                                      id={id + '_wf-reports'}
                                      baStateId={this._baAppStateId}
                                      env={jimuCfg.hostEnv}
                                      username={user.username}
                                      token={token}
                                      geoenrichmentUrl={self.state.geoenrichmentServiceUrl ? self.state.geoenrichmentServiceUrl : null}
                                      portalUrl={self.state.portalUrl ? self.state.portalUrl : null}
                                      colors={self.stringifyTheme()}
                                      selectedReportId={workflowSelectedReport}
                                      showCheckboxes={false}
                                      sourceCountry={sourceCountry}
                                      hierarchy={selectedHierarchyObj?.ID}
                                      langCode={langCode}
                                      style={{ width: '100%', marginTop: '-42px' }}
                                      onReportSelected={ev => { self.reportSelectedHandler( ev ) }}
                                      onReportChecked={ev => { self.reportCheckedHandler( ev ) }}
                                      readyCallback={( elem ) => { self.onElementReady.bind( self )( elem ) }} />
                                  )
                              }

                              {/* Choose Default Infographic */}

                              {
                                workflowEnableInfographicChoice
                                  ? (
                                    <div>

                                      <SettingRow className='mt-6 pb-2' label={self.localeString( 'defaultInfographic' )} />

                                      {
                                        self.getDefaultReport() !== undefined
                                          ? (
                                            <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={( e ) => { onClickSelectDefaultReport( e ) }}>
                                              <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'center', justifyContent: 'end', flexDirection: 'column' }}>
                                                {self.getDefaultReportLabel()}
                                              </div>

                                              <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} onClick={( e ) => { onClickClearDefaultReport( e ) }} title={self.localeString( 'clearDefaultInfographic' )}>
                                                <Icon size='s' icon={CloseOutlined} />
                                              </span>
                                            </Button>
                                          )
                                          : (
                                            <Button type='tertiary' className='unselectedStateButtonDashed' onClick={( e ) => { onClickSelectDefaultReport( e ) }}>
                                              {self.getDefaultReportLabel()}
                                            </Button>
                                          )
                                      }
                                      <ArcgisReportList
                                        id={id + '_def-selected-reports'}
                                        baStateId={this._baAppStateId}
                                        env={jimuCfg.hostEnv}
                                        username={user.username}
                                        token={token}
                                        expandOne={true}
                                        geoenrichmentUrl={self.state.geoenrichmentServiceUrl ? self.state.geoenrichmentServiceUrl : null}
                                        portalUrl={self.state.portalUrl ? self.state.portalUrl : null}
                                        colors={self.stringifyTheme()}
                                        showCheckboxes={false}
                                        selectedReportId={self.getDefaultReport()?.id || workflowSelectedReport}
                                        reportList={JSON.stringify( self._checkedItemsList )}
                                        sourceCountry={sourceCountry}
                                        langCode={langCode}
                                        onReportSelected={ev => { self.onSettingsDefaultReportSelected( ev ) }}
                                        style={{ width: '100%', display: 'none', minHeight: '100px', marginTop: '-32px' }}
                                        readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                                      />
                                    </div > )
                                  : ( '' )
                              }

                              <SettingRow className='mt-5'>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                                    <span style={{ color: 'var(--sys-color-surface-paperText)' }}>{self.localeString( 'exportDirectly' )}</span>
                                    <Button
                                      type='tertiary'
                                      className='widget-help-btn'
                                      icon
                                      size='sm'
                                      onClick={() => { self.updateState( 'exportDirectlyInfoIconOpen', !exportDirectlyInfoIconOpen ) }}
                                      onMouseEnter={() => { self.updateState( 'exportDirectlyInfoIconOpen', true ) }}
                                      onMouseLeave={() => { self.updateState( 'exportDirectlyInfoIconOpen', false ) }}
                                      ref={self.exportDirectlyInfoRef as React.RefObject<HTMLButtonElement>}
                                    >
                                      <InfoOutlined />
                                      <span className='sr-only'>{self.localeString( 'exportDirectlyInfo' )}</span>
                                      <Popper
                                        arrowOptions
                                        css={popperStyles}
                                        open={exportDirectlyInfoIconOpen}
                                        placement='right'
                                        offsetOptions={10}
                                        reference={self.exportDirectlyInfoRef}
                                        toggle={() => { self.updateState( 'exportDirectlyInfoIconOpen', false ) }}
                                      >
                                        <p>{self.localeString( 'exportDirectlyInfo' )}</p>
                                      </Popper>
                                    </Button>
                                  </span>
                                  <Switch
                                    className='can-x-switch'
                                    checked={!!exportDirectly}
                                    onChange={() => { onToggleExportDirectly() }}
                                  />
                                </div>
                              </SettingRow>

                              <div className='mt-5' style={infographicSettingsPanelStyle}>
                                <CollapsablePanel
                                  label={self.localeString( exportDirectly ? 'exportSettings' : 'infographicSettings' )}
                                  isOpen={workflowInfographicSettingsOpen}
                                  onRequestOpen={() => { self.updateState( 'workflowInfographicSettingsOpen', true ) }}
                                  onRequestClose={() => { self.updateState( 'workflowInfographicSettingsOpen', false ) }}
                                >
                                  {renderWorkflowInfographicSettingsContent()}
                                </CollapsablePanel>
                              </div>
                            </div >
                          </div >
                        </SidePopper >
                      )
                    }
                  </CollapsablePanel>
                </SettingSection >
            }

            {
              widgetMode === Mode.Preset && this.enableCachedInfographics ?
                // Cached Infographic - - - - - - - - - - - - - - - - - - - - -
                <SettingSection>
                  <CollapsablePanel
                    label={cacheInfographicLabel}
                    isOpen={widgetMode === Mode.Preset ? presetCachingOpen : workflowGeneralOpen}
                    onRequestOpen={() => {
                      if ( widgetMode === Mode.Preset ) {
                        self.updateState( 'presetCachingOpen', true )
                      }
                    }}
                    onRequestClose={() => {
                      if ( widgetMode === Mode.Preset ) {
                        self.updateState( 'presetCachingOpen', false )
                      }
                    }}
                  >
                    <SettingRow>
                      {/* Cache settings button */}
                      {this.isValidCachedObject() ?
                        < Button className='w-100 d-flex selectedStateButton btn-tertiary' style={{ flex: '1 1 auto', alignItems: 'stretch' }}
                          onClick={() => { self.toggleSidePopper( 'presetCachedInfographicSidePopper' ) }} >
                          <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                            <Icon size='l' icon={ChartColumnOutlined} />
                          </div>
                          <div className='d-flex' style={{ flex: '1 1 auto', width: '100%', marginLeft: '4px', textAlign: 'left', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ width: '100%' }}>{this.props.config.presetCachedInfographicObject?.report}</div>
                            <div style={{ width: '100%' }}>{this.props.config.presetCachedInfographicObject?.name}</div>
                          </div>
                        </Button>
                        : cachedInfographicDisplayName && this.isCachingReady()
                          ? <Button type='tertiary' className='unselectedStateButtonDashed' style={{ flex: '1 1 auto', alignItems: 'stretch', marginTop: '12px', textAlign: 'center', justifyContent: 'end', flexDirection: 'column', border: '1px dashed var(--sys-color-divider-primary)' }} onClick={() => { self.toggleSidePopper( 'presetCachedInfographicSidePopper' ) }} >
                            {/* <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'center', justifyContent: 'end', flexDirection: 'column' }}> */}
                            {cachedInfographicDisplayName}
                            {/* </div> */}
                          </Button>
                          : <Button
                            type='tertiary'
                            className='unselectedStateButtonDashed'
                            style={{ flex: '1 1 auto', textAlign: 'center', marginTop: '12px', justifyContent: 'end', flexDirection: 'column', border: '1px dashed var(--sys-color-divider-primary)' }}
                            disabled={true}
                            onClick={() => { self.toggleSidePopper( 'presetCachedInfographicSidePopper' ) }} >
                            {cachedInfographicDisplayName}
                          </Button>
                      }
                    </SettingRow>
                    {
                      presetCachedInfographicSidePopper &&
                      <SidePopper isOpen title={this.localeString( 'presetCacheInfographicButtonLabel' )} position='right' toggle={() => { self.toggleSidePopper( 'presetCachedInfographicSidePopper' ) }} trigger={self.sidePopperTrigger?.current}>
                        {/* ---- CACHED INFOGRAPHIC SIDE POPPER CONTENT ---- */}

                        {self.renderCacheInfographicPopperContent()}
                      </SidePopper>
                    }

                  </CollapsablePanel>
                </SettingSection> :
                <div></div>
            }

            {
              widgetMode === Mode.Preset
                ? <SettingSection className='geo-utility-section'>
                  <CollapsablePanel
                    label={self.localeString( 'geoEnrichment' )}
                    isOpen={presetGeoEnrichmentOpen}
                    onRequestOpen={() => {
                      self.updateState( 'presetGeoEnrichmentOpen', true )
                    }}
                    onRequestClose={() => {
                      self.updateState( 'presetGeoEnrichmentOpen', false )
                    }}
                  >
                    <div className='mt-3'>
                      {selectedGeoenrichmentUtility
                        ? (
                          <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={( e ) => { e.preventDefault() }}>
                            <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                              <div style={{ width: '1.5rem', height: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--sys-color-info-main)' }}>
                                <GeoenrichmentFilled color='var(--sys-color-action-text)' />
                              </div>
                            </div>
                            <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column', paddingLeft: '8px' }}>
                              {selectedGeoenrichmentUtilityLabel}
                            </div>
                            <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearSearch' )} onClick={( e ) => { self.clearGeoenrichmentSelection( e ) }}>
                              <Icon size='s' icon={CloseOutlined} />
                            </span>
                          </Button>
                        )
                        : (
                          <UtilitySelector
                            useUtilities={Immutable( self.props.config.geoenrichmentConfig?.useUtility ? [self.props.config.geoenrichmentConfig.useUtility] : [] )}
                            onChange={self.onGeoenrichmentUtilityChange}
                            showRemove={false}
                            closePopupOnSelect
                            types={supportedUtilityTypes}
                          />
                        )}
                    </div>
                  </CollapsablePanel>
                </SettingSection>
                : <SettingSection className='geo-utility-section'>
                  <CollapsablePanel
                    label={self.localeString( 'geoEnrichment' )}
                    isOpen={workflowGeoEnrichmentOpen}
                    onRequestOpen={() => {
                      self.updateState( 'workflowGeoEnrichmentOpen', true )
                    }}
                    onRequestClose={() => {
                      self.updateState( 'workflowGeoEnrichmentOpen', false )
                    }}
                  >
                    <div className='mt-3'>
                      {selectedGeoenrichmentUtility
                        ? (
                          <Button className='w-100 d-flex selectedStateButton' style={{ flex: '1 1 auto', alignItems: 'stretch' }} onClick={( e ) => { e.preventDefault() }}>
                            <div className='d-flex' style={{ flex: '0 1 auto', alignItems: 'center' }}>
                              <div style={{ width: '1.5rem', height: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--sys-color-info-main)' }}>
                                <GeoenrichmentFilled color='var(--sys-color-action-text)' />
                              </div>
                            </div>
                            <div className='d-flex' style={{ flex: '1 1 auto', textAlign: 'left', justifyContent: 'end', flexDirection: 'column', paddingLeft: '8px' }}>
                              {selectedGeoenrichmentUtilityLabel}
                            </div>
                            <span className='d-flex justify-content-center' style={{ margin: 'auto 0', alignItems: 'right' }} title={self.localeString( 'clearSearch' )} onClick={( e ) => { self.clearGeoenrichmentSelection( e ) }}>
                              <Icon size='s' icon={CloseOutlined} />
                            </span>
                          </Button>
                        )
                        : (
                          <UtilitySelector
                            useUtilities={Immutable( self.props.config.geoenrichmentConfig?.useUtility ? [self.props.config.geoenrichmentConfig.useUtility] : [] )}
                            onChange={self.onGeoenrichmentUtilityChange}
                            showRemove={false}
                            closePopupOnSelect
                            types={supportedUtilityTypes}
                          />
                        )}
                    </div>
                  </CollapsablePanel>
                </SettingSection>
            }
            {/*
            {
              widgetMode === Mode.Preset &&
              <SettingSection className='geo-utility-section geo-coding-section'>
                <CollapsablePanel
                  label={self.localeString( 'geocoding' )}
                  isOpen={presetGeoCodingOpen}
                  onRequestOpen={() => {
                    self.updateState( 'presetGeoCodingOpen', true )
                  }}
                  onRequestClose={() => {
                    self.updateState( 'presetGeoCodingOpen', false )
                  }}
                >
                  <UtilitySelector
                    useUtilities={Immutable( self.props.config.geocodingConfig?.useUtility ? [self.props.config.geocodingConfig.useUtility] : [] )}
                    onChange={self.onGeocodingUtilityChange}
                    showRemove={false}
                    closePopupOnSelect
                    types={supportedGeocodingUtilityTypes}
                  />
                </CollapsablePanel>
              </SettingSection>
            }
            */}
          </div >
        </div >
      </div >
    )
  }
}
