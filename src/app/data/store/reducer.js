import {combineReducers} from 'redux'
import {contacts, phones} from './slices'

export const reducer = combineReducers({
    contacts: contacts.reducer,
    phones: phones.reducer
});
