import React from 'react';
import Advertisement from '../../components/Explore/Advertisement';
import ExploreTabs from '../../components/Explore/ExploreTabs';
import Filter from '../../components/Explore/Filter';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// STYLES
const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '20px 0px',
    }
}));

const Explore = () => {
    // LOGIC
    const classes = useStyles();
    return (
        <Layout>
            <Advertisement />
            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item md={3} >
                    <Filter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item md={9} xs={12}>
                    <ExploreTabs />
                </Grid>
            </Grid>
        </Layout >);
}

export default Explore;