# Implementation Surface: Message Actions

## Message Actions

- Declare the published message in `manifest.publishMessages`
- Declare provided actions in `manifest.messageActions`.
- Keep manifest declaration (`name`, `uri`, labels, and optional `settingUri`) aligned with implementation exports.
- Add action implementation using `AbstractMessageAction` patterns.
- Implement `filterMessageDescription` narrowly so actions only appear for compatible message types and sources. Validate the actual message payload in `filterMessage` or `onExecute`.
- If an action can cause messages after successful execution, implement `getEffectMessages(actionConfig)` and return an accurate, side-effect-free `EffectMessageJson[]`. Builder uses these declared effects to construct the Message Action graph and detect loops.
- Add `publishMessages` if the widget emits messages.
- When consuming messages, validate message payload shape before executing side effects.
- Provide optional setting UI through `getSettingComponentUri()`/`settingUri` when configurable.
- Use setting UI to persist only serializable options; never persist runtime instances, handles, or view objects.
- Add `_action_<actionName>_label` translation.
- Keep action config version-safe if persisted.
- When action config schema changes, keep backward compatibility with defaults/migration guards.
- Keep runtime logic idempotent where possible to avoid duplicate execution on repeated message events.

## Declaring Effect Messages And Loop Behavior

- Treat `getEffectMessages` as a static declaration of possible effects, not as runtime execution. It receives action config but no incoming message.
- `getEffectMessages` only declares possible runtime effects for Builder to construct the graph and detect loops statically; it does not publish messages or replace the actual runtime behavior in `onExecute`.
- When building an action list, the framework automatically checks each widget action that implements `getEffectMessages()` and hides it if adding the action would introduce a loop.
- Allow a loop only when it is intentional and every effect in the closed loop targets a widget, explicitly sets `allowLoopWithinWidget: true`, and resolves to exactly the same target widget `uri`. Missing opt-in, a missing or unresolved target widget, a different widget URI, or a non-widget effect keeps the loop reportable.

```ts
import {
  AbstractMessageAction,
  type EffectMessageJson,
  type Message,
  type MessageDescription,
  MessageType
} from 'jimu-core'

interface Config {
  targetWidgetId?: string
}

export default class UpdateExtentAction extends AbstractMessageAction {
  filterMessageDescription (description: MessageDescription): boolean {
    return description.messageType === MessageType.ExtentChange
  }

  filterMessage (message: Message): boolean {
    return message.type === MessageType.ExtentChange
  }

  getEffectMessages (actionConfig?: Config): EffectMessageJson[] {
    return actionConfig?.targetWidgetId
      ? [{
          widgetId: actionConfig.targetWidgetId,
          messageType: MessageType.ExtentChange,
          allowLoopWithinWidget: true
        }]
      : []
  }

  onExecute (message: Message): boolean {
    // Execute the configured runtime effect.
    return true
  }
}
```

## Widget-Managed Message Configurations

- Use widget-managed message configurations when a widget setting creates an implicit Message Action relationship that users do not manage through the standard Message Action setting UI.
- From widget setting, pass the `MessageJson[]` entries to create or update as the third argument of `onSettingChange(widgetJson, outputDataSourcesJson, managedMessageConfigs)`.
- The framework automatically marks these configurations with `manageByWidget: true`; do not maintain that flag separately in widget config.
- Update the corresponding managed configuration whenever the owning widget setting changes its implicit Message Action behavior so the graph represents the current behavior.
- Managed message configurations must still contain stable message/action identities and serializable action config.

## Subscriber-style Message Handling

- Use subscriber-style handling when runtime behavior must react to external widget messages.
- Narrow handling to specific message types and payload shapes; ignore unrelated messages.
- Validate payload before state updates or side effects.
- Keep handlers idempotent to tolerate repeated/duplicated messages.

```ts
import {
  AbstractMessageAction,
  type DataRecordsSelectionChangeMessage,
  type Message,
  type MessageDescription,
  MessageType
} from 'jimu-core'

export default class ZoomToRecordAction extends AbstractMessageAction {
  filterMessageDescription (description: MessageDescription): boolean {
    return description.messageType === MessageType.DataRecordsSelectionChange
  }

  filterMessage (message: Message): boolean {
    return message.type === MessageType.DataRecordsSelectionChange
  }

  async onExecute (message: DataRecordsSelectionChangeMessage, actionConfig?): Promise<boolean> {
    if (!message?.records?.length) return false

    // Runtime side effects guarded by payload checks.
    return true
  }

  getSettingComponentUri (): string {
    return 'setting/zoom-to-record-action-setting'
  }
}
```
