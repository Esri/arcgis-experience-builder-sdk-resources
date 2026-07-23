---
name: arcgis-exb-widget-dev
description: 'Use when: creating, modifying, debugging, or testing ArcGIS Experience Builder widgets; covers runtime/setting surfaces, manifest/config/contracts, widget-list registration, translations, accessibility, map view / data source/ message action / data action / extension points, jimu-ui/jimu-for-builder/jimu-for-test, ArcGIS JS SDK and Calcite. For Developer Edition widget work, finish by running `npm run tscheck` from `client/` to validate `your-extensions`.'
argument-hint: 'widget goal, existing widget path, or new widget name'
---

# ArcGIS Experience Builder Widget Development

## When to Use

Use this skill for ArcGIS Experience Builder widget work, including:

- Creating a new widget from requirements.
- Modifying an existing widget runtime or setting UI.
- Wiring `config.json`, `manifest.json`, `icon.svg`, `README.md`, translations, tests, data sources, map views, actions, or builder support.
- Integrating `jimu-ui`, `jimu-icon`, theme tokens, `jimu-arcgis`, ArcGIS Maps SDK for JavaScript modules/components, or Calcite components.

## Required First Steps

1. Determine whether the task is **new widget** or **existing widget modification**.
2. If the product requirements are still underspecified, stop and clarify them before implementation.
3. Locate the widget folder.
	- For existing widget modification, resolve the target from the provided widget path/name.
	- For new widget creation, infer placement from environment/path rules and repository naming convention.
4. Read the existing nearby widgets and framework types before editing. Prefer current repository patterns over assumptions.
5. Decide all surfaces that must change: runtime, setting, config, manifest, translations, tests, README, actions, builder-only support, assets.
6. Confirm which capability and widget communication contracts are affected (manifest/config/message actions/data actions/data sources/map/output data/state/extensions) before editing.

## Requirement Clarification

When requirements are incomplete, use an interactive clarification step before implementation.

Do not start implementation until the minimum product requirements are clear enough to determine the affected capability contracts and implementation surfaces.

Minimum-ready information before implementation:

- task type is clear (new widget or existing widget modification)
- target widget identity is clear (name for new widget, path/name for existing widget)
- core user-facing behavior is clear
- data integration mode is clear (none, data source, map/layer view, or both)
- communication need is clear (none, or specific communication contracts)

Ask only for missing product requirements, and do it conditionally:

- Stop asking once the minimum-ready information is satisfied, then proceed to implementation.

- When asking about business requirements, always provide a small set of likely options and allow freeform input for anything not covered.

- Ask whether this is a new widget or an existing widget modification only if unclear, with options plus freeform input.
- Ask for widget name only if it is not already clear, with name suggestions plus freeform input.
- Ask for widget goal and core user-facing behavior only if the request is still too vague to determine the affected surfaces.
- Ask whether the widget needs a setting panel only if configuration behavior is still unclear.
- Ask first whether the widget needs to connect to app data. If yes, then clarify whether it needs data source integration, map or layer view integration, or both.
- If data source and map integration have already been confirmed, do not ask extra service-interface-detail questions unless implementation is blocked by missing technical constraints.
- Ask about backward compatibility for existing saved config only for existing widget modification, or when the request implies config/schema changes.
- Ask about widget communication only when the user goal suggests cross-widget interaction. In that case, offer likely options such as message actions, data actions, output data, or shared state, and allow freeform input for other communication needs.
- Do not ask the user to choose widget directory placement; infer placement from workspace/environment rules.
- Do not ask the user to choose localization scope by default; follow the repository localization checklist unless the user explicitly requests a different scope.

For example, a request like "build a photo gallery widget" is not specific enough to skip clarification. Before implementation, clarify the missing behavior and integration requirements such as data source usage, configuration surface, map dependence, and communication capabilities.

## Environment Detection And Path Rules

Use this quick rule before editing:

1. If workspace has `client/extensions/widgets/arcgis` and `client/webpack/widget-order.js`, treat it as **Source Code Repository**.
2. Otherwise, treat it as **Developer Edition** and follow:
	https://developers.arcgis.com/experience-builder/guide/getting-started-widget/

Path and registration rules:

- **Source Code Repository**
	- Widget path families in this repo include `client/extensions/widgets/arcgis`, `client/extensions/widgets/common`, and existing product families such as `lrs`, `geobim`, `quickcapture`, `survey123`, and `ba-infographic`.
	- For new widgets, prefer `arcgis` (map-centric) or `common` (non-map-centric) unless requirements clearly belong to an existing product family.
	- For existing widget modification, keep the widget in its current family unless explicitly requested to migrate.
- **Developer Edition**
	- Widget path: typically `client/your-extensions/widgets`
	- If using a custom extension repo (not `your-extensions`), ensure the repo root has a `manifest.json` with type `exb-web-extension-repo`, and include that repo folder in `client/tsconfig.json` `include`
	- After finishing widget development in Developer Edition, run `npm run tscheck` from `client/` to validate `your-extensions`

If target identity is still unclear for existing widget modification, ask for widget name or feature context first, not directory placement.

## Development Workflow

Use [workflow reference](./references/widget-workflow.md) for the end-to-end process.

Use [file and manifest reference](./references/manifest-and-files.md) before creating or changing:

