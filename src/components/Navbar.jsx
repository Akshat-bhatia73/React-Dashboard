import React, { useContext, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { themeContext } from "../context/ThemeContext";
import CardNotifications from "./card-notification/CardNotifications";
import ClearIcon from "@mui/icons-material/Clear";
import CardProfile from "./card-profile/CardProfile";

const Navbar = () => {
  const { darkMode, dispatch, SideDispatch , isSidebarActive} =
    useContext(themeContext);
  const [notiCardVis, setNotiCardVis] = useState(false)
  const [profileCardVis, setProfileCardVis] = useState(false)
  return (
    <div className="navbar relative flex items-center justify-center px-5 md:pt-0 text-dark/60 dark:text-main-text/60">
      <div className="container h-14 bg-white dark:bg-second-dark shadow-lg shadow-gray-400/40 dark:shadow-gray-700/40 flex justify-between items-center p-5 rounded">
        <div className="searchBar flex items-center gap-2">
          <Tooltip title="Menu" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${
                isSidebarActive ? "hidden" : "visible"
              } md:hidden p-1 rounded-full hover:bg-gray-200 dark:hover:bg-theme-skyblue/10 cursor-pointer`}
              onClick={() => {
                SideDispatch({ type: "expand" });
              }}
            >
              <MenuIcon />
            </div>
          </Tooltip>
          <Tooltip title="Search" TransitionComponent={Zoom} arrow>
            <SearchOutlinedIcon
              fontSize="large"
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-theme-skyblue/10 cursor-pointer "
            />
          </Tooltip>
          <input
            type="text"
            id="searchForm"
            placeholder="Search"
            className="hidden md:block outline-none py-2 pr-1 w-full text-base dark:bg-second-dark"
          />
        </div>
        <div className="icons child-hover:bg-gray-200 dark:child-hover:bg-theme-skyblue/10 child:p-1 child:rounded-full child:cursor-pointer flex items-center gap-1 xs:gap-4">
          <Tooltip title="Dark Mode" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${darkMode ? "hidden" : "block"}`}
              onClick={() => {
                dispatch({ type: "dark" });
              }}
            >
              <DarkModeOutlinedIcon />
            </div>
          </Tooltip>
          <Tooltip title="Light Mode" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${darkMode ? "block" : "hidden"} `}
              onClick={() => {
                dispatch({ type: "light" });
              }}
            >
              <WbSunnyOutlinedIcon />
            </div>
          </Tooltip>
          <Tooltip title="Notifications" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${notiCardVis ? "hidden" : "flex"} relative`}
              onClick={() => {
                setNotiCardVis(true);
                setProfileCardVis(false);
              }}
            >
              <NotificationsNoneOutlinedIcon />
              <span className="flex h-3 w-3 absolute right-1 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-theme-pink/70 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-theme-pink"></span>
              </span>
            </div>
          </Tooltip>
          <Tooltip title="Close">
            <div
              className={`icon ${notiCardVis ? "block" : "hidden"}`}
              onClick={() => {
                setNotiCardVis(false);
              }}
            >
              <ClearIcon />
            </div>
          </Tooltip>
          <Tooltip title="Profile" TransitionComponent={Zoom} arrow>
            <div className={`icon ${profileCardVis ? " bg-gray-400/30 dark:bg-gray-100/10" : ""}`}
              onClick={() => {
                setProfileCardVis(!profileCardVis)
                setNotiCardVis(false);
              }}>
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/young-businessman-avatar-5692602-4743371.png"
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        className={` ${
          notiCardVis ? "block" : "hidden"
        } absolute top-14 right-4 xs:right-14`}
      >
        <CardNotifications />
      </div>
      <div
        className={`${profileCardVis? 'block': 'hidden'} absolute top-14 right-4 xs:right-5`}
      >
        <CardProfile />
      </div>
    </div>
  );
};

export default Navbar;
