# Legend widget

This sample demonstrates how to include a JSAPI widget. 

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `samples/widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This sample imports the required modules to leverage the `Legend` widget and `LegendViewModel` from the JSAPI.  

  ```javascript
  import Legend = require('esri/widgets/Legend');
  import LegendVM = require('esri/widgets/Legend/LegendViewModel');

```

Create an interface `State` to define the specifications for the `legendWidgetVM` and `layerInfo` properties.
```javascript
interface State{
  legendWidgetVM: LegendVM;
  layerInfo: any
}

```

Extend the `BaseWidget` class and use the `AllWidgetProps` type and implement the `State` interface. The `legendWidget` property is used for the `Legend` widget so it can be referenced throughout the widget. 
```javascript
export default class Widget extends BaseWidget<AllWidgetProps<{}>, State>{
  apiWidgetContainer: React.RefObject<HTMLDivElement>;
  legendWidget: Legend;

  mapView: __esri.MapView | __esri.SceneView;

  watchHandle: __esri.Handle;


// the class constructor assigns the initial this.state and this.apiWidgetContainer to get references to the DOM nodes.
  constructor(props){
    super(props);
    this.state = {legendWidgetVM: null, layerInfo: null}
    this.apiWidgetContainer = React.createRef();
  }

}
```

The `createAPIWidget` method basically creates the `Legend` widget and passes the properties into the `new Legend` constructor. It also creates the `Legend` view model and updates the UI by calling `setState`.
`this.watchHandle` watches the `activeLayerInfos.length`, property and uses `setState` to update the `layerInfo` and assigns at index 0. This will provide the title of the layer. 
  ```javascript
  createAPIWidget(){
    if(!this.mapView){
      return;
    }
    if(!this.legendWidget){
      this.legendWidget = new Legend({
        view: this.mapView,
        container: this.apiWidgetContainer.current
      })
    }
    
    if(!this.state.legendWidgetVM){
      const vm = new LegendVM({
        view: this.mapView,
      });
      this.setState({
        legendWidgetVM: vm
      })

      this.watchHandle = vm.watch('activeLayerInfos.length', () => {
        this.setState({
          layerInfo: vm.activeLayerInfos.getItemAt(0)
        })
      })
    }
  }

```