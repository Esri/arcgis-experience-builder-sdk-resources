export default {
  // required fields
  eventRequiredLabel: 'Event *',
  networkRequiredLabel: 'Network *',
  routeIdRequiredLabel: 'Route ID *',
  routeNameRequiredLabel: 'Route Name *',
  startDateRequiredLabel: 'Start Date *',

  // attribute-table
  nullLabel: 'null',
  fieldInfo: 'Name: {name}\nAlias: {alias}\nType: {type}\nNullable: {nullable}\nDefault Value: {default}\nEditable: {editable}',
  fieldInfoWithError: 'Name: {name}\nAlias: {alias}\nType: {type}\nNullable: {nullable}\nDefault Value: {default}\nEditable: {editable}\nError: {error}',
  fieldTypeWithLength: '{fieldType} ({length})',
  attributeError: '{fieldValue}: {message}',

  // attribute-table-field
  nonNullable: 'Value cannot be null.',
  invalidShort: 'Invalid value for short data type.',
  invalidInteger: 'Invalid value for long data type.',
  invalidSingle: 'Invalid value for float data type.',
  invalidDouble: 'Invalid value for double data type.',
  invalidString: 'Value exceeds maximum length of field',
  invalidDate: 'Invalid date.',
  invalidRange: 'Value exceeds min or max values of range.',
  contingentValueError: 'Invalid contingent value in the field',

  // route-picker-popup
  selectRouteLabel: 'Select Route',
  routePicker: 'Route Picker',
  routeNameLabel: 'Route Name',
  routeIdLabel: 'Route ID',
  fromRouteNameLabel: 'From Route Name',
  fromRouteIdLabel: 'From Route ID',
  toRouteNameLabel: 'To Route Name',
  toRouteIdLabel: 'To Route ID',
  fromDateLabel: 'From Date',
  toDateLabel: 'To Date',
  measureLabel: 'Measure',
  fromMeasureLabel: 'From Measure',
  toMeasureLabel: 'To Measure',

  // intellisense
  noResult: 'No Results',

  // copy attributes
  copyAttributes: 'Copy Attributes',

  // settings
  noLrsLayersTips: 'No LRS layers are present in the selected map. Select a map with LRS Network and Event layers present in the webmap.',
  multipleServicesTips: 'Map contains layers from more than one feature service. Select a map with LRS Network and Event layers coming from a single feature service.',
  noNetworkLayersTips: 'No LRS Network layers are present in the selected map. Select a map with at least one LRS network layer present in the web map.',
  noMapSelectedTips: "Select a map.",
  displaySettings: 'Display Settings',
  hideNetwork: 'Hide Network',
  hideEvent: 'Hide Event',
  hideMethod: 'Hide Method',
  hideRoute: 'Hide Route in Search by Line',
  hideType: 'Hide Type',
  hideAttributeSet: 'Hide Attribute Set',
  hideMeasures: 'Hide Measures',
  hideDates: 'Hide Dates',
  useRoutesStartEndDates: 'Use Routes Start and End Dates',
  useRoutesStartEndDatesTooltip: 'Routes start/end dates will be used for new events. If disabled, the current date will be used.',
  selectMap: 'Select Map',
  loadLayers: 'Load layers',
  clearLayers: 'Clear layers',
  removeLayer: 'Remove',
  missingParentNetwork: 'Parent network is missing',

  // add events, split event, merge events
  inches: 'Inches (US Survey)',
  feet: 'Feet (US Survey)',
  yards: 'Yards (US Survey)',
  miles: 'Miles (US Survey)',
  nauticalMiles: 'Nautical miles (US Survey)',
  points: 'Points',
  millimeters: 'Millimeters',
  centimeters: 'Centimeters',
  meters: 'Meters',
  kilometers: 'Kilometers',
  decimalDegrees: 'Decimal degrees',
  decimeters: 'Decimeters',
  intFeet: 'Feet (International)',
  intMiles: 'Statute miles',
  esriUnknownUnits: 'esriUnknownUnits',

  // intellisense text input
  invalidRouteField: 'Route could not be found with provided value',

  // lock manager
  CannotAcquireLockUserAndVersion: 'Cannot acquire lock because {user} has the lock in version {version}.',
  UnavailableLockOnLine: 'Line {nameOrId} ({networkName}) is already locked by {lockUser} in version {version}.',
  UnavailableLockOnRoute: 'Route {nameOrId} ({networkName}) is already locked by {lockUser} in version {version}.',
  UnavailableLockOnLineWithoutVersion: 'Line {nameOrId} ({networkName}) is already locked by {lockUser} in a different service.',
  UnavailableLockOnRouteWithoutVersion: 'Route {nameOrId} ({networkName}) is already locked by {lockUser} in a different service.',
  YouAcquiredLockOnLine: 'You have acquired a lock on line {nameOrId} ({networkName}) in version {version}.',
  YouAcquiredLockOnRoute: 'You have acquired a lock on route {nameOrId} ({networkName}) in version {version}.',
  ReconcileRequired: 'The default version has changed. Reconcile this version with the default version in order to acquire locks.'

}
