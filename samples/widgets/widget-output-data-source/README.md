# Widget output data source

A widget can use a data source and it can generate a data source as well.  The generated data source is a widget output data source. Widgets can use output data sources the same way as using other data sources. 

## How to generate output data source

In general, there are two steps for a widget to generate an output data source.

1. In the setting, declare its output data source by using  `this.props.onSettingChange`.
2. In the widget, update the data of the output data source.

More specifically, output data source can save data in data source instance, or not. If save data in data source instance, widget needs to update output data source's source records, if not, widget needs to update output data source's query parameter. To finish step 2, there are two options.

2. In widget, update data of output data source.
   1. If save data in data source instance, call `outputDataSource.setSourceRecords`.
   2. If don't save data in data source instance, call `outputDataSource.updateQueryParams`.

## How to use output data source

Widgets can use output data source just like using any other data sources.

1. In setting, use `DataSourceSelector` to let user select a data source (`Outputs` tab).
2. In widget, use `DataSourceComponent` to create data source instance and use the data source instance to do other operations.
