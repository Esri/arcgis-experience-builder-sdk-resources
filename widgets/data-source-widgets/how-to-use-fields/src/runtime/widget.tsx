/** @jsx jsx */
import { React, jsx, css, type AllWidgetProps, DataSourceManager, type FeatureDataRecord, type SerializedStyles, DataSourceComponent, type IMUseDataSource, type QueryParams, type FeatureLayerDataSource, type DataSource } from 'jimu-core'
import type { IMConfig } from '../config'
import { Select, Option } from 'jimu-ui'
import { useEffect } from 'react'

const { useState } = React
enum QueryTypes {
  Load = 'LOAD', // The load method will query records and save them in the data source instance to share them with widgets.
  Query = 'QUERY' // The query method will only query records and return the result.
}

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [queryType, setQueryType] = useState<QueryTypes>(QueryTypes.Load)
  const [queryResults, setQueryResults] = useState<FeatureDataRecord[]>(null)

  useEffect(() => {
    // If it is load, will use the DataSourceComponent to load records to the data source instance. No need to call the `query` method.
    if (queryType === QueryTypes.Load) {
      // Reset query results.
      setQueryResults(null)
      return
    }

    // If the user doesn't click the 'Query' button, or, doesn't select data source in settings, will wait.
    if (!props.useDataSources?.[0]) {
      return
    }

    // Create the data source.
    createDataSource(props.useDataSources[0])
      .then((ds: FeatureLayerDataSource) =>
        /**
         * Query the data source based on selected fields.
         * Please note, the query results won't be saved to the data source instance automatically, we need to save them to state.
         */
        ds.query({ where: '1=1', outFields: props.useDataSources[0].fields?.asMutable() }).then(res => {
          setQueryResults(res.records as FeatureDataRecord[])
        })
      )
      .catch(() => {console.error('Failed to create data source')})
  }, [queryType, props.useDataSources])

  const onQueryTypeChange = evt => {
    setQueryType(evt.target.value)
  }

  const renderRecords = (records: FeatureDataRecord[]) => {
    return records?.map((r, i) => <div key={i} className='px-2 py-3'>{`${Object.values(r.getData()).reduce((res, d) => res.length ? res + ' / ' + d : res + d, '')}`}</div>)
  }

  return (
    <div className='widget-demo jimu-widget m-2' css={getStyle()}>
      <h1>How to use fields</h1>
      <p>
        The load method queries records and stores them in the data source instance to share with widgets.
        If additional fields are added, the data source will load the missing fields.
        However, if fields are removed, the load status of the data source will remain unchanged.
      </p>
      <p>
        The query method only retrieves records and returns them.
        Whenever the fields are modified, the data source will send a new request.
      </p>

      {
        !props.useDataSources?.length
          ? 'No selected data source'
          : <div>
            <div>Query type: </div>
            <Select className='pr-2' size='sm' value={queryType} onChange={onQueryTypeChange}>
              {
                Object.values(QueryTypes).map(t => {
                  return (
                    <Option value={t} key={t} selected={t === queryType}>
                      {t}
                    </Option>
                  )
                })
              }
            </Select>
            <br />

            <h1 className='mt-5'>Results: </h1>
            {
              queryType === QueryTypes.Load &&
              /**
               * Use the DataSourceComponent to load records.
               * Please note, we don't set `outFields` since we have saved the selected fields to widgetJson.useDataSources in the settings.
               */
              <DataSourceComponent widgetId={props.id} useDataSource={props.useDataSources?.[0]} query={{ where: '1=1' } as QueryParams}>
                {
                  ds =>
                    <div className='query-results'>
                      {renderRecords((ds.getRecords() as FeatureDataRecord[]))}
                    </div>
                }
              </DataSourceComponent>
            }
            {
              queryType === QueryTypes.Query &&
              renderRecords(queryResults)
            }
          </div>
      }
    </div>
  )
}

export default Widget

function getStyle(): SerializedStyles {
  return css`
    .query-results {
      width: 100%;
      height: 120px;
      overflow: scroll;
    }
  `
}

async function createDataSource(useDataSource: IMUseDataSource): Promise<DataSource> {
  if (!useDataSource) {
    return null
  }

  /**
   * We recommend to get the data source instance whenever you need it, instead saving it in state or other variables.
   * It prevents access to the data source after it has been destroyed.
   */
  return DataSourceManager.getInstance().getDataSource(useDataSource.dataSourceId) || (await DataSourceManager.getInstance().createDataSourceByUseDataSource(useDataSource))
}
