
import {
  ReactRedux,
  type IMState,
  jsx,
  LayoutItemType,
  css,
  classNames
} from 'jimu-core'
import { type LayoutItemProps, utils, searchUtils } from 'jimu-layouts/layout-runtime'
import { WidgetRenderer, SectionRenderer } from 'jimu-layouts/layout-runtime'

export function DockLayoutItem (props: LayoutItemProps) {
  const { layoutId, layoutItemId } = props
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
    <div className={classNames('builder-layout-item d-flex w-100 h-100', {
      'is-widget': widgetProps != null,
      'is-section': sectionProps != null
    })} data-layoutitemid={layoutItemId} data-layoutid={layoutId} css={css`background-color: var(--ref-palette-white);`}>
      {widgetProps != null && <WidgetRenderer layoutId={layoutId} layoutItemId={layoutItemId} {...widgetProps} />}
      {sectionProps != null && <SectionRenderer layoutId={layoutId} layoutItemId={layoutItemId} {...sectionProps} />}
    </div>
  )
}
