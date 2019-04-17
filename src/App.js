import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import ContactsScreen from './screens/Contacts/container';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/contacts"/>)}/>
                <Route exact path="/contacts" component={ContactsScreen}/>
            </Switch>
        );
    }
}

export default App;
