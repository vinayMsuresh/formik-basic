import React from 'react'
import { FormControl, FormLabel, Grid, Typography } from '@mui/material';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ErrorMessage, Field } from 'formik';
function DatePicker(props) {
    const { name, label, ...rest} = props;
  return (
    <Grid item sm={6} m={3}>
        <Field name={name}>
            { ({ form, field}) => {
                const {setFieldValue} = form;
                const { value } = field;
                return (
                    <FormControl sx={{width: '15%'}}>
                        <FormLabel id='datePicker'>{label}</FormLabel>
                        <DateView 
                            ariaLabelledBy='datePicker'
                            id={name} 
                            {...field} 
                            {...rest} 
                            selected={value} 
                            onChange={ val => setFieldValue(name, val)} 
                        />
                    </FormControl>
                )

            }}
        </Field>

        <ErrorMessage name={name} color='red' component={Typography} />
    </Grid>
  )
}

export default DatePicker