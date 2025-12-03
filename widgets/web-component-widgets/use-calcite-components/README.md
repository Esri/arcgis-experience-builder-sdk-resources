# Use calcite components widget

This sample demonstrates how to use [Calcite Components](https://developers.arcgis.com/calcite-design-system/components/) in a custom widget.

Note: Before you use Calcite Components, we suggest you review the components in the `jimu-ui` package. `jimu-ui` is the primary component library for the ArcGIS Experience Builder developer edition, and you may want to use that first because it will keep your custom widgets and themes consistent with the rest of the Experience Builder theme.

## Contents

- `manifest.json`: Defines widget metadata and EXB version.
- `src/runtime/widget.tsx`: Functional runtime component that imports Calcite Components and Map components.
- `config.json`: Defines the widget’s default values.

## Prerequisites

- ArcGIS Experience Builder Developer Edition version 1.12 and above. 
- A map widget must be present in the experience for this sample to bind to its view.

## Installation

1. Clone the SDK resources repository (or download zip).
2. Copy the folder `widgets/web-component-widgets/use-calcite-components` into your EXB install `client/your-extensions/widgets/`
3. Restart (or rebuild) the EXB dev environment if required.
4. Add the widget to an experience and select a map widget in its settings panel.

## How it works

Experience Builder Developer Edition includes a Calcite components entry (`calcite-components`) from which you can import Calcite components into your custom widget. Importing components from this instance of `calcite-components` can avoid conflicts and reduce widget size.

Here is an example of how to import and use Calcite Components:

```js
import { CalciteButton } from 'calcite-components'

...

render(){
  return <CalciteButton>My Button</CalciteButton>
}
```

This widget uses the [Calcite Components example](https://github.com/Esri/calcite-components-examples/tree/master/react) to demonstrate the usage.

## License

Source code derived from this sample should preserve the Apache 2.0 license header used elsewhere in the repository [License.txt](../../../License.txt).