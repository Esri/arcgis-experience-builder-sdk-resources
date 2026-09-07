import { DataRecordsSelectionChangeMessage, MessageManager, type DataRecord } from 'jimu-core'

/**
 * Publishes (or clears) the widget's downstream selection message.
 * Others is never resolvable to real records and must never be published as a selection.
 * Full native selection-synchronization and Data Action wiring remain owned by EXB 2A.2;
 * this is the Core message-publication prerequisite/baseline.
 */
export function publishSelectionChange (widgetId: string, dataSourceId: string, records: DataRecord[]): void {
  const message = new DataRecordsSelectionChangeMessage(widgetId, records, [dataSourceId])
  MessageManager.getInstance().publishMessage(message)
}

export function publishSelectionClear (widgetId: string, dataSourceId: string): void {
  publishSelectionChange(widgetId, dataSourceId, [])
}
