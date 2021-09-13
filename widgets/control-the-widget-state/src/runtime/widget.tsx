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
// import { React, IMDataSourceInfo, DataSource, DataSourceManager, DataSourceStatus, FeatureLayerQueryParams, AllWidgetProps, DataSourceComponent } from 'jimu-core';
const { useState, useEffect, useRef } = React;
const { useSelector } = ReactRedux;
import { React, AllWidgetProps, getAppStore, appActions, jsx, Immutable, WidgetState, ImmutableObject, ReactRedux, IMState } from 'jimu-core';
import { IMConfig } from '../config';
import { Button, TextInput, Label, Row, Col } from 'jimu-ui';
import widget from 'esri/widgets/support/widget';
import { IMWidgetState } from 'dist/widgets/common/text/src/config';

/**
 * This widget will show features from a configured feature layer
 */
export default function Widget(props: AllWidgetProps<{}>) {

    const [sidebarWidgetId, setSideBarWidgetId] = useState(null as string);
    const [openCloseWidgetId, setOpenCloseWidgetId] = useState(null as string);
    const [sidebarVisible, setSideBarVisible] = useState(true as boolean);

    const handleSidebarWidgetIdInput = (value) => {
        setSideBarWidgetId(value);
    };

    const handleOpenCloseWidgetIdInput = (value) => {
        setOpenCloseWidgetId(value);
    };

    const handleToggleSidebar = (e): void => {
        e.stopPropagation();
        // Get the widget state
        const widgetState =
            getAppStore().getState().widgetsState[sidebarWidgetId];
        console.log(widgetState);
        // If widget can be collapsed, collapse
        if (widgetState.collapse === true) {
            getAppStore().dispatch(appActions.widgetStatePropChange(
                sidebarWidgetId,
                'collapse',
                !setSideBarVisible
            ));
        }
        // If widget cannot be collapsed, expand
        if (widgetState.collapse === false) {
            getAppStore().dispatch(appActions.widgetStatePropChange(
                sidebarWidgetId,
                'expanded',
                !setSideBarVisible
            ));
        }
    };

    const handleOpenWidget = (e): void => {
        e.stopPropagation();
        const activeAction = appActions.activateWidget("widget_8");
        const openAction = appActions.openWidget("widget_8");
        getAppStore().dispatch(activeAction);
        getAppStore().dispatch(openAction);
    };

    const handleCloseWidget = (e): void => {
        e.stopPropogation();
        const activeAction = appActions.activateWidget("widget_8");
        const closeAction = appActions.closeWidget("widget_8");
        getAppStore().dispatch(activeAction);
        getAppStore().dispatch(closeAction);
    };

    const handleToggleOpennessButton = (e) => {
        e.preventDefault();
        // Get the widget state
        // const widgetsState = useSelector((state: IMState) => state.widgetsState["widget_8"]);
        // const widgetState = state.widgetsState["widget_8"] || Immutable({});
        // const widgetState: IMWidgetState = getAppStore().getState().widgetsState["widget_8"] || Immutable({});
        // const widgetState: WidgetState = getAppStore().getState().widgetsState["widget_8"];
        const widgetState = getAppStore().getState().widgetsState["widget_8"];
        console.log('WIDGETSTATE: ', widgetState);
        // Depending on the widget state, open or close the closeable widget
        // if (widgetState === 'CLOSED') {handleOpenWidget(e)}
        // else if (widgetSTate === 'OPEN') {handleCloseWidget(e)}
        // else {console.error()}
        handleOpenWidget(e);
    };

    const handleSideBarButton = (e) => {
        e.preventDefault();
        // const widgets = getAppStore().getState().appConfig.widgets;
        // console.log(widgets);
        handleToggleSidebar(e);
    };

    return (
        <div className="widget-control-the-widget-state jimu-widget m-2" style={{ width: '100%', height: '100%', maxHeight: '800px', padding: '0.5em' }}>
            <h6>Control the Widget State</h6>
            <Row>
                <Label
                    className='w-25 mb-0'
                    size="sm"
                >
                    Enter a widget id for a sidebar widget:
                </Label>
                <TextInput
                    className='w-25 mb-3'
                    onAcceptValue={handleSidebarWidgetIdInput}
                    size="sm"
                    required
                    checkValidityOnAccept={(value) => ({ valid: value.includes("widget_") })}
                />
            </Row>
            {sidebarWidgetId &&
                <Row>
                    <Label
                        className='w-25 mb-0'
                        size="sm"
                    >
                        Enter a widget id for widget within the widget controller widget:
                    </Label>
                    <TextInput
                        className='w-25 mb-3'
                        onAcceptValue={handleOpenCloseWidgetIdInput}
                        size="sm"
                        required
                        checkValidityOnAccept={(value) => ({ valid: value.includes("widget_") })}
                    />
                </Row>
            }
            {openCloseWidgetId && sidebarWidgetId &&
                <Row>
                    <Col
                        xs
                    >
                        <Button
                            onClick={handleSideBarButton}
                            htmlType="submit"
                            type="primary"
                            className='mr-2'
                        >
                            Toggle Sidebar Openness
                        </Button>
                    </Col>
                    <Col
                        xs
                    >
                        <Button
                            onClick={handleToggleOpennessButton}
                            htmlType="submit"
                            type="primary"
                            className='mr-2'
                        >
                            Toggle Oppenness of Widget
                        </Button>
                    </Col>
                </Row>
            }
        </div>
    );
}