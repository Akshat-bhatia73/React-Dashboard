import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [notiCardVis, setNotiCardVis] = useState(false)
  const [profileCardVis, setProfileCardVis] = useState(false)

  return (
    <StateContext.Provider value={{ darkMode, activeSidebar, notiCardVis, profileCardVis, setActiveSidebar, setDarkMode, activeSettings, setActiveSettings, setNotiCardVis, setProfileCardVis }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);