
import { React, type AllWidgetProps, jsx } from 'jimu-core'
import Layout from './layout/runtime/layout'
import { WidgetPlaceholder } from 'jimu-ui'

const IconImage = require('./assets/icon.svg')

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>> {
  render (): React.JSX.Element {
    const { layouts, id, builderSupportModules } = this.props
    const LayoutComponent = !window.jimuConfig.isInBuilder
      ? Layout
      : builderSupportModules.widgetModules.LayoutBuilder

    if (LayoutComponent == null) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          No layout component!
        </div>
      )
    }
    const layoutName = Object.keys(layouts)[0]

    return (
      <div className='widget-dock-layout d-flex w-100 h-100'>
        <LayoutComponent
          layouts={layouts[layoutName]} isInWidget style={{
            overflow: 'auto',
            minHeight: 'none'
          }}
        >
          <WidgetPlaceholder
            icon={IconImage} widgetId={id}
            style={{
              border: 'none'
            }}
            message='dock layout'
          />
        </LayoutComponent>
      </div>
    )
  }
}
