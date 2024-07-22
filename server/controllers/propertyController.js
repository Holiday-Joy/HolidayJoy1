const Property = require("../models/propertyModel");
const ApiFeatures = require('../utils/apifeatures');
const cloudinary = require('../config/cloudinaryCofig');
// Creating a new Property  with image uploads to Cloudinary
exports.propertyList = async (req, res) => {
    try {
        const photos = req.body.photos;
        const uploadPromises = photos.map(photo => {
            return cloudinary.uploader.upload(photo.url, { folder: 'properties' });
        });

        const uploadResults = await Promise.all(uploadPromises);
        const updatedPhotos = uploadResults.map((result, index) => ({
            url: result.secure_url,
            caption: photos[index].caption
        }));

        const propertyData = {
            ...req.body,
            photos: updatedPhotos,
        };

        const property = await Property.create(propertyData);

        res.status(201).json({ success: true, property });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

// exports.propertyList = async (req, res) => {
//     try {
//         const property = await Property.create(req.body);

//         res.status(201.).json({ success: true, property });
//     }
//     catch (e) {
//         res.status(400).json({ message: e.message });
//     }
// };

// Get all properties
exports.getAllPropertys = (async (req, res, next) => {
    const resultPerPage = 8;
    const apiFeature = new ApiFeatures(Property.find(), req.query)
        .search().pagination(resultPerPage);
    let properties = await apiFeature.query;
    res.status(200).json(properties);
})

// Get properties for featured stay limit and category
exports.featuredStay = async (req, res) => {
    const apiFeature = new ApiFeatures(Property.find(), req.query).search().limit();
    let properties = await apiFeature.query;
    res.status(200).json(properties);
}

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