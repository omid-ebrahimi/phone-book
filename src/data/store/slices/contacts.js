// @flow
import {createSlice} from 'redux-starter-kit'
import type {Contacts, Contact} from '../../types/contacts'

// Reducers
const addContact = (state: Contacts, action: {payload: Contact}) => {
    const contact = action.payload;
    state[contact.id] = contact;
};

// Slice
export const contacts = createSlice({
    slice: 'contacts',
    initialState: {},
    reducers: {
        addContact
    }
});