import React, { useState } from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

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
import { useNavigate } from "react-router-dom";
import EditButton from "../../components/Edit_Delete_Button/EditButton";
import DeleteButton from "../../components/Edit_Delete_Button/DeleteButton";

const TABLE_HEAD = ["Name", "Phone Number", "GST", "Address", "Action"];

const TABLE_ROWS = [
  {
    name: "Alice Smith",
    phoneNumber: "9876543210",
    gst: "EFGH5678I",
    address: "5B, Test Avenue, City B",
  },
  {
    name: "John Doe",
    phoneNumber: "1234567890",
    gst: "ABCD1234E",
    address: "1A, Sample Street, City A",
  },
  {
    name: "Emma Johnson",
    phoneNumber: "2345678901",
    gst: "IJKL9012M",
    address: "10C, Example Road, City C",
  },
  {
    name: "Michael Brown",
    phoneNumber: "3456789012",
    gst: "MNOP3456Q",
    address: "3D, Mock Lane, City D",
  },
  {
    name: "Sophia Wilson",
    phoneNumber: "4567890123",
    gst: "QRST5678U",
    address: "7E, Demonstration Street, City E",
  },
  {
    name: "Oliver Davis",
    phoneNumber: "5678901234",
    gst: "UVWX9012Y",
    address: "2F, Trial Avenue, City F",
  },
  {
    name: "Ava Martinez",
    phoneNumber: "6789012345",
    gst: "YZAB6789C",
    address: "9G, Pilot Road, City G",
  },
  {
    name: "William Garcia",
    phoneNumber: "7890123456",
    gst: "CDEF1234G",
    address: "4H, Sample Lane, City H",
  },
  {
    name: "Charlotte Lopez",
    phoneNumber: "8901234567",
    gst: "GHIJ7890K",
    address: "6I, Test Street, City I",
  },
  {
    name: "James Lee",
    phoneNumber: "9012345678",
    gst: "LMNO5678P",
    address: "8J, Example Avenue, City J",
  },
  {
    name: "Mia Hill",
    phoneNumber: "0123456789",
    gst: "PQRS9012T",
    address: "5K, Mock Road, City K",
  },
  {
    name: "Ethan Clark",
    phoneNumber: "1234567890",
    gst: "WXYZ1234D",
    address: "1L, Demonstration Lane, City L",
  },
];

const ViewCustomer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Customer List
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  color="deep-purple"
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button
                onClick={() => navigate("/addCustomer")}
                className="flex items-center gap-3 bg-deep-purple-400"
                size="sm"
              >
                <PlusIcon className="h-4 w-4" /> Add Customer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <div className="w-full overflow-x-auto min-h-fit max-h-[500px] no-scrollbar">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr className="sticky top-0">
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-deep-purple-400 p-4"
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
                  ({ name, phoneNumber, gst, address }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-3"
                      : "p-3 border-b border-deep-purple-50";

                    return (
                      <tr key={index}>
                        <td
                          className={`${classes} cursor-pointer`}
                          onClick={() => navigate("/customerMgmt")}
                        >
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
                            <EditButton path={"/editCustomer"} />
                            <DeleteButton />
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
