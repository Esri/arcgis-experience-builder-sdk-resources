# Client-side output data source

Output data source can save data in data source instance, we call it client-side output data source.

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

3. In `setting.tsx`, select a number field and some statistic functions, then save them in widget config.

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
  // use this.props.onSettingChange to save statistic funtions to config inside this callback
  onClickItem={this.onStatFuncItemClick}
/>
```

4. In `widget.tsx`, use `DataSourceComponent` to create original data source instance.
5. Update output data source's source records every time user clicking `update output data source` button.

```tsx
<Button onClick={this.setSourceRecordsToOutputDs}>
  Update output data source
</Button>
```



