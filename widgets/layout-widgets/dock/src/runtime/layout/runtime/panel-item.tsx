
import {
  ReactRedux,
  type IMState,
  jsx
} from 'jimu-core'
import type { LayoutItemProps } from 'jimu-layouts/layout-runtime'
import { Panel } from '../common/panel'
import { DockLayoutItem } from './layout-item'

interface OwnProps {
  isActive: boolean
  isMinimized: boolean
  onClick: (layoutItemId: string) => void
  onMinimized: (layoutItemId: string) => void
}

export function PanelLayoutItem (props: LayoutItemProps & OwnProps) {
  const { layoutId, layoutItemId, isActive, isMinimized, onClick, onMinimized } = props
  const bbox = ReactRedux.useSelector((state: IMState) => {
    const layoutItem = state.appConfig.layouts[layoutId].content[layoutItemId]
    return layoutItem.bbox
  })

  return (
    <Panel
      isActive={isActive}
      isMinimized={isMinimized}
      isGroup={false}
      bbox={bbox as any}
      layoutId={layoutId}
      layoutItemId={layoutItemId}
      enableMinimize
      onActive={onClick}
      onMinimized={onMinimized}
    >
      <DockLayoutItem layoutId={layoutId} layoutItemId={layoutItemId} />
    </Panel>
  )
}
