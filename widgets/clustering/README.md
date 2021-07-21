# Point clustering

This sample demonstrates how to enable point clustering on a feature layer in a web map. 

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
The property `clusterConfig` defines the cluster properties such as the `clusterRadius`, which determines each cluster's region for including features. 

  ```javascript
 clusterConfig = {
  type: "cluster",
  clusterRadius: "100px",
  popupTemplate: {
    content: "This cluster represents <b>{cluster_count}</b> points.",
    fieldInfos: [{
      fieldName: "cluster_count",
      format: {
        digitSeparator: true,
        places: 0
      }
    }]
  },
    clusterMinSize: "24px",
    clusterMaxSize: "60px",
          labelingInfo: [{
            deconflictionStrategy: "none",
            labelExpressionInfo: {
              expression: "Text($feature.cluster_count, '#,###')"
            },
         
            labelPlacement: "center-center",
          }]

}

```

`onCheckBoxChange` function handles the logic for the `Checkbox` component and sets the state based on the value and passes this to the `clusterSwitch` function.
```javascript
 onCheckBoxChange = (e) => {
  const valueState = e.target.value
   this.setState({ 
    clusterStatus: valueState 
    },  () => {
      this.clusterSwitch(this.state.clusterStatus);
      })
}

```

The `clusterSwitch` function controls the display of the cluster. If `this.state.clusterStatus` is true, then enable clustering. Otherwise, turn off the clustering for the layer by setting it to `null`.    
```javascript
clusterSwitch = (e) => {
  if (this.state.clusterStatus){ 
       this.state.jimuMapView.jimuLayerViews[this.state.clusterLayer].layer.featureReduction = this.clusterConfig
    } 
    if (!this.state.clusterStatus)
   
      this.state.jimuMapView.jimuLayerViews[this.state.clusterLayer].layer.featureReduction = this.state.clusterStatus ? this.clusterConfig : null

}

```

The `activeViewChangeHandler` function handles a couple of things. It checks if there is a `JimuMapView` and if it contains layers. If it does contain layers then it will set the state for map view, the data source and the error tip to display the widget. If there is a `JimuMapView` without layers, then it will display the `WidgetPlaceHolder` component.  

  ```javascript
     activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
    const jimuLayerViews = jmv.jimuLayerViews;
    const jimuLayerViewIds = Object.keys(jimuLayerViews)[0];
    const layerViewId = jimuLayerViewIds;
 
      if (layerViewId === undefined) {
        jmv = null;
        return
      }

    this.setState({
       jimuMapView: jmv,
       clusterLayer: jimuLayerViewIds,
       errorTip: false
      })
   } else {
    this.setState({
      jimuMapView: undefined,
      clusterLayer: undefined,
      errorTip: true,
      clusterStatus: false
    })

   }
 } 

```
