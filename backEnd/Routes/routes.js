const express = require("express");
const apiRoutes = express.Router();

const staffContoller = require("../Controller/staffController");
const productContoller = require("../Controller/productController");

// Staff Route
apiRoutes.post("/staff", staffContoller.postStaff);
apiRoutes.get("/staff", staffContoller.getStaff);
apiRoutes.get("/staff/:id", staffContoller.getStaffById);
apiRoutes.put("/staff/:id", staffContoller.updateStaff);
apiRoutes.delete("/staff/:id", staffContoller.deleteStaff);

// Product Route
apiRoutes.post("/product", productContoller.postProduct);
apiRoutes.get("/product", productContoller.getProduct);
apiRoutes.get("/product/:id", productContoller.getProductById);
apiRoutes.put("/product/:id", productContoller.updateProduct);
apiRoutes.delete("/product/:id", productContoller.deleteProduct);

module.exports = apiRoutes;
