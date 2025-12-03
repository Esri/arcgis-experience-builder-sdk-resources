# Web component

This sample shows how to create a Web Component and embed it in a custom ArcGIS Experience Builder widget.

## Contents

- `manifest.json` — Widget metadata and Experience Builder version compatibility
- `src/runtime/widget.tsx` — Functional runtime component; imports the Web Component, Calcite Components, and map components
- `src/setting/setting.tsx` — Builder settings panel to select a target Map widget
- `src/runtime/my-component.js` — Custom Web Component definition registered with window.customElements

## Prerequisites

- ArcGIS Experience Builder Developer Edition installed and running (version compatible with the widget’s manifest).

## How it works

The custom element is implemented in the JavaScript file `my-component.js`. It is written in plain JavaScript because Experience Builder transpiles `.ts` files to ES5, while Web Components require ES6 or newer. The file begins with an ECMAScript 2015 (ES6) class that extends `HTMLElement`, which defines the Web Component’s behavior.

```typescript
class MyComponent extends HTMLElement {}
```

The component’s constructor attaches a shadow DOM with `this.attachShadow({ mode: 'open' })`. Using `open` lets external scripts access the shadow root via `element.shadowRoot`.

Register the element with `window.customElements.define('my-component', MyComponent)`. After registration, you can use `<my-component></my-component>` in your markup.

In `widget.tsx`, import the Web Component with `import './my-component'`. Then include `<my-component />` in the JSX of your functional widget’s return value (or in a class widget’s `render` method).

```typescript
export default function Widget(props: AllWidgetProps<{}>) {}
```

More information on functional components can be found [here](https://reactjs.org/docs/components-and-props.html#function-and-class-components).

## License

Please retain the Apache 2.0 license header when using code from this sample, as specified in [License.txt](../../../License.txt).