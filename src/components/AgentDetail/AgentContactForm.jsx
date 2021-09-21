import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputTextField from '../../components/FrequentlyUsed/InputTextField'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-input-2'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import PopUpMessage from '../FrequentlyUsed/PopUpMessage'
import FailurePopUpMessage from '../FrequentlyUsed/FailurePopUpMessage'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        "& h2": {
            textAlign: 'center',
        }
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
        transition: '0.5s',
        "&:hover": {
            transform: 'scale(1.03)'
        }
    },
    price: {
        textAlign: 'center',
        fontSize: '32px',
        color: 'black',
        fontWeight: 'bolder'
    }
}));

const AgentContactForm = ({ agent_id, agent_name, mobile_phone }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [formFields, setformFields] = useState({ name: '', email: '', message: '' })
    const [phone, setphone] = useState('')
    const AuthorizedUser = useSelector(state => state.AuthorizedUserReducer)

    const HandleForm = (e) => {
        setformFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const HandlePhone = (value) => {
        setphone(value)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            accesstoken: localStorage.getItem('secretkey'),
            message: `${formFields.message}.
            This Enquiry Form is Submitted From Agent Deatil page
            For The Agent ${agent_name} Having Agent Id ${agent_id} `,
            name: formFields.name,
            p_number: phone,
            a_id: agent_id
        }
        if (localStorage.getItem('secretkey')) {
            console.log('form submitted successfully', formData)
            axios.post('http://localhost:3200/auth/agent_contact', formData)
                .then(res => {
                    console.log(res)
                    if (res.status === 201) {
                        setformFields({ name: '', email: '', message: '' })
                        setphone('')
                        dispatch({ type: 'open_FrequentlyUsed_PopUpMessage' })
                    }
                    else {
                        dispatch({ type: 'open_FrequentlyUsed_Failure_PopUpMessage' })
                    }
                })
                .catch(err => console.log(err))

        }
        else {
            dispatch({ type: 'OpenSignInDialog' })
        }
    }

    return (
        <Paper className={classes.paper} >
            <h2>ENQUIRY FORM</h2>
            <form onSubmit={HandleSubmit}>

                {/* FOR CALL */}
                <a href={`tel:${mobile_phone}`} className={classes.callButton}>
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
                    value={formFields.name}
                    name='name'
                    callBack={HandleForm}
                    outlined='outlined'
                />

                <h5>Email*</h5>
                <InputTextField
                    TextFieldId='2'
                    InputType='email'
                    required={true}
                    value={AuthorizedUser ? localStorage.getItem('user_email') : formFields.email} name='email'
                    callBack={HandleForm}
                    outlined='outlined'
                    disabled={AuthorizedUser}
                />

                <h5 style={{ marginBottom: '7px' }}>Message* </h5>
                <TextField
                    variant="outlined"
                    multiline
                    value={formFields.message}
                    name='message'
                    onChange={HandleForm}
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
                    value={phone}
                    onChange={HandlePhone}
                    inputProps={{
                        required: true,
                    }}
                />
                <button className={classes.requestButton} type='submit'>REQUEST INFO</button>
            </form>

            {/* SUCCESS MESSAGE */}
            < PopUpMessage
                heading={'ThankYou For Your Trust On Abaadee.com!'}
                color={'green'}
                message={'Dear User, A Representative Of Team Abaadee Will Contact You Shortly'}
            />
            {/* FAILURE MESSAGE */}
            <FailurePopUpMessage
                heading={'OOPS! SORRY SOMETHING WENT WRONG'}
                color={'red'}
                message={'Dear User, We Apoligize For The inconvenience! Servers Are Not Responding At This Moment Please Try Later'}
            />
        </Paper>
    );
}
export default React.memo(AgentContactForm);