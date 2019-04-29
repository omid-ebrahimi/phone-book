import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from './data/store/provider';
import MainRouter from "./MainRouter";

const App = () => (
    <Provider>
        <BrowserRouter>
            <main>
                <MainRouter/>
            </main>
        </BrowserRouter>
    </Provider>
);

export default App;
