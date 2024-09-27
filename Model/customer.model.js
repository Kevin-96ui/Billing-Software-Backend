const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  customername: {
    type: String,
    required: true,
  },
  gstno: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
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
  notes: {
    type: String,
    required: true,
  },
  contactperson: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
    required: true,
  }
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
