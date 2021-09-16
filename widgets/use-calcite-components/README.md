# Use calcite components widget

### This sample demonstrates how to use [Calcite components](https://developers.arcgis.com/calcite-design-system/components/) in custom widget.


## Reminder before use

Before you use calcite components, we suggest you check components in jimu-ui. Jimu-ui is the primary component library for Experience Builder, and you may want to use that first because it will keep your custom widgets and themes consistent with the rest of the Experience Builder theme. If you do have a requirement to use the calcite components, this example will help you.

## How to use the sample

* Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.
* Run `npm i` in the widget root directory (`npm run copy` will also be executed as `postinstall`, it will copy the `calcite-icon` to `src/runtime/assets`)

```json
  "scripts": {
    "postinstall": "npm run copy",
    "precopy": "mkdir -p src/runtime/assets/",
    "copy": "cp -r node_modules/@esri/calcite-components/dist/calcite/assets/* ./src/runtime/assets/"
  },
```

## How it works

First, we intall `@esri/calcite-components` and `@esri/calcite-components-react` to the widget directory.

```json
  "dependencies": {
    "@esri/calcite-components": "^1.0.0-beta.61",
    "@esri/calcite-components-react": "^0.2.0"
  },
```

Then, `import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader'`, and call `applyPolyfills()` to apply the necessary polyfills of `calcite-components`.

After widget is loaded, call `defineCustomElements(window, { resourcesUrl: `${folderUrl}/dist/runtime/` })` to register the components of `calcite-components` as web component, and specify the resource load directory through the `resourcesUrl`. Now you are free to use the components of `calcite-components` in your widget.


The production of this widget refers to this [example](https://github.com/Esri/calcite-components-examples/tree/master/react).

