const staff = require("../Model/staff");

module.exports.postStaff = async (requestData, callback) => {
  try {
    let data = new staff(requestData);
    let response = await data.save();
    callback(null, response);
  } catch (error) {
    callback(error);
  }
};

module.exports.getStaff = async (callback) => {
  try {
    const response = await staff.find();
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.getStaffById = async (id, callback) => {
  try {
    const response = await staff.find({ _id: id });
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.deleteStaff = async (id, callback) => {
  try {
    const response = await staff.findByIdAndDelete(id);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.updateStaff = async (id, requestData, callback) => {
  try {
    const response = await staff.findByIdAndUpdate(id, requestData);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};
