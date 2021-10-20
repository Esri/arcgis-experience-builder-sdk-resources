# Control the widget state

This widget demonstrates how to control another widget's state programmatically. This sample needs to be used in an Experience that, at minimum, has a sidebar widget or a controller widget with at least one widget within it.

---

**NOTE**

Controlling the opening and closing of a widget within the widget controller widget will only work with developer edition 1.6+.

---

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `widget.tsx`, the end-user selects a collapsible sidebar widget and a widget within the widget controller widget. As each are selected, a corresponding action button is presented, allowing the end-user to toggle the state of the widget programmatically.

### For the sidebar widget

```tsx
// Get the widget state - because the sidebar state may change in the runtime, via Redux's useSelector hook
const widgetState = useSelector((state: IMState) => {
  const widgetState = state.widgetsState[sidebarWidgetId];
  return widgetState;
});

// Toggle the sidebar widget
const handleToggleSidebar = (): void => {
  // If widget state's collapse property is true, collapse
  if (widgetState && widgetState.collapse === true) {
    getAppStore().dispatch(
      appActions.widgetStatePropChange(
        sidebarWidgetId,
        "collapse",
        !sidebarVisible
      )
    );
  }
  // If widget state's collapse property is false, expand
  else if (widgetState && widgetState.collapse === false) {
    getAppStore().dispatch(
      appActions.widgetStatePropChange(
        sidebarWidgetId,
        "collapse",
        sidebarVisible
      )
    );
  } else {
    alert(defaultMessages.sidebarAlert);
  }
};
```

### For the widget within the widget controller

```tsx
// Load the widget class prior to executing the open/close actions
const loadWidgetClass = (
  widgetId: string
): Promise<React.ComponentType<WidgetProps>> => {
  if (!widgetId) return;
  const isClassLoaded =
    getAppStore().getState().widgetsRuntimeInfo?.[widgetId]?.isClassLoaded;
  if (!isClassLoaded) {
    return WidgetManager.getInstance().loadWidgetClass(widgetId);
  } else {
    return Promise.resolve(
      WidgetManager.getInstance().getWidgetClass(widgetId)
    );
  }
};

// Open widget method
const handleOpenWidget = (): void => {
  // Construct the open action, then run the loadWidgetClass method, dipatch the open action
  // and, finally, set the openness to true
  const openAction = appActions.openWidget(openCloseWidgetId);
  loadWidgetClass(openCloseWidgetId)
    .then(() => {
      getAppStore().dispatch(openAction);
    })
    .then(() => {
      setOpenness(true);
    });
};

// Close widget method
const handleCloseWidget = (): void => {
  // Construct the close action, then run the loadWidgetClass function, dipatch the close action
  // and, finally, set the openness to false
  const closeAction = appActions.closeWidget(openCloseWidgetId);
  loadWidgetClass(openCloseWidgetId)
    .then(() => {
      getAppStore().dispatch(closeAction);
    })
    .then(() => {
      setOpenness(false);
    });
};

// Handler for the openness toggle button
const handleToggleOpennessButton = (): void => {
  // Check the openness property value and run the appropriate function
  if (openness === false) {
    handleOpenWidget();
  } else if (openness === true) {
    handleCloseWidget();
  } else {
    console.error("Something went wrong with toggling widget openness.");
  }
};
```
