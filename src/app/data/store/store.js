import {configureStore} from 'redux-starter-kit'
import {persistStore} from 'redux-persist'
import {persistedReducer} from './reducer'

/* global process */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [],
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);
