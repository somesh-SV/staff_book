import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideNavData } from "../Routes/SideNavData";
import imges from "../../resource/img/imges";

function SideBar({ open }) {
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const [activeItemPath, setActiveItemPath] = useState(null);
  const { pathname } = useLocation();

  const toggleSubMenu = (index, event) => {
    event.stopPropagation();
    setSelectedSubMenu(selectedSubMenu === index ? null : index);
  };

  const hover =
    "hover:shadow-lg hover:text-white hover:bg-blue-700 hover:duration-300";
  const activeItem = "text-white bg-blue-700 shadow-lg duration-300";

  return (
    <div>
      <div
        className={`bg-blue-900 shadow-2xl shadow-blue-200 pt-4 h-full duration-300 ${
          open ? "w-52" : "w-0 overflow-hidden"
        }`}
      >
        <div className="bg-gray-100 rounded-lg w-40 h-20 mx-auto flex items-center justify-center mb-4">
          <img className="h-fit w-fit" src={imges.logo} alt="logo" />
        </div>
        <hr className="my-3" />
        <ul className="text-white px-3">
          {SideNavData.map((item, index) => (
            <li key={index}>
              {item.subMenu ? (
                <>
                  <span
                    className={`cursor-pointer inline-flex items-center gap-x-2 text-md p-2 w-full rounded-lg ${
                      activeItemPath === item.path ? activeItem : hover
                    }`}
                    onClick={(event) => toggleSubMenu(index, event)}
                    onMouseEnter={() => setActiveItemPath(item.path)}
                    onMouseLeave={() => setActiveItemPath(null)}
                  >
                    {item.icon}
                    {item.title}
                    <span
                      className={`ml-auto  ${
                        selectedSubMenu === index ? "-rotate-180" : ""
                      }`}
                    >
                      {item.arrow}
                    </span>
                  </span>
                  {selectedSubMenu === index && (
                    <ul>
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link to={subItem.path}>
                          <li
                            className={`inline-flex items-center text-md rounded-lg space-x-2 p-2 my-1 w-full ${
                              pathname === subItem.path ? activeItem : hover
                            }`}
                            key={subIndex}
                          >
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  className={`inline-flex gap-x-2 items-center text-md rounded-lg p-2 my-1 w-full ${
                    pathname === item.path ? activeItem : hover
                  }`}
                  to={item.path}
                >
                  {item.icon}
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
