/** @jsx jsx */
import {
  React,
  ReactRedux,
  classNames,
  jsx,
  css,
  LayoutItemConstructorProps,
  polished,
  getAppStore,
  appActions
} from 'jimu-core'
import { styleUtils, Button } from 'jimu-ui'
import {
  utils,
  PageContext,
  PageContextProps,
  LayoutProps,
  StateToLayoutProps
} from 'jimu-layouts/layout-runtime'
import { getAppConfigAction } from 'jimu-for-builder'
import { FloatingLayoutItem } from '../common/layout-item'
import { DropHandlers, LIMITED_BOUNDARY_CLASS_NAME, DropArea, addItemToLayout, CanvasPane } from 'jimu-layouts/layout-builder'
import { ItemTitle } from '../common/item-title'

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
  pageContext: PageContextProps
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
    this.canvasPane = new CanvasPane(this.canvasRef, this.pageContext.builderTheme)
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
      this.canvasPane.setColor(
        polished.rgba(
          this.pageContext.builderTheme.colors.palette.primary[700],
          0.2
        )
      )
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
    this.addWidgetToLayout(draggingItem, containerRect, rect as any).catch(err => console.error(err))
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
      <FloatingLayoutItem
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
        onClick={(e) => this.handleMinimizedItemClick(e, layoutItemId)}
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

    return (
      <PageContext.Consumer>
        {(props: PageContextProps) => {
          this.pageContext = props

          const content = layout.order ?? []

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
              ref={el => (this.ref = el)}
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
                ref={el => (this.canvasRef = el)}
              />
              <div css={minimizedListStyle}>
                {this.state.minimizedList.map(itemId => this.createMinimizedItem(itemId))}
              </div>
            </div>
          )
        }}
      </PageContext.Consumer>
    )
  }
}

export default ReactRedux.connect<StateToLayoutProps, unknown, LayoutProps>(utils.mapStateToLayoutProps)(Layout as any)
