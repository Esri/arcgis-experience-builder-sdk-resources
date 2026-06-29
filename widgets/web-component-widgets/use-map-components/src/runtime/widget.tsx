import { React, type AllWidgetProps } from 'jimu-core'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
/**
 * Import `arcgis-map-components` to register the map component custom elements.
 */
import 'arcgis-map-components'

const Widget = (props: AllWidgetProps<{ [key: string]: never }>) => {
  const legendRef = React.useRef<HTMLArcgisLegendElement>(null)
  const layerListRef = React.useRef<HTMLArcgisLayerListElement>(null)

  if (!props.useMapWidgetIds || props.useMapWidgetIds.length === 0) {
    return <div>Please select a map widget</div>
  }

  const onActiveViewChange = (activeView: JimuMapView) => {
    if (!activeView || !legendRef.current || !layerListRef.current) {
      return
    }

    legendRef.current.referenceElement = activeView.mapComponent
    layerListRef.current.referenceElement = activeView.mapComponent
  }

  return (
    <div className="widget-demo jimu-widget m-2">
      <JimuMapViewComponent onActiveViewChange={onActiveViewChange} useMapWidgetId={props.useMapWidgetIds[0]}></JimuMapViewComponent>
      <p>This widget demos how to use Maps components</p>
      <arcgis-legend ref={legendRef}></arcgis-legend>
      <hr />
      <arcgis-layer-list ref={layerListRef}></arcgis-layer-list>
    </div>
  )
}

export default Widget
