# Editor widget

This sample demonstrates how to include the Editor component from the ArcGIS Map Components. 

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This sample imports the required modules to leverage the `Editor` component from the ArcGIS Map Components. The `Editor` component is dependent on a `Map` component, which must have an editable feature layer. If it recognizes it is editable, the layer can be used by the component. 

```javascript
import 'arcgis-map-components'

  render () {
    return this.state.jimuMapView ?
      <arcgis-editor view={this.state.jimuMapView?.view}></arcgis-editor>
      :
      <p>Please select a map.</p>
  }
```

Create an interface `State` to define the specifications for the `jimuMapView` property.
```javascript
interface State {
  jimuMapView: JimuMapView
}

```

Extend the `React.Component` component class and use the `AllWidgetProps` type and implement the `State` interface.

```javascript
export default class Widget extends React.Component<AllWidgetProps<{}>, State> {
  // the class constructor assigns the initial this.state for jimuMapView.
  constructor(props) {
    super(props)
    this.state = {
      jimuMapView: null
    }
  }
```

The `activeViewChangeHandler` function handles the Map's active view change so `arcgis-editor` can respond to Map change or view change. If no Map is selected, it result in a `null` and the `arcgis-editor` won't render.

```javascript
  activeViewChangeHandler = (jmv: JimuMapView) => {
    this.setState({
      jimuMapView: jmv
    })
  }

  render () {
    return <JimuMapViewComponent
      useMapWidgetId={this.props.useMapWidgetIds?.[0]}
      onActiveViewChange={this.activeViewChangeHandler}
    />
  }
```