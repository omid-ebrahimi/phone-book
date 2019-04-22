import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
import './component.css';

class CreateContactScreen extends Component {
    state = {
        fullName: ''
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

    render() {
        return (
            <section className='form'>
                <TextField
                    label='Full Name'
                    className='text-field'
                    outlined
                    helperText={<HelperText>Contact Full Name</HelperText>}
                    onTrailingIconSelect={() => this.setState({fullName: ''})}
                    trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                ><Input
                    value={this.state.fullName}
                    onChange={(e) => this.setState({fullName: e.currentTarget.value})}/>
                </TextField>
            </section>
        );
    }
}

CreateContactScreen.propTypes = {
    addContact: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default CreateContactScreen;