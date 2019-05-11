import React from 'react';
import TextField from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const CleanableTextField = ({clean, children, ...props}) => {
    return (
        <TextField {...props} onTrailingIconSelect={clean}
                   trailingIcon={<MaterialIcon role="button" icon="delete"/>}>
            {children}
        </TextField>
    );
};

export default CleanableTextField;