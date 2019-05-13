import React from 'react';
import PhoneField from "./components/PhoneField";
import MaterialIcon from "@material/react-material-icon";
import {Headline5} from "@material/react-typography";
import IconButton from "@material/react-icon-button";

export const PhonesList = ({phones, setPhoneType, onChange, addPhone, removePhone, getPhoneId}) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <Headline5>Phones</Headline5>
                <IconButton onClick={addPhone}>
                    <MaterialIcon icon="add"/>
                </IconButton>
            </div>
            {
                phones.map((phone, index) =>
                    <PhoneField key={index} phone={phone} id={getPhoneId(index)}
                                onChange={onChange}
                                setPhoneType={(value) => setPhoneType(index, value)}
                                removePhone={() => removePhone(index)}/>
                )
            }
        </>
    );
};
