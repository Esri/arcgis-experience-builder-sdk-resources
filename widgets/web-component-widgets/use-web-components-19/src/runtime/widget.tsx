import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

/** Please make sure import the packages to use web components */
import 'calcite-components'
import 'arcgis-map-components'

const Widget = (props: AllWidgetProps<object>) => {
  const legendRef = React.useRef(null)

  const onActiveViewChange = (activeView: JimuMapView) => {
    if (!activeView || !legendRef.current) {
      return
    }

    legendRef.current.view = activeView.view
  }

  if (!props.useMapWidgetIds || props.useMapWidgetIds.length === 0) {
    return (
      <div className="jimu-widget m-2">
        <p>Please select a map widget in the widget settings.</p>
      </div>
    )
  }

  return (
    <div className="jimu-widget m-2">
      <p>This widget demos how to use components without the react wrapper.</p>
      <calcite-button
        appearance="outline"
        scale="m"
        icon-start="home"
      > This is a calcite button
      </calcite-button>

      <br/>
      <JimuMapViewComponent onActiveViewChange={onActiveViewChange} useMapWidgetId={props.useMapWidgetIds[0]}></JimuMapViewComponent>
      <arcgis-legend ref={legendRef}></arcgis-legend>
    </div>
  )
}

export default Widget
