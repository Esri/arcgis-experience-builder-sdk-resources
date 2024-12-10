import { type DataSourceJson, DataSourceTypes, React } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { Button, TextInput } from 'jimu-ui'

import { SCHEMA, DEFAULT_CONFIG } from '../constants'
import type { IMConfig } from '../config'

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
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

  const onOwnerChange = (owner: string) => {
    props.onSettingChange({
      id: props.id,
      config: {
        ...props.savedConfig,
        defaultOwner: owner
      }
    })
  }

  const onRepoChange = (repo: string) => {
    props.onSettingChange({
      id: props.id,
      config: {
        ...props.savedConfig,
        defaultRepo: repo
      }
    })
  }

  return <div className='widget-setting-demo'>
    {
      props.outputDataSources?.length
        ? <div className='m-2'>
            <div>Owner: </div>
            <TextInput className='w-100 pr-2' onAcceptValue={onOwnerChange} defaultValue={props.config.defaultOwner} />
            <br />

            <div>Repo: </div>
            <TextInput className='w-100 pr-2' onAcceptValue={onRepoChange} defaultValue={props.config.defaultRepo} />
            <br />
        </div>
        : <div className='m-2'>
          <Button onClick={setDataSource}>Save the output data source</Button>
        </div>
    }
  </div>
}

Setting.getFullConfig = (config: IMConfig) => {
  return DEFAULT_CONFIG.merge(config, { deep: true })
}

export default Setting
