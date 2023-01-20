import React from "react";
import CardTitle from "../card-titles/CardTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TransactionTableData } from "../../data/TransactionTableData";

const TransactionTable = () => {
  return (
    <div className="flex-1 col-span-6 flex flex-col gap-4 p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text-90 rounded-md">
      <CardTitle title="Transactions" />
      <hr className="dark:border-main-text/20" />
      <TableContainer className="border-0">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="">
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Tracking ID
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Product
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Customer
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Date
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Amount
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Payment Method
                </span>
              </TableCell>
              <TableCell className="tableCell">
                <span className="text-dark/80 dark:text-main-text/80 font-bold">
                  Status
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TransactionTableData.map((data) => {
              return (
                <TableRow
                  key={data.label}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span className="text-dark/70 dark:text-main-text/70 font-bold">
                      {data.id}
                    </span>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="flex gap-3 items-center text-dark/70 dark:text-main-text/70 font-bold">
                      <img
                        src={data.img}
                        alt=""
                        className="h-10 w-10 rounded-md"
                      />
                      <span>{data.product}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-dark/80 dark:text-main-text/80">
                      {data.customer}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-dark/70 dark:text-main-text/70 font-bold">
                      {data.date}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-dark/70 dark:text-main-text/70 font-bold">
                      ${data.amount}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-dark/70 dark:text-main-text/70 font-bold">
                      {data.method}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`${
                        data.status === "Approved"
                          ? "text-green-500 bg-green-500/10"
                          : data.status === "Pending"
                          ? "text-yellow-500 bg-yellow-500/10"
                          : "text-red-500 bg-red-500/10"
                      } font-bold rounded-full px-2`}
                    >
                      {data.status}
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

export default TransactionTable;
