# Legend widget

This sample demonstrates how to include a widget from the ArcGIS API for JavaScript. 

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `manifest.json`, the dependencies are loaded using the `dependency` property.

```javascript
"dependency": "jimu-arcgis",
```

Then in `widget.tsx`, it imports the required modules to leverage the `Legend` widget and `LegendViewModel` from the ArcGIS API for JavaScript.  

```javascript
import Legend from "esri/widgets/Legend";
import LegendVM from "esri/widgets/Legend/LegendViewModel";
```

Create an interface `State` to define the specifications for the `layerInfo` property.

```javascript
interface State{
  layerInfo: any
}
```

Extend the `React.PureComponent` class and use the `AllWidgetProps` type and implement the `State` interface. The `legendWidget` property is used for the `Legend` widget so it can be referenced throughout the widget.

```javascript
export default class Widget extends React.PureComponent<AllWidgetProps<{}>, State>{
  apiWidgetContainer: React.RefObject<HTMLDivElement>;
  legendWidget: Legend;

// the class constructor assigns the initial this.state and this.apiWidgetContainer to get references to the DOM nodes.
  constructor(props){
    super(props);
    this.state = { layerInfo: null }
    this.apiWidgetContainer = React.createRef();
  }
}
```

The `onActiveViewChange` method gets called when the map view changes, and creates the `Legend` widget and passes the properties into the `new Legend` constructor. It also creates the `Legend` view model and updates the UI by calling `setState`.

```javascript
onActiveViewChange = (jimuMapView: JimuMapView) => {
  if (!(jimuMapView && jimuMapView.view)) {
    return;
  }

  if (!this.legendWidget && this.apiWidgetContainer.current) {
    this.legendWidget = new Legend({
      view: jimuMapView.view,
      container: this.apiWidgetContainer.current
    });

    const vm = new LegendVM({
      view: jimuMapView.view,
    });

    this.setState({
      layerInfo: vm.activeLayerInfos.getItemAt(0)
    });
  }
}
```
