import React, { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import Select from "react-dropdown-select";
import { PlusIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const ProductOptions = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const EditLinkProduct = ({ setIsEdit }) => {
  const [Products, setProducts] = useState([]);
  return (
    <div className="my-5 max-w-full flex flex-col border border-t-0 shadow-md rounded-lg p-2">
      <div className="mb-3">
        <Typography variant="h6" color="blue-gray">
          Edit Link Product
        </Typography>
      </div>
      <div className="flex w-full md:w-auto items-center space-x-4 mb-4">
        <div className="inline-flex flex-wrap items-center space-x-4">
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
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2">
          <Button
            className="flex gap-x-2 items-center justify-center bg-teal-600 text-white"
            size="sm"
          >
            <PlusIcon className="w-4 h-4" /> Save
          </Button>
          <Button
            className="flex gap-x-2 items-center justify-center bg-blue-600 text-white"
            size="sm"
            onClick={() => setIsEdit(false)}
          >
            <ArrowUturnLeftIcon className="w-4 h-4" /> return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditLinkProduct;
