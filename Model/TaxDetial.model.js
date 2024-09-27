const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TaxDetialSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true, 
  },
  masterid: {
    type: Number,
    required: true,
  },
  components: { 
    type: String,
    required: true,
  },
  percentage: { 
    type: Number,
    required: true,
  }
});

// Apply the auto-increment plugin to the 'id' field
TaxDetialSchema.plugin(AutoIncrement, { inc_field: 'id' });

const TaxDetial = mongoose.model('TaxDetial', TaxDetialSchema);
module.exports = TaxDetial;
