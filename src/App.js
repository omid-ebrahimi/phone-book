import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Provider from './data/store/provider';
import ContactsScreen from './screens/Contacts/container';

class App extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/contacts"/>)}/>
                        <Route exact path="/contacts" component={ContactsScreen}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
