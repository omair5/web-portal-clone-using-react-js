import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
    SocialMediaIcons: {
        fontSize: '20px',
        marginRight: '10px',
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
    web: {
        '&:hover': {
            color: '#555757',
            border: '3px solid #555757',
        }
    }
}));

const AgentSocialLinks = () => {
    const classes = useStyles();
    return (
        <>
            <a className='link' href={'https://www.facebook.com/abaadeepk/'} target='_blank' rel="noreferrer"> <span className={`${classes.SocialMediaIcons} ${classes.fb}`} ><FontAwesomeIcon icon={faFacebookF} /></span></a>
            <a className='link' href={'https://twitter.com/abaadeepk?lang=en'} target='_blank' rel="noreferrer"> <span className={`${classes.SocialMediaIcons} ${classes.twitter}`} ><FontAwesomeIcon icon={faTwitter} /></span></a>
            <a className='link' href={'https://www.youtube.com/channel/UCYwDTTwUG6FvTCO6gqCLUxQ/videos'} target='_blank' rel="noreferrer"> <span className={`${classes.SocialMediaIcons} ${classes.youtube}`} ><FontAwesomeIcon icon={faYoutube} /></span></a>
            <a className='link' href={'https://www.instagram.com/abaadeepk/?hl=en'} target='_blank' rel="noreferrer"><span className={`${classes.SocialMediaIcons} ${classes.insta}`} ><FontAwesomeIcon icon={faInstagram} /></span></a>
            <a className='link' href={'https://www.abaadee.com'} target='_blank' rel="noreferrer"><span className={`${classes.SocialMediaIcons} ${classes.web}`} ><FontAwesomeIcon icon={faGlobe} /></span></a>
        </>
    );
}
export default React.memo(AgentSocialLinks);