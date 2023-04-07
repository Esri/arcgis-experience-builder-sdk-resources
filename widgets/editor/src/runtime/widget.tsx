/* eslint-disable no-prototype-builtins */
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
/** @jsx jsx */
import { type AllWidgetProps, jsx, React } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import Editor from 'esri/widgets/Editor'

interface State {
  jimuMapView: JimuMapView
  currentWidget: Editor
}

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>, State> {
  private readonly myRef = React.createRef<HTMLDivElement>()

  constructor (props) {
    super(props)
    this.state = {
      jimuMapView: null,
      currentWidget: null
    }
  }

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (this.state.jimuMapView) {
      if (this.state.currentWidget) {
        this.state.currentWidget.destroy()
      }
    }

    if (jmv) {
      this.setState({
        jimuMapView: jmv
      })

      if (this.myRef.current) {
        const newEditor = new Editor({
          view: jmv.view,
          container: this.myRef.current
        })

        this.setState({
          currentWidget: newEditor
        })
      } else {
        console.error('could not find this.myRef.current')
      }
    }
  }

  componentDidUpdate = evt => {
    if (this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 0) {
      if (this.state.currentWidget) {
        this.state.currentWidget.destroy()
      }
    }
  }

  render () {
    let mvc = <p>Please select a map.</p>

    const css = `
    .esri-editor__scroller {
        overflow-y: auto;
        padding-top: $cap-spacing--half;
        padding-bottom: $cap-spacing;
      }
      .esri-editor__content-group {
        max-height: 1em;
      }

      `
    if (
      this.props.hasOwnProperty('useMapWidgetIds') &&
      this.props.useMapWidgetIds &&
      this.props.useMapWidgetIds[0]
    ) {
      mvc = (
        <JimuMapViewComponent
          useMapWidgetId={this.props.useMapWidgetIds?.[0]}
          onActiveViewChange={this.activeViewChangeHandler}
        />
      )
    }

    return (
      <div
        className="widget-js-api-editor"
        style={{ height: '100%', overflow: 'auto' }}
      >
        <div ref={this.myRef}>
          <style>
            {css}
          </style>
        </div>
        {mvc}
      </div>
    )
  }
}
