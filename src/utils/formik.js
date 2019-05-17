import {getIn} from "formik";

export const getErrorMessage = (errors, touched, name) => {
    const error = getIn(errors, name);
    const touch = getIn(touched, name);
    return touch && error ? error : null;
};