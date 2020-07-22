import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis
} from "@devexpress/dx-react-chart-material-ui";

import { Animation, ArgumentScale } from "@devexpress/dx-react-chart";
import { scaleBand } from "d3-scale";

export const data = [
  {
    class: "",
    ModsCompleted: 0
  },
  {
    class: "",
    ModsCompleted: 0
  },
  {
    class: "Jack",
    ModsCompleted: 1
  },
  {
    class: "Jesuu",
    ModsCompleted: 2
  },
  {
    class: "Katy",
    ModsCompleted: 3
  }
];

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;
    console.log({ chartData });

    return (
      <Paper>
        <Chart data={chartData} rotated>
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />

          <BarSeries
            name="Students"
            valueField="ModsCompleted"
            argumentField="class"
            color="#23E21F"
          />
          <Title text="Class Progress:" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
