# Use a third-party library: jQuery

The `jimu` libraries that come with Experience Builder can be used to include a variety of functionality into your widget. In addition to this functionality, third-party libraries can be included and used within a custom Experience Builder widget. This sample demonstrates how to configure Experience Builder to load a third-party library (jQuery) via the *manifest.json* `dependency` property and use it within a custom Experience Builder widget.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

The jQuery CDN url is included in the `dependency` property in the `manifest.json` file. Since it is listed there, Experience Builder loads the library and then jQuery can be used in the widget - in this case, the jQuery `$` variable is being used in `widget.tsx`.

This method of installing a third-party library, via CDN using manifest.json, should be used if this library is planned on being used in multiple widgets. See the [Using Third-Party Libraries](/guide/third-party-libraries/) guide topic for information about how to use this pattern and other ways to use third-party libraries.