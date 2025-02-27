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
import { React, FormattedMessage } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import type { IMConfig } from '../config'
import defaultI18nMessages from './translations/default'

export default function Setting(props: AllWidgetSettingProps<IMConfig>) {
  const onP1Change = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('p1', evt.currentTarget.value)
    })
  }

  const onP2Change = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('p2', evt.currentTarget.value)
    })
  }

  return <div className="widget-setting-demo">
    <div><FormattedMessage id="p1" defaultMessage={defaultI18nMessages.p1} />: <input defaultValue={props.config.p1} onChange={onP1Change} /></div>
    <div><FormattedMessage id="p2" defaultMessage={defaultI18nMessages.p2} />: <input defaultValue={props.config.p2} onChange={onP2Change} /></div>
  </div>

}
