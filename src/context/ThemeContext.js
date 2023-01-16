import React, { createContext, useReducer } from 'react'
import { DarkModeReducer, SidebarReducer} from './ThemeReducer';

const INITIAL_STATE = {
    darkMode: true,
    isSidebarActive: false,
}

export const themeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)
    const [SideState, SideDispatch] = useReducer(SidebarReducer, INITIAL_STATE)

  return (
    <themeContext.Provider value={{darkMode: state.darkMode,isSidebarActive: SideState.isSidebarActive, SideDispatch, dispatch}}>
        {children}
    </themeContext.Provider>
  )
}
