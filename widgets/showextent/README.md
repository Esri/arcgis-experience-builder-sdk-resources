# Show extent

This sample demonstrates how to watch for changes on the map view.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation. 

## How it works
A class property `onActiveViewChange` for the widget is assigned to the function `JimuMapView`.  This function uses
the `jimuMapView.view.watch()` method, which takes two imput parameters, the extent property and a callback function to
execute each time the extent property changes. The `setState` method is called to re-render the widget with the updated state.  

  ```javascript
  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if(!this.extentWatch){
      this.extentWatch = jimuMapView.view.watch('extent', extent => { 
        this.setState({
          extent
        })
      });
    }
  }
```
