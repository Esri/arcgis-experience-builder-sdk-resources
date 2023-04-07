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
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

interface State {
  extent: __esri.Extent
}

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>, State> {
  extentWatch: __esri.WatchHandle
  state: State = { extent: null }

  isConfigured = () => {
    return this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1
  }

  componentWillUnmount () {
    if (this.extentWatch) {
      this.extentWatch.remove()
      this.extentWatch = null
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (!this.extentWatch) {
      this.extentWatch = jimuMapView.view.watch('extent', extent => {
        this.setState({
          extent
        })
      })
    }
  }

  render () {
    if (!this.isConfigured()) {
      return 'Select a map'
    }

    return <div className="widget-use-map-view" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <h3>
        This widget demonstrates how to use a map view and display the map view's extent.
      </h3>

      <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange}></JimuMapViewComponent>

      <div>Extent:</div>
      <div>{this.state.extent && JSON.stringify(this.state.extent.toJSON())}</div>
    </div>
  }
}
