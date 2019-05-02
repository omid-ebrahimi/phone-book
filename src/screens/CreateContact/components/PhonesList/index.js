import React from 'react';
import PhoneField from "./components/PhoneField";

export const PhonesList = ({phones, setPhoneNumber, setPhoneType}) => {
    return (
        <>
            <h1>Phones</h1>
            {
                phones.map((phone, index) =>
                    <PhoneField key={index} phone={phone}
                                setPhoneNumber={(number) => setPhoneNumber(index, number)}
                                setPhoneType={(type) => setPhoneType(index, type)}/>
                )
            }
        </>
    );
};
