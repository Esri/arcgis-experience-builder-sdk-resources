/** @jsx jsx */
import { React, jsx, type ActionSettingProps, type ImmutableObject, type IMFieldSchema, getAppStore, Immutable, type UseDataSource, type IMUseDataSource, type DataSource } from 'jimu-core'
import { FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import { SettingSection } from 'jimu-ui/advanced/setting-components'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface States {}

interface Config {
  useDataSource: UseDataSource
}

export type IMConfig = ImmutableObject<Config>

class QueryActionSetting extends React.PureComponent<ActionSettingProps<IMConfig>, States> {
  static defaultProps = {
    config: Immutable({
      useDataSource: null
    })
  }

  /**
   * Returns the init config.The config contains the useDataSource attribute.
   * Gets the value of useDataSource: Returns its DataSource if it has been specified.
   * If not, specify the useDataSource that is already selected in the publish widget.
  */
  getInitConfig = () => {
    const messageWidgetId = this.props.messageWidgetId
    const config = getAppStore().getState().appStateInBuilder.appConfig
    const messageWidgetJson = config.widgets[messageWidgetId]

    let useDataSource: IMUseDataSource = null
    if (!this.props.config.useDataSource) {
      if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1) {
        useDataSource = Immutable({
          dataSourceId: messageWidgetJson.useDataSources[0].dataSourceId,
          mainDataSourceId: messageWidgetJson.useDataSources[0].mainDataSourceId,
          dataViewId: messageWidgetJson.useDataSources[0].dataViewId,
          rootDataSourceId: messageWidgetJson.useDataSources[0].rootDataSourceId
        })
      }
    } else {
      useDataSource = this.props.config.useDataSource
    }

    return {
      useDataSource: useDataSource
    }
  }

  componentDidMount () {
    const initConfig = this.getInitConfig()

    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('useDataSource', initConfig.useDataSource)
    })
  }

  /**
   * Get the selected DataSource from subscribe-widget through widgetId.
   *
   * @param widgetId The id of the widget that listens to for the message.
  */
  getDsSelectorSourceData = (widgetId: string) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[widgetId]
    const dsSelectorSource = widgetJson && widgetJson.useDataSources
    return dsSelectorSource
  }

  /**
   * Select the fields to query in subscribe-widget.
  */
  onFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    const field = allSelectedFields[0]
    if (!field) {
      return
    }
    if (this.props.config.useDataSource) {
      //Save the message action configuration to config
      this.props.onSettingChange({
        actionId: this.props.actionId,
        config: this.props.config.set('fieldName', field.name).set('useDataSource', {
          dataSourceId: this.props.config.useDataSource.dataSourceId,
          mainDataSourceId: this.props.config.useDataSource.mainDataSourceId,
          dataViewId: this.props.config.useDataSource.dataViewId,
          rootDataSourceId: this.props.config.useDataSource.rootDataSourceId,
          fields: allSelectedFields.map(f => f.jimuName)
        })
      })
    }
  }

  render () {
    const useDataSources = this.getDsSelectorSourceData(this.props.widgetId)
    return <div>
      <SettingSection title="Select field">
        {
          useDataSources && useDataSources.length > 0 &&
          <div className="mt-2">Please choose a Field to query:
            <FieldSelector
              useDataSources={useDataSources}
              onChange={this.onFieldSelected}
              selectedFields={this.props.config.useDataSource && this.props.config.useDataSource.fields
                ? this.props.config.useDataSource.fields
                : Immutable([])}
            />
          </div>
        }
      </SettingSection>
    </div>
  }
}

export default QueryActionSetting
