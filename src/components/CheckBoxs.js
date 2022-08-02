import { 
    Checkbox, 
    FormControl, 
    FormControlLabel, 
    FormGroup, 
    FormLabel, 
    Grid, 
    Typography 
} from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import React from 'react'

function CheckBoxs(props) {
    const { name, label, options, ...rest} = props;
  return (
    <Grid item sm={6} m={3}>
        <FormControl sx={{ width: '15%' }}>
            <FormLabel id='check'>{label}</FormLabel>
            <Field name={name} area-labelledby='check' as={FormGroup} {...rest}>
                { options.map( option => (
                    <FormControlLabel 
                        key={option.value} 
                        name={name}
                        label={option.key} 
                        value={option.value}
                        control={<Checkbox/>} 
                    />
                ) )}
            </Field>
        </FormControl>

        <ErrorMessage name={name} color='red' component={Typography} />
    </Grid>
  )
}

export default CheckBoxs