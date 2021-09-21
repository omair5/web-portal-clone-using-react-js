import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';


const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#fcb812',
            },
        },
    },
})(TextField);

const useStyles = makeStyles({
    inputfield: {
        margin: '10px 0px',
        width: '100%',
    },
    inputStyles: {
        color: "black",
        fontSize: '15px',
    },
    helperText: {
        fontSize: '10px',
        color: 'rgb(59, 70, 86)',
        fontWeight: 'bold'
    }
});

const InputTextField = ({ TextFieldId, TextFieldPlaceHolder, InputType, required, pattern, title, autoComplete, labelText, helperText, autofocus, value, callBack, name, passwordVisibility, error, outlined, maxlength, disabled }) => {
    const classes = useStyles();
    const [show, setShow] = useState(false)

    const HandleVisibleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <div>
                <CssTextField
                    id={TextFieldId}
                    placeholder={TextFieldPlaceHolder}
                    type={show ? 'text' : InputType}
                    required={required}
                    label={labelText}
                    helperText={helperText}
                    className={classes.inputfield}
                    autoFocus={autofocus}
                    value={value}
                    onChange={callBack}
                    name={name}
                    error={error}
                    variant="outlined"
                    disabled={disabled}
                    // FOR INPUT STYLING
                    // inputProps are used to pass attributes native to the underlying 
                    // HTML input element, e.g. name, id, style.
                    inputProps={{
                        pattern: pattern,
                        title: title,
                        className: classes.inputStyles,
                        autoComplete: autoComplete,
                        maxLength: maxlength
                    }}

                    // InputProps passes props to the wrapper Material 
                    // component. Can be  one of the following: Input, FilledInput, 
                    // OutlinedInput. You can pass here anything that the underlying
                    // Material component uses: error, value, onChange, and classes.
                    InputProps={{
                        endAdornment: (
                            passwordVisibility && <VisibilityIcon onClick={HandleVisibleClick} style={{ cursor: 'pointer', fontSize: '20px' }} />

                        )
                    }}

                    // FOR LABEL STYLING
                    InputLabelProps={{
                        style: {
                            color: "#fcb812",
                            fontWeight: 'bold',
                            fontSize: '12px',
                        }
                    }}

                    // FOR HELPER TEXT STYLING
                    FormHelperTextProps={{
                        className: classes.helperText
                    }}
                />
            </div>
        </>
    );
}
export default React.memo(InputTextField);