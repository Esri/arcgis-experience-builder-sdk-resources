import { React, Immutable, DataSourceTypes, DataSourceManager, type UseDataSource, type DataSourceJson, SqlExpressionMode, type IMSqlExpression } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { SqlExpressionBuilderPopup } from 'jimu-ui/advanced/sql-expression-builder'
import { getJimuFieldNamesBySqlExpression } from 'jimu-ui/basic/sql-expression-runtime'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { type IMConfig } from '../config'
import { Button } from 'jimu-ui'

interface State {
  isSqlBuilderOpen: boolean
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig>, State> {
  supportedTypes = Immutable([DataSourceTypes.FeatureLayer])

  constructor (props) {
    super(props)
    this.state = {
      isSqlBuilderOpen: false
    }
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (useDataSources?.length > 0) {
      const originDsId = useDataSources[0]?.dataSourceId
      const originDs = DataSourceManager.getInstance().getDataSource(originDsId)
      const outputDsJsons: DataSourceJson[] = [{
        id: `${this.props.id}-ouput`,
        type: DataSourceTypes.FeatureLayer,
        label: `${this.props.manifest.name}-output-data-source`,
        geometryType: originDs.getDataSourceJson().geometryType,
        originDataSources: [useDataSources[0]],
        isDataInDataSourceInstance: true
      }]

      // Let framework know which data source current widget is using and which data source current widget is outputing.
      this.props.onSettingChange({
        id: this.props.id,
        useDataSources: useDataSources
      }, outputDsJsons)
    }
  }

  onSqlExpressionChange = (sqlExpression: IMSqlExpression) => {
    const usedFields = getJimuFieldNamesBySqlExpression(sqlExpression)
    const newUseDs = this.props.useDataSources[0].set('fields', usedFields).asMutable({ deep: true })

    // Save the SQL expression to config and update use data sources based on the fields SQL expression is using.
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: [newUseDs],
      config: { sqlExpression }
    })
  }

  toggleSqlBuilder = () => { this.setState({ isSqlBuilderOpen: !this.state.isSqlBuilderOpen }) }

  render () {
    const dsId = this.props.useDataSources?.[0]?.dataSourceId
    const ds = dsId && DataSourceManager.getInstance().getDataSource(dsId)
    return (
      <div className='setting-attribute-query-result-as-output p-2'>
        <DataSourceSelector
          mustUseDataSource
          types={this.supportedTypes}
          useDataSources={this.props.useDataSources}
          useDataSourcesEnabled={this.props.useDataSourcesEnabled}
          onChange={this.onDataSourceChange}
          widgetId={this.props.id}
        />

        {
          ds && <div className='mt-2'>
            <Button onClick={this.toggleSqlBuilder}>Click to set a SQL expression</Button>
          </div>
        }

        <SqlExpressionBuilderPopup
          dataSource={ds}
          mode={SqlExpressionMode.Simple}
          expression={this.props.config.sqlExpression}
          onChange={this.onSqlExpressionChange}
          isOpen={this.state.isSqlBuilderOpen}
          toggle={this.toggleSqlBuilder}
        />
      </div>
    )
  }
}
