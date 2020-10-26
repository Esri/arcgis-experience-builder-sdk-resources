/** @jsx jsx */
import { AllWidgetProps, jsx } from "jimu-core";
import { useState } from 'react';
import { IMConfig } from "../config";
import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";

import Point = require("esri/geometry/Point");

import defaultMessages from "./translations/default";

export default function (props: AllWidgetProps<IMConfig>) {
  const [latitude, setLatitude] = useState<string>("")
  const [longitude, setLongitude] = useState<string>("");
  const [zoom, setZoom] = useState<number>(0);
  const [scale, setScale] = useState<number>(0);
  const [mapViewReady, setMapViewReady] = useState<boolean>(false);

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {

      // When the extent moves, update the state with all the updated values.
      jmv.view.watch("extent", evt => {
        setLatitude(jmv.view.center.latitude.toFixed(3));
        setLongitude(jmv.view.center.longitude.toFixed(3));
        setScale(Math.round(jmv.view.scale * 1) / 1);
        setZoom(jmv.view.zoom);

        // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
        // to true, so that we can hide the text until everything is ready:
        setMapViewReady(true);
      });

      // When the pointer moves, take the pointer location and create a Point
      // Geometry out of it (`view.toMap(...)`), then update the state.
      jmv.view.on("pointer-move", evt => {
        const point: Point = jmv.view.toMap({
          x: evt.x,
          y: evt.y
        });
        setLatitude(point.latitude.toFixed(3));
        setLongitude(point.longitude.toFixed(3));
        setScale(Math.round(jmv.view.scale * 1) / 1);
        setZoom(jmv.view.zoom);
        setMapViewReady(true);
      });
    }
  };

  let sections = [];

  sections.push(
    <span>
      {defaultMessages.latLon} {latitude} {longitude}
    </span>
  );

  if (props.config.showZoom === true) {
    sections.push(<span>Zoom {zoom.toFixed(0)}</span>);
  }

  if (props.config.showScale === true) {
    sections.push(<span>Scale 1:{scale}</span>);
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
      {props.hasOwnProperty("useMapWidgetIds") &&
        props.useMapWidgetIds &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetIds={props.useMapWidgetIds}
            onActiveViewChange={activeViewChangeHandler}
          />
        )}

      {/* Only show the data once the MapView is ready */}
      <p>{mapViewReady === true ? allSections : defaultMessages.latLonWillBeHere}</p>
    </div>
  );
}
