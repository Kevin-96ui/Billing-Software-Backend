const mongoose = require('mongoose');

// Define the counter schema
const counterSchema = new mongoose.Schema({
    _id: String,
    sequence_value: Number,
});

// Define the counter model
const Counter = mongoose.model('Counter', counterSchema);

// Define the user schema
const userSchema = new mongoose.Schema({
    userID: {
        type: Number,
        unique: true,
    },
    userType: {
        type: String,
        enum: ['Admin', 'User'],
        required: true,
    },
    Type: {
        type: Number,
        enum: [1, 2],
        default: function () {
            return this.userType === 'Admin' ? 1 : 2;
        },
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// Function to get the next sequence value
const getNextSequence = async (name) => {
    const counter = await Counter.findByIdAndUpdate(
        { _id: name },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return counter.sequence_value;
};

// Middleware to auto-increment userID before saving
userSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            this.userID = await getNextSequence('user_id');
            console.log('New userID assigned:', this.userID); // Debugging line
        } catch (error) {
            console.error('Error assigning userID:', error);
            return next(error);
        }
    }
    next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
