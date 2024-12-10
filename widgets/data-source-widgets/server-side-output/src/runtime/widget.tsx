import { React, type AllWidgetProps, DataSourceComponent, type QueryParams, dataSourceUtils, DataSourceManager, type FeatureLayerDataSource, DataSourceStatus } from 'jimu-core'
import { Button } from 'jimu-ui'

import { type IMConfig } from '../config'

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, unknown> {
  isDsConfigured = () => {
    if (this.props.useDataSources && this.props.useDataSources.length === 1) {
      return true
    }
    return false
  }

  onDataSourceCreated = () => {
    this.updateOutputDsQueryParams()
  }

  onCreateDataSourceFailed = () => {
    this.updateOutputDsQueryParams()
  }

  getOriginDataSource = () => {
    return DataSourceManager.getInstance().getDataSource(this.props.useDataSources?.[0]?.dataSourceId)
  }

  getOutputDataSource = () => {
    return DataSourceManager.getInstance().getDataSource(this.props.outputDataSources?.[0])
  }

  updateOutputDsQueryParams = () => {
    /**
     * Just like using other data sources, to use an output data source, widget should use it through `DataSourceComponent`, the framework will create the data source instance on the fly.
     * No output data source instance means there isn't any widgets using the output data source,
     * in this case, no need to set source to the output data source.
     */
    if (!this.getOutputDataSource()) {
      return
    }

    /**
     * If do not have origin data source instance, set status of output data source to not ready, which indicates output data source is not ready to do query.
     */
    if (!this.getOriginDataSource()) {
      this.getOutputDataSource().setStatus(DataSourceStatus.NotReady)
      this.getOutputDataSource().setCountStatus(DataSourceStatus.NotReady)
      return
    }

    const featureLayerOriginDs = this.getOriginDataSource() as FeatureLayerDataSource
    const featureLayerOutputDs = this.getOutputDataSource() as FeatureLayerDataSource

    const sql = dataSourceUtils.getArcGISSQL(this.props.config.sqlExpression, this.getOriginDataSource()).sql || '1=1'
    const configuredQueryParams = { where: sql } as QueryParams
    const mergedQueryParams = featureLayerOutputDs.mergeQueryParams(featureLayerOriginDs.getCurrentQueryParams(), configuredQueryParams)
    featureLayerOutputDs.updateQueryParams(mergedQueryParams, this.props.id)
    /**
     * Status of output data source is not ready by default, set it to unloaded to let other widgets know output data source is ready to do query.
     */
    featureLayerOutputDs.setStatus(DataSourceStatus.Unloaded)
    featureLayerOutputDs.setCountStatus(DataSourceStatus.Unloaded)
  }

  render () {
    if (!this.isDsConfigured()) {
      return (
        <h3>
          This widget demonstrates how to use attribute query results to generate a server-side output data source.
          <br />
          Please config data source.
        </h3>
      )
    }

    return (
      <div className='widget-attribute-query-result-as-output' style={{ width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' }}>
        <h3>
          The server-side output data source is generated.
        </h3>
        <h5>
          If you want to use the server-side output data source, you should add another widget (such as List) and configure the output data source for it.
        </h5>
        <h5>
          If the widget's origin data source is changed (e.g. add a filter), the output data source won't update automatically. Please click the following button.
        </h5>

        <Button onClick={this.updateOutputDsQueryParams}>
          Update output data source
        </Button>

        <DataSourceComponent
          useDataSource={this.props.useDataSources[0]}
          widgetId={this.props.id}
          onDataSourceCreated={this.onDataSourceCreated}
          onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        />

      </div>
    )
  }
}
