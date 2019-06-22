import React from 'react';
import PropTypes from 'prop-types';
import {FieldArray, Formik} from "formik/dist/index";
import {Grid, Row} from "@material/react-layout-grid/dist/index";
import CellCenter from "../../../../../../components/CellCenter";
import {ContactInfo} from "./components/ContactInfo";
import {getErrorMessage} from "../../../../../../utils/formik";
import {PhonesList} from "./components/PhonesList";
import Button from "@material/react-button/dist/index";
import {array, object, string} from "yup";

const validationSchema = object().shape({
    contact: object().shape({
        name: string().trim().max(30, 'Too long!').required('Required')
    }),
    phones: array().of(
        object().shape({
            number: string().trim().matches(/^(\+\d{1,3})\d{10}$/, {excludeEmptyString: true})
        }))
});

const defaultInitialValues = {
    contact: {id: '', name: '', defaultPhone: ''},
    phones: [{number: '', type: 'Mobile'}]
};

function ContactForm({handleSave, initialValues = defaultInitialValues}) {

    function onSubmit({contact, phones}, {setSubmitting}) {
        handleSave(contact, phones);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
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
                                <Button className='col-5' style={{background: 'white'}} disabled={isSubmitting}
                                        outlined>
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
    )
}

ContactForm.propTypes = {
    initialValues: PropTypes.object,
    handleSave: PropTypes.func.isRequired
};

export default ContactForm;
