# Config AI Actions

Config AI Actions are a type of action that are used to configure the widget by AI.

To implement Config AI Actions in your widget, follow these steps:
1. **Define Config AI Actions**: In your widget's manifest file, like this:
   ```json
   {
     "configAIActions": {
        "uri": "setting/config-ai-actions/your-config-actions",
        "description": "You should provide a description of what the config AI actions do.",
        "actions": [
          {
            "name": "configActionName",
            "type": "CONFIG_WIDGET",
            "description": "This config action does something specific."
          }
        ]
     }
   }
   ```

  A widget can have multiple config AI actions. Supported types are `CONFIG_WIDGET`, `SELECT_MAP`, `SELECT_DATA_SOURCE`, `SELECT_UTILITY`, `CONFIG_MESSAGE_ACTION`, and `CONFIG_DATA_ACTION`. Use `CONFIG_WIDGET` for widget-specific configuration; use the corresponding selection types for dependencies and the dedicated action configuration types for message or data actions.

2. **Implement Config AI Actions**: You need first to identify whether the widget needs to use data source, utility or map widget. If yes, you need to implement the corresponding config AI action. Then, you need to implement the `CONFIG_WIDGET` config AI action. To implement the config AI action, you need to read the `config.ts` or `config.json` file in the widget folder if you find the `config.ts` file to understand the widget's configuration. Then, you need to read the `setting.tsx` file in the widget folder to understand how the widget's configuration is set. Finally, you need to implement the config AI action to configure the widget. The most important part is to understand how the widget's configuration and create the correct schema for the config AI action.

3. In most cases, you don't need to implement the `convertToAIConfig` function in the action file. It applies to `CONFIG_WIDGET` only. Use it if that action's schema differs from the widget's configuration schema; do not use it to configure data actions.

4. In the action handler file, you can define an optional `description` function to provide more details about the config AI action group. The signature of the `description` function is defined by `AIActionGroupDescriptionFunction` in the `jimu-core` package.

## Data Action Configuration

Use `CONFIG_DATA_ACTION` when a widget or the framework provides AI configuration for a named data action. This configures settings; it does not execute the runtime data action.

### Declare and Export

Add the handler to the providing widget's existing `configAIActions.actions` list:

```json
{
  "name": "configShowOnMapDataAction",
  "label": "Show on map",
  "type": "CONFIG_DATA_ACTION",
  "description": "Configure showOnMap on the consuming widget identified by the widgetId input: custom or layer-defined symbols and operational-layer settings."
}
```

- Derive the schema and update behavior from the data action's `settingUri` implementation and existing persisted types, not the providing widget's main config.
- Keep implementations under builder-only setting code. For example, put the handler and schema in `src/setting/ai-actions/data-action-config-ai-action.ts` and re-export the handler from the module named by `configAIActions.uri`.
- Attach the Zod schema to the exported function's `.schema` property. The manifest action name must match that export.
- Framework handlers register an `AIAction` of the same type with `AIActionManager` instead of a widget manifest.

### Consumer and Provider Contract

- The handler follows `AIActionFunction`: `(providerWidgetId, param, options) => Promise<AIActionResult>`. Its first argument is the widget that provides the action; framework actions have no providing widget ID.
- Explicitly include `consumerWidgetId: zod.string()` in the handler schema to identify the consuming widget whose `dataActions` will change.
- A consumer can have several actions, keyed by action name. Save shared settings under `widgets[consumerWidgetId].dataActions[actionName].config`.
- Use `getAppConfigAction().editWidgetDataActionConfig()` to edit the data action config.
- Missing `enabled` means true at both the named-action and provider-entry levels. Do not enable a disabled action as a side effect of editing config. Initialize missing config with the data action's existing setting defaults, not invented defaults.
- Use the existing `NodeInterrupt` / human-input contract if settings require interactive input; the widget agent resumes the pending handler and remaining calls.


### Existing Example and Checks

- See the Map widget's [Show on map handler](../../../../../client/extensions/widgets/arcgis/arcgis-map/src/setting/ai-actions/data-action-config-ai-action.ts) and its re-export in [config-ai-actions.ts](../../../../../client/extensions/widgets/arcgis/arcgis-map/src/setting/ai-actions/config-ai-actions.ts).

## Action context
In the action handler file, you can define an optional `getContext` function to provide context information for the config AI actions.

## Action results
- If the action succeeds, only the `status` property is required in the action result. The `description` property is optional because the `purpose` property is good enough to describe the action execution.
- If the action fails, the `status` and `description` properties are required in the action result. The `description` property should provide a clear explanation of the failure reason.
