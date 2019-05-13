import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ContactInfo, PhonesList} from './components';
import {Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
import CellCenter from '../../components/CellCenter';
import {string, object, array} from 'yup';
import {Formik, FieldArray} from "formik";

const validationSchema = object().shape({
    contact: object().shape({
        name: string().trim().max(30).required()
    }),
    phones: array().of(
        object().shape({
            number: string().trim().max(13)
        }))
});

class CreateContactScreen extends Component {
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

    handleSave(values) {

    }

    render() {
        const initialValues = {
            contact: {id: '', name: '', defaultPhone: ''},
            phones: [{number: '', type: 'Mobile'}]
        };

        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        this.handleSave(values);
                        setSubmitting(false);
                    }, 400);
                }}>
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
                                                 isValid={!errors.contact || !errors.contact.name || !touched.contact || !touched.contact.name}
                                                 setContactName={(value) => setFieldValue('contact.name', value)}
                                                 onBlur={handleBlur}/>
                                    <FieldArray name='phones'>
                                        {
                                            arrayHelpers => (
                                                <PhonesList phones={values.phones}
                                                            getPhoneId={(index) => `phones[${index}]`}
                                                            onChange={handleChange}
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
                                    <Button className='col-5' style={{background: 'white'}} disabled={isSubmitting} outlined>Cancel</Button>
                                    <Button className='col-5' onClick={submitForm} disabled={isSubmitting} raised>Save</Button>
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
    updateContact: PropTypes.func.isRequired,
    updatePhone: PropTypes.func.isRequired
};

export default CreateContactScreen;
