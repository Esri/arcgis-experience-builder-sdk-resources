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
import {React, FormattedMessage, defaultMessages as jimuCoreDefaultMessage, AllWidgetProps, css, jsx, styled} from 'jimu-core';
import {IMConfig} from '../config';
import { Tabs, Tab, Button} from 'jimu-ui';
import defaultMessages from './translations/default';

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any>{
  nls = (id: string) => {
    return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }) : id;
  }

  render(){
    const styleLiteral = css`
      color: ${this.props.theme.colors.danger};
      font-size: 1.25rem;
    `;

    const styleObject = {
      backgroundColor: this.props.theme.colors.palette.light[500],
      padding: '1rem'
    };

    const StyledButton = styled.button`
      color: white;
      background-color: ${this.props.theme.colors.primary};
      transition: 0.15s ease-in all;
      &:hover {
        background-color: ${this.props.theme.colors.danger};
      }
    `;

    const StyledBSButton = styled(Button)`
      background-color: hotpink !important;
      border: 0 !important;
      transition: 0.15s ease-in all;
      &:hover {
        background-color: purple !important;
      }
    `;

    const styleTag = `
      .danger-color {
        color: red;
      }
    `;

    const rtlStyle = css`
      border: solid 1px;
      width: 100px;
      padding-left: 20px;
    `;

    const propsTr = Object.keys(this.props).map((prop, i) => {
      if(['manifest', 'user', 'intl'].indexOf(prop) > -1
        || typeof this.props[prop] === 'string'){
        return <tr key={i}><td>{prop}</td><td>{this.props[prop] && this.props[prop].toString()}</td></tr>;
      }

      return <tr key={i}>
        <td>{prop}</td>
        <td>
          {
            JSON.stringify(this.props[prop], null, 2)
          }
        </td></tr>;
    });

    return <div className="widget-demo jimu-widget" style={{overflow: 'auto'}}>
      <Tabs>
        <Tab id="widgetProperties" title={this.nls('widgetProperties')} defaultActive={true}>
          <div className="title font-weight-bold">NLS messages from jimu-core (OK)</div>
          <div className="content"><FormattedMessage id="ok" defaultMessage={jimuCoreDefaultMessage.ok}></FormattedMessage></div>
          <hr/>
          {/* demo how to use theme variables */}
          <div css={styleLiteral}><span css={styleObject}>Theme danger color</span></div>
          <br/>

          <StyledButton>A styled HTML Button</StyledButton>
          <br/>
          <br/>

          <StyledBSButton>A Re-styled Button Component</StyledBSButton>
          <br/>
          <br/>

          <div css={rtlStyle}>right to left demo</div>
          <br/>
          <br/>

          <style>
            {styleTag}
          </style>
          <p className="danger-color">
            Text color is from a named CSS class
          </p>
          {/* demo how to format string by call API */}
          <div className="title font-weight-bold"><FormattedMessage id="widgetName" defaultMessage={defaultMessages.widgetName}/></div>
          <div className="content">{this.props.intl.formatMessage({id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel})}</div>

          <div className="title font-weight-bold"><FormattedMessage id="widgetProps" defaultMessage={defaultMessages.widgetProps}/></div>
          <div className="content">
            <table>
              <tbody>{propsTr}</tbody>
            </table>
          </div>
        </Tab>
        <Tab id="widgetFunctions" title={this.nls('widgetFunctions')}>
          <p>TODO</p>
        </Tab>
      </Tabs>
    </div>;
  }
}
