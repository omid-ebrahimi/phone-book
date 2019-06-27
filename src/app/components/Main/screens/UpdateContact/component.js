import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import ContactForm from "../components/ContactForm";

function findRemovedNumbers(initialPhones, currentPhones) {
    const initialNumbers = initialPhones.map(phone => phone.number);
    const currentNumbers = currentPhones.map(phone => phone.number);
    return initialNumbers.filter(number => !currentNumbers.includes(number));
}

class UpdateContactScreen extends Component {

    static propTypes = {
        contact: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        phones: PropTypes.array,
        removePhones: PropTypes.func.isRequired,
        updateContact: PropTypes.func.isRequired,
        updatePhones: PropTypes.func.isRequired
    };

    handleSave(contact, phones) {
        const {updateContact, updatePhones, removePhones, history} = this.props;

        if (phones[0]) contact.defaultPhone = phones[0].number;
        const contactId = updateContact(contact);

        const removedNumbers = findRemovedNumbers(this.props.phones, phones);
        removePhones(removedNumbers);

        updatePhones(contactId, phones);

        history.push('/contacts');
    }

    render() {
        const {contact, phones, history} = this.props;

        if (!contact) return <Redirect to='/contacts/create'/>;

        const initialValues = {contact, phones};

        return <ContactForm initialValues={initialValues}
                            handleSave={(contact, phones) => this.handleSave(contact, phones)}
                            handleCancel={history.goBack}/>;
    }
}

export default UpdateContactScreen;
