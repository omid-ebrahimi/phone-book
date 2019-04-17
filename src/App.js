import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Provider from './data/store/provider';
import ContactsScreen from './screens/ContactsScreen/container';

class App extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Route exact path="/" component={ContactsScreen} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
