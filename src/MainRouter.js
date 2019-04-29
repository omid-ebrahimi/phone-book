import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ContactsScreen from "./screens/Contacts/container";
import CreateContactScreen from "./screens/CreateContact/container";

const MainRouter = () => (
    <Switch>
        <Route path="/" render={() => (<Redirect to="/contacts"/>)} exact/>
        <Route path="/contacts" component={ContactsScreen} exact/>
        <Route path="/contacts/create" component={CreateContactScreen} exact/>
    </Switch>
);

export default MainRouter;