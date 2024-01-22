import React, { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import Select from "react-dropdown-select";
import { PlusIcon } from "@heroicons/react/24/solid";

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
    <div className="my-5 max-w-full flex flex-col rounded-lg p-2">
      <div className="mb-3">
        <Typography variant="h6" color="deep-purple">
          Link Product
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
        <div className="">
          <Button
            className="flex items-center gap-3 bg-deep-purple-400"
            size="sm"
          >
            <PlusIcon className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkProduct;
