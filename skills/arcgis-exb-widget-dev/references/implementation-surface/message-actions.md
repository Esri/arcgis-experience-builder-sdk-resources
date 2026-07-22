# Implementation Surface: Message Actions

## Message Actions

- Declare the published message in `manifest.publishMessages`
- Declare provided actions in `manifest.messageActions`.
- Keep manifest declaration (`name`, `uri`, labels, and optional `settingUri`) aligned with implementation exports.
- Add action implementation using `AbstractMessageAction` patterns.
- Implement `filterMessageDescription` narrowly so actions only appear for compatible message types and data shapes.
- Add `publishMessages` if the widget emits messages.
- When consuming messages, validate message payload shape before executing side effects.
- Provide optional setting UI through `getSettingComponentUri()`/`settingUri` when configurable.
- Use setting UI to persist only serializable options; never persist runtime instances, handles, or view objects.
- Add `_action_<actionName>_label` translation.
- Keep action config version-safe if persisted.
- When action config schema changes, keep backward compatibility with defaults/migration guards.
- Keep runtime logic idempotent where possible to avoid duplicate execution on repeated message events.

## Subscriber-style Message Handling

- Use subscriber-style handling when runtime behavior must react to external widget messages.
- Narrow handling to specific message types and payload shapes; ignore unrelated messages.
- Validate payload before state updates or side effects.
- Keep handlers idempotent to tolerate repeated/duplicated messages.

```ts
import { AbstractMessageAction, type MessageDescription, type MessageType } from 'jimu-core'

export default class ZoomToRecordAction extends AbstractMessageAction {
	filterMessageDescription (descs: MessageDescription[]): MessageDescription[] {
		return descs.filter(d => d.messageType === MessageType.DataRecordsSelectionChange)
	}

	async onExecute (message, actionConfig?): Promise<boolean> {
		if (!message?.records?.length) return false

		// runtime side effects guarded by payload checks
		return true
	}

	getSettingComponentUri (): string {
		return 'setting/zoom-to-record-action-setting'
	}
}
```
