import React from 'react';
import CleanableTextField from "../../../../../../components/CleanableTextField";

const PhoneField = ({number, setPhoneNumber}) => {
    return (
        <>
            <CleanableTextField className='col-9' value={number} setValue={(number) => setPhoneNumber(number)}/>
        </>
    );
};

export default PhoneField;