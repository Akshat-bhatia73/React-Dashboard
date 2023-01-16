import React from "react";
import CardTitle from "../../components/card-titles/CardTitle";
import { CartesianGrid, LineChart } from "recharts";
import { Line } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";
import { XAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import { WebsiteAnalyticsData } from "../../data/WebsiteAnalyticsData";
import ChartTemp from "../../components/charts/ChartTemp";

const Linechart = () => {
  return (
    <ChartTemp>
      <CardTitle title="Website Analytics ( Line Chart )" />
      <hr className="dark:border-main-text/20" />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={WebsiteAnalyticsData} margin={{ left: -20 }}>
          <XAxis dataKey={"name"} fontSize=".856rem" />
          <YAxis fontSize={".856rem"} />
          <Tooltip label={"name"} content={"visits"} />
          <CartesianGrid strokeOpacity={0.2} />
          <Line
            type={"monotone"}
            dataKey="visits"
            stroke="#0fa92e"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartTemp>
  );
};

export default Linechart;
