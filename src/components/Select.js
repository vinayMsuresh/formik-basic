import { Grid, MenuItem, Select, Typography, InputLabel, FormControl } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function SelectInp(props) {
    const { name, label, options, ...rest} = props;
  return (
    <Grid item sm={6} m={3}>
        <FormControl sx={{width: '15%'}}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Field name={name} label={label} as={Select} {...rest}>
            { options.map(option=>(
                <MenuItem key={option.value} value={option.value}>{option.key}</MenuItem>
            ))}
        </Field>
        </FormControl>
        <ErrorMessage name={name} color='red' component={Typography} />
    </Grid>
  )
}

export default SelectInp