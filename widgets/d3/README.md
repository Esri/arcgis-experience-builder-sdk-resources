# Use a third-party library: D3

The `jimu` libraries that come with Experience Builder can be used to include a variety of functionality into your widget. In addition to this functionality, third-party libraries can be included and used within a custom Experience Builder widget. This sample demonstrates how to install a third-party library (D3) via manual download and use it within a custom Experience Builder widget.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

The D3 library was downloaded from the documentation website and copied into the widget files here, at `d3/src/runtime/lib/d3`. The library can then be referenced via a relative path, see in `widget.tsx`:

```js
import * as d3 from "./lib/d3/d3.min.js";
```

This method of installing a third-party library, via download and relative import, should be used if this library is planned on being used in multiple widgets. See the [Using Third-Party Libraries](/guide/third-party-libraries/) guide topic for information about how to use this pattern and other ways to use third-party libraries.
