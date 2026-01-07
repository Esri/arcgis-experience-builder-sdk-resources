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
import { type AllWidgetProps, React } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import 'arcgis-map-components'

interface State {
  jimuMapView: JimuMapView
}

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>, State> {

  constructor (props) {
    super(props)
    this.state = {
      jimuMapView: null,
    }
  }

  activeViewChangeHandler = (jmv: JimuMapView) => {
    this.setState({
      jimuMapView: jmv
    })
  }

  render () {
    return (
      <div
        className="widget-js-api-editor"
        style={{ height: '100%', overflow: 'auto' }}
      >
        {this.state.jimuMapView ?
          <arcgis-editor view={this.state.jimuMapView?.view}></arcgis-editor>
          :
          <p>Please select a map.</p>
        }
        <JimuMapViewComponent
          useMapWidgetId={this.props.useMapWidgetIds?.[0]}
          onActiveViewChange={this.activeViewChangeHandler}
        />
      </div>
    )
  }
}
