import {AbstractMessageAction, MessageType, Message, getAppStore, appActions, StringSelectionChangeMessage, DataRecordsSelectionChangeMessage} from 'jimu-core';

interface ConfigForStringChangeMessage{
  fieldName: string;
}

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
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`
        break;
    }

    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', q));
    return true;
  }
}