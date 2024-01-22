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
    <div className="my-5 max-w-full flex flex-col shadow-md p-2">
      <div className="mb-3">
        <Typography variant="h6" color="deep-purple">
          Edit Link Product
        </Typography>
      </div>
      <div className="flex w-full md:w-auto items-center space-x-4 mb-4">
        <div className="inline-flex flex-wrap items-center space-x-4">
          <span>
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
          </span>
          <span>
            <Input label="Price" color="deep-purple" />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2">
          <Button color="deep-purple" size="sm">
            Save
          </Button>
          <Button
            className="flex gap-x-2 items-center justify-center bg-deep-purple-400 text-white"
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
