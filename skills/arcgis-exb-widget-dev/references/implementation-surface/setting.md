# Implementation Surface: Setting

## Setting Surface

- This surface is for builder-time configuration UI and app-config updates.
- Keep setting code in builder-only files such as `src/setting/setting.tsx` and setting helpers used only by builder flows.
- Runtime code (`src/runtime/**`, data/message actions, end-user execution paths) must not import builder-only packages.

## Builder Dependencies

- Use `jimu-for-builder` only in setting/builder code paths.
- Keep builder imports at setting entry files; do not leak `jimu-for-builder` through shared modules used by runtime.
- If logic is shared between runtime and setting, extract framework-agnostic utilities and keep builder wiring in setting files.

## Setting UI Patterns

- Build setting UI with established ExB setting patterns and nearby widget conventions.
- In `src/setting/**`, components from `jimu-ui`, `jimu-ui/basic/*`, and `jimu-ui/advanced/*` are all allowed.
- Keep setting state minimal and derived from widget config where possible.
- When setting-side logic needs runtime/app snapshot state, read from `appStateInBuilder` and avoid direct reads from runtime-only state branches.
- Validate user input before writing config and provide clear empty/invalid states in setting panels.

## Selectors in Setting

- Use `MapWidgetSelector` and `DataSourceSelector` for binding maps/data sources in setting UI.
- Prefer selector-driven config over free-form ID input to reduce invalid configurations.
- Keep selector callbacks immutable and preserve untouched config fields.
- Validate selector outputs before persisting config (single vs multiple, required vs optional).
- Reflect selector dependencies in setting UI (disable/clear dependent options when source changes).
- When selector choice affects runtime behavior, keep setting labels/help text explicit about impact.

### DataSourceSelector

Import from `jimu-ui/advanced/data-source-selector`; data source types come from `jimu-core`. The selector reads/writes `useDataSources` on the widget json — persist it via `onSettingChange`, never mutate props. The runtime side then consumes `props.useDataSources` (see `data-sources.md`).

```tsx
import { React, Immutable, DataSourceTypes, type UseDataSource, type DataSource, type IMFieldSchema } from 'jimu-core'
import { BaseWidgetSetting } from 'jimu-for-builder'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'

export default class Setting extends BaseWidgetSetting {
	supportedTypes = Immutable([DataSourceTypes.FeatureLayer])

	onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
		this.props.onSettingChange({ id: this.props.id, useDataSourcesEnabled })
	}

	onDataSourceChange = (useDataSources: UseDataSource[]) => {
		this.props.onSettingChange({ id: this.props.id, useDataSources })
	}

	// FieldSelector persists the widget's used fields into useDataSources[0].fields.
	// This is what lets the runtime data source auto-load those fields.
	onFieldSelected = (fields: IMFieldSchema[], ds: DataSource) => {
		this.props.onSettingChange({
			id: this.props.id,
			useDataSources: [{ ...this.props.useDataSources[0], fields: fields.map(f => f.jimuName) }]
		})
	}

	render () {
		return (
			<div className="p-2">
				<DataSourceSelector
					types={this.supportedTypes}
					useDataSources={this.props.useDataSources}
					useDataSourcesEnabled={this.props.useDataSourcesEnabled}
					onToggleUseDataEnabled={this.onToggleUseDataEnabled}
					onChange={this.onDataSourceChange}
					widgetId={this.props.id}
				/>
				{this.props.useDataSources?.length > 0 && (
					<FieldSelector
						useDataSources={this.props.useDataSources}
						onChange={this.onFieldSelected}
						selectedFields={this.props.useDataSources[0].fields || Immutable([])}
					/>
				)}
			</div>
		)
	}
}
```

Key props:

- `types` — allowed `DataSourceTypes` (immutable array), e.g. `Immutable([DataSourceTypes.FeatureLayer])`. Restricts what the user can pick.
- `widgetId` — required; scopes selection to this widget.
- `useDataSources` / `onChange(useDataSources: UseDataSource[])` — current value and setter; write the result straight into config.
- `useDataSourcesEnabled` + `onToggleUseDataEnabled` — render the built-in on/off switch. Use `mustUseDataSource` instead when a data source is mandatory (no toggle shown).
- `isMultiple` — allow selecting multiple data source items; `isMultipleDataView` — allow multiple data views per item. Default is single/single. Validate the count before persisting.
- `hideDataView`, `closeDataSourceListOnChange`, `disableSelection`/`disableRemove` — refine list behavior when needed.

Pair with `FieldSelector` to let users pick fields; persisting them into `useDataSources[0].fields` (jimu field names) is what enables runtime field auto-loading described in `data-sources.md`.

## Config Update Rules

- Update config through builder action/helper patterns; do not mutate config objects in place.
- Persist only serializable config values (IDs, options, flags, query params), never runtime instances or handles.
- When changing config schema, preserve backward compatibility and add migration-safe defaults.

## i18n and Strings

- Setting labels and messages must use translation keys and default strings from `src/setting/translations/default.ts`.

## Testing

- Test setting callbacks that update config, validation branches, and default-value initialization.
