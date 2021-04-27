# Server-side output data source

Output data source may not save data in data source instance, but uses remote database, we call it server-side output data source.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `samples/widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

1. In `setting.tsx`, use `DataSourceSelector` to allow user to select an original data source.

2. In `setting.tsx`, declare output data source inside `onChange` callback of `DataSourceSelector`.

```ts
// Let framework know which data source current widget is using and which data source current widget is outputing.
this.props.onSettingChange({
  id: this.props.id,
  useDataSources: useDataSources
}, outputDsJsons)
```

3. In `setting.tsx`, select a filter and save it in widget config.

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

4. In `widget.tsx`, use `DataSourceComponent` to create original data source instance.
5. Update output data source's query parameters every time user clicking `update output data source` button.

```tsx
<Button onClick={this.updateOutputDsQueryParams}>
  Update output data source
</Button>
```

Please note that the widget only generates output data source. If you want to use the output data source, please add another widget (such as List widget) and select the output data source for it.

