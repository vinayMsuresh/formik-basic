import React from 'react'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { ErrorMessage, FastField, Field, FieldArray, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
const initialValues = {
    name:'',
    email:'',
    channel:'',
    address:'',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: [''],
};

const onSubmit = values => {
    console.log('Form values', values);
};

// const validate = values => {
//     let error = {};

//     if(!values.name){
//         error.name = 'Required';
//     }

//     if(!values.email) {
//         error.email = 'Required';
//     } else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
//         error.email = 'Invalid Email';
//     }

//     if(!values.channel) {
//         error.channel = 'Required'
//     }

//     return error;
// }

const validationSchema = Yup.object({
    name: Yup.string().required('Required!').min(3).max(15),
    email: Yup.string().email('Invalid email format').required('Required!'),
    channel: Yup.string().required('Required!').min(3),
    // address: Yup.string().required('Reequired!'),
});

const validateAddress = value => {
    let error;
    if(!value) {
        error = 'Required!'
    }
    return error;
}

function FormikComp() {
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnBlur={false}
        // validateOnChange={false}
    >
    <Form>
        <Grid 
            container 
            mt={5}
            spacing={3}
        > 
            <Grid item md={4} lg={3}>
                <Field 
                    name='name' 
                    label='Name' 
                    type='text'
                    as={TextField}
                /> 
                <div>
                    <ErrorMessage name='name'  color='red' component={Typography}  />
                </div>
            </Grid>

            <Grid item md={4} lg={3}>
                <Field 
                    name='email' 
                    label='Email' 
                    type='email'
                    as={TextField} 
                />
                <div>
                    <ErrorMessage name='email'  color='red' component={Typography}  />
                </div>
            </Grid> 

            <Grid item md={4} lg={3}>
                <Field 
                    name='channel' 
                    label='Channel' 
                    type='text'
                    as={TextField}
                /> 
                <div>
                    <ErrorMessage name='channel'  color='red' component={Typography} />
                </div>
            </Grid>

            <Grid item md={4} lg={3}>
                <FastField name='address' validate={validateAddress}>
                    {(props) => {
                        return (<TextField
                            label='address'
                            multiline
                            {...props.field}
                        />)
                    }}
                </FastField>
                <div>
                    <ErrorMessage name='address'  color='red' component={Typography} />
                </div>
            </Grid>

            <Grid item md={4} lg={3}>
                <Field 
                    name='social.facebook' 
                    label='Facebook' 
                    type='text'
                    as={TextField}
                /> 
                <div>
                    <ErrorMessage name='socail.facebook'  color='red' component={Typography} />
                </div>
            </Grid>

            <Grid item md={4} lg={3}>
                <Field 
                    name='social.twitter' 
                    label='Twitter' 
                    type='text'
                    as={TextField}
                /> 
                <div>
                    <ErrorMessage name='social.twitter'  color='red' component={Typography} />
                </div>
            </Grid>
 
            <Grid item md={4} lg={3}>
                <Field 
                    name='phoneNumber[0]'
                    label='Primary Phone number'
                    type='tel'
                    as={TextField}
                />
            </Grid>
            <Grid item md={4} lg={3}>
                <Field 
                    name='phoneNumber[1]'
                    label='secondary Phone number'
                    type='tel'
                    as={TextField}
                />
            </Grid>

            <Grid item md={4} lg={3}>
                <FieldArray name='phNumbers'>
                    {({ push, remove, form}) => (
                        <Stack spacing={2}>
                            { form.values.phNumbers.map((ph, index) => (
                                <div key={index}>
                                <Field 
                                    name={`phNumbers[${index}]`} 
                                    label={`Phone ${index + 1}`} 
                                    type='number'
                                    as={TextField}
                                />
                                <Button onClick={()=>remove(index)} variant='contained' sx={{ml:1}}> - </Button>
                                </div>
                            ))}
                            <Button onClick={()=>push('')} variant='contained' sx={{width:'10%', ml:2}}> + </Button>
                        </Stack>
                    )}
                </FieldArray>
            </Grid>

            <Grid item md={4} lg={3}>
                <Button variant='contained' type='submit' fullWidth={false}>Submit</Button>
            </Grid>

        </Grid>
    </Form>
    </Formik>
  )
}

export default FormikComp