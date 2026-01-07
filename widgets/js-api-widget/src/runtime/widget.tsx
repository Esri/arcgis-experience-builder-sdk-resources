/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import { JimuMapViewComponent } from 'jimu-arcgis'

const {useEffect, useState, useRef } = React

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const {useMapWidgetIds} = props
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
  return (
    <div className="widget-demo jimu-widget m-2">
      <JimuMapViewComponent useMapWidgetId={useMapWidgetIds?.[0]} onActiveViewChange={(view) => {setActiveView(view)}}></JimuMapViewComponent>
      <div className='container' ref={containerRef}></div>
    </div>
  )
}

export default Widget
