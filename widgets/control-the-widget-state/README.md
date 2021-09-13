# Control the widget state

This widget demonstrates how to control another widget's state programatically.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

In `widget.tsx`, the end-user supplies the widget IDs of a sidebar and a closeable widget (a widget within the widget controller widget). Once provided, two bottons are presented, allowing the end user to toggle the state of the widgets programatically.

```tsx
// For the sidebar widget
// Get the widget state
const widgetState =
    getAppStore().getState().widgetsState[sidebarWidgetId];
    onsole.log(widgetState);
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

// TODO
// For the closeable widget within the widget controller widget
// Get the widget state
const widgetState = getAppStore().getState().widgetsState["widget_8"];
// Depending on the widget state, open or close the closeable widget
// if (widgetState === 'CLOSED') {handleOpenWidget(e)}
// else if (widgetSTate === 'OPEN') {handleCloseWidget(e)}
// else {console.error()}
```
