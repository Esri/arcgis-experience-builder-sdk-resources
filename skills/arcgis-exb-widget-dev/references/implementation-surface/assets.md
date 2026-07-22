# Implementation Surface: Assets

## Assets and Static Resources

- Follow two official patterns: inline small assets, and dynamically load large assets.
- You may split assets by surface when helpful: `src/runtime/assets/**` and `src/setting/assets/**`.
- Use predictable names by purpose (`empty-state.svg`, `warning-16.svg`, `legend-placeholder.png`) instead of temporary names.
- Prefer SVG for icons/illustrations and use raster files only when necessary (photos, screenshots).
- For small assets, inline via `require()`.
- For large images/video, load dynamically instead of inlining.
- Build dynamic asset URLs with `props.context.folderUrl` and dist paths like `dist/runtime/assets/...` or `dist/setting/assets/...`.
- Use relative paths from source files; do not hardcode environment-specific absolute paths.
- In runtime, treat assets as optional UI dependencies and provide fallback rendering when load fails.
- In setting, keep previews/lightweight illustrations small and avoid large decorative media that slows builder panels.
- Avoid duplicating large binaries across widgets; reuse existing shared assets when available.
- Keep user-visible asset usage theme-aware and accessible (contrast, alt text/labels, decorative vs semantic images).
- Do not persist runtime asset objects in config; persist serializable identifiers/options only.

## Practical Checks

- Verify assets render correctly in both builder preview and app runtime.
- Verify broken/missing asset paths degrade to explicit fallback UI.
- Keep SVGs clean and safe: no remote references, no embedded scripts, no unnecessary metadata.
- Keep file sizes bounded; compress/optimize before committing large media files.

```ts
const smallImage = require('./small-image.png')
```

```tsx
<img style={{ width: '200px', height: '200px' }} src={smallImage} />
```

```tsx
const svg = require('./assets/icons/mysvg.svg')
<Icon icon={svg} color='red' width='200px' height='200px' />
```

```tsx
<img
	style={{ width: '200px', height: '200px' }}
	src={`${props.context.folderUrl}dist/runtime/assets/large-image.jpg`}
/>
```

```tsx
<Icon
	icon={`${props.context.folderUrl}dist/runtime/assets/mysvg.svg`}
	color='red'
	width='200px'
	height='200px'
/>
```
