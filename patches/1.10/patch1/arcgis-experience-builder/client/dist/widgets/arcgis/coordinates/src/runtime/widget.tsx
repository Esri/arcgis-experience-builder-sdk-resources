/** @jsx jsx */
import { React, jsx, AllWidgetProps, utils, moduleLoader, lodash, ReactResizeDetector } from 'jimu-core'
import { CoordinateConfig, DisplayOrderType, ElevationUnitType, IMConfig, WidgetRect, WidgetStyleType } from '../config'
import defaultMessages from './translations/default'
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import {
  Button, Card, CardBody, CardFooter, Dropdown, DropdownButton, DropdownItem,
  DropdownMenu, hooks, WidgetPlaceholder, defaultMessages as jimuiDefaultMessages
} from 'jimu-ui'
import Graphic from 'esri/Graphic'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import SpatialReference from 'esri/geometry/SpatialReference'
import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol'
import coordinateFormatter from 'esri/geometry/coordinateFormatter'
import webMercatorUtils from 'esri/geometry/support/webMercatorUtils'
import Point from 'esri/geometry/Point'
import geometryService from 'esri/rest/geometryService'
import ProjectParameters from 'esri/rest/support/ProjectParameters'
import { degToDDM, degToDMS, getCrsBySpheroidStr, getCSUnitByCrs, getWktKeyStr, getUnitRate, getUnits, isGeographicUnit, isProjectUnit, localizeNumberBySettingInfo } from '../utils'
import { getStyle } from './style'
import { CopyBtn } from './components/copy-btn'
import { TextAutoFit } from './components/text-fit'
import coordinatesIcon from '../../icon.svg'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'
import { LocatorOutlined } from 'jimu-icons/outlined/editor/locator'

const { useState, useEffect, useRef } = React

