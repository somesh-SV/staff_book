import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Images from "../../img/imges";
const TABLE_HEAD = [
  "Images",
  "Produc Name",
  "Product ID",
  "Product Model No",
  "stock",
  "Action",
];

const TABLE_ROWS = [
  {
    img: Images.product1,
    ProductName: "Product A",
    ProductId: "PA001",
    ModelNo: "MOD001",
    stock: 50,
  },
  {
    img: Images.product2,
    ProductName: "Product B",
    ProductId: "PB002",
    ModelNo: "MOD002",
    stock: 30,
  },
  {
    img: Images.product3,
    ProductName: "Product C",
    ProductId: "PC003",
    ModelNo: "MOD003",
    stock: 20,
  },
  {
    img: Images.product4,
    ProductName: "Product D",
    ProductId: "PD004",
    ModelNo: "MOD004",
    stock: 15,
  },
  {
    img: Images.product5,
    ProductName: "Product E",
    ProductId: "PE005",
    ModelNo: "MOD005",
    stock: 40,
  },
  {
    img: Images.product6,
    ProductName: "Product F",
    ProductId: "PF006",
    ModelNo: "MOD006",
    stock: 25,
  },
  {
    img: Images.product7,
    ProductName: "Product G",
    ProductId: "PG007",
    ModelNo: "MOD007",
    stock: 10,
  },
  {
    img: Images.product8,
    ProductName: "Product H",
    ProductId: "PH008",
    ModelNo: "MOD008",
    stock: 60,
  },
  {
    img: Images.product9,
    ProductName: "Product I",
    ProductId: "PI009",
    ModelNo: "MOD009",
    stock: 35,
  },
  {
    img: Images.product10,
    ProductName: "Product J",
    ProductId: "PJ010",
    ModelNo: "MOD010",
    stock: 45,
  },
];

const ViewStock = () => {
  return (
    <div>
      <Card className="h-full w-full mt-4">
        <div className="w-full overflow-x-auto  pt-4">
          <div className="m-3 mb-5 flex flex-wrap justify-between">
            <div>
              <Typography variant="h5" color="blue-gray">
                Stock List
              </Typography>
            </div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
          <div className="overflow-x-auto h-[500px]">
            <table className="w-full min-w-max table-auto text-left ">
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
                  ({ img, ProductName, ProductId, ModelNo, stock }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-3 px-4"
                      : "p-3 px-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="w-24 min-h-32 max-h-fit">
                            <img
                              className="rounded-lg object-cover object-center"
                              src={img}
                              alt={"no data"}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {ProductName}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {ProductId}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {ModelNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {stock}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <span className="inline-flex items-center space-x-3">
                            <Link
                              to={"/editStock"}
                              // onClick={() => console.log("from edit")}
                            >
                              <PencilIcon className="w-5 h-5 text-blue-700" />
                            </Link>
                            <Link>
                              <TrashIcon className="w-5 h-5 text-red-700" />
                            </Link>
                          </span>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-blue-gray-50 p-3 ">
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
        </div>
      </Card>
    </div>
  );
};

export default ViewStock;
