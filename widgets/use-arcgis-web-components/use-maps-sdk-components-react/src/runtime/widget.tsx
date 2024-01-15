import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { React, type AllWidgetProps } from 'jimu-core'
import { ArcgisLegend } from "@arcgis/map-components-react";

const Widget = (props: AllWidgetProps<{}>) => {
  const [activeView, setActiveView] = React.useState<JimuMapView>(null)

  if (!props.useMapWidgetIds || props.useMapWidgetIds.length === 0) {
    return <div className="widget-use-component jimu-widget m-2">Please select a map widget in the setting panel.</div>
  }

  return (
    <div className="widget-use-component jimu-widget m-2">
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds[0]} onActiveViewChange={setActiveView}/>
      { activeView && <ArcgisLegend view={activeView.view}/> }
    </div>
  )
}

export default Widget
