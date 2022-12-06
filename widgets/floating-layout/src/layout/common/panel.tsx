/** @jsx jsx */
import {
  React,
  jsx,
  css,
  classNames,
  BoundingBox,
  moduleLoader
} from 'jimu-core'
import { Button, hooks } from 'jimu-ui'
import { MaximizeOutlined } from 'jimu-icons/outlined/application/maximize'
import { MinimizeOutlined } from 'jimu-icons/outlined/application/minimize'
import { UpOutlined } from 'jimu-icons/outlined/directional/up'
import { MinusOutlined } from 'jimu-icons/outlined/editor/minus'
import { LayoutItemProps } from 'jimu-layouts/layout-runtime'
import { bindDragHandler, bindResizeHandler, LIMITED_BOUNDARY_CLASS_NAME, ShapeL } from 'jimu-layouts/layout-builder'
import { ItemTitle } from './item-title'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'

enum Modes {
  Normal,
  Maximum
}

const style = css`
  min-width: 4rem;
  z-index: 0;
  position: absolute;

  &.active {
    z-index: 1;
    .panel-header {
      background-color: var(--info);
    }
  }

  &.maximize {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    transform: none;
    .panel-content {
      position: absolute;
      left: 0;
      top: 2rem;
      bottom: 0;
      right: 0;
      width: unset;
      height: unset;
    }
  }

  .panel-header {
    background-color: var(--light-500);
    .tool-drag-handler {
      flex-grow: 1;
      flex-shrink: 1;
      height: 32px;
      font-size: 1rem;
      cursor: move;
    }
  }

  .panel-content {
    position: relative;
    .layout-item {
      z-index: 0;
    }
    .resize-handler {
      z-index: 1;
      position: absolute;
      bottom: 10px;
      &.left {
        left: 10px;
        cursor: nesw-resize;
      }
      &.right {
        right: 10px;
        cursor: nwse-resize;
      }
    }

    &.minimized {
      height: 0;
      .layout-item {
        display: none;
      }
    }
  }
`

interface OwnProps {
  isActive: boolean
  isMinimized: boolean
  isGroup: boolean
  bbox: BoundingBox
  layoutId?: string
  layoutItemId?: string
  enableMinimize?: boolean
  onActive: (id: string) => void
  onMinimized: (layoutItemId: string) => void
}

