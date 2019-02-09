import {createSlice} from 'redux-starter-kit'

const addPerson = (state, action) => {
    state.push(action.payload)
};

export const people = createSlice({
    slice: 'people',
    initialState: [],
    reducers: {
        addPerson
    }
});