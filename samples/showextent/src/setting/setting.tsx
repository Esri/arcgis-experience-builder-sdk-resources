import {React, Immutable, DataSourceManager} from 'jimu-core';
import {BaseWidgetSetting} from 'jimu-for-builder';
import {JimuMapViewSelector} from 'jimu-ui/setting-components';
import {ArcGISDataSourceTypes} from 'jimu-arcgis';

export default class Setting extends BaseWidgetSetting{
  supportedTypes = Immutable([ArcGISDataSourceTypes.WebMap]);
  dsManager = DataSourceManager.getInstance();

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  }

  render(){
    return <div className="sample-use-map-view-setting p-2">
      <JimuMapViewSelector onSelect={this.onMapSelected} useMapWidgetIds={this.props.useMapWidgetIds}/>
    </div>
  }
}