import React, { useState } from "react";
import { PencilIcon, LinkIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import LinkProduct from "./LinkProduct/LinkProduct";
import EditLinkProduct from "./LinkProduct/EditLinkProduct";

const TABLE_HEAD = [
  "Name",
  `Product`, //${"\u00A0".repeat(7)}Price
  "Phone Number",
  "gst",
  "Address",
  "Action",
];

const TABLE_ROWS = [
  {
    name: "John Doe",
    phoneNumber: "1234567890",
    gst: "ABCD1234E",
    address: "1A, Sample Street, City A",
    products: [
      { name: "Product 1", price: 10.99 },
      { name: "Product 2", price: 15.49 },
      { name: "Product 3", price: 20.99 },
      { name: "Product 4", price: 8.75 },
      { name: "Product 5", price: 12.25 },
    ],
  },
  {
    name: "Alice Smith",
    phoneNumber: "9876543210",
    gst: "EFGH5678I",
    address: "5B, Test Avenue, City B",
    products: [
      { name: "Product 1", price: 10.99 },
      { name: "Product 2", price: 15.49 },
      { name: "Product 3", price: 20.99 },
      { name: "Product 4", price: 8.75 },
      { name: "Product 5", price: 12.25 },
      { name: "Product 6", price: 18.49 },
      { name: "Product 7", price: 22.99 },
      { name: "Product 8", price: 14.75 },
      { name: "Product 9", price: 9.25 },
      { name: "Product 10", price: 16.99 },
    ],
  },
  {
    name: "John Doe",
    phoneNumber: "1234567890",
    gst: "ABCD1234E",
    address: "1A, Sample Street, City A",
    products: [
      { name: "Product 1", price: 10.99 },
      { name: "Product 2", price: 15.49 },
      { name: "Product 3", price: 20.99 },
      { name: "Product 4", price: 8.75 },
      { name: "Product 5", price: 12.25 },
    ],
  },
];

const ViewCustomer = () => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div>
      <div className="shadow-md p-2">
        {isEdit ? <LinkProduct /> : <EditLinkProduct />}
      </div>
      <Card className="h-full w-full mt-5">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Customer List
              </Typography>
            </div>
            <div>
              <Button
                onClick={() => setIsEdit(true)}
                className="inline-flex item-center gap-2 p-2 px-4 bg-blue-800"
              >
                <UserPlusIcon className="w-4 h-4" />
                Add
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <div className="w-full overflow-x-auto h-[450px]">
            <table className="w-full min-w-max table-auto text-left overflow-x-auto">
              <thead>
                <tr className="sticky top-0">
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-600 p-4"
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal leading-none "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ name, phoneNumber, gst, address, products }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-3"
                      : "p-3 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={`${classes} cursor-pointer `}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <ul className="h-32 overflow-y-auto space-y-1">
                              {products.map((product, idx) => (
                                <li key={idx}>{product.name}</li>
                                // <li key={idx} style={{ display: "flex" }}>
                                //   <span style={{ marginRight: "20px" }}>
                                //     {product.name}
                                //   </span>
                                //   <span>${product.price.toFixed(2)}</span>
                                // </li>
                              ))}
                            </ul>
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {phoneNumber}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {gst}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {address}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <span className="inline-flex items-center space-x-3">
                            <Link
                              to={"/editCustomer"}
                              onClick={() => console.log("from edit")}
                            >
                              <PencilIcon className="w-5 h-5 text-blue-700" />
                            </Link>
                            <Link>
                              <TrashIcon className="w-5 h-5 text-red-700" />
                            </Link>
                            <button onClick={() => setIsEdit(false)}>
                              <LinkIcon className="w-5 h-5 text-teal-700" />
                            </button>
                          </span>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-3 -mt-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ViewCustomer;