- `manifest.json`
- `config.json`
- `icon.svg`
- `README.md`
- `src/runtime/**`
- `src/setting/**`
- `src/config.ts`
- `src/runtime/translations/**`
- `src/setting/translations/**`
- tests

Use [implementation surfaces reference](./references/implementation-surfaces.md) when the widget uses:

- `jimu-ui`, `jimu-icon`, Emotion, theme tokens (`jimu-theme`)
- data sources and data records
- `JimuMapViewComponent`, `JimuLayerViewComponent`, map/layer view APIs
- widget communication contracts (message actions, data actions, and data-sharing contracts)
- widget/app state communication
- widget state and app actions (`WidgetState`, `appActions`, `getAppStore`) for cross-widget coordination
- runtime execution boundaries (`src/runtime/**`)
- `jimu-for-builder`
- test
- assets and static resources
- URL parameter driven behavior
- translations
- accessibility

Use [widget skeleton reference](./assets/widget-skeleton.md) only as a starting shape. Adapt to nearby widgets and current framework APIs.

## General Engineering Baseline

- Keep changes focused and avoid unrelated refactors.
- Preserve backward compatibility for existing app config unless the task explicitly requires a breaking change.
- Add tests and README updates only when behavior/setup/contracts are affected.

## Core Rules

- `manifest.json` is mandatory for every widget. Missing manifest means the folder is not a valid widget package for build/discovery.
- Treat `manifest.json` as a capability contract. Use manifest fields to express widget capabilities, actions, dependencies, default size, licensing, URL params, layouts, and translated locales instead of hiding those decisions in runtime code.
- Runtime must be resilient to missing optional configuration, unavailable data sources, unloaded map views, and builder/runtime mode differences.
- New widgets must use React functional components (FC) for runtime and setting surfaces; use class components only when modifying existing legacy widgets.
- Runtime code must not import `jimu-for-builder`; keep builder-only APIs in setting, builder support modules, or builder widgets.
- Prefer runtime UI from `jimu-ui` or `jimu-ui/basic/*` or `jimu-ui/advanced/*`; use Calcite or ArcGIS web components when the scenario requires them.
- Setting UI must save selected data sources (and selected fields when used) through Experience Builder setting patterns and expose only valid combinations of options.
- For framework-managed selections (for example `useDataSources`, `useMapWidgetIds`), write them through top-level `onSettingChange` payload fields instead of `config.set(...)`.
- Keep translation keys widget-scoped and non-generic (for example with a widget prefix) to reduce conflict risk with framework/shared keys.
- Keep runtime and setting config types aligned in `src/config.ts`.
- Use `sys` design tokens (`theme.sys.*` or `var(--sys-*)`) in new code, and do not use classic token paths such as `theme.colors`, `theme.sizes`, `theme.borderRadiuses`, `theme.boxShadows`, `theme.typography`, `theme.surfaces`, `theme.body`, `theme.link`, `theme.border`, or CSS vars like `var(--light-*)`/`var(--dark-*)`.
- For JSAPI-heavy widgets, declare `jimu-arcgis` dependency in `manifest.json` and use approved import patterns; for conditional JSAPI usage, prefer dynamic loading via ExB loaders.
- Prefer ExB wrappers and `jimu-ui` design system components first; use Calcite or ArcGIS Maps SDK web components when the scenario requires them.
- In Source Code Repository, place new widgets under `arcgis`/`common` by default, or under an existing product family when requirements clearly belong there. Do not add product widgets under `samples`.
- In Developer Edition, place widgets using the official Developer Edition extension layout from the guide (typically under `client/your-extensions/widgets`).
- Restart the client webpack dev server after installing a new module, adding/removing/renaming widget files/folders, or editing a widget `manifest.json`.
- For inline editing scenarios, declare the related manifest capabilities/extensions (for example `supportInlineEditing`, `hasEmbeddedLayout`, context tool extensions), and keep builder-only code in builder-support modules.
- If widget config schema changes and backward compatibility cannot be safely preserved by runtime/setting fallback logic (for existing saved apps), implement upgrades through `version-manager.ts` (using `WidgetVersionManager`) and assign `Widget.versionManager`.

## Done Criteria

- Widget files are complete and internally consistent.
- `manifest.json` exists and declares all required capabilities and dependencies.
- Runtime and setting UI handle configured and unconfigured states, including reading selected data sources from `props.useDataSources` when data source integration is required.
- In Source Code Repository, new widgets are registered in the widget list source when category/order control is required (otherwise they fall back to Custom group/default ordering).
- When user-visible strings or translation folders change, translations cover those strings, `manifest.translatedLocales` stays complete, and any new translation folder is listed in `translation-manifest.txt`.
- Translation key names avoid generic collisions with framework/shared keys (for example by using widget-prefixed keys).
- In Source Code Repository, post-development checks are run from `client/`: `npm run tscheck:extensions` and `npm run check-translation`.
- In Developer Edition, `npm run tscheck` is part of the finish-of-work validation for `your-extensions` widget development.
- If config schema changed and compatibility cannot be guaranteed by fallback/default handling, VersionManager-based migration behavior via `version-manager.ts` is implemented and validated.
- A11y labels, keyboard behavior, focus, status text, and contrast are addressed.
- Tests or existing validation commands pass for the touched area, including data source selection/query/filter behavior when data contracts are changed.
