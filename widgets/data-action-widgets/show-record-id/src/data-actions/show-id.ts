import { AbstractDataAction, type DataRecordSet, MutableStoreManager, type DataLevel } from 'jimu-core'

export default class ExportJson extends AbstractDataAction {
  async isSupported (dataSets: DataRecordSet[], dataLevel: DataLevel): Promise<boolean> {
    if (dataSets.length > 1) {
      return false
    }
    const { records } = dataSets[0]
    return records?.length > 0
  }

  async onExecute (dataSets: DataRecordSet[], dataLevel: DataLevel, actionConfig?: any): Promise<boolean> {
    const { records } = dataSets[0]
    const ids = records.map(r => r.getId())
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'featureIds', JSON.stringify(ids))
    return true
  }
}
