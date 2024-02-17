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
    const response = await customer
      .find({ _id: id })
      .populate({ path: "linkedProducts.productId", model: "Product" });
    if (response) {
      console.log(response);
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
    const existingCustomer = await customer.findById(id);

    if (requestData.linkedProducts) {
      const productId = requestData.linkedProducts[0].productId;
      const existingProductIndex = existingCustomer.linkedProducts.findIndex(
        (product) => product.productId.toString() === productId
      );

      if (existingProductIndex !== -1) {
        existingCustomer.linkedProducts[existingProductIndex] =
          requestData.linkedProducts[0];

        const response = await customer
          .findByIdAndUpdate(
            id,
            { $set: { linkedProducts: existingCustomer.linkedProducts } },
            { new: true }
          )
          .populate({ path: "linkedProducts.productId", model: "Product" });
        return callback(null, response);
      } else {
        const updatedLinkedProducts = existingCustomer.linkedProducts.concat(
          requestData.linkedProducts
        );
        const response = await customer
          .findByIdAndUpdate(
            id,
            { $set: { linkedProducts: updatedLinkedProducts } },
            { new: true }
          )
          .populate({ path: "linkedProducts.productId", model: "Product" });
        return callback(null, response);
      }
    } else {
      const response = await customer
        .findByIdAndUpdate(id, requestData, {
          new: true,
        })
        .populate({ path: "linkedProducts.productId", model: "Product" });
      return callback(null, response);
    }
  } catch (err) {
    return callback(err);
  }
};
