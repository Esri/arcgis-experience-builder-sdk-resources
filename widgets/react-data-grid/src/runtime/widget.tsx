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
import * as ReactDataGrid from 'react-data-grid'

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  private readonly columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' }
  ]

  private readonly rows = [
    { id: 0, title: 'row1', count: 20 },
    { id: 1, title: 'row1', count: 40 },
    { id: 2, title: 'row1', count: 60 }
  ]

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="widget-d3 jimu-widget p-2">
        <p>React Data Grid sample</p>
        <p>
          <ReactDataGrid
            columns={this.columns}
            rowGetter={(i) => this.rows[i]}
            rowsCount={3}
            minHeight={150}
          />
        </p>
      </div>
    )
  }
}
