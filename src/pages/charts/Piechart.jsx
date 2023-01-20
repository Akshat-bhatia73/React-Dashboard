import React from "react";
import CardTitle from "../../components/card-titles/CardTitle";
import ChartTemp from "../../components/charts/ChartTemp";
import { Cell } from "recharts";
import { Legend, Pie } from "recharts";
import { PieChart } from "recharts";
import { ResponsiveContainer } from "recharts";
import { Tooltip } from "recharts";

const data = [
  { name: "R&D", value: 36 },
  { name: "Hiring", value: 43 },
  { name: "Networking", value: 7 },
  { name: "Operational", value: 14 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      className="body1 font-bold"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${value}%`}
    </text>
  );
};

const Piechart = () => {
  return (
    <ChartTemp>
      <CardTitle title="Pie Chart" />
      <hr className="dark:border-main-text/20" />
      <ResponsiveContainer width={"100%"} height={400}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            dataKey={"value"}
            data={data}
            innerRadius={80}
            outerRadius={150}
            label={renderCustomizedLabel}
            paddingAngle={5}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartTemp>
  );
};

export default Piechart;
