import { useState } from "react";
import React from 'react';
import axios from 'axios';

const RequestBookForm = ({ price, location, propertyName }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneCode: "+91",
        phone: "",
        checkIn: "",
        checkOut: "",
        adultsCount: "",
        kidsCount: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            name: formData.fullName,
            email: formData.email,
            number: `${formData.phoneCode} ${formData.phone}`,
            checkInDate: formData.checkIn,
            checkOutDate: formData.checkOut,
            adultsCount: formData.adultsCount,
            kidsCount: formData.kidsCount,
            message: formData.message,
            propertyName: propertyName || "",
            propertylocation: location || "",
            price: price.perHead || 0,
        };
        console.log(bookingData);
        try {
            const response = await axios.post('https://holidayjoyvecation.onrender.com/api/v1/book', bookingData);

            console.log(response);
            if (response.status === 200) {
                alert('Successfully Email sent, Host will contact you.');
            } else {
                alert(`An error occurred: ${response.statusText}`);
                console.error('Error:', response);
            }
        } catch (error) {
            alert(`An error occurred: ${error.message}`);
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="w-full mx-auto p-4 rounded-lg shadow-lg bg-white">
            <div className="mb-4">
                <div className="text-lg font-bold mt-2">The Greenstay Homestay</div>
                <div className="text-green-600 text-xl">
                    Per Guest ₹{price.perHead || 5000} <span className="line-through text-gray-500">₹2,999</span>{" "}
                    <span className="text-green-500">save 17%</span>
                </div>
                <div className="text-gray-500">Price includes 3 meals + Hi-Tea</div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <div className="flex space-x-2">
                    <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                        <option value="+91">+91</option>
                        {/* Add other country codes as needed */}
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                </div>
                <div className="flex space-x-2 justify-between">
                    <div className="flex flex-col justify-start items-start">
                        <label name="checkIn" className="ml-1 text-gray-400">CheckIn </label>
                        <input
                            type="date"
                            name="checkIn"
                            placeholder="Check-In"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label name="checkOut" className="ml-1 text-gray-400">CheckOut </label>
                        <input
                            type="date"
                            name="checkOut"
                            placeholder="Check-Out"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                </div>
                <div className="flex space-x-2">
                    <input
                        type="number"
                        name="adultsCount"
                        placeholder="Adults Count"
                        value={formData.adultsCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <input
                        type="number"
                        name="kidsCount"
                        placeholder="Kids Count (5-12Yrs)"
                        value={formData.kidsCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                    Request to Book
                </button>
            </form>
        </div>
    );
};

export default RequestBookForm;
