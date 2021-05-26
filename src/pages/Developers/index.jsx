import React from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Developer1 from './images/developer1.jpg'
import Developer2 from './images/developer2.jpg'
import DeveloperListings from '../../components/Developers/DeveloperListings';
import DeveloperFilter from '../../components/Developers/DeveloperFilter';
import FooterForMobileDevices from '../../components/FrequentlyUsed/FooterForMobileDevices';

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
    FooterForMobileDevices: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
}));

const Developers = () => {
    const classes = useStyles();
    const DeveloperSearchShow = useSelector(state => state.DeveloperSearchShow)
    const DeveloperCardShow = useSelector(state => state.DeveloperCardShow)

    console.log('Developer Search Show', DeveloperSearchShow)
    console.log('Developer Card Show', DeveloperCardShow)

    return (
        <Layout FooterDisplay={false}>
            <Advertisement
                Ads={{ Ad1: Developer1, Ad2: Developer2 }}
                alt={{ alt1: "pearl villas", alt2: "gohar residency" }}
            />

            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item md={3} xs={12} className={classes.hideComponent} style={{ display: DeveloperSearchShow ? 'block' : 'none' }} >
                    <DeveloperFilter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item md={9} xs={12} style={{ display: DeveloperCardShow ? 'block' : 'none' }}>
                    <DeveloperListings />
                </Grid>
            </Grid>
            <div className={classes.FooterForMobileDevices} >
                <FooterForMobileDevices
                    toSearchText='DEVELOPERS LIST'
                    id='search-2'
                />
            </div>

        </Layout>);
}

export default Developers;


// style={{ display: SearchShow ? 'block' : 'none' }}

// style={{ display: CardShow ? 'block' : 'none' }}