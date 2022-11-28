# Message subscriber

This sample demonstrates how to use message action in a widget.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This widget requires another widget to publish the message for the data records and string selection change. You can use the FeatureInfo widget with a Record Selection Changes trigger to select this widget to configure the action settings. 

Within `query-action-setting.tsx`, create a class to extend the React.PureComponent class with the types `ActionSettingProps`. The configuration of the message action can be changed through the `onSettingChange` method.

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

Within `query-action.tsx`, create a class to extend the `AbstractMessageAction` class. Then set the URI of the action setting component through the `getSettingComponentUri` method. Use the ` filterMessageDescription` method to filter out actions that are not relevant to this widget. The `onExecute` method is called when the action is triggered.
```javascript
export default class QueryAction extends AbstractMessageAction{
  filterMessageDescription(messageDescription: MessageDescription): boolean{
    return [MessageType.StringSelectionChange, MessageType.DataRecordsSelectionChange].indexOf(messageDescription.messageType) > -1;
  }

  filterMessage(message: Message): boolean{return true; }

  getSettingComponentUri(messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/query-action-setting';
  }

  onExecute(message: Message, actionConfig?: any): Promise<boolean> | boolean{
    let q = `${actionConfig.fieldName} = '${message}'`
    switch(message.type){
      case MessageType.StringSelectionChange:
        q = `${actionConfig.fieldName} = '${(message as StringSelectionChangeMessage).str}'`
        break;
      case MessageType.DataRecordsSelectionChange:
        q = `${actionConfig.fieldName} = ` +
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`
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
