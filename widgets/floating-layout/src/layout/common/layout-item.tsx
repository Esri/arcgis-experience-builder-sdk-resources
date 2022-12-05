/** @jsx jsx */
import {
  ReactRedux,
  IMState,
  jsx,
  LayoutItemType
} from 'jimu-core'
import { LayoutItemProps, utils, searchUtils } from 'jimu-layouts/layout-runtime'
import { WidgetRendererInBuilder, SectionRendererInBuilder } from 'jimu-layouts/layout-builder'
import { Panel } from '../common/panel'

interface OwnProps {
  isActive: boolean
  isMinimized: boolean
  onClick: (layoutItemId: string) => void
  onMinimized: (layoutItemId: string) => void
}

export function FloatingLayoutItem (props: LayoutItemProps & OwnProps) {
  const { layoutId, layoutItemId, isActive, isMinimized, onClick, onMinimized } = props
  const bbox = ReactRedux.useSelector((state: IMState) => {
    const layoutItem = state.appConfig.layouts[layoutId].content[layoutItemId]
    return layoutItem.bbox
  })
  const widgetProps = ReactRedux.useSelector((state: IMState) => {
    const layoutItem = state.appConfig.layouts[layoutId].content[layoutItemId]
    if (layoutItem.type === LayoutItemType.Widget) {
      return utils.mapStateToWidgetProps(state, { layoutId, layoutItemId })
    }
    return null
  }, ReactRedux.shallowEqual)
  const sectionProps = ReactRedux.useSelector((state: IMState) => {
    const layoutItem = state.appConfig.layouts[layoutId].content[layoutItemId]
    if (layoutItem.type === LayoutItemType.Section) {
      return searchUtils.getSectionInfo(state, layoutItem.sectionId)
    }
    return null
  }, ReactRedux.shallowEqual)

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
      {widgetProps != null && <WidgetRendererInBuilder layoutId={layoutId} layoutItemId={layoutItemId} {...widgetProps} />}
      {sectionProps != null && <SectionRendererInBuilder layoutId={layoutId} layoutItemId={layoutItemId} {...sectionProps} />}
    </Panel>
  )
}
