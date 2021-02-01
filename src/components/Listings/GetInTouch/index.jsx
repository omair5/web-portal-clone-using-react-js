import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RateReviewIcon from '@material-ui/icons/RateReview';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ReportIcon from '@material-ui/icons/Report';
import GetInTouchChild from './GetInTouchChild';

const useStyles = makeStyles(theme => ({
    MainContainer: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '90%',
        margin: 'auto',
        overflowY: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '95%',
        },
    },
    icon: {
        fontSize: '30px',
        color: '#fcb812'
    }
}));

const GetInTouch = () => {
    const classes = useStyles();

    return (
        <>
            <div className={`${classes.MainContainer} custom-scroll`}>
                <GetInTouchChild description='Get Directions'>
                    <LocationOnIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='0342-5368728'>
                    <PhoneIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='Send An Email'>
                    <EmailIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='Direct Message'>
                    <ChatBubbleIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='Leave A Review'>
                    <RateReviewIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='Bookmark'>
                    <FavoriteIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='Share'>
                    <ShareIcon className={classes.icon} />
                </GetInTouchChild >

                <GetInTouchChild description='Report'>
                    <ReportIcon className={classes.icon} />
                </GetInTouchChild >

            </div>
        </>
    );
}

export default React.memo(GetInTouch);