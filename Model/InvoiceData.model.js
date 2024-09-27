const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvoiceDataSchema = new Schema({
    companyName: {
      type: String,
      required: true,
    },
    companyAddress: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String, // Base 64 format
      required: true,
    }
  }, {
    timestamps: true,
  });
  

const InvoiceData = mongoose.model("InvoiceData", InvoiceDataSchema);

module.exports = InvoiceData;

