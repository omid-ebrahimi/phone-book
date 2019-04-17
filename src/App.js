import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import ContactsScreen from './screens/Contacts/container';
import CreateContactScreen from "./screens/CreateContact/container";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/contacts"/>)}/>
                <Route exact path="/contacts" component={ContactsScreen}/>
                <Route exact path="/contacts/create" component={CreateContactScreen}/>
            </Switch>
        );
    }
}

export default App;
