/**
  Licensing

  Copyright 2022 Esri

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
import { React, Immutable, UseDataSource } from 'jimu-core';
import { AllWidgetSettingProps} from 'jimu-for-builder';
import {DataSourceTypes} from 'jimu-arcgis';
import {DataSourceSelector} from 'jimu-ui/advanced/data-source-selector';

export default class Setting extends React.PureComponent<AllWidgetSettingProps<{}>, {}>{
  supportedTypes = Immutable([DataSourceTypes.WebMap]);

  onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    });
  }

  render(){
    return <div className="sample-map-view-setting p-2">
      <DataSourceSelector
        types={this.supportedTypes}
        mustUseDataSource
        useDataSources={this.props.useDataSources}
        onChange={this.onDataSourceSelected}
        widgetId={this.props.id}
      />
    </div>
  }
}