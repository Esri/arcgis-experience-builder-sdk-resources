# Floating layout

This widget demonstrates how to create a custom layout.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

There are two folders in `src/layout`:
* contents in `builder` is used in the EXB builder.
* contents in `runtime` is used in the EXB app.

Every layout type must have a `layout-item` component and a `layout` component. The `layout-item` is the container of other widgets and the `layout` is the container of `layout-item`.

### builder/layout
A layout in the builder must implement the `DropHandlers` interface. It makes the layout a drop target when you are dragging to add or move a widget.

You should add a DropArea component in your layout. It will give you some callback functions to work with the `DropHandlers` interface.
```
<DropArea
  css={dropareaStyle}
  layouts={this.props.layouts}
  highlightDragover={!isPageItem}
  onDragEnter={this.handleDragEnter}
  onDragLeave={this.handleDragLeave}
  onDragOver={this.handleDragOver}
  onDrop={this.handleDrop}
  onToggleDragoverEffect={this.handleToggleDragoverEffect}
  isRepeat={this.props.isRepeat}
/>
```

If necessary, you can add a `canvas` component in your layout so that you can draw some highlight areas when a user drags a widget on your layout. `handleDragEnter`, `handleDragOver`, and `handleDragLeave` gives you the opportunity to draw or clean the canvas. We also prove a wrapper class named `CanvasPane` to help you draw graphics on canvas.

In the `handleDrop` method, you need to update the layout configuration in the app config. The framework provides the method `addItemToLayout` which does most of the work.

```
addWidgetToLayout = async (
  draggingItem: LayoutItemConstructorProps,
  containerRect: ClientRect,
  itemRect: ClientRect
): Promise<void> => {
  const { layout } = this.props
  const result = await addItemToLayout(
    getAppConfigAction().appConfig,
    draggingItem,
    {
      layoutId: layout.id
    },
    containerRect,
    itemRect
  )

  const { layoutInfo, updatedAppConfig } = result

  getAppStore().dispatch(
    appActions.layoutChanged(updatedAppConfig, layoutInfo)
  )
}
```

### builder/layout-item
Besides rendering a widget, a layout item in the builder must make itself draggable and resizable. The framework provides two utilities `bindDragHandler` and `bindResizeHandler`.

1. Import the interact module.
```
import { interact } from 'jimu-core/dnd'
```
2. Create an interactable instance using your HTML element.
```
interactable = interact(elementRef.current).origin('parent')
```
3. Make your element draggable. Most of the time you need not provide handlers for dragging unless you have special requirements.
```
bindDragHandler(interactable, {
  layoutId,
  layoutItemId,
  onDragging: window.jimuConfig.isInBuilder ? null : handleDragging,
  onDragEnd: handleDragEnd,
  useDragHandler: true,
  draggableAtRuntime: true,
  itemType: null,
  rootLayoutId: () => '',
  restrict: () => true
})
```
4. Make your element resizable. You must deal with resize handlers by yourself. The framework only gives you changes of size but does nothing to your HTML element. It's your duty to change the size of the layout item.
```
bindResizeHandler(interactable, {
  layoutItemId,
  restrictEdges: true,
  onResizeStart: handleResizeStart,
  onResizing: handleResizing,
  onResizeEnd: handleResizeEnd
})
```

### layout and layout-item at runtime
The easiest way to generate layout and layout-item at runtime is to remove the dragging, dropping, and resizing parts from the builder layout and layout-item. Their only purpose is to render their content.

But in this sample, the floating panel needs to be draggable and resizable at runtime. So these capabilities are kept at runtime. But the floating panel has a boundary at runtime, the layout items cannot be dragged out of it.