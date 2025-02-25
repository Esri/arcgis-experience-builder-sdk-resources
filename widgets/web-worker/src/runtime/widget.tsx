import { React, type AllWidgetProps } from 'jimu-core'

const Widget = (props: AllWidgetProps<object>) => {
  const [status, setStatus] = React.useState('idle')

  React.useEffect(() => {
    /**
     * Put the worker script in `assets` folder to make sure it's included in the build.
     * We can't compile the worker script with webpack, because the ExB output format is SystemJS format, which can't be loaded in a web worker.
     */
    const workerUrl = `${props.context.folderUrl}dist/runtime/assets/worker.js`
    const worker = new Worker(workerUrl)
    worker.postMessage({
      type: 'start',
    })
    setStatus('running')

    worker.onmessage = (e) => {
      if (e.data.type === 'done') {
        console.log('Task in web worker done')
        setStatus('done')
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="widget-demo jimu-widget m-2">
      <p>This widget demonstrates how to use a web worker.</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default Widget
