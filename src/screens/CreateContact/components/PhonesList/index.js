import React from 'react';
import PhoneField from "./components/PhoneField";

export const PhonesList = ({phones, setPhoneNumber}) => {
    return (
        <>
            <h1>Phones</h1>
            {
                phones.map((phone, index) =>
                    <PhoneField key={index} number={phone.number}
                                setPhoneNumber={(number) => setPhoneNumber(index, number)}/>
                )
            }
        </>
    );
};
