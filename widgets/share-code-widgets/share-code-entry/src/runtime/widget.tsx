import { React, type AllWidgetProps } from 'jimu-core'
import { sampleFunction1 } from 'widgets/shared-code/entry1'

const Widget = (props: AllWidgetProps<object>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>A widget using a shared entry</p>
      <p>The shared code: { sampleFunction1() }</p>
    </div>
  )
}

export default Widget
