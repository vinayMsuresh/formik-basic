import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
import React from 'react';
import * as Yup from 'yup';
function CourseForm() {
    const courseOptions = [
        {key: 'React', value: 'react'},
        {key: 'Vue', value: 'vue'},
        {key: 'Angular', value: 'angular'}
    ];

    const skillsOptions = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value: 'css'},
        {key: 'JS', value: 'javascript'}
    ];

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null,
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required(),
        bio: Yup.string().required(),
        course: Yup.string().required(),
        courseDate: Yup.date().required().nullable(),
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
                    control='textarea'
                    label='Bio'
                    name='bio'
                />

                <FormikControl
                    control='select'
                    label='Course'
                    name='course'
                    options={courseOptions}                
                />

                <FormikControl
                    control='checkbox'
                    label='Skills'
                    name='skills'
                    options={skillsOptions}
                />

                <FormikControl
                    control='date'
                    label='Course date'
                    name='courseDate'
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

export default CourseForm