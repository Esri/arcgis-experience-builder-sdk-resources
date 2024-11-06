# How to use fields

The sample demonstrates how to use fields of data sources.

The data source has two types of methods to query records: the load method and the query method. The load method queries records and stores them in the data source instance to share with widgets. The query method only retrieves records and returns them without storing. Consequently, when loading records, the data source uses all `fields` defined in `useDataSources` within the widget JSONs as the final `outFields`. In contrast, when querying records. the data source disregards the `useDataSources`.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, select a data source using `DataSourceSelector` and select some fields using `FieldSelector`.

In `widget.tsx`, select a query type, either `LOAD` or `QUERY`. After adding fields in the settings, the results of both of the query types will be updated. However, if fields are removed, only the results of `QUERY` will be updated, as `LOAD` will store the results, it is unnecessary to send a new request to remove fields. Having more fields does no harm.

Please note, in the `widget.tsx`, for `LOAD`, we use the `DataSourceComponent` and set the prop `query` to `{ where: '1=1' }`, without setting the `outFields`, as the data source will calculate the fields from `widgetJson.useDataSources` automatically. However, for `QUERY`, we set the `outFields` to `props.useDataSources[0].fields?.asMutable()`.
