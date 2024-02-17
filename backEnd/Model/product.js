const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: String,
  img: String,
  productId: Number,
  modelNo: Number,
  wages: Number,
  stock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
