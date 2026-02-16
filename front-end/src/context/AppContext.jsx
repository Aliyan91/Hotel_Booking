import { createContext, useState } from "react";

export const AppContext = createContext();  

const AppContextProvider = ({ children }) => {

    

    const [user, setUser] = useState(null);
    const [owner, setOwner] = useState(null);
    const value = {
        user,
        setUser,
        owner,
        setOwner
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
