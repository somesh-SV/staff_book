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

const TABLE_HEAD = ["Name", "Phone Number", "Address", "Balance", "Action"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    phoneNumber: "1234567890",
    Address: "abc...",
    Balance: 0,
  },
  {
    name: "Alexa Liras",
    phoneNumber: "9898765765",
    Address: "def...",
    Balance: 0,
  },
  {
    name: "Laurent Perrier",
    phoneNumber: "6789876443",
    Address: "ghi...",
    Balance: 0,
  },
  {
    name: "Michael Levi",
    phoneNumber: "9876565543",
    Address: "jkl...",
    Balance: 0,
  },
  {
    name: "John Michael",
    phoneNumber: "1234567890",
    Address: "abc...",
    Balance: 0,
  },
  {
    name: "Alexa Liras",
    phoneNumber: "9898765765",
    Address: "def...",
    Balance: 0,
  },
  {
    name: "Laurent Perrier",
    phoneNumber: "6789876443",
    Address: "ghi...",
    Balance: 0,
  },
  {
    name: "Michael Levi",
    phoneNumber: "9876565543",
    Address: "jkl...",
    Balance: 0,
  },
];

const ViewStaff = () => {
  const navigate = useNavigate();
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Staff List
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
              onClick={() => navigate("/addStaff")}
              className="flex items-center gap-3 bg-blue-700"
              size="sm"
            >
              <PlusIcon className="h-4 w-4" /> Add Staff
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
              {TABLE_ROWS.map(
                ({ name, phoneNumber, Address, Balance }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-3"
                    : "p-3 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td
                        className={`${classes} cursor-pointer`}
                        onClick={() => navigate("/stockMgmt")}
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
                          {Address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Balance}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <span className="inline-flex items-center space-x-3">
                          <Link
                            to={"/editStaff"}
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
  );
};

export default ViewStaff;
