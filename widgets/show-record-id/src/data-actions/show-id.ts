import { AbstractDataAction, type DataRecordSet, MutableStoreManager } from 'jimu-core'

export default class ExportJson extends AbstractDataAction {
  async isSupported (dataSet: DataRecordSet): Promise<boolean> {
    const { records } = dataSet
    return records?.length > 0
  }

  async onExecute (dataSet: DataRecordSet, actionConfig?: any): Promise<boolean> {
    const { records } = dataSet
    const ids = records.map(r => r.getId())
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'featureIds', JSON.stringify(ids))
    return true
  }
}
