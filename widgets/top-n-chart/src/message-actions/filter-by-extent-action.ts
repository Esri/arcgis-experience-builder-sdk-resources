import { AbstractMessageAction, MessageType, MutableStoreManager, type Message, type MessageDescription, type ExtentChangeMessage } from 'jimu-core'

/** Mutable-store key the runtime reads to apply the spatial filter. */
export const EXTENT_FILTER_KEY = 'extentFilter'

/**
 * Lets any extent-publishing widget (e.g. Map) drive the Top-N statistics,
 * so the chart recalculates against whatever area is currently in view.
 */
export default class FilterByExtentAction extends AbstractMessageAction {
  filterMessageDescription (messageDescription: MessageDescription): boolean {
    return messageDescription.messageType === MessageType.ExtentChange
  }

  filterMessage (message: Message): boolean {
    // Ignore the continuous stream emitted mid-navigation; only settle on the final extent.
    return message.type === MessageType.ExtentChange && (message as ExtentChangeMessage).stationary !== false
  }

  onExecute (message: Message): boolean {
    const extent = (message as ExtentChangeMessage).extent
    MutableStoreManager.getInstance().updateStateValue(
      this.widgetId,
      EXTENT_FILTER_KEY,
      extent ? extent.toJSON() : null
    )
    return true
  }
}
