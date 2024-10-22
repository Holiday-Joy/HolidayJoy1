const Property = require("../models/propertyModel");
const ApiFeatures = require('../utils/apifeatures');
const fs = require('fs'); // For file system operations

// const cloudinary = require('../config/cloudinaryCofig');
// Creating a new Property  with image uploads to Cloudinary
// exports.propertyList = async (req, res) => {
//     try {
//         const photos = req.body.photos;
//         const uploadPromises = photos.map(photo => {
//             return cloudinary.uploader.upload(photo.url, { folder: 'properties' });
//         });

//         const uploadResults = await Promise.all(uploadPromises);
//         const updatedPhotos = uploadResults.map((result, index) => ({
//             url: result.secure_url,
//             caption: photos[index].caption
//         }));

//         const propertyData = {
//             ...req.body,
//             photos: updatedPhotos,
//         };

//         const property = await Property.create(propertyData);

//         res.status(201).json({ success: true, property });
//     } catch (e) {
//         res.status(400).json({ message: e.message });
//     }
// };
const uploadToCloudinary = async (path) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(path, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.secure_url); // Get the URL of the uploaded image
            }
        });
    });
};

exports.propertyList = async (req, res) => {
    try {
        // Handle images if they are part of the request
        let imageUrls = [];

        if (req.files && req.files.length > 0) {
            // Upload each image to Cloudinary
            imageUrls = await Promise.all(
                req.files.map(file => uploadToCloudinary(file.path))
            );

            // Delete files from local storage after uploading to Cloudinary
            req.files.forEach(file => fs.unlinkSync(file.path));
        }
        const propertyData = {
            ...req.body, // Spread all other form data (name, description, etc.)
            photos: imageUrls // Add uploaded image URLs to the property data
        };

        const property = await Property.create(propertyData);

        res.status(201.).json({ success: true, property });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
};

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