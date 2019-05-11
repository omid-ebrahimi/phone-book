import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CleanableTextField from "../../../../components/CleanableTextField";
import {HelperText, Input} from "@material/react-text-field";

export class ContactInfo extends Component {
    state = {
        isValid: true
    };

    validate(name) {
        this.props.nameSchema.isValid(name)
            .then(isValid => this.setState({isValid}))
    }

    focusInput = () => {
        if (!this.input) return;
        const inputElement = this.input.inputElement;
        if (inputElement) {
            inputElement.focus();
        }
    };

    cleanAndFocus() {
        this.props.setContactName('');
        this.focusInput();
    }

    render() {
        const {isValid} = this.state;
        const {name, setContactName} = this.props;
        return (
            <CleanableTextField className='col-12 mt1' outlined label='Full Name'
                                helperText={<HelperText>Contact Full Name</HelperText>}
                                clean={() => this.cleanAndFocus()}>
                <Input value={name} onChange={(e) => setContactName(e.currentTarget.value)}
                       isValid={isValid} onBlur={(e) => this.validate(e.currentTarget.value)}
                       ref={input => this.input = input}/>
            </CleanableTextField>
        );
    }
}

ContactInfo.propTypes = {
    name: PropTypes.string,
    setContactName: PropTypes.func.isRequired,
    nameSchema: PropTypes.object.isRequired
};
