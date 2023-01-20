import React from "react";

const ChartTemp = ({ children }) => {
  return (
    <div className="tables px-5 mt-8 grid grid-cols-6 gap-10">
      <div className="col-span-6 p-3 lg:mb-6 flex flex-col gap-4 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default ChartTemp;
