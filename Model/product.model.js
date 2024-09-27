const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductID: {
    type: Number,
    unique: true,
  },
  customername: {
    type: String,
    required: true,
  },
  gstno: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  hsn_sac: {
    type: String,
    required: true,
  },
  unit_price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  amount: {
    type: Number,
  },
  discountamount: {
    type: Number,
  },
  totalamount: {
    type: Number,
  },
  grandtotal: {
    type: Number,
  },
  grandtotalrounded: {
    type: Number,
  },
  cgst: {
    type: Number,
    default: 0,
  },
  sgst: {
    type: Number,
    default: 0,
  },
  igst: {
    type: Number,
    default: 0,
  },
});

// auto-increment ProductID before saving
productSchema.pre("save", async function (next) {
  const product = this;

  // Increment ProductID if the product is new
  if (product.isNew) {
    const lastProduct = await Product.findOne().sort({ ProductID: -1 });
    product.ProductID = lastProduct ? lastProduct.ProductID + 1 : 1;
  }

  // Calculate totalamount based on the amount
  product.totalamount = product.amount - product.discountamount; // Assuming totalamount is the same as amount

  next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
