# Implementation Surface: Extension Points and Operations

## Scope

- Apply this surface when widget `manifest.json` declares `extensions`.
- Typical targets include:
  - `APP_CONFIG_OPERATIONS`
  - `BUILDER_OPERATIONS`
  - context/panel tool extensions
- Keep extension implementation files under `src/tools/**` unless nearby widget uses another established path.

## Manifest Contract

- Every `manifest.extensions[]` item must define stable `name`, `point`, and `uri`.
- Keep `uri` and file path synchronized (for example `uri: "tools/builder-operations"` -> `src/tools/builder-operations.ts`).
- Extension names are API-like identifiers. Do not rename without migration plan for dependent behavior.

## APP_CONFIG_OPERATIONS

- Use for app-config lifecycle hooks (for example cleanup when widget/config is removed).
- Extension must be idempotent and safe if invoked multiple times.
- Never throw blocking errors from cleanup logic; fail soft and preserve app-config flow.
- Do not persist runtime instances in app config while handling operations.

## BUILDER_OPERATIONS

- Use for builder-time operations such as beforeSave hooks, beforePublish hooks, or extracting translation keys from config content.
- Return deterministic results based on current `appConfig`; avoid network I/O.

## Testing Guidance

- Unit-test operation classes directly with mocked `appConfig` and manager APIs.
- For `widgetWillRemove`-like hooks, assert idempotence and no throw behavior.
- For translation-key operations, assert key path stability and coverage for nested config collections.
