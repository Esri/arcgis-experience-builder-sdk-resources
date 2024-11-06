import { DataSourceTypes, type IMFieldSchema, Immutable, React, type UseDataSource } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import type { IMConfig } from '../config'

const SUPPORTED_TYPES = Immutable([DataSourceTypes.FeatureLayer])

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    // Save the selected data sources to widget json.
    props.onSettingChange({
      id: props.id,
      useDataSources
    })
  }

  const onFieldsChange = (fields: IMFieldSchema[]) => {
    const useDataSource = props.useDataSources[0].set('fields', fields?.map(f => f.jimuName)).asMutable({ deep: true })
    // Save the selected fields to widget json.
    props.onSettingChange({
      id: props.id,
      useDataSources: [useDataSource]
    })
  }

  return <div className='widget-setting-demo mt-2 mx-2'>
    <div>Data source: </div>
    <DataSourceSelector widgetId={props.id} useDataSources={props.useDataSources} types={SUPPORTED_TYPES} onChange={onDataSourceChange} mustUseDataSource />

    <div className='mt-3'>Fields: </div>
    <FieldSelector useDataSources={props.useDataSources} isMultiple onChange={onFieldsChange} selectedFields={props.useDataSources?.[0].fields} />
    <br />
  </div>
}

export default Setting
