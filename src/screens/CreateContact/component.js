import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
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
                <section className='form-section'>
                    <TextField label='Full Name'
                               className='full-width'
                               outlined
                               helperText={<HelperText>Contact Full Name</HelperText>}
                               onTrailingIconSelect={() => this.setContactName('')}
                               trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                    ><Input value={contact.name}
                            onChange={(e) => this.setContactName(e.currentTarget.value)}/>
                    </TextField>
                </section>
                <section className='form-section'>
                    <h1>Phones</h1>
                    {
                        phones.map((phone, index) =>
                            <div key={index}>
                                <TextField className='col-9'
                                           onTrailingIconSelect={() => this.setPhoneNumber(index, '')}
                                           trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                                ><Input value={phone.number}
                                        onChange={(e) => this.setPhoneNumber(index, e.currentTarget.value)}/>
                                </TextField>
                            </div>
                        )
                    }
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