const mongoose = require('mongoose');

const bookingRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    adultsCount: {
        type: Number,
        required: true,
    },
    kidsCount: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: false,
    },
    propertyName: {
        type: String,
    },
    propertylocation: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
});

const BookingRequest = mongoose.model('BookingRequest', bookingRequestSchema);

module.exports = BookingRequest;
