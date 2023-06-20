/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React, jsx } from 'jimu-core'
import * as d3 from './lib/d3/d3.min.js'
const { useEffect, useRef } = React

export default function Widget () {
  // Create a React Ref - https://reactjs.org/docs/refs-and-the-dom.html
  const mainRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (mainRef && mainRef.current) {
      /**
       * START code from
       * https://observablehq.com/@d3/lets-make-a-bar-chart
       */
      const data = [4, 8, 15, 16, 23, 42]

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 100])

      const div = d3.create('div')
      // Apply some styles to the chart container.
      div.style('font', '10px sans-serif')
      div.style('text-align', 'right')
      div.style('color', 'white')

      // Define the initial (empty) selection for the bars.
      const bar = div.selectAll('div')

      // Bind this selection to the data (computing enter, update and exit).
      const barUpdate = bar.data(data)

      // Join the selection and the data, appending the entering bars.
      const barNew = barUpdate.join('div')

      // Apply some styles to the bars.
      barNew.style('background', 'steelblue')
      barNew.style('padding', '3px')
      barNew.style('margin', '1px')

      // Set the width as a function of data.
      // barNew.style("width", (d) => `${d * 10}px`);
      barNew.style('width', (d) => `${x(d)}px`)

      // Set the text of each bar as the data.
      barNew.text((d) => d)
      /**
       * END code from
       * https://observablehq.com/@d3/lets-make-a-bar-chart
       */

      // Place the results from the D3 operation into the DOM using
      // react references - https://reactjs.org/docs/refs-and-the-dom.html
      mainRef.current.appendChild(div.node())
    }
  }, [mainRef])

  return (
    <div className="widget-d3 jimu-widget p-2">
      <p>
        This widget shows how to include an external library (D3.js) in your
        custom Experience Builder widget. The D3.js code being used comes from
          the tutorial{' '}
        <a href="https://observablehq.com/@d3/lets-make-a-bar-chart">
          Let’s Make a Bar Chart, Part 1
          </a>
          .
        </p>
      <div ref={mainRef}></div>
    </div>
  )
}
