import React, { createContext } from 'react';

export const InstalledAppsContext = createContext();


 const InstalledAppsProvider = ({ children }) => {
  const data = {
    name: 'john doe',
    age: 26,
  }
  return (
    <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>

  ) 
    
};

export default InstalledAppsProvider;