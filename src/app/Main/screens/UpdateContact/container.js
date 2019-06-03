import {connect} from 'react-redux';
import {contacts, phones} from '../../../data/store/slices';
import UpdateContactScreen from './component';
import uuid from 'uuid/v4';

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    const contact = id ? state.contacts[id] : null;
    const phones = contact && Object.values(state.phones).filter(phone => phone.contactId === id);

    return {contact, phones}
};

const mapDispatchToProps = dispatch => {

    function updateContact({name, defaultPhone, id}) {
        if (!id) id = uuid();
        dispatch(contacts.actions.updateContact({id, name, defaultPhone}));
        return id
    }

    function updatePhone({contactId, number, type}) {
        dispatch(phones.actions.updatePhone({contactId, number, type}))
    }

    function updatePhones(contactId, [...phones]) {
        phones.forEach(({number, type}) => updatePhone({contactId, number, type}));
    }

    return {
        updateContact,
        updatePhones
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContactScreen);
