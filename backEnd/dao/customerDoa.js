const customer = require("../Model/customer");

module.exports.postCustomer = async (requestData, callback) => {
  try {
    let data = new customer(requestData);
    let response = await data.save();
    callback(null, response);
  } catch (err) {
    callback(err);
  }
};

module.exports.getCustomer = async (callback) => {
  try {
    const response = await customer.find();
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.getCustomerById = async (id, callback) => {
  try {
    const response = await customer.find({ _id: id });
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.deleteCustomer = async (id, callback) => {
  try {
    const response = await customer.findByIdAndDelete(id);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.updateCustomer = async (id, requestData, callback) => {
  try {
    const response = await customer.findByIdAndUpdate(id, requestData);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};
