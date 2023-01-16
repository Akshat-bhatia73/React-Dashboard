import React from "react";
import CardTitle from "../../components/card-titles/CardTitle";
import ChartTemp from "../../components/charts/ChartTemp";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";

  const data = [
    {
      subject: 'Math',
      Mike: 120,
      Lily: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      Mike: 98,
      Lily: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      Mike: 86,
      Lily: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      Mike: 99,
      Lily: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      Mike: 85,
      Lily: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      Mike: 65,
      Lily: 85,
      fullMark: 150,
    },
  ];


const Radarchart = () => {
  return (
    <ChartTemp>
      <CardTitle title="Radar Chart" />
      <hr className="dark:border-main-text/20" />
      <ResponsiveContainer width={"100%"} height={400}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={"subject"} fontSize={14} />
        <PolarRadiusAxis />
        <Tooltip />
        <Legend align="center" />
        <Radar dataKey={"Mike"} name="Mike Scott" fill="#b26fdd" />
        <Radar
          dataKey={"Lily"}
          name="Lily James"
          fill="#bf4f43"
          opacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
    </ChartTemp>
  );
};

export default Radarchart;
