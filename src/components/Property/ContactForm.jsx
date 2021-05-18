import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputTextField from '../../components/FrequentlyUsed/InputTextField'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-input-2'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
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
    },
    container: {
        margin: '10px 0px',
    },
    input: {
        height: '50px !important'
    },
    callButton: {
        display: 'inline-block',
        width: '100%',
        margin: '10px auto',
        padding: '20px',
        backgroundColor: 'rgb(76, 84, 85)',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bolder',
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center'
    },
    callIconBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    requestButton: {
        display: 'inline-block',
        width: '100%',
        margin: '10px auto',
        padding: '15px',
        backgroundColor: 'white',
        outline: 'none',
        border: '2px solid #fcb812',
        borderRadius: '5px',
        fontSize: '15px',
        fontWeight: 'bolder',
        color: '#fcb812',
        textDecoration: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        transition:'0.5s',
        "&:hover": {
            transform: 'scale(1.03)'
        }
    }
}));

const ContactForm = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>

            {/* FOR WHATSAPP CHAT */}
            {/* <a
                href="https://wa.me/2348100000000"
                target="_blank"
                rel="noopener noreferrer"
            >
                click me to chat on whatsapp
            </a> */}

            {/* FOR CALL */}
            <a href="tel:+15555551212" className={classes.callButton}>
                <div className={classes.callIconBox}>
                    <PhoneRoundedIcon style={{ fontSize: '20px', marginRight: '5px' }} />
                    <p>CALL</p>
                </div>
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

            <h5 style={{ marginBottom: '7px' }}>Message* </h5>
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
                country={'pk'}
                containerClass={classes.container}
                inputClass={classes.input}
                dropdownClass={classes.dropdown}
            />
            <button className={classes.requestButton}>REQUEST INFO</button>
        </Paper>
    );
}
export default ContactForm;