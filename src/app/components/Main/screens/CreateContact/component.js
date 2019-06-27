import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactForm from "../components/ContactForm";

class CreateContactScreen extends Component {

    handleSave(contact, phones) {
        const {updateContact, updatePhones} = this.props;

        if (phones[0]) contact.defaultPhone = phones[0].number;
        const contactId = updateContact(contact);

        updatePhones(contactId, phones);

        this.props.history.replace(`update/${contactId}`);
        this.props.history.push('/contacts');
    }

    render() {
        return <ContactForm handleSave={(contact, phones) => this.handleSave(contact, phones)}
                            handleCancel={this.props.history.goBack}/>;
    }
}

CreateContactScreen.propTypes = {
    history: PropTypes.object.isRequired,
    updateContact: PropTypes.func.isRequired,
    updatePhones: PropTypes.func.isRequired
};

export default CreateContactScreen;
