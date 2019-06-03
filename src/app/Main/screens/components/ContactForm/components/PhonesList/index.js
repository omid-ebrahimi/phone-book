import React from 'react';
import PhoneField from "./components/PhoneField";
import MaterialIcon from "@material/react-material-icon/dist/index";
import {Headline5} from "@material/react-typography/dist/index";
import IconButton from "@material/react-icon-button/dist/index";

export const PhonesList = ({phones, setPhoneType, addPhone, removePhone, getPhoneId, phoneIsValid, ...props}) => {
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
                                isValid={phoneIsValid(index)} {...props}
                                setPhoneType={(value) => setPhoneType(index, value)}
                                removePhone={() => removePhone(index)}/>
                )
            }
        </>
    );
};
