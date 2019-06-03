import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from './data/store/provider';
import Main from "./components/Main";

const App = () => (
    <Provider>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>
);

export default App;
