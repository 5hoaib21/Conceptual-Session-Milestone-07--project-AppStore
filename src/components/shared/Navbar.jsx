import React from "react";
import navLogo from "../../assets/Image/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithubAlt } from "react-icons/fa";
import MyNavLink from "./MynavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
  ];
  return (
    <nav className="shadow-md">
      <div className="flex justify-between items-center gap-4 bg-white container mx-auto p-4">
        <img src={navLogo} alt="" className="w-12.5" />
        <ul className="flex justify-between items-center gap-3">
          {navItems.map((item, i) => (
            <MyNavLink key={i} to={item.path}>{item.text}</MyNavLink>
          ))}
          {/* <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithubAlt /> Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
