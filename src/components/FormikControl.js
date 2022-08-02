import React from 'react'
import CheckBoxs from './CheckBoxs';
import DatePicker from './DatePicker';
import Input from './Input';
import RadioBtn from './RadioBtn';
import SelectInp from './Select';
import TextArea from './TextArea';

function FormikControl(props) {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': 
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <SelectInp {...rest} />
        case 'radio':
            return <RadioBtn {...rest} />
        case 'checkbox':
            return <CheckBoxs {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default: return null;
    }
}

export default FormikControl