/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { IMConfig } from "../config";

import defaultMessages from "./translations/default";
import FeatureLayer = require("esri/layers/FeatureLayer");
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

interface IState {
  jimuMapView: JimuMapView;
  featureLayerOnMap: FeatureLayer;
}

export default class ViewLayersToggle extends React.PureComponent<
  AllWidgetProps<IMConfig>,
  IState
> {
  constructor(props) {
    super(props);
    this.state = {
      jimuMapView: undefined,
      featureLayerOnMap: undefined,
    };
  }

  selectChangeHandler = (evt) => {
    if (this.state.jimuMapView) {
      if (this.state.featureLayerOnMap) {
        // Remove the old Feature Layer
        this.state.jimuMapView.view.map.remove(this.state.featureLayerOnMap);
        this.setState({
          featureLayerOnMap: undefined,
        });
      }

      if (evt.target.value && evt.target.value !== "") {
        // Create and add the new Feature Layer
        const featureLayer = new FeatureLayer({
          url: evt.target.value,
        });
        this.state.jimuMapView.view.map.add(featureLayer);
        this.setState({
          featureLayerOnMap: featureLayer,
        });
      }
    } else {
      console.error(
        "You probably need to choose you map in the settings panel."
      );
    }
  };

  render() {
    return (
      <div
        className="widget-view-layers-toggle jimu-widget"
        style={{ overflow: "auto" }}
      >
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            // The JimuMapViewComponent gives us a connection to the
            // ArcGIS JS API MapView object. We store it in the State.
            <JimuMapViewComponent
              useMapWidgetIds={this.props.useMapWidgetIds}
              onActiveViewChange={(jmv: JimuMapView) => {
                this.setState({
                  jimuMapView: jmv,
                });
              }}
            />
          )}
        <p className="shadow-lg m-3 p-3 bg-white rounded">
          {defaultMessages.viewLayer}:
          <select
            onChange={(evt) => {
              this.selectChangeHandler(evt);
            }}
            style={{ maxWidth: "100%" }}
          >
            <option value=""></option>
            {this.props.config.layerUrls.map((url) => {
              return <option value={url}>{url}</option>;
            })}
          </select>
        </p>
      </div>
    );
  }
}
