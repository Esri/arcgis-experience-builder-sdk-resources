# View layers toggle

This widget demonstrates how to create a dropdown toggle to allow viewing different layers on the map.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

Within `widget.tsx`, in the `render()` function, the layers are added to the dropdown `<select>`:

```jsx
{this.props.config.layerUrls.map((url) => {
  return <option value={url}>{url}</option>;
})}
```

The `onChange` handler is setup to call the `selectChangeHandler()` function when the selected value changes.

A reference to the Map object is acquired using the `JimuMapViewComponent` module, and that reference is used in the `selectChangeHandler()` function to add the selected layer to the map:

```js
// Create and add the new Feature Layer
const featureLayer = new FeatureLayer({
  url: evt.target.value,
});
this.state.jimuMapView.view.map.add(featureLayer);
```
