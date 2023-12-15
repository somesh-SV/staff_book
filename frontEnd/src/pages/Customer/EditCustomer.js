import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const EditCustomer = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-md">
        <Card className="p-4">
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Edit Customer
          </Typography>
          <form className="space-y-4">
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Customer Name
              </Typography>
              <Input
                size="regular"
                placeholder="Enter Customer Name ..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                Phone Number
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="phone Number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="space-y-2">
              <Typography variant="h6" color="blue-gray">
                GST
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="GST Number ... "
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
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
              />
            </div>
            <Button className="bg-blue-700" fullWidth>
              Save
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EditCustomer;
