import { React, jimuHistory, DataSourceComponent } from 'jimu-core';

import { BaseWidget, AllWidgetProps } from 'jimu-core';
import MapView = require('esri/views/MapView');
import WebMap = require('esri/WebMap');
import Extent = require('esri/geometry/Extent');
import {MapViewManager, WebMapDataSource} from 'jimu-arcgis';


export default class Widget extends BaseWidget<AllWidgetProps<{}>, {}>{
  mapContainer = React.createRef<HTMLDivElement>();
  mapView: MapView;
  webMap: WebMap;
  extentWatch: __esri.WatchHandle;

  mvManager: MapViewManager = MapViewManager.getInstance();

  onDsCreated = (webmapDs: WebMapDataSource) => {
    if(!webmapDs){
      return;
    }

    if (!this.mvManager.getJimuMapViewById(this.props.id)) {
      const options: __esri.MapViewProperties = {
        map: webmapDs.map,
        container: this.mapContainer.current
      };
      if(this.props.queryObject[this.props.id]){
        const extentStr = this.props.queryObject[this.props.id].substr('extent='.length);
        let extent;
        try{
          extent = new Extent(JSON.parse(extentStr));
        }catch(err){
          console.error('Bad extent URL parameter.')
        }

        if(extent){
          options.extent = extent;
        }
      }
      this.mvManager.createJimuMapView({
        mapWidgetId: this.props.id,
        view: new MapView(options),
        datasourceId: webmapDs.id,
        isActive: true
      }).then(jimuMapView => {
        if(!this.extentWatch){
          this.extentWatch = jimuMapView.view.watch('extent', (extent: __esri.Extent) => {
            jimuHistory.changeQueryObject({
              [this.props.id]: `extent=${JSON.stringify(extent.toJSON())}`
            });
          });
        }
      })
    }
  }

  mapNode = <div className="widget-map" style={{width: '500px', height: '500px'}} ref={this.mapContainer}></div>;

  render() {
    if (!this.props.useDataSources || this.props.useDataSources.length === 0) {
      return 'Select a webmap in the settings panel';
    }
    return <DataSourceComponent useDataSource={this.props.useDataSources[0]} onDataSourceCreated={this.onDsCreated}>
      {this.mapNode}
    </DataSourceComponent>;
  }
}
