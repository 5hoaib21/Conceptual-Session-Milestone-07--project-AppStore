import React, { createContext, useState } from 'react';

export const InstalledAppsContext = createContext();


 const InstalledAppsProvider = ({ children }) => {

  
  const [installedApps, setInstalledApps] = useState([])

  const data = {
    installedApps,
     setInstalledApps
  }
  return (
    <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>

  ) 
    
};

export default InstalledAppsProvider;