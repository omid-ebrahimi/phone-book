import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Provider from './data/store/provider';
import PeopleScreen from './screens/PeopleScreen/container';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Route exact path="/" component={PeopleScreen} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
