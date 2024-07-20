const Property = require("../models/propertyModel");
const ApiFeatures = require('../utils/apifeatures');

// Creating a new Property
exports.propertyList = async (req, res) => {
    try {
        const property = await Property.create(req.body);

        res.status(201.).json({ success: true, property });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
};

exports.getAllPropertys = (async (req, res, next) => {
    const apiFeature = new ApiFeatures(Property.find(), req.query)
        .search().limit();
    let properties = await apiFeature.query;
    res.status(200).json(properties);
})


exports.propertyDetail = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};