import {AllWidgetProps, React} from 'jimu-core';
import './my-component';

export default function Widget(props: AllWidgetProps<{}>){
  return <div className="widget-use-web-component jimu-widget" style={{overflow: 'auto'}}>
    <div>This widget demonstrates how to use a web component.</div>
    <my-component></my-component>
  </div>;
}
