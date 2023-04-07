/** @jsx jsx */
import { jsx, React, css, Immutable, DataSourceTypes, type UseDataSource, type Expression } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { ExpressionBuilder, ExpressionBuilderType } from 'jimu-ui/advanced/expression-builder'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import { type IMConfig } from '../config'

const SUPPORT_DATA_SOURCE_TYPES = Immutable([DataSourceTypes.FeatureLayer])
const SUPPORT_EXPRESSION_TYPES = Immutable([ExpressionBuilderType.Attribute, ExpressionBuilderType.Statistics, ExpressionBuilderType.Expression])

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { onSettingChange, id, config, useDataSources } = props
  const { expression } = config

  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    onSettingChange({
      id,
      useDataSources
    })
  }

  const onExpression = (expression: Expression) => {
    onSettingChange({
      id,
      config: {
        ...config,
        expression
      }
    })
  }

  return (
    <div className='widget-setting-use-expression jimu-widget-setting' css={style}>
      <SettingSection title='Data'>
        <SettingRow>
          <DataSourceSelector onChange={onDataSourceChange} types={SUPPORT_DATA_SOURCE_TYPES} useDataSources={useDataSources} widgetId={id} mustUseDataSource />
        </SettingRow>
      </SettingSection>

      <SettingSection title='Expression'>
        <SettingRow>
          {
            useDataSources?.length > 0
              ? <ExpressionBuilder
                  className='w-100' useDataSources={useDataSources} types={SUPPORT_EXPRESSION_TYPES}
                  onChange={onExpression} expression={expression} widgetId={id}
                />
              : 'Please select a data.'
          }
        </SettingRow>
      </SettingSection>
    </div>
  )
}

export default Setting

const style = css`
  overflow-y: auto;
  height: calc(100% - 60px);
`
