/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { IMConfig } from "../config";
import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";

import Point = require("esri/geometry/Point");

import defaultMessages from "./translations/default";

interface IState {
  latitude: string;
  longitude: string;
  scale: number;
  zoom: number;
  mapViewReady: boolean;
  jimuMapView: JimuMapView;
}

export default class Widget extends React.PureComponent<
  AllWidgetProps<IMConfig>,
  IState
> {
  state = {
    latitude: "",
    longitude: "",
    zoom: 0,
    scale: 0,
    mapViewReady: false,
    jimuMapView: null
  };

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      this.setState({
        jimuMapView: jmv
      });

      // When the extent moves, update the state with all the updated values.
      jmv.view.watch("extent", evt => {
        this.setState({
          latitude: this.state.jimuMapView.view.center.latitude.toFixed(3),
          longitude: this.state.jimuMapView.view.center.longitude.toFixed(3),
          scale: Math.round(this.state.jimuMapView.view.scale * 1) / 1,
          zoom: this.state.jimuMapView.view.zoom,
          // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
          // to true, so that we can hide the text until everything is ready:
          mapViewReady: true
        });
      });

      // When the pointer moves, take the pointer location and create a Point
      // Geometry out of it (`view.toMap(...)`), then update the state.
      jmv.view.on("pointer-move", evt => {
        const point: Point = this.state.jimuMapView.view.toMap({
          x: evt.x,
          y: evt.y
        });
        this.setState({
          latitude: point.latitude.toFixed(3),
          longitude: point.longitude.toFixed(3),
          scale: Math.round(this.state.jimuMapView.view.scale * 1) / 1,
          zoom: this.state.jimuMapView.view.zoom,
          mapViewReady: true
        });
      });
    }
  };

  render() {
    let sections = [];

    sections.push(
      <span>
        {defaultMessages.latLon} {this.state.latitude} {this.state.longitude}
      </span>
    );

    if (this.props.config.showZoom === true) {
      sections.push(<span>Zoom {this.state.zoom.toFixed(0)}</span>);
    }

    if (this.props.config.showScale === true) {
      sections.push(<span>Scale 1:{this.state.scale}</span>);
    }

    // We have 1, 2, or 3 JSX Elements in our array, we want to join them
    // with " | " between them. You cannot use `sections.join(" | ")`, sadly.
    // So we use array.reduce(...) to return an array of JSX elements.
    const allSections = sections.reduce((previousValue, currentValue) => {
      return previousValue === null
        ? [currentValue]
        : [...previousValue, " | ", currentValue];
    }, null);

    return (
      <div className="widget-get-map-coordinates jimu-widget m-2">
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetIds={this.props.useMapWidgetIds}
              onActiveViewChange={this.activeViewChangeHandler}
            />
          )}

        {/* Only show the data once the MapView is ready */}
        <p>{this.state.mapViewReady === true ? allSections : defaultMessages.latLonWillBeHere}</p>
      </div>
    );
  }
}
