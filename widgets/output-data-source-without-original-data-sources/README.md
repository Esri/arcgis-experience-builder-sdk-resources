# Output data source without original data sources

An output data source that doesn't have original data sources. It is designed to search GitHub issues and use the returned data to generate the output data source.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, save the data source JSON of the output data source to the app config using `onSettingChange`. Please note the schema of the output data source is a constant variable.

```ts
this.props.onSettingChange({
  id: this.props.id
}, outputDsJsons)
```

In `widget.tsx`, the output data source ID is available in `props.outputDataSources`. Once the output data source ID is determined, a data source instance is created using `DataSourceManager.getInstance().createDataSource(props.outputDataSources[0])`. After creating the data source instance, the GitHub issues are searched using `getAllRepoIssues`, and the returned data is then set to the data source instance.

Please note this widget only generates an output data source. If you want to use the output data source, please add another widget (such as the List widget) and select the output data source for it.
