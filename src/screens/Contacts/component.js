import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardPrimaryContent} from '@material/react-card';
import {Fab} from '@material/react-fab';
import MaterialIcon from "@material/react-material-icon";
import './component.css';
import {Link} from "react-router-dom";

class ContactsScreen extends Component {
    render() {
        const {contacts} = this.props;
        return (
            <>
                <section className='cards-container'>
                    {
                        Object.values(contacts).map(
                            contact => (
                                <Card key={contact.id} className='card'>
                                    <CardPrimaryContent className='card-primary-content'>
                                        <h1>{contact.name}</h1>
                                        <p>Phone: {contact.defaultPhone}</p>
                                    </CardPrimaryContent>
                                </Card>)
                        )
                    }
                </section>
                <div className='fab-container'>
                    <Link to='/contacts/create'><Fab textLabel='Add Contact' icon={<MaterialIcon icon="add"/>}/></Link>
                </div>
            </>
        );
    }
}

ContactsScreen.propTypes = {
    contacts: PropTypes.object.isRequired
};

export default ContactsScreen;