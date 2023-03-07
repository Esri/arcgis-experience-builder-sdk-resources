import { getAppStore, i18n } from 'jimu-core'

const projectUnits = ['INCHES', 'FOOT', 'FOOT_US', 'YARDS', 'MILES', 'NAUTICAL_MILES', 'MILLIMETERS',
  'CENTIMETERS', 'METER', 'KILOMETERS', 'DECIMETERS', 'LINK_CLARKE', 'FOOT_GOLD_COAST', 'FOOT_CLARKE',
  'CHAIN_SEARS_1992_TRUNCATED', 'YARD_INDIAN', 'CHAIN_BENOIT_1895_B', 'YARD_SEARS', 'CHAIN_SEARS',
  'FOOT_SEARS', 'YARD_INDIAN_1937', '50_KILOMETERS', '150_KILOMETERS']
const geographicUnits = ['DECIMAL_DEGREES', 'DEGREE_MINUTE_SECONDS', 'DEGREE', 'DEGREES_DECIMAL_MINUTES', 'GRAD', 'MGRS', 'USNG']
const unitsValue = {
  // Meter
  INCHES: 0.0254,
  FOOT: 0.3048,
  FOOT_US: 0.3048006096012192,
  YARDS: 0.9144,
  MILES: 1609.344,
  NAUTICAL_MILES: 1852,
  MILLIMETERS: 0.001,
  CENTIMETERS: 0.01,
  METER: 1,
  KILOMETERS: 1000,
  DECIMETERS: 0.1,
  LINK_CLARKE: 0.2011661949,
  FOOT_GOLD_COAST: 0.3047997101815088,
  FOOT_CLARKE: 0.304797265,
  CHAIN_SEARS_1922_TRUNCATED: 20.116756,
  YARD_INDIAN: 0.9143985307444408,
  CHAIN_BENOIT_1895_B: 20.11678249437587,
  YARD_SEARS: 0.9143984146160287,
  CHAIN_SEARS: 20.11676512155263,
  FOOT_SEARS: 0.3047994715386762,
  YARD_INDIAN_1937: 0.91439523,
  '50_KILOMETERS': 50000.0,
  '150_KILOMETERS': 150000.0,
  // radian
  DEGREE: 0.0174532925199433,
  DECIMAL_DEGREES: 0.0174532925199433,
  MGRS: 0.0174532925199433, // MGRS / DEGREE = 1
  USNG: 0.0174532925199433,
  DEGREE_MINUTE_SECONDS: 0.0174532925199433,
  GRAD: 0.01570796326794897
}
const simGeogcsJson = require('../json/simple_geogcs.json')

/**
 * Helper function to prettify decimal degrees into DMS (degrees-minutes-seconds).
 * @param {number} decDeg The decimal degree number
 * @param {string} decDir LAT or LON
 *
 * @return {string} Human-readable representation of decDeg.
 */
export const degToDMS = (decDeg, decDir: 'LAT' | 'LON', decimal: number, showSeparators: boolean) => {
  let d = Math.abs(decDeg)
  let deg = Math.floor(d)
  d = d - deg
  let min = Math.floor(d * 60)
  let sec = (d - min / 60) * 60 * 60
  if (sec === 60) { // can happen due to rounding above
    min++
    sec = 0
  }
  if (min === 60) { // can happen due to rounding above
    deg++
    min = 0
  }
  const fixedSec = localizeNumberBySettingInfo(sec, {
    places: decimal,
    digitSeparator: showSeparators
  })
  const minStr = min < 10 ? `0${min}` : min
  const secStr = sec < 10 ? `0${fixedSec}` : fixedSec
  const dir = (decDir === 'LAT') ? (decDeg < 0 ? 'S' : 'N') : (decDeg < 0 ? 'W' : 'E')
  // return `${deg}&deg;${minStr}&prime;${secStr}&Prime;${dir}`
  return `${deg}°${minStr}′${secStr}″${dir}`
}

