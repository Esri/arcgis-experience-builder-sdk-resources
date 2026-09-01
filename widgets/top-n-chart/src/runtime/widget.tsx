import {
  React,
  type AllWidgetProps,
  DataSourceComponent,
  DataSourceStatus,
  type DataSource,
  type QueriableDataSource
} from 'jimu-core'
import { Loading, Alert } from 'jimu-ui'
import './widget.css'
import { getFullConfig, type IMConfig } from '../config'
import { ChartContainer } from './components/ChartContainer'

const TopNChartWidget = (props: AllWidgetProps<IMConfig>): React.ReactElement => {
  const { id, useDataSources, enableDataAction, mutableStateProps } = props
  const extentFilter = (mutableStateProps as any)?.extentFilter ?? null
  const config = getFullConfig(props.config)
  const useDataSource = useDataSources?.[0]

  if (!useDataSource?.dataSourceId) {
    return (
      <div className="topn-chart-widget">
        <Alert type="info" text="Please configure a data source in the widget settings." />
      </div>
    )
  }

  return (
    <div className="topn-chart-widget">
      <DataSourceComponent useDataSource={useDataSource} widgetId={id}>
        {(dataSource: DataSource) => {
          if (!dataSource) {
            return <Loading />
          }

          const status = dataSource.getStatus()

          if (status === DataSourceStatus.Loading || status === DataSourceStatus.NotReady) {
            return <Loading />
          }

          if (status === DataSourceStatus.LoadError) {
            return <Alert type="error" text="Error loading data source." />
          }

          return (
            <ChartContainer
              dataSource={dataSource as QueriableDataSource}
              config={config}
              widgetId={id}
              enableDataAction={enableDataAction !== false}
              extentFilter={extentFilter}
            />
          )
        }}
      </DataSourceComponent>
    </div>
  )
}

export default TopNChartWidget
