import React from 'react';
import CleanableTextField from "../../../../../../components/CleanableTextField";
import {phoneTypes} from '../../../../../../data/types/phones';
import SelectMenu from '../../../../../../components/SelectMenu';

const PhoneField = ({phone: {number, type}, setPhoneNumber, setPhoneType}) => {
    return (
        <section className='flex justify-between'>
            <CleanableTextField className='col-9' value={number} setValue={(number) => setPhoneNumber(number)}/>
            <SelectMenu items={Object.values(phoneTypes)} selectedItem={type}
                        onSelectItem={(type) => setPhoneType(type)}/>
        </section>
    );
};

export default PhoneField;