import React from 'react';
import PhoneField from "./components/PhoneField";
import {Fab} from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";
import {Headline4} from "@material/react-typography";

export const PhonesList = ({phones, setPhoneNumber, setPhoneType, addPhone}) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <Headline4>Phones</Headline4>
                <Fab onClick={addPhone} mini icon={<MaterialIcon icon="add"/>}/>
            </div>
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
