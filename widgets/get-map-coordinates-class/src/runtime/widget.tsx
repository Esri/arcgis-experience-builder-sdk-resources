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
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'

import type Point from 'esri/geometry/Point'

import defaultMessages from './translations/default'

interface IState {
  latitude: string
  longitude: string
  scale: number
  zoom: number
  mapViewReady: boolean
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig>,
IState
> {
  state = {
    latitude: '',
    longitude: '',
    zoom: 0,
    scale: 0,
    mapViewReady: false
  }

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      // When the extent moves, update the state with all the updated values.
      jmv.view.watch('extent', evt => {
        this.setState({
          latitude: jmv.view.center.latitude.toFixed(3),
          longitude: jmv.view.center.longitude.toFixed(3),
          scale: Math.round(jmv.view.scale * 1) / 1,
          zoom: jmv.view.zoom,
          // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
          // to true, so that we can hide the text until everything is ready:
          mapViewReady: true
        })
      })

      // When the pointer moves, take the pointer location and create a Point
      // Geometry out of it (`view.toMap(...)`), then update the state.
      jmv.view.on('pointer-move', evt => {
        const point: Point = jmv.view.toMap({
          x: evt.x,
          y: evt.y
        })
        this.setState({
          latitude: point.latitude.toFixed(3),
          longitude: point.longitude.toFixed(3),
          scale: Math.round(jmv.view.scale * 1) / 1,
          zoom: jmv.view.zoom,
          mapViewReady: true
        })
      })
    }
  }

  render () {
    const sections = []

    sections.push(
      <span>
        {defaultMessages.latLon} {this.state.latitude} {this.state.longitude}
      </span>
    )

    if (this.props.config.showZoom) {
      sections.push(<span>Zoom {this.state.zoom.toFixed(0)}</span>)
    }

    if (this.props.config.showScale) {
      sections.push(<span>Scale 1:{this.state.scale}</span>)
    }

    // We have 1, 2, or 3 JSX Elements in our array, we want to join them
    // with " | " between them. You cannot use `sections.join(" | ")`, sadly.
    // So we use array.reduce(...) to return an array of JSX elements.
    const allSections = sections.reduce((previousValue, currentValue) => {
      return previousValue === null
        ? [currentValue]
        : [...previousValue, ' | ', currentValue]
    }, null)

    return (
      <div className="widget-get-map-coordinates jimu-widget m-2">
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={this.activeViewChangeHandler}
            />
        )}

        {/* Only show the data once the MapView is ready */}
        <p>{this.state.mapViewReady ? allSections : defaultMessages.latLonWillBeHere}</p>
      </div>
    )
  }
}
