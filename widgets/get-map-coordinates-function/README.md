# Get map coordinates (function)

This widget demonstrates how to display the latitude/longitude, scale, and zoom level of the map. Step-by-step instructions for building this widget can be found in the [ArcGIS for Developers Tutorials](https://developers.arcgis.com/labs/experiencebuilder/get-map-coordinates/).

This widget is written as a React function component. The equivalent widget written as a React class component can be found [here](../get-map-coordinates-class/).

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

Within `widget.tsx`, a reference to the Map object is acquired using the `JimuMapViewComponent` module. That reference is used in the `activeViewChangeHandler` function to create two watchers: one on when the extent changes, and one on when the pointer moves within the view:

```js
// When the extent moves, update the state with all the updated values.
jmv.view.watch("extent", evt => {
        setLatitude(jmv.view.center.latitude.toFixed(3));
        setLongitude(jmv.view.center.longitude.toFixed(3));
        setScale(Math.round(jmv.view.scale * 1) / 1);
        setZoom(jmv.view.zoom);
          });

// When the pointer moves, take the pointer location and create a Point
// geometry out of it (`view.toMap(...)`), then update the state.
jmv.view.on("pointer-move", evt => {
        const point: Point = jmv.view.toMap({
          x: evt.x,
          y: evt.y
        });
        setLatitude(point.latitude.toFixed(3));
        setLongitude(point.longitude.toFixed(3));
        setScale(Math.round(jmv.view.scale * 1) / 1);
        setZoom(jmv.view.zoom);
        setMapViewReady(true);
      });
```
