# Output data source without original data sources

The sample demonstrates how to generate an output data source that doesn't have original data sources. It is designed to search GitHub issues and use the returned data to generate the output data source.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, saving the output data source JSON in the `appConfig.dataSources` is required so other widgets can select the output data source. You should not change the schema of the output data source in `widget.tsx` because doing so may break the widgets that use this data source (it is okay to do it in `setting.tsx`).

```ts
this.props.onSettingChange({
  id: this.props.id
}, outputDsJsons)
```

In `widget.tsx`, the output data source ID is available in `props.outputDataSources`. Once the output data source ID is determined, a data source instance is created using `DataSourceManager.getInstance().createDataSource(props.outputDataSources[0])`. After creating the data source instance, we will search the GitHub issues using `getAllRepoIssues`, and then set the returned data to the data source instance.

Please note this widget only generates an output data source. If you want to use the output data source, please add another widget (such as the List widget) and select the output data source for it.

The differences between the runtime data source and the predefined output data source are,
* We must know the output data source schema in the settings and save it to the app config using `onSettingChange`. Runtime data sources don’t require it.
* We can select the output data source for other widgets (e.g. list widget and table widget) in the builder. However, the runtime data source doesn't support it. To allow other widgets to use a runtime data source, we must add data actions (`<DataActionList />` component).
