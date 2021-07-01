# Show record id

This sample demonstrates how to provide data action in a widget.

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
      "uri": "data-actions/show-id"
    }
  ],

```
Add nls labels in `src/runtime/translations/default.ts` for the data action if necessary. The name of the nls property should follow the pattern `_action_${dataActionName}_label`. In this case, it is `_action_showId_label`.

```javascript
export default {
  _widgetLabel: 'ShowId',
  _action_showId_label: 'Show id',
}

```