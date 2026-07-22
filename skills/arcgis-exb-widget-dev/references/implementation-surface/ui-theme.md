# Implementation Surface: UI Theme and Styling

## `jimu-ui`, `jimu-icon`, Theme, and Styling

- Prefer `jimu-ui` components for ExB look, behavior, and a11y.
- Treat widgets as React components written in JSX; function components are preferred for new work.
- In runtime, keep UI imports restricted to runtime-safe modules and keep builder-only UI out of runtime paths.
- In widget setting (`src/setting/**`), `jimu-ui`, `jimu-ui/basic/*`, and `jimu-ui/advanced/*` components are allowed.
- Keep runtime and setting imports separated; do not share a UI module that imports builder-only packages.
- Import `jimu-ui` basic components from `jimu-ui`; import advanced components from their specific paths.
- Use `jimu-icon` or `Icon` patterns already present in the repo for icons.
- Prefer `Paper` as widget container for consistent surface/background/text behavior.
- Use `useTheme()` or theme variables from `jimu-core`; avoid hard-coded colors, spacing, radius, and typography values unless explicitly required.
- Do not use classic theme tokens such as `theme.colors`, `theme.sizes`, `theme.borderRadiuses`, `theme.boxShadows`, `theme.typography`, `theme.surfaces`, `theme.body`, `theme.link`, or `theme.border` in new code.
- Prefer `theme.sys.*` semantic tokens (and semantic components) instead of classic token paths.
- Prefer theme tokens for states (hover, active, disabled, danger) instead of hand-crafted hex values.
- Keep runtime and setting theme usage consistent to avoid visual drift.
- Keep custom styles compatible with light/dark and high-contrast modes when applicable.
- Style priority: Emotion CSS-in-JS (`css` prop or `styled`) first, utility classes second, inline style only for tiny dynamic values, external stylesheets when needed by existing widget convention.
- Keep styles scoped to the component/widget surface; avoid global selectors and style leakage.
- Prefer existing ExB spacing and sizing patterns before introducing new layout scales.
- Preserve RTL behavior and responsive layouts.
- Verify layouts at common breakpoints and avoid fixed widths that break small screens.
- If Calcite components are required, import from `calcite-components` first and keep visual language aligned with ExB theme.
- If ArcGIS web components are used, import `arcgis-map-components` explicitly and validate theme token fit.

```ts Import basic and advanced components
import { Button, Paper } from 'jimu-ui' // basic components
import { DatePicker } from 'jimu-ui/basic/date-picker' // advanced components
```

```tsx Prefer Paper as widget container
<Paper variant='flat' shape='none' className='jimu-widget widget-my-widget'>
	<Button type='primary'>Run</Button>
</Paper>
```

```tsx CSS prop
import { Button, Label } from 'jimu-ui'
import { css, useTheme } from 'jimu-core'

const theme = useTheme()

const style = (theme) => css`
	color: ${theme.sys.color.primary.main};
	margin-inline-start: ${theme.sys.spacing(2)};
`

<Label css={style(theme)}>Name</Label>
<Button type='primary'>Apply</Button>
```

```tsx Styled components
import { styled } from 'jimu-theme'

const Card = styled('div')(({ theme }) => ({
	padding: theme.sys.spacing(3),
	borderRadius: theme.sys.shape.shape2,
	backgroundColor: theme.sys.color.surface.paper,
	color: theme.sys.color.surface.paperText
}))
```

## System Semantic Tokens

- Prefer system semantic tokens (`theme.sys.*`) in new widget code.
- Do not introduce new `theme.ref.*` usage unless there is no semantic alternative.
- Do not introduce or keep classic token paths (for example `theme.colors.*`) in new/updated widget code.

### Color (`theme.sys.color`)

