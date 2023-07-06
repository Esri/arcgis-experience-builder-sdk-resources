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
import { React, jimuHistory, DataSourceComponent, type AllWidgetProps, type IMState, type IMUrlParameters } from 'jimu-core'

import MapView from 'esri/views/MapView'
import type WebMap from 'esri/WebMap'
import Extent from 'esri/geometry/Extent'

import { MapViewManager, type WebMapDataSource } from 'jimu-arcgis'

interface ExtraProps {
  queryObject: IMUrlParameters
}

export default class Widget extends React.PureComponent<AllWidgetProps<unknown> & ExtraProps, unknown> {
  mapContainer = React.createRef<HTMLDivElement>()
  mapView: MapView
  webMap: WebMap
  extentWatch: __esri.WatchHandle

  mvManager: MapViewManager = MapViewManager.getInstance()

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      queryObject: state.queryObject
    }
  }

  onDsCreated = (webmapDs: WebMapDataSource) => {
    if (!webmapDs) {
      return
    }

    if (!this.mvManager.getJimuMapViewById(this.props.id)) {
      const options: __esri.MapViewProperties = {
        map: webmapDs.map,
        container: this.mapContainer.current
      }
      if (this.props.queryObject?.[this.props.id]) {
        const extentStr = this.props.queryObject[this.props.id].substr('extent='.length)
        let extent
        try {
          extent = new Extent(JSON.parse(extentStr))
        } catch (err) {
          console.error('Bad extent URL parameter.')
        }

        if (extent) {
          options.extent = extent
        }
      }
      this.mvManager.createJimuMapView({
        mapWidgetId: this.props.id,
        view: new MapView(options),
        dataSourceId: webmapDs.id,
        isActive: true,
        mapViewManager: this.mvManager
      }).then(jimuMapView => {
        if (!this.extentWatch) {
          this.extentWatch = jimuMapView.view.watch('extent', (extent: __esri.Extent) => {
            jimuHistory.changeQueryObject({
              [this.props.id]: `extent=${JSON.stringify(extent.toJSON())}`
            })
          })
        }
      })
    }
  }

  mapNode = <div className="widget-map" style={{ width: '100%', height: '100%' }} ref={this.mapContainer}></div>

  render () {
    if (!this.props.useDataSources || this.props.useDataSources.length === 0) {
      return 'Select a webmap in the settings panel'
    }
    return <DataSourceComponent useDataSource={this.props.useDataSources[0]} onDataSourceCreated={this.onDsCreated}>
      {this.mapNode}
    </DataSourceComponent>
  }
}
