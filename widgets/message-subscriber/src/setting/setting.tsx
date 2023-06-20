/* eslint-disable @typescript-eslint/no-empty-interface */
import { React, Immutable, type IMFieldSchema, type UseDataSource, type DataSource, DataSourceTypes } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { FieldSelector, DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'

interface Config {}

interface State {}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<Config>, State> {
  supportedTypes = Immutable([DataSourceTypes.FeatureLayer])

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

  onFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [{ ...this.props.useDataSources[0], ...{ fields: allSelectedFields.map(f => f.jimuName) } }]
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
        <div className="mt-2">Please choose a Field to display:
          <FieldSelector
            useDataSources={this.props.useDataSources}
            onChange={this.onFieldSelected}
            selectedFields={this.props.useDataSources[0].fields || Immutable([])}
          />
        </div>
      }
    </div>
  }
}
