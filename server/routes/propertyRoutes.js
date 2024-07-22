const express = require('express');
const router = express.Router();
const propertyController = require("../controllers/propertyController");
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// Listing a Property
router.post('/list', propertyController.propertyList);

// Get All Property on search and pagination
router.get('/properties', propertyController.getAllPropertys);

//Get limitend properties for featured stay on category 
router.get('/featuredstay', propertyController.featuredStay);

// Get Property Details
router.get('/property/:id', propertyController.propertyDetail);

module.exports = router;