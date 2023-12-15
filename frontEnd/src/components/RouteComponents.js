import Dashboard from "../pages/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStaff from "../pages/Staff/AddStaff";
import EditStaff from "../pages/Staff/EditStaff";
import ViewStaff from "../pages/Staff/ViewStaff";
import AddStock from "../pages/Stock/AddStock";
import EditStock from "../pages/Stock/EditStock";
import ViewStock from "../pages/Stock/ViewStock";
import StockMgmt from "../pages/StockManagement/StockMgmt";
import AddCustomer from "../pages/Customer/AddCustomer";
import ViewCustomer from "../pages/Customer/ViewCustomer";
import EditCustomer from "../pages/Customer/EditCustomer";

const RouteComponents = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/addStaff" element={<AddStaff />} />
        <Route path="/editStaff" element={<EditStaff />} />
        <Route path="/viewStaff" element={<ViewStaff />} />
        <Route path="/addStock" element={<AddStock />} />
        <Route path="/editStock" element={<EditStock />} />
        <Route path="/viewStock" element={<ViewStock />} />
        <Route path="/stockMgmt" element={<StockMgmt />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
        <Route path="/editCustomer" element={<EditCustomer />} />
        <Route path="/viewCustomer" element={<ViewCustomer />} />
      </Routes>
    </div>
  );
};

export default RouteComponents;
