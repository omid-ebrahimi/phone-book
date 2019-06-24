import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import ContactForm from "../components/ContactForm";

function findRemovedNumbers(initialPhones, currentPhones) {
    const initialNumbers = initialPhones.map(phone => phone.number);
    const currentNumbers = currentPhones.map(phone => phone.number);
    return  initialNumbers.filter(number => !currentNumbers.includes(number));
}

class UpdateContactScreen extends Component {

    handleSave(contact, phones) {
        const {updateContact, updatePhones, removePhones} = this.props;

        const contactId = updateContact(contact);

        const removedNumbers = findRemovedNumbers(this.props.phones, phones);
        removePhones(removedNumbers);

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
