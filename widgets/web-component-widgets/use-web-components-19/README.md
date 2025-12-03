# Use Map Components (React 19 + Web Components)

This sample demonstrates wrapper-free integration of Calcite Components and ArcGIS JavaScript for Maps SDK Map components inside ArcGIS Experience Builder 1.19 (React 19 baseline). It shows how to obtain an active `MapView` via `JimuMapViewComponent` and attach it to an []`<arcgis-legend>`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) component.

## Contents

- `manifest.json` - Defines widget metadata and EXB version.
- `src/runtime/widget.tsx` - Functional runtime component that imports Calcite Components and Map components.
- `src/setting/setting.tsx` - Builder settings panel. Allows users to select a target map widget.

## Prerequisites

- ArcGIS Experience Builder Developer Edition version 1.19.0. 
- A map widget must be present in the experience for this sample to bind to its view.

## Installation

1. Clone the SDK resources repository (or download zip).
2. Copy the folder `widgets/web-component-widgets/use-web-components-19` into your EXB install at `client/your-extensions/widgets/`
3. Restart (or rebuild) the EXB dev environment if required.
4. Add the widget to an experience and select a map widget in its settings panel.

## How It Works

```typescript
import 'calcite-components'
import 'arcgis-map-components'
```

register custom elements before React renders. The component then:
1. Uses `JimuMapViewComponent` with `onActiveViewChange` to receive a `JimuMapView`.
2. Stores a ref to `<arcgis-legend>` via `useRef`.
3. Assigns the underlying `MapView` (`activeView.view`) to `legendRef.current.view` once available.
4. Renders a `<calcite-button>` (demonstrating direct Calcite usage) and the `<arcgis-legend>` element.

## License

Please retain the Apache 2.0 license header when using code from this sample, as specified in [License.txt](../../../License.txt).
