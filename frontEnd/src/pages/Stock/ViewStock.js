import React from "react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
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
import { Link, useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Produc Name", "stock", "Action"];

const TABLE_ROWS = [
  {
    ProductName: "Assorted Spring Flowers Basket",
    stock: 1,
  },
  {
    ProductName: "Sunflower Bouquet",
    stock: 2,
  },
  {
    ProductName: "White Lily Arrangement",
    stock: 3,
  },
  {
    ProductName: "Tulip Mix in Vase",
    stock: 2,
  },
  {
    ProductName: "Assorted Spring Flowers Basket",
    stock: 1,
  },
  {
    ProductName: "Sunflower Bouquet",
    stock: 2,
  },
  {
    ProductName: "White Lily Arrangement",
    stock: 3,
  },
  {
    ProductName: "Tulip Mix in Vase",
    stock: 2,
  },
  {
    ProductName: "Assorted Spring Flowers Basket",
    stock: 1,
  },
  {
    ProductName: "Sunflower Bouquet",
    stock: 2,
  },
  {
    ProductName: "White Lily Arrangement",
    stock: 3,
  },
  {
    ProductName: "Tulip Mix in Vase",
    stock: 2,
  },
];

const ViewStock = () => {
  const navigate = useNavigate();
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Stock List
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button
              onClick={() => navigate("/addStock")}
              className="flex items-center gap-3 bg-blue-700"
              size="sm"
            >
              <PlusIcon className="h-4 w-4" /> Add Stock
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <div className="w-full overflow-x-auto h-[450px] no-scrollbar">
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
              {TABLE_ROWS.map(({ ProductName, stock }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-3 px-4"
                  : "p-3 px-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
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
                        {stock}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <span className="inline-flex items-center space-x-3">
                        <Link
                          to={"/editStock"}
                          onClick={() => console.log("from edit")}
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
              })}
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
  );
};

export default ViewStock;
