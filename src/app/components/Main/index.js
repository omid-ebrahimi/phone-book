import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ContactsScreen from "./screens/Contacts/container";
import CreateContactScreen from "./screens/CreateContact/container";
import UpdateContactScreen from "./screens/UpdateContact/container";
import NotFound from "./screens/NotFound";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" render={() => (<Redirect to="/contacts"/>)} exact/>
                <Route path="/contacts" component={ContactsScreen} exact/>
                <Route path="/contacts/create" component={CreateContactScreen} exact/>
                <Route path="/contacts/update/:id" component={UpdateContactScreen} exact/>
                <Route component={NotFound}/>
            </Switch>
        </main>
    );
};

export default Main;
