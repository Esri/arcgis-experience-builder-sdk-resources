/** @jsx jsx */
import { React, type AllWidgetProps, jsx } from 'jimu-core'

export default function Widget (props: AllWidgetProps<unknown>) {
  const [myModule, setModule] = React.useState(null)

  React.useEffect(() => {
    import('../../../common/my-module').then(m => { setModule(m) })
  }, [])

  return (
    <div className="widget-demo jimu-widget m-2">
      <div>Widget 1</div>
      {myModule && <div>Module loaded, {myModule.f1()}</div>}
    </div>
  )
}
