import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Homepage from "../pages/homepage/Homepage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import Error from "../pages/error/Error";
import AppDetails from "../pages/appDetails/AppDetails";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "/installedApps",
        element: <InstallApps />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    errorElement: <Error />,
  },
]);
