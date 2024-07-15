# Use Map Components
This sample demonstrates how to use @arcgis/map-components in a widget.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This widget initialized `@arcgis/map-components` and imports components from `@arcgis/map-components-react`. Then it gets a `MapView` instance and set it to the component.

Please note before the version 1.15, the dependent code will be compiled into the widget. For version 1.15+, please refer to the `use-map-components2` sample widget.
