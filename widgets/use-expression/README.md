# Use expression

This sample demonstrates how to resolve expression for multiple records in a custom widget.

In setting panel, select a data source and add an expression. In widget, you will see the expression is resolved to value. Please note the sample will only load the first page (100 records by default).

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `setting.tsx`, use `DataSourceSelector` to allow the user to select a data source.

```tsx
<DataSourceSelector
  onChange={onDataSourceChange} types={SUPPORT_DATA_SOURCE_TYPES}
  useDataSources={useDataSources} widgetId={id} mustUseDataSource
/>
```

Use `ExpressionBuilder` to create an expression.

```tsx
<ExpressionBuilder
  className='w-100' useDataSources={useDataSources} types={SUPPORT_EXPRESSION_TYPES}
  onChange={onExpression} expression={expression} widgetId={id}
/>
```

In `widget.tsx`, use `DataSourceComponent` to create the data source instance and pass in `query` load records.

```tsx
<DataSourceComponent useDataSource={useDataSources[0]} query={DEFAULT_QUERY} widgetId={id}>
  {renderData}
</DataSourceComponent>
```

In `renderData` of `DataSourceComponent`, create `ExpressionResolverComponent` for each record and pass in `records` to provide data to resolve the expression.

```tsx
<div className='record-list'>
  {
    dataSource.getRecords().map((r, i) => <ExpressionResolverComponent key={i} records={getRecordsForExpression(r, dataSource.id, dssUsedInExpression)} expression={expression} widgetId={id}>{renderExpressionResult}</ExpressionResolverComponent>)
  }
</div>
```
