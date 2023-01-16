import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/tables/DataTable";

const List = () => {
  return (
    <div className={`flex scroll-smooth`}>
        <Sidebar className="fixed" />
      <div className={`list pb-6 flex flex-1 relative h-screen overflow-y-scroll text-dark/90 dark:text-main-text/90 bg-main-text/20 dark:bg-dark`}>
        <div className="flex-1">
          <Navbar />
          <div className="tables px-5 mt-8 grid grid-cols-6 gap-10">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
