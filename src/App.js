import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import ContactsScreen from './screens/Contacts/container';
import CreateContactScreen from "./screens/CreateContact/container";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" render={() => (<Redirect to="/contacts"/>)} exact/>
                <Route path="/contacts" component={ContactsScreen} exact/>
                <Route path="/contacts/create" component={CreateContactScreen} exact/>
            </Switch>
        );
    }
}

export default App;
