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
import { React, Immutable } from 'jimu-core';
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