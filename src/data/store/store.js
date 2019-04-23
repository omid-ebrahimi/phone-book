import {configureStore} from 'redux-starter-kit'
import {reducer} from './reducer'

/* global process */
export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});