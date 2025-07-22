# Share code between widgets - dynamic loading

This sample demonstrates how to share code between widgets by using dynamic loading.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
When you need to share code between widgets using this way, the best practice is to create a folder. Place the widgets that need to share code in the folder, and then create a common folder to store the shared code.

In this example, `widget1` and `widget2` need to share code. That code is stored in the `common` folder.
In each widget, you need to use `import('../../../common/my-module')` to import the shared code. After compilation, the shared code is placed into the `widgets/chunks` folder.