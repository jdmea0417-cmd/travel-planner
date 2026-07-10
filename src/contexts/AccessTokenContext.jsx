import {createContext, useContext, useState} from "react";

const AccessTokenContext = createContext(null);

export const AccessTokenContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  return (
      <AccessTokenContext.Provider value={{accessToken, setAccessToken}}>
        {children}
      </AccessTokenContext.Provider>
  );
}

export const useAccessTokenContext = () => {
  const context = useContext(AccessTokenContext);

  if (context === null) {
    throw new Error('useAccessTokenContext must be used within AccessTokenContextProvider');
  }

  return context;
};