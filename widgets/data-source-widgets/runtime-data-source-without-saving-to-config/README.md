# Runtime data source without saving to config

The sample demonstrates how to generate a runtime data source that is not saved to the app config. It is designed to create a data source dynamically based on the provided service URL. It is a simplified version of the 'add data' widget.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

No settings are needed.

In `widget.tsx`, once we input a feature layer URL, the widget will fetch the layer definition and then create a data source instance. See the `createDataSource`.

Please note this widget only generates a runtime data source. If you want to use data actions like 'add data' widget, please use `<DataActionList widgetId={widgetId} dataSets={[{ dataSource: ds, records: [], name: ds.getLabel() }]} />`.

The differences between the runtime data source and the predefined output data source are,
* We must know the output data source schema in the settings and save it to the app config using `onSettingChange`. Runtime data sources don’t require it.
* We can select the output data source for other widgets (e.g. list widget and table widget) in the builder. However, the runtime data source doesn't support it. To allow other widgets to use a runtime data source, we must add data actions (`<DataActionList />` component).
