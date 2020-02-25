import {React, FormattedMessage} from 'jimu-core';
import {BaseWidgetSetting, AllWidgetSettingProps} from 'jimu-for-builder';
import {IMConfig} from '../config';
import defaultI18nMessages from './translations/default'

export default class Setting extends BaseWidgetSetting<AllWidgetSettingProps<IMConfig>, any>{
  onP1Change = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('p1', evt.currentTarget.value)
    });
  }

  onP2Change = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('p2', evt.currentTarget.value)
    });
  }

  render(){
    return <div className="widget-setting-demo">
      <div><FormattedMessage id="p1" defaultMessage={defaultI18nMessages.p1}/>: <input defaultValue={this.props.config.p1} onChange={this.onP1Change}/></div>
      <div><FormattedMessage id="p2" defaultMessage={defaultI18nMessages.p2}/>: <input defaultValue={this.props.config.p2} onChange={this.onP2Change}/></div>
    </div>
  }
}