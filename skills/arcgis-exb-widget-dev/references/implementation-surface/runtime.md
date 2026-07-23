# Implementation Surface: Runtime

## Runtime Surface

- This surface covers end-user execution logic in `src/runtime/**`.
- Runtime code must remain safe in both builder preview and app runtime.
- Keep runtime responsibilities focused on rendering, interaction, and side effects required by widget behavior.

## Scope Boundaries

- Runtime files must not import `jimu-for-builder` or setting-only modules.
- Runtime UI components must come only from `jimu-ui` or `jimu-ui/basic/*`.
- Do not import setting components from `jimu-ui/advanced/setting-components` into runtime files.
- Keep builder-only wiring in `src/setting/**` or other builder-only surfaces.

## ArcGIS Maps SDK Integration

- Prefer ExB map abstractions when integrating with an ExB map widget.
- For SDK modules, use `loadArcGISJSAPIModules` from `jimu-core` or the existing repo import pattern.
- When using ArcGIS web components, import `arcgis-map-components` explicitly.
- For ArcGIS web components, keep lifecycle explicit: initialize only when host/view is ready, attach listeners/watchers once, and clean up listeners/handles on teardown.
- Avoid duplicating ArcGIS SDK loading; do not import a second incompatible SDK runtime.
- Clean up SDK watchers/handles in `useEffect` cleanup.
- Never use the `__esri` namespace in new or updated code; prefer types from `@arcgis/core` (or existing repo typings).

## Legacy and Modernization Policy

- Existing widgets may still be class components or use legacy i18n/type patterns.
- For bug fixes or small feature updates, follow nearby widget style to minimize regression risk.
- For new files or intentional refactor tasks, use current conventions from this skill (function components, `hooks.useTranslation`, explicit cleanup).
- Avoid mixed-pattern rewrites unless the task explicitly includes migration.

## Calcite Components

- Prefer ExB wrappers/design-system components first.
- Use Calcite web components only when requirement cannot be covered by `jimu-ui`.
- When using Calcite components, import `calcite-components` first.
- Do not import `CalciteButton` separately; use `<calcite-button>` directly.
- Keep Calcite events, controlled values, disabled states, and labels React-compatible.
- Keep visual language consistent with ExB and theme.

```ts
import 'calcite-components'
import 'arcgis-map-components'
```

```tsx
<calcite-button appearance='solid'>Run</calcite-button>
```

## Data and View Safety

- Treat map views, layer views, and data sources as optional until confirmed ready.
- Validate data shape before runtime execution (records, messages, URL params, and config-derived options).
- Render explicit empty/loading/error/no-data states instead of silent failures.

## Placeholder and Empty State

- Use `WidgetPlaceholder` (and nearby ExB patterns) for unconfigured or unavailable widget states.
- Distinguish placeholder, loading, empty-result, and error states; do not collapse them into one generic message.
- Provide actionable placeholder guidance when configuration is required (for example, select data source/map first).
- Keep placeholder and empty-state content localized via translation keys.
- Ensure placeholder/empty/error states are accessible and keyboard-readable.
- Keep transition logic explicit so state changes are predictable and testable.

```tsx
if (!isConfigured) {
	return <WidgetPlaceholder icon={icon} message={translate('configureFirst')} />
}
```

## Runtime Layout Participation

- Follow existing responsive layout patterns and avoid fixed dimensions that break small screens.
- Keep runtime layout RTL-safe and align spacing/sizing with ExB theme tokens.
- Separate layout composition from business logic so layout updates do not change behavior.

## Config and i18n

- Read persisted config from `src/config.ts` contracts; do not mutate config in place.
- Do not persist runtime instances (view objects, handles, promises, DOM nodes) to config/state.
- All user-visible strings must use translation keys and default strings from `src/runtime/translations/default.ts`.

## Testing

- Cover runtime state transitions and side-effect guards.
- Test configured and unconfigured paths.
