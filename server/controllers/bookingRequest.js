const express = require('express');

const nodemailer = require('nodemailer');
const BookingRequest = require('../models/bookingModel');

const router = express.Router();

router.post('/book', async (req, res) => {
    try {
        const { name, email, number, checkInDate, checkOutDate, adultsCount, kidsCount, message, price } = req.body;
        console.log(name, email, number, checkInDate, checkOutDate, adultsCount, kidsCount, message, price);
        const bookingRequest = new BookingRequest({
            name,
            email,
            number,
            checkInDate,
            checkOutDate,
            adultsCount,
            kidsCount,
            message,
            price,
        });

        await bookingRequest.save();

        // Setup email transport using website email
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            service: 'gmail',
            auth: {
                user: 'holidayjoy.vacations@gmail.com', // Your website email
                pass: 'bjufjqqrynvirkwv', // Your email password
            },
        });

        // Email options
        const mailOptions = {
            from: 'holidayjoy.vacations@gmail.com', // Your website email
            to: 'charan.r7760@gmail.com', // Host's email
            subject: 'New Booking Request',
            text: `
        New booking request received:
        Name: ${name}
        Email: ${email}
        Phone Number: ${number}
        Check-in Date: ${checkInDate}
        Check-out Date: ${checkOutDate}
        Adults: ${adultsCount}
        Kids: ${kidsCount}
        Message: ${message}
        Price: ${price}
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Booking request saved and email sent to host.' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

module.exports = router;
