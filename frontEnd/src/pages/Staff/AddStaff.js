import React, { useState } from "react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastSuccess } from "../../components/Toaster/Tost";
import { useNavigate } from "react-router-dom";
import { PostStaff } from "../../services/staffServices";

const schema = yup.object().shape({
  staffName: yup.string().required("Staff Name is required"),
  staffMobileNo: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required(),
  staffAddress: yup.string().required("Address is required"),
});

const AddStaff = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      staffName: "",
      staffMobileNo: "",
      staffAddress: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await PostStaff(data);
      if (res) {
        navigate("/viewStaff");
        ToastSuccess(res.message);
      }
    } catch (error) {
      console.log("Err : ", error);
    }
  };

  return (
    <div className="flex justify-center mt-14">
      <div className="w-full max-w-md">
        <Card className="p-4">
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Add Staff
          </Typography>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Name
              </Typography>
              <Input
                size="regular"
                placeholder="Enter Staff Name ..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("staffName")}
              />
              {errors.staffName && (
                <p className="text-sm text-red-500">
                  {errors.staffName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Phone Number
              </Typography>
              <Input
                size="lg"
                placeholder="Phone Number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("staffMobileNo")}
              />
              {errors.staffMobileNo && (
                <p className="text-sm text-red-500">
                  {errors.staffMobileNo.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Address
              </Typography>
              <Textarea
                placeholder="Address ..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("staffAddress")}
              />
              {errors.staffAddress && (
                <p className="text-sm text-red-500">
                  {errors.staffAddress.message}
                </p>
              )}
            </div>
            <Button type="submit" className="bg-blue-700" fullWidth>
              Add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddStaff;
