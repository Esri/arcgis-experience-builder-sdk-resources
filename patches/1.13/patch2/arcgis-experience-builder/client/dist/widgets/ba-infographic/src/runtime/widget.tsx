/* eslint-disable multiline-ternary */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable @typescript-eslint/dot-notation */
/** @jsx jsx */

import { React, type AllWidgetProps, getAppStore, jsx, SessionManager, type IMState, type UseUtility, UtilityManager } from 'jimu-core'
import { JimuDraw, JimuDrawCreationMode } from 'jimu-ui/advanced/map'
import { ArcgisInfographic, ArcgisInfographicWorkflow, ArcgisInfographicModal } from '../../node_modules/@arcgis/business-analyst-components/dist/components'
import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol'

import { ACLUtils } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/ACLUtils'
import { getStyle } from './lib/style'
import D from '../utils/dbg-log'
import { Mode } from '../config'
import BAMapActions from './ba-map-actions'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import defaultMessages from './translations/default'
import 'calcite-components' // Needed to pull calcite in for ArcGis* components
//import { CalciteButton, CalciteStepper, CalciteStepperItem, CalciteTabs, CalciteTabNav, CalciteTabTitle, CalciteTab } from 'calcite-components'
import { WidgetPlaceholder, Container, Modal, ModalBody, ModalHeader } from 'jimu-ui'
import baIcon from './assets/BAInfographic20.svg'
// import PinEsriOutlined from 'jimu-icons/svg/outlined/gis/pin-esri.svg'
// import PolygonOutlined from 'jimu-icons/svg/outlined/gis/polygon.svg'
// import CloseOutlined from 'jimu-icons/svg/outlined/editor/close.svg'
import Logz from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/util/src/Logz'
// import { touchDistance } from '@interactjs/utils/pointerUtils'

import Debounce from '../utils/debounce'

export enum InfoBufferType { ring = 'ring', drivetime = 'drivetime', walktime = 'walktime' }
enum BaSearchType { all = '0', locations = '1', boundaries = '2' }

interface ExtraProps {
  browserSizeMode: any
  workflowRuntimeSelectedFeatureObject: any
}

enum Steps {
  Search = 'search',
  Buffers = 'buffers',
  Infographic = 'infographic'
}
enum StepNumber {
  Search = 1,
  Buffers = 2,
  Infographic = 3
}
enum NavButtons {
  Previous = 'previous',
  Next = 'next',
  Infographic = 'infographic'
}

enum MaxBuffers {
  Rings = 1000,
  DriveMinutes = 300,
  DriveMile = 300,
  DriveKm = 482.8,
  WalkMinutes = 300,
  WalkMile = 27,
  WalkKm = 43.45
}

