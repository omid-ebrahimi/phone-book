import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CreateContactScreen extends Component {
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
            <main>
                Create Contact Page
            </main>
        );
    }
}

CreateContactScreen.propTypes = {
    addContact: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default CreateContactScreen;