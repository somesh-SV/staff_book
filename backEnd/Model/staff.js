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
});

module.exports = mongoose.model("Staff", StaffSchema);
