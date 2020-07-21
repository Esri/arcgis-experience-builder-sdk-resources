/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import * as ReactDataGrid from "react-data-grid";

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  private columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
    { key: "count", name: "Count" },
  ];

  private rows = [
    { id: 0, title: "row1", count: 20 },
    { id: 1, title: "row1", count: 40 },
    { id: 2, title: "row1", count: 60 },
  ];
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="widget-d3 jimu-widget p-2">
        <p>React Data Grid sample</p>
        <p>
          <ReactDataGrid
            columns={this.columns}
            rowGetter={(i) => this.rows[i]}
            rowsCount={3}
            minHeight={150}
          />
        </p>
      </div>
    );
  }
}
