const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  staffName: {
    type: String,
  },
  staffMobileNo: {
    type: Number,
  },
  staffAddress: {
    type: String,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Staff", StaffSchema);
