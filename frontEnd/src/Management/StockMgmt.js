import React, { useEffect, useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
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
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
const TABLE_HEAD = [
  "Date",
  "ProductName",
  "Wages",
  "Quantity",
  "TotalAmount",
  "CashPaid",
  "Action",
];

const TABLE_ROWS = [
  {
    Date: "2023-12-01",
    ProductName: "Red Rose Bouquet",
    Wages: 29.99,
    Quantity: 3,
    TotalAmount: 89.97,
    CashPaid: 100,
  },
  {
    Date: "2023-12-03",
    ProductName: "White Lily Arrangement",
    Wages: 49.99,
    Quantity: 2,
    TotalAmount: 99.98,
    CashPaid: 100,
  },
  {
    Date: "2023-12-05",
    ProductName: "Sunflower Bouquet",
    Wages: 24.99,
    Quantity: 5,
    TotalAmount: 124.95,
    CashPaid: 130,
  },
  {
    Date: "2023-12-01",
    ProductName: "Red Rose Bouquet",
    Wages: 29.99,
    Quantity: 3,
    TotalAmount: 89.97,
    CashPaid: 100,
  },
  {
    Date: "2023-12-03",
    ProductName: "White Lily Arrangement",
    Wages: 49.99,
    Quantity: 2,
    TotalAmount: 99.98,
    CashPaid: 100,
  },
  {
    Date: "2023-12-05",
    ProductName: "Sunflower Bouquet",
    Wages: 24.99,
    Quantity: 5,
    TotalAmount: 124.95,
    CashPaid: 130,
  },
  {
    Date: "2023-12-01",
    ProductName: "Red Rose Bouquet",
    Wages: 29.99,
    Quantity: 3,
    TotalAmount: 89.97,
    CashPaid: 100,
  },
  {
    Date: "2023-12-03",
    ProductName: "White Lily Arrangement",
    Wages: 49.99,
    Quantity: 2,
    TotalAmount: 99.98,
    CashPaid: 100,
  },
  {
    Date: "2023-12-05",
    ProductName: "Sunflower Bouquet",
    Wages: 24.99,
    Quantity: 5,
    TotalAmount: 124.95,
    CashPaid: 130,
  },
  {
    Date: "2023-12-01",
    ProductName: "Red Rose Bouquet",
    Wages: 29.99,
    Quantity: 3,
    TotalAmount: 89.97,
    CashPaid: 100,
  },
  {
    Date: "2023-12-03",
    ProductName: "White Lily Arrangement",
    Wages: 49.99,
    Quantity: 2,
    TotalAmount: 99.98,
    CashPaid: 100,
  },
  {
    Date: "2023-12-05",
    ProductName: "Sunflower Bouquet",
    Wages: 24.99,
    Quantity: 5,
    TotalAmount: 124.95,
    CashPaid: 130,
  },
];
const ProductOptions = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const StockMgmt = () => {
  const tableRef = useRef(null);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = tableRef.current.scrollHeight;
    }
  }, []);

  return (
    <div>
      <Card className="mb-4">
        <CardBody>
          <div className="flex justify-between mb-5">
            <Typography variant="h6" color="blue-gray">
              Staff Name : Alexa Liras
            </Typography>
            <Typography variant="h6" color="blue-gray">
              Phone No : 9898765765
            </Typography>
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
            <div>
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
            </div>
            <div>
              <Input label="Wages" size="regular" />
            </div>
            <div>
              <Input label="Quantity" type="number" size="regular" />
            </div>
            <div>
              <Input
                disabled
                //value={0}
                label="Total"
                type="number"
                size="regular"
              />
            </div>
            <div>
              <Input label="Cash Paid" size="regular" />
            </div>
            <div className="space-x-3 ml-auto">
              <Button className="bg-red-600 hover:bg-red-400">Clear</Button>
              <Button className="bg-teal-600 hover:bg-teal-400">Submit</Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none p-0">
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-96">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
            <div className="ml-auto items-center pr-6">
              <Typography variant="h6" color="blue-gray">
                Balance : 100
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0 ">
          <div
            className="w-full overflow-x-auto h-[450px] no-scrollbar"
            ref={tableRef}
          >
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr className="sticky top-0 ">
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-600 p-4 text-white font-normal leading-none"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((item, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.Date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.ProductName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.Wages}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.Quantity}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.TotalAmount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.CashPaid}
                        </Typography>
                      </td>
                      <td className={classes} colSpan={1}>
                        <span className="inline-flex items-center space-x-3">
                          <Link onClick={() => console.log("from edit")}>
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
                <tr>
                  <td colSpan={3}></td>
                  <td className="p-4 border-t border-blue-gray-100">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Subtotal:
                    </Typography>
                  </td>
                  <td className="pl-4 border-t border-blue-gray-100">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      314.9
                    </Typography>
                  </td>
                  <td className="pl-4 border-t border-blue-gray-100">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      330
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 -mt-5">
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

export default StockMgmt;
