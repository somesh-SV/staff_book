import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import AsyncSelect from "react-select/async";
import EditButton from "../../components/Edit_Delete_Button/EditButton";
import DeleteButton from "../../components/Edit_Delete_Button/DeleteButton";
import * as materialIcon from "@mui/icons-material";
import Bill from "./Bill";

const TABLE_HEAD = ["Product Name", "Price", "Quantity", "Total", "Action"];

const TABLE_ROWS = [
  {
    ProductName: "T-shirt",
    price: 15.99,
    Quantity: 2,
    Total: 31.98,
  },
  {
    ProductName: "Jeans",
    price: 29.99,
    Quantity: 1,
    Total: 29.99,
  },
  {
    ProductName: "Sneakers",
    price: 49.99,
    Quantity: 1,
    Total: 49.99,
  },
  {
    ProductName: "Backpack",
    price: 39.99,
    Quantity: 1,
    Total: 39.99,
  },
  {
    ProductName: "Notebook",
    price: 4.99,
    Quantity: 3,
    Total: 14.97,
  },
  {
    ProductName: "Water Bottle",
    price: 9.99,
    Quantity: 2,
    Total: 19.98,
  },
];

const Invoice = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const invoiceRef = useRef(null);

  const generatePDF = () => {
    const element = invoiceRef.current;
    const opt = {
      margin: 0,
      filename: "customized_invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, height: 1000 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .outputPdf("blob")
      .then(function (pdf) {
        const url = URL.createObjectURL(pdf);
        window.open(url, "_blank");
      });
  };

  const grandTotal = TABLE_ROWS.reduce((total, item) => {
    return total + item.Quantity * item.price;
  }, 0);

  return (
    <>
      <Card className="w-full h-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="inline-flex flex-wrap justify-between items-center w-full">
            <Typography variant="h5" color="indigo">
              Invoice
            </Typography>
            <Button
              size="sm"
              color="indigo"
              onClick={handleOpen}
              className="space-x-3 p-2"
            >
              <span>Preview</span>
              <span>
                <materialIcon.Visibility className="w-5 h-5 text-gray-50" />
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <div>
            <Typography variant="h6" color="indigo">
              CUSTOMER
            </Typography>
            <hr className="mb-4 mt-1 bg-gradient-to-r from-indigo-500 p-0.5 rounded-3xl" />
            <form>
              <div className="inline-flex justify-between w-full gap-4">
                <AsyncSelect className="w-full" isClearable />
                <Input label="Phone Number" type="number" color="indigo" />
                <Input label="GST" type="number" color="indigo" />
                <Input label="Address" color="indigo" />
              </div>
            </form>
          </div>
          <div className="mt-5">
            <Typography variant="h6" color="indigo">
              Purchase List
            </Typography>
            <hr className="mb-4 mt-1 bg-gradient-to-r from-indigo-500 p-0.5 rounded-3xl" />
            <form className="inline-flex justify-between gap-4 w-full">
              <AsyncSelect className="w-full" isClearable />
              <Input label="Price" type="number" color="indigo" />
              <Input label="Quantity" type="number" color="indigo" />
              <Input label="Total" color="indigo" />
              <Button size="sm" color="indigo">
                Add
              </Button>
            </form>
            <div className="h-full w-full mt-4">
              <div className="flex">
                <table className="w-full min-w-max table-auto text-center ">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-gray-200 p-4 bg-indigo-400"
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
                  <tbody className="">
                    {TABLE_ROWS.map((items, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-gray-200";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {items.ProductName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {items.price}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {items.Quantity}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                            >
                              {items.Total}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <span className="inline-flex items-center space-x-3">
                              <EditButton />
                              <DeleteButton />
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div class="p-2 min-w-max mt-auto">
                  <div class="flex border-b border-gray-200 justify-between w-96 p-2">
                    <span>SubTotal</span>
                    <span>6658</span>
                  </div>
                  <div class="flex border-b border-gray-200 justify-between w-96 p-2">
                    <span>GST 5%</span>
                    <span>608</span>
                  </div>
                  <div class="flex border-b border-gray-200 justify-between w-96 p-2">
                    <span>Total Amount</span>
                    <span>7858</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Dialog size="xxl" open={open} handler={handleOpen}>
        <DialogBody className="overflow-y-auto ">
          <div className="max-h-fit" ref={invoiceRef}>
            <Bill TABLE_ROWS={TABLE_ROWS} grandTotal={grandTotal} />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="indigo" onClick={generatePDF}>
            <span>Download</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Invoice;
