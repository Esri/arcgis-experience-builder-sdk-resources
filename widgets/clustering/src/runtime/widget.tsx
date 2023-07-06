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
import { React, type AllWidgetProps, jsx } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { Label, Checkbox, WidgetPlaceholder } from 'jimu-ui'

interface State {
  jimuMapView: JimuMapView
  clusterLayer: string
  clusterStatus: boolean
  errorTip: boolean
}

export default class Widget extends React.PureComponent<AllWidgetProps<any>, State> {
  constructor (props) {
    super(props)

    this.state = {
      jimuMapView: undefined,
      clusterLayer: undefined,
      clusterStatus: false,
      errorTip: true
    }
  }

  clusterConfig = {
    type: 'cluster',
    clusterRadius: '100px',
    popupTemplate: {
      content: 'This cluster represents <b>{cluster_count}</b> points.',
      fieldInfos: [{
        fieldName: 'cluster_count',
        format: {
          digitSeparator: true,
          places: 0
        }
      }]
    },
    clusterMinSize: '24px',
    clusterMaxSize: '60px',
    labelingInfo: [{
      deconflictionStrategy: 'none',
      labelExpressionInfo: {
        expression: "Text($feature.cluster_count, '#,###')"
      },

      labelPlacement: 'center-center'
    }]

  }

  onCheckBoxChange = (e) => {
    const valueState = e.target.value
    this.setState({
      clusterStatus: valueState
    }, () => {
      this.clusterSwitch(this.state.clusterStatus)
    })
  }

  clusterSwitch = (e) => {
    if (this.state.clusterStatus) {
      this.state.jimuMapView.jimuLayerViews[this.state.clusterLayer].layer.featureReduction = this.clusterConfig
    }
    if (!this.state.clusterStatus) { this.state.jimuMapView.jimuLayerViews[this.state.clusterLayer].layer.featureReduction = this.state.clusterStatus ? this.clusterConfig : null }
  }

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      const jimuLayerViews = jmv.jimuLayerViews
      const jimuLayerViewIds = Object.keys(jimuLayerViews)[0]
      const layerViewId = jimuLayerViewIds

      if (layerViewId === undefined) {
        jmv = null
        return
      }

      this.setState({
        jimuMapView: jmv,
        clusterLayer: jimuLayerViewIds,
        errorTip: false
      })
    } else {
      this.setState({
        jimuMapView: undefined,
        clusterLayer: undefined,
        errorTip: true,
        clusterStatus: false
      })
    }
  }

  renderWidgetPlaceholder () {
    return <WidgetPlaceholder icon={require('./assets/cluster.svg')} widgetId={this.props.id} message={'Please select a web map with a feature layer to enable point clustering.'} />
  }

  render () {
    const mapContent = <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
    let clusterContent = null
    if (this.state.errorTip || !(this.props.useMapWidgetIds && this.props.useMapWidgetIds.length > 0)) {
      clusterContent = this.renderWidgetPlaceholder()
    } else {
      clusterContent =
        <Label
          style={{ cursor: 'pointer' }} >
          <Checkbox
            checked={this.state.clusterStatus} onChange={(e) => {
              this.onCheckBoxChange({
                target: {
                  value: e.target.checked
                }
              })
            }}
          /> Cluster points </Label>
    }
    return <div style={{ height: '100%' }} className="cluster-map">
      {clusterContent}
      <div>{mapContent}</div>
    </div>
  }
}
