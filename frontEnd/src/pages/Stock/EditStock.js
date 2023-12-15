import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
const EditStock = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="w-full max-w-md">
        <Card className="p-4">
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Edit Stock
          </Typography>
          <form className="space-y-4">
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Product Name
              </Typography>
              <Input
                size="regular"
                placeholder="Enter Product Name ..."
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
                size="lg"
                placeholder="Wages"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button className="bg-blue-700" fullWidth>
              save
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EditStock;
