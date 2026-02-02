import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

/** Please make sure import the packages to use web components */
import 'calcite-components'
import 'arcgis-map-components'

const Widget = (props: AllWidgetProps<object>) => {
  const [activeView, setActiveView] = React.useState<JimuMapView | null>(null)

  const onActiveViewChange = (activeView: JimuMapView) => {
    if (!activeView) {
      return
    }

    setActiveView(activeView)
  }

  const onViewsCreate = (views: { [viewId: string]: JimuMapView }) => {
    const activeView = Object.values(views).find((view) => view?.isActive)
    if (!activeView) {
      return
    }

    setActiveView(activeView)
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
      <JimuMapViewComponent
        onActiveViewChange={onActiveViewChange}
        onViewsCreate={onViewsCreate}
        useMapWidgetId={props.useMapWidgetIds[0]}
      ></JimuMapViewComponent>
      <arcgis-legend view={activeView?.view}></arcgis-legend>
    </div>
  )
}

export default Widget
