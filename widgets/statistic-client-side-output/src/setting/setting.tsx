import {
  React, Immutable, type IMFieldSchema, type DataSource, DataSourceTypes, DataSourceManager, type UseDataSource, JimuFieldType, type DataSourceJson, type DataSourceSchema,
  type ImmutableArray
} from 'jimu-core'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import { MultiSelect, type MultiSelectItem } from 'jimu-ui'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { StatFunctions, type IMConfig } from '../config'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig>, unknown> {
  supportedTypes = Immutable([DataSourceTypes.FeatureLayer])
  numberFieldTypes = Immutable([JimuFieldType.Number])

  onFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    const outputDsJson = this.getOutputDsJson(this.props.useDataSources[0].asMutable({ deep: true }), allSelectedFields[0]?.jimuName, this.getSelectedStatFuncs())
    const useDsWithFields = { ...this.props.useDataSources[0], ...{ fields: allSelectedFields.map(f => f.jimuName) } }

    /**
     * After selecting a field, update use data source, output data source and config.
     * Need to save used fields to use data source, it is allow framework to know these fields are used.
     */
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [useDsWithFields],
      config: { ...this.props.config, numberField: allSelectedFields[0]?.jimuName }
    }, [outputDsJson])
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (useDataSources?.length > 0) {
      const outputDsJson = this.getOutputDsJson(useDataSources[0])

      // Let framework know which data source current widget is using and which data source current widget is outputing.
      this.props.onSettingChange({
        id: this.props.id,
        useDataSources: useDataSources,
        config: {} // reset config
      }, [outputDsJson])
    }
  }

  getOutputDsJson = (originUseDataSource: UseDataSource, originFieldName?: string, statFuncs?: ImmutableArray<StatFunctions>): DataSourceJson => {
    const originDsId = originUseDataSource.dataSourceId
    const originDs = DataSourceManager.getInstance().getDataSource(originDsId)
    const outputDsSchema: DataSourceSchema = this.getOutputDsSchema(originFieldName, statFuncs)
    const outputDsJson: DataSourceJson = {
      id: `${this.props.id}_ouput`,
      type: DataSourceTypes.FeatureLayer,
      label: outputDsSchema.label,
      geometryType: originDs.getDataSourceJson().geometryType,
      originDataSources: [originUseDataSource],
      schema: outputDsSchema,
      isDataInDataSourceInstance: true
    }

    return outputDsJson
  }

  getOutputDsSchema = (originFieldName?: string, statFuncs?: ImmutableArray<StatFunctions>): DataSourceSchema => {
    const statFields = {}
    if (statFuncs) { // Schema of output data source is based on the selected statistic functions.
      statFuncs.forEach(s => {
        statFields[s] = {
          jimuName: s,
          type: JimuFieldType.Number,
          name: s,
          originFields: originFieldName ? [originFieldName] : []
        }
      })
    }
    return {
      label: `${this.props.manifest.name}-output-data-source`,
      idField: 'objectid',
      fields: {
        objectid: {
          jimuName: 'objectid',
          type: JimuFieldType.Number,
          name: 'objectid'
        },
        ...statFields
      }
    }
  }

  getStatFuncItems = (): ImmutableArray<MultiSelectItem> => {
    return Immutable(Object.keys(StatFunctions).map(f => ({ value: f, label: f })))
  }

  getSelectedStatFuncs = (): ImmutableArray<StatFunctions> => {
    return this.props.config.statFunctions
  }

  onStatFuncItemClick = (evt: React.MouseEvent, value: string | number, selectedValues: Array<string | number>) => {
    const outputDsJson = this.getOutputDsJson(
      this.props.useDataSources[0].asMutable({ deep: true }),
      this.props.useDataSources[0]?.fields?.[0],
      Immutable(selectedValues) as ImmutableArray<StatFunctions>
    )

    // After selecting a statistic function, update output data source and config.
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: this.props.useDataSources.asMutable({ deep: true }),
      config: { ...this.props.config, statFunctions: selectedValues }
    }, [outputDsJson])
  }

  render () {
    return (
      <div className='use-feature-layer-setting p-2'>
        <DataSourceSelector
          mustUseDataSource
          types={this.supportedTypes}
          useDataSources={this.props.useDataSources}
          useDataSourcesEnabled={this.props.useDataSourcesEnabled}
          onChange={this.onDataSourceChange}
          widgetId={this.props.id}
        />

        {
          this.props.useDataSources && this.props.useDataSources[0] &&
            <div className='mt-3 px-2'>
              <div className='my-2'>Please select a field.</div>
              <FieldSelector
                useDataSources={this.props.useDataSources}
                onChange={this.onFieldSelected}
                selectedFields={this.props.config.numberField ? Immutable([this.props.config.numberField]) : null}
                types={this.numberFieldTypes}
                useDropdown
                isDataSourceDropDownHidden
                isSearchInputHidden
              />
              <div className='my-2'>Please select a statistic function.</div>
              <MultiSelect fluid items={this.getStatFuncItems()} values={this.getSelectedStatFuncs()} onClickItem={this.onStatFuncItemClick} />
            </div>
        }
      </div>
    )
  }
}
