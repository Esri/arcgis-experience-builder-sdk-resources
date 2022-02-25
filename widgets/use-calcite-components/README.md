# Use calcite components widget

This sample demonstrates how to use [Calcite components](https://developers.arcgis.com/calcite-design-system/components/) in a custom widget.

## Reminder before use

Before you use Calcite components, we suggest you review the components in the jimu-ui package. Jimu-ui is the primary component library for the developer edition of ArcGIS Experience Builder, and you may want to use that first because it will keep your custom widgets and themes consistent with the rest of the Experience Builder theme. If you do have a requirement to use Calcite components, this example will help you.

## How to use the sample

* Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

From 1.8, Experience Builder Developer Edition includes a Calcite components entry (`calcite-components`), your widget can import components from this entry. Import components from ExB `calcite-components` can avoid conflits and reduce widget size.

Here is the code snippet:
```
import { CalciteButton } from 'calcite-components'

...

render(){
  return <CalciteButton>My Button</CalciteButton>
}
```

This widget uses this [calcite components example](https://github.com/Esri/calcite-components-examples/tree/master/react) to demonstrate the usage.
