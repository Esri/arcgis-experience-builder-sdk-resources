/* eslint-disable no-prototype-builtins */
/** @jsx jsx */
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
import { React, type AllWidgetProps, jsx } from 'jimu-core'
import { type IMConfig } from '../config'

import defaultMessages from './translations/default'
import FeatureLayer from 'esri/layers/FeatureLayer'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

interface IState {
  jimuMapView: JimuMapView
  featureLayerOnMap: FeatureLayer
}

export default class ViewLayersToggle extends React.PureComponent<
AllWidgetProps<IMConfig>,
IState
> {
  constructor (props) {
    super(props)
    this.state = {
      jimuMapView: undefined,
      featureLayerOnMap: undefined
    }
  }

  selectChangeHandler = (evt) => {
    if (this.state.jimuMapView) {
      if (this.state.featureLayerOnMap) {
        // Remove the old Feature Layer
        this.state.jimuMapView.view.map.remove(this.state.featureLayerOnMap)
        this.setState({
          featureLayerOnMap: undefined
        })
      }

      if (evt.target.value && evt.target.value !== '') {
        // Create and add the new Feature Layer
        const featureLayer = new FeatureLayer({
          url: evt.target.value
        })
        this.state.jimuMapView.view.map.add(featureLayer)
        this.setState({
          featureLayerOnMap: featureLayer
        })
      }
    } else {
      console.error(
        'You probably need to choose you map in the settings panel.'
      )
    }
  }

  render () {
    return (
      <div
        className="widget-view-layers-toggle jimu-widget"
        style={{ overflow: 'auto' }}
      >
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            // The JimuMapViewComponent gives us a connection to the
            // ArcGIS JS API MapView object. We store it in the State.
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={(jmv: JimuMapView) => {
                this.setState({
                  jimuMapView: jmv
                })
              }}
            />
        )}
        <p className="shadow-lg m-3 p-3 bg-white rounded">
          {defaultMessages.viewLayer}:
          <select
            onChange={(evt) => {
              this.selectChangeHandler(evt)
            }}
            style={{ maxWidth: '100%' }}
          >
            <option value=""></option>
            {this.props.config.layerUrls.map((url) => {
              return <option value={url}>{url}</option>
            })}
          </select>
        </p>
      </div>
    )
  }
}
