/** @jsx jsx */
/**
  Licensing

  Copyright 2021 Esri

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
import { React, AllWidgetProps, css, jsx } from "jimu-core";
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  JimuMapView,
} from "jimu-arcgis";

import { IMConfig } from "../config";

import defaultMessages from "./translations/default";

interface IState {
  featureServiceUrlInput: string;
  jimuMapView: JimuMapView;
}

export default class Widget extends React.PureComponent<
  AllWidgetProps<IMConfig>,
  IState
> {
  // Give types to the modules we import from the ArcGIS API for JavaScript
  // to tell TypeScript what types they are.
  FeatureLayer: typeof __esri.FeatureLayer;
  Query: typeof __esri.Query;
  SpatialReference: typeof __esri.SpatialReference;

  state = {
    featureServiceUrlInput: "",
    jimuMapView: null,
  };

  // Every time the input box value changes, this function gets called.
  // We set our component's state so we can use the value in the formSubmit function.
  handleFeatureServiceUrlInputChange = (event) => {
    this.setState({
      featureServiceUrlInput: event.target.value,
    });
  };

  formSubmit = (evt) => {
    evt.preventDefault();

    // Error cases
    if (!this.state.jimuMapView) {
      // Data Source was not configured - we cannot do anything.
      console.error("Please configure a Data Source with the widget.");
      return;
    }
    if (this.state.featureServiceUrlInput == "") {
      // Nothing was typed into the box!
      alert("Please copy/paste in a FeatureService URL");
      return;
    }

    // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules
    // that we need - only once the "Add Layer" button is pressed.
    loadArcGISJSAPIModules([
      "esri/layers/FeatureLayer",
      "esri/tasks/support/Query",
      "esri/geometry/SpatialReference",
    ]).then((modules) => {
      [this.FeatureLayer, this.Query, this.SpatialReference] = modules;

      // First create the Feature Layer from the URL that is in the box.
      const layer = new this.FeatureLayer({
        url: this.state.featureServiceUrlInput,
      });

      // Add the layer to the map (accessed through the Experience Builder Data Source)
      this.state.jimuMapView.view.map.add(layer);

      // After the layer is created, zoom to the layer's extent, if the setting is set for that.
      layer.on("layerview-create", (event) => {
        if (
          this.props.config.hasOwnProperty("zoomToLayer") &&
          this.props.config.zoomToLayer === true
        ) {
          const query = new this.Query();
          query.where = "1=1";
          query.outSpatialReference = new this.SpatialReference({
            wkid: 102100,
          });
          layer.queryExtent(query).then((results) => {
            this.state.jimuMapView.view.extent = results.extent;
          });
        }

        // Process of adding the layer is complete - remove the layer URL from the box so we can add another
        this.setState({
          featureServiceUrlInput: "",
        });
      });
    });
  };

  render() {
    const style = css`
      form > div {
        display: flex;
        justify-content: space-between;
        input {
          width: 100%;
        }
        button {
          min-width: 100px;
        }
      }
    `;
    return (
      <div className="widget-addLayers jimu-widget p-2" css={style}>
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={(jmv: JimuMapView) => {
                this.setState({
                  jimuMapView: jmv,
                });
              }}
            />
          )}

        <p>{defaultMessages.instructions}</p>

        <form onSubmit={this.formSubmit}>
          <div>
            <input
              type="text"
              placeholder={defaultMessages.featureServiceUrl}
              value={this.state.featureServiceUrlInput}
              onChange={this.handleFeatureServiceUrlInputChange}
            />
            <button>{defaultMessages.addLayer}</button>
          </div>
        </form>
      </div>
    );
  }
}
