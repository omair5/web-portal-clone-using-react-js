import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

// FOR ROOT
const useStylesBase = makeStyles(theme => ({
    root: {
        "& .MuiInput-underline:after": {
            borderBottomColor: "orange"
        },
    },
}));
// FOR GENERAL
const useStyles = makeStyles(theme => ({
    forAutoComplete: {
        width: '100%',
        height: '60px',
    },
    forTextField: {
        height: '100%',
    }
}));

const AutoCompleteTextField = ({ id, label, style, onChange, value, options, disable, required, placeholder }) => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    return (
        <>
            <Autocomplete
                id={id}
                value={value}
                options={options ? options : []}
                getOptionLabel={(option) => option}
                className={classes.forAutoComplete}
                onChange={onChange}
                style={style}
                disabled={disable}
                renderInput={(params) => <TextField {...params}
                    label={label}
                    required={required}
                    variant='outlined'
                    placeholder={placeholder}
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
                    // FOR INPUT STYLING
                    InputProps={{
                        ...params.InputProps,
                        style: {
                            color: "black",
                            fontSize: '15px',
                        }
                    }}
                    // FOR LABEL STYLING
                    InputLabelProps={{
                        style: {
                            color: "#fcb812",
                            fontWeight: 'bold',
                            fontSize: '12px',
                        }
                    }}
                />
                }
            />
        </>
    );
}
export default React.memo(AutoCompleteTextField);