//for hack Degrees Decimal Minutes
export const degToDDM = (decDeg, decimal: number, showSeparators: boolean) => {
  let d = Math.abs(decDeg)
  let deg = Math.floor(d)
  d = d - deg
  let min = Math.floor(d * 60)
  let sec = Math.floor((d - min / 60) * 60 * 60)
  if (sec === 60) { // can happen due to rounding above
    min++
    sec = 0
  }
  if (min === 60) { // can happen due to rounding above
    deg++
    min = 0
  }

  const dm = localizeNumberBySettingInfo((min + (sec / 60)), {
    places: decimal,
    digitSeparator: showSeparators
  })
  // return `${deg}&deg;${dm}&prime;`
  return `${deg}°${dm}′`
}

export const isGeographicUnit = (unit) => {
  return geographicUnits.includes(unit)
}

export const isProjectUnit = (unit) => {
  return projectUnits.includes(unit)
}

export const localizeNumberBySettingInfo = (num: number, settingInfo) => {
  const { places, digitSeparator } = settingInfo
  if (digitSeparator) {
    return i18n.getIntl().formatNumber(num, { maximumFractionDigits: places, minimumFractionDigits: places })
  } else {
    return num.toFixed(places)
  }
}

export const getUnits = () => {
  let _units = 'english'
  const appState = getAppStore().getState()
  const userInfo = appState?.user
  if (userInfo) {
    const { culture, units } = userInfo
    if (units) {
      _units = units
    } else {
      if (culture?.startsWith('en')) {
        _units = 'english'
      } else {
        _units = 'metric'
      }
    }
  } else {
    return _units
  }
}

/**
 * Get cs default unit by crs
 * @param {any} crs
 */
export const getCSUnitByCrs = (crs: any): string => {
  const wkt = crs?.wkt
  if (!wkt) return ''
  const unitIndex = wkt?.lastIndexOf(',UNIT')
  if (unitIndex > 0) {
    const toDealStr = wkt.substr(unitIndex)
    const startIndex = toDealStr.indexOf('[')
    const endIndex = toDealStr.indexOf(']')
    const spheroidArrStr = toDealStr.substring(startIndex + 1, endIndex)
    const spheroidArr = spheroidArrStr.split(',')
    return spheroidArr?.[0]?.replace(/\"/g, '')?.replace(/\'/g, '')
  }
  return ''
}

/**
 * Get SPHEROID/GEOGCS/DATUM by crs
 * @param {any} crs
 */
export const getWktKeyStr = (crs: any, key: string = 'SPHEROID'): string => {
  const wkt = crs?.wkt
  const keyIndex = wkt?.indexOf(key)
  if (keyIndex >= 0) {
    const toDealStr = wkt.substr(keyIndex)
    const startIndex = toDealStr.indexOf('[')
    const endIndex = toDealStr.indexOf(']')
    const keyArrStr = toDealStr.substring(startIndex + 1, endIndex)
    const keyArr = keyArrStr.split(',')
    return keyArr?.[0]?.replace(/\"/g, '')?.replace(/\'/g, '')
  }
  return null
}

/**
 * Get outSR crs by spheroidStr
 * @param {string} spheroidStr
 */
export const getCrsBySpheroidStr = (spheroidStr: string): any => {
  return simGeogcsJson.find(crs => {
    return spheroidStr === crs?.name
  })
}

/**
 * Get cs default unit by crs
 * @param {string} defaultUnit
 * @param {string} outputUnit
 */
export const getUnitRate = (defaultUnit: string, outputUnit: string, mapIsMercator?: boolean) => {
  const notInUnitsValue = !unitsValue[defaultUnit?.toUpperCase()] || !unitsValue[outputUnit.toUpperCase()]
  const defaultRate = mapIsMercator || (!defaultUnit || !outputUnit) || outputUnit === 'DEGREES_DECIMAL_MINUTES' || notInUnitsValue
  if (defaultRate) {
    return 1
  }
  return unitsValue[defaultUnit.toUpperCase()] / unitsValue[outputUnit.toUpperCase()]
}
