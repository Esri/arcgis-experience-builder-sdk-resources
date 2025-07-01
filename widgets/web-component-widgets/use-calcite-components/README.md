# Use calcite components widget

This sample demonstrates how to use [Calcite components](https://developers.arcgis.com/calcite-design-system/components/) in a custom widget.

## Reminder before use

Before you use Calcite components, we suggest you review the components in the jimu-ui package. Jimu-ui is the primary component library for the developer edition of ArcGIS Experience Builder, and you may want to use that first because it will keep your custom widgets and themes consistent with the rest of the Experience Builder theme. If you do have a requirement to use Calcite components, this example will help you.

## How to use the sample

* Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

Starting at version 1.8, developer edition of Experience Builder includes a Calcite components entry (`calcite-components`) from which you can import Calcite components into your custom widget. Importing components from this instance of `calcite-components` can avoid conflicts and reduce widget size.

Here is an example:

```js
import { CalciteButton } from 'calcite-components'

...

render(){
  return <CalciteButton>My Button</CalciteButton>
}
```

This widget uses this [calcite components example](https://github.com/Esri/calcite-components-examples/tree/master/react) to demonstrate the usage.
