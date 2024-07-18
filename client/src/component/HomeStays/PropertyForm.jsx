import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const PropertyForm = () => {
    const initialValues = {
        propertyType: '',
        propertyName: '',
        propertyNickName: '',
        listEntireHome: false,
        exactLocationName: '',
        popularNearbyLocationName: '',
        address: {
            country: '',
            city: '',
            landMark: '',
            pincode: ''
        },
        price: {
            entireHouse: 0,
            perHead: 0
        },
        numberOfPeople: 0,
        numberOfBeds: 0,
        bedrooms: 0,
        bathrooms: 0,
        checkInTime: '',
        checkOutTime: '',
        toiletries: [],
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
        openAllYearRound: {
            status: false,
            closureDates: []
        },
        photos: [{
            url: '',
            caption: ''
        }],
        verified: false,
        websiteURL: '',
        additionalPropertyLinks: []
    };

    const validationSchema = Yup.object().shape({
        propertyType: Yup.string().required('Property type is required'),
        propertyName: Yup.string().required('Property name is required'),
        propertyNickName: Yup.string(),
        listEntireHome: Yup.boolean().required('Please specify if listing entire home'),
        exactLocationName: Yup.string().required('Exact location name is required'),
        popularNearbyLocationName: Yup.string().required('Popular nearby location name is required'),
        address: Yup.object().shape({
            country: Yup.string().required('Country is required'),
            city: Yup.string().required('City is required'),
            landMark: Yup.string().required('Landmark is required'),
            pincode: Yup.number()
        }),
        price: Yup.object().shape({
            entireHouse: Yup.number().required('Entire house price is required'),
            perHead: Yup.number().required('Price per head is required')
        }),
        numberOfPeople: Yup.number().required('Number of people is required'),
        numberOfBeds: Yup.number().required('Number of beds is required'),
        bedrooms: Yup.number().required('Number of bedrooms is required'),
        bathrooms: Yup.number().required('Number of bathrooms is required'),
        checkInTime: Yup.string().required('Check-in time is required'),
        checkOutTime: Yup.string().required('Check-out time is required'),
        toiletries: Yup.array(),
        amenities: Yup.object().shape({
            kitchen: Yup.boolean(),
            tv: Yup.boolean(),
            satelliteTV: Yup.boolean(),
            wifi: Yup.boolean(),
            petsAllowed: Yup.boolean(),
            washingMachine: Yup.boolean(),
            dryer: Yup.boolean(),
            freeParking: Yup.boolean(),
            smokingAllowed: Yup.boolean(),
            indoorFireplace: Yup.boolean(),
            gym: Yup.boolean(),
            kidsPlayArea: Yup.boolean(),
            swimmingPool: Yup.boolean(),
            hotTub: Yup.boolean(),
            iron: Yup.boolean(),
            elevatorInBuilding: Yup.boolean(),
            airConditioning: Yup.boolean(),
            heating: Yup.boolean(),
            wheelchairAccessible: Yup.boolean(),
            jacuzzi: Yup.boolean()
        }),
        houseRules: Yup.string(),
        cancellationPolicy: Yup.string(),
        description: Yup.string(),
        openAllYearRound: Yup.object().shape({
            status: Yup.boolean().required('Open all year status is required'),
            closureDates: Yup.array()
        }),
        photos: Yup.array().of(
            Yup.object().shape({
                url: Yup.string().required('Photo URL is required'),
                caption: Yup.string()
            })
        ),
        verified: Yup.boolean(),
        websiteURL: Yup.string(),
        additionalPropertyLinks: Yup.array()
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const url = "https://holidayjoyvecation.onrender.com/api/v1"
            await axios.post(url + '/list', values);
            alert('Property submitted successfully!');
            setSubmitting(false);
        } catch (error) {
            console.error('Error submitting property:', error);
            alert('Error submitting property. Please try again.');
            setSubmitting(false);
        }

    };
    return (
        <div className='mt-24 w-full flex justify-center items-center'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, values }) => (
                    <Form className='w-[80%] flex justify-center items-center md:w-full'>
                        <section className='w-full max-w-4xl flex flex-wrap justify-around items-start gap-6'>
                            {/* Property Type */}
                            <div className='w-full sm:w-[45%] md:w-[50%] flex flex-col'>
                                <div className='label1 w-full'>
                                    <label htmlFor="propertyType">Property Type</label>
                                    <Field as="select" name="propertyType" id="propertyType" className="field1">
                                        <option value="">Select Property Type</option>
                                        {['Homestay', 'Hotel', 'Resort', 'Private Room', 'Dormitory', 'Tree house', 'Villa', 'Hut', 'Yacht', 'Apartment', 'Cottage', 'Tent'].map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="propertyType" component="div" className="error text-red-400" />
                                </div>

                                {/* Property Name */}
                                <div className='label1 w-full'>
                                    <label htmlFor="propertyName">Property Name</label>
                                    <Field type="text" id="propertyName" name="propertyName" className="field1" />
                                    <ErrorMessage name="propertyName" component="div" className="error text-red-400" />
                                </div>

                                {/* Property Nickname */}
                                <div className='label1 w-full'>
                                    <label htmlFor="propertyNickName">Property Nickname</label>
                                    <Field type="text" id="propertyNickName" name="propertyNickName" className="field1" />
                                    <ErrorMessage name="propertyNickName" component="div" className="error text-red-400" />
                                </div>

                                {/* List Entire Home */}
                                <div className='label1 w-full'>
                                    <label>
                                        <Field type="checkbox" name="listEntireHome" className="field1" />
                                        List Entire Home
                                    </label>
                                    <ErrorMessage name="listEntireHome" component="div" className="error text-red-400" />
                                </div>

                                {/* Exact Location Name */}
                                <div className='label1 w-full'>
                                    <label htmlFor="exactLocationName">Exact Location Name</label>
                                    <Field type="text" id="exactLocationName" name="exactLocationName" className="field1" />
                                    <ErrorMessage name="exactLocationName" component="div" className="error text-red-400" />
                                </div>

                                {/* Popular Nearby Location Name */}
                                <div className='label1 w-full'>
                                    <label htmlFor="popularNearbyLocationName">Popular Nearby Location Name</label>
                                    <Field type="text" id="popularNearbyLocationName" name="popularNearbyLocationName" className="field1" />
                                    <ErrorMessage name="popularNearbyLocationName" component="div" className="error text-red-400" />
                                </div>

                                {/* Address Fields */}
                                <div className='label1 w-full'>
                                    <label htmlFor="address.country">Country</label>
                                    <Field type="text" id="address.country" name="address.country" className="field1" />
                                    <ErrorMessage name="address.country" component="div" className="error text-red-400" />
                                </div>
                                <div className='label1 w-full'>
                                    <label htmlFor="address.city">City</label>
                                    <Field type="text" id="address.city" name="address.city" className="field1" />
                                    <ErrorMessage name="address.city" component="div" className="error text-red-400" />
                                </div>
                                <div className='label1 w-full'>
                                    <label htmlFor="address.landMark">Landmark</label>
                                    <Field type="text" id="address.landMark" name="address.landMark" className="field1" />
                                    <ErrorMessage name="address.landMark" component="div" className="error text-red-400" />
                                </div>
                                <div className='label1 w-full'>
                                    <label htmlFor="address.pincode">Pincode</label>
                                    <Field type="number" id="address.pincode" name="address.pincode" className="field1" />
                                    <ErrorMessage name="address.pincode" component="div" className="error text-red-400" />
                                </div>

                                {/* Price Fields */}
                                <div className='label1 w-full'>
                                    <label htmlFor="price.entireHouse">Entire House Price</label>
                                    <Field type="number" id="price.entireHouse" name="price.entireHouse" className="field1" />
                                    <ErrorMessage name="price.entireHouse" component="div" className="error text-red-400" />
                                </div>
                                <div className='label1 w-full'>
                                    <label htmlFor="price.perHead">Price Per Head</label>
                                    <Field type="number" id="price.perHead" name="price.perHead" className="field1" />
                                    <ErrorMessage name="price.perHead" component="div" className="error text-red-400" />
                                </div>

                                {/* Number of People */}
                                <div className='label1 w-full'>
                                    <label htmlFor="numberOfPeople">Number of People</label>
                                    <Field type="number" id="numberOfPeople" name="numberOfPeople" className="field1" />
                                    <ErrorMessage name="numberOfPeople" component="div" className="error text-red-400" />
                                </div>

                                {/* Number of Beds */}
                                <div className='label1 w-full'>
                                    <label htmlFor="numberOfBeds">Number of Beds</label>
                                    <Field type="number" id="numberOfBeds" name="numberOfBeds" className="field1" />
                                    <ErrorMessage name="numberOfBeds" component="div" className="error text-red-400" />
                                </div>
                            </div>

                            <div className='w-full sm:w-[45%] md:w-[40%] flex flex-col'>
                                {/* Bedrooms */}
                                <div className='label1 w-full'>
                                    <label htmlFor="bedrooms">Number of Bedrooms</label>
                                    <Field type="number" id="bedrooms" name="bedrooms" className="field1" />
                                    <ErrorMessage name="bedrooms" component="div" className="error text-red-400" />
                                </div>

                                {/* Bathrooms */}
                                <div className='label1 w-full'>
                                    <label htmlFor="bathrooms">Number of Bathrooms</label>
                                    <Field type="number" id="bathrooms" name="bathrooms" className="field1" />
                                    <ErrorMessage name="bathrooms" component="div" className="error text-red-400" />
                                </div>

                                {/* Check-in Time */}
                                <div className='label1 w-full'>
                                    <label htmlFor="checkInTime">Check-in Time</label>
                                    <Field type="time" id="checkInTime" name="checkInTime" className="field1" />
                                    <ErrorMessage name="checkInTime" component="div" className="error text-red-400" />
                                </div>

                                {/* Check-out Time */}
                                <div className='label1 w-full'>
                                    <label htmlFor="checkOutTime">Check-out Time</label>
                                    <Field type="time" id="checkOutTime" name="checkOutTime" className="field1" />
                                    <ErrorMessage name="checkOutTime" component="div" className="error text-red-400" />
                                </div>

                                {/* Toiletries */}
                                <div className='label1 w-full'>
                                    <label>Toiletries</label>
                                    <div>
                                        <label>
                                            <Field type="checkbox" name="toiletries" value="Towels" className="field1" />
                                            Towels
                                        </label>
                                    </div>
                                    {/* Add more toiletries as needed */}
                                </div>

                                {/* Amenities Fields */}
                                <div className='label1 w-full '>
                                    <label>Amenities:</label>
                                    <div className='flex flex-wrap gap-2'>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.kitchen" className="field1" />
                                                Kitchen
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.tv" className="field1" />
                                                TV
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.satelliteTV" className="field1" />
                                                satelliteTV
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.wifi" className="field1" />
                                                wifi
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.petsAllowed" className="field1" />
                                                petsAllowed
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.washingMachine" className="field1" />
                                                washingMachine
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.dryer" className="field1" />
                                                dryer
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.freeParking" className="field1" />
                                                freeParking
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.smokingAllowed" className="field1" />
                                                smokingAllowed
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="amenities.indoorFireplace" className="field1" />
                                                indoorFireplace
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.gym" className="field1" />
                                                gym
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.kidsPlayArea" className="field1" />
                                                kidsPlayArea
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.swimmingPool" className="field1" />
                                                swimmingPool
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.hotTub" className="field1" />
                                                hotTub
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.iron" className="field1" />
                                                iron
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.elevatorInBuilding" className="field1" />
                                                elevatorInBuilding
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.airConditioning" className="field1" />
                                                airConditioning
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.heating" className="field1" />
                                                heating
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.wheelchairAccessible" className="field1" />
                                                wheelchairAccessible
                                            </label>
                                        </div><div>
                                            <label>
                                                <Field type="checkbox" name="amenities.jacuzzi" className="field1" />
                                                jacuzzi
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* House Rules */}
                                <div className='label1 w-full'>
                                    <label htmlFor="houseRules">House Rules</label>
                                    <Field as="textarea" id="houseRules" name="houseRules" className="field1" />
                                    <ErrorMessage name="houseRules" component="div" className="error text-red-400" />
                                </div>

                                {/* Cancellation Policy */}
                                <div className='label1 w-full'>
                                    <label htmlFor="cancellationPolicy">Cancellation Policy</label>
                                    <Field as="textarea" id="cancellationPolicy" className="field1" name="cancellationPolicy" />
                                    <ErrorMessage name="cancellationPolicy" component="div" className="error text-red-400" />
                                </div>

                                {/* Description */}
                                <div className='label1 w-full'>
                                    <label htmlFor="description">Description</label>
                                    <Field as="textarea" id="description" name="description" className="field1" />
                                    <ErrorMessage name="description" component="div" className="error text-red-400" />
                                </div>

                                {/* Open All Year Round */}
                                <div className='label1 w-full'>
                                    <label htmlFor='openAllYearRound.status'>
                                        <Field type="checkbox" name="openAllYearRound.status" className="field1" />
                                        Open All Year Round
                                    </label>
                                    <ErrorMessage name="openAllYearRound.status" component="div" className="error text-red-400" />
                                </div>

                                {/* Photos */}
                                <div className='label1 w-full'>
                                    <label>Photos</label>
                                    <FieldArray name="photos">
                                        {({ push, remove }) => (
                                            <div>
                                                {values.photos.map((photo, index) => (
                                                    <div key={index} className='flex flex-col gap-2'>
                                                        <Field type="file" name={`photos[${index}].url`} placeholder="Photo URL" className="field1" />
                                                        <ErrorMessage name={`photos[${index}].url`} component="div" className="error text-red-400" />
                                                        <Field type="text" name={`photos[${index}].caption`} placeholder="Photo Caption" className="field1" />
                                                        <ErrorMessage name={`photos[${index}].caption`} component="div" className="error text-red-400" />
                                                        <button type="button" onClick={() => remove(index)} className='py-1 bg-red-300 rounded-full mx-3 hover:border-2 hover:border-red-600'>Remove</button>
                                                    </div>
                                                ))}
                                                <div className='w-full flex justify-center items-center'>
                                                    <button type="button" className=' w-full py-1 bg-blue-300 rounded-full mx-3 mt-2 hover:border-2 hover:border-blue-600' onClick={() => push({ url: '', caption: '' })}>Add Photo</button>
                                                </div>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>

                                {/* Verified */}
                                <div className='label1 w-full'>
                                    <label htmlFor='verified'>
                                        <Field type="checkbox" name="verified" className="field1" />
                                        Verified
                                    </label>
                                </div>

                                {/* Website URL */}
                                <div className='label1 w-full'>
                                    <label htmlFor="websiteURL">Website URL</label>
                                    <Field type="text" id="websiteURL" name="websiteURL" className="field1" />
                                    <ErrorMessage name="websiteURL" component="div" className="error text-red-400" />
                                </div>

                                {/* Submit Button */}
                                <div className='w-full'>
                                    <button type="submit" disabled={isSubmitting} className='bg-blue-600 w-full my-2 rounded-2xl py-3 items-center'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </section>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default PropertyForm;
