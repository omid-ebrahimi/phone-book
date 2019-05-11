import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CleanableTextField from "../../../../components/CleanableTextField";
import {HelperText} from "@material/react-text-field";

export class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true
        }
    }

    validate(name) {
        this.props.nameSchema.isValid(name)
            .then(isValid => this.setState({isValid}))
    }

    render() {
        const {name, setContactName} = this.props;
        return (
            <CleanableTextField className='col-12 mt1' outlined label='Full Name'
                                helperText={<HelperText>Contact Full Name</HelperText>}
                                value={name} setValue={(name) => setContactName(name)}
                                isValid={this.state.isValid} onBlur={(e) => this.validate(e.currentTarget.value)}/>
        );
    }
}

ContactInfo.propTypes = {
    name: PropTypes.string,
    setContactName: PropTypes.func.isRequired,
    nameSchema: PropTypes.object.isRequired
};
