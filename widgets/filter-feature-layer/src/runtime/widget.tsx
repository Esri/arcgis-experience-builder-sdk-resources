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
import { AllWidgetProps, jsx, FeatureLayerDataSource, SqlQueryParams, DataSourceManager } from "jimu-core";
import { IMConfig } from "../config";
import { TextInput, WidgetPlaceholder } from 'jimu-ui';
const alertIcon = require('./assets/alert.svg');


import defaultMessages from "./translations/default";

export default function (props: AllWidgetProps<IMConfig>) {

  const textInputChangeHandler = (evt) => {
    if (props.useDataSources.length > 0) {
      // First get the DataSourceManager instance
      const dsManager = DataSourceManager.getInstance();

      // Get the data source using useDataSource.mainDataSourceId
      const useDataSource = props.useDataSources[0];
      const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.mainDataSourceId) as FeatureLayerDataSource;

      // Build the queryParams, with the configured filterField and the value
      // that has been typed into the TextInput by the user
      const queryParams: SqlQueryParams = {
        where: `${props.config.filterField} LIKE '%${evt.target.value}%'`
      };

      // Filter the data source using updateQueryParams function.
      ds.updateQueryParams(queryParams, props.id);
    }
  }

  // By default, if we have no filterField selected, show a placeholder:
  let mainContent = <WidgetPlaceholder icon={alertIcon} message={defaultMessages.chooseAttribute} />;

  if (props.config.filterField) {
    // If fieldField is selected, show the Text Input box to allow filtering.
    mainContent = <p>
      <TextInput placeholder={defaultMessages.filterLayer} onChange={(e) => { textInputChangeHandler(e); }} />
    </p>;
  };

  return (
    <div className="widget-get-map-coordinates jimu-widget m-2">
      {mainContent}
    </div>
  );
}