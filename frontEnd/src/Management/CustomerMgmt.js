import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import Images from "../resource/img/imges";
import EditLinkProduct from "../pages/Customer/LinkProduct/EditLinkProduct";
import LinkPrtoduct from "../pages/Customer/LinkProduct/LinkProduct";
import EditButton from "../components/Edit_Delete_Button/EditButton";
import DeleteButton from "../components/Edit_Delete_Button/DeleteButton";
import { GetSingleCustomer } from "../services/customerServices";

const TABLE_HEAD = ["Image", "Product", "Price", "Action"];

const CustomerMgmt = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const [tableRows, setTableRows] = useState([]);
  const [customerDetail, setCustomerDetail] = useState({});

  const getCustomerDetail = async () => {
    try {
      const res = await GetSingleCustomer(id);
      if (res) {
        setCustomerDetail(res.data[0]);
        console.log();
        setTableRows(res.data[0].linkedProducts);
      }
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  useEffect(() => {
    getCustomerDetail();
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg">
        <div className="flex flex-col flex-wrap items-center pt-3">
          <Typography variant="h5" color="deep-purple">
            {customerDetail.customerName}
          </Typography>
          <span className="inline-flex items-center space-x-2">
            <Typography variant="h6" color="deep-purple">
              Ph No :
            </Typography>
            <Typography variant="h6">
              {customerDetail.customerMobileNo}
            </Typography>
          </span>
          <span className="inline-flex items-center space-x-2">
            <Typography variant="h6" color="deep-purple">
              Address :
            </Typography>
            <Typography variant="h6">
              <address>{customerDetail.customerAddress}</address>
            </Typography>
          </span>
        </div>
        {isEdit ? (
          <EditLinkProduct setIsEdit={setIsEdit} />
        ) : (
          <LinkPrtoduct getCustomerDetail={getCustomerDetail} />
        )}
      </div>
      <Card className="h-full w-full">
        <div className="m-3 mb-5 flex flex-col justify-between md:flex-row md:items-center">
          <div>
            <Typography variant="h6" color="deep-purple">
              Product List
            </Typography>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              color="deep-purple"
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
              {tableRows?.map((item, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast
                  ? "p-3"
                  : "p-3 border-b border-deep-purple-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="w-24 min-h-32 max-h-fit">
                        <img
                          className="rounded-lg object-cover object-center"
                          src={item?.productId?.img}
                          alt={"No data"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.productId?.productName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <span className="inline-flex items-center space-x-3">
                        <EditButton fun={() => setIsEdit(true)} />
                        <DeleteButton />
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
