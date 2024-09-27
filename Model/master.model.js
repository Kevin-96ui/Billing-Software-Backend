const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({
  type: { type: String,},
  value: { type: String,},
});

const Master = mongoose.model('Master', masterSchema);

module.exports = Master;
