/** @jsx jsx */
import { React, AllWidgetProps, BaseWidget, jsx } from "jimu-core";
import * as d3 from "./lib/d3/d3.min.js";

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  // Create a React Ref - https://reactjs.org/docs/refs-and-the-dom.html
  private mainRef = React.createRef<HTMLDivElement>();

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * START code from
     * https://observablehq.com/@d3/lets-make-a-bar-chart
     */
    const data = [4, 8, 15, 16, 23, 42];

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 100]);

    const div = d3.create("div");
    // Apply some styles to the chart container.
    div.style("font", "10px sans-serif");
    div.style("text-align", "right");
    div.style("color", "white");

    // Define the initial (empty) selection for the bars.
    const bar = div.selectAll("div");

    // Bind this selection to the data (computing enter, update and exit).
    const barUpdate = bar.data(data);

    // Join the selection and the data, appending the entering bars.
    const barNew = barUpdate.join("div");

    // Apply some styles to the bars.
    barNew.style("background", "steelblue");
    barNew.style("padding", "3px");
    barNew.style("margin", "1px");

    // Set the width as a function of data.
    // barNew.style("width", (d) => `${d * 10}px`);
    barNew.style("width", (d) => `${x(d)}px`);

    // Set the text of each bar as the data.
    barNew.text((d) => d);
    /**
     * END code from
     * https://observablehq.com/@d3/lets-make-a-bar-chart
     */

    // Please the results from the D3 operation into the DOM using
    // react references - https://reactjs.org/docs/refs-and-the-dom.html
    this.mainRef.current.appendChild(div.node());
  }

  render() {
    return (
      <div className="widget-d3 jimu-widget p-2">
        <p>
          This widget shows how to include an external library (D3.js) in your
          custom Experience Builder widget. The D3.js code being used comes from
          the tutorial{" "}
          <a href="https://observablehq.com/@d3/lets-make-a-bar-chart">
            Let’s Make a Bar Chart, Part 1
          </a>
          .
        </p>
        <div ref={this.mainRef}></div>
      </div>
    );
  }
}
