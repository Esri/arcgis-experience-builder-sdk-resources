import { type DataSourceJson, DataSourceTypes, React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { Button } from 'jimu-ui'

import { SCHEMA } from '../constants'

const Setting = (props: AllWidgetSettingProps<any>) => {
  const setDataSource = () => {
    const outputDsJsons: DataSourceJson[] = [{
      id: `${props.id}-output`,
      type: DataSourceTypes.FeatureLayer,
      label: `${props.manifest.name}-output-data-source`,
      geometryType: 'esriGeometryPoint',
      isDataInDataSourceInstance: true,
      schema: SCHEMA
    }]

    props.onSettingChange({
      id: props.id
    }, outputDsJsons)
  }

  return <div className='widget-setting-demo'>
    {
      props.outputDataSources?.length
        ? <div className='m-2'>
          All set!
        </div>
        : <div className='m-2'>
          <Button onClick={setDataSource}>Set Data Source</Button>
        </div>
    }
  </div>
}

export default Setting
