# Implementation Surface: Test

## Test

- Add a unit test only when it protects meaningful behavior, a public contract, or a credible regression risk, and would fail if that behavior regressed. Do not add tests just to increase coverage or enumerate states.
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
- Test runtime and setting surfaces separately when they have distinct behavior worth protecting; test their integration when it is a meaningful contract or regression risk.
- For stateful cases, initialize and mutate app state with `initStore`, `initExtensions`, and `updateStore` instead of manually crafting incomplete mocks.
- Mock map/data/action boundaries and ArcGIS dependencies; do not load real services or perform network I/O in unit tests.
- For ArcGIS web component widgets, mock component loader (`loadArcGISMapComponents`), web component events (for example `arcgisReady`), and `reactiveUtils` watchers.
- Prefer `mockData`, `mockTheme`, and related built-in helpers before creating custom mocks.
- Reset mocks, store state, and module singletons between tests to avoid cross-case contamination.
- Use fake timers only when required, and always restore real timers in cleanup.
- Prefer assertions on meaningful behavior over rendering-only checks. Choose representative cases based on the behavior and risk; do not mechanically cover every state or branch.
- Keep tests deterministic: avoid time-dependent assertions, random values, and cross-test shared state.
