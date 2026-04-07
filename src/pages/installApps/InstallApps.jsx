import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsProvider";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const handleUninstall = (app) => {

    const restApps = installedApps.filter(iApp => iApp.id != app.id);

    setInstalledApps(restApps);
    toast.error(`${app.title} uninstalled successfully!`);
  };

  return (
    <div className="container mx-auto my-10">
      {installedApps.map((app) => (
        <div
          key={app.id}
          className="bg-base-200 flex justify-between gap-4 items-center shadow m-4 p-4 rounded-2xl cursor-pointer  hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <img src={app.image} alt="" className="h-30 w-auto" />
            <h2 className="font-semibold text-2xl">{app.title}</h2>
          </div>
          <button
            onClick={() => handleUninstall(app)}
            className="btn btn-error text-white font-bold"
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default InstallApps;
