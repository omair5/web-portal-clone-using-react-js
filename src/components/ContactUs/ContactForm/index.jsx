import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        margin: '10px auto',
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
    // USER INTERFACE
    return (
        <>
            <div className={classes.mainContainer}>
                <h1>Feel Free To Contact Us For More Information</h1>
                {/* main grid 1 */}
                <form>
                    <Grid container spacing={3} className={classes.mainGrid1}>
                        {/* FIRST NAME */}
                        <Grid item xs={12} sm={6} >
                            <TextField variant="outlined" placeholder="FIRST NAME" className={classes.InputStyle}
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
                            <TextField variant="outlined" placeholder="LAST NAME" className={classes.InputStyle}
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
                            <TextField variant="outlined" placeholder="PHONE NUMBER" className={classes.InputStyle}
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
                            <TextField variant="outlined" placeholder="EMAIL" className={classes.InputStyle}
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
                        <Button className={classes.sendButton}>SEND</Button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default ContactForm;