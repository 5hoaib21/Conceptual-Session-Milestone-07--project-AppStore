import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayOut from "./LayOut/RootLayOut";
import Apps from "./pages/apps/Apps";
import InstallApps from "./pages/installApps/InstallApps";
import Error from "./pages/error/Error";
import Homepage from "./pages/homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: ()  => fetch('/data.json')
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installedApps",
        element: <InstallApps />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
