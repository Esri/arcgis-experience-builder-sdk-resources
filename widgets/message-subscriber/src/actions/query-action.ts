import { AbstractMessageAction, MessageType, type Message, getAppStore, appActions, type StringSelectionChangeMessage, type DataRecordsSelectionChangeMessage, type MessageDescription } from 'jimu-core'

export default class QueryAction extends AbstractMessageAction {
  filterMessageDescription (messageDescription: MessageDescription): boolean {
    return [MessageType.StringSelectionChange, MessageType.DataRecordsSelectionChange].includes(messageDescription.messageType)
  }

  filterMessage (message: Message): boolean { return true }

  //set action setting uri
  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/query-action-setting'
  }

  onExecute (message: Message, actionConfig?: any): Promise<boolean> | boolean {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    let q = `${actionConfig.fieldName} = '${message}'`
    switch (message.type) {
      case MessageType.StringSelectionChange:
        q = `${actionConfig.fieldName} = '${(message as StringSelectionChangeMessage).str}'`
        break
      case MessageType.DataRecordsSelectionChange:
        q = `${actionConfig.fieldName} = ` +
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`
        break
    }

    //Save queryString to store
    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', q))
    return true
  }
}
