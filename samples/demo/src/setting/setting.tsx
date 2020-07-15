/**
  Licensing

  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import {React, FormattedMessage} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
import {IMConfig} from '../config';
import defaultI18nMessages from './translations/default'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig>, any>{
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