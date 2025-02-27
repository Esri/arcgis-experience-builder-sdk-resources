import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
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
          onCalciteSliderInput={(e) => { setSliderValue(e.target.value as any) }} />
        <p>The slider currently has a value of {sliderValue}</p>
      </div>
    </div>
  )
}

export default Widget
