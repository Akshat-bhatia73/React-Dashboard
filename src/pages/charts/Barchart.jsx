import React from "react";
import CardTitle from "../../components/card-titles/CardTitle";
import ChartTemp from "../../components/charts/ChartTemp";
import { BarChart, CartesianGrid, Tooltip, YAxis } from "recharts";
import { XAxis } from "recharts";
import { Legend } from "recharts";
import { Bar } from "recharts";
import { ResponsiveContainer } from "recharts";
import { barchartdata } from "../../data/ChartsData";

const Barchart = () => {
  return (
    <ChartTemp>
      <CardTitle title="Company Turnover ( Bar Chart )" />
      <hr className="dark:border-main-text/20" />
      <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={barchartdata}
        barCategoryGap="10%"
        barSize={15}
        barGap={4}
        margin={{ left: -20 }}
      >
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip label={'name'} cursor={{ opacity: 0.1 }} />
        <Legend
        />
        <CartesianGrid strokeDasharray={3} strokeOpacity={0.2} />
        <Bar dataKey={"Apple"} stackId="a" fill="#a35e2b" width={30} />
        <Bar dataKey={"Samsung"} stackId="a" fill="#d38e3c" width={30} />
        <Bar
          dataKey={"Google"}
          stackId="a"
          fill="#dba65c"
          width={30}
          radius={[15, 15, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
    </ChartTemp>
  );
};

export default Barchart;
