# Client-side output data source

An output data source can save data in a data source instance, this is called a client-side output data source.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, use `DataSourceSelector` to allow the user to select an origin data source. Declare the output data source inside `onChange` callback of `DataSourceSelector`.

```ts
// Let framework know which data source current widget is using and which data source current widget is the output.
this.props.onSettingChange({
  id: this.props.id,
  useDataSources: useDataSources
}, outputDsJsons)
```

Select a filter and save it in widget config.

```tsx
<SqlExpressionBuilderPopup
  dataSource={ds}
  mode={SqlExpressionMode.Simple}
  expression={this.props.config.sqlExpression}
  // use this.props.onSettingChange to save filter to config inside this callback
  onChange={this.onSqlExpressionChange}
  isOpen={this.state.isSqlBuilderOpen}
  toggle={this.toggleSqlBuilder}
/>
```

In `widget.tsx`, use `DataSourceComponent` to create origin data source instance. Update the output data source's source records every time the user clicks the `update output data source` button.

```tsx
<Button onClick={this.setSourceRecordsToOutputDs}>
  Update output data source
</Button>
```

Please note this widget only generates an output data source. If you want to use the output data source, please add another widget (such as the List widget) and select the output data source for it. This sample widget does not listen to the origin data source change, you can use `onDataSourceInfoChange` callback of the `DataSourceComponent` to listen to the origin data source change.
