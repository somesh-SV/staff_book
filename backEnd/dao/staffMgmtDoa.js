const staff = require("../Model/staff");
const staffMgmt = require("../Model/staffMgmt");

module.exports.postStaffMgmt = async (requestData, callback) => {
  try {
    let data = new staffMgmt(requestData);
    let response = await data.save();
    callback(null, response);
  } catch (err) {
    callback(err);
  }
};

module.exports.getStaffMgmtById = async (id, callback) => {
  try {
    const response = await staffMgmt.find({
      $or: [{ staffId: id }, { _id: id }],
    });
    if (response.length === 0) {
      await staff.findOneAndUpdate(
        { _id: id },
        { $set: { balance: 0 } },
        { new: true }
      );
    }
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.updateStaffMgmt = async (id, requestData, callback) => {
  try {
    const response = await staffMgmt.findByIdAndUpdate(id, requestData);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.updateBalance = async (id, requestData, callback) => {
  try {
    const response = await staff.findOneAndUpdate(
      { _id: id },
      { $set: requestData },
      { new: true }
    );
    //console.log(response);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.deleteStaffMgmt = async (id, callback) => {
  try {
    const response = await staffMgmt.findByIdAndDelete(id);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};
