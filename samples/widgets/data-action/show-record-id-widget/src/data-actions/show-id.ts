import { AbstractDataAction, DataSource, DataRecord } from 'jimu-core'

export default class ExportJson extends AbstractDataAction {
  async isSupported (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    return records.length > 0
  }

  async onExecute (dataSource: DataSource, records: DataRecord[]): Promise<boolean> {
    const ids = records.map(r => r.getId())
    alert(JSON.stringify(ids))
    return true
  }
}
