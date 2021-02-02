import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import TextField from '@material-ui/core/TextField';
import Ratings from './Ratings';

const useStylesBase = makeStyles(theme => ({
    root: {
        "& .MuiInput-underline:after": {
            borderBottomColor: "orange"
        },
    },
}));


const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                border: "2px solid #fcb812" // customized
            }
        }
    },
    MainContainer: {
        margin: '15px auto'
    },
    icon: {
        fontSize: '20px',
        color: '#fcb812'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        "& p": {
            marginLeft: '10px',
            fontWeight: 'bolder'
        }
    },
    FormContainer: {
        marginTop: '10px',
    },
    RatingContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '30px',
        "& p": {
            flexBasis: '50%',
            fontWeight: 'bolder'
        }
    },
    RatingIcon: {
        flexBasis: '50%',
        backgroundColor: 'purple',
    },
    input: {
        width: '100%',
        margin: '10px 0px'
    },
    MessageStyle: {
        width: '100%',
        fontSize: '50px',
        margin: '10px 0px'
    },
}));

const LeaveAReview = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    return (
        <>
            <Paper style={{ overflow: 'hidden' }}>
                <Container maxWidth="lg" className={classes.MainContainer} >
                    <div className={classes.iconContainer}>
                        <RateReviewOutlinedIcon className={classes.icon} />
                        <p>Add A Review</p>
                    </div>

                    <div className={classes.FormContainer}>
                        <div className={classes.RatingContainer}>
                            <p>Your Rating</p>
                            <Ratings />
                        </div>
                        <form className={classes.form} >
                            {/* TEXTFIELD FOR NAME */}
                            <TextField id="standard-basic" label="NAME" className={classes.input}
                                type='text'
                                // FOR UNDERLINE STYLE
                                classes={classesBase}
                                // FOR INPUT STYLING
                                InputProps={{
                                    style: {
                                        color: "black",
                                        fontWeight: 'bolder',
                                        fontSize: '15px',
                                    }
                                }}
                                // FOR LABEL STYLING
                                InputLabelProps={{
                                    style: {
                                        color: "black",
                                        fontWeight: 'bold',
                                        fontSize: '15px',
                                    }
                                }} />

                            {/* TEXTFIELD FOR EMAIL */}
                            <TextField id="standard-basic" label="EMAIL" className={classes.input}
                                type='email'
                                // FOR UNDERLINE STYLE
                                classes={classesBase}
                                // FOR INPUT STYLING
                                InputProps={{
                                    style: {
                                        color: "black",
                                        fontWeight: 'bolder',
                                        fontSize: '15px',
                                    }
                                }}
                                // FOR LABEL STYLING
                                InputLabelProps={{
                                    style: {
                                        color: "black",
                                        fontWeight: 'bold',
                                        fontSize: '15px',
                                    }
                                }} />

                            {/* MESSAGE BOX */}
                            <TextField
                                variant="outlined"
                                placeholder="MESSAGE"
                                multiline
                                rows={5}
                                className={classes.MessageStyle}
                                InputProps={{
                                    style: { fontSize: '1.5rem' }
                                }}
                                classes={{
                                    root: classes.root
                                }}
                            />
                        </form>
                    </div>
                    {/* SEND REVIEW BUTTON */}
                    {/* class buttonStyle is used from app.css */}
                    <button className='buttonStyle' style={{ marginLeft: 0 }}>Submit Review</button>
                </Container>
            </Paper>
        </>
    );
}
export default React.memo(LeaveAReview);