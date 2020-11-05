/** @jsx jsx */
import { React, FormattedMessage, css, jsx } from "jimu-core";
import { BaseWidgetSetting, AllWidgetSettingProps } from "jimu-for-builder";
import {
  JimuMapViewSelector,
  SettingSection,
  SettingRow
} from "jimu-ui/advanced/setting-components";
import { Switch } from "jimu-ui";
import { IMConfig } from "../config";
import defaultI18nMessages from "./translations/default";

export default class Setting extends BaseWidgetSetting<
  AllWidgetSettingProps<IMConfig>,
  any
> {
  onShowScalePropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("showScale", evt.currentTarget.checked)
    });
  };

  onShowZoomPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("showZoom", evt.currentTarget.checked)
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
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
    return (
      <div css={style}>
        <div className="widget-setting-get-map-coordinates">
          <SettingSection
            className="map-selector-section"
            title={this.props.intl.formatMessage({
              id: "mapWidgetLabel",
              defaultMessage: defaultI18nMessages.selectMapWidget
            })}
          >
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
    );
  }
}
