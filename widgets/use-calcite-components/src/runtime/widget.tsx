import { React, AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader'
import { CalciteButton, CalciteIcon, CalciteSlider } from '@esri/calcite-components-react'
import '@esri/calcite-components/dist/calcite/calcite.css'

applyPolyfills()

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const text = props.config.text
  const folderUrl = props.context.folderUrl

  const [sliderValue, setSliderValue] = React.useState(50)

  React.useEffect(() => {
    // When we run `npm i`, the calcite-icon is copied to `src/runtime/assets`, so we need to define the resource path here.

    defineCustomElements(window, { resourcesUrl: `${folderUrl}/dist/runtime/` })
  }, [])

  return (
    <div className="widget-calcite jimu-widget m-2">
      <div className="App">
        <h1>Hello, {text}</h1>
        <CalciteButton>Test</CalciteButton>
        <CalciteIcon icon="banana" />
        <CalciteSlider
          min={1}
          max={100}
          value={sliderValue}
          step={1}
          onCalciteSliderUpdate={(e) => setSliderValue((e.target as any).value)} />
        <p>The slider currently has a value of {sliderValue}</p>
      </div>
    </div>
  )
}

export default Widget
