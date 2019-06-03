// @flow
import {createSlice} from 'redux-starter-kit'
import type {Phones, Phone} from '../../types/phones'

// Reducers
const updatePhone = (state: Phones, action: { payload: Phone }) => {
    const phone = action.payload;
    state[phone.number] = phone
};

// Slice
export const phones = createSlice({
    slice: 'phones',
    initialState: {},
    reducers: {
        updatePhone
    }
});

