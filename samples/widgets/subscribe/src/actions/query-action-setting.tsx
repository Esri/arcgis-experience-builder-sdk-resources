/** @jsx jsx */
import {React, css, jsx, ActionSettingProps, SerializedStyles, ImmutableObject, IMFieldSchema,
  themeUtils, ThemeVariables, polished, getAppStore, Immutable, UseDataSource, IMUseDataSource, DataSource} from 'jimu-core';
import {FieldSelector} from 'jimu-ui/advanced/data-source-selector';
import {SettingSection} from 'jimu-ui/advanced/setting-components';
import {ArcGISDataSourceTypes} from 'jimu-arcgis';
import defaultMessages from '../setting/translations/default';

interface ExtraProps {
  theme?: ThemeVariables;
}

interface States {
  isShowLayerList: boolean;
}

interface Config {
  useDataSource: UseDataSource;
}

export type IMConfig = ImmutableObject<Config>;

class _QueryActionSetting extends React.PureComponent<ActionSettingProps<IMConfig> & ExtraProps, States>{
  modalStyle: any = {position: 'absolute', top: '0', bottom: '0', width: '259px',
    height: 'auto', borderRight: '', borderBottom: '', paddingBottom: '1px'};

  constructor(props){
    super(props);

    this.modalStyle.borderRight = '1px solid black';
    this.modalStyle.borderBottom = '1px solid black';

    this.state = {
      isShowLayerList: false
    }
  }

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
    return _getInitConfig(this.props);
  }

  componentDidMount() {
    const initConfig = this.getInitConfig();

    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: this.props.config.set('useDataSource', initConfig.useDataSource)
    });
  }

  /**
   * Returns the style based on the theme.
  */
  getStyle (theme: ThemeVariables): SerializedStyles {
    return css`
      .setting-header {
        padding: ${polished.rem(10)} ${polished.rem(16)} ${polished.rem(0)} ${polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `;
  }

  /**
   * Get the selected DataSource from subscribe-widget through widgetId.
   *
   * @param widgetId The id of the widget that listens for the message.
  */
  getDsSelectorSourceData = (widgetId: string) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig;
    const widgetJson = appConfig?.widgets?.[widgetId];
    const dsSelectorSource = widgetJson && widgetJson.useDataSources;
    return dsSelectorSource;
  }

  /**
   * Select the fields to query in subscribe-widget.
  */
  onFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    const field = allSelectedFields[0];
    if(!field){
      return;
    }
    if (this.props.config.useDataSource) {
      this.props.onSettingChange({
        actionId: this.props.actionId,
        config: this.props.config.set('fieldName', field['name']).set('useDataSource',{
          dataSourceId: this.props.config.useDataSource.dataSourceId,
          mainDataSourceId: this.props.config.useDataSource.mainDataSourceId,
          dataViewId: this.props.config.useDataSource.dataViewId,
          rootDataSourceId: this.props.config.useDataSource.rootDataSourceId,
          fields: allSelectedFields.map(f => f.jimuName)
        })
      });
    }
  }

  render(){
    const useDataSources = this.getDsSelectorSourceData(this.props.widgetId);
    return <div css={this.getStyle(this.props.theme)}>
      <SettingSection title={this.props.intl.formatMessage({id: 'queryAction_Field', defaultMessage: defaultMessages.queryAction_Field})}>
        {
          useDataSources && useDataSources.length > 0 &&
          <div className="mt-2">Please choose a Field to query:
            <FieldSelector
              useDataSources={useDataSources}
              onChange={this.onFieldSelected}
              selectedFields={this.props.config.useDataSource && this.props.config.useDataSource.fields
                ? this.props.config.useDataSource.fields : Immutable([])}
            />
          </div>
        }
      </SettingSection>
    </div>;
  }
}

export function _getInitConfig(
  props: any
) {
  const messageWidgetId = props.messageWidgetId;
  const config = getAppStore().getState().appStateInBuilder.appConfig;
  const messageWidgetJson = config.widgets[messageWidgetId];

  let useDataSource: IMUseDataSource = null;
  if (!props.config.useDataSource) {
    if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1 ) {
      const dsJson = config.dataSources[messageWidgetJson.useDataSources[0].dataSourceId];
      if (dsJson && ((dsJson.type === ArcGISDataSourceTypes.WebMap) || (dsJson.type === ArcGISDataSourceTypes.WebScene))) {
        useDataSource = null;
      } else {
        useDataSource = Immutable({
          dataSourceId: messageWidgetJson.useDataSources[0].dataSourceId,
          mainDataSourceId: messageWidgetJson.useDataSources[0].mainDataSourceId,
          dataViewId: messageWidgetJson.useDataSources[0].dataViewId,
          rootDataSourceId: messageWidgetJson.useDataSources[0].rootDataSourceId
        });
      }
    }
  } else {
    useDataSource = props.config.useDataSource;
  }

  return {
    useDataSource: useDataSource
  }
}

export default themeUtils.withTheme(_QueryActionSetting);