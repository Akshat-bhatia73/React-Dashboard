import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../data/DataUsers";
import { useStateContext } from "../../context/ContextProvider";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = () => {
  const { darkMode } = useStateContext();
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerAlign: "left",
      align: "left",
      renderCell: (params) => {
        return (
          <div className="action flex items-center gap-2">
            <Link to={window.location.pathname + `/testId`}>
              <span className="view text-green-500 bg-theme-green/10 hover:bg-green-500/20 px-2 py-1 rounded-md">
                View
              </span>
            </Link>
            <span
              className="delete text-red-500 bg-red-500/10 hover:bg-red-500/20 px-2 py-1 rounded-md"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </span>
          </div>
        );
      },
    },
  ];
  const pathname = window.location.pathname;
  return (
    <div className="col-span-6 px-3 pt-3 mb-3 h-[500px] w-full bg-white dark:bg-second-dark  shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md">
      <Link to={pathname + "/new"}>
        <Button
          title={
            pathname === "/users"
              ? "Add User"
              : pathname === "/products"
              ? "Add Product"
              : "Add Delivery"
          }
          customStyle="text-xl py-2 px-2"
        />
      </Link>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        sx={{
          cursor: "pointer",
          border: "none",
          color: darkMode ? "#d3d3d3" : "#1b2430",
          "& .MuiDataGrid-row:hover": {
            backgroundColor: darkMode ? "#d3d3d320" : "#1b243020",
          },
        }}
      />
    </div>
  );
};

export default DataTable;
