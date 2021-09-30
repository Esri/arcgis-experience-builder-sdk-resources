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
const { useState, useEffect, useRef } = React;
const { useSelector } = ReactRedux;
import { React, AllWidgetProps, getAppStore, appActions, ReactRedux, WidgetProps, WidgetManager, WidgetState } from 'jimu-core';
import { Button, TextInput, Label, Row, Col, Select, Option } from 'jimu-ui';

/**
 * This widget will show features from a configured feature layer
 */
export default function Widget(props: AllWidgetProps<{}>) {

    const [sidebarWidgetId, setSidebarWidgetId] = useState(null as string);
    const [openCloseWidgetId, setOpenCloseWidgetId] = useState(null as string);
    const [sidebarVisible] = useState(true as boolean);
    const [openness, setOpenness] = useState(false as boolean);
    const [appWidgets, setAppWidgets] = useState({} as Object);
    const [widgetsArray, setWidgetsArray] = useState([] as Array<any>);

    // Update the appWidgets property once, on page load
    useEffect(() => {
        const widgets = getAppStore().getState().appConfig.widgets;
        setAppWidgets(widgets);
        console.log(widgets)
    }, []);

    // Update the widgetsArray property every time appWidgets changes
    useEffect(() => {
        if (appWidgets) {
            const widgetsArray = Object.values(appWidgets);
            setWidgetsArray(widgetsArray);
        }
    }, [appWidgets]);

    // Toggle the sidebar widget
    const handleToggleSidebar = (): void => {
        // Get the widget state
        const widgetState =
            getAppStore().getState().widgetsState[sidebarWidgetId];
        // If widget state's collapse property is true, collapse
        if (widgetState && widgetState.collapse === true) {
            getAppStore().dispatch(appActions.widgetStatePropChange(
                sidebarWidgetId,
                'collapse',
                !sidebarVisible
            ));
        }
        // If widget state's collapse property is false, expand
        else if (widgetState && widgetState.collapse === false) {
            getAppStore().dispatch(appActions.widgetStatePropChange(
                sidebarWidgetId,
                'collapse',
                sidebarVisible
            ));
        }
        else {
            alert(
                'You must select a collapsable sidebar widget.'
            )
        }
    };

    // Load the widget class prior to executing the open/close actions
    const loadWidgetClass = (widgetId: string): Promise<React.ComponentType<WidgetProps>> => {
        if (!widgetId) return
        const isClassLoaded = getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.isClassLoaded
        if (!isClassLoaded) {
            return WidgetManager.getInstance().loadWidgetClass(widgetId)
        } else {
            return Promise.resolve(WidgetManager.getInstance().getWidgetClass(widgetId))
        }
    };

    // Open widget method
    const handleOpenWidget = (): void => {
        // Construct the open action, then run the loadWidgetClass method, dipatch the open action
        // and, finally, set the openness to true
        const openAction = appActions.openWidget(openCloseWidgetId);
        loadWidgetClass(openCloseWidgetId).then(() => {
            getAppStore().dispatch(openAction);
        }).then(() => { setOpenness(true) });
    };

    // Close widget method
    const handleCloseWidget = (): void => {
        // Construct the close action, then run the loadWidgetClass function, dipatch the close action
        // and, finally, set the openness to false
        const closeAction = appActions.closeWidget(openCloseWidgetId);
        loadWidgetClass(openCloseWidgetId).then(() => {
            getAppStore().dispatch(closeAction);
        }).then(() => { setOpenness(false) });
    };

    // Handler for the openness toggle button
    const handleToggleOpennessButton = (): void => {
        // Check the openness property value and run the appropriate function 
        if (openness === false) { handleOpenWidget() }
        else if (openness === true) { handleCloseWidget() }
        else { console.error('Something went wrong with toggling widget openness.') }
    };

    // Handler for the sidebar selection
    const handleSidebarSelect = evt => {
        setSidebarWidgetId(evt.currentTarget.value);
        // return;
    };

    // Handler for the open/close selection
    const handleOpenCloseSelect = evt => {
        setOpenCloseWidgetId(evt.currentTarget.value);
        // return;
    }

    return (
        <div className='widget-control-the-widget-state jimu-widget m-2' style={{ width: '100%', height: '100%', maxHeight: '800px', padding: '0.5em' }}>
            <h6>Control the Widget State</h6>
            <Row className='p-2 justify-content-between'>
                <Col className='col-sm-6'>
                    <Label
                    >
                        Collapsable sidebar widget:
                    </Label>
                    <Select
                        defaultValue=''
                        onChange={handleSidebarSelect}
                        placeholder='Select a sidebar widget'
                    >
                        {/* Filter the options to only sidebar widgets */}
                        {
                            widgetsArray.map((w) =>
                                w.uri === 'widgets/layout/sidebar/' ? (
                                    <Option
                                        value={w.id}
                                    >
                                        {w.label}
                                    </Option>
                                ) : '')
                        }
                    </Select>
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
                            Widget within controller widget:
                        </Label>
                        <Select
                            defaultValue=''
                            onChange={handleOpenCloseSelect}
                            placeholder='Select a Sidebar Widget'
                        >
                            {
                                widgetsArray.map((w) => (
                                    <Option
                                        value={w.id}
                                    >
                                        {w.label}
                                    </Option>
                                ))
                            }
                        </Select>
                    </Col>
                    {openCloseWidgetId &&
                        <Col className='col-sm-6'>
                            <Button
                                onClick={handleToggleOpennessButton}
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