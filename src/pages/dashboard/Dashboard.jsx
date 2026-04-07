import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstalledAppsContext } from "../../context/InstalledAppsProvider";
import useApps from "../../hooks/useApps";

const Dashboard = () => {
  const { installedApps } = useContext(InstalledAppsContext);
  const { apps } = useApps();
  const unInstalledAppsLength = apps.length - installedApps.length;

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#0088fe" },
    { name: "Uninstalled", value: unInstalledAppsLength, fill: "#ffbb28" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-center font-semibold text-3xl mb-16">
        Installed and Uninstalled Apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
