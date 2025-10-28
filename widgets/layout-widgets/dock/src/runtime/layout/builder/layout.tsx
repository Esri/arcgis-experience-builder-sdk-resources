
import {
  React,
  ReactRedux,
  classNames,
  jsx,
  css,
  polished,
  type LayoutItemConstructorProps,
  getAppStore,
  appActions
} from 'jimu-core'
import { styleUtils, Button } from 'jimu-ui'
import {
  utils,
  type LayoutProps,
  type StateToLayoutProps
} from 'jimu-layouts/layout-runtime'
import { getAppConfigAction } from 'jimu-for-builder'
import { getTheme2 } from 'jimu-theme'
import { PanelLayoutItem } from './panel-item'
import { DropArea, CanvasPane, addItemToLayout, type DropHandlers, LIMITED_BOUNDARY_CLASS_NAME } from 'jimu-layouts/layout-builder'
import { ItemTitle } from '../common/item-title'

import type { JSX } from "react";

interface State {
  activeItemId: string
  minimizedList: string[]
  isDragover: boolean
}

const dropareaStyle = css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`

const guideOverlay = css`
  ${dropareaStyle};
  pointer-events: none;
`

const minimizedListStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  div.item {
    border-radius: 5px 0;
  }
`

class Layout extends React.PureComponent<LayoutProps & StateToLayoutProps, State> implements DropHandlers {
  static displayName = 'FloatingLayout'
  ref: HTMLElement
  canvasRef: HTMLCanvasElement
  canvasPane: CanvasPane

  constructor (props) {
    super(props)

    this.state = {
      activeItemId: '',
      isDragover: false,
      minimizedList: []
    }
  }

  componentDidMount (): void {
    const theme = getTheme2()
    this.canvasPane = new CanvasPane(this.canvasRef, theme)
    this.canvasPane.setColor(
      polished.rgba(
        theme.sys.color.primary.light,
        0.2
      )
    )
  }

  handleToggleDragoverEffect = (
    value: boolean,
    draggingItem: LayoutItemConstructorProps
  ): void => {
    if (draggingItem.layoutInfo?.layoutId === this.props.layout.id) {
      return
    }
    this.canvasPane.clear()
    this.setState({
      isDragover: value
    })
  }

  handleDragOver = (
    draggingItem: LayoutItemConstructorProps,
    draggingElement: HTMLElement,
    containerRect: ClientRect,
    itemRect: ClientRect,
    clientX: number,
    clientY: number,
    speed: number
  ): void => {
    if (draggingItem.layoutInfo?.layoutId === this.props.layout.id) {
      return
    }
    this.canvasPane.clear()
    if (draggingItem.layoutInfo == null) {
      const rect: Partial<ClientRect> = {
        left: itemRect.left,
        top: itemRect.top,
        width: itemRect.width,
        height: itemRect.height
      }
      this.canvasPane.drawRect(rect)
    }
  }

  handleDragEnter = (draggingItem: LayoutItemConstructorProps): void => {
    this.canvasPane.setSize(this.ref.clientWidth, this.ref.clientHeight)
  }

  handleDragLeave = (): void => {
    this.canvasPane.clear()
  }

  handleDrop = (
    draggingItem: LayoutItemConstructorProps,
    containerRect: ClientRect,
    itemRect: ClientRect
  ): void => {
    this.canvasPane.clear()
    if (draggingItem.layoutInfo?.layoutId === this.props.layout.id) {
      const { layoutItemId: itemId } = draggingItem.layoutInfo
      const layoutItem = this.props.layout.content[itemId]
      if (layoutItem.setting?.docked) {
        const appConfigAction = getAppConfigAction()
        const bbox = layoutItem.bbox
        appConfigAction
          .editLayoutItemProperty(
            draggingItem.layoutInfo,
            'bbox',
            bbox.set('left', `${Math.round(itemRect.left)}px`).set('top', `${Math.round(itemRect.top)}px`))
          .exec()
      }
      return
    }
    const rect = {
      left: itemRect.left,
      top: itemRect.top,
      width: itemRect.width,
      height: itemRect.height,
      right: containerRect.width - (itemRect.left + itemRect.width),
      bottom: containerRect.height - (itemRect.top + itemRect.height)
    }
    this.addWidgetToLayout(draggingItem, containerRect, rect as any).catch(err => { console.error(err) })
  }

