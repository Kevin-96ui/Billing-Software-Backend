// For Intra Inter operation
const mongoose = require('mongoose');

const invoicetypeSchema = new mongoose.Schema({
  key: {
     type: String,
     required: true,
    },
  value: { 
    type: String,
    required: true,
    },
});

const Invoicetype = mongoose.model('Invoicetype', invoicetypeSchema);

module.exports = Invoicetype;