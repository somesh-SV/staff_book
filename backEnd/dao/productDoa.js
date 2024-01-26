const product = require("../Model/product");
const staffMgmt = require("../Model/staffMgmt");

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
      for (const productItem of response) {
        const staffData = await staffMgmt.find({
          productName: productItem.productName,
        });

        const totalQuantity = staffData.reduce(
          (acc, entry) => acc + entry.quantity,
          0
        );

        productItem.stock = totalQuantity;

        await product.updateOne(
          { _id: productItem._id },
          { $set: { stock: totalQuantity } }
        );
      }
    }

    callback(null, response);
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
