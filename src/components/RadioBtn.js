import { 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Grid, 
    Radio, 
    RadioGroup, 
    Typography } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function RadioBtn(props) {
    const { label, name, options, ...rest} = props
  return (
    <Grid item sm={6} m={3}>
        <FormControl sx={{width: '15%'}}>
            <FormLabel id='label'>{label}</FormLabel>
            <Field area-labelledby='label' name={name} as={RadioGroup} {...rest}>
                {options.map( option => (
                    <FormControlLabel 
                        key={option.value} 
                        value={option.value} 
                        control={<Radio/>} 
                        label={option.key} 
                    />
                ))}
            </Field>
        </FormControl>
        <ErrorMessage name={name} color='red' component={Typography} />
    </Grid>
  )
}

export default RadioBtn