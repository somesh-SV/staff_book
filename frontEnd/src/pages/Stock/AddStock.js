import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { ToastSuccess } from "../../components/Toaster/Tost";
import { useNavigate } from "react-router-dom";
import { PostProduct } from "../../services/productServices";
const AddStock = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      productName: "",
      img: "",
      productId: "",
      modelNo: "",
      wages: "",
    },
  });

  const onSubmit = async (data) => {
    // setFormData({ ...data, img: data.img[0] });
    try {
      const res = await PostProduct(data);
      console.log(res);
      if (res) {
        navigate("/viewStock");
        ToastSuccess(res.message);
      }
    } catch (error) {
      console.log("Err : ", error);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-md">
        <Card className="p-4">
          <Typography variant="h4" color="deep-purple" className="mb-4">
            Add Stock
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Product Name
              </Typography>
              <Input
                placeholder="Enter Product Name ..."
                className=" !border-t-blue-gray-200 focus:!border-deep-purple-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("productName")}
              />
            </div>
            <div className="py-2">
              <input type="file" {...register("img")} />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Product ID
              </Typography>
              <Input
                placeholder="Enter Product ID ..."
                className=" !border-t-blue-gray-200 focus:!border-deep-purple-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("productId")}
              />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Model No
              </Typography>
              <Input
                placeholder="Enter Model No ..."
                className=" !border-t-blue-gray-200 focus:!border-deep-purple-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("modelNo")}
              />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Wages
              </Typography>
              <Input
                placeholder="Wages"
                className=" !border-t-blue-gray-200 focus:!border-deep-purple-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("wages")}
              />
            </div>
            <Button type="submit" className="bg-deep-purple-400" fullWidth>
              Add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddStock;