export default class Widget extends React.PureComponent<AllWidgetProps<any> & ExtraProps,
any> {
  private readonly mapActions: BAMapActions
  private jimuMapView: JimuMapView
  syncId: string
  logStyle: string[]
  initializedEvents: any
  workflowId: string
  workflowStepperId: string
  workflowIntroTextReportsRowId: string
  workflowPrevButtonId: string
  workflowModalInfographicId: string
  workflowRunInfographicId: string
  workflowNextButtonId: string
  presetInfographicId: string
  workflowRuntimeSearchId: string
  workflowRuntimeSearchRowId: string
  workflowReportListId: string
  widgetOuterDivId: string
  geoenrichmentServiceUrl: string
  portalOnlineGEProxy: boolean
  searchResultString: string
  hasAcceptedBuffers: boolean
  presetBuffersHaveChanged: boolean
  workflowBuffersDebouncer: Debounce
  workflowBuffersUpdateDelayed: any
  lastSiteObjectType: string
  widgetMapStartingUp: boolean
  getBackgroundColorFromProps: boolean
  addedResizeListener: boolean

  // NOTE: When a new Experience Builder app is created, widget gets called before setting, so any new
  // props.config values here must be defaulted
  constructor (props) {
    super(props)
    Logz.debug = true
    this.getBackgroundColorFromProps = true
    this.addedResizeListener = false

    this.state = {
      baSearchType: props.config.baSearchType,
      numSteps: 0,
      currentStep: StepNumber.Search,
      searchTabStatus: {},
      bufferTabStatus: {},
      nextButtonStatus: { disabled: 'disabled' },
      infographicTabStatus: {},
      infographicTabVisited: false,
      initializedGEUrl: false, // The geoenrichmentServiceUrl needs to initialize asynchronously before rendering widget
      edited: false,
      tabArray: [''],
      stencilPropChangeConnected: null,
      openModal: false,
      infographicOptions: null,
      presetSearchObject: null,
      workflowRuntimeSearchSelectedObject: null,
      workflowRuntimeSelectedReport: null,
      workflowRuntimeBuffer: null,
      showInfographicModal: false,
      containerWindowSizeChanged: null,
      // must use typeof here instead of ACLUtils.isDef as buffers allow null values
      workflowRuntimeRingsBuffer1: typeof props.config.workflowRingsBuffer1 !== 'undefined' ? props.config.workflowRingsBuffer1 : 1,
      workflowRuntimeRingsBuffer2: typeof props.config.workflowRingsBuffer2 !== 'undefined' ? props.config.workflowRingsBuffer2 : 3,
      workflowRuntimeRingsBuffer3: typeof props.config.workflowRingsBuffer3 !== 'undefined' ? props.config.workflowRingsBuffer3 : 5,
      workflowRuntimeRingsBufferUnit: typeof props.config.workflowRingsBufferUnit !== 'undefined' ? props.config.workflowRingsBufferUnit : 'miles',
      workflowRuntimeDrivetimeBuffer1: typeof props.config.workflowDrivetimeBuffer1 !== 'undefined' ? props.config.workflowDrivetimeBuffer1 : 5,
      workflowRuntimeDrivetimeBuffer2: typeof props.config.workflowDrivetimeBuffer2 !== 'undefined' ? props.config.workflowDrivetimeBuffer2 : 10,
      workflowRuntimeDrivetimeBuffer3: typeof props.config.workflowDrivetimeBuffer3 !== 'undefined' ? props.config.workflowDrivetimeBuffer3 : 15,
      workflowRuntimeDrivetimeBufferUnit: typeof props.config.workflowDrivetimeBufferUnit !== 'undefined' ? props.config.workflowDrivetimeBufferUnit : 'minutes',
      workflowRuntimeWalktimeBuffer1: typeof props.config.workflowWalktimeBuffer1 !== 'undefined' ? props.config.workflowWalktimeBuffer1 : 5,
      workflowRuntimeWalktimeBuffer2: typeof props.config.workflowWalktimeBuffer2 !== 'undefined' ? props.config.workflowWalktimeBuffer2 : 10,
      workflowRuntimeWalktimeBuffer3: typeof props.config.workflowWalktimeBuffer3 !== 'undefined' ? props.config.workflowWalktimeBuffer3 : 15,
      workflowRuntimeWalktimeBufferUnit: typeof props.config.workflowWalktimeBufferUnit !== 'undefined' ? props.config.workflowWalktimeBufferUnit : 'minutes',
      workflowSelectedGeographyLevels: undefined,
      selectedCountry: typeof props.config.sourceCountry !== 'undefined' ? props.config.sourceCountry : 'US',
      displayBuffers: undefined,
      spinnerBackgroundColor: undefined,
      maxDriveBuffer: MaxBuffers.DriveMinutes,
      maxWalkBuffer: MaxBuffers.WalkMinutes,
      workflowRuntimeSelectedFeatureObjectFirstTime: !!props.workflowRuntimeSelectedFeatureObject, // Used to signal if a feature has already been selected
      mapViewReady: false,
      portalUrl: props.portalUrl,
      geocodeUrl: props.portalSelf.helperServices && props.portalSelf.helperServices.geocode && props.portalSelf.helperServices.geocode[0].url,
      hasPrivileges: false, // Verify user has geoenrichment and network analysis privileges OR configured to use proxy
      runInfographicConfig: null
    }

    this.workflowId = 'workflow-component-' + this.props.id
    this.workflowStepperId = 'workflow-stepper-' + this.props.id
    this.workflowIntroTextReportsRowId = 'workflowIntroTextReportsRow' + this.props.id
    this.presetInfographicId = 'preset-infographic-' + this.props.id
    this.workflowModalInfographicId = 'workflow-modal-' + this.props.id
    this.workflowRuntimeSearchId = 'workflow-runtime-search-' + this.props.id
    this.workflowRuntimeSearchRowId = 'workflow-runtime-search-row-' + this.props.id
    this.workflowReportListId = 'workflow-report-list-' + this.props.id
    this.widgetOuterDivId = 'widget-outer-div-' + this.props.id

    this.hasAcceptedBuffers = false
    this.presetBuffersHaveChanged = false
    this.initializedEvents = false
    this.widgetMapStartingUp = true
    this.syncId = 'baSync' + Date.now()
    this.logStyle = ['color:yellow;font-size:8pt;', 'color:#ff40ff;font-size:8pt;', 'color:#00aabb;font-size:8pt;']

    // Debouncer for workflow buffer changes
    this.workflowBuffersDebouncer = new Debounce(this)
    this.workflowBuffersUpdateDelayed = this.workflowBuffersDebouncer.debounce(this.updateBufferOptionsAndMap, 6000)

    // debug logging set to true
    D.showDebugConsoleLogs = false

    // Retrieve the Geoenrichment Service URL if configured
    const self = this

    async function getGeoenrichmentServiceUrl () {
      self.geoenrichmentServiceUrl = await self.getUrlOfUseUtility(props.config.geoenrichmentConfig?.useUtility)

      let gePrivilege = false
      let networkAnalysisPrivilege = false

      if (!self.geoenrichmentServiceUrl) {
        self.geoenrichmentServiceUrl = self.props.portalSelf.helperServices && self.props.portalSelf.helperServices.geoenrichment && self.props.portalSelf.helperServices.geoenrichment.url
      }

      // Determine if a Portal proxy is setup for GE service by looking for 'sharing/servers', '/appservices/', or 'usrsvcs/servers'  in path.  If so assume it is pointing to AGO GE service
      self.portalOnlineGEProxy = self.geoenrichmentServiceUrl.includes('sharing/servers') || self.geoenrichmentServiceUrl.includes('/appservices/') || self.geoenrichmentServiceUrl.includes('usrsvcs/servers')

      // Verify user has geoenrichment AND networkanalysis privileges to use widget.  Bypass check GE Online proxy is being used
      if (!self.portalOnlineGEProxy && props.portalSelf.user) {
        const privileges: string[] = props.portalSelf.user?.privileges

        privileges.forEach((privilege: string) => {
          if (privilege === 'premium:user:geoenrichment') {
            gePrivilege = true
          } else if (privilege === 'premium:user:networkanalysis') {
            networkAnalysisPrivilege = true
          }
        })
      } else {
        gePrivilege = true
        networkAnalysisPrivilege = true
      }

      self.updateState('hasPrivileges', gePrivilege && networkAnalysisPrivilege)

      self.updateState('initializedGEUrl', true)
    }

    getGeoenrichmentServiceUrl()
  }

  static mapExtraStateProps = (state: IMState, props: AllWidgetProps<any>): ExtraProps => {
    return {
      browserSizeMode: state.browserSizeMode,
      workflowRuntimeSelectedFeatureObject: props?.mutableStateProps?.workflowRuntimeSelectedFeatureObject
    }
  }

  getKeys (obj: any) {
    let k; const keys = []
    for (k in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(k)) {
        keys.push(k)
      }
    }
    return keys
  }

  shallowObjectComparisonAreEqual (obj1, obj2) {
    if (!obj1 && !obj2) return true
    if ((!obj1 && obj2) || (!obj2 && obj1)) return false
    const keys1 = this.getKeys(obj1)
    const keys2 = this.getKeys(obj2)

    return keys1.length === keys2.length &&
      keys1.every((key) => {
        const hasProp = Object.prototype.hasOwnProperty.call(obj2, key)
        if (!hasProp) return false
        // object props compare true if they are both objects (shallow)
        if (typeof obj1[key] === 'object') {
          return (obj2[key] && typeof obj2[key] === 'object')
        } else {
          return (hasProp && obj1[key] === obj2[key])
        }
      })
  }

  preloadData () {
    this.buildInfographicOptions()
    this.addEventListeners()
    this.countSteps()
    this.initDefaultTab()
    this.initDefaultBufferTab()
  }

  loadPresetSearch () {
    const { presetSearchSelectedObject, workflowSearchSelectedObject } = this.props.config

    if (presetSearchSelectedObject || workflowSearchSelectedObject) {
      this.onSiteObjectChanged({ origin: 'settingsPreset', data: presetSearchSelectedObject || workflowSearchSelectedObject })
    }
  }

  initDefaultTab () {
    /** IMPORTANT: Makes sure the UI is updated */
    requestAnimationFrame(() => {
      const stepper: any = document.getElementById(this.workflowStepperId)

      this.disableStepperTabs()

      this.stepGoTo(stepper, StepNumber.Search)
    })
  }

  initDefaultBufferTab (force = false) {
    requestAnimationFrame(() => {
      const { workflowAvailableBufferRings, workflowAvailableBufferDrivetime, workflowAvailableBufferWalktime, workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3 } = this.props.config
      const workflowBuffersArray = this.getWorkflowBuffers()
      if (ACLUtils.notDef(workflowBuffersArray.buffer) || force) {
        if (ACLUtils.isDef(workflowAvailableBufferRings) && workflowAvailableBufferRings) {
          this.updateWorkflowBufferState('workflowRuntimeBuffer', InfoBufferType.ring)
          this.handleWorkflowBufferChange('workflowRuntimeRingsBuffer1', workflowRingsBuffer1, InfoBufferType.ring)
          this.handleWorkflowBufferChange('workflowRuntimeRingsBuffer2', workflowRingsBuffer2, InfoBufferType.ring)
          this.handleWorkflowBufferChange('workflowRuntimeRingsBuffer3', workflowRingsBuffer3, InfoBufferType.ring)
        } else if (ACLUtils.isDef(workflowAvailableBufferDrivetime) && workflowAvailableBufferDrivetime) {
          this.updateWorkflowBufferState('workflowRuntimeBuffer', InfoBufferType.drivetime)
        } else if (ACLUtils.isDef(workflowAvailableBufferWalktime) && workflowAvailableBufferWalktime) {
          this.updateWorkflowBufferState('workflowRuntimeBuffer', InfoBufferType.walktime)
        }
      }
    })
  }

  initDefaultBufferVal (propName, val, bufferType) {
    requestAnimationFrame(() => {
      const { [propName]: name } = this.props.config
      if (ACLUtils.notDef(name)) {
        this.handleWorkflowBufferChange(propName, val, bufferType)
      }
    })
  }

  disableStepperTabs () {
    const stepper: any = document.getElementById(this.workflowStepperId)
    const self = this

    const _disableStepperTabs = () => {
      for (let ii = 1; ii <= 3; ii++) {
        const id = this.workflowStepperId + '-' + ii
        const stepperItem = document.getElementById(id)
        // Disable clicking on the stepper tabs
        const header = ACLUtils.queryElement.call(self, '.stepper-item-header', stepperItem)
        if (header) { header.style['pointer-events'] = 'none' }
      }
    }

    if (stepper && stepper['s-p'].length > 0) {
      Promise.all(stepper['s-p']).then(
        () => {
          _disableStepperTabs()
        })
    } else {
      _disableStepperTabs()
    }
  }

  componentWillMount () {
    const { baSearchType } = this.props.config

    // sync searchType
    if (this.state.baSearchType !== baSearchType) {
      const t = typeof baSearchType === 'undefined' ? BaSearchType.all : baSearchType
      this.updateState('baSearchType', t)
    }
    const session = SessionManager.getInstance().getMainSession()
    if (!session) {
      this.promptSignIn()
    }
    D.log(window.jimuConfig.hostEnv)
    D.log(this.props.user?.username)
    D.log(this.props.token)
  }

  componentDidMount () {
    this.preloadData()
  }

  // prev => previous 'props.config'
  presetBufferSettingsHasChanged (prev) {
    const { presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3, presetRingsBufferUnit } = this.props.config
    const { presetDrivetimeBuffer1, presetDrivetimeBuffer2, presetDrivetimeBuffer3, presetDrivetimeBufferUnit } = this.props.config
    const { presetWalktimeBuffer1, presetWalktimeBuffer2, presetWalktimeBuffer3, presetWalktimeBufferUnit } = this.props.config

    // Handle case when widget is initiated before props are set in settings
    if (typeof prev.presetBuffer === 'undefined') return false

    if (prev.presetBuffer !== presetBuffer) return true
    if (prev.presetRingsBuffer1 !== presetRingsBuffer1) return true
    if (prev.presetRingsBuffer2 !== presetRingsBuffer2) return true
    if (prev.presetRingsBuffer3 !== presetRingsBuffer3) return true
    if (prev.presetDrivetimeBuffer1 !== presetDrivetimeBuffer1) return true
    if (prev.presetDrivetimeBuffer2 !== presetDrivetimeBuffer2) return true
    if (prev.presetDrivetimeBuffer3 !== presetDrivetimeBuffer3) return true
    if (prev.presetWalktimeBuffer1 !== presetWalktimeBuffer1) return true
    if (prev.presetWalktimeBuffer2 !== presetWalktimeBuffer2) return true
    if (prev.presetWalktimeBuffer3 !== presetWalktimeBuffer3) return true
    if (prev.presetRingsBufferUnit !== presetRingsBufferUnit) return true
    if (prev.presetDrivetimeBufferUnit !== presetDrivetimeBufferUnit) return true
    if (prev.presetWalktimeBufferUnit !== presetWalktimeBufferUnit) return true
    return false
  }

  updateBufferOptionsAndMap () {
    const { workflowEnableSearch, workflowSearchSelectedObject } = this.props.config
    const { workflowRuntimeSearchSelectedObject } = this.state

    const options = this.buildInfographicOptions(true)

    const searchObj = ACLUtils.isDef(workflowRuntimeSearchSelectedObject) ? JSON.parse(workflowRuntimeSearchSelectedObject) : !workflowEnableSearch && ACLUtils.isDef(workflowSearchSelectedObject) ? JSON.parse(workflowSearchSelectedObject) : undefined
    if (searchObj && this.mapActions) {
      // render map location and buffers
      const data = {
        lat: searchObj.lat,
        lon: searchObj.lon,
        bufferType: options.type,
        bufferUnits: options.bufferUnits,
        bufferSizes: options.bufferSizes
      }
      this.mapActions.renderLocation(data)
    }
  }

  updateWorkflowBufferState (name: string, value: any) {
    // updates the state related to a workflow buffer setting immediately, but
    // when that is done it updates the options and map (if available) using debouncer
    this.updateState(name, value, this.workflowBuffersUpdateDelayed())
  }

  handleWorkflowBufferChange (name: string, value: any, bufferType: any) {
    this.updateWorkflowBufferState(name, value)
    if (name === 'workflowRuntimeDrivetimeBufferUnit' || name === 'workflowRuntimeWalktimeBufferUnit') {
      this.setMaxBuffers(bufferType, value)
    } else {
      this.setMaxBuffers(bufferType)
    }
  }

  // Max values based on limitations of GE
  // Drive time (minutes): 300
  // Drive time (miles): 300
  // Drive time (km): 482.8
  // Walk time (minutes): 540
  // Walk time (miles): 27
  // Walk time (km): 43.45

  setMaxBuffers (bufferType, bufferUnit = null) {
    const { workflowRuntimeDrivetimeBufferUnit, workflowRuntimeWalktimeBufferUnit } = this.state
    const useUnit = ACLUtils.isDef(bufferUnit) ? bufferUnit : bufferType === InfoBufferType.drivetime ? workflowRuntimeDrivetimeBufferUnit : workflowRuntimeWalktimeBufferUnit

    if ((bufferType === InfoBufferType.drivetime) && ACLUtils.isDef(useUnit)) {
      if (useUnit === 'minutes') {
        this.updateState('maxDriveBuffer', MaxBuffers.DriveMinutes)
        this.enforceMax(InfoBufferType.drivetime, MaxBuffers.DriveMinutes)
      } else if (useUnit === 'miles') {
        this.updateState('maxDriveBuffer', MaxBuffers.DriveMile)
        this.enforceMax(InfoBufferType.drivetime, MaxBuffers.DriveMile)
      } else if (useUnit === 'kilometers') {
        this.updateState('maxDriveBuffer', MaxBuffers.DriveKm)
        this.enforceMax(InfoBufferType.drivetime, MaxBuffers.DriveKm)
      }
    }
    if ((bufferType === InfoBufferType.walktime) && ACLUtils.isDef(useUnit)) {
      if (useUnit === 'minutes') {
        this.updateState('maxWalkBuffer', MaxBuffers.WalkMinutes)
        this.enforceMax(InfoBufferType.walktime, MaxBuffers.WalkMinutes)
      } else if (useUnit === 'miles') {
        this.updateState('maxWalkBuffer', MaxBuffers.WalkMile)
        this.enforceMax(InfoBufferType.walktime, MaxBuffers.WalkMile)
      } else if (useUnit === 'kilometers') {
        this.updateState('maxWalkBuffer', MaxBuffers.WalkKm)
        this.enforceMax(InfoBufferType.walktime, MaxBuffers.WalkKm)
      }
    }
  }

  enforceMax (bufferType, max) {
    const { workflowRuntimeDrivetimeBuffer1, workflowRuntimeDrivetimeBuffer2, workflowRuntimeDrivetimeBuffer3, workflowRuntimeWalktimeBuffer1, workflowRuntimeWalktimeBuffer2, workflowRuntimeWalktimeBuffer3 } = this.state

    if (bufferType === InfoBufferType.drivetime) {
      if (workflowRuntimeDrivetimeBuffer1 > max) this.updateState('workflowRuntimeDrivetimeBuffer1', max)
      if (workflowRuntimeDrivetimeBuffer2 > max) this.updateState('workflowRuntimeDrivetimeBuffer2', max)
      if (workflowRuntimeDrivetimeBuffer3 > max) this.updateState('workflowRuntimeDrivetimeBuffer3', max)
    } else if (bufferType === InfoBufferType.walktime) {
      if (workflowRuntimeWalktimeBuffer1 > max) this.updateState('workflowRuntimeWalktimeBuffer1', max)
      if (workflowRuntimeWalktimeBuffer2 > max) this.updateState('workflowRuntimeWalktimeBuffer2', max)
      if (workflowRuntimeWalktimeBuffer3 > max) this.updateState('workflowRuntimeWalktimeBuffer3', max)
    }
  }

  getWorkflowBuffers () {
    const { workflowEnableUserConfigBuffers, workflowBuffer, workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3, workflowRingsBufferUnit, workflowDrivetimeBuffer1, workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowDrivetimeBufferUnit, workflowWalktimeBuffer1, workflowWalktimeBuffer2, workflowWalktimeBuffer3, workflowWalktimeBufferUnit } = this.props.config
    const { workflowRuntimeBuffer, workflowRuntimeRingsBuffer1, workflowRuntimeRingsBuffer2, workflowRuntimeRingsBuffer3, workflowRuntimeRingsBufferUnit, workflowRuntimeDrivetimeBuffer1, workflowRuntimeDrivetimeBuffer2, workflowRuntimeDrivetimeBuffer3, workflowRuntimeDrivetimeBufferUnit, workflowRuntimeWalktimeBuffer1, workflowRuntimeWalktimeBuffer2, workflowRuntimeWalktimeBuffer3, workflowRuntimeWalktimeBufferUnit } = this.state
    let workflowBufferArray
    if (ACLUtils.isDef(workflowEnableUserConfigBuffers) && workflowEnableUserConfigBuffers === false) {
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

  addResizeListener () {
    const self = this
    if (!this.addedResizeListener) {
      const outer = document.getElementById(self.widgetOuterDivId)
      if (outer) {
        this.addedResizeListener = true
        const resizeOb = new ResizeObserver(function (entries) {
          //self.updateState('containerWindowSizeChanged', new Date().getTime().toString())
          self.setHeightInfographicTree()
        })
        resizeOb.observe(outer)
      }
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const self = this

    const { workflowEnableSearch, workflowEnableUserConfigBuffers, workflowEnableInfographicChoice, workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3, workflowDrivetimeBuffer1, workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowWalktimeBuffer1, workflowWalktimeBuffer2, workflowWalktimeBuffer3, workflowRingsBufferUnit, workflowDrivetimeBufferUnit, workflowWalktimeBufferUnit } = self.props.config
    const { widgetMode, sourceCountry, baSearchType, runReportOnClick, reportList, igBackgroundColor, selectedGeographyLevels } = self.props.config
    const { workflowSearchSelectedObject, presetSearchSelectedObject, workflowAvailableBufferRings, workflowAvailableBufferDrivetime, workflowAvailableBufferWalktime } = self.props.config
    const { stencilPropChangeConnected, selectedCountry, showInfographicModal, currentStep, workflowRuntimeSearchSelectedObject, workflowRuntimeSelectedFeatureObjectFirstTime, workflowRuntimeBuffer } = self.state
    const { workflowRuntimeSelectedFeatureObject, user, token } = this.props

    const langCode = getAppStore().getState().appContext.locale || 'en'

    if (self.props.config !== prevProps.config) {
      self.preloadData()
    }
    if (this.state.baSearchType !== baSearchType) {
      const t = typeof baSearchType === 'undefined' ? BaSearchType.all : baSearchType
      this.updateState('baSearchType', t)
    }

    if (!this.state.workflowSelectedGeographyLevels ||
      (selectedGeographyLevels && selectedGeographyLevels.length > 0 && (JSON.stringify(this.state.workflowSelectedGeographyLevels) !== JSON.stringify(selectedGeographyLevels)))) {
      const wfElem = ACLUtils.queryElementById.call(self, this.workflowId)
      if (wfElem) {
        wfElem.setActiveLevels(selectedGeographyLevels)
      }
      self.updateState('workflowSelectedGeographyLevels', selectedGeographyLevels)
    }

    //self.updateTabStatusStates()
    self.addResizeListener()
    self.setOverflowVisible()

    if (!stencilPropChangeConnected) {
      const id = '#' + self.props.id
      const elem = document.querySelector(id)
      if (elem) {
        // @ts-expect-error: Unreachable code error
        elem.onPropChange(self.onSettingChanged, self)
        self.updateState('stencilPropChangeConnected', true)
        //self.stencilPropChangeConnected = true
      }
    }
    if (sourceCountry !== selectedCountry) {
      self.updateState('selectedCountry', sourceCountry)
    }

    if (widgetMode === Mode.Workflow) {
      // set buffer tab content selected states
      const ringTabTitle = document.getElementById('tab-title-rings-' + self.props.id)
      const dtTabTitle = document.getElementById('tab-title-drive-' + self.props.id)
      const wtTabTitle = document.getElementById('tab-title-walk-' + self.props.id)
      const ringTab = document.getElementById('tab-rings-' + self.props.id)
      const dtTab = document.getElementById('tab-drive-' + self.props.id)
      const wtTab = document.getElementById('tab-walk-' + self.props.id)
      if (ringTabTitle && dtTabTitle && wtTabTitle && ringTab && dtTab && wtTab) {
        ringTabTitle.removeAttribute('selected')
        dtTabTitle.removeAttribute('selected')
        wtTabTitle.removeAttribute('selected')
        ringTab.removeAttribute('selected')
        dtTab.removeAttribute('selected')
        wtTab.removeAttribute('selected')

        if (workflowRuntimeBuffer === InfoBufferType.ring) {
          ringTabTitle.setAttribute('selected', '')
          ringTab.setAttribute('selected', '')
        } else if (workflowRuntimeBuffer === InfoBufferType.drivetime) {
          dtTabTitle.setAttribute('selected', '')
          dtTab.setAttribute('selected', '')
        } else if (workflowRuntimeBuffer === InfoBufferType.walktime) {
          wtTabTitle.setAttribute('selected', '')
          wtTab.setAttribute('selected', '')
        }
      }

      let showBuffers = true
      const obj = workflowSearchSelectedObject ? JSON.parse(workflowSearchSelectedObject) : undefined
      showBuffers = (!obj || (self.isLocationType(obj.type)))
      self.updateState('displayBuffers', showBuffers)
    }

    // Watch the search object changes so we can update a linked map
    this.presetBuffersHaveChanged = this.presetBuffersHaveChanged || self.presetBufferSettingsHasChanged(prevProps.config)
    const prev = prevProps.config.presetSearchSelectedObject && JSON.parse(prevProps.config.presetSearchSelectedObject)
    const cur = presetSearchSelectedObject && JSON.parse(presetSearchSelectedObject)
    if (!this.shallowObjectComparisonAreEqual(prev, cur) || this.presetBuffersHaveChanged) {
      if (this.presetBuffersHaveChanged || !this.shallowObjectComparisonAreEqual(this.state.presetSearchObject, cur)) {
        self.onSiteObjectChanged({ origin: 'settingsPreset', data: presetSearchSelectedObject })
      }
    }

    if (self.getBackgroundColorFromProps || prevProps.config.igBackgroundColor !== igBackgroundColor) {
      self.getBackgroundColorFromProps = false
      self.updateState('spinnerBackgroundColor', igBackgroundColor)
    }

    if (((prevProps.config.runReportOnClick !== runReportOnClick) || (prevProps.config.widgetMode !== widgetMode)) && self.mapActions) {
      // Only turn on for Preset mode
      self.mapActions.allowMapClicks(widgetMode === Mode.Preset && runReportOnClick)
    }

    if (prevProps.config.workflowSearchSelectedObject !== workflowSearchSelectedObject) {
      // Workflow search results changed
      // TODO: package up the results and pass to onSiteObjectChanged
      self.onSiteObjectChanged({ origin: 'settingsWorkflow', data: workflowSearchSelectedObject })
    }

    if (prevProps.workflowRuntimeSelectedFeatureObject !== workflowRuntimeSelectedFeatureObject || workflowRuntimeSelectedFeatureObjectFirstTime) {
      self.updateState('workflowRuntimeSelectedFeatureObjectFirstTime', false)
      // Workflow search results changed
      self.onMapChanges(workflowRuntimeSelectedFeatureObject, self)
    }

    // Stepper tab change
    const stepper = document.getElementById(self.workflowStepperId) as any
    if (stepper) {
      this.disableStepperTabs()

      // handle modal close event tab sync with our currentStep
      if (prevState.showInfographicModal !== showInfographicModal) {
        if (stepper['s-p'].length > 0) {
          const promise = stepper['s-p'][0] as Promise<any>
          promise.then(
            () => {
              self.stepGoTo(stepper, currentStep)
            })
        }
      }

      const goToFirstStep = (stepper: any) => {
        if (stepper['s-p'].length > 0) {
          const promise = stepper['s-p'][0] as Promise<any>
          promise.then(
            () => {
              self.stepGoTo(stepper, 1)
              self.updateState('currentStep', 1)
            })
        } else {
          self.stepGoTo(stepper, 1)
          self.updateState('currentStep', 1)
        }
      }

      if (prevProps.config.workflowAvailableBufferRings !== workflowAvailableBufferRings || prevProps.config.workflowAvailableBufferDrivetime !== workflowAvailableBufferDrivetime || prevProps.config.workflowAvailableBufferWalktime !== workflowAvailableBufferWalktime) {
        self.initDefaultBufferTab(true)
      }

      if (prevProps.config.workflowRingsBuffer1 !== workflowRingsBuffer1) self.initDefaultBufferVal('workflowRuntimeRingsBuffer1', workflowRingsBuffer1, InfoBufferType.ring)
      if (prevProps.config.workflowRingsBuffer2 !== workflowRingsBuffer2) self.initDefaultBufferVal('workflowRuntimeRingsBuffer2', workflowRingsBuffer2, InfoBufferType.ring)
      if (prevProps.config.workflowRingsBuffer3 !== workflowRingsBuffer3) self.initDefaultBufferVal('workflowRuntimeRingsBuffer3', workflowRingsBuffer3, InfoBufferType.ring)
      if (prevProps.config.workflowDrivetimeBuffer1 !== workflowDrivetimeBuffer1) self.initDefaultBufferVal('workflowRuntimeDrivetimeBuffer1', workflowDrivetimeBuffer1, InfoBufferType.drivetime)
      if (prevProps.config.workflowDrivetimeBuffer2 !== workflowDrivetimeBuffer2) self.initDefaultBufferVal('workflowRuntimeDrivetimeBuffer2', workflowDrivetimeBuffer2, InfoBufferType.drivetime)
      if (prevProps.config.workflowDrivetimeBuffer3 !== workflowDrivetimeBuffer3) self.initDefaultBufferVal('workflowRuntimeDrivetimeBuffer3', workflowDrivetimeBuffer3, InfoBufferType.drivetime)
      if (prevProps.config.workflowWalktimeBuffer1 !== workflowWalktimeBuffer1) self.initDefaultBufferVal('workflowRuntimeWalktimeBuffer1', workflowWalktimeBuffer1, InfoBufferType.walktime)
      if (prevProps.config.workflowWalktimeBuffer1 !== workflowWalktimeBuffer1) self.initDefaultBufferVal('workflowRuntimeWalktimeBuffer2', workflowWalktimeBuffer2, InfoBufferType.walktime)
      if (prevProps.config.workflowWalktimeBuffer1 !== workflowWalktimeBuffer1) self.initDefaultBufferVal('workflowRuntimeWalktimeBuffer3', workflowWalktimeBuffer3, InfoBufferType.walktime)
      if (prevProps.config.workflowRingsBufferUnit !== workflowRingsBufferUnit) self.initDefaultBufferVal('workflowRuntimeRingsBufferUnit', workflowRingsBufferUnit, InfoBufferType.ring)
      if (prevProps.config.workflowDrivetimeBufferUnit !== workflowDrivetimeBufferUnit) self.initDefaultBufferVal('workflowRuntimeDrivetimeBufferUnit', workflowDrivetimeBufferUnit, InfoBufferType.drivetime)
      if (prevProps.config.workflowWalktimeBufferUnit !== workflowWalktimeBufferUnit) self.initDefaultBufferVal('workflowRuntimeWalktimeBufferUnit', workflowWalktimeBufferUnit, InfoBufferType.walktime)

      if (prevState.workflowRuntimeSearchSelectedObject !== workflowRuntimeSearchSelectedObject) {
        if (!this.stepIsVisible(Steps.Search)) {
          goToFirstStep(stepper)
        }
      }

      // Workflow Allow Search was toggled
      if (prevProps.config.workflowEnableSearch !== workflowEnableSearch) {
        goToFirstStep(stepper)
      }

      // Workflow User Configured Buffers was toggled
      if (prevProps.config.workflowEnableUserConfigBuffers !== workflowEnableUserConfigBuffers) {
        goToFirstStep(stepper)
      }

      // Workflow Allow Infographic Choice was toggled
      if (prevProps.config.workflowEnableInfographicChoice !== workflowEnableInfographicChoice) {
        goToFirstStep(stepper)
      }
      // const onStepperTabChanged = (e) => {
      //   // The calcite stepper tab position reported is
      //   // the 0-n based index of visible tabs.  We have
      //   // to convert that to an 1-based index including
      //   // any tab that is currently hidden.
      //   const tabId = e.detail?.position + 1

      //   function _delay () {
      //     if (self.state.currentStep !== tabId) {
      //       self.updateState('currentStep', tabId)
      //     }
      //     self.stepSetContentVisible(tabId)
      //   }
      //   setTimeout(_delay, 0)
      // }
      // stepper.removeEventListener('calciteStepperItemChange', onStepperTabChanged)
      // stepper.addEventListener('calciteStepperItemChange', onStepperTabChanged)
      /*
       * Note on regarding addEventListener with calcite components:
          Adam Tirella said that in React, their component event hookup using
          component element attributes wont work.  They have another library that
          needs to be used to enable the attribute event hookup:

          https://developers.arcgis.com/calcite-design-system/frameworks/#calcite-components-react

          He said they are shipping that library along side of their calcite components Q1
       */
    }
    const searchElem = document.getElementById(self.workflowRuntimeSearchId)

    if (widgetMode === Mode.Workflow) {
      if (searchElem) {
        // @ts-expect-error: Unreachable code error
        searchElem.setColorTheme('light')
        // @ts-expect-error: Unreachable code error
        searchElem.onPropChange(self.onBASearchResultChange, self)
      }
      const reportsElem = document.getElementById(self.workflowReportListId)
      if (reportsElem) {
        // @ts-expect-error: Unreachable code error
        reportsElem.initialize(user.username, token, window.jimuConfig.hostEnv, sourceCountry, langCode, JSON.stringify(reportList))
        return true
      }
      return false
    }
    // }
  }

  // Need to dynamically set the height of the Arcgis Infographic Tree to take into account
  // the intro text.  This needs to be done when the tab is selected as the row then becomes
  // available and can have the height detected
  setHeightInfographicTree () {
    const reportTree = document.getElementById(this.workflowReportListId)

    if (!reportTree) return

    let workflowHt = 150
    let suggestionHeight = 150
    let introReportsRowHeight = 0
    const widgetElem = document.getElementById(this.widgetOuterDivId)
    const introReportsRowElem = document.getElementById(this.workflowIntroTextReportsRowId)
    if (introReportsRowElem && introReportsRowElem.clientHeight > 0) {
      introReportsRowHeight = introReportsRowElem.clientHeight
    }
    if (widgetElem) {
      workflowHt = widgetElem.clientHeight
      if (workflowHt > 220) {
        suggestionHeight = workflowHt - 200
      }
    }
    let reportsHeight = suggestionHeight - introReportsRowHeight + 158

    // Enforce a minimum height, and hide if too small
    if (widgetElem) {
      workflowHt = widgetElem.clientHeight
      if (workflowHt < 175) {
        reportsHeight = 0
      } else if (workflowHt <= 220) {
        reportsHeight = 40
      }
    }

    reportTree.style.setProperty('height', reportsHeight + 'px')
  }

  // Updates states that control tab display type
  // updateTabStatusStates () {
  //   // Be careful what you change in this function as you can easily create an infinite loop with the state management
  //   const { searchTabStatus, bufferTabStatus, infographicTabStatus, infographicTabVisited } = this.state
  //   let canContinue = false

  //   // Update search tab status state  (complete || error)
  //   if (this.hasSearchResult() && searchTabStatus?.complete !== 'complete') {
  //     this.updateState('searchTabStatus', { complete: 'complete' })
  //     this.updateState('nextButtonStatus', { complete: 'complete' })
  //     this.updateState('infographicTabStatus', {})
  //     canContinue = true
  //   } else if (searchTabStatus?.error !== 'error' && searchTabStatus?.complete !== 'complete') {
  //     this.updateState('searchTabStatus', { error: 'error' })
  //   } else if (searchTabStatus?.complete === 'complete') {
  //     canContinue = true
  //   }

  //   // Update buffer tab status state (complete || error || disabled)
  //   if (canContinue) {
  //     let throwError = false
  //     const workflowBuffers = this.getWorkflowBuffers()
  //     switch (workflowBuffers.buffer) {
  //       case InfoBufferType.ring:
  //         if (workflowBuffers.ringsBuffer1 === '' && workflowBuffers.ringsBuffer2 === '' && workflowBuffers.ringsBuffer3 === '') {
  //           throwError = true
  //         }
  //         break
  //       case InfoBufferType.drivetime:
  //         if (workflowBuffers.drivetimeBuffer1 === '' && workflowBuffers.drivetimeBuffer2 === '' && workflowBuffers.drivetimeBuffer3 === '') {
  //           throwError = true
  //         }
  //         break
  //       case InfoBufferType.walktime:
  //         if (workflowBuffers.walktimeBuffer1 === '' && workflowBuffers.walktimeBuffer2 === '' && workflowBuffers.walktimeBuffer3 === '') {
  //           throwError = true
  //         }
  //         break
  //       default:
  //         break
  //     }
  //     if (throwError && bufferTabStatus?.error !== 'error') {
  //       this.updateState('bufferTabStatus', { error: 'error' })
  //     } else if (!throwError && bufferTabStatus?.complete !== 'complete') {
  //       this.updateState('bufferTabStatus', { complete: 'complete' })
  //     }
  //   } else if (bufferTabStatus?.disabled !== 'disabled') {
  //     this.updateState('bufferTabStatus', { disabled: 'disabled' })
  //   }

  //   // Update Infographic Tab status state (complete || error || disabled)
  //   if (canContinue) {
  //     const igData = this.validateInfographicData()
  //     if (igData?.report && infographicTabStatus?.complete !== 'complete') {
  //       this.updateState('infographicTabStatus', { complete: 'complete' })
  //     } else if (infographicTabVisited && infographicTabStatus?.error !== 'error' && infographicTabStatus?.complete !== 'complete') {
  //       this.updateState('infographicTabStatus', { error: 'error' })
  //     }
  //   } else if (infographicTabStatus?.disabled !== 'disabled') {
  //     this.updateState('infographicTabStatus', { disabled: 'disabled' })
  //   }
  // }

  localeString (string) {
    return this.props.intl.formatMessage({
      id: string,
      defaultMessage: defaultMessages[string]
    })
  }

  promptSignIn () {
    SessionManager.getInstance().signIn()
  }

  isLocationType (v) {
    if (typeof v !== 'string') {
      return false
    }
    return (v && (v?.toLowerCase() === 'location' || v?.toLowerCase() === 'point'))
  }

  getLatLon (obj) {
    const results = undefined
    if (obj) {
      if (obj.lat && obj.lon) {
        return { latitude: obj.lat, longitude: obj.lon }
      } else if (obj.latitude && obj.longitude) {
        return { latitude: obj.latitude, longitude: obj.longitude }
      }
    }
    return results
  }

  /** onMapChanges
     *      Handles updates from map actions including
     *      feature click, and search results
     * @param results = { type, latitude, longitude, rings, displayName }
     */
  onMapChanges (results, context) {
    switch (results.type) {
      case 'point': {
        if (context) {
          if (context.onSiteObjectChanged) {
            const obj = { origin: 'mapClick', data: results }
            context.onSiteObjectChanged(obj)
          }
        }
        break
      }
      case 'polygon': {
        if (context) {
          if (context.onSiteObjectChanged) {
            const obj = { origin: 'mapClick', data: results }
            context.onSiteObjectChanged(obj)
          }
        }
        break
      }
    }
  }

  onBASearchResultChange (context: any, stateObj: any) {
    const result = { origin: 'basearch', ctx: context, state: stateObj } as any
    context.onSiteObjectChanged(result)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // onSiteObjectChanged()
  //
  // When we change the location or boundary being used for reports, the
  // notification goes through here.  The call can come from one of these sources:
  //
  //  1) The 'onBASearchResultChange' callback [just above] that comes from arcgis-ba-search OnPropChange
  //  2) A notification from Settings that the search result has changed (using user.props.config)
  //  3) Another source is a direct callback from the map-actions handler when the user clicks
  //     on a linked map, or when the user selects a search result from the embedded
  //     map-search control.
  //
  // In either case, we take the search result and set the state variables,
  // which then triggers another render in the widget.  At the same time,
  // we notify the MapActions that we need to update the buffers or geometry
  // showing on the linked map. The buffer display on the map is dependent on
  // the either 1) workflow settings preset the buffers or 2) in workflow the
  // user has viewed the buffer step and accepted the buffers by clicking Next
  //
  onSiteObjectChanged (result: any) {
    if (!result) return

    const self = this
    self.lastSiteObjectType = result.origin
    let searchObject: any = {}

    switch (result.origin) {
      //
      // arcgis-ba-search RESULTS
      case ('basearch'): {
        // const context = result.ctx
        const stateObj = result.state
        //
        // search results location
        if (self.isLocationType(stateObj.searchResults.type)) {
          const location = self.getLatLon(stateObj.searchResults.location)
          searchObject = {
            type: 'location',
            name: stateObj.searchResults.name,
            address: stateObj.searchResults.address,
            lat: location?.latitude,
            lon: location?.longitude
          }
          if (self.mapActions) {
            // render map location and buffers
            const options = self.buildInfographicOptions(true)
            const data = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: options.type,
              bufferUnits: options.bufferUnits,
              bufferSizes: options.bufferSizes
            }
            self.mapActions.renderLocation(data)
          }
          //
          // search results geography
        } else if (stateObj.searchResults.type === 'geography') {
          const g: any = {
            type: 'polygon',
            rings: stateObj.searchResults.geometry,
            spatial: { wkid: 102100 },
            latitude: 34.055561,
            longitude: -117.182602
          }
          searchObject = {
            type: 'geography',
            name: stateObj.searchResults.title,
            areaId: stateObj.searchResults.areaId,
            geography: {
              sourceCountry: stateObj.searchResults.attributes.CountryAbbr,
              levelId: stateObj.searchResults.attributes.DataLayerID,
              hierarchy: stateObj.searchResults.attributes.Hierarchy,
              id: stateObj.searchResults.areaId,
              attributes: stateObj.searchResults.attributes
            },
            geometry: g
          }
          if (self.mapActions) {
            self.mapActions.renderBoundary(g)
          }
        }
        self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))
        break
      }
      case ('settingsPreset'): {
        if (!result.data) { return }

        const d = JSON.parse(result.data)
        const location = self.getLatLon(d)
        if (self.isLocationType(d.type)) {
          if (self.mapActions) {
            // render map location and buffers
            const options = self.buildInfographicOptions(true)
            const loc = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: options.type,
              bufferUnits: options.bufferUnits,
              bufferSizes: options.bufferSizes
            }
            self.mapActions.renderLocation(loc)
          }
        } else if (d.type === 'geography') {
          if (self.mapActions) {
            const g: any = {
              type: 'polygon',
              rings: d.geometry?.rings,
              spatial: { wkid: 102100 },
              latitude: 34.055561,
              longitude: -117.182602
            }
            self.mapActions.renderBoundary(g)
          }
        }

        self.updateState('workflowRuntimeSearchSelectedObject', null)
        self.updateState('presetSearchObject', d)
        break
      }
      case ('settingsWorkflow'): {
        if (!result?.data) { return }
        const d = JSON.parse(result.data)
        const location = self.getLatLon(d)
        // search results location
        if (self.isLocationType(d.type)) {
          searchObject = {
            type: 'location',
            name: d.name,
            address: d.address,
            lat: location?.latitude,
            lon: location?.longitude
          }
          if (self.mapActions) {
            // render map location and buffers
            const options = self.buildInfographicOptions(true)
            const data = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: options.type,
              bufferUnits: options.bufferUnits,
              bufferSizes: options.bufferSizes
            }
            self.mapActions.renderLocation(data)
          }
          //
          // search results geography
        } else if (d.type === 'geography') {
          const g: any = {
            type: 'polygon',
            rings: d.geometry?.rings,
            spatial: { wkid: 102100 },
            latitude: 34.055561,
            longitude: -117.182602
          }
          searchObject = {
            type: 'geography',
            name: d.areaName,
            areaId: d.areaId,
            geography: d.geography || undefined,
            geometry: g
          }
          if (self.mapActions) {
            self.mapActions.renderBoundary(g)
          }
        }
        self.updateState('presetSearchObject', null)
        self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))
        break
      }
      //
      // MAP WIDGET SEARCH CONTROL results (always a location)
      case ('mapSearch'): {
        if (!result?.data) { return }

        // Resulting data from the embedded map search control is always a
        // location search result, or undefined if cleared
        const d = result.data
        const location = self.getLatLon(d)

        // package the search result for props
        if (self.isLocationType(d.type)) {
          searchObject = {
            type: 'location',
            name: d.displayName,
            address: '',
            lat: location?.latitude,
            lon: location?.longitude
          }
          if (self.props.config.widgetMode === Mode.Preset) {
            //
            // Preset Mode
            // changes using map search only affect the runtime items
            self.updateState('presetSearchObject', d)
            //
          } else {
            //
            // Workflow Mode
            self.updateState('presetSearchObject', null)
            self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))
          }

          if (self.mapActions) {
            // render map location and buffers
            const options = self.buildInfographicOptions(true)
            const data = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: options?.type,
              bufferUnits: options?.bufferUnits,
              bufferSizes: options?.bufferSizes
            }
            self.mapActions.renderLocation(data)
          }
        }
        break
      }
      //
      // USER CLICKED MAP FEATURE
      case ('mapClick'): {
        if (!result?.data) { return }
        /* result contains:
         {
         origin: 'mapClick',
         data: response
         }
         */
        if (result?.data) {
          const location = self.getLatLon(result.data)

          switch (result.data.type) {
            //
            // point feature click
            case ('point'): {
              const mapName = self.localeString('mapFeature')
              const displayName = (result.data.displayName && ACLUtils.hasText(result.data.displayName)) || (ACLUtils.isDef(result.data.displayName) && ACLUtils.isNumber(result.data.displayName)) ? result.data.displayName.toString() : mapName
              const attributes = result.data.attributes ? result.data.attributes : {}

              searchObject = {
                type: 'location',
                name: displayName,
                address: '',
                lat: location?.latitude,
                lon: location?.longitude,
                attributes
              }
              self.updateState('presetSearchObject', null)
              self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))

              if (self.mapActions) {
                // render map location and buffers
                const options = self.buildInfographicOptions(true)
                const data = {
                  lat: location?.latitude,
                  lon: location?.longitude,
                  bufferType: options.type,
                  bufferUnits: options.bufferUnits,
                  bufferSizes: options.bufferSizes
                }
                self.mapActions.renderLocation(data, true)
              }
              break
            }
            //
            // polygon feature click
            case ('polygon'): {
              const mapName = self.localeString('mapFeature')
              const displayName = (result.data.displayName && ACLUtils.hasText(result.data.displayName)) || (ACLUtils.isDef(result.data.displayName) && ACLUtils.isNumber(result.data.displayName)) ? result.data.displayName.toString() : mapName
              const attributes = result.data.attributes ? result.data.attributes : {}
              const rings = result.data.rings
              if (typeof rings !== 'undefined') {
                const dSpatial = result.data.spatial

                const g: any = {
                  type: 'polygon',
                  rings,
                  spatial: dSpatial,
                  latitude: location?.latitude,
                  longitude: location?.longitude
                }
                searchObject = {
                  type: 'geography',
                  name: displayName,
                  areaId: undefined,
                  attributes,
                  geometry: g
                }

                self.updateState('presetSearchObject', null)
                self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))

                if (self.mapActions) {
                  // render map location and buffers
                  const data = {
                    lat: location?.latitude,
                    lon: location?.longitude,
                    geom: g
                  }
                  self.mapActions.renderBoundary(data, true)
                }
              }
              break
            }
            case ('click'): {
              // Resulting data from the embedded map search control is always a
              // location search result, or undefined if cleared
              const d = result.data
              if (!location) return

              // package the search result for props
              searchObject = {
                type: 'location',
                name: d.title,
                address: '',
                lat: location.latitude,
                lon: location.longitude
              }
              if (self.props.config.widgetMode === Mode.Preset) {
                //
                // Preset Mode
                // changes using map search only affect the runtime items
                const presetObj = {
                  displayName: searchObject.name,
                  latitude: searchObject.lat,
                  longitude: searchObject.lon,
                  type: 'point'
                }
                self.updateState('presetSearchObject', presetObj)
                //
              } else {
                //
                // Workflow Mode
                self.updateState('presetSearchObject', null)
                self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))
              }

              if (self.mapActions) {
                // render map location and buffers
                const options = self.buildInfographicOptions(true)
                const data = {
                  lat: location.latitude,
                  lon: location.longitude,
                  bufferType: options?.type,
                  bufferUnits: options?.bufferUnits,
                  bufferSizes: options?.bufferSizes
                }
                self.mapActions.renderLocation(data, true)
              }
              break
            }
          }
        }
        break
      }
      case ('drawnPolygon'): {
        if (result?.data) {
          const rings = result.data.rings
          if (typeof rings !== 'undefined') {
            const g: any = {
              type: 'polygon',
              rings,
              spatial: result.data.spatial,
              latitude: result.data.latitude,
              longitude: result.data.longitude
            }
            searchObject = {
              type: 'geography',
              name: ACLUtils.capitalizeFirst(self.localeString('polygon')),
              areaId: undefined,
              attributes: {},
              geometry: g
            }

            // Added timeout, to prevent draw polygon button from remaining active
            setTimeout(() => {
              self.updateState('presetSearchObject', null)
              self.updateState('workflowRuntimeSearchSelectedObject', JSON.stringify(searchObject))
            }, 100)

            if (self.mapActions) {
              // render map location and buffers
              const data = {
                lat: undefined,
                lon: undefined,
                rings
              }
              self.mapActions.renderBoundary(data)
            }
          }
        }
        break
      }
    }
  }

  // updateState changes the state to the new value, unless the
  // old and new values are the same, then it does nothing
  updateState (name: string, value: any, callback?: any) {
    let isSame: boolean = false

    const before = this.state[name]
    const after = value
    if (typeof this.state[name] === 'object') {
      isSame = this.shallowObjectComparisonAreEqual(before, after)
    } else {
      isSame = before === after
    }
    if (!isSame) {
      this.setState((prevState) => ({
        ...prevState,
        [name]: value
      }), callback)
    }
  }

  activeViewChangeHandler (jmv: JimuMapView, context: any) {
    const self = context
    const forceRender = !this.jimuMapView

    this.jimuMapView = jmv
    if (jmv && jmv.view) {
      jmv.view.when(function (event) {
        // Map interaction setup
        self.mapActions = new BAMapActions(
          context.props.id,
          jmv.mapWidgetId,
          self.showSearch,
          window.jimuConfig.hostEnv,
          self.onMapChanges,
          context,
          self.localeString('find-address-or-place'),
          self.geoenrichmentServiceUrl,
          self.state.geocodeUrl
        )
        if (self.state.bufferSizes) {
          const sSizes = self.state.bufferSizes.split(',')
          const nSizes = []
          for (let ii = 0; ii < sSizes.length; ii++) {
            nSizes[ii] = parseFloat(sSizes[ii])
          }
        }
        // TODO: hook up the state toggle here
        // self.mapActions.allowMapClicks(self.state.runReportOnClick)
        self.mapActions.allowMapClicks(self.props.config.widgetMode === Mode.Preset && self.props.config.runReportOnClick)
        self.mapActions.initialize(jmv.view)

        // Load preset search object location on map
        self.loadPresetSearch()

        if (!self.stencilPropChangeConnected) {
          const id = '#' + self.props.id
          const elem = document.querySelector(id)

          if (elem) {
            // @ts-expect-error: Unreachable code error
            elem.onPropChange(self.onSettingChanged, self.state)
            self.stencilPropChangeConnected = true
          }
        }

        if (forceRender) {
          self.updateState('mapViewReady', true)
        }
      })
    }
  }

  isOkToRenderBuffers () {
    const doPresetRender = this.widgetMapStartingUp
    this.widgetMapStartingUp = false

    return ((this.props.config.widgetMode === Mode.Preset && (doPresetRender || this.lastSiteObjectType === 'mapSearch' || this.presetBuffersHaveChanged || this.lastSiteObjectType === 'mapClick')) ||
    (this.props.config.widgetMode === Mode.Workflow && (!this.stepIsVisible(Steps.Buffers) || this.hasAcceptedBuffers)))
  }

  isEmpty (obj) {
    if (obj == null) return true
    if (obj.length > 0) return false
    if (obj.length === 0) return true
    if (typeof obj === 'number') return false
    if (typeof obj !== 'object') return true
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) return false
    }
    return true
  }

  _igReady (): any {
    const { widgetMode, workflowEnableSearch, workflowSearchSelectedObject, workflowSelectedReport, presetSelectedReport } = this.props.config
    const { workflowRuntimeSearchSelectedObject, workflowRuntimeSelectedReport } = this.state

    function _fail (reason: string) {
      D.log('Config not valid', reason)
      return false
    }
    const vData: any = this.validateInfographicData(false)
    if (!vData) { return _fail('infographic data is not valid') }

    if (widgetMode === Mode.Preset) {
      // const searchObject = vData || (presetSearchObject !== null ? presetSearchObject : workflowRuntimeSearchSelectedObject ? JSON.parse(workflowRuntimeSearchSelectedObject) : undefined)
      // const resultType = (searchObject && searchObject.type) ? searchObject.type : undefined
      const hasReport = ACLUtils.hasText(presetSelectedReport) ? presetSelectedReport : undefined

      if (hasReport === undefined) { return _fail('selected report is undefined') }
      // if (resultType === undefined) { return _fail('location type is undefined') }
      return true
      //
    } else {
      const searchObject = ACLUtils.isDef(workflowRuntimeSearchSelectedObject) ? JSON.parse(workflowRuntimeSearchSelectedObject) : !workflowEnableSearch && ACLUtils.isDef(workflowSearchSelectedObject) ? JSON.parse(workflowSearchSelectedObject) : undefined
      const resultType = (searchObject && searchObject.type) ? searchObject.type : undefined
      // const hasReport = workflowEnableSearch && ACLUtils.hasText(workflowRuntimeSelectedReport) ? workflowRuntimeSelectedReport : !workflowEnableSearch && workflowSelectedReport && ACLUtils.hasText(workflowSelectedReport) ? workflowSelectedReport : undefined
      const hasReport = ACLUtils.hasText(workflowRuntimeSelectedReport) ? workflowRuntimeSelectedReport : workflowSelectedReport && ACLUtils.hasText(workflowSelectedReport) ? workflowSelectedReport : undefined

      if (resultType === 'geography') {
        if (searchObject && searchObject.geometry && hasReport) {
          return true
        } else {
          return _fail('geometry or selected report is undefined')
        }
      } else {
        if (searchObject && hasReport) {
          const location = this.getLatLon(searchObject)
          if (location?.latitude && location?.longitude) { return true } else _fail('lat/lon or selected report is undefined')
        } else {
          return _fail('lat/lon or selected report is undefined')
        }
      }
    }
  }

  _ready (): any {
    const { widgetMode, workflowEnableSearch, workflowSearchSelectedObject, presetSelectedReport } = this.props.config
    const { presetSearchObject } = this.state

    function _fail (reason: string) {
      D.log('Config not valid', reason)
      return false
    }

    if (widgetMode === Mode.Preset) {
      const searchObject = presetSearchObject
      const resultType = (searchObject && searchObject.type) ? searchObject.type : undefined
      const hasReport = ACLUtils.hasText(presetSelectedReport) ? presetSelectedReport : undefined

      if (hasReport === undefined) { return _fail('selected report is undefined') }
      if (resultType === undefined) { return _fail('location type is undefined') }
      return true
    } else {
      //return true
      const searchObject = !workflowEnableSearch && ACLUtils.isDef(workflowSearchSelectedObject) ? JSON.parse(workflowSearchSelectedObject) : undefined
      const resultType = (searchObject && searchObject.type) ? searchObject.type : undefined
      if (searchObject) {
        if (resultType === 'boundary') {
          if (searchObject && searchObject.geometry) {
            return true
          } else {
            return _fail('geometry or selected report is undefined')
          }
        } else {
          if (searchObject) {
            const location = this.getLatLon(searchObject)
            if (location?.latitude && location?.longitude) { return true } else _fail('lat/lon or selected report is undefined')
          } else {
            return _fail('search details are undefined')
          }
        }
      } else if (workflowEnableSearch) {
        return true
      } else {
        return _fail('search object is undefined')
      }
    }
  }

  // getThemeObject () {
  //   return {
  //     // brand: '#00aabbff',
  //     // foreground1: '#181818ff',
  //     // foreground2: '#4a4a4aff',
  //     // text1: '#fafafaff',
  //     // text2: '#a8a8a8ff',
  //     // text3: '#ffffffff',
  //     // border: '#bababaff',
  //     // border2: '#929292ff',
  //     // accordionBackground: '#4a4a4aff',
  //     // accordionForeground: '#a8a8a8ff'
  //   }
  // }

  // stringifyTheme () {
  //   // Theme colors should match ExB
  //   const themeString = this.getThemeObject()
  //   return JSON.stringify(themeString)
  // }

  workflowRunInfographic () {
    if (this._igReady()) {
      // display modal infographic popup
      this.updateState('showInfographicModal', true)
    }
  }

  reportSelectedHandler (ev: any) {
    const { widgetMode, workflowEnableInfographicChoice } = this.props.config

    const report = ev.detail.report || ev.detail

    if (widgetMode === Mode.Workflow && workflowEnableInfographicChoice) {
      this.updateState('workflowRuntimeSelectedReport', report.id)
      this.updateState('workflowRuntimeSelectedReportName', report.name)
    } else if (widgetMode === Mode.Workflow) {
      this.updateState('workflowSelectedReport', report.id)
      this.updateState('workflowSelectedReportName', report.name)
    } else {
      this.updateState('presetSelectedReport', report.id)
      this.updateState('presetSelectedReportName', report.name)
    }
  }

  addEventListeners () {
    const self = this
    if (!this.initializedEvents) {
      this.initializedEvents = true

      // listen to fullscreen button
      window.addEventListener('message', (event) => {
        if (event.data.action === 'fullscreen-enter') {
          //if (event.data.componentId === this.props.id) {
          self.updateState('showInfographicModal', true, self.buildInfographicOptions())
          //}
        } else if (event.data.action === 'fullscreen-exit') {
          //if (event.data.componentId === this.props.id) {
          self.updateState('showInfographicModal', false, self.buildInfographicOptions())
          //}
        }
      })
    }
  }

  buildInfographicOptions (provideResult?: boolean) {
    const { widgetMode, viewMode, displayHeader, zoomLevel, fullscreen, excel, imageExport, pdf, dynamicHtml, igBackgroundColor, headerColor, headerTextColor, runReportOnClick } = this.props.config
    const { presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3, presetRingsBufferUnit, presetDrivetimeBuffer1, presetDrivetimeBuffer2, presetDrivetimeBuffer3, presetDrivetimeBufferUnit, presetWalktimeBuffer1, presetWalktimeBuffer2, presetWalktimeBuffer3, presetWalktimeBufferUnit } = this.props.config
    const { infographicOptions, showInfographicModal } = this.state
    const workflowBuffers = this.getWorkflowBuffers()

    let options = {}; let sharedOptions = {}; let buffer1; let buffer2; let buffer3; let bufferType: InfoBufferType; let units
    const showFullscreen = widgetMode === Mode.Preset && !showInfographicModal ? fullscreen : false
    // const showCloseBtn = !!showInfographicModal
    // const closeBtnCallback = () => this.updateState('showInfographicModal', false)

    let bufferArray = []

    if (widgetMode === Mode.Preset) {
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

    if (!this.isEmpty(buffer1)) {
      bufferArray.push(Number(buffer1))
    }
    if (!this.isEmpty(buffer2)) {
      bufferArray.push(Number(buffer2))
    }
    if (!this.isEmpty(buffer3)) {
      bufferArray.push(Number(buffer3))
    }
    if (bufferArray.length === 0) {
      if (bufferType === InfoBufferType.ring) {
        bufferArray = [1, 3, 5]
      } else {
        bufferArray = [5, 10, 15]
      }
    }

    sharedOptions = {
      bufferSizes: bufferArray,
      viewMode,
      report: {
        showHeader: displayHeader,
        showZoomLevel: !zoomLevel,
        showFullscreen
        // showCloseBtn,
        // closeBtnCallback
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
    function _optionsHasChanged (a, b) {
      if (a && b) {
        if (a.bufferSizes.length === b.bufferSizes.length) {
          for (let ii = 0; ii < a.bufferSizes.length; ii++) {
            if (a.bufferSizes[ii] !== b.bufferSizes[ii]) { return true }
          }
          if (a.bufferType !== b.bufferType) { return true }
          if (a.bufferUnits !== b.bufferUnits) { return true }
          return false
        } else { return true }
      } else { return true }
    }

    const combinedOptions = Object.assign({}, options, sharedOptions)
    if (_optionsHasChanged(infographicOptions, combinedOptions)) {
      this.updateState('infographicOptions', combinedOptions)
    }

    if (typeof provideResult !== 'undefined' && provideResult) {
      return {
        type: bufferType,
        bufferUnits: units,
        bufferSizes: bufferArray,
        infographicOptions: combinedOptions
      }
    }
    return undefined
  }

  // Used by ba-map-actions
  getMapSettings () {
    return {
      bufferSizes: undefined,
      bufferUnits: undefined,
      bufferType: undefined
    }
  }

  countSteps () {
    const { widgetMode, workflowEnableSearch, workflowEnableUserConfigBuffers, workflowEnableInfographicChoice } = this.props.config
    const { numSteps, tabArray, displayBuffers } = this.state
    let newNumSteps = 0
    if (widgetMode === Mode.Workflow) {
      if (workflowEnableSearch) {
        newNumSteps = newNumSteps + 1
        tabArray.push('search')
      }
      if (workflowEnableUserConfigBuffers && displayBuffers) {
        newNumSteps = newNumSteps + 1
        tabArray.push('buffers')
      }
      if (workflowEnableInfographicChoice) {
        newNumSteps = newNumSteps + 1
        tabArray.push('infographics')
      }
      if (numSteps !== newNumSteps) {
        this.updateState('numSteps', newNumSteps)
      }
    }
  }

  resetSteps () {
    const index = this.stepGetFirstVisible()
    if (index > 0) {
      const stepper = document.getElementById(this.workflowStepperId) as any
      if (stepper) {
        //this.stepGoTo(stepper, index)
        const index = this.stepGetFirstVisible()
        this.stepSetContentVisible(index)
      }
    }
  }

  //get url from the selcted utility
  async getUrlOfUseUtility (useUtility: UseUtility): Promise<string> {
    if (!useUtility) {
      return Promise.resolve('')
    }
    return UtilityManager.getInstance().getUrlOfUseUtility(useUtility)
      .then((url) => {
        return Promise.resolve(url)
      })
  }

  getCredentials () {
    const { user, token } = this.props
    return [user.username, token]
  }

  validateInfographicData (announce?: boolean) {
    let reportLoc, searchObj, reportId
    const { selectedCountry, workflowRuntimeSelectedReport, workflowRuntimeSearchSelectedObject, presetSearchObject } = this.state
    const { user, token } = this.props
    const { presetSelectedReport, widgetMode, workflowSearchSelectedObject, workflowSelectedReport, presetSearchSelectedObject, viewMode } = this.props.config
    let logged = false

    const langCode = getAppStore().getState().appContext.locale || 'en'

    const _logErr = (msg) => {
      if (typeof announce !== 'undefined' && announce) {
        if (!logged) {
          logged = true
          console.groupCollapsed('%c BA Widget infographic warning:', 'color:#bf551e;font-size:8pt')
        }
      }
    }

    try {
      if (ACLUtils.hasText(window.jimuConfig.hostEnv)) {
        if (ACLUtils.hasText(user?.username) && ACLUtils.hasText(token)) {
          if (ACLUtils.hasText(selectedCountry) && ACLUtils.hasText(langCode)) {
            //
            if (widgetMode === Mode.Preset) {
              if (ACLUtils.hasText(presetSelectedReport)) {
                reportId = presetSelectedReport
                if (presetSearchObject !== null) {
                  searchObj = presetSearchObject
                } else if (ACLUtils.hasText(workflowRuntimeSearchSelectedObject)) {
                  searchObj = JSON.parse(workflowRuntimeSearchSelectedObject)
                } else if (presetSearchSelectedObject != null) {
                  searchObj = JSON.parse(presetSearchSelectedObject)
                }
              } else {
                _logErr(' missing Preset Report ID')
              }
              if (!searchObj) {
                _logErr(' missing presetSearchObject state')
              }
            } else {
              if (ACLUtils.hasText(workflowRuntimeSelectedReport) || ACLUtils.hasText(workflowSelectedReport)) {
                reportId = ACLUtils.hasText(workflowRuntimeSelectedReport) ? workflowRuntimeSelectedReport : workflowSelectedReport
                if (ACLUtils.isDef(workflowRuntimeSearchSelectedObject)) {
                  searchObj = JSON.parse(workflowRuntimeSearchSelectedObject)
                } else {
                  if (ACLUtils.isDef(workflowSearchSelectedObject)) {
                    searchObj = JSON.parse(workflowSearchSelectedObject)
                  }
                }
                if (!searchObj) {
                  _logErr(' workflow is missing either [workflowRuntimeSearchSelectedObject or workflowSearchSelectedObject]')
                }
              } else {
                _logErr(' missing Workflow Report ID')
              }
            }

            if (ACLUtils.isDef(searchObj)) {
              if (searchObj.type) {
                //
                // Location
                if (this.isLocationType(searchObj.type)) {
                  const location = this.getLatLon(searchObj)
                  if (location?.latitude && location?.longitude) {
                    reportLoc = location.longitude + ', ' + location.latitude

                    const bufferOptions = this.buildInfographicOptions(true)
                    const data = {
                      env: window.jimuConfig.hostEnv,
                      username: user.username,
                      token,
                      locationName: searchObj.name || searchObj.displayName || searchObj.address,
                      country: selectedCountry,
                      langCode,
                      report: reportId,
                      location: reportLoc,
                      buffers: bufferOptions,
                      viewMode,
                      attributes: JSON.stringify(searchObj.attributes ? searchObj.attributes : {})
                    }
                    return data
                  }
                //
                // geography or boundary
                } else if (searchObj.type === 'geography') {
                  const bufferOptions = this.buildInfographicOptions(true)
                  const data: any = {
                    env: window.jimuConfig.hostEnv,
                    username: user.username,
                    token,
                    locationName: searchObj.name,
                    country: selectedCountry,
                    langCode,
                    report: reportId,
                    buffers: bufferOptions,
                    viewMode,
                    attributes: JSON.stringify(searchObj.attributes ? searchObj.attributes : {})
                  }
                  if (searchObj.geography) {
                    data.geography = JSON.stringify(searchObj.geography)
                  }
                  if (searchObj.geometry) {
                    data.geometry = JSON.stringify(searchObj.geometry)
                  }
                  return data
                } else {
                  _logErr(' invalid search result type')
                }
              } else {
                _logErr(' invalid search results type')
              }
            } else {
              _logErr(' missing search results')
            }
          } else {
            _logErr(' missing langCode or country')
          }
        } else {
          _logErr(' missing username/token')
        }
      } else {
        _logErr(' invalid environment')
      }
      console.groupEnd()
    } catch (ex) {
    }
    return undefined
  }

  // - - - - - - - - -
  // Helper functions
  hasSearchResult () {
    return this.state.workflowRuntimeSearchSelectedObject || this.props.config.workflowSearchSelectedObject
  }

  handleDrawEnd (e: any) {
    if (e?.geometry?.type === 'polygon') {
      this.mapActions.onDrawnPolygon(e)
    } else if (e.geometry?.type === 'point') {
      this.mapActions.onDrawnPoint(e)
    }
  }

  // - - - - - - - - -
  // Stepper functions
  //
  // Note: Stepper tabs may be visible/hidden, completed, or active
  //
  // Individual tab visibility
  stepIsVisible (step: string) {
    if (this.props.config.widgetMode !== Mode.Workflow) return false

    switch (step) {
      case (Steps.Search): {
        return this.props.config.workflowEnableSearch
      }
      case (Steps.Buffers): {
        if (!this.props.config.workflowEnableUserConfigBuffers) return false

        const hasSearch = this.hasSearchResult()
        if (!hasSearch) return true

        if (this.state.workflowRuntimeSearchSelectedObject) {
          const obj = JSON.parse(this.state.workflowRuntimeSearchSelectedObject)
          return (obj && this.isLocationType(obj.type))
        } else if (this.props.config.workflowSearchSelectedObject) {
          const obj = JSON.parse(this.props.config.workflowSearchSelectedObject)
          return (obj && this.isLocationType(obj.type))
        } else return false
      }
      case (Steps.Infographic): {
        return this.props.config.workflowEnableInfographicChoice
      }
      default:
        return false
    }
  }

  // Switches focus to the tab number adjusted by tab visibility
  stepGoTo (stepper: any, index: number) {
    if (!stepper || (index < 1 || index > 3)) return
    const self = this
    this.workflowBuffersDebouncer.cancel()

    function _goto (id: number) {
      if (typeof id === 'undefined') {
        return
      }

      if (stepper['s-p'].length > 0) {
        const promise = stepper['s-p'][0] as Promise<any>
        promise.then(
          () => {
            stepper.goToStep(id)
          })
      } else {
        stepper.goToStep(id)
      }

      // Account for when search tab is turned off
      const bufferStepNumber = self.stepIsVisible(Steps.Search) ? 2 : 1

      if (id !== bufferStepNumber && self.state.currentStep === bufferStepNumber) {
        // Leaving Buffers step
        self.hasAcceptedBuffers = true

        // In this case, if we are in Workflow Mode with a point location and have
        // not previously rendered the buffers, we render them now
        if (self.props.config.widgetMode === Mode.Workflow && self.mapActions) {
          // check the search object to see if it is a point location
          const { workflowEnableSearch, workflowSearchSelectedObject } = self.props.config
          const { workflowRuntimeSearchSelectedObject } = self.state
          const searchObj = ACLUtils.isDef(workflowRuntimeSearchSelectedObject) ? JSON.parse(workflowRuntimeSearchSelectedObject) : !workflowEnableSearch && ACLUtils.isDef(workflowSearchSelectedObject) ? JSON.parse(workflowSearchSelectedObject) : undefined
          if (searchObj) {
            const options = self.buildInfographicOptions(true)
            const data = {
              lat: searchObj.lat,
              lon: searchObj.lon,
              bufferType: options.type,
              bufferUnits: options.bufferUnits,
              bufferSizes: options.bufferSizes
            }
            self.mapActions.renderLocation(data)
          }
        }
      }
    }
    let n: number = 1
    const tabs: any = {}
    if (this.stepIsVisible('search')) { tabs.search = n++ }
    if (this.stepIsVisible('buffers')) { tabs.buffers = n++ }
    if (this.stepIsVisible('infographic')) { tabs.infographic = n++ }
    switch (index) {
      case (StepNumber.Search): {
        if (typeof tabs.search !== 'undefined') {
          _goto(tabs.search)
        } else {
          if (typeof tabs.buffers !== 'undefined') {
            _goto(tabs.buffers)
          } else {
            _goto(tabs.infographic)
          }
        }
        break
      }
      case (StepNumber.Buffers): {
        if (typeof tabs.buffers !== 'undefined' && typeof tabs.search !== 'undefined') {
          _goto(tabs.buffers)
        } else {
          _goto(tabs.infographic)
        }
        break
      }
      case (StepNumber.Infographic): {
        if (typeof tabs.infographic !== 'undefined') { _goto(tabs.infographic) }
        break
      }
    }
    this.stepSetContentVisible(index)
  }

  stepSetAllHidden () {
    for (let ii = 1; ii <= 3; ii++) {
      const id = this.workflowStepperId + '-' + ii
      const stepperItem = document.getElementById(id)
      const content = ACLUtils.queryElement.call(this, '.stepper-item-content', stepperItem)
      if (content) { content.style.display = 'none' }
    }
  }

  stepSetContentVisible (step) {
    this.stepSetAllHidden()

    // Get list of visible steps (some may be hidden)
    const visibleSteps = []
    for (let ii = 1; ii <= 3; ii++) {
      const id = this.workflowStepperId + '-' + ii
      const visibleItem = document.getElementById(id)
      if (visibleItem) {
        visibleSteps.push(id)
      }
    }

    if (step > visibleSteps.length) {
      return
    }

    const stepperItem = document.getElementById(visibleSteps[step - 1])
    const self = this
    function _delay () {
      // display content
      const content = ACLUtils.queryElement.call(self, '.stepper-item-content', stepperItem)
      if (content) {
        content.style.display = 'flex'
      } else {
        if (stepperItem['s-p'].length > 0) {
          const promise = stepperItem['s-p'][0] as Promise<any>
          promise.then(
            () => {
              const content = ACLUtils.queryElement.call(self, '.stepper-item-content', stepperItem)
              if (content) { content.style.display = 'flex' }
            })
        }
      }
      self.setHeightInfographicTree()
    }
    setTimeout(_delay, 0)

    return stepperItem
  }

  stepGoToVisible (direction) {
    if (this.props.config.widgetMode !== Mode.Workflow) return

    const { currentStep } = this.state
    const stepper = document.getElementById(this.workflowStepperId) as any
    let newStep

    this.workflowBuffersDebouncer.cancel()

    const n: number = currentStep as number
    if (direction === 'next') {
      if (n < 3) {
        newStep = n + 1
      }
    } else if (direction === 'prev') {
      if (n > 1) {
        newStep = n - 1
      }
    }
    if (newStep) {
      this.updateState('currentStep', newStep)
      this.stepGoTo(stepper, newStep)
      // if we have a map and we are going to the Buffers tab
      // set the flag so that the buffers get rendered
      if (newStep === StepNumber.Buffers && this.mapActions) {
        this.hasAcceptedBuffers = true
      }
    }
  }

  stepCompleted (step: Steps) {
    if (this.props.config.widgetMode !== Mode.Workflow) return false
    // TODO: implementation
    switch (step) {
      case (Steps.Search): {
        break
      }
      case (Steps.Buffers): {
        break
      }
      case (Steps.Infographic): {
        break
      }
    }
  }

  stepOptions (step: Steps) {
    if (!step || this.props.config.widgetMode !== Mode.Workflow) return ''
    // TODO: implementation
    switch (step) {
      case (Steps.Search): {
        break
      }
      case (Steps.Buffers): {
        break
      }
      case (Steps.Infographic): {
        break
      }
    }
  }

  stepIsLast (step: number) {
    if (!step || this.props.config.widgetMode !== Mode.Workflow) return false

    const visibleSteps = this.getVisibleSteps()

    return step === visibleSteps.length
  }

  stepGetFirstVisible () {
    return (this.stepIsVisible(Steps.Search)) ? StepNumber.Search : (this.stepIsVisible(Steps.Buffers)) ? StepNumber.Buffers : (this.stepIsVisible(Steps.Infographic)) ? StepNumber.Infographic : 0
  }

  stepIsFirst (step: number) {
    if (!step || this.props.config.widgetMode !== Mode.Workflow) return false

    // If first step
    return step === 1
  }

  stepCurrentName () {
    let stepName
    if (this.props.config.widgetMode === Mode.Workflow) {
      const { currentStep } = this.state
      const steps: Steps[] = [undefined, Steps.Search, Steps.Buffers, Steps.Infographic]
      if (typeof currentStep !== 'undefined') {
        const n: number = currentStep as number
        if (n >= 1 && n <= 3) {
          stepName = steps[n]
          if (this.stepIsVisible(stepName)) {
            return stepName
          }
        }
      }
    }
    return undefined
  }

  // - - - - - - - - - - -
  // Nav button functions
  navButtonIsVisible (button: NavButtons) {
    if (this.props.config.widgetMode !== Mode.Workflow) return false

    const { currentStep } = this.state
    if (!currentStep) return false

    let isVisible: boolean = false

    const visibleSteps = this.getVisibleSteps()

    switch (button) {
      case (NavButtons.Previous): {
        isVisible = currentStep !== 1
        break
      }
      case (NavButtons.Next): {
        isVisible = currentStep !== visibleSteps.length
        break
      }
      case (NavButtons.Infographic): {
        // infographic button is only visible if we are
        // ready and on the last visible step
        //const last: boolean = this.stepIsLast(this.stepCurrentName())
        //isVisible = (this._igReady() && last)
        isVisible = currentStep === visibleSteps.length
        break
      }
    }
    return isVisible
  }

  navButtonAppearance (button: NavButtons) {
    if (this.props.config.widgetMode !== Mode.Workflow) return undefined
    // the appearance is either 'outline' (secondary) or 'solid' (primary)
    const primary: any = { appearance: 'solid' }
    const secondary: any = { appearance: 'outline' }
    let style: any = secondary

    switch (button) {
      case (NavButtons.Previous): {
        style = (!this.navButtonIsVisible(NavButtons.Next) && !this.navButtonIsVisible(NavButtons.Infographic)) ? primary : secondary
        break
      }
      case (NavButtons.Next): {
        // appearance
        const obj = (!this.navButtonIsVisible(NavButtons.Infographic)) ? primary : secondary
        // if there is no query text, the Next button should be disabled
        if (this.state.currentStep === StepNumber.Search) {
          if (!ACLUtils.hasText(this.searchResultString)) {
            // disable the Next button
            obj.disabled = ''
          }
        }
        style = obj
        break
      }
      case (NavButtons.Infographic): {
        style = primary
        if (!this._igReady()) {
          style.disabled = ''
        }
        break
      }
      default:
        return undefined
    }

    return style
  }

  // Returns an array of the currently visible steps
  // e.g. [Steps.Search, Steps.Infographic] if buffers are auto-enabled
  getVisibleSteps () {
    const visibleSteps = []

    if (this.stepIsVisible(Steps.Search)) {
      visibleSteps.push(Steps.Search)
    }
    if (this.stepIsVisible(Steps.Buffers)) {
      visibleSteps.push(Steps.Buffers)
    }
    if (this.stepIsVisible(Steps.Infographic)) {
      visibleSteps.push(Steps.Infographic)
    }

    return visibleSteps
  }
  // - - - - - - - - - - -

  // This code is dependent on Exb's class names not changing. BE CAREFUL WITH CHANGING THIS CODE.
  setOverflowVisible () {
    requestAnimationFrame(() => {
      let elem = document.getElementById(this.widgetOuterDivId)

      // Traverse up to find the exb widget container
      while (elem && !elem.hasAttribute('data-widgetid') && elem.getAttribute('data-widgetid') !== this.props.id) {
        elem = elem.parentElement
        const grandParentNode = elem?.parentElement
        if (grandParentNode) {
          grandParentNode.style.minHeight = '295px'
          grandParentNode.style.minWidth = '325px'
        }
      }

      if (elem) {
        const computedStyle = window.getComputedStyle(elem)
        const width = parseInt(computedStyle.width)
        const height = parseInt(computedStyle.height)

        if (width >= 200 && height >= 295 && computedStyle.overflow === 'hidden') {
          elem.style.overflow = 'visible'
        }
      }

      // Reset elem to the starting point and traverse up to find the widget controller when floating
      elem = document.getElementById(this.widgetOuterDivId)
      while (elem && !elem.classList.contains('floating-panel')) {
        elem = elem.parentElement
        if (elem && elem.classList.contains('floating-panel')) {
          elem.style.minHeight = '330px'
          elem.style.minWidth = '350px'
          elem.style.zIndex = '1001'
        }
      }

      // Reset elem to the starting point and traverse up to find the widget controller when fixed laout
      elem = document.getElementById(this.widgetOuterDivId)
      while (elem && (!elem.classList.contains('panel-content'))) {
        elem = elem.parentElement
        if (elem && (elem.classList.contains('panel-content'))) {
          elem.style.overflow = 'visible'
        }
      }

      // Reset elem to the starting point and traverse up to find the widget controller when fixed laout
      elem = document.getElementById(this.widgetOuterDivId)
      while (elem && (!elem.classList.contains('fixed-layout'))) {
        elem = elem.parentElement
        if (elem && (elem.classList.contains('fixed-layout'))) {
          elem.style.overflow = 'visible'
          elem = elem.parentElement
          if (elem && (elem.classList.contains('side'))) {
            elem.style.overflow = 'visible'
          }
        }
      }
    })
  }

  render () {
    const { id, theme, user, token } = this.props

    const {
      widgetMode,
      workflowEnableSearch,
      // workflowAvailableBufferRings,
      // workflowAvailableBufferDrivetime,
      // workflowAvailableBufferWalktime,
      // sworkflowEnableInfographicChoice,
      // workflowDisplayIntroText,
      // workflowIntroText,
      // workflowIntroTextBuffersCheckbox,
      // workflowIntroTextBuffers,
      // workflowIntroTextReportCheckbox,
      // workflowIntroTextReports,
      workflowSearchSelectedObject,
      // workflowSelectedReport,
      // selectedGeographyLevels,
      // reportList,
      drawPointEnabled,
      drawPolygonEnabled
    } = this.props.config

    const {
      // searchTabStatus,
      // bufferTabStatus,
      // infographicTabStatus,
      initializedGEUrl,
      // nextButtonStatus,
      // workflowRuntimeRingsBuffer1,
      // workflowRuntimeRingsBuffer2,
      // workflowRuntimeRingsBuffer3,
      // workflowRuntimeRingsBufferUnit,
      // workflowRuntimeDrivetimeBuffer1,
      // workflowRuntimeDrivetimeBuffer2,
      // workflowRuntimeDrivetimeBuffer3,
      // workflowRuntimeDrivetimeBufferUnit,
      // workflowRuntimeWalktimeBuffer1,
      // workflowRuntimeWalktimeBuffer2,
      // workflowRuntimeWalktimeBuffer3,
      // workflowRuntimeWalktimeBufferUnit,
      // selectedCountry,
      // noWorkflowGeographySearch,
      showInfographicModal,
      workflowRuntimeSearchSelectedObject,
      //workflowRuntimeSelectedReport,
      presetSearchObject,
      hasPrivileges,
      runInfographicConfig
      // maxDriveBuffer,
      // maxWalkBuffer,
      // baSearchType
    } = this.state

    const langCode = getAppStore().getState().appContext.locale || 'en'

    // const handleDrawToolCreated = (e) => {
    //   if (e && e.getGraphicsLayer) {
    //     const gl = e.getGraphicsLayer()
    //     if (gl) {
    //       gl.set({ listMode: 'hide', legendEnabled: 'false' })
    //     }
    //   }
    // }

    // Render empty until GE Url is initialized
    if (!initializedGEUrl) {
      return ''
    }

    //const workflowReportId = workflowEnableInfographicChoice ? workflowRuntimeSelectedReport : workflowSelectedReport
    const searchObj = widgetMode === Mode.Preset ? presetSearchObject : ACLUtils.isDef(workflowRuntimeSearchSelectedObject) ? JSON.parse(workflowRuntimeSearchSelectedObject) : !workflowEnableSearch && ACLUtils.isDef(workflowSearchSelectedObject) ? JSON.parse(workflowSearchSelectedObject) : undefined

    // const onClickSearchResultOverDiv = () => {
    //   if (this.mapActions) { this.mapActions.reset() }
    //   // do not show buffers until Buffers Step 'Next' click
    //   this.hasAcceptedBuffers = false

    //   const delay = () => {
    //     this.updateState('workflowRuntimeSearchSelectedObject', undefined)
    //   }
    //   setTimeout(delay, 0)
    // }

    // Stencil Component Styles
    // const stepBaSearchComponent: React.CSSProperties = {
    //   position: 'relative',
    //   left: '0',
    //   width: '100%'
    // }

    this.setOverflowVisible()

    // const modalInfographic: React.CSSProperties = {
    //   top: '0',
    //   left: '0',
    //   width: '100%',
    //   height: '100%',
    //   padding: '0px !important'
    // }
    // const searchParentRow: React.CSSProperties = {
    //   height: '100%'
    // }

    // let workflowHt = 150
    // let suggestionHeight = 150
    // let introReportsRowHeight = 0
    // const widgetElem = document.getElementById(this.widgetOuterDivId)
    // const introReportsRowElem = document.getElementById(this.workflowIntroTextReportsRowId)
    // if (introReportsRowElem && introReportsRowElem.clientHeight > 0) {
    //   introReportsRowHeight = introReportsRowElem.clientHeight
    // }
    // if (widgetElem) {
    //   workflowHt = widgetElem.clientHeight
    //   if (workflowHt > 220) {
    //     suggestionHeight = workflowHt - 200
    //   }
    // }
    // Set the height of the ArcgisInfographicTree based on the row height of the intro text
    //let reportsHeight = suggestionHeight - introReportsRowHeight + 58

    // Enforce a minimum height
    // if (widgetElem) {
    //   workflowHt = widgetElem.clientHeight
    //   if (workflowHt < 175) {
    //     reportsHeight = 0
    //   } else if (workflowHt <= 220) {
    //     reportsHeight = 40
    //   }
    // }

    this.searchResultString = ''
    if (searchObj) {
      const strName = (searchObj.name && ACLUtils.hasText(searchObj.name)) ? searchObj.name : searchObj.displayName || null
      const strAddress = (searchObj.address && ACLUtils.hasText(searchObj.address)) ? searchObj.address : null

      if (this.isLocationType(searchObj.type)) {
        if (strAddress) {
          this.searchResultString = strAddress
        } else if (strName) {
          this.searchResultString = strName
        }
      } else {
        this.searchResultString = strName || ''
      }
    }

    // const reportLoc =  (searchObj && searchObj.type === 'location') ? searchObj.lon + ', ' + searchObj.lat : undefined

    const igData: any = this.validateInfographicData()

    // const reportListStyle: React.CSSProperties = {
    //   position: 'relative',
    //   width: '100%',
    //   height: reportsHeight + 'px',
    //   overflow: 'auto'
    // }
    const isPreset = (widgetMode === Mode.Preset)
    const isPresetNotReady = (isPreset && !this._igReady())
    // const mainBackgroundColor = this.state.spinnerBackgroundColor || '#535658'
    // const mainBackgroundDiv: React.CSSProperties = {
    //   position: 'absolute',
    //   top: '0',
    //   left: '0',
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: mainBackgroundColor
    // }

    // const spinnerHidden: React.CSSProperties = {
    //   display: 'none'
    // }
    const mainBackgroundSpinner: React.CSSProperties = {
      position: 'absolute',
      top: 'calc(50% - 18px)',
      left: 'calc(50% - 16px)',
      transform: 'scale(1.4)'
    }

    // if (newConfig.themeColors.includes('brand')) { setColors++; c.brand = newConfig.brand; }
    //             if (newConfig.themeColors.includes('brandHover')) { setColors++; c.brandHover = newConfig.brandHover; }
    //             if (newConfig.themeColors.includes('brandPress')) { setColors++; c.brandPress = newConfig.brandPress; }
    //             if (newConfig.themeColors.includes('background')) { setColors++; c.background = newConfig.background; }
    //             if (newConfig.themeColors.includes('foreground1')) { setColors++; c.foreground1 = newConfig.foreground1; }
    //             if (newConfig.themeColors.includes('foreground2')) { setColors++; c.foreground2 = newConfig.foreground2; }
    //             if (newConfig.themeColors.includes('foreground3')) { setColors++; c.foreground3 = newConfig.foreground3; }
    //             if (newConfig.themeColors.includes('text1')) { setColors++; c.text1 = newConfig.text1; }
    //             if (newConfig.themeColors.includes('text2')) { setColors++; c.text2 = newConfig.text2; }
    //             if (newConfig.themeColors.includes('text3')) { setColors++; c.text3 = newConfig.text3; }
    //             if (newConfig.themeColors.includes('textInverse')) { setColors++; c.textInverse = newConfig.textInverse; }
    //             if (newConfig.themeColors.includes('textLink')) { setColors++; c.textLink = newConfig.textLink; }
    //             if (newConfig.themeColors.includes('border1')) { setColors++; c.border1 = newConfig.border1; }
    //             if (newConfig.themeColors.includes('border2')) { setColors++; c.border2 = newConfig.border2; }
    //             if (newConfig.themeColors.includes('border3')) { setColors++; c.border3 = newConfig.border3; }
    //             if (newConfig.themeColors.includes('borderInput')) { setColors++; c.borderInput = newConfig.borderInput; }
    //             if (newConfig.themeColors.includes('info')) { setColors++; c.info = newConfig.info; }
    //             if (newConfig.themeColors.includes('success')) { setColors++; c.success = newConfig.success; }

    const colors = {
      brand: theme.colors.primary,
      brandHover: theme.colors.palette.primary[700],
      brandPress: theme.colors.palette.primary[900],
      background: theme.darkTheme ? '#242424' : theme.colors.white,
      foreground: theme.darkTheme ? '#000000' : theme.colors.white,
      text: theme.colors.black,
      textInverse: theme.colors.black,
      border: theme.colors.primary
    }

    // sync options
    const info = this.buildInfographicOptions(true)

    const workflowConfigObj = {
      id,
      env: window.jimuConfig.hostEnv,
      geoenrichmentUrl: this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null,
      username: user?.username,
      colors,
      token,
      infographicOptions: info.infographicOptions,
      ...this.props.config
    }

    // Set language from ExB
    workflowConfigObj.langCode = langCode

    // primaryColor: theme.colors.primary,
    // secondaryColor: theme.colors.secondary,
    // textColor: theme.typography.colors.normal,
    // backgroundColor: theme.darkTheme ? theme.colors.dark : theme.colors.light,
    // foregroundColor: theme.colors.palette.primary[100],

    // visibleElements
    const visibleElements = {} as __esri.SketchVisibleElements
    visibleElements.createTools = {
      point: drawPointEnabled,
      polyline: false,
      polygon: drawPolygonEnabled,
      rectangle: false,
      circle: false
    }
    visibleElements.selectionTools = {
      'rectangle-selection': true,
      'lasso-selection': true
    }
    visibleElements.undoRedoMenu = false
    visibleElements.snappingControls = false

    // hide API setting icon for 10.1
    visibleElements.settingsMenu = false

    const clearSelectedFeature = () => {
      this.mapActions?.reset()
      this.updateState('workflowRuntimeSearchSelectedObject', undefined)
    }

    const baSearchResultFeatureChange = (searchResult) => {
      this.onSiteObjectChanged({ origin: 'basearch', ctx: searchResult.detail.detail.context, state: { searchResults: searchResult.detail.detail } })
    }

    const handleRunInfographic = (params) => {
      this.updateState('runInfographicConfig', params.detail)
      this.updateState('showInfographicModal', true)
    }

    // Needed to set the z-index on the widget to allow the infographic selector popup to be on top of other widgets, plus resize corner on
    // the controller widget
    const setZindexOnWIdget = (on: boolean) => {
      let elem = document.getElementById(this.widgetOuterDivId)

      // Traverse up to find the exb widget container
      while (elem && !elem.hasAttribute('data-widgetid') && elem.getAttribute('data-widgetid') !== this.props.id) {
        elem = elem.parentElement
        const grandParentNode = elem?.parentElement
        if (grandParentNode) {
          if (grandParentNode.style.zIndex !== '1001') {
            grandParentNode.style.zIndex = on ? '1000' : ''
          }
        }
      }
    }

    const handleInfographicSelectorPopupOpened = () => {
      setZindexOnWIdget(true)
    }

    const handleInfographicSelectorPopupClosed = () => {
      setZindexOnWIdget(false)
    }

    const bufferTrigger = (bufferTriggerParams) => {
      this.hasAcceptedBuffers = true

      if (bufferTriggerParams.detail.searchResultObj && this.mapActions) {
        // render map location and buffers
        const data = {
          lat: bufferTriggerParams.detail.searchResultObj.lat,
          lon: bufferTriggerParams.detail.searchResultObj.lon,
          bufferType: bufferTriggerParams.detail.options.bufferType,
          bufferUnits: bufferTriggerParams.detail.options.bufferUnits,
          bufferSizes: bufferTriggerParams.detail.options.bufferSizes
        }
        // Format array to always have 3 values, null will be used if blank values are passed
        const formatArray = (arr) => {
          const returnArr = []
          for (let i = 0; i < 3; i++) {
            if (typeof (arr[i]) !== 'undefined') {
              returnArr.push(arr[i])
            } else {
              returnArr.push(null)
            }
          }
          return returnArr
        }
        // Update the state of the Rings, Drive Time, Walk Time buffers when passed in
        this.updateState('workflowRuntimeBuffer', bufferTriggerParams.detail.options.bufferType)
        const sizeArray = formatArray(bufferTriggerParams.detail.options.bufferSizes)
        if (bufferTriggerParams.detail.options.bufferType === InfoBufferType.ring) {
          this.updateState('workflowRuntimeRingsBuffer1', sizeArray[0])
          this.updateState('workflowRuntimeRingsBuffer2', sizeArray[1])
          this.updateState('workflowRuntimeRingsBuffer3', sizeArray[2])
          this.updateState('workflowRuntimeRingsBufferUnit', bufferTriggerParams.detail.options.bufferUnits)
        } else if (bufferTriggerParams.detail.options.bufferType === InfoBufferType.drivetime) {
          this.updateState('workflowRuntimeDrivetimeBuffer1', sizeArray[0])
          this.updateState('workflowRuntimeDrivetimeBuffer2', sizeArray[1])
          this.updateState('workflowRuntimeDrivetimeBuffer3', sizeArray[2])
          this.updateState('workflowRuntimeDrivetimeBufferUnit', bufferTriggerParams.detail.options.bufferUnits)
        } else if (bufferTriggerParams.detail.options.bufferType === InfoBufferType.walktime) {
          this.updateState('workflowRuntimeWalktimeBuffer1', sizeArray[0])
          this.updateState('workflowRuntimeWalktimeBuffer2', sizeArray[1])
          this.updateState('workflowRuntimeWalktimeBuffer3', sizeArray[2])
          this.updateState('workflowRuntimeWalktimeBufferUnit', bufferTriggerParams.detail.options.bufferUnits)
        }
        this.mapActions.renderLocation(data)
      }
    }

    const drawPointSymbol = new PictureMarkerSymbol({
      width: 14,
      height: 26.6,
      xoffset: 0,
      yoffset: 12.6,
      url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAjCAYAAAB2KjFhAAACtUlEQVRIS+2WS0wTURSG/zvT0kpfkGJ4pGCViA1Em9CtCQVx5QIWhiVRo8GdSNypqHElkcgOlzVh5ap1X6nEiAkQXzGBxkSKtZC0jdTSB7SdMXdwRjudB+w5q5t7T775z3/OzR0CWbT4x90Glh0CMEx43g1C3FIKz6/zhKwDCJYrldBWZIaupSDiqsE/3mBjmGeMyXLF7GiBubEVhmN2sIY6KblS3kO58BvFX5soZrbA7eYCWY67vR2Z2aZJAoyqMTLMvLXN47a1eeRiUSrmUSrmhHSGNYA11oGtMyO3FcVOYnW9xHH9VKUAcw1MfHSc9HktzvYaEN34B6suymSxCwozsQ+ReHi6n7gG7/iNZvv88W6/Ikgdtl+Y2d6I5NfXqJQK/cQ1MPHQ1uZ5oFSeSFdWtn9Ky93b/olsYvURhUWcXef7TPamGmWXfM3oPeVAi8OIeDKLpWgSrxY3qvIY1gjCl5GOvn2jCLOaWUyN9sDX6aj5wNJaErdm3yNbKAlnurCp0W709ThVPQy+i+H+ixV92OlWC+bGe1VB4sHlx2GsxTPayqhPkyNdurB7gRWEFmPasBsXT+D6YIcu7MnLz5gLf9OG0e7Njp3ThV2bXsBSNKUNo518ftML6p1aUK+oZwfqJgVRIAXLg47E1acLgvkHgtGk1kYTJkfOCEMrxnI0hbuBZSTSeWlPd87kaprqeWwkUopVHxqmdTePYMqTdeRZ9d1svzARtLnODlmbO1XvoqpnhMBkaUAhHUM2/iVE6ONrZZjIoZ+6v6BiZhOZ7yufdjjOL7ybesAaZQog+qpX/R6oKayCqYCoKAmmpVCCaYBqYGpAAbabF8z+3yPxh0XsXJUycVPuYWm3IIyAFkhRmRowl/4hdU2uSFOZHFjv7PDm0xtC+9VAmspkwOAOxw1rgWj+H4uVH6hj08HSAAAAAElFTkSuQmCC'
    })

    const handleDrawToolCreated = (e) => {
      if (e && e.getGraphicsLayer) {
        const gl = e.getGraphicsLayer()
        if (gl) {
          gl.set({ listMode: 'hide', legendEnabled: 'false' })
        }
      }
    }

    // const drawPointSymbol = new PictureMarkerSymbol({
    //   width: 14,
    //   height: 26.6,
    //   xoffset: 0,
    //   yoffset: 12.6,
    //   url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAjCAYAAAB2KjFhAAACtUlEQVRIS+2WS0wTURSG/zvT0kpfkGJ4pGCViA1Em9CtCQVx5QIWhiVRo8GdSNypqHElkcgOlzVh5ap1X6nEiAkQXzGBxkSKtZC0jdTSB7SdMXdwRjudB+w5q5t7T775z3/OzR0CWbT4x90Glh0CMEx43g1C3FIKz6/zhKwDCJYrldBWZIaupSDiqsE/3mBjmGeMyXLF7GiBubEVhmN2sIY6KblS3kO58BvFX5soZrbA7eYCWY67vR2Z2aZJAoyqMTLMvLXN47a1eeRiUSrmUSrmhHSGNYA11oGtMyO3FcVOYnW9xHH9VKUAcw1MfHSc9HktzvYaEN34B6suymSxCwozsQ+ReHi6n7gG7/iNZvv88W6/Ikgdtl+Y2d6I5NfXqJQK/cQ1MPHQ1uZ5oFSeSFdWtn9Ky93b/olsYvURhUWcXef7TPamGmWXfM3oPeVAi8OIeDKLpWgSrxY3qvIY1gjCl5GOvn2jCLOaWUyN9sDX6aj5wNJaErdm3yNbKAlnurCp0W709ThVPQy+i+H+ixV92OlWC+bGe1VB4sHlx2GsxTPayqhPkyNdurB7gRWEFmPasBsXT+D6YIcu7MnLz5gLf9OG0e7Njp3ThV2bXsBSNKUNo518ftML6p1aUK+oZwfqJgVRIAXLg47E1acLgvkHgtGk1kYTJkfOCEMrxnI0hbuBZSTSeWlPd87kaprqeWwkUopVHxqmdTePYMqTdeRZ9d1svzARtLnODlmbO1XvoqpnhMBkaUAhHUM2/iVE6ONrZZjIoZ+6v6BiZhOZ7yufdjjOL7ybesAaZQog+qpX/R6oKayCqYCoKAmmpVCCaYBqYGpAAbabF8z+3yPxh0XsXJUycVPuYWm3IIyAFkhRmRowl/4hdU2uSFOZHFjv7PDm0xtC+9VAmspkwOAOxw1rgWj+H4uVH6hj08HSAAAAAElFTkSuQmCC'
    // })

    if (!hasPrivileges) {
      return (
        <div id={ this.widgetOuterDivId }
        css={getStyle(theme, this.props.id)}
          className='widget-infographic-player jimu-widget App'>
            <div className='esri-directions__sign-in-content'>
              <div className='esri-widget__body' dangerouslySetInnerHTML={ { __html: this.localeString('noPermissionsMessage') } }>
              </div>
            </div>
        </div>
      )
    }
    // console.log('%c ', 'color:blue;background-color:green;padding:0 300px;font-size:1pt;')
    // console.log('%c ***[ widget config ]:', 'font-size:9pt;', workflowConfigObj)
    // console.log('%c ', 'color:blue;background-color:green;padding:0 300px;font-size:1pt;position:absolute;top:-8px;')

    return (
      <div id={ this.widgetOuterDivId }
        css={getStyle(theme, this.props.id)}
        // style={mainBackgroundDiv}
        className='widget-infographic-player jimu-widget App'>
        {/* <img src={require('./assets/largeBusy.gif')} style={(isPreset && isPresetNotReady) ? spinnerHidden : mainBackgroundSpinner}></img> */}

        {/* {mapConnection} */}
        {Object.prototype.hasOwnProperty.call(this.props, 'useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1 && (<JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={e => { this.activeViewChangeHandler(e, this) }} />)}
        {user?.username ? (
          <React.Fragment>
            {isPreset ? isPresetNotReady ? (
              <WidgetPlaceholder icon={baIcon} message={this.localeString('_widgetLabel')} />
            ) : (
              <React.Fragment>
                {!showInfographicModal ? (
                //{/*- - - - - INFOGRAPHIC/PRESET MODE - - - - - - - - - - - - - - - - - - - - - - */}
                  <ArcgisInfographic
                    id={this.presetInfographicId}
                    instanceId={id}
                    env={igData.env}
                    username={igData.username}
                    token={igData.token}
                    geoenrichmentUrl={this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null}
                    portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                    portalOnlineGEProxy={this.portalOnlineGEProxy}
                    // theme={this.stringifyTheme()}
                    locationName={igData.locationName}
                    locationAttributes={igData.attributes ? igData.attributes : {}}
                    sourceCountry={igData.country}
                    options={JSON.stringify(igData.buffers.infographicOptions)}
                    langCode={langCode}
                    reportId={igData.report}
                    reportLocation={igData.location}
                    reportgeometry={igData.geometry}
                    reportgeography={igData.geography}
                  >
                  </ArcgisInfographic>
                ) : (
                  <Modal className='d-flex justify-content-between' isOpen={showInfographicModal} role='dialog' style={{ width: '100vw', height: '100vh', maxWidth: 'unset', margin: '0 auto' }}>
                    <ModalHeader toggle={() => {
                      this.updateState('showInfographicModal', false)
                    }}></ModalHeader>
                    <ModalBody>
                      <div slot="content" style={{ padding: '0px', height: '100%' }}>
                        <img src={require('./assets/largeBusy.gif')} style={mainBackgroundSpinner}></img>
                        <ArcgisInfographic
                          id={this.presetInfographicId}
                          instanceId={id}
                          env={igData.env}
                          username={igData.username}
                          token={igData.token}
                          geoenrichmentUrl={this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null}
                          portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                          portalOnlineGEProxy={this.portalOnlineGEProxy}
                          // theme={this.stringifyTheme()}
                          locationName={igData.locationName}
                          locationAttributes={igData.attributes ? igData.attributes : {}}
                          sourceCountry={igData.country}
                          options={JSON.stringify(igData.buffers.infographicOptions)}
                          langCode={langCode}
                          reportId={igData.report}
                          reportLocation={igData.location}
                          reportgeometry={igData.geometry}
                          reportgeography={igData.geography}
                        >
                        </ArcgisInfographic>
                      </div>
                    </ModalBody>
                  </Modal>
                )}
              </React.Fragment>
            ) : true &&
            <React.Fragment>
              <div className='containerStyle'>
                {/*- - - - - WORKFLOW MODE - - - - - - - - - - - - - - - - - - - - - - -*/}
                <Container>
                  {/* <Row> */}
                    <ArcgisInfographicWorkflow
                      id={this.workflowId}
                      config={JSON.stringify(workflowConfigObj)}
                      portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                      geocodeUrl={this.state.geocodeUrl ? this.state.geocodeUrl : null}
                      portalOnlineGEProxy={this.portalOnlineGEProxy}
                      onSelectedFeatureClear={clearSelectedFeature}
                      onBuffersUpdate={bufferTrigger}
                      langCode={langCode}
                      selectedFeatureResult={JSON.stringify({ detail: searchObj })}
                      onBaSearchFeatureChange={baSearchResultFeatureChange}
                      onRunInfographic={handleRunInfographic}
                      onInfographicSelectorPopupOpened={handleInfographicSelectorPopupOpened}
                      onInfographicSelectorPopupClosed={handleInfographicSelectorPopupClosed}
                    >
                    <div slot="draw-components">
                    { Object.prototype.hasOwnProperty.call(this.props, 'useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1 && this.jimuMapView &&
                      <JimuDraw
                        jimuMapView={this.jimuMapView}
                        disableSymbolSelector={true}
                        drawingOptions={{
                          creationMode: JimuDrawCreationMode.Single,
                          updateOnGraphicClick: false,
                          visibleElements
                        }}
                        defaultSymbols={{
                          pointSymbol: drawPointSymbol
                        }}
                        uiOptions={{
                          isHideBorder: true
                        }}
                        onDrawingFinished={(e) => { this.handleDrawEnd(e) }}
                        onJimuDrawCreated={handleDrawToolCreated}
                      />
                    }
                    </div>
                    <div slot="infographic-modal">
                      <Modal className='d-flex justify-content-between' isOpen={showInfographicModal && runInfographicConfig} role='dialog' style={{ width: '100vw', height: '100vh', maxWidth: 'unset', margin: '0 auto' }}>
                        <ModalHeader toggle={() => {
                          this.updateState('runInfographicConfig', null)
                          this.updateState('showInfographicModal', false)
                        }}></ModalHeader>
                        <ModalBody>
                          <div slot="content" style={{ padding: '0px', height: '100%' }}>
                            <img src={require('./assets/largeBusy.gif')} style={mainBackgroundSpinner}></img>
                            <ArcgisInfographicModal
                              modalId={'workflow-modal-' + this.props.id}
                              config={runInfographicConfig?.config}
                              portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                              portalOnlineGEProxy={this.portalOnlineGEProxy}
                              geoenrichmentUrl={this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null}
                              searchResultObj={runInfographicConfig?.searchResultObj}
                              isOpen={showInfographicModal}
                              selectedReport={runInfographicConfig?.selectedReport}
                              infographicOptions={runInfographicConfig?.config?.infographicOptions}>
                            </ArcgisInfographicModal>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                    </ArcgisInfographicWorkflow>
                  {/* </Row> */}
                </Container>
              </div>
            </React.Fragment>
            }
          </React.Fragment>
        ) : (
          <div className='esri-directions__sign-in-content'>
            <div className='esri-widget__body' dangerouslySetInnerHTML={ { __html: this.localeString('signinInfo') } }>
            </div>
            <div className='esri-widget__heading' role='heading'>
              {this.localeString('signinReq')}
            </div>
            <button
              className='esri-button esri-button--secondary'
              type='button'
              style={{ width: 'auto' }}
              onClick={() => { this.promptSignIn() }}>
              {this.localeString('signin')}
            </button>
          </div>
        )}
      </div>
    )
  }
}
