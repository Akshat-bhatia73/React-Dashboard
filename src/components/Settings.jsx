import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useStateContext } from "../context/ContextProvider";

const themeColors = [
  {name: 'skyblue', color : '#00D7FF'},
  {name: 'pink' , color: '#f94892'},
  {name: 'green' , color: '#3CCF4E'},
  {name: 'lightOrange' , color: '#FD5D5D'},
  {name: 'orange' , color: '#FF5B00'},
  {name: 'purple' , color: '#a66cff'}
]

const Settings = () => {
  const { darkMode, setDarkMode, currentColor, setCurrentColor ,activeSettings, setActiveSettings } =
    useStateContext();
    const PinkSwitch = styled(Switch)(({ theme }) => ({
      "& .MuiSwitch-switchBase.Mui-checked": {
        color: currentColor,
        "&:hover": {
          backgroundColor: currentColor + '50',
        },
      },
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: currentColor,
      },
    }));

  return (
    <div
      className={`${
        activeSettings ? "fixed" : "hidden"
      } top-0 right-0 px-5 py-3 text-dark/90 dark:text-main-text/90 border-l-2 border-main-text/20 dark:border-dark/20 bg-white dark:bg-dark z-50 md:z-0 md:w-80 w-[280px] h-screen overflow-y-scroll float-right`}
    >
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">Settings</h1>
        <div className="icon" onClick={() => setActiveSettings(false)}>
          <ClearIcon
            sx={{ fontSize: 30 }}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100/10 cursor-pointer "
          />
        </div>
      </div>
      <hr className="border-dark/20 dark:border-main-text/20" />
      <div className="themeChanger">
        <h1 className="text-base text-dark/50 dark:text-main-text/50 mt-4 mb-3">
          MODE
        </h1>
        <div className="px-3 font-bold flex items-center gap-3">
          <span>Light</span>
          <PinkSwitch
            checked={darkMode ? true : false}
            onChange={() => {
              setDarkMode(!darkMode);
            }}
          />
          <span>Dark</span>
        </div>
        <h1 className="text-base text-dark/50 dark:text-main-text/50 mt-4 mb-3">
          THEME
        </h1>
        <div className="px-3 font-bold flex items-center justify-evenly gap-3">
          {themeColors.map((themeColor) => {
            return (
              <div key={themeColor.name} style={{backgroundColor: themeColor.color}} className="cursor-pointer hover:opacity-80 w-6 h-6 rounded-md border border-dark/50 dark:border-main-text/20" onClick={() => setCurrentColor(themeColor.color)}></div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
