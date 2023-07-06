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
import { type AllWidgetProps, React, type IMState, FormattedMessage } from 'jimu-core'
import { type IMConfig } from '../config'
import defaultMessage from './translations/default'

interface ExtraProps {
  locale: string
}

export default function Widget (props: AllWidgetProps<IMConfig> & ExtraProps) {
  return <div className="widget-demo-function jimu-widget" style={{ overflow: 'auto' }}>
    This widget demonstrates creating a functional component.
    <div>
      config: {JSON.stringify(props.config)}
    </div>
    <div>
      locale: {props.locale}
    </div>
    <div>
      i18n: <FormattedMessage id="str1" defaultMessage={defaultMessage.str1}></FormattedMessage>
    </div>
  </div>
}

Widget.mapExtraStateProps = (state: IMState, ownProps: AllWidgetProps<IMConfig>): ExtraProps => {
  return {
    locale: state.appContext.locale
  }
}
