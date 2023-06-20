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
import { React, type IMDataSourceInfo, type DataSource, DataSourceManager, DataSourceStatus, type FeatureLayerQueryParams, type AllWidgetProps, DataSourceComponent } from 'jimu-core'
const { useState, useEffect, useRef } = React

/**
 * This widget will show features from a configured feature layer
 */
export default function Widget (props: AllWidgetProps<unknown>) {
  const [query, setQuery] = useState<FeatureLayerQueryParams>(null)
  const cityNameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    queryFunc()
  }, [])

  const isDsConfigured = () => {
    if (props.useDataSources &&
      props.useDataSources.length === 1 &&
      props.useDataSources[0].fields &&
      props.useDataSources[0].fields.length === 1) {
      return true
    }
    return false
  }

  const queryFunc = () => {
    if (!isDsConfigured()) {
      return
    }
    const fieldName = props.useDataSources[0].fields[0]
    const w = cityNameRef.current && cityNameRef.current.value
      ? `${fieldName} like '%${cityNameRef.current.value}%'`
      : '1=1'
    setQuery({
      where: w,
      outFields: ['*'],
      pageSize: 10
    })
  }

  const dataRender = (ds: DataSource, info: IMDataSourceInfo) => {
    //createOutputDs(ds);
    const fName = props.useDataSources[0].fields[0]
    return <>
      <div>
        <input placeholder="Query value" ref={cityNameRef} />
        <button onClick={queryFunc}>Query</button>
      </div>
      <div>Query state: {info.status}</div>
      <div>Count: {ds.count}</div>

      <div className="record-list" style={{ width: '100%', marginTop: '20px', height: 'calc(100% - 80px)', overflow: 'auto' }}>
        {
          ds && ds.getStatus() === DataSourceStatus.Loaded
            ? ds.getRecords().map((r, i) => {
              return <div key={i}>{r.getData()[fName]}</div>
            })
            : null
        }
      </div>
    </>
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createOutputDs = (useDs: DataSource) => {
    if (!props.outputDataSources) {
      return
    }
    const outputDsId = props.outputDataSources[0]
    const dsManager = DataSourceManager.getInstance()
    if (dsManager.getDataSource(outputDsId)) {
      if (dsManager.getDataSource(outputDsId).getDataSourceJson().originDataSources[0].dataSourceId !== useDs.id) {
        dsManager.destroyDataSource(outputDsId)
      }
    }
    dsManager.createDataSource(outputDsId).then(ods => {
      ods.setRecords(useDs.getRecords())
    })
  }

  if (!isDsConfigured()) {
    return <h3>
      This widget demonstrates how to use a feature layer as a data source.
      <br />
      Configure the data source.
    </h3>
  }
  return <div className="widget-use-feature-layer" style={{ width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' }}>
    <h3>
      This widget shows how to use a feature layer as a data source.
    </h3>

    <DataSourceComponent useDataSource={props.useDataSources[0]} query={query} widgetId={props.id} queryCount>
      {dataRender}
    </DataSourceComponent>
  </div>
}
