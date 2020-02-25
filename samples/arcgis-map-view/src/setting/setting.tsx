import {React, Immutable} from 'jimu-core';
import {BaseWidgetSetting} from 'jimu-for-builder';
import {ArcGISDataSourceTypes} from 'jimu-arcgis';
import {DataSourceSelector, SelectedDataSourceJson} from 'jimu-ui/data-source-selector';

export default class Setting extends BaseWidgetSetting{
  supportedTypes = Immutable([ArcGISDataSourceTypes.WebMap]);

  onDataSourceSelected = (allSelectedDss: SelectedDataSourceJson[], currentSelectedDs: SelectedDataSourceJson) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [{
        dataSourceId: currentSelectedDs.dataSourceJson.id,
      }],
    });
  }

  render(){
    return <div className="sample-map-view-setting p-2">
      <DataSourceSelector
        types={this.supportedTypes}
        mustUseDataSource
        selectedDataSourceIds={this.props.useDataSources && Immutable(this.props.useDataSources.map(ds => ds.dataSourceId))}
        onSelect={this.onDataSourceSelected}
      />
    </div>
  }
}