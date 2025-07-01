# Create widget with layout

This is a widget to show how to use the layout provided by the experience builder. It is a simple widget with a fixed layout.

1. Define the layout you want to use in the `manifest.json` file. In this case, we are using a fixed layout.

```json
{
  "type": "widget",
  "widgetType": "LAYOUT",
  "layouts": [
    {
      "name": "DEFAULT",
      "label": "Default",
      "type": "FIXED"
    }
  ]
}
```

2. Import the layout builder in the `builder-support.tsx`.

```
import { LayoutBuilder } from 'jimu-layouts/layout-builder'
export default { LayoutBuilder }
```

3. Use the layout in the widget's runtime code. In this case, we are using a `LayoutEntry` to render the layout.

```tsx
// The layout entry is used to render the layout in the widget.
import { LayoutEntry } from 'jimu-layouts/layout-runtime'
```

```tsx
// Use the correct layout component based on whether the widget is in the builder or not.
const LayoutComponent = !window.jimuConfig.isInBuilder
      ? LayoutEntry
      : builderSupportModules.widgetModules.LayoutBuilder
```

```tsx
// Render the layout component with the widget's content.
const { layouts } = this.props
const layoutName = Object.keys(layouts)[0]

<LayoutComponent
  className='flex-grow-1'
  layouts={layouts[layoutName]}
  isInWidget
/>
```

