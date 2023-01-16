export const DarkModeReducer = (state, action)=>{
    switch (action.type) {
        case 'light':
            return {darkMode: false}
        
        case 'dark':
            return {darkMode:true}

        default:
            return state
    }
}

export const SidebarReducer = (state, action) => {
    switch (action.type) {
        case 'collapse':
            return {isSidebarActive: false}
        case 'expand':
            return {isSidebarActive: true}
        default:
            return state
    }
}
