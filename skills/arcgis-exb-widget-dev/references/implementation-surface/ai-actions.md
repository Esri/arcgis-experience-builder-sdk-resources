# AI Actions

AI Actions are a type of action that can be triggered by AI. They allow widgets to respond to AI-generated events or commands, enabling dynamic and intelligent behavior within the application.

To implement AI Actions in your widget, follow these steps:
1. **Define AI Actions**: In your widget's manifest file, like this:
   ```json
   {
     "aiActions": {
      "uri": "runtime/ai-actions/your-actions",
      "description": "This is a description of the AI actions provided by this widget.",
      "actions": [
        {
          "name": "actionName",
          "undoName": "undoActionName",
          "description": "This action does something specific."
        }
      ]
     }
   }
   ```

   Note:
   - You don't need to list the action names in the actions.description property.
   - Omit `isReadOnly` and `supportRunInHidden` unless the action needs their non-default behavior.
   - Set `isReadOnly: true` for actions that retrieve information without modifying configuration or runtime state; these actions are excluded from the assistant's displayed executed-actions list.
   - Set `supportRunInHidden: true` only when the action can execute without making the widget visible or active. Otherwise omit it; the agent attempts to make the widget visible before execution.
2. **Implement Action** Handlers: Create functions in your widget's code to handle the defined actions. In the file `runtime/ai-actions/your-actions.js`, implement the logic for each action:
   ```javascript
   export function actionName(context) {
     // Your action logic here
   }

   export function undoActionName(context) {
     // Logic to undo the action
   }
   ```
   The signature of the action handler function is defined by `AIActionFunction` in the `jimu-core` package. The signature of the undo action handler function is defined by `AIUndoActionFunction` in the `jimu-core` package. The undo action handler function is optional.

   The implementation of the action handler function includes implementation of the action logic and define the schema of the action. You should always use the following code to define the schema of the action:
   ```typescript
   import { zod as z } from 'jimu-ai'

   const schema = z.object({
     // Define the schema of the action here
   })
   ```
3. In the action handler file, you can define an optional `description` function to provide more details about the action group. The signature of the `description` function is defined by `AIActionGroupDescriptionFunction` in the `jimu-core` package.

## Dynamic actions
If your widget's AI Actions are dynamic, you can define an optional `getActions` function in the action handler file to provide a list of actions. The signature of the `getActions` function is defined by `WidgetGetActionsFunction` in the `jimu-core` package.

For a fixed action list, prefer named handler exports and manifest registration instead of `getActions`. Keep descriptions and capability flags in the manifest.

## Read-only information actions

Optionally expose `getInfo` to provide widget-specific runtime information needed to answer questions or guide subsequent actions. Follow the normal async AI action and schema contracts. Below are guidelines for implementing `getInfo`.

- Set `isReadOnly: true`.
- Set `supportRunInHidden: true` when visibility or activation is not needed.
- `description` explains the information and clarifies that it is read-only.
- Update the action group description to reflect the addition of `getInfo`.
- Include observable runtime information:
  - Presentation: open panels, viewpoint, theme/language, or scene effects.
  - Interaction: active tool or currently selected widget-owned graphics.
  - Operations: playback/flying state or current speed.
  - Results: measurements, solved routes, or available generated outputs.
  - Readiness: widget initialization, runtime constraints, or errors.
  These are examples, not required fields. Read the actual state and effects, including changes made both through `AIAction` and the UI. Pick relevant information that is helpful for the AI to understand the widget's current state.
- Configuration, settings, and data-source information are handled by other modules and are outside the scope of `getInfo`.
- Ensure the action only reads information without modifying runtime state.
- Return a concise widget-specific string (plain text or JSON string) in `OutputType.MESSAGE`.

## Human input
If your widget's AI Actions require human input, construct a `UiInterrupt` and throw it with `new NodeInterrupt(interrupt)`. Its `render.name`, `render.uri`, and `render.params` must identify a registered HumanInput. After the component calls `onResume`, the action handler is called again with the resulting `HITLResponse`.

Use the [AI renderers and HumanInputs reference](./human-inputs.md) to implement the input component and manifest capability. HITL UI uses the `HumanInput` contract.

## Context
You can define an optional `getContext` function in the action handler file to provide context information for the AI Actions.

The framework injects the result of `getContext(widgetId)` as `actionGroupContext`
before selecting actions; unlike `getInfo`, it is not a callable action.

## Action results
- If the action succeeds, only the `status` property is required in the action result. The `description` property is optional because the `purpose` property is good enough to describe the action execution.
- If the action fails, the `status` and `description` properties are required in the action result. The `description` property should provide a clear explanation of the failure reason.
