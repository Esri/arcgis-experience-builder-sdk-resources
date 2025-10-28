
import { React, type AllWidgetProps, jsx, css } from 'jimu-core'
import { LayoutEntry } from 'jimu-layouts/layout-runtime'
import { WidgetPlaceholder } from 'jimu-ui'

const IconImage = require('./assets/icon.svg')

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>> {
  render (): React.JSX.Element {
    const { layouts, id, intl, builderSupportModules } = this.props
    const LayoutComponent = !window.jimuConfig.isInBuilder
      ? LayoutEntry
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
      <div className='widget-custom-layout d-flex flex-column w-100 h-100'>
        <div
          className='p-2'
          css={css`width: 100%; height: auto; font-size: 1rem; flex-shrink: 0; background: var(--sys-color-info-main);color: var(--sys-color-secondary-text);`}
        >
          This is the function of your widget, you can implement any features here. Below is a layout area, where you can add any widgets.
        </div>
        <LayoutComponent
          className='flex-grow-1'
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
            message='widget-with-layout'
          />
        </LayoutComponent>
      </div>
    )
  }
}
