import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ContactInfo, PhonesList} from './components';
import {Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
import CellCenter from '../../components/CellCenter';

class CreateContactScreen extends Component {
    state = {
        contact: {id: '', name: '', defaultPhone: ''},
        phones: [{number: '', type: 'Mobile'}]
    };

    // For Test
    componentDidMount() {
        const contactId =
            this.props.updateContact('Omid Ebrahimi', '09104588100', '');
        this.props.updatePhone(contactId, '09104588100', 'Mobile');

        const contactId1 =
            this.props.updateContact('Azam Ebrahimi', '09195036341', '');
        this.props.updatePhone(contactId1, '09195036341', 'Mobile');

        const contactId2 =
            this.props.updateContact('Arman Ebrahimi', '09155246598', '');
        this.props.updatePhone(contactId2, '09155246598', 'Mobile');
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

    handleSave() {

    }

    render() {
        const {contact, phones} = this.state;
        return (
            <Grid>
                <Row className='overflow-hidden'>
                    <CellCenter desktopColumns={4} tabletColumns={6} phoneColumns={4}>
                        <ContactInfo name={contact.name} setContactName={(name) => this.setContactName(name)}/>
                        <PhonesList phones={phones}
                                    setPhoneNumber={(index, number) => this.setPhoneNumber(index, number)}
                                    setPhoneType={(index, type) => this.setPhoneType(index, type)}
                                    addPhone={() => this.addPhone()}
                                    removePhone={(index) => this.removePhone(index)}/>
                    </CellCenter>
                </Row>
                <Row className='sticky bottom-0 mt1 z1'>
                    <CellCenter desktopColumns={4} tabletColumns={6} phoneColumns={4} className='flex justify-between'>
                        <Button className='col-5' style={{background: 'white'}} outlined>Cancel</Button>
                        <Button className='col-5' onClick={() => this.handleSave()} raised>Save</Button>
                    </CellCenter>
                </Row>
            </Grid>
        );
    }
}

CreateContactScreen.propTypes = {
    updateContact: PropTypes.func.isRequired,
    updatePhone: PropTypes.func.isRequired
};

export default CreateContactScreen;
