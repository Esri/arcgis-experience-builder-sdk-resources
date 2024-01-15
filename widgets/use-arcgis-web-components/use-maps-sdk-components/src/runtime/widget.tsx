import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { React, type AllWidgetProps } from 'jimu-core'
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { CalciteButton } from 'calcite-components'
defineMapElements()
const Widget = (props: AllWidgetProps<{}>) => {
  const [activeView, setActiveView] = React.useState<JimuMapView>(null)
  const legendRef = React.useRef<HTMLArcgisLegendElement>(null)

  if (!props.useMapWidgetIds || props.useMapWidgetIds.length === 0) {
    return <div className="widget-use-component jimu-widget m-2">Please select a map widget in the setting panel.</div>
  }

  const onActiveViewChange = (jmv: JimuMapView) => {
    setActiveView(jmv)

    if (legendRef.current && jmv.view) {
      legendRef.current.view = jmv.view
    }
  }

  return (
    <div className="widget-use-component jimu-widget m-2">
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds[0]} onActiveViewChange={onActiveViewChange}/>
      <arcgis-legend ref={legendRef}/>
      {/* <arcgis-basemap-gallery /> */}
      <CalciteButton>button</CalciteButton>
    </div>
  )
}

export default Widget
