import React from 'react';
import TextField, {HelperText, Input} from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const CleanableTextField = ({value, setValue, label, className, outlined, helperText}) => {
    return (
        <TextField label={label}
                   className={className}
                   outlined={outlined}
                   helperText={helperText ? <HelperText>{helperText}</HelperText> : null}
                   onTrailingIconSelect={() => setValue('')}
                   trailingIcon={<MaterialIcon role="button" icon="delete"/>}>
            <Input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
        </TextField>
    );
};

export default CleanableTextField;