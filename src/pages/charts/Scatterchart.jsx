import React from "react";
import CardTitle from "../../components/card-titles/CardTitle";
import ChartTemp from "../../components/charts/ChartTemp";
import { ScatterChart, ZAxis } from "recharts";
import { Scatter } from "recharts";
import { Legend } from "recharts";
import { ResponsiveContainer, XAxis, YAxis } from "recharts";

const data01 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 390 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 390, z: 400 },
    { x: 110, y: 280, z: 200 },
  ];
  const data02 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
  ];
  

const Scatterchart = () => {
  return (
    <ChartTemp>
      <CardTitle title="Scatter Chart" />
      <hr className="dark:border-main-text/20" />
      <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ left: -20 }}>
        <XAxis dataKey={"x"} fontSize=".856rem" tickCount={4} />
        <YAxis dataKey={"y"} fontSize={".856rem"} />
        <ZAxis dataKey={"z"} range={[64, 140]} name="score" />
        <Legend
        />
        <Scatter name="React" data={data01} fill="#3b8ff6" />
        <Scatter name="Angular" data={data02} fill="#fc3737" />
      </ScatterChart>
    </ResponsiveContainer>
    </ChartTemp>
  );
};

export default Scatterchart;
