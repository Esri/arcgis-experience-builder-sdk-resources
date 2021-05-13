import { AbstractDataAction, DataSource, DataRecord, MutableStoreManager } from 'jimu-core'

export default class ExportJson extends AbstractDataAction {
  async isSupported (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    return records?.length > 0
  }

  async onExecute (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    const ids = records.map(r => r.getId())
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'featureIds', JSON.stringify(ids))
    return true
  }
}
