import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ContactInfo, PhonesList} from './components'
import './component.css';

class CreateContactScreen extends Component {
    state = {
        contact: {id: '', name: '', defaultPhone: ''},
        phones: [{number: '', type: ''}]
    };

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

    setContactName(name) {
        this.setState(({contact}) => ({contact: {...contact, name}}))
    }

    setPhoneNumber(index, number) {
        this.setState(({phones}) => {
            phones[index].number = number;
            return {phones}
        });
    }

    render() {
        const {contact, phones} = this.state;
        return (
            <section className='main'>
                <section className='form'>
                    <ContactInfo name={contact.name} setContactName={(name) => this.setContactName(name)}/>
                    <PhonesList phones={phones} setPhoneNumber={(index, number) => this.setPhoneNumber(index, number)}/>
                </section>
            </section>
        );
    }
}

CreateContactScreen.propTypes = {
    addContact: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default CreateContactScreen;