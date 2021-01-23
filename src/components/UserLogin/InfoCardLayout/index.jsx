import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { faListAlt, faHourglassStart, faPowerOff, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './InfoCard'

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto'
    },
});

const InfoCardLayout = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    <InfoCard
                        publisedListings='65,856'
                        description='Published Listings'
                        icon={faListAlt}
                    />
                    <InfoCard
                        publisedListings={1}
                        description='Pending Listings'
                        icon={faHourglassStart}
                    />
                    <InfoCard
                        publisedListings={0}
                        description='Active Promotions'
                        icon={faPowerOff}
                    />
                    <InfoCard
                        publisedListings='21,820'
                        description='Visits this week'
                        icon={faSlidersH}
                    />
                </Grid>
            </Container>
        </>
    );
}
export default React.memo(InfoCardLayout);