export function Panel (props: LayoutItemProps & OwnProps) {
  const { layoutId, layoutItemId, isActive, isMinimized, bbox, isGroup, enableMinimize = false, onActive, onMinimized } = props

  const [mode, setMode] = React.useState(Modes.Normal)
  const [isResizing, setIsResizing] = React.useState(false)
  const [deltaSize, setDeltaSize] = React.useState({ w: 0, h: 0 })
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })
  const [collapsed, setCollapsed] = React.useState(false) // only apply in Moded.Normal mode
  const elementRef = React.useRef<HTMLDivElement>(null)
  const sizeRef = React.useRef({ width: parseInt(bbox.width), height: parseInt(bbox.height) })

  const handleDragEnd = React.useCallback((id: string, dx: number, dy: number) => {
    setOffset({ x: dx, y: dy })
  }, [])

  const handleDragging = React.useCallback((id: string, dx: number, dy: number) => {
    setOffset({ x: dx, y: dy })
  }, [])

  const handleResizeStart = React.useCallback((id: string, initWidth: number, initHeight: number) => {
    sizeRef.current = { width: initWidth, height: initHeight - 32 }
    setIsResizing(true)
  }, [])

  const handleResizing = React.useCallback((id: string, x: number, y: number, dw: number, dh: number) => {
    setDeltaSize({ w: dw, h: dh })
  }, [])

  const handleResizeEnd = React.useCallback((id: string, x: number, y: number, dw: number, dh: number) => {
    sizeRef.current.width = Math.round(sizeRef.current.width + dw)
    sizeRef.current.height = Math.round(sizeRef.current.height + dh)
    setDeltaSize({ w: 0, h: 0 })
    setIsResizing(false)
  }, [])

  hooks.useEffectOnce(() => {
    let interactable
    moduleLoader.loadModule('jimu-core/dnd').then((dndModule) => {
      const interact = dndModule.interact
      const parentRestrict = interact.modifiers.restrictRect({
        restriction: 'parent'
      })

      const boundaryRestrict = interact.modifiers.restrictRect({
        restriction: `div.${LIMITED_BOUNDARY_CLASS_NAME}`
      })

      if (elementRef.current) {
        interactable = interact(elementRef.current).origin('parent')
        interactable = bindDragHandler(interactable, {
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
        bindResizeHandler(interactable, {
          layoutItemId,
          restrictEdges: true,
          onResizeStart: handleResizeStart,
          onResizing: handleResizing,
          onResizeEnd: handleResizeEnd
        })
      }
      if (interactable) {
        if (isGroup) {
          interactable.draggable({
            modifiers: [parentRestrict]
          })
        } else {
          interactable.draggable({
            modifiers: [boundaryRestrict]
          })
        }
      }
    }).catch(err => {
      console.error(err)
    })

    return () => {
      if (interactable) {
        interactable.unset()
      }
    }
  })

  const toggleCollapsed = React.useCallback((e) => {
    e.stopPropagation()
    setCollapsed(!collapsed)
  }, [collapsed])

  const toggleMode = React.useCallback(() => {
    setMode(mode === Modes.Normal ? Modes.Maximum : Modes.Normal)
  }, [mode])

  const minimize = React.useCallback((e) => {
    e.stopPropagation()
    onMinimized(layoutItemId)
  }, [onMinimized, layoutItemId])

  const handleItemClick = React.useCallback((e) => {
    e.stopPropagation()
    onActive(layoutItemId)
  }, [onActive, layoutItemId])

  const width = isResizing ? sizeRef.current.width + deltaSize.w : sizeRef.current.width
  const height = isResizing ? sizeRef.current.height + deltaSize.h : sizeRef.current.height
  return (
    <div
      className={classNames('exb-rnd floating-panel shadow-lg', { 'd-none': isMinimized, active: isActive, shadow: isActive, maximize: mode === Modes.Maximum })}
      css={css`
        ${style};
        top: ${bbox.top};
        left: ${bbox.left};
        transform: translate(${offset.x}px, ${offset.y}px);
      `}
      data-layoutid={layoutId}
      data-layoutitemid={layoutItemId}
      ref={elementRef}
      onClick={handleItemClick}
    >
      <div className='panel-header d-flex align-items-center px-1'>
        <div className='tool-drag-handler'>
          {layoutId && layoutItemId && <ItemTitle layoutId={layoutId} layoutItemId={layoutItemId} />}
        </div>
        <div className='actions ml-auto'>
          {mode === Modes.Normal && (
            <Button icon type='tertiary' size='sm' onClick={toggleCollapsed}>
              {!collapsed && <UpOutlined />}
              {collapsed && <DownOutlined />}
            </Button>
          )}
          {enableMinimize && (
            <Button icon type='tertiary' size='sm' onClick={minimize}>
              <MinusOutlined />
            </Button>
          )}
          <Button icon type='tertiary' size='sm' onClick={toggleMode}>
            {mode === Modes.Maximum ? <MinimizeOutlined /> : <MaximizeOutlined />}
          </Button>
        </div>
      </div>
      <div
        className={classNames('panel-content d-flex', { minimized: collapsed })}
        css={css`
          width: ${width}px;
          height: ${height}px;
        `}
      >
        {props.children}
        <div className={classNames('resize-handler right rnd-resize-bottom rnd-resize-right', { 'd-none': collapsed || mode !== Modes.Normal })}>
          <ShapeL pos='br' />
        </div>
      </div>
    </div>
  )
}
