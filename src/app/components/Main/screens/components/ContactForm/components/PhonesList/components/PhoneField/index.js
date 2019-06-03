import React from 'react';
import TextField, {Input} from "@material/react-text-field/dist/index";
import {phoneTypes} from '../../../../../../../../../data/types/phones';
import MaterialIcon from "@material/react-material-icon/dist/index";
import IconButton from '@material/react-icon-button/dist/index';
import Select from '@material/react-select/dist/index';

const types = Object.values(phoneTypes);

const PhoneField = ({phone: {number, type}, setPhoneType, removePhone, id, ...props}) => {
    return (
        <section className='flex justify-between items-center mb1'>

            <TextField className='col-12'>
                <Input {...props} value={number} id={`${id}.number`}/>
            </TextField>

            <Select
                enhanced
                className='ml1'
                onEnhancedChange={(index) => setPhoneType(types[index])}
                value={type}
                options={types}
            />

            <IconButton onClick={removePhone}>
                <MaterialIcon icon="remove"/>
            </IconButton>

        </section>
    );
};

export default PhoneField;
