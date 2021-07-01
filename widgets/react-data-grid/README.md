# Use a third-party library: react-data-grid

The `jimu` libraries that come with Experience Builder can be used to include a variety of functionality into your widget. In addition to this functionality, third-party libraries can be included and used within a custom Experience Builder widget. This sample demonstrates how to install a third-party library (react-data-grid) via npm and use it within a custom Experience Builder widget.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

The `react-data-grid` library was installed via `npm` - see the reference to it in the `package.json` file. After downloading the sample, in a terminal browse to the root of the widget directory and run `npm install`. This will look at the `package.json` file and install `react-data-grid` since it's listed there.

Now that the files are in place, the widget can refer to the library using it's npm package name - see in `widget.tsx` the import line:

```js
import * as ReactDataGrid from "react-data-grid";
```

This method of installing a third-party library, via npm, should be used if this library is planned on only being used by a single widget. See the [Using Third-Party Libraries](/guide/third-party-libraries/) guide topic for information about how to use this pattern and other ways to use third-party libraries.
