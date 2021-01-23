import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopCountries from './TopCountries';
import TopPlatforms from './TopPlatforms';
import TopBrowsers from './TopBrowsers';

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
    }
});

const TopLayout = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <TopCountries />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TopPlatforms />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TopBrowsers />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default TopLayout;