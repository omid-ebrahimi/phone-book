import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CleanableTextField from "../../../../../../../../components/CleanableTextField";
import {HelperText} from "@material/react-text-field/dist/index";

export class ContactInfo extends Component {
    render() {
        const {contactName, setContactName, errorMessage, ...rest} = this.props;
        return (
            <CleanableTextField className='col-12 mt1' outlined label='Full Name' isValid={!errorMessage}
                                helperText={<HelperText validation={!!errorMessage}>{errorMessage || 'Contact Full Name'}</HelperText>}
                                value={contactName} setValue={(value) => setContactName(value)} {...rest}/>
        );
    }
}

ContactInfo.propTypes = {
    contactName: PropTypes.string,
    errorMessage: PropTypes.string,
    setContactName: PropTypes.func.isRequired
};
