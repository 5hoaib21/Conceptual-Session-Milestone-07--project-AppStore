import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold pb-1 ${className} ${isActive ? "text-purple-500 border-b border-purple-500" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
