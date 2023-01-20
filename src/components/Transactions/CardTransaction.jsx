import React from "react";
import Button from "../button/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { recentTransactions } from "../../data/TransactionData";

const CardTransaction = () => {
  return (
    <div className="col-span-6 lg:col-span-3 mb-3 lg:mb-6 flex flex-col gap-4 p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text/90 rounded-md ">
      <div className="top flex items-center justify-between">
        <span className="title text-xl text-dark/70 dark:text-main-text/70 font-bold">
          Transactions
        </span>
        <MoreVertIcon
          sx={{ fontSize: 35 }}
          className="text-dark/60 dark:text-main-text/60 p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-100/10 rounded-full"
        />
      </div>
      <hr className="dark:border-main-text/20" />
      <div className="flex flex-col gap-5">
        {recentTransactions.map((data) => {
          return (
            <div key={data.title} className="flex items-center justify-between">
              <div className="desc flex items-center gap-5">
                <span
                  className="p-3 rounded-md"
                  style={{
                    backgroundColor: data.iconBg,
                    color: data.iconColor,
                  }}
                >
                  {data.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-lg text-dark/80 dark:text-main-text/80 font-bold">
                    {data.title}
                  </span>
                  <span className="text-sm text-dark/50 dark:text-main-text/50 font-semibold">
                    {data.desc}
                  </span>
                </div>
              </div>
              <span
                className={`amount font-bold`}
                style={{ color: data.iconColor }}
              >
                {data.amount}
              </span>
            </div>
          );
        })}
      </div>
      <hr />
      <Button title="Add Transaction" customStyle="xs:w-56 text-lg py-2" />
    </div>
  );
};

export default CardTransaction;
