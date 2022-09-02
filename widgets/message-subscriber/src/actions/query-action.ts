import { AbstractMessageAction, MessageType, Message, MessageDescription, getAppStore, appActions, DataRecordsSelectionChangeMessage } from 'jimu-core'

export default class QueryAction extends AbstractMessageAction {
  filterMessageType (messageType: MessageType, messageWidgetId?: string): boolean {
    return [MessageType.DataRecordsSelectionChange].includes(messageType)
  }

  // Needed to indicate whether or not the type of message can trigger the filter
  // message action. Used in the builder to filter the available actions.
  filterMessageDescription (messageDescription: MessageDescription): boolean {
    return messageDescription.messageType === MessageType.DataRecordsSelectionChange
  }

  filterMessage (message: Message): boolean { return true }

  //set action setting uri
  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/query-action-setting'
  }

  onExecute (message: Message, actionConfig?: any): Promise<boolean> | boolean {
    let q = `${actionConfig.fieldName} = '${message}'`

    q = `${actionConfig.fieldName} = ` +
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`

    //Save queryString to store
    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', q))
    return true
  }
}
