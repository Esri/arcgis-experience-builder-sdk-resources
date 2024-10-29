import { React, type AllWidgetProps, DataSourceComponent, dataSourceUtils, DataSourceManager, type FeatureLayerDataSource, DataSourceStatus } from 'jimu-core'
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
    this.setSourceRecordsToOutputDs()
  }

  onCreateDataSourceFailed = () => {
    this.setSourceRecordsToOutputDs()
  }

  getOriginDataSource = () => {
    return DataSourceManager.getInstance().getDataSource(this.props.useDataSources?.[0]?.dataSourceId)
  }

  getOutputDataSource = () => {
    return DataSourceManager.getInstance().getDataSource(this.props.outputDataSources?.[0])
  }

  setSourceRecordsToOutputDs = () => {
    /**
     * Just like using other data sources, to use an output data source, widget should use it through `DataSourceComponent`, the framework will create the data source instance on the fly.
     * No output data source instance means there isn't any widgets using the output data source,
     * in this case, no need to set source to the output data source.
     */
    if (!this.getOutputDataSource()) {
      return
    }

    /**
     * Need origin data source instance to get source records.
     * If do not have origin data source instance, set status of output data source to not ready, which indicates output data source is not ready to do query.
     */
    if (!this.getOriginDataSource()) {
      this.getOutputDataSource().setStatus(DataSourceStatus.NotReady)
      this.getOutputDataSource().setCountStatus(DataSourceStatus.NotReady)
      return
    }

    const sql = dataSourceUtils.getArcGISSQL(this.props.config.sqlExpression, this.getOriginDataSource()).sql || '1=1'
    const featureLayerDs = this.getOriginDataSource() as FeatureLayerDataSource
    featureLayerDs.query({ where: sql }).then(res => {
      /**
       * Set source to the output data source.
       * Output data source can use the source to do query, to load records and so on.
       * If use the source to load records,
       * will save the loaded records to output data source instance and widget can get these records by `outputDs.getRecords()`.
       */
      this.getOutputDataSource()?.setSourceRecords(res.records)
      /**
       * Status of output data source is not ready by default, set it to unloaded to let other widgets know output data source is ready to do query.
       */
      this.getOutputDataSource()?.setStatus(DataSourceStatus.Unloaded)
      this.getOutputDataSource()?.setCountStatus(DataSourceStatus.Unloaded)
    })
  }

  render () {
    if (!this.isDsConfigured()) {
      return (
        <h3>
          This widget demonstrates how to use attribute query results to generate a client-side output data source.
          <br />
          Please config data source.
        </h3>
      )
    }

    return (
      <div className='widget-attribute-query-result-as-output' style={{ width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' }}>
        <h3>
          The client-side output data source is generated.
        </h3>
        <h5>
          If you want to use the client-side output data source, you should add another widget (such as List) and configure the output data source for it.
        </h5>
        <h5>
          If the widget's origin data source is changed (e.g. add a filter), the output data source won't update automatically. Please click the following button.
        </h5>

        <Button onClick={this.setSourceRecordsToOutputDs}>
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
