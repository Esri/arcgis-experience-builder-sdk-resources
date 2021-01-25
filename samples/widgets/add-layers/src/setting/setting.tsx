/** @jsx jsx */
/**
  Licensing

  Copyright 2021 Esri

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
import { React, FormattedMessage, css, jsx } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import { Switch } from "jimu-ui";
import {
  JimuMapViewSelector,
  SettingSection,
  SettingRow
} from "jimu-ui/advanced/setting-components";
import { IMConfig } from "../config";
import defaultMessages from "./translations/default";

export default class Setting extends React.PureComponent<
  AllWidgetSettingProps<IMConfig>,
  any
> {
  onZoomToLayerPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("zoomToLayer", evt.currentTarget.checked)
    });
  };

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

  render() {
    const style = css`
      .widget-setting-addLayers {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
    return (
      <div css={style}>
        <div className="widget-setting-addLayers">
          <SettingSection
            className="map-selector-section"
            title={this.props.intl.formatMessage({
              id: "mapWidgetLabel",
              defaultMessage: defaultMessages.selectMapWidget
            })}
          >
            {/*
            <SettingRow>
              <div className="map-selector-descript">{this.props.intl.formatMessage({id: 'sourceDescript', defaultMessage: 'set an interactive map **'})}</div>
            </SettingRow>
            */}
            <SettingRow>
              <JimuMapViewSelector
                onSelect={this.onMapWidgetSelected}
                useMapWidgetIds={this.props.useMapWidgetIds}
              />
            </SettingRow>
          </SettingSection>

          <SettingSection
            title={this.props.intl.formatMessage({
              id: "settingsLabel",
              defaultMessage: defaultMessages.settings
            })}
          >
            <SettingRow>
              <div className="w-100 addLayers">
                <div className="checkbox-row">
                  <label>
                    <FormattedMessage
                      id="zoomToLayer"
                      defaultMessage={defaultMessages.zoomToLayer}
                    />
                  </label>
                  <Switch
                    checked={
                      (this.props.config && this.props.config.zoomToLayer) ||
                      false
                    }
                    onChange={this.onZoomToLayerPropertyChange}
                  />
                </div>
              </div>
            </SettingRow>
          </SettingSection>
        </div>
      </div>
    );
  }
}
