const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  img: {
    type: String,
  },
  productId: {
    type: Number,
  },
  modelNo: {
    type: Number,
  },
  wages: {
    type: Number,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
