const Property = require("../models/propertyModel");
const ApiFeatures = require('../utils/apifeatures');

// Creating a new Property
exports.propertyList = async (req, res) => {
    try {
        const { body, files } = req;

        const photos = await Promise.all(
            files.map(async (file) => {
                const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                    if (error) {
                        throw new Error('Cloudinary upload failed');
                    }
                    return result.secure_url;
                });
                return { url: result.secure_url, caption: file.originalname };
            })
        );

        const newProperty = new Property({
            ...body,
            photos,
        });

        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ message: 'Error uploading images', error });
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