const mongoose = require('mongoose');

// Main schema for 'TaxMaster' with embedded 'Detail' array
const TaxMasterSchema = new mongoose.Schema({
  Masterid: {
    type: Number,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  activestatus: {
    type: Boolean,
    required: true,
  },
  // Sub-array for 'Detail' with tax components
  Detail: [{
    MasterDetialid: {
      type: Number,
      unique: true,
    },
    components: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    }
  }]
});

// Apply the auto-increment manually in the pre-save hook
TaxMasterSchema.pre("save", async function (next) {
  const TaxMasterModel = mongoose.model('TaxMaster');
  if (this.isNew) {
    // Auto-increment 'Masterid' for the main TaxMaster document
    const lastTaxMaster = await TaxMasterModel.findOne().sort({ Masterid: -1 });
    this.Masterid = lastTaxMaster ? lastTaxMaster.Masterid + 1 : 1;
    // Set 'MasterDetialid' to be the same as 'Masterid'
    this.Detail.forEach(detail => {
      detail.MasterDetialid = this.Masterid;
    });
  }
  next();
});

const TaxMaster = mongoose.model('TaxMaster', TaxMasterSchema);
module.exports = TaxMaster;
