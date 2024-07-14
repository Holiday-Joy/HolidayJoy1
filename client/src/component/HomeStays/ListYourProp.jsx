import React, { useState } from 'react'
import { shakleshpura } from '../../assets'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const ListYourProp = () => {
    return (
        <Formik
            initialValues={{
                propertyName: '',
                description: '',
                propertyType: '',
                street: '',
                city: '',
                state: '',
                zipCode: '',
                country: '',
                startDate: '',
                endDate: '',
                checkInTime: '',
                checkOutTime: '',
                nightlyRate: '',
                weeklyRate: '',
                monthlyRate: '',
                cleaningFee: '',
                amenities: [],
                photos: [],
                rules: '',
                cancellationPolicy: '',
            }}
            validationSchema={Yup.object({
                propertyName: Yup.string().required('Required'),
                description: Yup.string().required('Required'),
                propertyType: Yup.string().required('Required'),
                street: Yup.string().required('Required'),
                city: Yup.string().required('Required'),
                state: Yup.string().required('Required'),
                zipCode: Yup.string().required('Required'),
                country: Yup.string().required('Required'),
                startDate: Yup.date().required('Required'),
                endDate: Yup.date().required('Required'),
                checkInTime: Yup.string().required('Required'),
                checkOutTime: Yup.string().required('Required'),
                nightlyRate: Yup.number().required('Required'),
                cleaningFee: Yup.number(),
                amenities: Yup.array(),
                rules: Yup.string(),
                cancellationPolicy: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                axios.post('/api/list', values)
                    .then(response => {
                        console.log(response.data);
                        setSubmitting(false);
                    })
                    .catch(error => {
                        console.error(error);
                        setSubmitting(false);
                    });
            }}
        >
            {({ isSubmitting }) => (
                <Form className='w-full flex justify-center items-center'>
                    <section className='w-[30%] flex flex-col justify-center items-center'>
                        <div className='label1 w-full'>
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" className="field1" />
                            <ErrorMessage name="title" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="description">Description</label>
                            <Field name="description" as="textarea" className="field1" />
                            <ErrorMessage name="description" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="type">Property Type</label>
                            <Field name="type" as="select" className="field1">
                                <option value="">Select a type</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="bed_and_breakfast">Bed and Breakfast</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="type" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="street">Street</label>
                            <Field name="street" type="text" className="field1" />
                            <ErrorMessage name="street" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="city">City</label>
                            <Field name="city" type="text" className="field1" />
                            <ErrorMessage name="city" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="state">State</label>
                            <Field name="state" type="text" className="field1" />
                            <ErrorMessage name="state" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="zipCode">Zip Code</label>
                            <Field name="zipCode" type="text" className="field1" />
                            <ErrorMessage name="zipCode" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="country">Country</label>
                            <Field name="country" type="text" className="field1" />
                            <ErrorMessage name="country" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="startDate">Start Date</label>
                            <Field name="startDate" type="date" className="field1" />
                            <ErrorMessage name="startDate" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="endDate">End Date</label>
                            <Field name="endDate" type="date" className="field1" />
                            <ErrorMessage name="endDate" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="checkInTime">Check-in Time</label>
                            <Field name="checkInTime" type="time" className="field1" />
                            <ErrorMessage name="checkInTime" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="checkOutTime">Check-out Time</label>
                            <Field name="checkOutTime" type="time" className="field1" />
                            <ErrorMessage name="checkOutTime" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="nightlyRate">Nightly Rate</label>
                            <Field name="nightlyRate" type="number" className="field1" />
                            <ErrorMessage name="nightlyRate" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="cleaningFee">Cleaning Fee</label>
                            <Field name="cleaningFee" type="number" className="field1" />
                            <ErrorMessage name="cleaningFee" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="amenities">Amenities</label>
                            <div className='flex flex-wrap gap-3'>
                                <label>
                                    <Field type="checkbox" name="amenities" value="wifi" />
                                    WiFi
                                </label>
                                <label>
                                    <Field type="checkbox" name="amenities" value="parking" />
                                    Parking
                                </label>
                                <label>
                                    <Field type="checkbox" name="amenities" value="pool" />
                                    Pool
                                </label>
                                <label>
                                    <Field type="checkbox" name="amenities" value="kitchen" />
                                    Kitchen
                                </label>
                            </div>
                            <ErrorMessage name="amenities" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="photos">Photos</label>
                            <Field name="photos" type="file" multiple />
                            <ErrorMessage name="photos" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="rules">Rules</label>
                            <Field name="rules" type="text " className="field1" />
                            <ErrorMessage name="rules" component="div" className='text-red-400' />
                        </div>
                        <div className='label1 w-full'>
                            <label htmlFor="cancellationPolicy">Cancellation Policy</label>
                            <Field name="cancellationPolicy" type="text" className="field1" />
                            <ErrorMessage name="cancellationPolicy" component="div" className='text-red-400' />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </section>
                </Form>
            )}
        </Formik>
    );
};


export default ListYourProp;
