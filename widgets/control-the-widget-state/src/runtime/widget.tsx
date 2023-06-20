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
import { React, type AllWidgetProps, getAppStore, appActions, ReactRedux, type WidgetProps, WidgetManager, type IMState } from 'jimu-core'
import { Button, Label, Row, Col, Select, Option } from 'jimu-ui'
import defaultMessages from './translations/default'
const { useState, useEffect } = React
const { useSelector } = ReactRedux

/**
 * This widget will show how to control widget state for a collapsible sidebar widget and a widget within the widget controller widget.
 */
export default function Widget (props: AllWidgetProps<unknown>) {
  // Establish state properties, initial values and their corresponding set state actions
  const [sidebarWidgetId, setSidebarWidgetId] = useState(null as string)
  const [openCloseWidgetId, setOpenCloseWidgetId] = useState(null as string)
  const [sidebarVisible] = useState(true as boolean)
  const [openness, setOpenness] = useState(false as boolean)
  const [appWidgets, setAppWidgets] = useState({} as unknown)
  const [widgetsArray, setWidgetsArray] = useState([] as any[])
  const [sidebarWidgetsArray, setSidebarWidgetsArray] = useState([] as any[])
  // Get the widget state - because the sidebar state may change in the runtime, via Redux's useSelector hook
  const widgetState = useSelector((state: IMState) => {
    const widgetState = state.widgetsState[sidebarWidgetId]
    return widgetState
  })

  // Update the appWidgets property once, on page load
  useEffect(() => {
    const widgets = getAppStore().getState().appConfig.widgets
    setAppWidgets(widgets)
  }, [])

  // Update the widgetsArray and sidebarWidgetsArray properties every time appWidgets changes
  useEffect(() => {
    if (appWidgets) {
      const widgetsArray = Object.values(appWidgets)
      setWidgetsArray(widgetsArray)
      setSidebarWidgetsArray(widgetsArray.filter(w => w.uri === 'widgets/layout/sidebar/'))
    }
  }, [appWidgets])

  // Toggle the sidebar widget
  const handleToggleSidebar = (): void => {
    // If widget state's collapse property is true, collapse
    if (widgetState && widgetState.collapse === true) {
      getAppStore().dispatch(appActions.widgetStatePropChange(
        sidebarWidgetId,
        'collapse',
        !sidebarVisible
      ))
    // If widget state's collapse property is false, expand
    } else if (widgetState && widgetState.collapse === false) {
      getAppStore().dispatch(appActions.widgetStatePropChange(
        sidebarWidgetId,
        'collapse',
        sidebarVisible
      ))
    } else {
      alert(
        defaultMessages.sidebarAlert
      )
    }
  }

  // Load the widget class prior to executing the open/close actions
  const loadWidgetClass = (widgetId: string): Promise<React.ComponentType<WidgetProps>> => {
    if (!widgetId) return
    const isClassLoaded = getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.isClassLoaded
    if (!isClassLoaded) {
      return WidgetManager.getInstance().loadWidgetClass(widgetId)
    } else {
      return Promise.resolve(WidgetManager.getInstance().getWidgetClass(widgetId))
    }
  }

  // Open widget method
  const handleOpenWidget = (): void => {
    // Construct the open action, then run the loadWidgetClass method, dipatch the open action
    // and, finally, set the openness to true
    const openAction = appActions.openWidget(openCloseWidgetId)
    loadWidgetClass(openCloseWidgetId).then(() => {
      getAppStore().dispatch(openAction)
    }).then(() => { setOpenness(true) })
  }

  // Close widget method
  const handleCloseWidget = (): void => {
    // Construct the close action, then run the loadWidgetClass function, dipatch the close action
    // and, finally, set the openness to false
    const closeAction = appActions.closeWidget(openCloseWidgetId)
    loadWidgetClass(openCloseWidgetId).then(() => {
      getAppStore().dispatch(closeAction)
    }).then(() => { setOpenness(false) })
  }

  // Handler for the openness toggle button
  const handleToggleOpennessButton = (): void => {
    // Check the openness property value and run the appropriate function
    if (!openness) { handleOpenWidget() } else if (openness) { handleCloseWidget() } else { console.error(defaultMessages.opennessError) }
  }

  // Handler for the sidebar selection
  const handleSidebarSelect = evt => {
    setSidebarWidgetId(evt.currentTarget.value)
  }

  // Handler for the open/close selection
  const handleOpenCloseSelect = evt => {
    setOpenCloseWidgetId(evt.currentTarget.value)
  }

  return (
        <div className='widget-control-the-widget-state jimu-widget m-2' style={{ width: '100%', height: '100%', maxHeight: '800px', padding: '0.5em' }}>
            <h6
                title={defaultMessages.title}
            >
                {defaultMessages.title}
            </h6>
            {sidebarWidgetsArray && sidebarWidgetsArray.length > 0 &&
                <Row className='p-2 justify-content-between align-items-center'>
                    <Col className='col-sm-6'>
                        <Label
                            title={defaultMessages.sidebarLabel}
                        >
                            {defaultMessages.sidebarLabel}
                        </Label>

                        <Select
                            defaultValue=''
                            onChange={handleSidebarSelect}
                            placeholder={defaultMessages.sidebarPlaceholder}
                            title={defaultMessages.sidebarPlaceholder}
                        >
                            {/* Use the sidebarWidgetsArray to populate the select's options */}
                            {
                                sidebarWidgetsArray.map((w) => <Option
                                    value={w.id}
                                >
                                    {w.label}
                                </Option>)
                            }
                        </Select>

                    </Col>
                    {sidebarWidgetId &&
                        <Col className='col-sm-6'>
                            <Button
                                onClick={handleToggleSidebar}
                                htmlType='submit'
                                type='primary'
                                title={defaultMessages.sidebarButtonLabel}
                            >
                                {defaultMessages.sidebarButtonLabel}
                            </Button>
                        </Col>
                    }
                </Row>
            }

            {widgetsArray && widgetsArray.length > 0 &&
                <Row className='p-2 justify-content-between align-items-center'>
                    <Col className='col-sm-6'>
                        <Label
                            title={defaultMessages.widgetControllerWidgetLabel}
                        >
                            {defaultMessages.widgetControllerWidgetLabel}
                        </Label>
                        <Select
                            defaultValue=''
                            onChange={handleOpenCloseSelect}
                            placeholder={defaultMessages.widgetControllerWidgetPlaceholder}
                            title={defaultMessages.widgetControllerWidgetPlaceholder}
                        >
                            {/* Use the widgetsArray to populate the select's options */}
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
                                title={defaultMessages.widgetControllerWidgetButton}
                            >
                                {defaultMessages.widgetControllerWidgetButton}
                            </Button>
                        </Col>
                    }
                </Row>
            }
        </div>
  )
};
