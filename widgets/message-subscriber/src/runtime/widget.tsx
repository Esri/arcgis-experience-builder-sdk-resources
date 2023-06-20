import { React, utils, type DataSource, DataSourceComponent, type AllWidgetProps, DataSourceStatus, type IMDataSourceInfo } from 'jimu-core'
import Query from 'esri/rest/support/Query'

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>, { query: any }> {
  state = { query: null }

  componentDidUpdate (prevProps: AllWidgetProps<unknown>) {
    if (utils.getValue(this.props, 'stateProps.queryString') !== utils.getValue(prevProps, 'stateProps.queryString')) {
      const q = new Query({
        where: this.props.stateProps.queryString, //Get queryString from store
        outFields: ['*']
      })
      this.setState({ query: q.toJSON() })
    }
  }

  componentDidMount () {
    const q = new Query({
      where: this.props.stateProps ? this.props.stateProps.queryString : '1=1',
      outFields: ['*']
    })
    this.setState({ query: q.toJSON() })
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

  render () {
    if (!this.isDsConfigured()) {
      return <h3>
        Please config data source.
      </h3>
    }

    return <div className="widget-subscribe" style={{ overflow: 'auto', maxHeight: '700px' }}>
      <h5>This widget will listen to a <b>STRING_SELECTION_CHANGE</b> and <b>FEATURE_SELECTION_CHANGE</b> message to run a query</h5>
      <DataSourceComponent useDataSource={this.props.useDataSources[0]} query={this.state.query} widgetId={this.props.id} localId="query-result">{
        (ds: DataSource, info: IMDataSourceInfo) => {
          const isLoaded = info.status === DataSourceStatus.Loaded
          // eslint-disable-next-line no-mixed-operators
          const fName = this.props.useDataSources[0].fields && this.props.useDataSources[0].fields[0] || 'objectid'

          const list = isLoaded
            ? ds.getRecords().map((r, i) => {
              return <div key={i}>{r.getData()[fName]}</div>
            })
            : null
          let content
          if (!this.props.stateProps) {
            content = 'no message'
          } else {
            content = <div>
              <div>The query string: {this.props.stateProps.queryString}</div>
              <div>query state: {info.status}</div>
              <div>query result: {fName}</div>
              {list}
            </div>
          }

          return content
        }
      }</DataSourceComponent>
    </div>
  }
}
