import {connect} from 'react-redux';
import {contacts, phones} from '../../data/store/slices';
import CreateContactScreen from './component';
import uuid from 'uuid/v4';

const mapDispatchToProps = dispatch => {

    function addContact(name, defaultPhone) {
        const id = uuid();
        dispatch(contacts.actions.addContact({id, name, defaultPhone}));
        return id
    }

    function addPhone(contactId, number, type) {
        dispatch(phones.actions.addPhone({contactId, number, type}))
    }

    return {
        addContact,
        addPhone
    }
};

export default connect(null, mapDispatchToProps)(CreateContactScreen);