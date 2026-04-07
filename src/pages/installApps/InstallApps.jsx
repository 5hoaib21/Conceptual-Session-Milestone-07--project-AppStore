import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsProvider';

const InstallApps = () => {
  const contextData = useContext(InstalledAppsContext);
  console.log(contextData, "context Data");
  return (
    <div>
      installed app page
    </div>
  );
};

export default InstallApps;