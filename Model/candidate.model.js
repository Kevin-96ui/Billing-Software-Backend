const mongoose = require('mongoose');
const { Schema } = mongoose;

const candidateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  memberType: {
    type: String,
    enum: ['employee', 'intern'],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
