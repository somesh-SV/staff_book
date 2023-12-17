import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import Select from "react-dropdown-select";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const CustomerOptions = [
  { id: 1001, name: "John Doe" },
  { id: 1002, name: "Jane Smith" },
  { id: 1003, name: "Michael Johnson" },
  { id: 1004, name: "Emily Davis" },
  { id: 1005, name: "William Brown" },
  { id: 1006, name: "Sarah Wilson" },
  { id: 1007, name: "David Martinez" },
  { id: 1008, name: "Olivia Garcia" },
  { id: 1009, name: "James Anderson" },
  { id: 1010, name: "Sophia Thomas" },
];

const ProductOptions = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const LinkProduct = () => {
  const [Customers, setCustomers] = useState([]);
  const [Products, setProducts] = useState([]);
  return (
    <div>
      <Typography variant="h5" color="gray-blue" className="mb-3.5">
        Link Product
      </Typography>
      <form className="inline-flex flex-wrap items-center gap-4 mb-3.5">
        <input
          type="text"
          className="border border-gray-400 py-[4.5px] outline-none px-2 rounded-lg w-[250px] placeholder:text-sm"
          placeholder="Name"
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
        <span className="space-x-3">
          <Button className="p-2 px-4 bg-blue-700 ">Add</Button>
          <Button className="inline-flex items-center p-2 px-4 gap-2 bg-teal-600">
            Search <MagnifyingGlassIcon className="w-4 h-4" />
          </Button>
        </span>
      </form>
    </div>
  );
};

export default LinkProduct;
