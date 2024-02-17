import React, { useEffect, useState } from "react";
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
import { DeleteCustomer, GetCustomer } from "../../services/customerServices";
import { ToastError } from "../../components/Toaster/Tost";
import { useDispatch } from "react-redux";
import { isClose, isOpen } from "../../Redux/Reducer/dialog.reducer";
import CustomDialog from "../../components/Dialog/CustomDialog";

const TABLE_HEAD = ["Name", "Phone Number", "GST", "Address", "Action"];

const ViewCustomer = () => {
  const [tableRows, setTableRows] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCustomerDeatil = async () => {
    try {
      const res = await GetCustomer();
      if (res) {
        setTableRows(res.data);
      }
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  const deleteCustomer = async (_id) => {
    try {
      const res = await DeleteCustomer(_id);
      console.log(res);
      if (res) {
        ToastError(res.message);
        getCustomerDeatil();
        dispatch(isClose(false));
      }
    } catch (error) {
      console.log("Err : ", error);
    }
  };
  const openDialog = (_id) => {
    dispatch(isOpen(true));
    setDeleteId(_id);
  };

  useEffect(() => {
    getCustomerDeatil();
  }, []);

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
                {tableRows.map((item, index) => {
                  const isLast = index === tableRows.length - 1;
                  const classes = isLast
                    ? "p-3"
                    : "p-3 border-b border-deep-purple-50";

                  return (
                    <tr key={index}>
                      <td
                        className={`${classes} cursor-pointer`}
                        onClick={() => navigate(`/customerMgmt/${item._id}`)}
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.customerName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.customerMobileNo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.gst}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.customerAddress}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <span className="inline-flex items-center space-x-3">
                          <EditButton path={`/editCustomer/${item._id}`} />
                          <DeleteButton fun={() => openDialog(item._id)} />
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
      <CustomDialog onConfirm={() => deleteCustomer(deleteId)} />
    </div>
  );
};

export default ViewCustomer;
