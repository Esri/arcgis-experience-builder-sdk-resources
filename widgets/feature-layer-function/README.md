# Use a feature layer (function)

Data sources are a key concept of the ArcGIS Experience Builder architecture. You may want to utilize a data source within your custom widget. This sample demonstrates how to use a feature layer as a data source.

This widget is written as a React function component. The equivalent widget written as a React class component can be found [here](../feature-layer-class/).

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

When the widget is added to an Experience, the Experience author chooses a data source. This data source is available in the code under the `useDataSources` prop.

In the TSX in the render function near the bottom of `use-feature-layer\src\runtime\widget.tsx`, the [`DataSourceComponent`]() is loaded and the data source (`this.props.useDataSources[0]`) is passed to it (along with some other properties):

```jsx
<DataSourceComponent useDataSource={props.useDataSources[0]} query={query} widgetId={props.id} queryCount>
      {dataRender}
    </DataSourceComponent>
```

This is the typical usage of [`DataSourceComponent`](): you can pass in `useDataSource` and `query`, and render the query result by using a render function as a child component. See [`DataSourceComponent`]() for more information on the properties.

[`DataSourceComponent`]() uses the [render props pattern](https://reactjs.org/docs/render-props.html#using-props-other-than-render) to pass the [`DataSource`](), the [`IMDataSourceInfo`](), and count to the child component. In this case, the child is a function that is defined in the custom widget, `this.dataRender`.