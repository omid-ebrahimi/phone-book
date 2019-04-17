import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardPrimaryContent} from '@material/react-card';
import {Fab} from '@material/react-fab';
import MaterialIcon from "@material/react-material-icon";
import './component.css';

class ContactsScreen extends Component {
    // For Test
    componentDidMount() {
        const contactId =
            this.props.addContact('Omid Ebrahimi', '09104588100');
        this.props.addPhone(contactId, '09104588100', 'Mobile');

        const contactId1 =
            this.props.addContact('Azam Ebrahimi', '09195036341');
        this.props.addPhone(contactId1, '09195036341', 'Mobile');

        const contactId2 =
            this.props.addContact('Arman Ebrahimi', '09155246598');
        this.props.addPhone(contactId2, '09155246598', 'Mobile');
    }

    render() {
        const {contacts} = this.props;
        return (
            <main>
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
                <div className='fab-container'><Fab textLabel='Add Contact' icon={<MaterialIcon icon="add"/>}/></div>
            </main>
        );
    }
}

ContactsScreen.propTypes = {
    contacts: PropTypes.object.isRequired,
    addContact: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default ContactsScreen;