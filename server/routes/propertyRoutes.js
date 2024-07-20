const express = require('express');
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
// Listing a Property
router.post('/list',upload.array('photos', 5), propertyController.propertyList);
// Get All Property
router.get('/properties', propertyController.getAllPropertys);
// Get Property Details
router.get('/property/:id', propertyController.propertyDetail);
module.exports = router;