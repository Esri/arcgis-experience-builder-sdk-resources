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
import {React, AllWidgetProps} from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import Legend = require('esri/widgets/Legend');
import LegendVM = require('esri/widgets/Legend/LegendViewModel');

interface State{
  legendWidgetVM: LegendVM;
  layerInfo: any
}

export default class Widget extends React.PureComponent<AllWidgetProps<{}>, State>{
  apiWidgetContainer: React.RefObject<HTMLDivElement>;
  legendWidget: Legend;

  mapView: __esri.MapView | __esri.SceneView;

  watchHandle: __esri.Handle;

  constructor(props){
    super(props);
    this.state = {legendWidgetVM: null, layerInfo: null}
    this.apiWidgetContainer = React.createRef();
  }

  componentDidMount(){
    this.createAPIWidget();
  }

  componentWillUnmount(){
    if(this.legendWidget){
      this.legendWidget.destroy();
      this.legendWidget = null;
    }

    if(this.state.legendWidgetVM){
      this.state.legendWidgetVM.destroy();
      this.setState({
        legendWidgetVM: null
      })
    }

    if(this.watchHandle){
      this.watchHandle.remove();
      this.watchHandle = null;
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if(!(jimuMapView && jimuMapView.view)){
      return;
    }
    this.mapView = jimuMapView.view;
    this.createAPIWidget();
  }

  createAPIWidget(){
    if(!this.mapView){
      return;
    }
    if(!this.legendWidget){
      this.legendWidget = new Legend({
        view: this.mapView,
        container: this.apiWidgetContainer.current
      })
    }

    if(!this.state.legendWidgetVM){
      const vm = new LegendVM({
        view: this.mapView,
      });
      this.setState({
        legendWidgetVM: vm
      })

      this.watchHandle = vm.watch('activeLayerInfos.length', () => {
        this.setState({
          layerInfo: vm.activeLayerInfos.getItemAt(0)
        })
      })
    }
  }

  render(){
    if(!this.isConfigured()){
      return 'Select a map';
    }

    return <div className="widget-use-map-view" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
      <h3>
        This widget demonstrates how to use a widget (Legend) from the ArcGIS JS API.
      </h3>

      <JimuMapViewComponent useMapWidgetIds={this.props.useMapWidgetIds} onActiveViewChange={this.onActiveViewChange}></JimuMapViewComponent>

      <hr/>
      <h4>This uses the ViewModel.</h4>
      <div>
        Layer title: {this.state.layerInfo && this.state.layerInfo.title}
      </div>

      <hr/>
      <h4>This shows the Legend widget.</h4>
      <div ref={this.apiWidgetContainer}></div>
    </div>;
  }

  isConfigured = () => {
    return this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1;
  }
}
