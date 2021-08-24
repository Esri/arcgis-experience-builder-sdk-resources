# Editor widget

This sample demonstrates how to include the Editor widget from the ArcGIS API for JavaScript. 

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This sample imports the required modules to leverage the `Editor` widget from the ArcGIS API for JavaScript. The `Editor` widget is dependent on a `Map` widget, which must have an editable feature layer. If it recognizes it is editable, the layer can be used by the widget. 

  ```javascript
 import Editor from 'esri/widgets/Editor';

```

Create an interface `State` to define the specifications for the `jimuMapView` and `currentWidget` properties.
```javascript
interface State {
  jimuMapView: JimuMapView;
  currentWidget: Editor;
}

```

Extend the `React.Component` component class and use the `AllWidgetProps` type and implement the `State` interface. 
```javascript
export default class Widget extends React.Component<AllWidgetProps<{}>, State>{

  private myRef = React.createRef<HTMLDivElement>();


// the class constructor assigns the initial this.state for jimuMapView and currentWidget.
constructor(props) {
    super(props);
    this.state = {
      jimuMapView: null,
      currentWidget: null
    };
  }
```

The `activeViewChangeHandler` function handles a couple of things. First, if there is a previous state such as the widget was added to another map and the user is switching between them in the dropdown, this.state.currentWidget.destroy() will remove it. To allow the widget to replace the container, create a new DOM node `const container = document.createElement("div")` and then append `this.myRef.current.appendChild(container)` so it will not remove the `ref` DOM node. Finally, create the `Editor` widget and pass the properties into the `new Editor` constructor and update the UI by calling `setState`. 

  ```javascript
   activeViewChangeHandler = (jmv: JimuMapView) => {
    if (this.state.jimuMapView) {
       if (this.state.currentWidget) {
        this.state.currentWidget.destroy();
      }
    }

    if (jmv) {
      this.setState({
        jimuMapView: jmv
      });

      if(this.myRef.current) {
        const container = document.createElement("div");
        this.myRef.current.appendChild(container);

        const newEditor = new Editor({
          view: jmv.view,
          container: container
        });
    
        this.setState({
          currentWidget: newEditor
        });
      } else {
        console.error('could not find this.myRef.current');
      }
    }
  };

```