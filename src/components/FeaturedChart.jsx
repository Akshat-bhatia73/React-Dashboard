import React from "react";
import CardTitle from "./card-titles/CardTitle";
import { CircularProgressbar } from "react-circular-progressbar";
import { useStateContext } from "../context/ContextProvider";
import "react-circular-progressbar/dist/styles.css";

const FeaturedChart = () => {
  const { currentColor } = useStateContext()
  return (
    <div className="col-span-6 sm:col-span-3 flex flex-col gap-4 p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md">
      <CardTitle title="Total Revenue" />
      <hr className="dark:border-main-text/20" />
      <div className="bottom my-auto flex flex-col items-center justify-center ">
        <div className="graph flex items-center justify-center w-3/6 xs:w-2/6">
          <CircularProgressbar
            value={49}
            text="49%"
            styles={{ path: { stroke: currentColor }, text: { fill: currentColor } }}
          />
        </div>
        <div className="chartDetails flex flex-col items-center p-3 gap-3">
          <p className="title font-semibold">Total sales made today</p>
          <p className="amount text-3xl font-bold text-dark/90 dark:text-main-text/90">
            $12,340
          </p>
          <hr className="w-full border-dark/20 dark:border-main-text/20" />
          <p className="description text-center text-sm text-dark/50 dark:text-main-text/50">
            Previous transactions processing. Last transaction may not be
            included.
          </p>
          <hr className="w-full border-dark/20 dark:border-main-text/20" />
          <div className="summary flex items-center justify-between gap-5 w-full">
            <div className="item flex flex-col gap-3 lg:gap-8 xl:gap-3 items-center">
              <div className="itemTitle text-sm text-dark/60 dark:text-main-text/60 font-semibold">
                Target
              </div>
              <div className="itemResult text-xl font-bold">$25k</div>
            </div>
            <div className="item flex flex-col gap-3 items-center justify-center">
              <div className="itemTitle text-sm text-dark/60 dark:text-main-text/60 font-semibold">
                Last Week
              </div>
              <div className="itemResult text-xl font-bold">$5.4k</div>
            </div>
            <div className="item flex flex-col gap-3 items-center justify-center">
              <div className="itemTitle text-sm text-dark/60 dark:text-main-text/60 font-semibold">
                Last Month
              </div>
              <div className="itemResult text-xl font-bold">$23.7k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChart;
