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
import { React, Immutable, DataSourceManager } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import { ArcGISDataSourceTypes } from 'jimu-arcgis'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<unknown>, unknown> {
  supportedTypes = Immutable([ArcGISDataSourceTypes.WebMap])
  dsManager = DataSourceManager.getInstance()

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  render () {
    return <div className="sample-use-map-view-setting p-2">
      <MapWidgetSelector onSelect={this.onMapSelected} useMapWidgetIds={this.props.useMapWidgetIds}/>
    </div>
  }
}
