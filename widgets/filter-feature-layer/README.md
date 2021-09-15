# Filter feature layer

This widget demonstrates how to filter a feature layer data source programmatically.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, the data source and attribute property to filter on is chosen.

In `widget.tsx`, a instance of `DataSourceManager` is obtained using `DataSourceManager.getInstance()`. Then the `DataSourceManager` instance is used to get the `FeatureLayerDataSource` (the one that was chosen in the settings panel) using the `getDataSource()` function. Finally, the `SqlQueryParams` for the filter are built based on what the user typed into the input box, and `updateQueryParams()` is called to filter the features.

```js
// First get the DataSourceManager instance
const dsManager = DataSourceManager.getInstance();

// Get the data source using useDataSource.dataSourceId
const useDataSource = props.useDataSources[0];
const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource;

// Build the queryParams, with the configured filterField and the value
// that has been typed into the TextInput by the user
const queryParams: SqlQueryParams = {
  where: `${props.config.filterField} LIKE '%${evt.target.value}%'`
};

// Filter the data source using updateQueryParams function.
ds.updateQueryParams(queryParams, props.id);
```
