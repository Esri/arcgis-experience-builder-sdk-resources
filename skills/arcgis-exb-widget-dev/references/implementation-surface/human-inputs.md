# AI Renderers and HumanInputs

AI renderers and HumanInputs are separate capabilities:

| Capability | Purpose | Manifest field | Base contract | Manager |
|---|---|---|---|---|
| AI renderer | Display agent output | `aiRenderer` | `AIRenderer` | `AIRendererManager` |
| HumanInput | Collect user input during HITL execution | `humanInput` | `HumanInput` | `HumanInputManager` |

A component that calls `onResume` belongs to the HumanInput capability, not the AI renderer capability.

## Widget HumanInput

Declare the capability in `manifest.json`:

```json
{
  "humanInput": {
    "uri": "runtime/human-input",
    "description": "Let the user choose the value required to continue the action."
  }
}
```

The URI points to a schema module under `src/`. Export a `HumanInput` with the Zod schema for the interrupt's `render.params`:

```typescript
import type { HumanInput } from 'jimu-core'
import { zod as z } from 'jimu-ai'

const humanInput: HumanInput = {
  schema: z.object({
    message: z.string()
  })
}

export default humanInput
```

Use `HumanInputComponentProps<T>` for a standalone input component. Widget main classes receive `humanInputParams` and `onResume` through `AllWidgetProps`:

```typescript
import type { AllWidgetProps } from 'jimu-core'

type Props = AllWidgetProps<Config>
```

The framework passes widget parameters through `humanInputParams` and supplies `onResume`. Call `onResume` exactly once when the interaction completes:

```typescript
onResume?.({
  resultDescription: 'Selected the requested item.',
  value: selectedValue
})
```

Every resume payload must include a concise `resultDescription` plus the structured values the interrupted action expects. Guard confirmation, cancellation, close, and unmount paths so they cannot resume the same interrupt more than once.

## Raising an Interrupt

An AI action that needs user input constructs a `UiInterrupt` whose render descriptor matches the HumanInput schema, then throws a `NodeInterrupt`:

```typescript
import { NodeInterrupt } from '@langchain/langgraph/web'
import type { UiInterrupt } from 'jimu-core'

const interrupt: UiInterrupt = {
  id: 'select-item',
  agentId: 'yourAgent',
  render: {
    name: 'your-widget-name',
    uri: 'widgets/common/your-widget/',
    params: {
      message: 'Select an item.'
    }
  }
}

throw new NodeInterrupt(interrupt)
```

On the resumed execution, match the response ID before reading its payload. Treat absent, stale, or mismatched responses as a new interrupt rather than applying them to the wrong action.

## Framework HumanInputs

Framework-owned input components live under `client/jimu-ai/lib/human-inputs`; builder-owned inputs use the corresponding builder package surface. Define them as `HumanInputInfo`, register them with `HumanInputManager`, and keep their names and parameter maps in the HumanInput index. Do not register them with `AIRendererManager`.
