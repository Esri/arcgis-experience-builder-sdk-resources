/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx } from "jimu-core";

export default class Widget extends BaseWidget<AllWidgetProps<{}>, any> {
  componentDidMount() {
    var data = [
      {
        label: "node1",
        id: 1,
        children: [
          { label: "child1", id: 2 },
          { label: "child2", id: 3 },
        ],
      },
      {
        label: "node2",
        id: 4,
        children: [{ label: "child3", id: 5 }],
      },
    ];
    $(".widget-3rd-lib").tree({
      data: data,
      autoOpen: true,
      dragAndDrop: true,
    });
  }

  render() {
    return <div className="widget-3rd-lib"></div>;
  }
}
