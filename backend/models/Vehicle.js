const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['car', 'truck', 'motorcycle', 'van'],
        required: true
    },
    licensePlate: {
        type: String,
        required: true,
        unique: true
    },
    dailyRate: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    image: {
        type: String // URL or path to image
    },
    description: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);