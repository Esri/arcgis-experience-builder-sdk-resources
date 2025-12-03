# Use Map Components

This sample demonstrates how to use the [`arcgis-map-components`](https://developers.arcgis.com/javascript/latest/references/map-components/) component in a custom widget. This widget works for versions 1.15-1.18. For version 1.19, please see the [`use-web-components-19`](../use-web-components-19/) sample widget.

## Contents

- `manifest.json` - Defines widget metadata and EXB version.
- `src/runtime/widget.tsx` - Functional runtime component that imports Calcite Components and Map components.
- `src/setting/setting.tsx` - Builder settings panel. Allows users to select a target map widget.

## Prerequisites

- ArcGIS Experience Builder Developer Edition versions 1.15-1.18. 
- A map widget must be present in the experience for this sample to bind to its view.

## Installation

1. Clone the SDK resources repository (or download zip).
2. Copy the folder `widgets/web-component-widgets/use-web-components-19` into your EXB install `client/your-extensions/widgets/`
3. Restart (or rebuild) the EXB dev environment if required.
4. Add the widget to an experience and select a map widget in its settings panel.

## How it works

At a high level, the widget:
- Imports components from `arcgis-map-components`
- Binds to a selected Map widget via `JimuMapViewComponent` and listens for the active view.
- Hold refs to the `<ArcgisLayerList>` and `<ArcgisLegend>` components so it can assign the `MapView` when available.
- Assign the Experience Builder `MapView` to each component’s `view` property, which enables them to render against the same map.

Note: You can import from either `arcgis-map-components` (web components) or `@arcgis/map-components-react` (React wrappers). Both resolve to the shared entry so the code isn’t bundled multiple times.

## Key snippet

```typescript
import { ArcgisLayerList } from 'arcgis-map-components'
import { ArcgisLegend } from '@arcgis/map-components-react'

...

const legendRef = React.useRef(null)
const layerListRef = React.useRef(null)

...

return (
  <div className="widget-demo jimu-widget m-2">
    <JimuMapViewComponent onActiveViewChange={onActiveViewChange} useMapWidgetId={props.useMapWidgetIds[0]}></JimuMapViewComponent>
    <p>This widget demos how to use Maps components</p>
    <ArcgisLegend ref={legendRef}></ArcgisLegend>
    <hr />
    <ArcgisLayerList ref={layerListRef}></ArcgisLayerList>
  </div>
)
```

## License

Please retain the Apache 2.0 license header when using code from this sample, as specified in [License.txt](../../../License.txt).