# Implementation Surface: Test

## Test

- Treat `jimu-for-test` as the default test surface for Experience Builder tests and use it with Jest and `@testing-library/react`.
- `jimu-for-test` provides widget/setting wrappers, render helpers, store initialization/update helpers, mocks, mock data, mocked ArcGIS JS API helpers, custom queries, and test utilities.
- Use ExB wrapper + render helpers for widget tests, and use context render helpers for runtime/setting component tests:

```ts
import { widgetRender, wrapWidget } from 'jimu-for-test'
import _Widget from '../src/runtime/widget'

const render = widgetRender()
const Widget = wrapWidget(_Widget, { config: {} })
render(<Widget />)
```

- Keep tests focused on behavior contracts (what users/config/events observe), not private implementation details.
- Prefer user-centric queries (`getByRole`, `getByLabelText`, visible text) over brittle selectors.
- Test runtime and setting surfaces separately and assert their integration through config shape and callbacks.
- For setting tests, verify `onSettingChange` payloads are immutable and preserve untouched config fields.
- For runtime tests, cover configured vs unconfigured states, loading/error/empty branches, and action enable/disable behavior.
- For stateful cases, initialize and mutate app state with `initStore`, `initExtensions`, and `updateStore` instead of manually crafting incomplete mocks.
- Mock map/data/action boundaries and ArcGIS dependencies; do not load real services or perform network I/O in unit tests.
- For ArcGIS web component widgets, mock component loader (`loadArcGISMapComponents`), web component events (for example `arcgisReady`), and `reactiveUtils` watchers.
- Prefer `mockData`, `mockTheme`, and related built-in helpers before creating custom mocks.
- Reset mocks, store state, and module singletons between tests to avoid cross-case contamination.
- Use fake timers only when required, and always restore real timers in cleanup.
- Validate behavior, not only rendering: cover config-to-runtime behavior, setting UI callbacks, empty/error states, and a11y-visible labels.
- Keep tests deterministic: avoid time-dependent assertions, random values, and cross-test shared state.

```ts
import { withStoreThemeIntlRender } from 'jimu-for-test'
import { screen, waitFor } from '@testing-library/react'

const render = withStoreThemeIntlRender()

it('calls onSettingChange with immutable payload', async () => {
	const onSettingChange = jest.fn()
	render(<Setting id='w1' config={config} onSettingChange={onSettingChange} />)

	// user interaction...

	await waitFor(() => expect(onSettingChange).toHaveBeenCalled())
	const payload = onSettingChange.mock.calls[0][0]
	expect(payload.id).toBe('w1')
	expect(payload.config).not.toBe(config)
})
```