- `mode`
- Brand and functional colors:
	- `primary.light`, `primary.main`, `primary.dark`, `primary.text`
	- `secondary.light`, `secondary.main`, `secondary.dark`, `secondary.text`
	- `error.light`, `error.main`, `error.dark`, `error.text`
	- `warning.light`, `warning.main`, `warning.dark`, `warning.text`
	- `info.light`, `info.main`, `info.dark`, `info.text`
	- `success.light`, `success.main`, `success.dark`, `success.text`
- Surface colors:
	- `surface.background`, `surface.backgroundText`, `surface.backgroundHint`
	- `surface.paper`, `surface.paperText`, `surface.paperHint`
	- `surface.overlay`, `surface.overlayText`, `surface.overlayHint`
	- `surface.header`, `surface.headerText`, `surface.headerHint`
	- `surface.footer`, `surface.footerText`, `surface.footerHint`
- Action colors:
	- `action.default`, `action.hover`, `action.pressed`, `action.text`, `action.focus`
	- `action.selected.default`, `action.selected.hover`, `action.selected.text`
	- `action.disabled.default`, `action.disabled.text`
	- `action.link.default`, `action.link.hover`, `action.link.visited`
	- `action.inputField.default`, `action.inputField.text`, `action.inputField.placeholder`
- Divider colors:
	- `divider.primary`, `divider.secondary`, `divider.tertiary`, `divider.inputField`, `divider.switch`

### Shape (`theme.sys.shape`)

- `shape1`
- `shape2`
- `inputField`

### Shadow (`theme.sys.shadow`)

- `shadow1`
- `shadow2`
- `shadow3`

### Spacing (`theme.sys.spacing`)

- Variables: `0` to `12`
- Function form: `theme.sys.spacing(...)`

### Typography (`theme.sys.typography`)

- Base:
	- `fontFamily`, `fontSize`
	- `fontWeightLight`, `fontWeightRegular`, `fontWeightMedium`, `fontWeightSemiBold`, `fontWeightBold`
- Variants:
	- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
	- `title1`, `title2`, `title3`
	- `inputField`, `body`
	- `label1`, `label2`, `label3`

### Transitions (`theme.sys.transitions`)

- Easing:
	- `easing.standard`, `easing.decelerate`, `easing.accelerate`, `easing.sharp`
- Duration:
	- `duration.shortest`, `duration.shorter`, `duration.short`, `duration.standard`, `duration.complex`
	- `duration.enteringScreen`, `duration.leavingScreen`

## `theme.sys.xxx` vs `--sys-xxx`

- Runtime JS/TS access: `theme.sys.xxx`
- CSS variable access: `var(--sys-xxx)`
- Conversion rule:
	- Replace object path separators (`.`) with `-`.
	- Convert camelCase segments to kebab-case.
	- For `theme.sys.spacing(...)`, each numeric argument maps to `var(--sys-spacing-n)` and keeps CSS shorthand order.

Examples:

- `theme.sys.color.primary.main` -> `var(--sys-color-primary-main)`
- `theme.sys.color.surface.paperText` -> `var(--sys-color-surface-paper-text)`
- `theme.sys.typography.fontWeightMedium` -> `var(--sys-typography-font-weight-medium)`
- `theme.sys.transitions.duration.enteringScreen` -> `var(--sys-transitions-duration-entering-screen)`
- `theme.sys.spacing(1)` -> `var(--sys-spacing-1)`
- `theme.sys.spacing(1, 2)` -> `var(--sys-spacing-1) var(--sys-spacing-2)`
- `theme.sys.spacing(1, 2, 3, 4)` -> `var(--sys-spacing-1) var(--sys-spacing-2) var(--sys-spacing-3) var(--sys-spacing-4)`

Alias behavior used in ExB parsing:

- `var(--sys-color-primary)` maps to `theme.sys.color.primary.main`
- `var(--sys-color-action-selected)` maps to `theme.sys.color.action.selected.default`
- `var(--sys-color-action-disabled)` maps to `theme.sys.color.action.disabled.default`
- `var(--sys-color-action-link)` maps to `theme.sys.color.action.link.default`
