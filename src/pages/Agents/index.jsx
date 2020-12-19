import React from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import HideContentShow from '../../components/Explore/HideContentShow';
import Grid from '@material-ui/core/Grid';
import Agent1 from './images/Agent1.jpg'
import Agent2 from './images/Agent2.jpg'
import AgentListings from '../../components/Agents/AgentListings';
import AgentFilter from '../../components/Agents/AgentFilter';

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

const Agents = () => {
    const classes = useStyles();

    return (
        <Layout FooterDisplay={false}>
            <Advertisement
                Ads={{ Ad1: Agent1, Ad2: Agent2 }}
                alt={{ alt1: "pearl villas", alt2: "gohar residency" }}
            />

            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item md={3} xs={12} className={classes.hideComponent} >
                    <AgentFilter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item md={9} xs={12} >
                    <AgentListings />
                </Grid>
            </Grid>
            <div className={classes.HideContentShow} >
                <HideContentShow />
            </div>

        </Layout>);
}

export default Agents;


// style={{ display: SearchShow ? 'block' : 'none' }}

// style={{ display: CardShow ? 'block' : 'none' }}