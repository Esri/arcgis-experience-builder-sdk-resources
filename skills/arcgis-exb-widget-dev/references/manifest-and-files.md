# Manifest and Widget Files

## `manifest.json`

`manifest.json` is required for every widget. Without it, the widget is not considered a valid widget package by build/discovery flows.

Use `client/jimu-core/lib/types/manifest.ts` as the source of truth. Search the current repo for nearby examples before adding fields.
For a copy-ready minimal manifest shape, use the skeleton in `../assets/widget-skeleton.md`.

Important fields:

| Field | Use |
|---|---|
| `name` | Unique widget name; must match folder convention. |
| `label` | Default widget label; align with `_widgetLabel` translation. |
| `version` | Widget semver. |
| `exbVersion` | Supported Experience Builder framework version. Keep this synchronized with the current framework version in `client/package.json` (for this repo: `exb-client` version). |
| `author`, `description`, `copyright`, `license` | Widget metadata. |
| `notSupportAGOL`, `notAllowAdd` | Availability constraints. |
| `properties` | Capability declarations. |
| `extensions` | Extension point declarations. |
| `publishMessages` | Message types/descriptions emitted by runtime. |
| `messageActions` | Message actions provided by widget. |
| `dataActions` | Data actions provided by widget. |
| `excludeDataActions` | Data actions hidden from setting/runtime. |
| `translatedLocales` | Locales shipped by widget. Must be complete and aligned with delivered translation files; missing locales may not enter translation workflow. |
| `dependency`, `settingDependency` | Runtime/setting dependency declarations; accepts string or string array. `jimu-arcgis` loads map SDK support. |
| `defaultSize` | Initial widget size. |
| `widgetType` | Widget type when required by framework behavior. |
| `layouts` | Embedded layout definitions when `hasEmbeddedLayout` is enabled. |
| `urlParameters` | URL params supported by widget. |
| `requireLicense` | Required license marker. |

Important `properties`:

| Property | Use |
|---|---|
| `hasMainClass` | Auto-generated from `runtime/widget.tsx`; normally do not set manually. |
| `hasConfig` | Auto-generated from `config.json`; normally do not set manually. |
| `hasSettingPage` | Auto-generated from setting page; normally do not set manually. |
| `hasBuilderSupportModule` | Auto-generated from `runtime/builder-support.tsx`; normally do not set manually. |
| `hasConfigInSettingPage` | Set false when config exists but setting page should not load. |
| `supportInlineEditing` | Enables inline edit affordance. |
| `supportRepeat` | Allows widget in repeat contexts. |
| `supportAutoSize` | Controls auto width/height support. |
| `forbidOneByOneEffect` | Disables one-by-one animation for layout widget cases. |
| `hasEmbeddedLayout`, `lockChildren`, `passDataSourceToChildren` | Embedded layout behavior. |
| `canCreateMapView` | Widget can create/provide map views and appear in map selector flows. |
| `canCrossLayoutBoundary` | Allows overflow across layout boundary. |
| `canConsumeDataAction` | Widget can provide data sets to data actions. |
| `canProvideRepeatDataSource` | Widget can provide repeat data source. |
| `canGenerateMultipleOutputDataSources` | Widget can generate multiple output data sources. |

## `config.json`

- Store default widget config only.
- Keep it minimal, serializable, and compatible with `src/config.ts`.
- Do not store runtime-only objects such as views, layers, records, SDK class instances, DOM nodes, or promises.
- For data source/map bindings, store IDs and `UseDataSource`-style config, not live objects.

## `src/config.ts`

- Export interfaces for persisted config.
- Use immutable-aware types where nearby widgets use them.
- Keep runtime and setting imports type-safe.
- Add config migration/version handling if existing widget patterns require it.

## `src/version-manager.ts`

- Add or update this file when config schema changes may affect saved apps.
- Use `BaseVersionManager` with incremental versions and deterministic upgraders.
- Keep upgraders backward-safe: only normalize missing/renamed fields, do not introduce runtime-only values.
- Keep each upgrader focused and testable; avoid mixing unrelated schema changes in one upgrader.
- Wire runtime usage (`static versionManager = versionManager` or equivalent nearby pattern) when migration is required.

## `src/tools/**` (extension implementations)

- Implement files referenced by `manifest.extensions[].uri` under this folder.
- Keep operation classes small and point-specific (`APP_CONFIG_OPERATIONS`, `BUILDER_OPERATIONS`, etc.).
- Treat extension hooks as lifecycle integrations: idempotent, bounded scope, and safe error handling.
- Use deterministic outputs for builder operations (for example translation key extraction).
- Keep cleanup operations limited to widget-owned resources when widget/config is removed.

## `src/runtime/widget.tsx`

- Use functional React components with hooks unless modifying legacy class code.
- Type props with `AllWidgetProps<Config>` or the existing widget prop pattern.
- Never import `jimu-for-builder` from runtime files. Move builder-only logic to `src/setting/**`, `runtime/builder-support.tsx`, or another builder-only surface.
- Prefer runtime UI from `jimu-ui` or `jimu-ui/basic/*` or `jimu-ui/advanced/*`; use Calcite or ArcGIS web components only when required by the scenario. Do not import setting components or builder-only UI into runtime.
- Use `DataSourceComponent` for data-source lifecycle where appropriate.
- Use `JimuMapViewComponent`/`JimuLayerViewComponent` for map/layer view lifecycle where appropriate.
- Keep SDK resources in refs/state with cleanup on unmount.
- Render clear empty, loading, error, no-data, and configured states.

## `src/setting/setting.tsx`

- Use `jimu-ui/advanced/setting-components` for setting panels.
- Use data/map selectors rather than freeform IDs.
- Update config immutably via the existing `onSettingChange` pattern.
- Disable invalid controls and explain why through labels/help text.
- Keep builder-only imports out of runtime unless the file is builder-only.

## `icon.svg`

- Use a compact, accessible SVG consistent with nearby widgets.
- Avoid embedded raster images and external references.
- Keep colors compatible with theme or use current color where possible.

## `README.md`

Document:

- Widget purpose.
- Required data sources, map widget, layers, permissions, licenses, and dependencies.
- Setting options and defaults.
- Runtime behavior and limitations.
- Data actions/message actions if exposed.
- Known accessibility or localization notes when relevant.
