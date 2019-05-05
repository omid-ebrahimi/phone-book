import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ContactInfo, PhonesList} from './components'
import {Cell, Grid, Row} from '@material/react-layout-grid';

class CreateContactScreen extends Component {
    state = {
        contact: {id: '', name: '', defaultPhone: ''},
        phones: [{number: '', type: 'Mobile'}]
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

    setPhoneType(index, type) {
        this.setState(({phones}) => {
            phones[index].type = type;
            return {phones}
        });
    }

    addPhone() {
        this.setState(({phones}) => {
            phones.push({number: '', type: 'Mobile'});
            return {phones}
        });
    }

    removePhone(index) {
        this.setState(({phones}) => {
            phones.splice(index, 1);
            return {phones}
        });
    }

    render() {
        const {contact, phones} = this.state;
        return (
            <Grid>
                <Row className='overflow-hidden'>
                    <Cell desktopColumns={4} tabletColumns={1} phoneColumns={0}> </Cell>
                    <Cell desktopColumns={4} tabletColumns={6} phoneColumns={4}>
                        <ContactInfo name={contact.name} setContactName={(name) => this.setContactName(name)}/>
                        <PhonesList phones={phones}
                                    setPhoneNumber={(index, number) => this.setPhoneNumber(index, number)}
                                    setPhoneType={(index, type) => this.setPhoneType(index, type)}
                                    addPhone={() => this.addPhone()}
                                    removePhone={(index) => this.removePhone(index)}/>
                    </Cell>
                    <Cell desktopColumns={4} tabletColumns={1} phoneColumns={0}> </Cell>
                </Row>
            </Grid>
        );
    }
}

CreateContactScreen.propTypes = {
    addContact: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default CreateContactScreen;