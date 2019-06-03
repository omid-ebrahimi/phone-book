import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactForm from "../components/ContactForm";

class CreateContactScreen extends Component {
    onSubmit() {
        return (values, {setSubmitting}) => {
            setTimeout(() => {
                this.handleSave(values);
                setSubmitting(false);
            }, 400);
        };
    }

    handleSave({contact, phones}) {
        const {updateContact, updatePhones} = this.props;

        const contactId = updateContact(contact);
        updatePhones(contactId, phones);

        this.props.history.replace(`update/${contactId}`);
        this.props.history.push('/contacts');
    }

    render() {
        return <ContactForm onSubmit={this.onSubmit()}/>;
    }
}

CreateContactScreen.propTypes = {
    history: PropTypes.object.isRequired,
    updateContact: PropTypes.func.isRequired,
    updatePhones: PropTypes.func.isRequired
};

export default CreateContactScreen;
