import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
import React from 'react';
import * as Yup from 'yup';
function RegisterForm() {
    const options = [
        {key: 'phone', value: 'telephonemoc'},
        {key: 'email', value: 'emailmoc'}
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact:'',
        phone: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required(),
        password: Yup.string().min(3).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password', '')], "Password doesn't match").required(),
        modeOfContact: Yup.string().required(),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required()
        }),
    });

    const onSubmit= (values, submitProps) => {
        alert(JSON.stringify(values, null, 2));
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    }

  return (
    <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}
    >
        { formik => {
            return <Form>
                <FormikControl
                    control='input'
                    label='Email'
                    name='email'
                    type='email'
                />

                <FormikControl
                    control='input'
                    label='Password'
                    name='password'
                    type='password'
                />

                <FormikControl
                    control='input'
                    label='Confirm Password'
                    name='confirmPassword'
                    type='password'
                />

                <FormikControl
                    control='radio'
                    label='Mode of contact'
                    name='modeOfContact'
                    options={options}
                />

                <FormikControl
                    control='input'
                    label='Phone'
                    name='phone'
                    type='text'
                />

                <Button 
                    type='submit' 
                    disabled={ !formik.isValid || formik.isSubmitting} 
                    variant='contained'
                >
                    Submit </Button> 
            </Form>
        }}
    </Formik>
  )
}

export default RegisterForm