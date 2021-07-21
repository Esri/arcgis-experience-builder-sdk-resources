# Get map coordinates (class)

This widget demonstrates how to display the latitude/longitude, scale, and zoom level of the map. Step-by-step instructions for building this widget can be found in the [ArcGIS for Developers Tutorials](https://developers.arcgis.com/labs/experiencebuilder/get-map-coordinates/).

This widget is written as a Class-based component. The equivalent widget written as a React functional Component can be found [here](../get-map-coordinates-function/).

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

Within `widget.tsx`, a reference to the Map object is acquired using the `JimuMapViewComponent` module. That reference is used in the `activeViewChangeHandler` function to create two watchers: one on when the extent changes, and one on when the pointer moves within the view:

```js
// When the extent moves, update the state with all the updated values.
jmv.view.watch("extent", evt => {
  this.setState({ /* ... */ });
});

// When the pointer moves, take the pointer location and create a Point
// geometry out of it (`view.toMap(...)`), then update the state.
jmv.view.on("pointer-move", evt => {
  const point: Point = this.state.jimuMapView.view.toMap({
    x: evt.x,
    y: evt.y
  });
  this.setState({ /* ... */ });
});
```
