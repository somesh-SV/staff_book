const express = require("express");
const apiRoutes = express.Router();

const staffContoller = require("../Controller/staffController");

// Staff Route
apiRoutes.post("/staff", staffContoller.postStaff);
apiRoutes.get("/staff", staffContoller.getStaff);
apiRoutes.get("/staff/:id", staffContoller.getStaffById);
apiRoutes.put("/staff/:id", staffContoller.updateStaff);
apiRoutes.delete("/staff/:id", staffContoller.deleteStaff);

module.exports = apiRoutes;
