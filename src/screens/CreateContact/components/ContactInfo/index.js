import React from 'react';
import CleanableTextField from "../../../../components/CleanableTextField";

export const ContactInfo = ({name, setContactName}) => {
    return (
        <CleanableTextField className='col-12 mt1' outlined
                            label='Full Name' helperText='Contact Full Name'
                            value={name} setValue={setContactName}/>
    );
};