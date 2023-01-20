import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { sidebarData } from "../data/Data";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { activeSidebar, setActiveSidebar } = useStateContext();

  return (
    <div
      className={`sidebar ${
        activeSidebar ? "visible" : "hidden"
      } z-50 absolute md:block dark:bg-dark bg-white md:static md:bg-main-text/20 md:z-0 md:w-60 w-[280px] h-screen overflow-y-scroll`}
    >
      <div className="flex items-center justify-between h-14 gap-2 p-5 dark:text-main-text">
        <Link to="/">
          <div className="logo flex items-center gap-3">
            <DashboardIcon className="text-theme-pink" fontSize="large" />
            <span className="text-xl  font-bold">Dash</span>
          </div>
        </Link>
        <div
          className="icon md:hidden"
          onClick={() => {
            setActiveSidebar(false);
          }}
        >
          <ClearIcon
            sx={{ fontSize: 30 }}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100/10 cursor-pointer "
          />
        </div>
      </div>
      <div className="px-5 text-dark/60 dark:text-main-text/60 font-semibold mb-3">
        <ul className="list-none">
          {sidebarData.map((item) => {
            return (
              <div key={item.title}>
                <p className=" text-base text-dark/40 dark:text-main-text/40 mt-4 mb-3">
                  {item.title}
                </p>
                {item.links.map((link) => {
                  return (
                    <Link key={link.name} to={link.to}>
                      <li className="flex items-center gap-3 p-2 cursor-pointer hover:bg-theme-pink/30 dark:hover:bg-theme-pink/20">
                        {link.icon}
                        <span>{link.name}</span>
                      </li>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
