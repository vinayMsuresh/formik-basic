import React from 'react'
import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const initialValues = {
    name:'',
    email:'',
    channel:''
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
    channel: Yup.string().required().min(3)
});

function YoutubeForm() {
    const submit = useFormik({
        initialValues,
        onSubmit,
        validationSchema, 
        // validate
    });
  return (
    <form onSubmit={submit.handleSubmit}>
        <Stack 
            spacing={2} 
            width='500px' 
            mx={20} 
            mt={5}
        >
            <TextField 
                name='name' 
                label='Name' 
                error={submit.touched.name && submit.errors.name && true }
                helperText={submit.touched.name && submit.errors.name && submit.errors.name}
                {...submit.getFieldProps('name')}
            /> 
            <TextField 
                name='email' 
                label='Email' 
                type='email' 
                error={submit.touched.email && submit.errors.email && true}
                helperText={submit.touched.email && submit.errors.email && submit.errors.email}
                {...submit.getFieldProps('email')}
            /> 
            <TextField 
                name='channel' 
                label='Channel' 
                error={submit.touched.channel && submit.errors.channel && true}
                helperText={submit.touched.channel && submit.errors.channel && submit.errors.channel}
                {...submit.getFieldProps('channel')}
            /> 

            <Button variant='contained' type='submit' fullWidth={false}>Submit</Button>
            <Button variant='contained' onClick={()=>submit.validateField('channel')}>Validate </Button>
            <Button variant='contained' onClick={()=>submit.setFieldTouched('channel')}>Visit</Button>
        </Stack>
    </form>
  )
}

export default YoutubeForm