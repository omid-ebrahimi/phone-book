// @flow
import {createSlice} from 'redux-starter-kit'
import type {Phones, Phone} from '../../types/phones'

// Reducers
const updatePhone = (state: Phones, action: { payload: Phone }) => {
    const phone = action.payload;
    state[phone.number] = phone
};

const removePhone = (state: Phones, action: { payload: string }) => {
    delete state[action.payload];
};

// Slice
export const phones = createSlice({
    slice: 'phones',
    initialState: {},
    reducers: {
        updatePhone,
        removePhone
    }
});

