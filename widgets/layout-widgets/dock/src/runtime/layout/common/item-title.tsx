
import {
  React,
  ReactRedux,
  IMState,
  jsx,
  LayoutItemType
} from 'jimu-core'
import { Icon } from 'jimu-ui'

interface Props {
  layoutId: string
  layoutItemId: string
}

export function ItemTitle (props: Props) {
  const { layoutId, layoutItemId } = props
  const label = ReactRedux.useSelector((state: IMState) => {
    const layoutItem = state.appConfig.layouts[layoutId].content[layoutItemId]
    if (layoutItem.type === LayoutItemType.Widget) {
      const widgetJson = state.appConfig.widgets[layoutItem.widgetId]
      return widgetJson?.label
    }
    if (layoutItem.type === LayoutItemType.Section) {
      const sectionJson = state.appConfig.sections[layoutItem.sectionId]
      return sectionJson?.label
    }
    if (layoutItem.type === LayoutItemType.ScreenGroup) {
      const sgJson = state.appConfig.screenGroups[layoutItem.screenGroupId]
      return sgJson?.label
    }
    return ''
  })
  const icon = ReactRedux.useSelector((state: IMState) => {
    const layoutItem = state.appConfig.layouts[layoutId].content[layoutItemId]
    if (layoutItem.type === LayoutItemType.Widget) {
      const widgetJson = state.appConfig.widgets[layoutItem.widgetId]
      return widgetJson?.icon
    }
    if (layoutItem.type === LayoutItemType.Section) {
      const sectionJson = state.appConfig.sections[layoutItem.sectionId]
      return sectionJson?.icon
    }
    if (layoutItem.type === LayoutItemType.ScreenGroup) {
      const sgJson = state.appConfig.screenGroups[layoutItem.screenGroupId]
      return sgJson?.icon
    }
    return ''
  })

  return (
    <div className='label d-flex align-items-center h-100'>
      {(
        <React.Fragment>
          <Icon icon={icon} size={16} />
          <div className='ml-2 text-truncate'>{label}</div>
        </React.Fragment>
      )}
    </div>
  )
}
