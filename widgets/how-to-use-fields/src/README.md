# How to use fields

The sample demonstrates how to use fields of data sources.

The data source has two types of methods to query records: the load method and the query method. The load method queries records and stores them in the data source instance to share with widgets. The query method only retrieves records and returns them.

For load (calling `ds.load(queryParams, options)` or using `query` prop in the `DataSourceComponent`), the data source will use all the `fields` specified in `widgetJson.useDataSources` and `outFields` provided in the query params as the final `outFields`. For query (calling `ds.query(queryParams)`), the data source will only use `outFields` provided in the query params.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, select a data source using `DataSourceSelector` and select some fields using `FieldSelector`.

In `widget.tsx`, select a query type, either `LOAD` or `QUERY`. After adding fields in the settings, the results of both of the query types will be updated. However, if fields are removed, only the results of `QUERY` will be updated, as `LOAD` will store the results, it is unnecessary to send a new request to remove fields. Having more fields does no harm.

Please note, in the `widget.tsx`, for `LOAD`, we use the `DataSourceComponent` and set the prop `query` to `{ where: '1=1' }`, without setting the `outFields`, as the data source will calculate the fields from `widgetJson.useDataSources` automatically. However, for `QUERY`, we set the `outFields` to `props.useDataSources[0].fields?.asMutable()`.
