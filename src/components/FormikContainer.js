import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const initialValues = {
    email:'',
    description:'',
    selectOption: '',
    radioOption: '',
    checkOption: [],
    birthDate: null,
};

const options = [
    {key: 'Select an option', value: ''},
    {key: 'Option 1', value: 'option1'},
    {key: 'Option 2', value: 'option2'},
    {key: 'Option 3', value: 'option3'}
];

const CheckOptions = [
    {key: 'Option 1', value: 'option1'},
    {key: 'Option 2', value: 'option2'},
    {key: 'Option 3', value: 'option3'}
];

const radioOptions = [
    {key: 'Male', value: 'male'},
    {key: 'Female', value: 'female'}
]

const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    description: Yup.string().required(),
    selectOption: Yup.string().required(),
    radioOption: Yup.string().required(),
    checkOption: Yup.array().min(1).required('required'),
    birthDate: Yup.date().required().nullable(),
});

const onSubmit = values => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    const data = JSON.parse(JSON.stringify(values))
    data.birthDate = new Date(data.birthDate)
    console.log(data);
    
}
function FormikContainer() {
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {
            formik =>( 
                <Form>
                    <FormikControl 
                        control='input' 
                        label='email' 
                        name='email' 
                        type='email' 
                    />

                    <FormikControl
                        control='textarea'
                        label='Description'
                        name='description'
                    />

                    <FormikControl
                        control='select'
                        label='Select a topic'
                        name='selectOption'
                        options={options}
                    />

                    <FormikControl
                        control='radio'
                        label='Gender'
                        name='radioOption'
                        options={radioOptions}
                    />

                    <FormikControl
                        control='checkbox'
                        label='Check the options'
                        name='checkOption'
                        options={CheckOptions}
                    />

                    <FormikControl
                        control='date'
                        label='Birth date'
                        name='birthDate'
                    />

                    <Button type='submit' variant='contained'>Submit</Button>
                </Form>
            )
        }
    </Formik>
  )
}

export default FormikContainer