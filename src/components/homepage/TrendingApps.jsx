import React, { useEffect, useState } from "react";

import AppCart from "../ui/AppCart";
import { DotLoader } from "react-spinners";

// const appsPromise = fetch('/data.json').then(res => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromise)
  // console.log(apps);

  //   const data = useLoaderData()
  // console.log(data, 'data from home page');
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 3000);
    };
    fetchData();
  }, []);

  console.log(apps, "apps");
  console.log(loading, "loading");

  return (
    <div className="container mx-auto my-20">
      {/* section header */}
      <div className="my-10 text-center space-y-5">
        <h1 className="text-5xl font-bold">Trending apps</h1>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {/* app cards */}

      {loading ? (
        <div className="flex items-center justify-center">
          <DotLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {apps.map((app, i) => (
            <AppCart key={i} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingApps;
