# Legend widget

This sample demonstrates how to include a widget from the ArcGIS API for JavaScript. 

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `manifest.json`, the dependencies are loaded using the `dependency` property.

```javascript
"dependency": "jimu-arcgis",
```

Then in `widget.tsx`, it imports the Experience Builder helpers and relies on the ArcGIS Maps SDK for JavaScript web component for the legend.

```javascript
import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent } from 'jimu-arcgis'
```

The widget is implemented as a functional component using React hooks to manage the active map view and legend element.

```javascript
const { useEffect, useState, useRef } = React
```

The `JimuMapViewComponent` reports the current view. A `useEffect` hook watches for view changes and recreates the `<arcgis-legend>` web component so it always targets the active view.

```javascript
const containerRef = useRef<HTMLDivElement>(null)
const [activeView, setActiveView] = useState(null)
const legendRef = useRef<HTMLArcgisLegendElement>(null)

useEffect(() => {
  if (legendRef.current) {
    // Cleanup any existing legend element before creating a new one.
    legendRef.current.destroy()
    if (containerRef.current?.contains(legendRef.current)) {
      containerRef.current.removeChild(legendRef.current)
    }
    legendRef.current = null
  }

  if (!containerRef.current || !activeView) {
    return
  }

  const legend = document.createElement('arcgis-legend')
  legend.view = activeView.view
  containerRef.current.append(legend)
  legendRef.current = legend
}, [activeView])
```

The view is provided by the map widget through `JimuMapViewComponent`:

```javascript
<JimuMapViewComponent
  useMapWidgetId={useMapWidgetIds?.[0]}
  onActiveViewChange={(view) => { setActiveView(view) }}
/>
```
