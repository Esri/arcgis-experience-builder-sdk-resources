# Web worker

This sample widget demonstrates how to use Web worker in a custom Experience Builder widget.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This widget uses `${props.context.folderUrl}dist/runtime/assets/worker.js` to load the web worker script, then use `postMessage()` to communicate between the widget and worker.