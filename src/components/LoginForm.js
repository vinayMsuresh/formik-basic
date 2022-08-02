import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
import React from 'react';
import * as Yup from 'yup';
function LoginForm() {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required(),
        password: Yup.string().min(3).required()
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

export default LoginForm