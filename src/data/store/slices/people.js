import {createSlice} from 'redux-starter-kit'
import uuid from 'uuid/v4'

// Reducers
const addPerson = (state, action) => {
    const {name, defaultPhone} = action.payload;
    const id = uuid();
    state[id] = {id, name,  defaultPhone};
};

// Slice
export const people = createSlice({
    slice: 'people',
    initialState: {},
    reducers: {
        addPerson
    }
});