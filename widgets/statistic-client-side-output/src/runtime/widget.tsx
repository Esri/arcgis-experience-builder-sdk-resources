import {
  React, type IMDataSourceInfo, type DataSource, DataSourceManager, type FeatureLayerDataSource, type FeatureDataRecord, Immutable, type QueryParams,
  type AllWidgetProps, DataSourceComponent, DataSourceStatus
} from 'jimu-core'
import { Button, Loading, LoadingType } from 'jimu-ui'
import { type IMConfig } from '../config'

interface State {
  isLoading: boolean
}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, State> {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  isDsConfigured = () => {
    if (this.props.useDataSources &&
      this.props.useDataSources.length === 1) {
      return true
    }
    return false
  }

  outputDataDataRender = (outputDs: DataSource, info: IMDataSourceInfo) => {
    return (
      <div>
        <div className='mt-2' />
        Output data source records:
        {
          outputDs && outputDs.getRecords().map((record, i) =>
            <div key={i}>
              {
                Object.keys(outputDs.getSchema().fields).filter(f => f !== 'objectid').map((f, i) => <div key={i}>{`${f}: ${record.getData()[f]}`}</div>)
              }
            </div>
          )
        }

      </div>
    )
  }

  onDataSourceCreated = (ds: DataSource) => {
    this.setSourceRecordsToOutputDs()
  }

  onCreateDataSourceFailed = () => {
    this.setSourceRecordsToOutputDs()
  }

  onOutputDataSourceInfoChange = (outputDsInfo: IMDataSourceInfo) => {
    if (outputDsInfo.status === DataSourceStatus.Loading) {
      this.setState({ isLoading: true })
    } else {
      this.setState({ isLoading: false })
    }
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
    if (!this.getOriginDataSource() || !(this.props.config.statFunctions?.length > 0) || !this.props.config.numberField) {
      this.getOutputDataSource().setStatus(DataSourceStatus.NotReady)
      this.getOutputDataSource().setCountStatus(DataSourceStatus.NotReady)
      return
    }

    const outStatistics = this.props.config.statFunctions.asMutable().map(f => ({
      onStatisticField: this.props.config.numberField,
      outStatisticFieldName: f,
      statisticType: f
    }))

    const featureLayerDs = this.getOriginDataSource() as FeatureLayerDataSource
    featureLayerDs.query({
      outFields: ['*'],
      outStatistics
    }).then(statResult => {
      const records = statResult.records.map((r, i) => {
        const featureDataRecord = r as FeatureDataRecord
        const data = featureDataRecord.getData()
        data.objectid = i
        featureDataRecord.feature.attributes = data
        return r
      })
      /**
       * Set source to the output data source.
       * Output data source can use the source to do query, to load records and so on.
       * If use the source to load records,
       * will save the loaded records to output data source instance and widget can get these records by `outputDs.getRecords()`.
       */
      this.getOutputDataSource()?.setSourceRecords(records)
      /**
       * Status of output data source is not ready by default, set it to unloaded to let other widgets know output data source is ready to do query.
       */
      this.getOutputDataSource()?.setStatus(DataSourceStatus.Unloaded)
      this.getOutputDataSource()?.setCountStatus(DataSourceStatus.Unloaded)
    }, err => {
      console.error(`${this.props.id} loading data error, `, err)
    })
  }

  render () {
    if (!this.isDsConfigured()) {
      return (
        <>
          <h3>
            This widget demonstrates how to use statistic query results to generate a client-side output data source.
          </h3>
          <h4>
            Please config data source.
            <br />
            Then, please select a field and add some statistic functions.
          </h4>
        </>
      )
    }

    return (
      <div className='widget-use-feature-set' style={{ width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' }}>
        <h3>
          The output data source is generated.
        </h3>
        <h5>
          Data of the output data source is statistic query result of the selected field and the selected statistic functions.
        </h5>
        <h5>
          The widget will list the records of the output data source.
        </h5>
        <h5>
          If the widget's origin data source is changed (e.g. add a filter), the output data source won't update automatically. Please click the following button.
        </h5>

        <Button onClick={this.setSourceRecordsToOutputDs} className='mb-5'>
          Update output data source
        </Button>

        <DataSourceComponent
          useDataSource={this.props.useDataSources[0]}
          onDataSourceCreated={this.onDataSourceCreated}
          onCreateDataSourceFailed={this.onCreateDataSourceFailed}
        />

        { this.state.isLoading && <Loading type={LoadingType.Secondary} />}

        {
          /**
           * The following part is to use the output data source.
           * `DataSourceComponent` will create output data source instance and the child function component of `DataSourceComponent` can use the outupt data source instance to render.
           */
          this.props.outputDataSources?.[0] &&
            <DataSourceComponent
              useDataSource={Immutable({ dataSourceId: this.props.outputDataSources[0], mainDataSourceId: this.props.outputDataSources[0] })} queryCount
              widgetId={this.props.id} query={{ where: '1=1' } as QueryParams} onDataSourceInfoChange={this.onOutputDataSourceInfoChange}
            >
              {
                this.outputDataDataRender
              }
            </DataSourceComponent>
        }
      </div>
    )
  }
}
