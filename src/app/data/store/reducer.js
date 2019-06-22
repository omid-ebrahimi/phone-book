import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {contacts, phones} from './slices'

const persistConfig = {
    key: 'root',
    storage: storage
};

const rootReducer = combineReducers({
    contacts: contacts.reducer,
    phones: phones.reducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
