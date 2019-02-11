import {createSlice} from 'redux-starter-kit'

// Reducers
const addPhone = (state, action) => {
    const {personId, number, type} = action.payload;
    state[number] = {personId, number, type}
};

// Slice
export const phones = createSlice({
    slice: 'phones',
    initialState: {},
    reducers: {addPhone}
});

