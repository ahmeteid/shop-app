import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Sidebar.css";
import menuItems from "./MenuItems";
import {
  FaHome,
  FaNewspaper,
  FaEnvelope,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import classNames from "classnames";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = useLocation().pathname;

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
      className={`sidebar ${isCollapsed ? "w-16" : "w-64"}`}
      aria-label="Main navigation"
    >
      <div className="toggle">
        <h1 className={`title ${isCollapsed ? "hidden" : "block"}`}>
          Social Media
        </h1>
        <button
          onClick={toggleSidebar}
          className="btn-toggle"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>
      <ul className="mt-6 space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={classNames("side-item", {
              "bg-gray-700": pathname === item.link,
            })}
          >
            <Link to={item.link} className="item w-full flex items-center p-2">
              <span className={`${item.color} p-2 rounded-md mr-3`}>
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              {!isCollapsed && <span>{item.name}</span>}
              {/* {!isCollapsed && expandedSection === index && (
                <ul className="ml-8 mt-2 space-y-1">
                  <li>
                    <Link
                      to={"/"}
                      className="block py-1 hover:text-gray-300 transition-colors duration-200 ease-in-out"
                    >
                      Subitem 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="block py-1 hover:text-gray-300 transition-colors duration-200 ease-in-out"
                    >
                      Subitem 2
                    </Link>
                  </li>
                </ul>
              )} */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
