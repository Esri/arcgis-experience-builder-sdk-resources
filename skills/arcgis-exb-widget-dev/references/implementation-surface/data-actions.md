# Implementation Surface: Data Actions

## Data Actions

- Declare provided actions in `manifest.dataActions`.
- Keep manifest declaration (`name`, `uri`, label keys, icon, optional `settingUri`) aligned with implementation exports.
- Add action implementation under `src/**` using `AbstractDataAction` from `jimu-core` patterns.
- Provide `name`, `uri`, `label`, `icon`, and optional `settingUri`.
- Add `_action_<actionName>_label` translation.
- Implement `isSupported` narrowly and `onExecute` with explicit success/failure behavior.
- In `isSupported`, validate record-set shape and data level (record vs records vs data source) before exposing the action.
- In `onExecute`, validate inputs again and return deterministic success/failure (`true`/`false`) with clear failure handling.
- Use correct `DataRecordSet.type` and data level semantics.
- Persist only serializable action setting; never store runtime instances, handles, or map/layer views.
- Keep action config schema backward-compatible when persisted; add migration-safe defaults when fields evolve.
- Keep execution idempotent where possible to reduce duplicate side effects from repeated invocations.

```ts
import { AbstractDataAction, type DataRecordSet } from 'jimu-core'

export default class ExportSelectedAction extends AbstractDataAction {
	async isSupported (dataSets: DataRecordSet[]): Promise<boolean> {
		const ds = dataSets?.[0]
		return !!ds && ds.type === 'selected' && (ds.records?.length ?? 0) > 0
	}

	async onExecute (dataSets: DataRecordSet[], actionConfig?): Promise<boolean> {
		const ds = dataSets?.[0]
		if (!ds?.records?.length) return false

		// guarded action logic
		return true
	}
}
```

- If the data action needs a UI, use the FloatingPanel component and load jimu-ui first.

```ts
import { React, AbstractDataAction, type DataRecordSet, loadModule } from 'jimu-core'

export default class ExportSelectedAction extends AbstractDataAction {
	async onExecute (dataSets: DataRecordSet[], actionConfig?): Promise<any> {
		await this.loadModules()
		const { FloatingPanel } = await loadModule('jimu-ui')
		return Promise.resolve(
			<FloatingPanel headerTitle='Demo' open defaultSize={{ width: 320, height: 200 }}>
				Demo content
			</FloatingPanel>
		)
	}
}
```