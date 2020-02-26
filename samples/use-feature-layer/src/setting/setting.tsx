/**
  Licensing

  Copyright 2020 Esri

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