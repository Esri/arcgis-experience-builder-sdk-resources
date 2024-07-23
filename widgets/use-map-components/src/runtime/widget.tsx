import { React, type AllWidgetProps } from 'jimu-core'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'

import { defineCustomElements } from '@arcgis/map-components/dist/loader'
import { ArcgisLegend } from '@arcgis/map-components-react'
// import esriConfig from '@arcgis/core/config'

// Register custom elements
defineCustomElements(window)

/**
 * set assets path cause erros, it'll load assets from this URL: https://jsdev.arcgis.com/4.30/@arcgis/core/assets/esri/widgets/support/components/assets/button/t9n/messages_en.json.
 * However, the correct URL is: https://jsdev.arcgis.com/4.30/esri/widgets/support/components/assets/button/t9n/messages_en.json
 */
// esriConfig.assetsPath = `${window.jimuConfig.arcgisJsApiUrl}@arcgis/core/assets`

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
    </div>
  )
}

export default Widget
