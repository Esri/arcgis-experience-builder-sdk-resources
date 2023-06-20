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
import { React, type IMDataSourceInfo, type DataSource, DataSourceStatus, type FeatureLayerQueryParams, type AllWidgetProps, DataSourceComponent } from 'jimu-core'

interface State {
  query: FeatureLayerQueryParams
}

/**
 * This widget will show features from a configured feature layer
 */
export default class Widget extends React.PureComponent<AllWidgetProps<unknown>, State> {
  state = { query: null }

  cityNameRef: React.RefObject<HTMLInputElement> = React.createRef()

  componentDidMount () {
    this.query()
  }

  query = () => {
    if (!this.isDsConfigured()) {
      return
    }
    const fieldName = this.props.useDataSources[0].fields[0]
    const w = this.cityNameRef.current && this.cityNameRef.current.value
      ? `${fieldName} like '%${this.cityNameRef.current.value}%'`
      : '1=1'
    this.setState({
      query: {
        where: w,
        outFields: ['*'],
        pageSize: 10
      }
    })
  }

  isDsConfigured = () => {
    if (this.props.useDataSources &&
      this.props.useDataSources.length === 1 &&
      this.props.useDataSources[0].fields &&
      this.props.useDataSources[0].fields.length === 1) {
      return true
    }
    return false
  }

  dataRender = (ds: DataSource, info: IMDataSourceInfo) => {
    const fName = this.props.useDataSources[0].fields[0]
    return <>
      <div>
        <input placeholder="Query value" ref={this.cityNameRef} />
        <button onClick={this.query}>Query</button>
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

  render () {
    if (!this.isDsConfigured()) {
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

      <DataSourceComponent useDataSource={this.props.useDataSources[0]} query={this.state.query} widgetId={this.props.id} queryCount>
        {
          this.dataRender
        }
      </DataSourceComponent>
    </div>
  }
}
