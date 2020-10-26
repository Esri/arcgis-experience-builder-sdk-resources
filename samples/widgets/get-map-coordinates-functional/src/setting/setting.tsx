/** @jsx jsx */
import { React, FormattedMessage, css, jsx } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import {
  JimuMapViewSelector,
  SettingSection,
  SettingRow
} from "jimu-ui/advanced/setting-components";
import { Switch } from "jimu-ui";
import { IMConfig } from "../config";
import defaultI18nMessages from "./translations/default";

export default function (props: AllWidgetSettingProps<IMConfig>) {

  const onShowScalePropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set("showScale", evt.currentTarget.checked)
    });
  };

  const onShowZoomPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set("showZoom", evt.currentTarget.checked)
    });
  };

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

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
          title={props.intl.formatMessage({
            id: "mapWidgetLabel",
            defaultMessage: defaultI18nMessages.selectMapWidget
          })}
        >
          <SettingRow>
            <JimuMapViewSelector
              onSelect={onMapWidgetSelected}
              useMapWidgetIds={props.useMapWidgetIds}
            />
          </SettingRow>
        </SettingSection>

        <SettingSection
          title={props.intl.formatMessage({
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
                    (props.config && props.config.showZoom) || false
                  }
                  onChange={onShowZoomPropertyChange}
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
                    (props.config && props.config.showScale) ||
                    false
                  }
                  onChange={onShowScalePropertyChange}
                />
              </div>
            </div>
          </SettingRow>
        </SettingSection>
      </div>
    </div>
  );
};