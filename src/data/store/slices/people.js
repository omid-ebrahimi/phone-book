import {createSlice} from 'redux-starter-kit'

// Reducers
const addPerson = (state, action) => {
    const {id, name, defaultPhone} = action.payload;
    state[id] = {id, name, defaultPhone};
};

// Slice
export const people = createSlice({
    slice: 'people',
    initialState: {},
    reducers: {
        addPerson
    }
});