const product = require("../Model/product");

module.exports.postProduct = async (requestData, callback) => {
  try {
    let data = new product(requestData);
    let response = await data.save();
    callback(null, response);
  } catch (error) {
    callback(error);
  }
};

module.exports.getProduct = async (callback) => {
  try {
    const response = await product.find();
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.getProductById = async (id, callback) => {
  try {
    const response = await product.find({ _id: id });
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.deleteProduct = async (id, callback) => {
  try {
    const response = await product.findByIdAndDelete(id);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};

module.exports.updateProduct = async (id, requestData, callback) => {
  try {
    const response = await product.findByIdAndUpdate(id, requestData);
    if (response) {
      callback(null, response);
    }
  } catch (err) {
    callback(err);
  }
};
