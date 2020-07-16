/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx, IMState } from 'jimu-core';
import {Input} from 'jimu-ui';

export default class Widget extends BaseWidget<AllWidgetProps<{}> & {a: string}, {}> {

  /**
   * Map the state your widget needs
   * @param state
   */
  static mapExtraStateProps(state: IMState){
    return {a: state.myState.a};
  }

  onChange = (evt) => {
    this.props.dispatch({
      type: 'MY_ACTION_1',
      val: evt.target.value
    });
  }

  render() {
    return (
      <div className="widget-use-redux jimu-widget m-2">
        <Input onChange={this.onChange}/>
        <div>{this.props.a}</div>
      </div>
    );
  }
}
