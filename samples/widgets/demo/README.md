# Demo widget
This sample demonstrates how to create a widget using a class component.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `samples/widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
This example creates a simple class widget to highlight some of the props you can use from a theme to return a widgets props. It also demonstrates how to style a button and component. The widget extends the `React.PureComponent` class with the types `AllWidgetProps` and `IMConfig`. The `AllWidgetProps` uses props of the widget and props injected by the `jimu` framework. The `IMConfig` is used to work with the config.ts. 
The class constructor assigns the initial `this.state` for the activeTab property. 

```javascript
  export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any>{
    // the class constructor assigns the initial this.state for the activeTab
      super(props);

      this.state = {
        activeTab: 'properties'
      };
    }

  }

```

The `render` method is used to call what the widget needs to display. For example, `StyledButton` uses the color variable from the `Theme` variables to style a button. `StyledBSButton` uses the button component from the Experience Builder framework. `propsTr` will return the props of the widget.   
```javascript

  render(){
    const StyledButton = styled.button`
      color: white;
      background-color: ${this.props.theme.colors.primary};
      transition: 0.15s ease-in all;
      &:hover {
        background-color: ${this.props.theme.colors.danger};
      }
    `;

    const StyledBSButton = styled(Button)`
      background-color: hotpink !important;
      border: 0 !important;
      transition: 0.15s ease-in all;
      &:hover {
        background-color: purple !important;
      }
    `;
 
    const propsTr = Object.keys(this.props).map((prop, i) => {
      if(['manifest', 'user', 'intl'].indexOf(prop) > -1
        || typeof this.props[prop] === 'string'){
        return <tr key={i}><td>{prop}</td><td>{this.props[prop] && this.props[prop].toString()}</td></tr>;
      }

      return <tr key={i}>
        <td>{prop}</td>
        <td>
          {
            JSON.stringify(this.props[prop], null, 2)
          }
        </td></tr>;
    });

   

```

The `return` statement is in the `render` method and is the output.
``` javascript
return <div className="widget-demo" style={{overflow: 'auto'}}>
      <Tabs>
        <Tab title={this.nls('widgetProperties')} active={true}>
          <br/>
          <StyledButton>A styled HTML Button</StyledButton>
          <br/>
          <br/>
          <StyledBSButton>A Re-styled Button Component</StyledBSButton>
          <br/> 
          <br/>     
      <div className="title font-weight-bold"><FormattedMessage id="widgetProps" defaultMessage={defaultMessages.widgetProps}/></div>
          <div className="content">
            <table>
              <tbody>{propsTr}</tbody>
            </table>
          </div>
        </Tab>
      </Tabs>
   </div>;
  }
}
````



