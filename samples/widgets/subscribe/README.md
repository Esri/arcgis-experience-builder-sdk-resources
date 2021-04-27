# Subscribe widget

This sample demonstrates how to use message action in widget.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `samples/widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
  Within `query-action-setting.tsx`,create an class extends the React.PureComponent class with the types `ActionSettingProps`,
  the configuration of the message action can be released through the `onSettingChange` method

  ```javascript
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

```

Within `query-action.tsx`, create an class extends the `AbstractMessageAction` class, we should set the uri of the action setting component through the `getSettingComponentUri` method, the `filterMessageType` method can filter out actions that do not meet our requirements. We can monitor the trigger of
the action in the `onExecute` method, and can perform the operation what we want
```javascript
export default class QueryAction extends AbstractMessageAction{
  filterMessageType(messageType: MessageType, messageWidgetId?: string): boolean{
    return [MessageType.StringSelectionChange, MessageType.DataRecordsSelectionChange].indexOf(messageType) > -1;
  }

  filterMessage(message: Message): boolean{return true; }

  getSettingComponentUri(messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/query-action-setting';
  }

  onExecute(message: Message, actionConfig?: any): Promise<boolean> | boolean{
    let q = `${(actionConfig as ConfigForStringChangeMessage).fieldName} = '${message}'`
    switch(message.type){
      case MessageType.StringSelectionChange:
        q = `${(actionConfig as ConfigForStringChangeMessage).fieldName} = '${(message as StringSelectionChangeMessage).str}'`
        break;
      case MessageType.DataRecordsSelectionChange:
        q = `${actionConfig.fieldName} = ` +
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getData()[actionConfig.fieldName]}'`
        break;
    }

    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', q));
    return true;
  }
}

```

In the `manifest.json` there is an messageActions property that provides the location and information for the message action extension.
```javascript
"messageActions": [
  {
    "name": "query",
    "label": "query",
    "uri": "actions/query-action",
    "settingUri": "actions/query-action-setting"
  }
]
```