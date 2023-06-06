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
import { useState } from "react";

import { AllWidgetSettingProps } from "jimu-for-builder";
import {
  SettingSection,
  SettingRow,
} from "jimu-ui/advanced/setting-components";
import { DataSourceSelector, FieldSelector } from "jimu-ui/advanced/data-source-selector";
import { jsx, Immutable, UseDataSource, AllDataSourceTypes, JimuFieldType, ImmutableObject, DataSource, IMFieldSchema } from "jimu-core";

import { IMConfig } from "../config";

import defaultI18nMessages from "./translations/default";

export default function (props: AllWidgetSettingProps<IMConfig>) {

  const supportedDsTypes = Immutable([AllDataSourceTypes.FeatureLayer]);
  const [fields, setFields] = useState<ImmutableObject<{ [dataSourceId: string]: string[] }>>(null)

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

  const onFieldChange = (selectedFields: IMFieldSchema[], ds: DataSource) => {
    if (!ds) {
      return
    }

    let newFields = fields ? fields : Immutable({}) as ImmutableObject<{ [dataSourceId: string]: string[] }>
    newFields = newFields.set(ds.id, selectedFields.map(f => f.jimuName))
    setFields(newFields)

    if (selectedFields && selectedFields.length > 0) {
      props.onSettingChange({
        id: props.id,
        config: props.config.set('fields', selectedFields),
      });
    }
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
              hideDataView={true}
              isMultiple={true}
            />

          </SettingRow>
        </SettingSection>
        {props.useDataSources && props.useDataSources.length > 0 &&
          <SettingSection
            className="attribute-selector-section"
            title={props.intl.formatMessage({
              id: "fieldsSourceSelectorLabel",
              defaultMessage: defaultI18nMessages.selectFieldsSource
            })}
          >
            <SettingRow>
              <FieldSelector
                useDataSources={props.useDataSources}
                onChange={onFieldChange}
                selectedFields={fields}
                isMultiple={true}
                isSearchInputHidden={false}
                isDataSourceDropDownHidden
                useDropdown
              />
            </SettingRow>
          </SettingSection>
        }

      </div>
    </div>
  );
};