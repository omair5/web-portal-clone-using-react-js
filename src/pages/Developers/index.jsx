import React from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import HideContentShow from '../../components/Explore/HideContentShow';
import Grid from '@material-ui/core/Grid';
import Developer1 from './images/developer1.jpg'
import Developer2 from './images/developer2.jpg'
import DeveloperListings from '../../components/Developers/DeveloperListings';
import DeveloperFilter from '../../components/Developers/DeveloperFilter';

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '20px 0px',
    },
    hideComponent: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    HideContentShow: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    contentDisplay: {
        display: 'block'
    },
    contentHide: {
        display: 'none'
    }
}));

const Developers = () => {
    const classes = useStyles();

    return (
        <Layout FooterDisplay={false}>
            <Advertisement
                Ads={{ Ad1: Developer1, Ad2: Developer2 }}
                alt={{ alt1: "pearl villas", alt2: "gohar residency" }}
            />

            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item md={3} xs={12} className={classes.hideComponent} >
                    <DeveloperFilter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item md={9} xs={12} >
                    <DeveloperListings />
                </Grid>
            </Grid>
            <div className={classes.HideContentShow} >
                <HideContentShow />
            </div>

        </Layout>);
}

export default Developers;


// style={{ display: SearchShow ? 'block' : 'none' }}

// style={{ display: CardShow ? 'block' : 'none' }}