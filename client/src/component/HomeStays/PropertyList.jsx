import React, { useState } from 'react'
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
} from "flowbite-react";
const Propertylist = () => {
    const [formData, setFormData] = useState({
        propertyType: '',
        propertyName: '',
        propertyNickName: '',
        listEntireHome: false,
        exactLocationName: '',
        popularNearbyLocationName: '',
        landMark: '',
        address: {
            flatHouseNoFloorBuilding: '',
            streetLocalityColony: ''
        },
        price: {
            entireHouse: '',
            perHead: ''
        },
        numberOfPeople: '',
        numberOfBeds: '',
        bedrooms: '',
        bathrooms: '',
        checkInTime: '',
        checkOutTime: '',
        toiletries: '',
        amenities: {
            kitchen: false,
            tv: false,
            satelliteTV: false,
            wifi: false,
            petsAllowed: false,
            washingMachine: false,
            dryer: false,
            freeParking: false,
            smokingAllowed: false,
            indoorFireplace: false,
            gym: false,
            kidsPlayArea: false,
            swimmingPool: false,
            hotTub: false,
            iron: false,
            elevatorInBuilding: false,
            airConditioning: false,
            heating: false,
            wheelchairAccessible: false,
            jacuzzi: false
        },
        houseRules: '',
        cancellationPolicy: '',
        description: '',
        openAllYearRound: false,
        closureDates: '',
        photos: [],
        verified: false,
        websiteURL: '',
        additionalPropertyLinks: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else if (name.includes('.')) {
            const [parentField, childField] = name.split('.');
            setFormData({
                ...formData,
                [parentField]: {
                    ...formData[parentField],
                    [childField]: value
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAmenitiesChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            amenities: {
                ...prevState.amenities,
                [name]: checked
            }
        }));
    };

    const handlePhotosChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, photos: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            {/* Input fields */}
            <label>
                Property Type:
                <input
                    type="text"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                />
            </label>
            {/* Add more fields similar to the example above */}

            {/* Checkbox example */}
            <label>
                List Entire Home:
                <input
                    type="checkbox"
                    name="listEntireHome"
                    checked={formData.listEntireHome}
                    onChange={handleChange}
                />
            </label>

            {/* Nested field example */}
            <label>
                Flat/House No, Floor, Building:
                <input
                    type="text"
                    name="address.flatHouseNoFloorBuilding"
                    value={formData.address.flatHouseNoFloorBuilding}
                    onChange={handleChange}
                />
            </label>

            {/* Amenities checkboxes */}
            <fieldset>
                <legend>Amenities:</legend>
                {Object.entries(formData.amenities).map(([key, value]) => (
                    <label key={key}>
                        <input
                            type="checkbox"
                            name={`amenities.${key}`}
                            checked={value}
                            onChange={handleAmenitiesChange}
                        />
                        {key}
                    </label>
                ))}
            </fieldset>

            {/* File input for photos */}
            <label>
                Photos:
                <input type="file" multiple onChange={handlePhotosChange} />
            </label>

            {/* Submit button */}
            <button type="submit">Submit</button>
        </form>
    );
};
export default Propertylist;