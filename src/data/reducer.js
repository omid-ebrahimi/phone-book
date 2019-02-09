import {combineReducers} from 'redux'
import {people, phones} from './slices'

export const reducer = combineReducers({
    people: people.reducer,
    phones: phones.reducer
});