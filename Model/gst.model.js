const mongoose = require("mongoose");

const gstSchema = new mongoose.Schema({
  ProductID: {
    type: Number,
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
  gstpercentage: {
    type: Number,
    required: true,
  },
});

const GST = mongoose.model("GST", gstSchema);
module.exports = GST;
