/** @jsx jsx */
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
import { React, FormattedMessage, css, jsx } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { Switch } from 'jimu-ui'
import { type IMConfig } from '../config'
import defaultI18nMessages from './translations/default'

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig>,
any
> {
  onShowScalePropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('showScale', evt.currentTarget.checked)
    })
  }

  onShowZoomPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('showZoom', evt.currentTarget.checked)
    })
  }

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  render () {
    const style = css`
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `
    return (
      <div css={style}>
        <div className="widget-setting-get-map-coordinates">
          <SettingSection
            className="map-selector-section"
            title={this.props.intl.formatMessage({
              id: 'mapWidgetLabel',
              defaultMessage: defaultI18nMessages.selectMapWidget
            })}
          >
            <SettingRow>
              <MapWidgetSelector
                onSelect={this.onMapWidgetSelected}
                useMapWidgetIds={this.props.useMapWidgetIds}
              />
            </SettingRow>
          </SettingSection>

          <SettingSection
            title={this.props.intl.formatMessage({
              id: 'settingsLabel',
              defaultMessage: defaultI18nMessages.settings
            })}
          >
            <SettingRow>
              <div className="w-100 showZoom">
                <div className="checkbox-row">
                  <label>
                    <FormattedMessage
                      id="showZoom"
                      defaultMessage={defaultI18nMessages.showZoom}
                    />
                  </label>
                  <Switch
                    checked={
                      (this.props.config && this.props.config.showZoom) || false
                    }
                    onChange={this.onShowZoomPropertyChange}
                  />
                </div>
              </div>
            </SettingRow>

            <SettingRow>
              <div className="w-100 showScale">
                <div className="checkbox-row">
                  <label>
                    <FormattedMessage
                      id="showScale"
                      defaultMessage={defaultI18nMessages.showScale}
                    />
                  </label>
                  <Switch
                    checked={
                      (this.props.config && this.props.config.showScale) ||
                      false
                    }
                    onChange={this.onShowScalePropertyChange}
                  />
                </div>
              </div>
            </SettingRow>
          </SettingSection>
        </div>
      </div>
    )
  }
}
