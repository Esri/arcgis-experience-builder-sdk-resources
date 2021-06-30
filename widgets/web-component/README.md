# Web component

This sample demonstrates how to write a Web component and include it in a custom Experience Builder widget.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

A [Web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is defined in `my-component.js`. This is a JavaScript file - not a TypeScript file - because Experience Builder is compiling the `.ts` files to ES5, but Web components work on >= ES6 only. The first line uses the [ECMAScript 2015 class syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to create a new Class that extends from HTMLElement.

```
class MyComponent extends HTMLElement {
  ```

In the constructor, a shadow DOM is attached to the custom element using `this.attachShadow({mode: 'open'})`. Setting the `mode` to `open` means that elements of the shadow root are accessible from JavaScript outside the root.

Finally, register the Class using `window.customElements.define('my-component', MyComponent)`. This allows the custom component to be used by name (`my-component` in this case) on the page.

In `widget.tsx`, to use the custom component that was defined above, simply import it (`import './my-component'`) and then use it in the JSX in either the `render` function (if using Class-style widgets) or in the return value if using functional component style. In this case, we are using the functional component style by exporting a function instead of a Class:

```
export default function Widget(props: AllWidgetProps<{}>){
```

More information on functional components can be found [here](https://reactjs.org/docs/components-and-props.html#function-and-class-components).