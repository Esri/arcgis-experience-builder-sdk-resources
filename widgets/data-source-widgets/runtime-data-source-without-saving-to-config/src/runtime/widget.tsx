/** @jsx jsx */
import { React, jsx, css, type AllWidgetProps, DataSourceManager, type FeatureDataRecord, type SerializedStyles, type DataSource, type IMDataSourceJson, ServiceManager, type FeatureLayerDataSource, dataSourceUtils } from 'jimu-core'
import type { IMConfig } from '../config'
import { Button, TextInput } from 'jimu-ui'
import { useEffect } from 'react'
import type { FeatureLayerDataSourceConstructorOptions } from 'jimu-data-source'

const { useState } = React

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [url, setUrl] = useState<string>('https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>(null)
  const DATA_SOURCE_ID = `${props.id}_runtime_data`

  useEffect(() => {
    // If the user doesn't click the 'Create' button, will wait.
    if (!isLoading) {
      return
    }

    // Reset the data source.
    DataSourceManager.getInstance().destroyDataSource(DATA_SOURCE_ID)

    // Create the data source based on the newest URL.
    createDataSource(DATA_SOURCE_ID, url)
      .then((ds: FeatureLayerDataSource) =>
        ds.load({ where: '1=1', outFields: ['*'] }, { widgetId: props.id })
      )
      .catch((error: Error) => {
        setErrMsg(error?.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url, isLoading, DATA_SOURCE_ID, props.id])

  const getRecords = (dsId: string): FeatureDataRecord[] => {
    return (DataSourceManager.getInstance().getDataSource(dsId)?.getRecords() || []) as FeatureDataRecord[]
  }

  return (
    <div className='widget-demo jimu-widget m-2' css={getStyle()}>
      <h1>Runtime data source without saving to config</h1>

      <div>Feature Layer URL</div>
      <TextInput className='w-100 pr-2' onAcceptValue={setUrl} defaultValue={url} />
      <br />

      <Button onClick={() => { setIsLoading(true) }} disabled={isLoading}>Create</Button>
      <br />

      <h1 className='mt-5'>Results: </h1>
      <div className='query-results'>
        {
          isLoading
            ? 'Loading ...'
            : (errMsg || getRecords(DATA_SOURCE_ID).map((r, i) => <div key={i} className='px-2 py-3'>{`${r.getId()} / ${Object.values(r.getData()).slice(3, 6).reduce((res, d) => res.length ? res + ' / ' + d : res + d, '')}`}</div>))
        }
      </div>
    </div>
  )
}

export default Widget

async function createDataSource(dsId: string, url: string): Promise<DataSource> {
  const dsJson = await fetchDataSourceJson(dsId, url)
  const dsOptions: FeatureLayerDataSourceConstructorOptions = {
    id: dsId,
    dataSourceJson: dsJson
    // You can pass in a Maps SDK layer if needed.
    // layer: mapsSDKLayer
  }
  return DataSourceManager.getInstance().createDataSource(dsOptions)
}

async function fetchDataSourceJson(dsId: string, url: string): Promise<IMDataSourceJson> {
  if (!url) {
    return Promise.reject(new Error('Need URL.'))
  }

  let normalizedUrl = url
  normalizedUrl = normalizedUrl.split('?')[0]
  normalizedUrl = normalizedUrl.replace(/^http:/, 'https:').replace(/\/+$/, '')

  if (!/\d+$/.test(normalizedUrl)) {
    return Promise.reject(new Error('The URL should end up with the layer ID.'))
  }

  const layerDefinition = await ServiceManager.getInstance().fetchServiceInfo(url).then(res => res.definition)
  // You can create data source json by a Maps SDK layer.
  // const dsJson = dataSourceUtils.dataSourceJsonCreator.createDataSourceJsonByJSAPILayer(dsId, mapsSDKLayer)
  const dsJson = dataSourceUtils.dataSourceJsonCreator.createDataSourceJsonByLayerDefinition(dsId, layerDefinition, normalizedUrl)

  return dsJson
}

function getStyle(): SerializedStyles {
  return css`
    .query-results {
      width: 100%;
      height: 120px;
      overflow: scroll;
    }
  `
}
