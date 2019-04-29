import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from './data/store/provider';
import Router from "./Router";

class App extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <main>
                        <Router/>
                    </main>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
