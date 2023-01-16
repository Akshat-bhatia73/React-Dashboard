import React from "react";
import CardTitle from "./card-titles/CardTitle";
import { CartesianGrid, LineChart } from "recharts";
import { Line } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";
import { XAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import { WebsiteAnalyticsData } from "../data/WebsiteAnalyticsData";

const Chart = () => {
  return (
    <div className="col-span-6 lg:col-span-3 p-3 lg:mb-6 flex flex-col gap-4 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md">
      <CardTitle title="Website Analytics ( December )" />
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
    </div>
  );
};

export default Chart;
