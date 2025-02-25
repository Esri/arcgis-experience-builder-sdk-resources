import { AbstractDataAction, type DataRecordSet, MutableStoreManager, type DataLevel } from 'jimu-core'

export default class ExportJson extends AbstractDataAction {
  isSupported(dataSets: DataRecordSet[], dataLevel: DataLevel): Promise<boolean> {
    if (dataSets.length > 1) {
      return Promise.resolve(false)
    }
    const { records } = dataSets[0]
    return Promise.resolve(records?.length > 0)
  }

  onExecute(dataSets: DataRecordSet[], dataLevel: DataLevel, actionConfig?: any): Promise<boolean> {
    const { records } = dataSets[0]
    const ids = records.map(r => r.getId())
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'featureIds', JSON.stringify(ids))
    return Promise.resolve(true)
  }
}
