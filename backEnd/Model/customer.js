const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  customerMobileNo: {
    type: Number,
  },
  customerAddress: {
    type: String,
  },
  gst: {
    type: Number,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
