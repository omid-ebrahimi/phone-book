import {connect} from 'react-redux';
import {contacts, phones} from '../../data/store/slices';
import CreateContactScreen from './component';
import uuid from 'uuid/v4';

const mapDispatchToProps = dispatch => {

    function updateContact(name, defaultPhone, id) {
        if (!id) id = uuid();
        dispatch(contacts.actions.updateContact({id, name, defaultPhone}));
        return id
    }

    function updatePhone(contactId, number, type) {
        dispatch(phones.actions.updatePhone({contactId, number, type}))
    }

    return {
        updateContact,
        updatePhone
    }
};

export default connect(null, mapDispatchToProps)(CreateContactScreen);
