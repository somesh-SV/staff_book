const mongoose = require("mongoose");
const moment = require("moment");

const StaffMgmtSchema = new mongoose.Schema({
  staffId: {
    type: String,
  },
  date: {
    type: String,
    default: moment().format("DD-MM-YYYY"),
  },
  productName: {
    type: String,
  },
  wages: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  total: {
    type: Number,
  },
  cashPaid: {
    type: Number,
  },
});

StaffMgmtSchema.pre("save", function (next) {
  this.date = moment(this.date, "DD-MM-YYYY").format("DD-MM-YYYY");
  next();
});

module.exports = mongoose.model("StaffMgmt", StaffMgmtSchema);
