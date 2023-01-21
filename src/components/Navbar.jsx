import React from "react";
import avatar2 from "../assets/avatar2.webp";
import ClearIcon from "@mui/icons-material/Clear";
import CardNotifications from "./card-notification/CardNotifications";
import CardProfile from "./card-profile/CardProfile";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Tooltip from "@mui/material/Tooltip";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Zoom from "@mui/material/Zoom";
import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
  const {
    darkMode,
    activeSidebar,
    currentColor,
    setActiveSidebar,
    profileCardVis,
    setProfileCardVis,
    notiCardVis,
    setNotiCardVis,
    setDarkMode,
  } = useStateContext();

  return (
    <div className="navbar relative flex items-center justify-center px-5 md:pt-0 text-dark/60 dark:text-main-text/60">
      <div className="container h-14 bg-white dark:bg-second-dark shadow-lg shadow-gray-400/40 dark:shadow-gray-700/40 flex justify-between items-center p-5 rounded">
        <div className="searchBar flex items-center gap-2">
          <Tooltip title="Menu" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${
                activeSidebar ? "hidden" : "visible"
              } md:hidden p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100/10 cursor-pointer`}
              onClick={() => {
                setActiveSidebar(true);
              }}
            >
              <MenuIcon />
            </div>
          </Tooltip>
          <Tooltip title="Search" TransitionComponent={Zoom} arrow>
            <SearchOutlinedIcon
              fontSize="large"
              className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100/10 cursor-pointer `}
            />
          </Tooltip>
          <input
            type="text"
            id="searchForm"
            placeholder="Search"
            className="hidden md:block outline-none py-2 pr-1 w-full text-base dark:bg-second-dark"
          />
        </div>
        <div
          className={`icons child-hover:bg-gray-200 dark:child-hover:bg-gray-100/10 child:p-1 child:rounded-full child:cursor-pointer flex items-center gap-1 xs:gap-4`}
        >
          <Tooltip title="Dark Mode" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${darkMode ? "hidden" : "block"}`}
              onClick={() => {
                setDarkMode(true);
              }}
            >
              <DarkModeOutlinedIcon />
            </div>
          </Tooltip>
          <Tooltip title="Light Mode" TransitionComponent={Zoom} arrow>
            <div
              className={`icon ${darkMode ? "block" : "hidden"} `}
              onClick={() => {
                setDarkMode(false);
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
                <span style={{backgroundColor: currentColor }} className="animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75"></span>
                <span
                  style={{backgroundColor: currentColor}}
                  className={`relative inline-flex rounded-full h-3 w-3 `}
                ></span>
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
            <div
              className={`icon ${
                profileCardVis ? `bg-gray-200 dark:bg-gray-100/10` : ""
              }`}
              onClick={() => {
                setProfileCardVis(!profileCardVis);
                setNotiCardVis(false);
              }}
            >
              <img src={avatar2} alt="" className="h-8 w-8 rounded-full" />
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
        className={`${
          profileCardVis ? "block" : "hidden"
        } absolute top-14 right-4 xs:right-5`}
      >
        <CardProfile />
      </div>
    </div>
  );
};

export default Navbar;
