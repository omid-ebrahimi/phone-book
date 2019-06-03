import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "./screens/NotFound";
import ContactsScreen from "./screens/Contacts/container";
import CreateContactScreen from "./screens/CreateContact/container";
import UpdateContactScreen from "./screens/UpdateContact/container";

const MainRouter = () => (
    <Switch>
        <Route path="/" render={() => (<Redirect to="/contacts"/>)} exact/>
        <Route path="/contacts" component={ContactsScreen} exact/>
        <Route path="/contacts/create" component={CreateContactScreen} exact/>
        <Route path="/contacts/update/:id" component={UpdateContactScreen} exact/>
        <Route component={NotFound} />
    </Switch>
);

export default MainRouter;
