
import {
  React,
  ReactRedux,
  classNames,
  jsx,
  css
} from 'jimu-core'
import { styleUtils, Button } from 'jimu-ui'
import {
  utils,
  type LayoutProps,
  type StateToLayoutProps
} from 'jimu-layouts/layout-runtime'
import { PanelLayoutItem } from './panel-item'
import { ItemTitle } from '../common/item-title'

import type { JSX } from "react";

interface State {
  activeItemId: string
  minimizedList: string[]
}

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

class Layout extends React.PureComponent<LayoutProps & StateToLayoutProps, State> {
  static displayName = 'FloatingLayout'
  ref: HTMLElement

  constructor (props) {
    super(props)

    this.state = {
      activeItemId: '',
      minimizedList: []
    }
  }

  handleItemClick = (itemId: string) => {
    if (this.state.activeItemId !== itemId) {
      this.setState({ activeItemId: itemId })
    }
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
    const { layout, className, style } = this.props
    if (layout == null) {
      return null
    }

    const content = Object.keys(layout.content).filter(layoutItemId => {
      const layoutItem = layout.content[layoutItemId]
      return !layoutItem.setting?.docked
    })

    const mergedClasses = classNames('layout floating-layout', className)

    const mergedStyle = {
      height: 'auto',
      position: 'relative',
      ...style,
      ...styleUtils.toCSSStyle(layout.setting?.style),
      width: '100%',
      overflow: 'hidden'
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
        {(content as any).map((layoutItemId) => this.createItem(layoutItemId))}
        <div className='minimized-list' css={minimizedListStyle}>
          {this.state.minimizedList.map(itemId => this.createMinimizedItem(itemId))}
        </div>
      </div>
    );
  }
}

export default ReactRedux.connect<StateToLayoutProps, unknown, LayoutProps>(utils.mapStateToLayoutProps)(Layout as any)
