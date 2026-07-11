import {createContext, useContext, useState} from "react";

const DarkModeContext = createContext(null);

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
      <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {children}
      </DarkModeContext.Provider>
  );
}

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (context === null) {
    throw new Error("useDarkModeContext must be used within DarkModeContextProvider");
  }

  return context;
}