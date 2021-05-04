import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputTextField from '../../components/FrequentlyUsed/InputTextField'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    inputStyles: {
        color: "rgb(59, 70, 86)",
        fontSize: '15px',
        fontWeight: 'bold',
    },
}));

const ContactForm = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>

            <a
                href="https://wa.me/2348100000000"
                target="_blank"
                rel="noopener noreferrer"
            >
                click me to chat on whatsapp
            </a>

            <h5>Name*</h5>
            <InputTextField
                TextFieldId='1'
                InputType='text'
                required={true}
                name='name'
                outlined='outlined'
            />
            <h5>Email*</h5>
            <InputTextField
                TextFieldId='2'
                InputType='email'
                required={true}
                name='email'
                outlined='outlined'
            />
            <h5>Message* </h5>
            <TextField
                variant="outlined"
                multiline
                fullWidth={true}
                rows={5}
                InputProps={{
                    className: classes.inputStyles,
                }}
            />

            <PhoneInput
                country={'us'}
                containerClass='country-code-container'
            />


        </Paper>
    );
}

export default ContactForm;