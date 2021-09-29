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
import { React, AllWidgetProps, getAppStore, appActions, ReactRedux, WidgetProps, WidgetManager, WidgetState } from 'jimu-core';
import { Button, TextInput, Label, Row, Col, Select, Option } from 'jimu-ui';

/**
 * This widget will show features from a configured feature layer
 */
export default function Widget(props: AllWidgetProps<{}>) {

    const [sidebarWidgetId, setSideBarWidgetId] = useState(null as string);
    const [openCloseWidgetId, setOpenCloseWidgetId] = useState(null as string);
    const [sidebarVisible, setSideBarVisible] = useState(true as boolean);

    // Set the sidebarWidgetId property's value
    const handleSidebarWidgetIdInput = (value) => {
        setSideBarWidgetId(value);
    };
    // Set the openCloseWidgetId property's value
    const handleOpenCloseWidgetIdInput = (value) => {
        setOpenCloseWidgetId(value);
    };
    // Load the widget you are opening from within the widget controller widget
    const loadWidgetClass = (widgetId: string): Promise<React.ComponentType<WidgetProps>> => {
        if (!widgetId) return
        const isClassLoaded = getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.isClassLoaded
        if (!isClassLoaded) {
            return WidgetManager.getInstance().loadWidgetClass(widgetId)
        } else {
            return Promise.resolve(WidgetManager.getInstance().getWidgetClass(widgetId))
        }
    };
    // Toggle the sidebar widget
    const handleToggleSidebar = (): void => {
        // Get the widget state
        const widgetState =
            getAppStore().getState().widgetsState[sidebarWidgetId];
        // If widget state's collapse property is true, collapse
        if (widgetState.collapse === true) {
            getAppStore().dispatch(appActions.widgetStatePropChange(
                sidebarWidgetId,
                'collapse',
                !sidebarVisible
            ));
        }
        // If widget state's collapse property is false, expand
        if (widgetState.collapse === false) {
            getAppStore().dispatch(appActions.widgetStatePropChange(
                sidebarWidgetId,
                'collapse',
                sidebarVisible
            ));
        }
    };
    // Handle opening the widget
    const handleOpenWidget = (): void => {
        const activeControllerAction = appActions.activateWidget('widget_5');
        const activeOpenCloseAction = appActions.activateWidget(openCloseWidgetId);
        getAppStore().dispatch(activeControllerAction);
        getAppStore().dispatch(activeOpenCloseAction);
        const openAction = appActions.openWidget(openCloseWidgetId);
        const openControllerAction = appActions.openWidget('widget_5');
        loadWidgetClass('widget_5').then(() => {
            getAppStore().dispatch(openControllerAction);
            loadWidgetClass(openCloseWidgetId).then(() => {
                getAppStore().dispatch(openAction);
            });
        });
    };

    // Handle closing the widget
    const handleCloseWidget = (): void => {
        const closeAction = appActions.closeWidget(openCloseWidgetId)
        loadWidgetClass(openCloseWidgetId).then(() => {
            getAppStore().dispatch(closeAction);
        });
    };
    // Toggle opening and closing the widget
    const handleToggleOpennessButton = () => {
        // Get the widget state
        // const widgetState: WidgetState = getAppStore().getState().widgetsRuntimeInfo[this.props.id].state;
        const activeControllerAction = appActions.activateWidget('widget_5');
        const activeOpenCloseAction = appActions.activateWidget(openCloseWidgetId);
        getAppStore().dispatch(activeControllerAction && activeOpenCloseAction);
        const widgetState = getAppStore().getState().widgetsState[openCloseWidgetId];
        // Depending on the widget state, open or close the closeable widget
        if (widgetState === WidgetState.Closed || widgetState === WidgetState.Active) { handleOpenWidget() }
        else if (widgetState === WidgetState.Opened) { handleCloseWidget() }
        else { console.error() }
    };

    return (
        <div className='widget-control-the-widget-state jimu-widget m-2' style={{ width: '100%', height: '100%', maxHeight: '800px', padding: '0.5em' }}>
            <h6>Control the Widget State</h6>
            <Row className='p-2 justify-content-between'>
                <Col className='col-sm-6'>
                    <Label
                    >
                        Sidebar widget id:
                    </Label>
                    <TextInput
                        className='w-50 mb-6'
                        onAcceptValue={handleSidebarWidgetIdInput}
                        required
                        checkValidityOnAccept={(value) => ({ valid: value.includes('widget_') })}
                    />
                </Col>
                {sidebarWidgetId &&
                    <Col className='col-sm-6'>
                        <Button
                            onClick={handleToggleSidebar}
                            htmlType='submit'
                            type='primary'
                        >
                            Sidebar
                        </Button>
                    </Col>
                }
            </Row>
            {sidebarWidgetId &&
                <Row className='p-2 justify-content-between'>
                    <Col className='col-sm-6'>
                        <Label
                        >
                            Widget id within controller:
                        </Label>
                        <TextInput
                            className='w-50 mb-6'
                            onAcceptValue={handleOpenCloseWidgetIdInput}
                            required
                            checkValidityOnAccept={(value) => ({ valid: value.includes('widget_') })}
                        />
                    </Col>
                    {openCloseWidgetId &&
                        <Col className='col-sm-6'>
                            <Button
                                onClick={handleOpenWidget}
                                htmlType='submit'
                                type='primary'
                            >
                                Openness
                            </Button>
                        </Col>
                    }
                </Row>
            }
        </div>
    );
}