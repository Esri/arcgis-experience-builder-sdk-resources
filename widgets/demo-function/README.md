# Demo function widget
This sample demonstrates how to create a widget using a function component.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This example creates a simple function widget. The widget is declared as a function with the types `AllWidgetProps` and `IMConfig` and  interface `ExtraProps`. The `AllWidgetProps` uses props of the widget and props injected by the `jimu` framework. The `IMConfig` is used to work with the config.ts. 
The widget returns the props in the config.json and the `locale` for the current user. It also returns the property `str1` in the default.ts file.


```javascript

export default function Widget(props: AllWidgetProps<IMConfig> & ExtraProps){
  return <div className="widget-demo-function jimu-widget" style={{overflow: 'auto'}}>
    This is a demo for a functional component.
    <div>
      config: {JSON.stringify(props.config)}
    </div>
    <div>
      locale: {props.locale}
    </div>
    <div>
      i18n: <FormattedMessage id="str1" defaultMessage={defaultMessage.str1}></FormattedMessage>
    </div>
  </div>;
}


```
In some cases you might need to access properties that are not in `props`, the code snippet below accesses the state of the `appContext.locale`.
```javascript

Widget.mapExtraStateProps = (state: IMState, ownProps: AllWidgetProps<IMConfig>): ExtraProps => {
  return {
    locale: state.appContext.locale
  }
}

```





