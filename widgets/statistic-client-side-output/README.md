# Statistics with output data source

An output data source can save data in a data source instance, this is called a client-side output data source.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, use `DataSourceSelector` to allow the user to select an origin data source. Next, declare the output data source inside `onChange` callback of `DataSourceSelector`.

```ts
// Let framework know which data source current widget is using and which data source current widget is the output.
this.props.onSettingChange({
  id: this.props.id,
  useDataSources: useDataSources
}, outputDsJsons)
```

Select a number field and some statistic functions, then save them in widget config.

```tsx
<div className='my-2'>Please select a field.</div>
<FieldSelector
  useDataSources={this.props.useDataSources}
  // use this.props.onSettingChange to save the number field to config inside this callback
  onChange={this.onFieldSelected}
  selectedFields={this.props.config.numberField ? Immutable([this.props.config.numberField]) : null}
  types={this.numberFieldTypes}
  useDropdown
  isDataSourceDropDownHidden
  isSearchInputHidden
/>
<div className='my-2'>Please select a statistic function.</div>
<MultiSelect fluid
  items={this.getStatFuncItems()}
  values={this.getSelectedStatFuncs()}
  // use this.props.onSettingChange to save statistic functions to config inside this callback
  onClickItem={this.onStatFuncItemClick}
/>
```

In `widget.tsx`, use `DataSourceComponent` to create origin data source instance. Update the output data source's source records every time the user clicks the `update output data source` button.

```tsx
<Button onClick={this.setSourceRecordsToOutputDs}>
  Update output data source
</Button>
```
The main difference between this widget with the [client-side-output](../client-side-output) is this widget's output data source uses a different schema with its origin data source.
