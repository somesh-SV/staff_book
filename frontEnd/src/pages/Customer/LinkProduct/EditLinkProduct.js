import React, { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import Select from "react-dropdown-select";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

const ProductOptions = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const EditLinkProduct = () => {
  const [Customers, setCustomers] = useState([]);
  const [Products, setProducts] = useState([]);
  return (
    <div>
      <Typography variant="h5" color="gray-blue" className="mb-3.5">
        Edit Link_Product
      </Typography>
      <form className="inline-flex items-center space-x-4 mb-3.5">
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
        <Button className="p-2 px-4 bg-blue-700 ml-auto">Save</Button>
      </form>
    </div>
  );
};

export default EditLinkProduct;
