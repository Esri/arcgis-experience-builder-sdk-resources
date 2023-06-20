/** @jsx jsx */
import { React, jsx, css, type AllWidgetProps, DataSourceComponent, type FeatureLayerQueryParams, ExpressionResolverComponent, type SingleExpressionResolveResult, DataSourceManager, type DataSource, expressionUtils, type DataRecord } from 'jimu-core'
import { type IMConfig } from '../config'

const DEFAULT_QUERY: FeatureLayerQueryParams = { where: '1=1', outFields: ['*'] }

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const { config, useDataSources, id } = props
  const { expression } = config

  const renderExpressionResult = (resolvedResults: SingleExpressionResolveResult) => {
    if (!resolvedResults?.isSuccessful) {
      return null
    }
    return <div className='record-item'>{resolvedResults.value}</div>
  }

  const getRecordsForExpression = (populatedRecord: DataRecord, populatedDataSourceId: string, dssUsedInExpression: DataSource[]): { [dataSourceId: string]: DataRecord[] } => {
    const records: { [dataSourceId: string]: DataRecord[] } = {}
    dssUsedInExpression.forEach(ds => {
      if (!records[ds.id]) {
        records[ds.id] = ds.id === populatedDataSourceId ? [populatedRecord] : ds.getRecords()
      }
    })
    return records
  }

  const renderData = (dataSource: DataSource) => {
    const dsIdsUsedInExpression = expressionUtils.getDataSourceIdsFromExpression(expression)
    const dssUsedInExpression = dsIdsUsedInExpression.map(dsId => DataSourceManager.getInstance().getDataSource(dsId)) // the used ds of the widget or selection view of the used ds of the widget
    if (dssUsedInExpression.filter(ds => !!ds).length === 0) {
      return <div>No data source.</div>
    }

    if (dssUsedInExpression.some(ds => ds.getRecords().length === 0)) {
      return <div>No records.</div>
    }

    return <div className='record-list'>
      {
        dataSource.getRecords().map((r, i) => <ExpressionResolverComponent key={i} records={getRecordsForExpression(r, dataSource.id, dssUsedInExpression)} expression={expression} widgetId={id}>{renderExpressionResult}</ExpressionResolverComponent>)
      }
    </div>
  }

  return (
    <div className='widget-use-expression jimu-widget' css={style}>
      {
        useDataSources?.[0] && expression
          ? <DataSourceComponent useDataSource={useDataSources[0]} query={DEFAULT_QUERY} widgetId={id}>{renderData}</DataSourceComponent>
          : <div>
              <p>This widget demonstrates how to resolve expression for multiple records.</p>
              <p>Please select a data source and an expression.</p>
            </div>
      }
    </div>
  )
}

export default Widget

const style = css`
  height: 100%;
  overflow: auto;
  .record-item {
    border: 1px solid gray;
  }
`
