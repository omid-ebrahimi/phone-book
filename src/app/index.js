import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from './data/store/provider';
import Main from "./components/Main";
import ErrorBoundary from '../components/ErrorBoundary';

const App = () => (
    <ErrorBoundary>
        <Provider>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
);

export default App;
