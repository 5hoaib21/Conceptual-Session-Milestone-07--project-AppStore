import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { DotLoader } from "react-spinners";
import { IoArrowBackOutline } from "react-icons/io5";
import { InstalledAppsContext } from "../../context/InstalledAppsProvider";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const expectedApp = apps.find((app) => String(app.id) === id);

  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <DotLoader color="#ad46ff" />
      </div>
    );
  }

  const handleInstalApp = () => {
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} installed successfully!`);
  };

  return (
    <div className="container mx-auto ">
      <div className="shadow-lg p-5 text-center">
        <img src={expectedApp?.image} alt="" className="mx-auto h-50 w-auto" />
        <h2 className="text-3xl font-bold">{expectedApp?.title}</h2>
        <p>
          Developed by:{" "}
          <span className="text-purple-600 font-bold text-2xl">
            {expectedApp?.companyName}
          </span>{" "}
        </p>
        <div className="flex justify-around">
          <Link to="/apps">
            {" "}
            <button className="btn btn-accent">
              <IoArrowBackOutline /> back to store
            </button>
          </Link>
          <button
            className="btn btn-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={handleInstalApp}
          >
            Install Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
