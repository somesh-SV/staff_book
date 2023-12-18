import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const AddStock = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="w-full max-w-md">
        <Card className="p-4">
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Add Stock
          </Typography>
          <form className="space-y-4">
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Product Name
              </Typography>
              <Input
                type="number"
                placeholder="Enter Product Name ..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="py-2">
              <input type="file" />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Product ID
              </Typography>
              <Input
                type="number"
                placeholder="Enter Product ID ..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Model No
              </Typography>
              <Input
                type="number"
                placeholder="Enter Model No ..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Wages
              </Typography>
              <Input
                type="number"
                placeholder="Wages"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button className="bg-blue-700" fullWidth>
              Add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddStock;
