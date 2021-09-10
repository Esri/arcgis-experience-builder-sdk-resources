/** @jsx jsx */

import { jsx, Immutable, UseDataSource, DataSourceManager, FeatureLayerDataSource, React } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import { Select, Option } from "jimu-ui";
import { DataSourceSelector, AllDataSourceTypes } from "jimu-ui/advanced/data-source-selector";
import {
  SettingSection,
  SettingRow
} from "jimu-ui/advanced/setting-components";
import { IMConfig } from "../config";
import defaultI18nMessages from "./translations/default";

const { useState, useEffect } = React;

export default function (props: AllWidgetSettingProps<IMConfig>) {

  const supportedDsTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer]);

  const [fields, setFields] = useState([]);

  // When the dataSource is changed, set the fields dropdown values.
  useEffect(() => {
    if (props.useDataSources && props.useDataSources.length === 1) {

      const dsManager = DataSourceManager.getInstance();
      const useDataSource = props.useDataSources[0];
      const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.mainDataSourceId) as FeatureLayerDataSource;

      const layerDefinition = ds.getLayerDefinition();
      const fields = layerDefinition.fields.filter((fieldInfo) => {
        return fieldInfo.type === 'esriFieldTypeString';
      });
      setFields(fields);
    } else {
      setFields([]);
      props.onSettingChange({
        id: props.id,
        config: props.config.set('filterField', '')
      });
    }
  }, [props.useDataSources]);

  // When the dataSource is chosen, save it to the settings.
  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    });
  }

  // When a field is chosen from the dropdown, save it to the settings.
  const fieldsListChangeHandler = (evt) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('filterField', evt.target.value)
    });
  }

  return (
    <div>
      <div className="widget-setting-get-map-coordinates">

        <SettingSection
          className="data-source-selector-section"
          title={props.intl.formatMessage({
            id: "dataSourceSelectorLabel",
            defaultMessage: defaultI18nMessages.selectDataSource
          })}
        >
          <SettingRow>
            <DataSourceSelector
              types={supportedDsTypes}
              useDataSourcesEnabled
              mustUseDataSource
              useDataSources={props.useDataSources}
              onChange={onDataSourceChange} widgetId={props.id}
            />

          </SettingRow>

          <SettingRow>
            {props.useDataSources && props.useDataSources.length > 0 &&
              <Select onChange={(e) => { fieldsListChangeHandler(e) }} value={props.config.filterField}>
                {fields.map((fieldInfo) => {
                  return <Option value={fieldInfo.name}>{fieldInfo.alias}</Option>;
                })}
              </Select>
            }
          </SettingRow>
        </SettingSection>

      </div>
    </div>
  );
};