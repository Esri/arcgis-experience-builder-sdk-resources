import { React, type AllWidgetProps } from 'jimu-core'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
/**
 * You can import the components from `@arcgis/map-components-react` or `arcgis-map-components`.
 * Use either of them, the components will not be compiled into the widget bundle, but loaded from the `arcgis-map-components` entry.
 */
import { ArcgisLayerList } from 'arcgis-map-components'
import { ArcgisLegend } from '@arcgis/map-components-react'

const Widget = (props: AllWidgetProps<{ [key: string]: never }>) => {
  const legendRef = React.useRef(null)
  const layerListRef = React.useRef(null)

  if (!props.useMapWidgetIds || props.useMapWidgetIds.length === 0) {
    return <div>Please select a map widget</div>
  }

  const onActiveViewChange = (activeView: JimuMapView) => {
    if (!activeView || !legendRef.current || !layerListRef.current) {
      return
    }

    legendRef.current.view = activeView.view
    layerListRef.current.view = activeView.view
  }

  return (
    <div className="widget-demo jimu-widget m-2">
      <JimuMapViewComponent onActiveViewChange={onActiveViewChange} useMapWidgetId={props.useMapWidgetIds[0]}></JimuMapViewComponent>
      <p>This widget demos how to use Maps components</p>
      <ArcgisLegend ref={legendRef}></ArcgisLegend>
      <hr />
      <ArcgisLayerList ref={layerListRef}></ArcgisLayerList>
    </div>
  )
}

export default Widget
