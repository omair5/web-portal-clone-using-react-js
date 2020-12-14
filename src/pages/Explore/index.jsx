import React from 'react';
import Advertisement from '../../components/Explore/Advertisement';
import ExploreTabs from '../../components/Explore/ExploreTabs';
import Filter from '../../components/Explore/Filter';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HideContentShow from '../../components/Explore/HideContentShow';
import { useSelector } from 'react-redux';


// STYLES
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

const Explore = () => {
    // LOGIC
    const classes = useStyles();
    const SearchShow = useSelector(state => state.SearchShow)
    const CardShow = useSelector(state => state.CardShow)
    return (
        <Layout>
            <Advertisement />
            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item md={3} xs={12} className={classes.hideComponent} style={{ display: SearchShow ? 'block' : 'none' }}  >
                    <Filter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item md={9} xs={12} style={{ display: CardShow ? 'block' : 'none' }} >
                    <ExploreTabs />
                </Grid>
            </Grid>
            <div className={classes.HideContentShow} >
                <HideContentShow />
            </div>
        </Layout >);
}

export default React.memo(Explore);
