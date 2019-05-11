import React from 'react';
import CleanableTextField from "../../../../components/CleanableTextField";
import {HelperText, Input} from "@material/react-text-field";

export const ContactInfo = ({name, setContactName}) => {
    return (
        <CleanableTextField className='col-12 mt1' outlined label='Full Name'
                            helperText={<HelperText>Contact Full Name</HelperText>}
                            clean={() => setContactName('')}>
            <Input value={name} onChange={(e) => setContactName(e.currentTarget.value)}/>
        </CleanableTextField>
    );
};