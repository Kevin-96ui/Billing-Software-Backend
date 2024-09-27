const mongoose = require('mongoose');
const { Schema } = mongoose;

const masterproductSchema = new Schema({
    ProductID: {
        type: Number,
        unique: true,
        required: true, 
    },
    HSN_SAC: {
        type: Number, 
        required: true,
    },
    Product_Detials: {
        type: String,
        required: true,
    },
    Unit_Price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    taxmaster: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
}, {
  timestamps: true, 
});

const MasterProduct = mongoose.model('MasterProduct', masterproductSchema);

module.exports = MasterProduct;
