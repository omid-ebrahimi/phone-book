// @flow
import {createSlice} from 'redux-starter-kit'
import type {People, Person} from '../../types/People'

// Reducers
const addPerson = (state: People, action: {payload: Person}) => {
    const person = action.payload;
    state[person.id] = person;
};

// Slice
export const people = createSlice({
    slice: 'people',
    initialState: {},
    reducers: {
        addPerson
    }
});