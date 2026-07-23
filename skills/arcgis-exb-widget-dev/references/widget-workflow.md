# Widget Workflow

## Workflow Entrances

Choose one entrance, then follow the same shared flow below.

### Entrance A: New Widget

1. Confirm widget name, user goal, target users, required data/map dependencies, builder setting scope, and runtime behavior.
2. Create minimal shape:
   - `manifest.json`
   - `config.json`
   - `icon.svg`
   - `README.md`
   - `src/config.ts`
   - `src/runtime/widget.tsx`
   - `src/setting/setting.tsx` when configurable
   - `src/runtime/translations/default.ts` and `src/setting/translations/default.ts` as needed
   - `tests/**` when behavior is testable

### Entrance B: Existing Widget Modification

1. Read current `manifest.json`, `config.json`, `src/config.ts`, runtime, setting, translations, README, and related tests in one batch.
2. Keep backward compatibility for saved app config.
3. Keep existing public config keys stable unless the task explicitly requires a breaking change.

## Shared Flow

1. Classify change impact (Tier 1/2/3).
2. Ensure `manifest.json` exists and is valid; a widget without manifest is not a valid widget package.
3. Route requirements to the right implementation surfaces.
4. Implement by applicable surfaces in this order: type/config contracts (if needed) -> setting (if needed) -> runtime -> manifest/docs/tests (if needed).
5. Ensure widget-list registration is updated when introducing a new widget that needs explicit category/order placement.
6. Validate in staged order (targeted -> integration -> broader check if needed).

## Source Repo Preflight

Before implementation in this source repo:

1. Confirm whether the widget belongs to `arcgis/common` or an existing product family (`lrs`, `geobim`, `quickcapture`, `survey123`, `ba-infographic`) and follow nearby patterns.
2. If adding runtime/setting/shared translation folders, update `client/extensions/translation-manifest.txt`.

## Setting Pattern For Framework-managed Fields

1. Write `useMapWidgetIds`, `useDataSources`, and related framework-managed fields via top-level `onSettingChange` payload fields.
2. Include `id` in each `onSettingChange` call so builder persists changes.
3. Do not write framework-managed fields via `config.set(...)`.

## Change Impact Tiers

| Tier | Typical scope | Required files |
|---|---|---|
| Tier 1 | Runtime-only behavior/UI | `src/runtime/**` (+ tests) |
| Tier 2 | Configurable behavior | Tier 1 + `src/config.ts`, `config.json`, `src/setting/**`, translations |
| Tier 3 | Capability/integration changes | Tier 2 + `manifest.json`, README, action contracts, message contracts, data source contracts, and map contracts |

Use the smallest tier that satisfies the requirement. Escalate only when necessary.

## Validation Strategy

1. Run focused validation for touched logic first.
2. Run integration checks for changed contracts (manifest/config/action/message/data source) when contracts are affected.
3. After implementation, if the workspace is **Source Code Repository**, run required client checks from `client/`:
   - `npm run tscheck:extensions`
   - `npm run check-translation` (translation folder/locales and framework key conflict check)
4. If the workspace is **Developer Edition**, skip the source-repo-only checks above.
5. If config schema changed for persisted settings, add/update migration with `version-manager.ts` and validate migration behavior with focused tests.
