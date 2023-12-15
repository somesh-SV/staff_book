import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SideBar from "./SideBar";
import RouteComponents from "./RouteComponents";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <SideBar open={open} />
      <div className="flex flex-col w-full">
        <div className="bg-blue-900 py-3 sticky top-0 z-50">
          <div className="max-w-screen-xl flex items-center ml-3">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="text-gray-100 w-8 h-8 animate-spin-slow duration-300" />
              ) : (
                <Bars3Icon className="text-gray-100 w-8 h-8 duration-300" />
              )}
            </button>

            <p className="text-gray-100 text-lg ml-3 flex-grow">Menu</p>
          </div>
        </div>
        <div className="overflow-y-auto no-scrollbar">
          <RouteComponents />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
