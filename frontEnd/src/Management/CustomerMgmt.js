import React, { useState } from "react";
import { PencilIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  Button,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Images from "../resource/img/imges";
import EditLinkProduct from "../pages/Customer/LinkProduct/EditLinkProduct";
import LinkPrtoduct from "../pages/Customer/LinkProduct/LinkProduct";

const TABLE_HEAD = ["Image", "Product", "Price", "Action"];

const TABLE_ROWS = [
  {
    img: Images.product1,
    name: "Ava Martinez",
    price: 30,
  },
  {
    img: Images.product2,
    name: "William Garcia",
    price: 25,
  },
  {
    img: Images.product3,
    name: "Charlotte Lopez",
    price: 40,
  },
  {
    img: Images.product4,
    name: "James Lee",
    price: 20,
  },
  {
    img: Images.product5,
    name: "Mia Hill",
    price: 50,
  },
];

const CustomerMgmt = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <div>
        <div className="flex flex-col flex-wrap items-center">
          <Typography variant="h6" color="blue-gray">
            Alice Smith
          </Typography>
          <Typography variant="h6" color="blue-gray">
            Ph No : 9876543210
          </Typography>

          <Typography className="flex gap-2" variant="h6" color="blue-gray">
            Address : <address>5B, Test Avenue, City B</address>
          </Typography>
        </div>
        {isEdit ? <EditLinkProduct setIsEdit={setIsEdit} /> : <LinkPrtoduct />}
      </div>
      <Card className="h-full w-full">
        <div className="m-3 mb-5 flex flex-col justify-between md:flex-row md:items-center">
          <div>
            <Typography variant="h6" color="blue-gray">
              Product List
            </Typography>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto min-h-fit max-h-[500px] no-scrollbar">
          <table className="w-full min-w-max table-auto text-left">
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
              {TABLE_ROWS.map(({ img, name, price }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-3"
                  : "p-3 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="w-24 min-h-32 max-h-fit">
                        <img
                          className="rounded-lg object-cover object-center"
                          src={img}
                          alt={name}
                        />
                      </div>
                    </td>
                    <td className={classes}>
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
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <span className="inline-flex items-center space-x-3">
                        <Link onClick={() => setIsEdit(true)}>
                          <PencilIcon className="w-5 h-5 text-blue-700" />
                        </Link>
                        <Link>
                          <TrashIcon className="w-5 h-5 text-red-700" />
                        </Link>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-3">
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

export default CustomerMgmt;
