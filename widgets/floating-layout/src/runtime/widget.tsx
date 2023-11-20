/** @jsx jsx */
import { React, AllWidgetProps, jsx } from 'jimu-core'
import FloatingLayout from '../layout/runtime/layout'
import defaultMessages from './translations/default'
import { WidgetPlaceholder } from 'jimu-ui'

/* eslint-disable @typescript-eslint/no-var-requires */
const IconImage = require('./assets/icon.svg')

export default class Widget extends React.PureComponent<AllWidgetProps<unknown>> {
  render (): JSX.Element {
    const { layouts, id, intl, builderSupportModules } = this.props
    const LayoutComponent = !window.jimuConfig.isInBuilder
      ? FloatingLayout
      : builderSupportModules.widgetModules.FloatingLayoutBuilder

    if (LayoutComponent == null) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          No layout component!
        </div>
      )
    }
    const layoutName = Object.keys(layouts)[0]

    return (
      <div className='widget-fixed-layout d-flex w-100 h-100'>
        <LayoutComponent layouts={layouts[layoutName]} isInWidget>
          <WidgetPlaceholder
            icon={IconImage} widgetId={id}
            style={{
              border: 'none'
            }}
            message={intl.formatMessage({ id: 'tips', defaultMessage: defaultMessages.tips })}
          />
        </LayoutComponent>
      </div>
    )
  }
}
