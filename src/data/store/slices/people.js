import {createSlice} from 'redux-starter-kit'
import uuid from 'uuid/v4'

// Reducers
const addPerson = (state, action) => {
    const {name, defaultPhone} = action.payload;
    state.push({id: uuid(), name,  defaultPhone})
};

// Slice
export const people = createSlice({
    slice: 'people',
    initialState: [],
    reducers: {
        addPerson
    }
});