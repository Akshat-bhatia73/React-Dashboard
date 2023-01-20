import React from "react";
import CardTitle from "../card-titles/CardTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const WebsiteDataTable = () => {
  const formatData = (source, total, growth) => {
    return { label: source, total, growth, status: growth > 0 ? true : false };
  };
  const WebsiteData = [
    formatData("Direct", 87932, 15),
    formatData("Organic", 63283, 85),
    formatData("Referral", 4393, 30),
    formatData("Mail", 223, -25),
    formatData("Social", 50439, 97),
    formatData("Other", 2000, 10),
  ];
  return (
    <div className="col-span-6  sm:col-span-3 flex-1 flex flex-col gap-4 p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text-90 rounded-md">
      <CardTitle title="Website Statistics" />
      <hr className="dark:border-main-text/20" />
      <div className="trafficData flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <span className="text-4xl font-bold text-dark/80 dark:text-main-text/80 pl-3">
          207k
        </span>
        <span className="text-sm text-dark/50 dark:text-main-text/50 pl-3 sm:pl-0">
          Total Traffic (
          <span className="text-green-500"> 27% more than last month </span>)
        </span>
      </div>
      <hr className="dark:border-main-text/20" />
      <TableContainer className="border-0">
        <Table aria-label="simple table">
          <TableBody>
            {WebsiteData.map((data) => {
              return (
                <TableRow
                  key={data.label}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span className="text-dark/70 dark:text-main-text/70 font-bold">
                      {data.label}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <span className="font-bold text-dark/80 dark:text-main-text/80">
                      {data.total}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <span
                      className={`${
                        data.status ? "text-green-500" : "text-red-500"
                      } font-bold`}
                    >
                      {data.growth}%
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WebsiteDataTable;
