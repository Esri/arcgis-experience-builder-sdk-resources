/** @jsx jsx */
import { React, jsx, css, AllWidgetProps, DataSourceComponent, FeatureLayerQueryParams, ExpressionResolverComponent, SingleExpressionResolveResult, DataSourceManager } from 'jimu-core'
import { IMConfig } from '../config'

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

  const renderData = () => {
    const dsIdUsedInExpression = expression.parts?.find(p => p.dataSourceId)?.dataSourceId
    const dsUsedInExpression = DataSourceManager.getInstance().getDataSource(dsIdUsedInExpression) // the used ds of the widget or selection view of the used ds of the widget
    if (!dsUsedInExpression) {
      return <div>No data source.</div>
    }

    if (dsUsedInExpression.getRecords().length === 0) {
      return <div>No records.</div>
    }

    return <div className='record-list'>
      {
        dsUsedInExpression.getRecords().map((r, i) => <ExpressionResolverComponent key={i} records={{ [dsIdUsedInExpression]: [r] }} expression={expression} widgetId={id}>{renderExpressionResult}</ExpressionResolverComponent>)
      }
    </div>
  }

  return (
    <div className='widget-use-expression jimu-widget' css={style}>
      {
        useDataSources?.[0] && expression
          ? <DataSourceComponent useDataSource={useDataSources[0]} query={DEFAULT_QUERY} widgetId={id}>{renderData}</DataSourceComponent>
          : <div>
              <p>This widget demostrates how to resolve expression for multiple records.</p>
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
    border: 1px solid blue;
  }
`