const Widget = (props: AllWidgetProps<IMConfig>): React.ReactElement => {
  const { config, useMapWidgetIds, theme, id } = props
  const { coordinateSystem, coordinateDecimal, altitudeDecimal, showSeparators, displayOrder, widgetStyle, mapInfo, mapInfo2 } = config
  // state
  const [widgetRect, setWidgetRect] = useState<WidgetRect>({ width: 250, height: 100 })
  const [currentJimuMapView, setCurrentJimuMapView] = useState(null)
  const [enableRealtime, setEnableRealtime] = useState(true)
  const [selectedSystemId, setSelectedSystemId] = useState(coordinateSystem?.[0]?.id)
  const [locateActive, setLocateActive] = useState(false)
  const [showTips, setShowTips] = useState(false)
  const [showMouseTips, setShowMouseTips] = useState(false)
  const [geoInfo, setGeoInfo] = useState('')

  const [elevInfo, setElevInfo] = useState('')
  const [elevNum, setElevNum] = useState(null)
  const [elevUnit, setElevUnit] = useState('')

  const [eyeInfo, setEyeInfo] = useState('')
  const [eyeNum, setEyeNum] = useState(null)
  const [eyeUnit, setEyeUnit] = useState('')

  const [modulesLoaded, setModulesLoaded] = useState(false)
  // translate
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessages)
  const mapClickTips = translate('mapClickTips')
  const mouseMoveTips = translate('mouseMoveTips')
  const enableClickTips = translate('enableClickTips')
  const disableClickTips = translate('disableClickTips')
  const computing = translate('computing')
  const placeHolderName = translate('_widgetLabel')
  //units
  const unitInches = translate('unitsInches')
  const unitFoot = translate('unitsLabelFeet')
  const unitFootUs = translate('unitsFoot_US')
  const unitYards = translate('unitsLabelYards')
  const unitMiles = translate('unitsLabelMiles')
  const unitNauticalMiles = translate('unitsLabelNauticalMiles')
  const unitMillimeters = translate('unitsMillimeters')
  const unitCentimeters = translate('unitsCentimeters')
  const unitMeters = translate('unitsLabelMeters')
  const unitKilometers = translate('unitsLabelKilometers')
  const unitDecimeters = translate('unitsDecimeters')
  const unitDD = translate('unitsDecimalDegrees')
  const unitDDM = translate('unitsDegreesDecimalMinutes')
  const unitDMS = translate('unitsDegreeMinutesSeconds')
  const unitMgrs = translate('unitsMgrs')
  const unitUsng = translate('unitsUsng')
  const changeSystem = translate('changeSystem')
  // global variabl
  const mapWkid = useRef(null)
  const mapPortalId = useRef(null)
  const graphicsLayer = useRef(null)
  const markerGraphic = useRef(null)
  const moveListener = useRef(null)
  const clickListener = useRef(null)
  const wkidUtilsRef = useRef(null)
  // unit nls map
  const unitNlsMap = {
    INCHES: unitInches,
    FOOT: unitFoot,
    FOOT_US: unitFootUs,
    YARDS: unitYards,
    MILES: unitMiles,
    NAUTICAL_MILES: unitNauticalMiles,
    MILLIMETERS: unitMillimeters,
    CENTIMETERS: unitCentimeters,
    METER: unitMeters,
    KILOMETERS: unitKilometers,
    DECIMETERS: unitDecimeters,
    DEGREE: unitDD,
    DECIMAL_DEGREES: unitDD,
    DEGREES_DECIMAL_MINUTES: unitDDM,
    DEGREE_MINUTE_SECONDS: unitDMS,
    MGRS: unitMgrs,
    USNG: unitUsng
  }
  const unitAbbrMap = {
    [unitKilometers]: translate('kilometerAbbr'),
    [unitMeters]: translate('meterAbbr'),
    [unitFoot]: translate('feetAbbr')
  }
  const COORDINATES_MIN_WIDTH = 160
  const COORDINATES_MIN_HEIGHT = 26

  useEffect(() => {
    return () => {
      if (markerGraphic.current) {
        graphicsLayer.current?.remove(markerGraphic.current)
      }
      if (graphicsLayer.current) {
        const map = currentJimuMapView?.view?.map
        map?.remove(graphicsLayer.current)
      }
      if (clickListener.current) clickListener.current?.remove()
      if (moveListener.current) moveListener.current?.remove()
    }
    // eslint-disable-next-line
  }, [])

  hooks.useUpdateEffect(() => {
    const view = currentJimuMapView?.view
    const viewTypeIsThree = view?.type === '3d'
    if (enableRealtime) {
      clickListener.current?.remove()
      moveListener.current?.remove()
      moveListener.current = view?.on('pointer-move', (event) => {
        const point = view.toMap({ x: event.x, y: event.y })
        const threeDPoint = { x: event?.native?.pageX, y: event?.native?.pageY }
        onMouseMove(point, viewTypeIsThree ? threeDPoint : undefined)
      })
    } else {
      clickListener.current?.remove()
      moveListener.current?.remove()
      clickListener.current = view?.on('click', (event) => {
        const threeDPoint = { x: event?.native?.pageX, y: event?.native?.pageY }
        onMapClick(event, viewTypeIsThree ? threeDPoint : undefined)
      })
    }
  }, [currentJimuMapView, locateActive, enableRealtime, selectedSystemId,
    coordinateSystem, coordinateDecimal, altitudeDecimal, showSeparators, displayOrder])

  useEffect(() => {
    graphicsLayer.current = new GraphicsLayer({ listMode: 'hide' })
    markerGraphic.current = null
    const map = currentJimuMapView?.view?.map
    map?.add(graphicsLayer.current)
    // change status when view switch
    checkSystemSetTips()
    // eslint-disable-next-line
  }, [currentJimuMapView, mapInfo, mapInfo2])

  const onActiveViewChange = (jimuMapView: JimuMapView) => {
    // switch map: clear all geo info
    setGeoInfo('')
    setElevInfo('')
    setElevNum(null)
    setElevUnit('')
    setEyeInfo('')
    setEyeNum(null)
    setEyeUnit('')
    setLocateActive(false)
    if (markerGraphic.current) {
      graphicsLayer.current?.remove(markerGraphic.current)
    }
    if (graphicsLayer.current) {
      const orgMap = currentJimuMapView?.view?.map
      orgMap?.remove(graphicsLayer.current)
    }
    setCurrentJimuMapView(jimuMapView)
    const view = jimuMapView?.view
    if (!view) return
    const viewTypeIsThree = view?.type === '3d'
    if (enableRealtime) {
      clickListener.current?.remove()
      moveListener.current?.remove()
      moveListener.current = view?.on('pointer-move', (event) => {
        const point = view.toMap({ x: event.x, y: event.y })
        const threeDPoint = { x: event?.native?.pageX, y: event?.native?.pageY }
        onMouseMove(point, viewTypeIsThree ? threeDPoint : undefined)
      })
    } else {
      clickListener.current?.remove()
      moveListener.current?.remove()
      clickListener.current = view?.on('click', (event) => {
        const threeDPoint = { x: event?.native?.pageX, y: event?.native?.pageY }
        onMapClick(event, viewTypeIsThree ? threeDPoint : undefined)
      })
    }
    mapWkid.current = view?.spatialReference?.wkid
    mapPortalId.current = (view?.map as any)?.portalItem?.id
  }

  const debounceOnResize = lodash.debounce(
    (width, height) => onResize(width, height),
    200
  )

  const onResize = (width, height) => {
    const newWidgetRect = {
      width,
      height
    }
    const notResetSize = width < COORDINATES_MIN_WIDTH || height < COORDINATES_MIN_HEIGHT
    if (notResetSize) return
    setWidgetRect(newWidgetRect)
  }

  const checkSystemSetTips = async () => {
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const canShowClient = await canShowInClient(selectedSystem)
    if (canShowClient) {
      if (!locateActive) {
        setEnableRealtime(true)
        setShowMouseTips(true)
      }
    } else {
      setEnableRealtime(false)
      setShowMouseTips(false)
    }
  }

  const getMarkerGraphic = (mapPoint) => {
    const symbol = new PictureMarkerSymbol({
      url: require('./assets/pin-exb.svg'),
      width: 12,
      height: 22,
      yoffset: 11
    })
    return new Graphic({
      geometry: mapPoint,
      symbol
    })
  }

  const getUsedmapInfo = () => {
    const curMapId = currentJimuMapView?.view?.map?.portalItem?.id
    const mapArr = []
    if (mapInfo) mapArr.push(mapInfo)
    if (mapInfo2) mapArr.push(mapInfo2)
    return mapArr.find(info => info?.id === curMapId)
  }

  const canShowInClient = async (selectedSystem: CoordinateConfig): Promise<boolean> => {
    const { wkid, crs } = selectedSystem
    const curWkidNum = parseInt(wkid)
    const curSr = new SpatialReference({ wkid: curWkidNum })
    const mapSr = new SpatialReference({ wkid: mapWkid.current })
    const specialCase = (mapWkid.current === 4326 && curSr.isWebMercator) ||
      (curWkidNum === 4326 && mapSr.isWebMercator)
    const curLabel = crs?.name
    // If same wkid with basemap, use the recorded wkid.Otherwise, load wkidutils.
    const uesdConfigMapInfo = getUsedmapInfo()
    // get map label
    const hasMap = useMapWidgetIds && useMapWidgetIds?.length > 0
    const getMapLabel = (): Promise<string> => {
      if (!mapWkid.current || !hasMap) {
        return Promise.resolve('')
      } else if (uesdConfigMapInfo?.wkid && mapWkid.current === uesdConfigMapInfo?.wkid) {
        return Promise.resolve(uesdConfigMapInfo?.label)
      } else {
        if (!modulesLoaded) {
          return moduleLoader.loadModule('jimu-core/wkid').then(module => {
            wkidUtilsRef.current = module
            setModulesLoaded(true)
            const { getSRLabel } = module
            return getSRLabel(mapWkid.current)
          })
        } else {
          const { getSRLabel } = wkidUtilsRef.current
          return getSRLabel(mapWkid.current)
        }
      }
    }
    const mapLabel = await getMapLabel()
    const isSameSR = curLabel && curLabel === mapLabel
    if (isSameSR || specialCase) return true
    return false
  }

  const projectMapPoint = (point, selectedSystem, threeDPoint?) => {
    const { wkid, datumWkid, datumWkid2, displayUnit, crs } = selectedSystem
    if (!wkid) return
    const curWkidNum = parseInt(wkid)
    const curSr = new SpatialReference({ wkid: curWkidNum })
    const mapSr = new SpatialReference({ wkid: mapWkid.current })
    let outWkid = null
    const params = new ProjectParameters({
      geometries: [point],
      transformForward: false
    })

    outWkid = curWkidNum
    let useGeo = false
    let outCrs
    if (curSr.isGeographic) {
      outWkid = curWkidNum
    } else {
      const useDisplayUnit = displayUnit || getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs)
      if (isProjectUnit(useDisplayUnit)) {
        outWkid = curWkidNum
      } else { // geoUnit or USNG, MGRS
        // When output wkid is not used, need to use GEOGCS to find the outSR
        const spheroidStr = getWktKeyStr(crs, 'GEOGCS')
        outCrs = getCrsBySpheroidStr(spheroidStr)
        outWkid = outCrs?.wkid
        useGeo = true
      }
    }

    if (datumWkid && datumWkid2) {
      if (mapPortalId.current === mapInfo.id) {
        params.transformation = new SpatialReference({ wkid: parseInt(datumWkid) })
      } else if (mapPortalId.current === mapInfo2.id) {
        params.transformation = new SpatialReference({ wkid: parseInt(datumWkid2) })
      }
    } else if (datumWkid && !datumWkid2) {
      params.transformation = new SpatialReference({ wkid: parseInt(datumWkid) })
    }
    // This parameter is not used, but used in WAB
    // params.transformForward = JSON.parse(this.forward)
    params.outSpatialReference = new SpatialReference({ wkid: parseInt(outWkid) })
    setGeoInfo(computing)
    const defUrl = utils.getGeometryService()
    geometryService.project(defUrl, params).then(geometries => {
      const point = geometries[0]
      let outputUnit = displayUnit
      // use default units (TODO: temp remove 'MGRS' and 'USNG' unit)
      if (!outputUnit || outputUnit === 'MGRS' || outputUnit === 'USNG') {
        outputUnit = getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs)
      }
      if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
        displayUsngOrMgrs(outputUnit, point)
      } else if (isGeographicUnit(outputUnit)) {
        displayDegOrDms(outputUnit, point, mapSr.isWebMercator, useGeo ? outCrs.unit : '')
      } else {
        displayProject(outputUnit, point, mapSr.isWebMercator, useGeo ? outCrs.unit : '')
      }
    })

    const view = currentJimuMapView?.view
    const viewTypeIsThree = view?.type === '3d'
    if (viewTypeIsThree) {
      _setEyeInfo()
      if (threeDPoint) _setElevInfo(threeDPoint)
    }
  }

  const onMapClick = async (evt, threeDPoint?) => {
    // if (window.appInfo.isRunInMobile) {
    //   return
    // }
    // Changing the reference causes a bug where mark's position is changed the first time
    if (!evt.mapPoint) return
    const copyMapPoint = Point.fromJSON(evt.mapPoint.toJSON())
    evt.stopPropagation()
    setShowTips(false)
    if (enableRealtime || !selectedSystemId) return
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const canShowClient = await canShowInClient(selectedSystem)
    const needMarker = canShowClient || locateActive
    if (needMarker && !markerGraphic.current) {
      markerGraphic.current = getMarkerGraphic(evt.mapPoint)
      graphicsLayer.current.add(markerGraphic.current)
    }
    if (canShowClient) {
      markerGraphic.current.geometry = evt.mapPoint
      displayOnClient(copyMapPoint, threeDPoint)
      return
    }
    if (locateActive) {
      markerGraphic.current.geometry = evt.mapPoint
      const { x, y } = evt.mapPoint
      const mapSr = currentJimuMapView?.view?.spatialReference
      const point = new Point({ x, y, spatialReference: mapSr })
      projectMapPoint(point, selectedSystem, threeDPoint)
    }
  }

  const onMouseMove = async (point, threeDPoint?) => {
    // if (window.appInfo.isRunInMobile) {
    //   return
    // }
    setShowMouseTips(false)
    if (!enableRealtime || !selectedSystemId) return
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const canShowClient = await canShowInClient(selectedSystem)
    if (canShowClient) {
      displayOnClient(point, threeDPoint)
    }
  }

  const unitToNls = (unit): string => {
    return unitNlsMap[unit] || unitNlsMap[unit?.toUpperCase()]
  }

  const displayUsngOrMgrs = (unit: 'MGRS' | 'USNG', normalizedPoint) => {
    coordinateFormatter.load().then(() => {
      const nlsUnit = unitToNls(unit)
      if (unit === 'MGRS') {
        const mgrs = coordinateFormatter.toMgrs(normalizedPoint, 'automatic', coordinateDecimal)
        setGeoInfo(`${mgrs} ${nlsUnit}`)
      } else if (unit === 'USNG') {
        const usng = coordinateFormatter.toUsng(normalizedPoint, coordinateDecimal)
        setGeoInfo(`${usng} ${nlsUnit}`)
      }
    })
  }

  const displayDegOrDms = (unit: string, normalizedPoint, mapIsMercator?: boolean, outCrsUnit?: string) => {
    let { x, y } = normalizedPoint
    const orderXy = displayOrder === DisplayOrderType.xy
    // get unitRate
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const { crs } = selectedSystem
    const defaultUnit = outCrsUnit || getCSUnitByCrs(crs)
    const unitRate = getUnitRate(defaultUnit, unit, mapIsMercator)
    x = x * unitRate
    y = y * unitRate
    if (unit === 'DEGREE_MINUTE_SECONDS') {
      x = degToDMS(x, 'LON', coordinateDecimal, showSeparators)
      y = degToDMS(y, 'LAT', coordinateDecimal, showSeparators)
      orderXy ? setGeoInfo(`${x} ${y}`) : setGeoInfo(`${y} ${x}`)
    } else if (unit === 'DEGREES_DECIMAL_MINUTES') {
      //for hack DEGREES_DECIMAL_MINUTES
      x = degToDDM(x, coordinateDecimal, showSeparators)
      y = degToDDM(y, coordinateDecimal, showSeparators)
      orderXy ? setGeoInfo(`${x} ${y}`) : setGeoInfo(`${y} ${x}`)
    } else {
      const nlsUnit = unitToNls(unit)
      orderXy ? setGeoInfo(`${toFormat(x)} ${toFormat(y)} ${nlsUnit}`) : setGeoInfo(`${toFormat(y)} ${toFormat(x)} ${nlsUnit}`)
    }
  }

  const toFormat = (num) => {
    if (isNaN(num)) return ''
    return localizeNumberBySettingInfo(num, {
      places: coordinateDecimal,
      digitSeparator: showSeparators
    })
  }

  const displayProject = (unit: string, normalizedPoint, mapIsMercator?: boolean, outCrsUnit?: string) => {
    let { x, y } = normalizedPoint
    // get unitRate
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const { crs } = selectedSystem
    const defaultUnit = outCrsUnit || getCSUnitByCrs(crs)
    const unitRate = getUnitRate(defaultUnit, unit, mapIsMercator)
    x = x * unitRate
    y = y * unitRate
    const nlsUnit = unitToNls(unit)
    const orderXy = displayOrder === DisplayOrderType.xy
    orderXy ? setGeoInfo(`${toFormat(x)} ${toFormat(y)} ${nlsUnit}`) : setGeoInfo(`${toFormat(y)} ${toFormat(x)} ${nlsUnit}`)
  }

  const getDefaultUnits = (isGeographic: boolean, mapIsWebMercator: boolean, crs: any): string => {
    const userUnit = getUnits()
    let outputUnit = ''
    if (isGeographic) {
      outputUnit = getCSUnitByCrs(crs)
      if (!outputUnit) outputUnit = 'METER'
    } else {
      outputUnit = userUnit === 'english' ? 'FOOT' : 'METER'
    }
    //default show mercator is degrees.
    if (mapIsWebMercator) {
      outputUnit = 'DECIMAL_DEGREES'
    }
    return outputUnit
  }

  const _setElevInfo = (threeDPoint) => {
    const view = currentJimuMapView?.view
    if (!threeDPoint) {
      setElevInfo('')
      setElevNum(null)
      setElevUnit('')
      return
    }
    view.hitTest({
      x: threeDPoint.x,
      y: threeDPoint.y
    }).then(position => {
      let elev = ''
      // if (!isJustElev) {
      //   this._setLonLat(position);
      // }
      if (position.results && position.results[0] &&
        position.results[0].mapPoint && position.results[0].mapPoint.z) {
        elev = _getElev(position.results[0].mapPoint) // result elev(raycasting)
        setElevInfo(elev)
      } else if (typeof position !== 'undefined' && position.ground &&
        position.ground.mapPoint !== null && typeof position.ground.mapPoint.z !== 'undefined') {
        elev = _getElev(position.ground.mapPoint) // ground elev
      }
      setElevInfo(elev)
    })
  }

  const _getElev = (pos) => {
    let elev = ''
    if (pos && pos.z) {
      const { num, unit } = trunNumToKmOrM(pos.z, true)
      const abbtUnit = unitAbbrMap[unit]
      setElevNum(num)
      setElevUnit(unit)
      elev = `${translate('elev', { ele: abbtUnit })} ${num} ${unit}`
    } else {
      setElevNum(null)
      setElevUnit('')
    }
    return elev
  }

  const _setEyeInfo = () => {
    const view = currentJimuMapView?.view
    if (!view || !view?.camera || !view?.camera?.position) {
      setEyeInfo('')
      setEyeNum(null)
      setEyeUnit('')
      return
    }
    const eyeAlt = view.camera.position?.z
    const { num, unit } = trunNumToKmOrM(eyeAlt)
    const abbtUnit = unitAbbrMap[unit]
    setEyeInfo(`${translate('eyeAlt', { alt: abbtUnit })} ${num} ${unit}`)
    setEyeNum(num)
    setEyeUnit(unit)
  }

  const trunNumToKmOrM = (num, isElev?: boolean) => {
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const { elevationUnit } = selectedSystem
    if (!num) return { num: 0, unit: '' }
    let unit = ''
    const unitRate = 1
    let threshold = 1000
    num = parseFloat(num)
    if (isElev) {
      //switch to km if more than 10,000 m.
      threshold = 10000
    }
    // if (this.selectedItem && this.selectedItem.get) {
    //   unitRate = !!isElev ? this.selectedItem.get('elevationUnitRate') : this.selectedItem.get('eyeAltUnitRate');
    // }
    // if (unitRate === 1) { // 1 === parseInt(unitRate, 10)
    if (elevationUnit === ElevationUnitType.metric) {
      if (num >= threshold || num <= -(threshold)) {
        num = num / 1000
        unit = unitKilometers
      } else {
        unit = unitMeters
      }
    } else {
      //show elevation in feet and not meters.
      num = num * unitRate
      unit = unitFoot
    }
    num = localizeNumberBySettingInfo(num, {
      places: altitudeDecimal,
      digitSeparator: showSeparators
    })
    return { num, unit }
  }

  const displayOnClient = (mapPoint, threeDPoint?) => {
    // when the mouse pointer out of earth, show eyeInfo only
    if (!mapPoint || !mapPoint?.x || !mapPoint?.y) {
      setElevInfo('')
      setElevNum(null)
      setElevUnit('')
      setGeoInfo('')
      return
    }
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const { displayUnit, wkid, crs } = selectedSystem
    const curWkidNum = parseInt(wkid)
    const curSr = new SpatialReference({ wkid: curWkidNum })
    const mapSr = new SpatialReference({ wkid: mapWkid.current })
    let { x, y } = mapPoint
    const convertInClient = (mapWkid.current === 4326 && curSr.isWebMercator) ||
      (curWkidNum === 4326 && mapSr.isWebMercator)
    let normalizedPoint = null
    // make sure longitude values stays within -180/180
    normalizedPoint = mapPoint.normalize()
    // get default units
    let outputUnit = displayUnit
    const systemDefaultUnit = getDefaultUnits(curSr.isGeographic, mapSr.isWebMercator, crs)
    // const systemDefaultUnit = getCSUnitByCrs(crs)
    // TODO: temp remove 'MGRS' and 'USNG' unit
    if (!outputUnit || outputUnit === 'MGRS' || outputUnit === 'USNG') {
      outputUnit = systemDefaultUnit
    }
    // this means system output unit
    const isGeoUnit = isGeographicUnit(outputUnit)
    const isProUnit = isProjectUnit(outputUnit)
    if (isGeoUnit) {
      x = normalizedPoint.longitude || x
      y = normalizedPoint.latitude || y
      normalizedPoint.x = x
      normalizedPoint.y = y
    }

    if (convertInClient) {
      // process special case
      if (mapPoint.spatialReference.wkid === 4326 && curSr.isWebMercator) {
        if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
          displayUsngOrMgrs(outputUnit, normalizedPoint)
        } else if (isGeoUnit) {
          displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator)
        } else if (isProUnit) {
          const mCoord = webMercatorUtils.lngLatToXY(x, y)
          displayProject(outputUnit, { x: mCoord[0], y: mCoord[1] }, mapSr.isWebMercator)
        }
      } else if (curWkidNum === 4326 && mapSr.isWebMercator) {
        if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
          displayUsngOrMgrs(outputUnit, normalizedPoint)
        } else if (isGeoUnit) {
          displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator)
        }
      }
    } else {
      // setting display units
      if (mapPoint.spatialReference.wkid === 4326 || mapPoint.spatialReference.isWebMercator) {
        if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
          displayUsngOrMgrs(outputUnit, normalizedPoint)
        } else if (isGeoUnit) {
          displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator)
        } else if (isProUnit) {
          displayProject(outputUnit, normalizedPoint, mapSr.isWebMercator)
        }
      } else { // proj or geo
        if (curSr.isGeographic) {
          if (outputUnit === 'MGRS' || outputUnit === 'USNG') {
            displayUsngOrMgrs(outputUnit, normalizedPoint)
          } else if (isGeoUnit) {
            displayDegOrDms(outputUnit, normalizedPoint, mapSr.isWebMercator)
          }
        } else {
          displayProject(outputUnit, normalizedPoint, mapSr.isWebMercator)
        }
      }
    }

    const view = currentJimuMapView?.view
    const viewTypeIsThree = view?.type === '3d'
    if (viewTypeIsThree) {
      _setEyeInfo()
      if (threeDPoint) _setElevInfo(threeDPoint)
    }
  }

  const onLocateClick = async () => {
    setGeoInfo('')
    setElevInfo('')
    setElevNum(null)
    setElevUnit('')
    setEyeInfo('')
    setEyeNum(null)
    setEyeUnit('')
    graphicsLayer.current.remove(markerGraphic.current)
    markerGraphic.current = null
    const selectedSystem = coordinateSystem.find(item => item.id === selectedSystemId)
    const canShowClient = await canShowInClient(selectedSystem)
    if (canShowClient) {
      if (!locateActive) {
        setShowTips(true)
        setShowMouseTips(false)
        setEnableRealtime(false)
      } else {
        setShowTips(false)
        setShowMouseTips(true)
        setEnableRealtime(true)
      }
    } else {
      setShowMouseTips(false)
      setEnableRealtime(false)
      if (!locateActive) {
        setShowTips(true)
      } else {
        setShowTips(false)
        setGeoInfo('')
      }
    }
    setLocateActive(!locateActive)
  }

  const handleSystemChange = async (systemId: string) => {
    const selectedSystem = coordinateSystem.find(item => item.id === systemId)
    const canShowClient = await canShowInClient(selectedSystem)
    if (canShowClient) {
      setEnableRealtime(true)
      setShowMouseTips(true)
    } else {
      setEnableRealtime(false)
      setShowMouseTips(false)
    }
    setSelectedSystemId(systemId)
    setLocateActive(false)
    setShowTips(false)
    setGeoInfo('')
    setEyeInfo('')
    setEyeNum(null)
    setEyeUnit('')
    setElevInfo('')
    setElevNum(null)
    setElevUnit('')
    graphicsLayer.current.remove(markerGraphic.current)
    markerGraphic.current = null
  }

  const useMap = useMapWidgetIds?.length > 0
  if (!useMap) {
    return (
      <WidgetPlaceholder
        widgetId={id}
        icon={coordinatesIcon}
        data-testid='coordinatesPlaceholder'
        message={placeHolderName}
      />
    )
  }
  const locateBtnTips = locateActive ? disableClickTips : enableClickTips
  const isClassic = widgetStyle === WidgetStyleType.classic
  const hasSecondDivider = geoInfo || elevInfo
  const classicGeo = `${geoInfo}${elevInfo && `${geoInfo && ' | '}${elevInfo}`}${eyeInfo && `${hasSecondDivider && ' | '}${eyeInfo}`}`
  const classicCoorInfo = showTips ? mapClickTips : (showMouseTips ? mouseMoveTips : classicGeo || enableClickTips)
  const hasElevOrEye = eyeNum || elevNum
  const modernCoorInfo = (
    showTips
      ? mapClickTips
      : (showMouseTips
          ? mouseMoveTips
          : <div className='info-container'>
              <div className={`d-flex w-100 ${hasElevOrEye ? 'h-50' : 'h-100'}`}>
                {(geoInfo === computing || !geoInfo)
                  ? <div className='coordinates-computing'>{geoInfo || ((elevNum || eyeNum) ? '--' : enableClickTips)}</div>
                  : <TextAutoFit className='coordinates-card-text-geo' text={geoInfo} widgetRect={widgetRect} domChange={hasElevOrEye} />
                }
              </div>
              {hasElevOrEye &&
                <div className='h-50'>
                  {elevNum
                    ? <div className='textfit-container'>
                      <TextAutoFit className='coordinates-card-text' text={elevNum} widgetRect={widgetRect} />
                      <div className='info-unit'>{translate('elev', { ele: unitAbbrMap[elevUnit] })}</div>
                    </div>
                    : <div className='textfit-container'>
                      <div className='coordinates-card-text-empty'>--</div>
                      <div className='info-unit'>{translate('elev', { ele: unitAbbrMap[elevUnit] })}</div>
                    </div>
                  }
                  {eyeNum
                    ? <div className='textfit-container'>
                      <TextAutoFit className='coordinates-card-text' text={eyeNum} widgetRect={widgetRect} />
                      <div className='info-unit'>{translate('eyeAlt', { alt: unitAbbrMap[eyeUnit] })}</div>
                    </div>
                    : <div className='textfit-container'>
                      <div className='coordinates-card-text-empty'>--</div>
                      <div className='info-unit'>{translate('eyeAlt', { alt: unitAbbrMap[eyeUnit] })}</div>
                    </div>
                  }
                </div>
              }
            </div>
        )
  )
  const infoTipsArr = [mapClickTips, mouseMoveTips, enableClickTips]
  const isDefaultTips = infoTipsArr.includes(classicCoorInfo)
  const classicCopyDisable = enableRealtime || isDefaultTips || (!locateActive && !geoInfo)
  const modernCopyDisable = enableRealtime || isDefaultTips || (!locateActive && !classicCoorInfo.trim())
  const hasSystem = coordinateSystem?.length > 0

  // Renderer
  return (
    <div className='jimu-widget-coordinates jimu-widget h-100' css={getStyle(theme, isClassic, widgetRect)}>
      {isClassic
        ? <div className='coordinates-widget-container d-flex justify-content-between'>
          <Button
            icon
            size='sm'
            type='tertiary'
            onClick={onLocateClick}
            active={locateActive}
            title={locateBtnTips}
            aria-label={locateBtnTips}
            className='jimu-outline-inside coordinates-locate'
            disabled={!hasSystem}
          >
            <LocatorOutlined />
          </Button>
          <div className='coordinates-info text-truncate' title={classicCoorInfo}>
            {classicCoorInfo}
          </div>
          <CopyBtn
            text={classicCoorInfo}
            disabled={classicCopyDisable}
          />
          {hasSystem &&
            <Dropdown size='sm' activeIcon>
              <DropdownButton
                arrow={false}
                icon
                size='sm'
                type='tertiary'
                className='suspension-drop-btn jimu-outline-inside'
                title={changeSystem}
              >
                <DownOutlined />
              </DropdownButton>
              <DropdownMenu>
                {coordinateSystem.map(item => {
                  const isActived = item.id === selectedSystemId
                  return (
                    <DropdownItem key={item.id} active={isActived} onClick={() => handleSystemChange(item.id)}>
                      {item.name}
                    </DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
          }
        </div>
        : <div className='coordinates-widget-container w-100 h-100'>
        <Card className='h-100 coordinates-card'>
          <CardBody className='widget-card-content'>
            {modernCoorInfo}
          </CardBody>
          <CardFooter className='widget-card-footer'>
            <div className='jimu-widget d-flex justify-content-between'>
              <Button
                icon
                size='sm'
                type='tertiary'
                onClick={onLocateClick}
                active={locateActive}
                title={locateBtnTips}
                aria-label={locateBtnTips}
              >
                <LocatorOutlined />
              </Button>
              <div className='d-flex justify-content-between'>
                {classicCoorInfo &&
                  <CopyBtn
                    text={classicCoorInfo}
                    disabled={modernCopyDisable}
                    className='coordinates-card-copy mr-1'
                  />
                }
                <Dropdown size='sm' activeIcon>
                  <DropdownButton
                    arrow={false}
                    icon
                    size='sm'
                    type='tertiary'
                    className='suspension-drop-btn'
                    title={changeSystem}
                  >
                    <DownOutlined className='suspension-drop-btn' />
                  </DropdownButton>
                  <DropdownMenu>
                    {coordinateSystem.map(item => {
                      const isActived = item.id === selectedSystemId
                      return (
                        <DropdownItem key={item.id} active={isActived} onClick={() => handleSystemChange(item.id)}>
                          {item.name}
                        </DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      }
      <JimuMapViewComponent
        useMapWidgetId={useMapWidgetIds?.[0]}
        onActiveViewChange={onActiveViewChange}
      />
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={debounceOnResize}
      />
    </div>
  )
}

export default Widget
