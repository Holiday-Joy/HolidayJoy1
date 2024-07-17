const express = require('express');
const router = express.Router();
const bookingReq = require('../controllers/bookingRequest');

router.post("/book", bookingReq.booking);