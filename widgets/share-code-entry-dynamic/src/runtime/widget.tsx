import { React, type AllWidgetProps, moduleLoader } from 'jimu-core'

const Widget = (props: AllWidgetProps<object>) => {
  const [module, setModule] = React.useState(null)

  React.useEffect(() => {
    moduleLoader.loadModule('widgets/shared-code/entry1', props.context.folderUrl).then((module) => {
      console.log('Module loaded:', module)
      setModule(module)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>A widget loading a shared entry dynamically</p>
      <p>The shared code: { module?.sampleFunction1() }</p>
    </div>
  )
}

export default Widget
