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
    default: 20,
  },
});

module.exports = mongoose.model("Staff", StaffSchema);
