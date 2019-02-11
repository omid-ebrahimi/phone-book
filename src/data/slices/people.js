import {createSlice} from 'redux-starter-kit'

// Reducers
const addPerson = (state, action) => {
    const {name, defaultPhone} = action.payload;
    state.push({name,  defaultPhone})
};

// Slice
export const people = createSlice({
    slice: 'people',
    initialState: [],
    reducers: {
        addPerson
    }
});