import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStylesBase = makeStyles(theme => ({
    root: {
        "& .MuiInput-underline:after": {
            borderBottomColor: "orange"
        },
    },
}));

const useStyles = makeStyles({
    inputfield: {
        margin: '10px 0px',
        padding: '10px 0px',
        width: '100%',
    },
});

const InputTextField = ({ TextFieldId, TextFieldPlaceHolder }) => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    return (
        <>
            <div>
                <TextField
                    id={TextFieldId}
                    placeholder={TextFieldPlaceHolder}
                    classes={classesBase}
                    className={classes.inputfield}
                    // FOR INPUT STYLING
                    InputProps={{
                        style: {
                            color: "black",
                            fontWeight: 'bolder',
                            fontSize: '15px',
                        }
                    }}
                />
            </div>
        </>
    );
}
export default React.memo(InputTextField);