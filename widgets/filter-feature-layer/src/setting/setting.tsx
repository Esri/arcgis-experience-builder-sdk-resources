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
import { jsx, Immutable, type UseDataSource, JimuFieldType, AllDataSourceTypes } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import {
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { type IMConfig } from '../config'
import defaultI18nMessages from './translations/default'

export default function (props: AllWidgetSettingProps<IMConfig>) {
  const supportedDsTypes = Immutable([AllDataSourceTypes.FeatureLayer])
  const supportedFieldTypes = Immutable([JimuFieldType.String])

  // When the dataSource is chosen, save it to the settings.
  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    })
  }

  // When a field is chosen from the dropdown, save it to the settings.
  const fieldsListChangeHandler = (evt) => {
    if (evt && evt.length === 1) {
      props.onSettingChange({
        id: props.id,
        config: props.config.set('filterField', evt[0].name)
      })
    }
  }

  return (
    <div>
      <div className="widget-setting-get-map-coordinates">

        <SettingSection
          className="data-source-selector-section"
          title={props.intl.formatMessage({
            id: 'dataSourceSelectorLabel',
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
            />

          </SettingRow>
        </SettingSection>

        {props.useDataSources && props.useDataSources.length > 0 &&
          <SettingSection
            className="attribute-selector-section"
            title={props.intl.formatMessage({
              id: 'chooseAttributeSelectorLabel',
              defaultMessage: defaultI18nMessages.chooseAttribute
            })}
          >
            <SettingRow>
              <FieldSelector
                useDataSources={props.useDataSources}
                types={supportedFieldTypes}
                onChange={fieldsListChangeHandler}
                selectedFields={Immutable([props.config.filterField])}
                isMultiple={false}
                isSearchInputHidden={false}
                isDataSourceDropDownHidden
                useDropdown
              />
            </SettingRow>
          </SettingSection>
        }

      </div>
    </div>
  )
};
