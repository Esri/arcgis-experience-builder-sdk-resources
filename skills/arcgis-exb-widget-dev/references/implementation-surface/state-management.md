# Implementation Surface: State Management

## State Management

- Apply this surface when behavior requires app/widget state coordination across components or widgets.
- For purely local view state that can remain inside one component, keep it local.
- Use local component state first; use app/global state only for cross-widget coordination.
- Widgets can save some state in `widgetsState` by dispatching `appActions.widgetStateChanged` so other widgets can read it.
- Read app state through existing selectors/store helpers and avoid direct deep reads from unknown state branches.
- In runtime widgets, there are two supported patterns to read app state:
  - `Widget.mapExtraStateProps` (connect-style mapping)
  - `ReactRedux.useSelector` (hook-style selection)
- Prefer narrow selectors/mappings and keep selected state serializable (for example locale, IDs, booleans).
- Dispatch state updates through established actions/helpers (for example app actions) instead of mutating store slices.
- Keep state writes minimal and explicit; avoid writing derived values that can be computed from source state.
- In `src/setting/**`, read runtime widget state from `appStateInBuilder` instead of reading runtime-only state branches directly.

```tsx
// pattern 1: runtime mapExtraStateProps
import { React, type AllWidgetProps, type IMState } from 'jimu-core'

interface ExtraProps {
  locale: string
}

export default function Widget (props: AllWidgetProps<any> & ExtraProps) {
  return <div>{props.locale}</div>
}

Widget.mapExtraStateProps = (state: IMState) => ({
  locale: state.appContext.locale
})
```

```tsx
// pattern 2: runtime ReactRedux.useSelector
import { ReactRedux, type IMState } from 'jimu-core'

export default function Widget () {
  const locale = ReactRedux.useSelector((state: IMState) => state.appContext.locale)
  return <div>{locale}</div>
}
```

```tsx
// pattern 3: setting reads runtime state through appStateInBuilder
import { React, type ImmutableObject } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'

interface Config {
  message?: string
}

export default function Setting (props: AllWidgetSettingProps<ImmutableObject<Config>>) {
  const runtimeWidgetState = props.appStateInBuilder?.widgetsState?.[props.id]
  const currentPageId = props.appStateInBuilder?.appRuntimeInfo?.currentPageId

  return (
    <div>
      <div>widgetOpen: {String(runtimeWidgetState?.state === 'OPENED')}</div>
      <div>currentPageId: {currentPageId ?? ''}</div>
    </div>
  )
}
```
