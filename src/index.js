import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '@material/react-card/dist/card.css';
import '@material/react-fab/dist/fab.css';
import '@material/react-material-icon/dist/material-icon.css';
import Provider from './data/store/provider';
import {BrowserRouter} from "react-router-dom";
import App from './App';

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
