const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const uploadMiddleware = require("../middleware/uploadMiddleware");
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// Listing a Property
router.post('/list',upload.array('images', 5),propertyController.propertyList);

// Get All Property on search and pagination
router.get('/properties', propertyController.getAllPropertys);

//Get limitend properties for featured stay on category 
router.get('/featuredstay', propertyController.featuredStay);

// Get Property Details
router.get('/property/:id', propertyController.propertyDetail);

module.exports = router;