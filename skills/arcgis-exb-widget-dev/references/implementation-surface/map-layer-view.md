# Implementation Surface: Map and Layer View

## Map View and Layer View

- In setting UI, use `MapWidgetSelector` to bind the widget to a map widget ID.
- Persist selected map widget IDs in `useMapWidgetIds`; in most widgets runtime uses `useMapWidgetIds?.[0]`.
- In setting UI, use `LayerSetting` when users must choose layers/tables from the selected map.
- If widget behavior depends on tables, ensure table selection is explicitly enabled and persisted.

- Use `jimu-arcgis` exports:
  - `JimuMapViewComponent`
  - `JimuLayerViewComponent`
  - `loadArcGISJSAPIModules`
  - map/feature/zoom utility modules when they match the need
- Store map widget IDs or layer/data source IDs in config, not live views.
- Resolve `JimuMapView`/`LayerView` instances at runtime from IDs in config; never persist view instances in widget config.
- On active view change, clean up watchers, highlights, graphics, handles, and temporary layers.
- Handle active-view transitions explicitly: initial empty state, view switching, and unmount cleanup.
- Guard all map/layer operations by view readiness and layer-view status before querying, selecting, or highlighting.
- Prefer `JimuLayerViewComponent` for layer-view lifecycle and status callbacks instead of ad-hoc polling.
- For `reactiveUtils.on/watch` and view/layer watchers, keep handles in a single replaceable slot (or keyed registry) and always remove previous handles before rebinding.
- In watcher callbacks, guard against stale view references after active-view switch.
- Use typed SDK classes:

```ts
import type Graphic from '@arcgis/core/Graphic'

const [GraphicCtor] = await loadArcGISJSAPIModules(['esri/Graphic']) as [typeof Graphic]
```

- Do not assume a 2D `MapView` when a `SceneView` may be configured unless the widget requirement says 2D only.
- Branch by `view.type` (`2d`/`3d`) before invoking view-specific APIs.
- Keep temporary graphics/layers scoped and removable; remove them on view change and component unmount.

## Runtime Loading Patterns

- Prefer `JimuMapViewComponent` + `onActiveViewChange` to resolve active `JimuMapView`.
- Before map-dependent logic, await `jimuMapView.whenJimuMapViewLoaded()`.
- Do not block runtime on `whenAllJimuLayerViewLoaded()` unless the widget truly requires every layer view.
- Prefer this pattern for layer views:
  - read current ready layer views from `getAllLoadedJimuLayerViews()`
  - subscribe to `addJimuLayerViewCreatedListener(listener)` for incremental arrivals
  - remove listener/handle in cleanup
- When specific layer view is required:
  - use `whenJimuLayerViewLoaded(jimuLayerViewId)` if ID is known
  - use `whenJimuLayerViewLoadedByDataSource(ds)` if DataSource is known

## Layer and Table DataSource Resolution

- For a loaded layer view:
  - use `jimuLayerView.layerDataSourceId` to resolve the bound layer DS ID
  - use `jimuLayerView.getLayerDataSource()` to get DS
  - if missing, call `await jimuLayerView.createLayerDataSource()`
- For tables in map context:
  - use `jimuMapView.getJimuTables()` to read existing `JimuTable` instances
  - use `addJimuTableCreatedListener(listener)` for new tables and remove listener in cleanup
  - use `jimuTable.tableDataSourceId`, `jimuTable.getTableDataSource()`, and `await jimuTable.createTableDataSource()` as needed

## Map Interaction Safety

- Always remove interaction listeners/handles and clean up temporary map state on deactivation/unmount.
- When a map becomes invisible within the viewport/current view, it enters a cached state and widgets must not interact with it. When the map becomes visible again, it enters a restore state and widgets may resume interaction.
  - Use `jimuMapView.isCached()` to determine whether the map is in the cached state, and skip interactive work while it is cached.
  - Use `jimuMapView.addCacheListener(listener)` to detect when the map enters the cached state so the widget can stop interaction and clean up transient map resources.
  - Use `jimuMapView.addRestoreListener(listener)` to detect when the map enters the restore state so the widget can resume interaction if it is still active.
  - Remove cache/restore listeners during cleanup or when the active map view changes.
- When multiple widgets interact with the same map widget, conflicts can occur. Follow these rules to avoid conflicts:
  - Use `appState.mapWidgetsInfo[mapWidgetId]?.autoControlWidgetId` as the single ownership flag for which widget currently controls map interaction.
  - When a widget needs to interact with the map (draw/sketch/click takeover), it must acquire map interaction control through `getAppStore().dispatch(appActions.requestAutoControlMapWidget(mapWidgetId, widgetId))`. This updates `appState.mapWidgetsInfo[mapWidgetId]?.autoControlWidgetId` to the requesting widget id.
  - When a widget no longer needs to interact with the map, it should release map interaction control through `getAppStore().dispatch(appActions.releaseAutoControlMapWidget(mapWidgetId))`.
  - While active, watch the current `autoControlWidgetId`; if it changes to another widget, silently exit interaction mode and clean up local state/resources  without dispatching release again.

## `MapViewManager`

- Use `MapViewManager` when runtime/setting logic must resolve map views outside direct component callbacks.
- Treat `MapViewManager` as a runtime resolver; do not persist resolved views in config.
- Validate map view existence/readiness before running map-dependent logic.
- Keep `MapViewManager` usage consistent with `JimuMapViewComponent` lifecycle; prefer component lifecycle callbacks when available.
- On widget unmount or active map changes, clear handlers/watchers bound to resolved map views.
- Avoid assuming a single map view; handle no-map, single-map, and switched-map scenarios.

```ts
const mapViewManager = MapViewManager.getInstance()
const jimuMapView = mapViewManager.getJimuMapViewById(mapWidgetId)
if (!jimuMapView?.view) return
```

```ts
// Example cleanup pattern for active view change/unmount
type RemovableHandle = { remove: () => void }
const handles: RemovableHandle[] = []

useEffect(() => {
  if (!jimuMapView?.view) return

  const watchHandle = jimuMapView.view.watch('stationary', () => {
    // runtime logic
  })
  handles.push(watchHandle)

  return () => {
    handles.forEach(h => h.remove())
    handles.length = 0
  }
}, [jimuMapView])
```
