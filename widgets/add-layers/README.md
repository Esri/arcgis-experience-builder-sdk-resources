# Add layers

This widget demonstrates how to add a layer to a map programmatically. Step-by-step instructions for building this widget can be found in the [ArcGIS for Developers Tutorials](https://developers.arcgis.com/labs/experiencebuilder/get-map-coordinates/).

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

Within `widget.tsx`, a reference to the Map object is acquired using the `JimuMapViewComponent` module. That reference is used in the `formSubmit` function when a `FeatureLayer` is created based on the layer URL and added to the map via the `jimuMapView`.

```js
// First create the Feature Layer from the URL that is in the box.
const layer = new this.FeatureLayer({
  url: this.state.featureServiceUrlInput,
});

// Add the layer to the map (accessed through the Experience Builder Data Source)
this.state.jimuMapView.view.map.add(layer);
```

In this sample, the ArcGIS API for JavaScript modules are loaded asynchronously (also known as "lazy-loading"), via the `jimu-arcgis/loadArcGISJSAPIModules` module:

```js
// Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules
// that we need - only once the "Add Layer" button is pressed.
loadArcGISJSAPIModules([
  "esri/layers/FeatureLayer",
  "esri/tasks/support/Query",
  "esri/geometry/SpatialReference",
]).then((modules) => {
  [this.FeatureLayer, this.Query, this.SpatialReference] = modules;
```
