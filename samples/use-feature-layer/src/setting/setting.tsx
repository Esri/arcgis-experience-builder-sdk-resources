import {React, Immutable, IMFieldSchema, DataSource, DataSourceTypes, DataSourceComponent} from 'jimu-core';
import {BaseWidgetSetting} from 'jimu-for-builder';
import {ArcGISDataSourceTypes} from 'jimu-arcgis';
import {FieldSelector} from 'jimu-ui/data-source-selector';
import {DataSourceSelector, SelectedDataSourceJson, AllDataSourceTypes} from 'jimu-ui/data-source-selector';

export default class Setting extends BaseWidgetSetting{
  supportedTypes = Immutable([ArcGISDataSourceTypes.FeatureLayer, DataSourceTypes.FeatureQuery]);

  onFieldSelected = (allSelectedFields: IMFieldSchema[], field: IMFieldSchema, ds: DataSource) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [{
        dataSourceId: this.props.useDataSources[0].dataSourceId,
        rootDataSourceId: this.props.useDataSources[0].rootDataSourceId,
        fields: [field.jimuName]
      }]
    })
  }
  
  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    });
  }

  onDataSourceSelected = (allSelectedDss: SelectedDataSourceJson[], currentSelectedDs: SelectedDataSourceJson) => {
    console.log(this.props);
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [{
        dataSourceId: currentSelectedDs.dataSourceJson.id,
        rootDataSourceId: currentSelectedDs.rootDataSourceId
      }],
    }, [{
      id: `${this.props.id}-output`,
      label: `${this.props.label} Query Result`,
      type: AllDataSourceTypes.FeatureSet,
      originDataSources: [{dataSourceId: currentSelectedDs.dataSourceJson.id, rootDataSourceId: currentSelectedDs.rootDataSourceId}]
    }]);
  }

  onDataSourceRemoved = () => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [],
    }, []);
  }

  render(){
    return <div className="use-feature-layer-setting p-2">
      <DataSourceSelector
        types={this.supportedTypes}
        selectedDataSourceIds={this.props.useDataSources && Immutable(this.props.useDataSources.map(ds => ds.dataSourceId))}
        useDataSourcesEnabled={this.props.useDataSourcesEnabled}
        onToggleUseDataEnabled={this.onToggleUseDataEnabled}
        onSelect={this.onDataSourceSelected} onRemove={this.onDataSourceRemoved}
      />
      {
        this.props.useDataSources && this.props.useDataSources.length > 0 &&

        <DataSourceComponent useDataSource={this.props.useDataSources[0]}>
          {
            (ds: DataSource) => <div className="mt-2">Please choose a Field to query:
              <FieldSelector 
                dataSources={[ds]}
                onSelect={this.onFieldSelected}
                selectedFields={this.props.useDataSources[0].fields || Immutable([])}
              />
            </div>
          }
        </DataSourceComponent>
      }
      
    </div>
  }
}