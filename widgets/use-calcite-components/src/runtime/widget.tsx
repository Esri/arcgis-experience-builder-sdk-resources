import { React, AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
/**
 * Use this way, the @esri/calcite-components-react code will be compiled into widget entry, which makes widget size large.
 *    `import { CalciteButton, CalciteIcon, CalciteSlider } from '@esri/calcite-components-react'`
 * So, we should use the below way.
 */
import { CalciteButton, CalciteIcon, CalciteSlider } from 'calcite-components'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const text = props.config.text

  const [sliderValue, setSliderValue] = React.useState(50)

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
