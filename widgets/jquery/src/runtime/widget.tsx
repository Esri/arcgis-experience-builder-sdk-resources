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

export default class Widget extends React.PureComponent<AllWidgetProps<{}>, any> {
  componentDidMount () {
    const data = [
      {
        label: 'node1',
        id: 1,
        children: [
          { label: 'child1', id: 2 },
          { label: 'child2', id: 3 }
        ]
      },
      {
        label: 'node2',
        id: 4,
        children: [{ label: 'child3', id: 5 }]
      }
    ]
    $('.widget-3rd-lib').tree({
      data: data,
      autoOpen: true,
      dragAndDrop: true
    })
  }

  render () {
    return <div className="widget-3rd-lib"></div>
  }
}
