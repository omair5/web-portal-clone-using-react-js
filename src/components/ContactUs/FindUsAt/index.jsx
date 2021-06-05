import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        minHeight: '250px',
    },
    grid1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& h1': {
            fontSize: '40px',
            [theme.breakpoints.down('md')]: {
                fontSize: '25px',
            },
        }
    },
    FindUs: {
        padding: '20px'
    },
    SocialMediaIcons: {
        fontSize: '20px',
        margin: '10px',
        display: 'inline-block',
        padding: '5px 9px',
        background: 'white',
        border: '3px solid #fcb812',
        borderRadius: '50%',
        color: '#fcb812',
        cursor: 'pointer',
    },
    fb: {
        '&:hover': {
            color: '#3b5998',
            border: '3px solid #3b5998',
        }
    },
    twitter: {
        '&:hover': {
            color: '#00acee',
            border: '3px solid #00acee',
        }
    },
    youtube: {
        '&:hover': {
            color: '#FF0000',
            border: '3px solid #FF0000',
        }
    },
    insta: {
        '&:hover': {
            color: '#DD2A7B',
            border: '3px solid #DD2A7B',
        }
    },
    call: {
        padding: '30px',
        '& h2': {
            textAlign: 'center',
            padding: '10px',
            color: '#fcb812',
            [theme.breakpoints.only('md')]: {
                fontSize: '15px',
            },
        },
        '& p': {
            textAlign: 'center',
            padding: '4px',
            fontWeight: 'bold'
        },
        '& a': {
            textAlign: 'center',
            display: 'block',
            textDecoration: 'none',
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold'
        },
    }
}));

const FindUsAt = () => {
    // LOGIC
    const classes = useStyles();
    // USER INTERFACE
    return (
        <>
            <Grid container spacing={1} className={classes.mainContainer}>
                {/* you can find us at  */}
                <Grid item xs={12} md={5} className={classes.grid1} >
                    <div className={classes.FindUs}>
                        <h1>YOU CAN FIND US AT</h1>
                        <div style={{ textAlign: 'center' }}>
                            <a className='link' href={'https://www.facebook.com/abaadeepk/'} target='_blank' rel="noreferrer"> <span className={`${classes.SocialMediaIcons} ${classes.fb}`} ><FontAwesomeIcon icon={faFacebookF} /></span></a>
                            <a className='link' href={'https://twitter.com/abaadeepk?lang=en'} target='_blank' rel="noreferrer"> <span className={`${classes.SocialMediaIcons} ${classes.twitter}`} ><FontAwesomeIcon icon={faTwitter} /></span></a>
                            <a className='link' href={'https://www.youtube.com/channel/UCYwDTTwUG6FvTCO6gqCLUxQ/videos'} target='_blank' rel="noreferrer"> <span className={`${classes.SocialMediaIcons} ${classes.youtube}`} ><FontAwesomeIcon icon={faYoutube} /></span></a>
                            <a className='link' href={'https://www.instagram.com/abaadeepk/?hl=en'} target='_blank' rel="noreferrer"><span className={`${classes.SocialMediaIcons} ${classes.insta}`} ><FontAwesomeIcon icon={faInstagram} /></span></a>
                        </div>
                    </div>
                </Grid>
                {/* contact info */}
                <Grid item xs={12} md={7} className={classes.grid1} >
                    <Grid container spacing={1} >
                        <Grid item xs={12} md={6} >
                            <div className={classes.call}>
                                <h2>PHONE NUMBER</h2>
                                <p>(03)-111-222-298</p>
                                <p>(03)-111-222-283</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className={classes.call}>
                                <h2>OUR EMAIL</h2>
                                <a href={`mailto:${'info@abaadee.com'}`}>info@abaadee.com</a>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default React.memo(FindUsAt);