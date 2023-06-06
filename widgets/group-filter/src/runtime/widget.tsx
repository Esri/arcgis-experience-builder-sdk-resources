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
import { useEffect, useState } from "react";

import { FilterOutlined } from 'jimu-icons/outlined/editor/filter';
import { AdvancedSelect, Option, Select } from 'jimu-ui';
import { AllWidgetProps, jsx, FeatureLayerDataSource, SqlQueryParams, DataSourceManager } from "jimu-core";

import { IMConfig, ObjectType } from "../config";

import defaultMessages from "./translations/default";

export default function (props: AllWidgetProps<IMConfig>) {

  const [fieldValue, setFieldValue] = useState<string>(null)
  const [valuesData, setValuesData] = useState<ObjectType[]>(null);
  const [values, setValues] = useState<ObjectType[]>(null)

  useEffect(() => {
    if (props.useDataSources && props.useDataSources.length > 0 && fieldValue) {
      // First get the DataSourceManager instance
      const dsManager = DataSourceManager.getInstance();

      // Get the data source using useDataSource.dataSourceId
      props.useDataSources.forEach(el => {

        const ds: FeatureLayerDataSource = dsManager.getDataSource(el.dataSourceId) as FeatureLayerDataSource;

        if (dsManager.getDataSourcesAsArray().length > 0)
          ds.layer.queryFeatures({
            outFields: [fieldValue],
            returnDistinctValues: true,
            where: '1=1',
            returnGeometry: false
          }).then((result) => {
            setValuesData(
              result.features.map(el => ({
                label: el.attributes[fieldValue],
                value: el.attributes[fieldValue]
              }))
            )
            setValues([])
          });
      })
    }
  }, [fieldValue])

  useEffect(() => {
    if (props.useDataSources && props.useDataSources.length > 0 && fieldValue) {
      // First get the DataSourceManager instance
      const dsManager = DataSourceManager.getInstance();

      // Get the data source using useDataSource.dataSourceId
      props.useDataSources.forEach(el => {

        const ds: FeatureLayerDataSource = dsManager.getDataSource(el.dataSourceId) as FeatureLayerDataSource;

        let queryParams: SqlQueryParams;

        if (!values) queryParams = {
          where: '1=1'
        }
        else if (values.length > 0) {
          const valuesToInclude = [];
          values.forEach(el => valuesToInclude.push(`'${el.value}'`))
          queryParams = {
            where: `${fieldValue} IN (${valuesToInclude})`
          }
        }

        if (dsManager.getDataSourcesAsArray().length > 0)
          // Filter the data source using updateQueryParams function.
          ds.updateQueryParams(queryParams, props.id);
      })
    }
  }, [values])

  return (
    <div className="jimu-widget p-2">
      <h1 style={{ fontSize: '14px' }}><FilterOutlined className="mr-1" />{defaultMessages.widgetTitle}</h1>
      <Select className="mb-1" placeholder={defaultMessages.select} onChange={(e) => setFieldValue(e.target.value)}>
        {props.config.fields && props.config.fields.map((el) => (<Option value={el.name}>{el.alias}</Option>))}
      </Select>
      {valuesData && <AdvancedSelect
        onChange={(values) => setValues(values as ObjectType[])}
        selectedValues={values}
        staticValues={valuesData}
        isMultiple
      />}

    </div>
  );
}