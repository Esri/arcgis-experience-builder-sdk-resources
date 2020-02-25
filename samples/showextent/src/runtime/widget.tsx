import {React} from 'jimu-core';
import {BaseWidget, AllWidgetProps} from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';

interface State{
  extent: __esri.Extent
}

export default class Widget extends BaseWidget<AllWidgetProps<{}>, State>{
  extentWatch: __esri.WatchHandle;
  state: State = {extent: null}

  isConfigured = () => {
    return this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1;
  }

  componentWillUnmount(){
    if(this.extentWatch){
      this.extentWatch.remove();
      this.extentWatch = null;
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if(!this.extentWatch){
      this.extentWatch = jimuMapView.view.watch('extent', extent => { 
        this.setState({
          extent
        })
      });
    }
  }


  render(){
    if(!this.isConfigured()){
      return 'Select a map';
    }
    
    return <div className="widget-use-map-view" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
      <h3>
        This widget demonstrates how to use a map view and display the map view's extent.
      </h3>

      <JimuMapViewComponent useMapWidgetIds={this.props.useMapWidgetIds} onActiveViewChange={this.onActiveViewChange}></JimuMapViewComponent>
      
      <div>Extent:</div>
      <div>{ this.state.extent && JSON.stringify(this.state.extent.toJSON())}</div>
    </div>;
  }
}
