import { createContext, useState } from "react";

const AppContext = createContext();
const AppContextProvider = ({ children }) =>
{
    const [ theme, setTheme ] = useState('dark');

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}
