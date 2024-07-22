const express = require('express');
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const uploadMiddleware = require("../middleware/uploadMiddleware");
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// Listing a Property
router.post('/list', uploadMiddleware, propertyController.propertyList);

// Get All Property on search and pagination
router.get('/properties', propertyController.getAllPropertys);

//Get limitend properties for featured stay on category 
router.get('/featuredstay', propertyController.featuredStay);

// Get Property Details
router.get('/property/:id', propertyController.propertyDetail);

module.exports = router;