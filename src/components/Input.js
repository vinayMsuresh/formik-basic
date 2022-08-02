import {  Grid, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import React from 'react'

function Input(props) {
  const { label, name, ...rest} = props;
  return (
    <Grid item sm={6} m={3}>
      <Field 
        name={name} 
        label={label} 
        as={TextField} 
        {...rest}
      />
      <ErrorMessage 
        name={name} 
        color='red' 
        component={Typography} 
      />
    </Grid>
  )
}

export default Input