# Implementation Surface: Data Sources

Runtime guidance for consuming data sources inside a widget. For declaring
data sources in settings/manifest (selectors, `useDataSources`,
`canGenerateMultipleOutputDataSources`, ...) see `setting.md` and
`manifest-and-files.md`.

Types and components below are imported from `jimu-core`:

```ts
import {
  DataSourceComponent, DataSourceManager, DataSourceStatus,
  type DataSource, type DataRecord, type QueryParams, type IMDataSourceInfo,
  type FeatureLayerDataSource, type QueriableDataSource
} from 'jimu-core'
```

## Principles

- Query records through the data source instance, never through a raw service URL. Use framework data source types/selectors when a configured data source is expected.
- Persist only identifiers and query/config options in widget config; never persist runtime `DataSource` instances. Resolve live instances at runtime.
- When a widget needs specific fields, store those fields in `widgetJson.useDataSources` so the data source can auto-load them.
- If widget logic needs an ArcGIS Maps SDK for JavaScript layer (JS API layer), create one explicitly with `ds.createJSAPILayerByDataSource()` — do not reuse the instance's internal `layer` directly — and handle the failure path (it returns `undefined` unless `throwError` is set).
- Keep record-level semantics explicit in code paths:
	- selected records for cross-widget/user selection
	- current record for focused detail panels
	- loaded records for the current query page/result
	- full data source operations for global actions
- Handle unloaded, loading, empty, and permission-denied states explicitly. Handle query errors and aborted requests explicitly — do not treat them as empty data.
- Scope queries with clear constraints (fields, where, page size, sort); avoid unbounded fetches.
- On data source changes, clear stale local state derived from the previous data source.

## Getting an instance

- Preferred: `DataSourceComponent` — it creates/loads the data source and hands you the live instance in a render callback. Use for most widgets.
- Imperative access when a component callback is insufficient (e.g. inside an event handler, or coordinating several data sources):

```ts
const dsManager = DataSourceManager.getInstance()
const ds = dsManager.getDataSource(dataSourceId) as QueriableDataSource // may be undefined if not created yet
// or create on demand:
const ds = await dsManager.createDataSourceByUseDataSource(useDataSource)
```

- A selected feature service / map layer may be a **data source set** (has sublayers/children). Check `ds.isDataSourceSet()` and use `ds.childDataSourcesReady()` / `ds.getChildDataSources()` before querying; `props.useDataSources[0]` on a set does not point at record data directly.

## Two consumption paths

Choose based on whether the widget loads records itself:

1. **Widget loads and renders records**: use `DataSourceComponent` with `onDataSourceInfoChange`. Read records from the instance.
2. **Widget does not load records but needs a JS API layer** (customizes/sync with a map): use `onQueryRequired` to react to query-param changes and `onSelectionChange` to react to selection, then apply changes to a layer you created via `createJSAPILayerByDataSource()`. Do **not** call `getRecords()` in this path.

## DataSourceComponent

- Pass `useDataSource`, `widgetId`, and optional `query`; read `ds` and `info` in the render callback (`info` is an immutable `IMDataSourceInfo`).
- Status fields on `info` are `DataSourceStatus` **enums**, not plain strings — compare against the enum, not string literals like `'Loading'` (the enum value is `'LOADING'`, so a literal comparison silently never matches):
	- `info.instanceStatus` — create status (`NotCreated`, `Created`, ...)
	- `info.status` — load status (`Unloaded`, `Loading`, `Loaded`, `LoadError`)
	- `info.countStatus` — count load status
- Read loaded records from `ds.getRecords()`, selected records from `ds.getSelectedRecords()`, a single record from `ds.getRecordById(id)`.
- Handle `onCreateDataSourceFailed` for creation errors (permissions, removed service).

```tsx
<DataSourceComponent
	useDataSource={props.useDataSources?.[0]}
	widgetId={props.id}
	query={{ where: '1=1', pageSize: 50, outFields: ['*'] }}
	onDataSourceInfoChange={(info, preInfo) => {
		// react to status / query / records / selection changes needing side effects
	}}
	onCreateDataSourceFailed={(err) => { /* surface error state */ }}
>
	{(ds: DataSource, info: IMDataSourceInfo) => {
		if (!ds || info?.instanceStatus === DataSourceStatus.NotCreated) return <Loading />
		if (info?.status === DataSourceStatus.Loading) return <Loading />
		if (info?.status === DataSourceStatus.LoadError) return <ErrorPanel />

		const loaded = ds.getRecords()
		const selected = ds.getSelectedRecords()
		if (!loaded?.length) return <EmptyState />
		return <RecordList loadedRecords={loaded} selectedRecords={selected} />
	}}
</DataSourceComponent>
```

