import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ContactInfo, PhonesList} from './components';
import {Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
import CellCenter from '../../components/CellCenter';
import {string, object, array} from 'yup';
import {Formik, FieldArray} from "formik";
import {getErrorMessage} from '../../utils/formik';

const validationSchema = object().shape({
    contact: object().shape({
        name: string().trim().max(30, 'Too long!').required('Required')
    }),
    phones: array().of(
        object().shape({
            number: string().trim().matches(/^(\+\d{1,3})\d{10}$/, {excludeEmptyString: true})
        }))
});

class CreateContactScreen extends Component {
    onSubmit() {
        return (values, {setSubmitting}) => {
            setTimeout(() => {
                this.handleSave(values);
                setSubmitting(false);
            }, 400);
        };
    }

    handleSave({contact, phones}) {
        const {updateContact, updatePhones} = this.props;

        const contactId = updateContact(contact);
        updatePhones(contactId, phones);

        // Todo: Extract contact form to separate create and edit operations
        if (!this.props.match.params.id) this.props.history.replace(`edit/${contactId}`);
        this.props.history.push('/contacts');
    }

    render() {
        const {contact,  phones} = this.props;

        const initialValues = {
            contact: contact || {id: '', name: '', defaultPhone: ''},
            phones: phones || [{number: '', type: 'Mobile'}]
        };

        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={this.onSubmit()}>
                {
                    ({
                         handleChange,
                         handleBlur,
                         submitForm,
                         values,
                         errors,
                         touched,
                         setFieldValue,
                         isSubmitting
                     }) => (
                        <Grid>
                            <Row className='overflow-hidden'>
                                <CellCenter desktopColumns={4} tabletColumns={6} phoneColumns={4}>
                                    <ContactInfo id='contact.name' contactName={values.contact.name}
                                                 errorMessage={getErrorMessage(errors, touched, 'contact.name')}
                                                 setContactName={(value) => setFieldValue('contact.name', value)}
                                                 onBlur={handleBlur}/>
                                    <FieldArray name='phones'>
                                        {
                                            arrayHelpers => (
                                                <PhonesList phones={values.phones}
                                                            getPhoneId={(index) => `phones[${index}]`}
                                                            phoneIsValid={(index) => !getErrorMessage(errors, touched, `phones[${index}].number`)}
                                                            onChange={handleChange} onBlur={handleBlur}
                                                            setPhoneType={(index, value) => setFieldValue(`phones[${index}].type`, value)}
                                                            addPhone={() => arrayHelpers.push({
                                                                number: '',
                                                                type: 'Mobile'
                                                            })}
                                                            removePhone={(index) => arrayHelpers.remove(index)}/>
                                            )
                                        }
                                    </FieldArray>
                                </CellCenter>
                            </Row>
                            <Row className='sticky bottom-0 mt1 z1'>
                                <CellCenter desktopColumns={4} tabletColumns={6} phoneColumns={4}
                                            className='flex justify-between'>
                                    <Button className='col-5' style={{background: 'white'}} disabled={isSubmitting} outlined>
                                        Cancel
                                    </Button>
                                    <Button className='col-5' onClick={submitForm} disabled={isSubmitting} raised>
                                        Save
                                    </Button>
                                </CellCenter>
                            </Row>
                        </Grid>
                    )
                }
            </Formik>
        );
    }
}

CreateContactScreen.propTypes = {
    contact: PropTypes.object,
    updateContact: PropTypes.func.isRequired,
    updatePhones: PropTypes.func.isRequired
};

export default CreateContactScreen;
