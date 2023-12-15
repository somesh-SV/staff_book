import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Select from "react-dropdown-select";
const CustomDrawer = ({ isOpen, toggleDrawer }) => {
  const [Customers, setCustomers] = useState([]);
  const [Products, setProducts] = useState([]);

  return (
    <div
      className={`fixed top-14 right-0 w-96 border-2 border-blue-600 bg-white shadow z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 shadow-md ">
        <div className="flex items-center justify-between">
          <Typography variant="h6">Link Products</Typography>
          <button type="button" onClick={toggleDrawer} className="p-1">
            <XMarkIcon className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
      <form className="inline-flex items-center space-x-4 mb-3.5">
        <Select
          options={CustomerOptions}
          labelField="name"
          valueField="id"
          values={Customers}
          searchBy="name"
          keepSelectedInList={false}
          dropdownHeight="175px"
          style={{ width: 300, borderRadius: 8 }}
          onChange={(v) => setCustomers(v)}
        />
        <Select
          options={ProductOptions}
          labelField="name"
          valueField="id"
          values={Products}
          searchBy="name"
          dropdownHeight="175px"
          style={{ width: 300, borderRadius: 8 }}
          onChange={(v) => setProducts(v)}
        />
        <input
          type="number"
          className="border border-gray-400 py-[4.5px] outline-blue-300 px-2 rounded-lg w-[150px] placeholder:text-sm"
          placeholder="price"
        />
        <Button className="p-2 px-4 bg-blue-700 ml-auto">Save</Button>
      </form>
    </div>
  );
};

export default CustomDrawer;
