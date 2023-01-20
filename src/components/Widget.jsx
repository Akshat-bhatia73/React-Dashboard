import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "./button/Button";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Widget = ({ type, amount, growth, iconBg }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        amount: amount,
        growth: growth,
        icon: (
          <PeopleIcon
            sx={{ fontSize: 50, backgroundColor: iconBg }}
            className={`rounded-lg p-2 text-white`}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "Orders",
        isMoney: false,
        link: "See all orders",
        amount: amount,
        growth: growth,
        icon: (
          <ShoppingBagIcon
            sx={{ fontSize: 50, backgroundColor: iconBg }}
            className={`rounded-lg p-2 text-white`}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "See details",
        amount: amount,
        growth: growth,
        icon: (
          <AttachMoneyIcon
            sx={{ fontSize: 50, backgroundColor: iconBg }}
            className={`rounded-lg p-2 text-white`}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        amount: amount,
        growth: growth,
        icon: (
          <AccountBalanceIcon
            sx={{ fontSize: 50, backgroundColor: iconBg }}
            className={`rounded-lg p-2 text-white`}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget flex flex-1 justify-between p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text rounded-md">
      <div className="left flex flex-col gap-4">
        <span className="title text-lg text-dark/70 dark:text-main-text/70 font-bold">
          {data.title}
        </span>
        <div className="data flex">
          <span className="counter text-3xl font-bold">
            {data.isMoney ? "$" : ""}
            {data.amount}
          </span>
        </div>

        <Button title={data.link} customStyle="w-28 text-sm px-2 py-1" />
      </div>
      <div className="right flex flex-col justify-between">
        <div className="change right-6 font-bold  bottom-4 ">
          <span
            className={`percentage text-sm ${
              data.growth > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {data.growth > 0 ? `+${data.growth}%` : data.growth + "%"}
          </span>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