  addWidgetToLayout = async (
    draggingItem: LayoutItemConstructorProps,
    containerRect: ClientRect,
    itemRect: ClientRect
  ): Promise<void> => {
    const { layout } = this.props
    const result = await addItemToLayout(
      getAppConfigAction().appConfig,
      draggingItem,
      layout.id
    )

    const { layoutInfo, updatedAppConfig } = result

    getAppConfigAction(updatedAppConfig)
      .editLayoutItemProperty(layoutInfo, 'bbox', { left: itemRect.left - containerRect.left, top: itemRect.top - containerRect.top, width: itemRect.width, height: itemRect.height })
      .exec()
    getAppStore().dispatch(
      appActions.selectionChanged(layoutInfo)
    )
  }

  handleItemClick = (itemId: string) => {
    if (this.state.activeItemId !== itemId) {
      this.setState({ activeItemId: itemId })
    }
    const { layout } = this.props
    getAppStore().dispatch(appActions.selectionChanged({ layoutId: layout.id, layoutItemId: itemId }))
  }

  handleMinimize = (itemId: string) => {
    this.setState({ minimizedList: [].concat(this.state.minimizedList, itemId) })
  }

  handleMinimizedItemClick = (e, itemId: string) => {
    e.stopPropagation()
    const idx = this.state.minimizedList.indexOf(itemId)
    if (idx >= 0) {
      this.setState({ minimizedList: this.state.minimizedList.filter(item => item !== itemId) })
    }
  }

  createItem (layoutItemId: string): JSX.Element {
    const { layout } = this.props
    const layoutItem = layout.content[layoutItemId]
    if (!layoutItem) {
      return null
    }
    return (
      <PanelLayoutItem
        key={`${layout.id}_${layoutItemId}`}
        isActive={layoutItemId === this.state.activeItemId}
        isMinimized={this.state.minimizedList.includes(layoutItemId)}
        layoutId={layout.id}
        layoutItemId={layoutItemId}
        onClick={this.handleItemClick}
        onMinimized={this.handleMinimize}
      />
    )
  }

  createMinimizedItem (layoutItemId: string): JSX.Element {
    const { layout } = this.props
    return (
      <Button
        className='item'
        key={layoutItemId}
        onClick={(e) => { this.handleMinimizedItemClick(e, layoutItemId) }}
      >
        <ItemTitle layoutId={layout.id} layoutItemId={layoutItemId} />
      </Button>
    )
  }

  render (): JSX.Element {
    const { layout, className, style, isPageItem } = this.props
    if (layout == null) {
      return null
    }

    const content = Object.keys(layout.content).filter(layoutItemId => {
      const layoutItem = layout.content[layoutItemId]
      return !layoutItem.setting?.docked
    })

    const mergedClasses = classNames('layout floating-layout', className, {
      [LIMITED_BOUNDARY_CLASS_NAME]: layout.setting?.lockDescendants
    })

    const mergedStyle = {
      height: 'auto',
      position: 'relative',
      ...style,
      ...styleUtils.toCSSStyle(layout.setting?.style),
      width: '100%',
      overflow: 'hidden'
    }

    const guideVisibleStyle = {
      display: this.state.isDragover ? 'block' : 'none',
      zIndex: content.length + 1
    }

    return (
      <div
        className={mergedClasses}
        ref={el => {
          (this.ref = el);
        }}
        style={mergedStyle}
        data-layoutid={layout.id}
      >
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
        {(content as any).map((layoutItemId) => this.createItem(layoutItemId))}
        <canvas
          css={guideOverlay}
          style={guideVisibleStyle}
          ref={el => {
            (this.canvasRef = el);
          }}
        />
        <div className='minimized-list' css={minimizedListStyle}>
          {this.state.minimizedList.map(itemId => this.createMinimizedItem(itemId))}
        </div>
      </div>
    );
  }
}

export default ReactRedux.connect<StateToLayoutProps, unknown, LayoutProps>(utils.mapStateToLayoutProps)(Layout as any)
