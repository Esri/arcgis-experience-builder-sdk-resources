# Create a map view
This sample demonstrates how to load a webmap and create a map view.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
In React, sometimes you might need to interact directly with DOM nodes or React elements created in the render method. This is possible using React's `React.createRef()` method.
Using the `mapContainer` property the `React.createRef<HTMLDivElement>()` method is assigned so it can be referenced throughout the widget/component. There is also some properties assigned 
to interfaces such as `MapView`, `WebMap`, and `__esri.WatchHandle` coming from the ArcGIS API for JavaScript. In addition, the `MapViewManager` class is used to get the instance of the app's mapview manager. 
```javascript

export default class Widget extends React.PureComponent<AllWidgetProps<{}> & ExtraProps, {}>{
  mapContainer = React.createRef<HTMLDivElement>();
  mapView: MapView;
  webMap: WebMap;
  extentWatch: __esri.WatchHandle;

  mvManager: MapViewManager = MapViewManager.getInstance();


```
The `webmapDS.map`, is the data source and `this.mapContainer.current` is a reference to the node created using `React.createRef()`. Basically, these are the properties that are passed into the constructor for the MapView using the interface for `MapViewProperties`.
```javascript

const options: __esri.MapViewProperties = {
        map: webmapDs.map,
        container: this.mapContainer.current
      };

```

To create the `MapView`, the `createJimuMapView()` method is called with these properties: the widget that creates the object via `mapWidgetId: this.props.id`, the map view object `view: new MapView(options)`, and the data source(webmap) `datasourceId: webmapDs.id` that creates the view.
```javascript

this.mvManager.createJimuMapView({
        mapWidgetId: this.props.id,
        view: new MapView(options),
        datasourceId: webmapDs.id,
        isActive: true
      })

```



