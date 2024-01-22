const mongoose = require("mongoose");
// const moment = require("moment");

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

// StaffBookSchema.pre("save", function (next) {
//   this.Date = moment(this.Date).format("DD-MM-YYYY");
//   next();
// });

module.exports = mongoose.model("Staff", StaffSchema);
