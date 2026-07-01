import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import 'calcite-components'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const text = props.config.text

  const [sliderValue, setSliderValue] = React.useState(50)

  return (
    <div className="widget-calcite jimu-widget m-2">
      <div className="App">
        <h1>Hello, {text}</h1>
        <calcite-button>Test</calcite-button>
        <calcite-icon icon="banana" />
        <calcite-slider
          min={1}
          max={100}
          value={sliderValue}
          step={1}
          oncalciteSliderInput={(e) => {
            const value = Array.isArray(e.target.value) ? e.target.value[0] : e.target.value
            setSliderValue(Number(value))
          }} />
        <p>The slider currently has a value of {sliderValue}</p>
      </div>
    </div>
  )
}

export default Widget
