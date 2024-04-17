import { React, type AllWidgetProps } from 'jimu-core'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
/**
 * You can import the components from `@arcgis/map-components-react` or `arcgis-map-components`.
 * Use either of them, the components will not be compiled into the widget bundle, but loaded from the `arcgis-map-components` entry.
 */
import { ArcgisLayerList } from 'arcgis-map-components'
import { ArcgisLegend } from '@arcgis/map-components-react'

const Widget = (props: AllWidgetProps<{ [key: string]: never }>) => {
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)

  if (!props.useMapWidgetIds || props.useMapWidgetIds.length === 0) {
    return <div>Please select a map widget</div>
  }

  const onActiveViewChange = (activeView: JimuMapView) => {
    if (!activeView) {
      return
    }
    setJimuMapView(activeView)
  }

  const onArcgisLegendReady = (event: CustomEvent) => {
    if (!event.target) {
      return
    }

    (event.target as any).view = jimuMapView.view
  }

  const onArcgisLayerListReady = (event: CustomEvent) => {
    if (!event.target) {
      return
    }

    (event.target as any).view = jimuMapView.view
  }

  return (
    <div className="widget-demo jimu-widget m-2">
      <JimuMapViewComponent onActiveViewChange={onActiveViewChange} useMapWidgetId={props.useMapWidgetIds[0]}></JimuMapViewComponent>
      <p>This widget demos how to use Maps components</p>
      {
        !jimuMapView && <div>Map is loading...</div>
      }
      {
        jimuMapView && <ArcgisLegend onArcgisLegendReady={onArcgisLegendReady}></ArcgisLegend>
      }
      <hr />
      {
        jimuMapView && <ArcgisLayerList onArcgisLayerListReady={onArcgisLayerListReady}></ArcgisLayerList>
      }
    </div>
  )
}

export default Widget
