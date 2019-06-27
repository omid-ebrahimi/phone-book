import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardPrimaryContent} from '@material/react-card';
import {Fab} from '@material/react-fab';
import MaterialIcon from "@material/react-material-icon";
import styles from './index.module.css';

class ContactsScreen extends Component {
    static propTypes = {
        contacts: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const {contacts, history} = this.props;
        return (
            <>
                <section className='flex flex-wrap justify-center'>
                    {
                        Object.values(contacts).map(
                            contact =>
                                <Card key={contact.id} className='m1'>
                                    <CardPrimaryContent onClick={() => history.push(`/contacts/update/${contact.id}`)}
                                                        className={styles.cardPrimaryContent}>
                                        <h1>{contact.name}</h1>
                                        <p>Phone: {contact.defaultPhone}</p>
                                    </CardPrimaryContent>
                                </Card>
                        )
                    }
                </section>
                <div className={`col-12 flex justify-center fab-container ${styles.fabContainer}`}>
                    <Fab onClick={() => history.push('/contacts/create')}
                         textLabel='Add Contact' icon={<MaterialIcon icon="add"/>}/>
                </div>
            </>
        );
    }
}

export default ContactsScreen;
