import React from "react";
import CardTitle from "../../components/card-titles/CardTitle";
import ChartTemp from "../../components/charts/ChartTemp";
import { CartesianGrid, XAxis } from "recharts";
import { Area } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { ResponsiveContainer } from "recharts";
import { YAxis } from "recharts";
import { AreaChart } from "recharts";
import { areachartdata } from "../../data/ChartsData";

const Areachart = () => {
  return (
    <ChartTemp>
      <CardTitle title="Area Chart" />
      <hr className="dark:border-main-text/20" />
      <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={areachartdata} layout="horizontal" margin={{ left: -20 }}>
        <Legend  />
        <YAxis fontSize="0.856rem" orientation="left" />
        <XAxis dataKey="name" fontSize="0.856rem" />
        <CartesianGrid strokeOpacity={0.5} />
        <Tooltip label={'name'}/>
        <Area
          type="monotone"
          stackId='1'
          dataKey='India'
          fill="#8e49ff"
          fillOpacity={0.7}
          strokeWidth={0}
        />
        <Area
          type="monotone"
          dataKey="China"
          stackId='1'
          fill="#a77eff"
          stroke="#a773ff"
          strokeWidth={0}
        />
        <Area
          stackId='1'
          type="monotone"
          dataKey={"USA"}
          fill="#ddd1ff"
          strokeWidth={0}
        />
      </AreaChart>
    </ResponsiveContainer>
    </ChartTemp>
  );
};

export default Areachart;
