# Listen selection change of a data source

Data sources are a key concept of the ArcGIS Experience Builder architecture. You may want to utilize a data source within your custom widget. This sample demonstrates how to listen selection change of a data source.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

1. In setting, select data source by `DataSourceSelector.` The selected data source will be saved in `props.useDataSources`.
```tsx
<DataSourceSelector onChange={onDataSourceChange} widgetId={props.id}
  types={Immutable([AllDataSourceTypes.FeatureLayer])} useDataSources={props.useDataSources}
  useDataSourcesEnabled={props.useDataSourcesEnabled} onToggleUseDataEnabled={onToggleUseDataEnabled}
/>
```
2. In widget, load records by `DataSourceComponent`. The sample uses render function of `DataSourceComponent`, the render function will be called whenever the data source info change (e.g. selection change) or loaded records change (e.g. other widgets apply a filter to the data source).
```tsx
<DataSourceComponent useDataSource={props.useDataSources[0]} query={{ where: '1=1' } as FeatureLayerQueryParams} widgetId={props.id}>
  {dataRender}
</DataSourceComponent>
```
3. In the render function, select a record when user click a record, add blue border if the record is selected (by the sample widget itself or other widgets).
```tsx
const dataRender = (ds: DataSource, info: IMDataSourceInfo) => {
  return <div className='record-list'>
      {
        ds && ds.getStatus() === DataSourceStatus.Loaded
          ? ds.getRecords().map((r, i) => {
            return <Button type='tertiary' key={i} onClick={() => ds.selectRecordById(r.getId())} className={classNames({ 'blue-border': ds.getSelectedRecordIds()?.includes(r.getId()) })}>
              {r.getId()}
            </Button>
          })
          : null
      }
    </div>
}
```
