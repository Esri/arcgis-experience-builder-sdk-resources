# Use Map Components
This sample demonstrates how to use `@arcgis/map-components` in a widget. This widget works since 1.15.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This widget imports components from `arcgis-map-components`, which is an entry in Experience Builder SDK since 1.15. With this entry, multiple widgets that use the `@arcgis/map-components` can share the same code. Then, it gets a `MapView` instance and set it to the component.
