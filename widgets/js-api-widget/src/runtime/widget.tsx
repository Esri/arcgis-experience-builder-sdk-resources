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
import { React, AllWidgetProps } from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';

import Legend from "esri/widgets/Legend";
import LegendVM from "esri/widgets/Legend/LegendViewModel";

interface State {
  layerInfo: any
}

export default class Widget extends React.PureComponent<AllWidgetProps<{}>, State>{
  apiWidgetContainer: React.RefObject<HTMLDivElement>;
  legendWidget: Legend;

  constructor(props) {
    super(props);
    this.state = { layerInfo: null }
    this.apiWidgetContainer = React.createRef();
  }

  componentWillUnmount() {
    if (this.legendWidget) {
      this.legendWidget.destroy();
      this.legendWidget = null;
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (!(jimuMapView && jimuMapView.view)) {
      return;
    }

    if (this.apiWidgetContainer.current) {
      if (this.legendWidget) {
        // reset the legend widget
        this.legendWidget.destroy();
        this.legendWidget = null;
      }

      // since the widget replaces the container, we must create a new DOM node
      // so when we destroy we will not remove the "ref" DOM node
      const container = document.createElement("div");
      this.apiWidgetContainer.current.appendChild(container);

      this.legendWidget = new Legend({
        view: jimuMapView.view,
        container: container
      });

      const vm = new LegendVM({
        view: jimuMapView.view,
      });

      this.setState({
        layerInfo: vm.activeLayerInfos.getItemAt(0)
      });
    }
  }

  render() {
    return <div className="widget-use-map-view" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {!this.isConfigured() && <h3>Please select a map.</h3>}
      <h3>
        This widget demonstrates how to use a widget (Legend) from the ArcGIS JS API.
      </h3>

      <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange}></JimuMapViewComponent>

      <hr />
      <h4>This uses the ViewModel.</h4>
      <div>
        Layer title: {this.state.layerInfo && this.state.layerInfo.title}
      </div>

      <hr />
      <h4>This shows the Legend widget.</h4>
      <div ref={this.apiWidgetContainer}></div>
    </div>;
  }

  isConfigured = () => {
    return this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1;
  }
}
