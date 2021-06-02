import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import PopUpMessage from '../../FrequentlyUsed/PopUpMessage';
import FailurePopUpMessage from '../../FrequentlyUsed/FailurePopUpMessage';
import { useDispatch } from 'react-redux'



// STYLES
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                border: "2px solid #fcb812" // customized
            }
        }
    },
    mainContainer: {
        maxWidth: '70%',
        height: 'auto',
        margin: '0px auto',
        marginBottom: '60px',
        [theme.breakpoints.down('md')]: {
            marginTop: '15px',
        },
        '& h1': {
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#fcb812',
            [theme.breakpoints.down('sm')]: {
                fontSize: '15px'
            },
        }
    },
    InputStyle: {
        width: '100%',
        fontSize: '50px'
    },
    mainGrid1: {
        margin: '15px 0px'
    },
    sendButton: {
        backgroundColor: '#fcb812',
        fontSize: '20px',
        padding: '10px 40px',
        '&:hover': {
            backgroundColor: '#fcb812',
            color: 'white'
        }
    },
    ButtonContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ContactForm = () => {
    // LOGIC
    const classes = useStyles();
    const dispatch = useDispatch()
    const [formFields, setformFields] = useState({ fname: '', lname: '', phone: '', email: '', message: '' })

    const HandleForm = (e) => {
        setformFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            f_name: formFields.fname,
            l_name: formFields.lname,
            p_number: formFields.phone,
            email: formFields.email,
            message: formFields.message,
        }
        axios.post('http://localhost:3200/home/contact', formData)
            .then(res => {
                if (res.status === 201) {
                    setformFields({ fname: '', lname: '', phone: '', email: '', message: '' })
                    dispatch({ type: 'open_FrequentlyUsed_PopUpMessage' })
                }
                else {
                    dispatch({ type: 'open_FrequentlyUsed_Failure_PopUpMessage' })
                }
            })
            .catch(err => console.log(err))
    }

    // USER INTERFACE
    return (
        <>
            <div className={classes.mainContainer}>
                <h1>Feel Free To Contact Us For More Information</h1>
                {/* main grid 1 */}
                <form onSubmit={HandleSubmit}>
                    <Grid container spacing={3} className={classes.mainGrid1}>
                        {/* FIRST NAME */}
                        <Grid item xs={12} sm={6} >
                            <TextField
                                required={true}
                                value={formFields.fname}
                                name='fname'
                                onChange={HandleForm}
                                variant="outlined"
                                placeholder="FIRST NAME"
                                className={classes.InputStyle}
                                InputProps={{
                                    style: { fontSize: '1.5rem' }
                                }}
                                classes={{
                                    root: classes.root
                                }}
                            />
                        </Grid>
                        {/* LAST NAME */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required={true}
                                value={formFields.lname}
                                name='lname'
                                onChange={HandleForm}
                                variant="outlined"
                                placeholder="LAST NAME"
                                className={classes.InputStyle}
                                InputProps={{
                                    style: { fontSize: '1.5rem' }
                                }}
                                classes={{
                                    root: classes.root
                                }}
                            />
                        </Grid>
                    </Grid>

                    {/* main grid 2 */}
                    <Grid container spacing={3} className={classes.mainGrid1}>
                        {/* PHONE NUMBER */}
                        <Grid item xs={12} sm={6} >
                            <TextField
                                required={true}
                                value={formFields.phone}
                                name='phone'
                                onChange={HandleForm}
                                variant="outlined"
                                type={'number'}
                                placeholder="PHONE NUMBER"
                                className={classes.InputStyle}
                                InputProps={{
                                    style: { fontSize: '1.5rem' }
                                }}
                                classes={{
                                    root: classes.root
                                }}
                            />
                        </Grid>
                        {/* EMAIL */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required={true}
                                value={formFields.email}
                                type={'email'}
                                name='email'
                                onChange={HandleForm}
                                variant="outlined"
                                placeholder="EMAIL"
                                className={classes.InputStyle}
                                InputProps={{
                                    style: { fontSize: '1.5rem' }
                                }}
                                classes={{
                                    root: classes.root
                                }}
                            />
                        </Grid>

                        {/* MESSAGE */}
                        <Grid item xs={12}>
                            <TextField
                                value={formFields.message}
                                name='message'
                                onChange={HandleForm}
                                variant="outlined"
                                placeholder="MESSAGE"
                                multiline
                                rows={5}
                                className={classes.InputStyle}
                                InputProps={{
                                    style: { fontSize: '1.5rem' }
                                }}
                                classes={{
                                    root: classes.root
                                }}
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.ButtonContainer}>
                        <Button className={classes.sendButton} type='submit'>SEND</Button>
                    </div>
                </form>
                {/* SUCCESS MESSAGE */}
                < PopUpMessage
                    heading={'ThankYou For Contacting Us!'}
                    color={'green'}
                    message={'Dear User, A Representetive Of Team Abaadee Will Contact You As Soon As Possible'}
                />
                {/* FAILURE MESSAGE */}
                <FailurePopUpMessage
                    heading={'OOPS! SORRY SOMETHING WENT WRONG'}
                    color={'red'}
                    message={'Dear User, We Apoligize For The inconvenience! Servers Are Not Responding At This Moment Please Try Later'}
                />
            </div>
        </>
    );
}

export default React.memo(ContactForm);