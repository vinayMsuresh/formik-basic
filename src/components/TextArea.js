import { Grid, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function TextArea(props) {
    const {name, label, ...rest} = props;
  return (
    <Grid item sm={6} m={3}>
        <Field
            name={name}
            label={label}
            rows={3}
            as={TextField}
            {...rest}
        />
        <ErrorMessage name={name} color='red' component={Typography} />
    </Grid>
  )
}

export default TextArea