## Reading a record

`getRecords()` / `getSelectedRecords()` return `DataRecord[]`:

- `record.getId()` — record id.
- `record.getFieldValue(jimuFieldName)` — one field value (use the jimu field name, not the raw service field name).
- `record.getData()` — all attributes as a plain object.
- `record.getDataSource()` — the owning data source.

## Selection and write-back

- `ds.selectRecordsByIds(ids, records?)` — mark records selected (drives `info.selectedIds`, highlighting).
- `ds.clearSelection()` — clear selection.
- `ds.getSelectedRecordIds()` — current selected ids.
- To only highlight selection across widgets, watch `info.selectedIds` rather than re-querying.

## Query vs load, `outFields`, and used fields

- `ds.load(query, options?)` — loads and caches the current page onto the instance (what `DataSourceComponent` uses). Merges config used fields + runtime `outFields`.
- `ds.query(query, options?)` — one-off runtime query, returns `QueryResult`; does not mutate the instance. Set required `outFields` explicitly for that path.
- `ds.queryById(id, fields?)`, `ds.loadCount(query)`, `ds.queryCount(query)`, `ds.loadAll(query, signal?, progress?)` for the remaining cases.
- `QueryParams` common fields: `where`, `outFields` (`['*']` for all), `page` (1-based), `pageSize`, `orderByFields` (e.g. `['POP DESC']`), `sqlExpression`, `returnGeometry`.

Used-fields persistence:

- If the widget reads data through a data source, persist configured fields in `widgetJson.useDataSources`. `load` auto-merges them; `query` does not.
- Sync-with-map only: store `widgetJson.useMapWidgetIds`, not `useDataSources`. Popup fields are available; if you need more, call `ds.load` with runtime `outFields`.
- Connects to map **and** customizes layers: store both.
- Query-and-write-back (e.g. running `query` then `selectRecordsByIds` on a target ds) is the one case where you merge the target's used fields into the query:
	1. collect original runtime `outFields`
	2. add target used fields via `ds.getAllUsedFields()`
	3. dedupe, run `query` with merged `outFields`
	4. write records back to the target data source
- Otherwise (plain `load`, or `query` without write-back) do not pull in other widgets' used fields.
- With client-side query enabled, missing fields may trigger map-side field loading. Pass `notAddFieldsToClient: true` in query options to prevent pushing extra fields to the map client.

## Output data source

- Categories:
	- server-side output data source - has service URL
	- client-side output from graphics — `ds.setSourceFeatures(features)`
	- client-side output from records — `ds.setSourceRecords(records)`
- Common APIs: `updateQueryParams`, `load`, `setSourceRecords`, `setSourceFeatures`.
- Status is a small state machine on `info.status` / `info.countStatus` (`DataSourceStatus`):
	- default is `NotReady`
	- keep `NotReady` until the output is query-ready (downstream widgets can read it)
	- client-side output: switch to `Unloaded` only after source data is set (`setSourceRecords`/`setSourceFeatures`)
	- server-side output: switch to `Unloaded` after required query params/source conditions are ready
	- when ready, set both `status` and `countStatus` to `Unloaded` to publish
	- if a dependency becomes invalid (origin data source / utility / map removed), set back to `NotReady`

```ts
const outputDs = props.outputDataSources?.[0] &&
	DataSourceManager.getInstance().getDataSource(props.outputDataSources[0])

// publish ready state after source data is set
outputDs.setSourceRecords(records)
outputDs.setStatus(DataSourceStatus.Unloaded)
outputDs.setCountStatus(DataSourceStatus.Unloaded)

// on invalidation
outputDs.setStatus(DataSourceStatus.NotReady)
```

- If the output schema is unchanged and there is a single origin data source, the output can reuse the origin's `layerDefinition`, `popupInfo`, and JS API layer.
- If the schema changes (e.g. chart/aggregation output), the widget must provide and maintain the output's `layerDefinition`, `popupInfo`, and JS API layer explicitly.
