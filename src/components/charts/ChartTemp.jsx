import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const ChartTemp = ({ children }) => {
  return (
    <div className={`flex scroll-smooth`}>
      <Sidebar className="fixed" />
      <div
        className={`list pb-6 flex flex-1 relative h-screen overflow-y-scroll text-dark/90 dark:text-main-text/90 bg-main-text/20 dark:bg-dark`}
      >
        <div className="flex-1">
          <Navbar />
          <div className="tables px-5 mt-8 grid grid-cols-6 gap-10">
            <div className="col-span-6 p-3 lg:mb-6 flex flex-col gap-4 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTemp;
