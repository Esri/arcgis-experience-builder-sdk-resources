# Data action only

This sample demonstrates how to create a widget that has the data action only.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
Define the data action in the folder of `src/data-actions`. Then extend the base class `AbstractDataAction` and implement its methods: `isSupported` and `onExecute`.

Register the data action in manifest.

```json
  "dataActions": [
    {
      "name": "showId",
      "label": "show id",
      "uri": "data-actions/show-id",
      "icon": "../icon.svg"
    }
  ]
```

After the data action is executed, it return a popper to display the content.