# Filter features layer

This widget demonstrates how to filter a group of feature layer data source programmatically.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, the data source and attributes properties to filter on is chosen.

In `widget.tsx`, a instance of `DataSourceManager` is obtained using `DataSourceManager.getInstance()`. Then the `DataSourceManager` instance is used to get the `FeatureLayerDataSource` (the one that was chosen in the settings panel) using the `getDataSource()` function. Finally, the `SqlQueryParams` for the filter are built based on what the user inserto into the second select, and `updateQueryParams()` is called to filter the features.

```js
// First get the DataSourceManager instance
const dsManager = DataSourceManager.getInstance();

// Get the data source using useDataSource.dataSourceId
const useDataSource = props.useDataSources[0];
const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource;

// Build the queryParams, with the configured fields and the values
// that has been select into the Select by the user
let queryParams: SqlQueryParams;

if (!values) queryParams = {
  where: '1=1'
}
else if (values.length > 0) {
  const valuesToInclude = [];
  values.forEach(el => valuesToInclude.push(`'${el.value}'`))
  queryParams = {
    where: `${fieldValue} IN (${valuesToInclude})`
  }
}

// Filter the data source using updateQueryParams function.
ds.updateQueryParams(queryParams, props.id);

```
