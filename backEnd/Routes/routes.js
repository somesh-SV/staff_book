const express = require("express");
const apiRoutes = express.Router();

const staffContoller = require("../Controller/staffController");
const staffMgmtContoller = require("../Controller/staffMgmtController");
const productContoller = require("../Controller/productController");
const customerContoller = require("../Controller/customerController");

// Staff Route
apiRoutes.post("/staff", staffContoller.postStaff);
apiRoutes.get("/staff", staffContoller.getStaff);
apiRoutes.get("/staff/:id", staffContoller.getStaffById);
apiRoutes.put("/staff/:id", staffContoller.updateStaff);
apiRoutes.delete("/staff/:id", staffContoller.deleteStaff);

// Staff Management
apiRoutes.post("/staffMgmt", staffMgmtContoller.postStaffMgmt);
apiRoutes.get("/staffMgmt/:id", staffMgmtContoller.getStaffMgmtById);
apiRoutes.put("/staffMgmt/:id", staffMgmtContoller.updateStaffMgmt);
apiRoutes.put("/staffBalance/:id", staffMgmtContoller.updateBalance);
apiRoutes.delete("/staffMgmt/:id", staffMgmtContoller.deleteStaffMgmt);

// Product Route
apiRoutes.post("/product", productContoller.postProduct);
apiRoutes.get("/product", productContoller.getProduct);
apiRoutes.get("/product/:id", productContoller.getProductById);
apiRoutes.put("/product/:id", productContoller.updateProduct);
apiRoutes.delete("/product/:id", productContoller.deleteProduct);

// Customer Route
apiRoutes.post("/customer", customerContoller.postCustomer);
apiRoutes.get("/customer", customerContoller.getCustomer);
apiRoutes.delete("/customer/:id", customerContoller.deleteCustomer);
apiRoutes.get("/customer/:id", customerContoller.getCustomerById);
apiRoutes.put("/customer/:id", customerContoller.updateCustomer);

// Customer Management
apiRoutes.post("/customerProudcts/:id", customerContoller.getLinkedProducts);
apiRoutes.put(
  "/updateLinkedProduct/:id",
  customerContoller.updatedLinkedProducts
);
apiRoutes.put(
  "/deleteLinkedProduct/:id",
  customerContoller.deleteLinkedProduct
);
module.exports = apiRoutes;
