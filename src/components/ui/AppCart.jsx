import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCart = ({ app }) => {
  
  return (
    <Link to={`/apps/${app.id}`} className="card bg-base-100 gap-3 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <figure>
        <img src={app.image} className="h-50 w-auto" alt={app.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center gap-4">
          <span className="flex justify-center items-center gap-1  bg-green-100 text-green-500 py-1 px-2 rounded-md font-semibold">
            <FaDownload /> {app.downloads}
          </span>
          <span className="flex justify-center items-center gap-1  bg-orange-100 text-orange-500 py-1 px-2 rounded-md font-semibold">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCart;
