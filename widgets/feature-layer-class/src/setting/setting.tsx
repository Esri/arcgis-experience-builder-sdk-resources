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
import { React, Immutable, type IMFieldSchema, type UseDataSource, AllDataSourceTypes } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<unknown>, unknown> {
  supportedTypes = Immutable([AllDataSourceTypes.FeatureLayer])

  onFieldChange = (allSelectedFields: IMFieldSchema[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [{ ...this.props.useDataSources[0], ...{ fields: allSelectedFields.map(f => f.jimuName) } }]
    })
  }

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    })
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    })
  }

  render () {
    return <div className="use-feature-layer-setting p-2">
      <DataSourceSelector
        types={this.supportedTypes}
        useDataSources={this.props.useDataSources}
        useDataSourcesEnabled={this.props.useDataSourcesEnabled}
        onToggleUseDataEnabled={this.onToggleUseDataEnabled}
        onChange={this.onDataSourceChange}
        widgetId={this.props.id}
      />
      {
        this.props.useDataSources && this.props.useDataSources.length > 0 &&

        <FieldSelector
          useDataSources={this.props.useDataSources}
          onChange={this.onFieldChange}
          selectedFields={this.props.useDataSources[0].fields || Immutable([])}
        />
      }

    </div>
  }
}
