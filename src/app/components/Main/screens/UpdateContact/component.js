import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactForm from "../components/ContactForm";
import {Redirect} from "react-router-dom";

class UpdateContactScreen extends Component {

    handleSave(contact, phones) {
        const {updateContact, updatePhones} = this.props;

        const contactId = updateContact(contact);
        updatePhones(contactId, phones);

        this.props.history.push('/contacts');
    }

    render() {
        const {contact, phones} = this.props;

        if (!contact) return <Redirect to='/contacts/create'/>;

        const initialValues = {contact, phones};

        return <ContactForm initialValues={initialValues}
                            handleSave={(contact, phones) => this.handleSave(contact, phones)}/>;
    }
}

UpdateContactScreen.propTypes = {
    contact: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    phones: PropTypes.array,
    updateContact: PropTypes.func.isRequired,
    updatePhones: PropTypes.func.isRequired
};

export default UpdateContactScreen;
