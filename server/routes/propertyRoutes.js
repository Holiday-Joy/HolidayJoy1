const express = require('express');
const router = express.Router();
const propertyController = require("../controllers/propertyController");

// Listing a Property
router.post('/list', propertyController.propertyList);
// Get All Property
router.get('/properties', propertyController.getAllPropertys);
// Get Property Details
router.get('/property/:id', propertyController.propertyDetail);
module.exports = router;