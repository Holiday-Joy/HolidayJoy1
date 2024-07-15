const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyType: { type: String, enum: ['Homestay', 'Hotel', 'Resort', 'Private Room', 'Dormitory', 'Tree house', 'Villa', 'Hut', 'Yacht', 'Apartment', 'Cottage', 'Tent'], required: true },
    propertyName: { type: String, required: true },
    listEntireHome: { type: Boolean, required: true },
    exactLocationName: { type: String, required: true },
    popularNearbyLocationName: { type: String, required: true },
    nearbyAttractions: [{
        name: {
            type: String,
            required: true
        },
        distance: {
            type: Number,
            required: true,
            min: [0, 'Distance must be positive']
        }
    }],
    address: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        landMark: { type: String, required: true },
        pincode: { type: Number }
    },
    price: {
        entireHouse: { type: Number, required: true },
        perHead: { type: Number, required: true }
    },
    numberOfPeople: { type: Number, required: true },
    numberOfBeds: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    checkInTime: { type: String, required: false },
    checkOutTime: { type: String, required: false },
    toiletries: { type: [String], default: ['Towels', 'Hand-wash', 'Soap', 'Shampoo'] },
    amenities: {
        kitchen: { type: Boolean },
        tv: { type: Boolean },
        satelliteTV: { type: Boolean },
        wifi: { type: Boolean },
        petsAllowed: { type: Boolean },
        washingMachine: { type: Boolean },
        dryer: { type: Boolean },
        freeParking: { type: Boolean },
        smokingAllowed: { type: Boolean },
        indoorFireplace: { type: Boolean },
        gym: { type: Boolean },
        kidsPlayArea: { type: Boolean },
        swimmingPool: { type: Boolean },
        hotTub: { type: Boolean },
        iron: { type: Boolean },
        elevatorInBuilding: { type: Boolean },
        airConditioning: { type: Boolean },
        heating: { type: Boolean },
        wheelchairAccessible: { type: Boolean },
        jacuzzi: { type: Boolean }
    },
    houseRules: { type: String },
    cancellationPolicy: { type: String },
    description: { type: String },
    openAllYearRound: {
        status: { type: Boolean, required: true },
        closureDates: { type: [Date] }
    },
    photos: [{
        url: { type: String, required: false },
        caption: { type: String }
    }],
    verified: { type: Boolean, default: true },
    websiteURL: { type: String },
    additionalPropertyLinks: { type: [String] }
});

module.exports = mongoose.model('Property', propertySchema);
