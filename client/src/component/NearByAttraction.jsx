import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    attractions: Yup.array()
        .of(
            Yup.object().shape({
                name: Yup.string().required('Required'),
                distance: Yup.number().required('Required').positive('Must be positive')
            })
        )
        .required('Must have attractions')
        .min(1, 'Minimum of 1 attraction')
});

const NearByAttraction = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Nearby Attractions</h1>
            <Formik
                initialValues={{ attractions: [{ name: '', distance: '' }] }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <FieldArray name="attractions">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.attractions.length > 0 &&
                                        values.attractions.map((attraction, index) => (
                                            <div className="flex mb-4" key={index}>
                                                <div className="flex-1 mr-2">
                                                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor={`attractions.${index}.name`}>
                                                        Name
                                                    </label>
                                                    <Field
                                                        name={`attractions.${index}.name`}
                                                        placeholder="Attraction Name"
                                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    {errors.attractions?.[index]?.name && touched.attractions?.[index]?.name ? (
                                                        <div className="text-red-500 text-sm mt-1">{errors.attractions[index].name}</div>
                                                    ) : null}
                                                </div>
                                                <div className="flex-1 ml-2">
                                                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor={`attractions.${index}.distance`}>
                                                        Distance
                                                    </label>
                                                    <Field
                                                        name={`attractions.${index}.distance`}
                                                        placeholder="Distance"
                                                        type="number"
                                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    {errors.attractions?.[index]?.distance && touched.attractions?.[index]?.distance ? (
                                                        <div className="text-red-500 text-sm mt-1">{errors.attractions[index].distance}</div>
                                                    ) : null}
                                                </div>
                                                <div className="flex items-center ml-2">
                                                    <button
                                                        type="button"
                                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        onClick={() => push({ name: '', distance: '' })}
                                    >
                                        Add Attraction
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NearByAttraction;
