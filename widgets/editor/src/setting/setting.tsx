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
import defaultMessages from './translations/default'
import {
  MapWidgetSelector,
  SettingSection
} from 'jimu-ui/advanced/setting-components'

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<unknown>,
any
> {
  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  render () {
    return (
      <div className="widget-setting-js-api-widget">
        <SettingSection
          className="map-selector-section"
          title={this.props.intl.formatMessage({
            id: 'selectMapWidget',
            defaultMessage: defaultMessages.selectMapWidget
          })}
        >
          <MapWidgetSelector
            onSelect={this.onMapWidgetSelected}
            useMapWidgetIds={this.props.useMapWidgetIds}
          />
        </SettingSection>
      </div>
    )
  }
}
