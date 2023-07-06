/** @jsx jsx */
import { type AllWidgetProps, jsx, React, loadArcGISJSAPIModule } from 'jimu-core'
import { type IMConfig } from '../config'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const [count, setCount] = React.useState(0)
  const [queryCount, setQueryCount] = React.useState(null)

  const onClick = React.useCallback((evt) => {
    setCount(count + 1)
  }, [])

  const onQueryFeatures = React.useCallback((evt) => {
    loadArcGISJSAPIModule('esri/layers/FeatureLayer').then(FeatureLayer => {
      const layer: __esri.FeatureLayer = new FeatureLayer({
        url: 'https://abc'
      })
      layer.queryFeatureCount({ where: '1=1' }).then(queryCount => {
        setQueryCount(queryCount)
      })
    })
  }, [])
  return <div className="widget-show-unit-tests jimu-widget">
    <p>This widget shows how to unit test a widget.</p>
    {props.config.p1 && <div className="has-p1">p1 is checked.</div>}
    <div>Widget label:{props.label}</div>
    <div>Theme variable:{props.theme.colors.black}</div>
    <button onClick={onClick}>Click me</button>
    <div>Count:{count}</div>

    <button onClick={onQueryFeatures}>Query features</button>
    <div>
      <div>Query Result count:{queryCount}</div>
    </div>
  </div>
}
