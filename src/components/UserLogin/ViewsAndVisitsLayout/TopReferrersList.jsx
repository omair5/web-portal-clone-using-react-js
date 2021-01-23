import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    LinksContainer: {
        overflow: 'hidden',
        overflowY: 'scroll',
        transition: 'all .5s ease'
    },
    ChildContainer: {
        marginBottom: '20px'
    },
    ForLinkHeading: {
        backgroundColor: 'silver',
        padding: '10px',
        '& span': {
            fontWeight: 'bolder'
        }
    }
});

const TopReferrersList = ({ showState }) => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md" className={`${classes.LinksContainer} custom-scroll`} style={{ height: showState ? '400px' : 0 }} >
                <div className={classes.ChildContainer} >
                    <p className={classes.ForLinkHeading}><span>www.google.com</span> (118 views)</p>
                    <p>— https://www.google.com/ (118 views)</p>
                </div>

                <div className={classes.ChildContainer}>
                    <p className={classes.ForLinkHeading}><span>abaadee.com</span> (97 views)</p>
                    <p>— https://abaadee.com/pakistan-estate-agents/ (13 views)</p>
                    <p>— https://abaadee.com/pakistan-real-estate-developers/ (9 views)</p>
                    <p>— https://abaadee.com/houses-for-sale-in-sahiwal/ (8 views)</p>
                    <p>— https://abaadee.com/houses-for-sale-in-bahawalpur/ (5 views)</p>
                    <p>— https://abaadee.com/listing/outclass-pent-house-for-sale/ (4 views)</p>
                    <p>— https://abaadee.com/explore-pakistan-properties/?type=rent-2&sort=latest (4 views)</p>
                    <p>— https://abaadee.com/houses-for-sale-in-quetta/ (3 views)</p>
                    <p>— https://abaadee.com/houses-for-sale-in-karachi/ (3 views)</p>
                </div>

                <div className={classes.ChildContainer}>
                    <p className={classes.ForLinkHeading}><span>www.google.com.pk</span> (9 views)</p>
                    <p>— https://www.google.com.pk/ (9 views)</p>
                </div>

                <div className={classes.ChildContainer}>
                    <p className={classes.ForLinkHeading}><span>www.google.ca</span> (2 views)</p>
                    <p>— https://www.google.ca/ (2 views)</p>
                </div>

                <div className={classes.ChildContainer} >
                    <p className={classes.ForLinkHeading}><span>com.google.android.googlequicksearchbox</span> (1 views)</p>
                    <p>— android-app://com.google.android.googlequicksearchbox/ (1 views)</p>
                </div>
            </Container>
        </>
    );
}

export default React.memo(TopReferrersList);