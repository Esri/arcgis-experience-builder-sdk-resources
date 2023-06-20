/**
  Licensing

  Copyright 2022 Esri

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
import { React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingRow,
  SettingSection
} from 'jimu-ui/advanced/setting-components'
import defaultI18nMessages from './translations/default'
import { type IMConfig } from '../config'

interface IState {
  layerTextareaValue: string
}

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig>,
IState
> {
  constructor (props) {
    super(props)

    console.log(
      'TYPEOF undefined',
      // eslint-disable-next-line valid-typeof
      typeof this.props.config?.layerUrls === undefined
    )

    this.state = {
      layerTextareaValue:
        this.props.config?.layerUrls === undefined
          ? ''
          : this.props.config?.layerUrls.join('\n')
    }
  }

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  onTextChange = (event) => {
    this.setState({ layerTextareaValue: event.target.value })

    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        'layerUrls',
        event.target.value.split('\n')
      )
    })
  }

  render () {
    return (
      <div className="view-layers-toggle-setting">
        <SettingSection
          title={this.props.intl.formatMessage({
            id: 'selectedMapLabel',
            defaultMessage: defaultI18nMessages.selectedMap
          })}
        >
          <SettingRow>
            <MapWidgetSelector
              onSelect={this.onMapSelected}
              useMapWidgetIds={this.props.useMapWidgetIds}
            />
          </SettingRow>
        </SettingSection>

        <SettingSection
          title={this.props.intl.formatMessage({
            id: 'layers',
            defaultMessage: defaultI18nMessages.layers
          })}
        >
          <SettingRow>
            <textarea
              className="w-100 p-1"
              style={{ whiteSpace: 'nowrap', minHeight: '100px' }}
              value={this.state.layerTextareaValue}
              onChange={this.onTextChange}
            ></textarea>
          </SettingRow>
        </SettingSection>
      </div>
    )
  }
}
