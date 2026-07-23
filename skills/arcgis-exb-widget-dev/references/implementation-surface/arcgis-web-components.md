# Implementation Surface: ArcGIS Web Components

## Introduction
To get detailed information about the arcgis web components, please refer to the `node_modules/@arcgis/*`

## Scope

- Apply this surface when runtime renders ArcGIS web components (for example `arcgis-legend`) directly.
- Keep this surface runtime-only. Do not move builder-only behavior into web component lifecycle code.
- Prefer ArcGIS map components over deprecated ArcGIS JS API core widgets in new widget code.
- In ExB map scenarios, bind map-related components through `referenceElement` instead of assigning `component.view`.

## Lifecycle Contract

- Load component definitions once (for example by caching `loadArcGISMapComponents()` promise).
- Create web component element only when container/view is ready.
- Recreate element only when one of these changes:
	- target ArcGIS view instance changed
	- host container changed
	- requirement explicitly needs full recreation (breaking option change)
- Always remove event listeners and destroy/remove the element in cleanup.
- Use `jimuMapView.mapComponent` as the reference element for map-related web components.

## Popup and Map Component Access

- Treat popup access as web-component-first in ExB runtime.
- Use `jimuMapView.mapComponent.popupElement` or `jimuMapView.getPopupElement()` instead of relying on `jimuMapView.view.popup` as the primary path.
- Use `jimuMapView.mapComponent.openPopup()` and `jimuMapView.mapComponent.closePopup()` for popup control when possible.
- Add popup event listeners to popup element and remove them in cleanup.

```ts
const popupElement = jimuMapView.getPopupElement()
if (!popupElement) return

const onPopupVisible = () => {
	// handle popup state changes
}

popupElement.addEventListener('arcgisPropertyChange', onPopupVisible)
return () => popupElement.removeEventListener('arcgisPropertyChange', onPopupVisible)
```

```ts
let loadPromise: Promise<void> | null = null

const ensureLoaded = async () => {
	if (!loadPromise) loadPromise = loadArcGISMapComponents()
	try {
		await loadPromise
	} catch (err) {
		loadPromise = null
		throw err
	}
}
```

```ts
// map-related web component binding pattern
const layerList = document.createElement('arcgis-layer-list') as HTMLArcgisLayerListElement
layerList.referenceElement = jimuMapView.mapComponent
container.appendChild(layerList)
```

```tsx
// declarative pattern with <arcgis-layer-list>
return jimuMapView?.mapComponent &&
	<arcgis-layer-list referenceElement={jimuMapView.mapComponent} />
```

## Event and Watcher Management

- Bind ArcGIS custom events (`arcgisReady`, etc.) exactly once per element instance.
- Before rebinding, remove old handlers from previous instance.
- For `reactiveUtils.on/watch` handles, keep one active handle per concern and replace it atomically.
- Guard callbacks with identity checks so stale callbacks cannot mutate current widget state.

```ts
this.layerInfosHandle?.remove?.()
this.layerInfosHandle = reactiveUtils.on(() => legend.activeLayerInfos, 'change', () => {
	if (legend !== this.legend) return
	this.syncLayerInfos()
})
```

## Error and State Handling

- Separate and render states clearly: unconfigured, loading component, view-not-ready, ready, error.
- On component-load failure, reset cached promise and allow retry path.
- Do not silently swallow lifecycle errors; fail to explicit runtime state.

## Legacy Compatibility

- Existing widget may use class components, `intl.formatMessage`, or legacy ArcGIS typings.
- When task is not a migration task, keep local style consistent with nearby widget code.
- For new files or major rewrites, prefer function components and current skill conventions.
- Do not mix old/new patterns in the same small patch unless required by dependency boundaries.

## Testing Targets

- Mock `loadArcGISMapComponents`, custom events, and `reactiveUtils.on/watch`.
- Assert listener/watcher cleanup on unmount and on view switch.
- Assert no duplicate event binding after re-render/recreate paths.
- Assert fallback state when loader rejects.
