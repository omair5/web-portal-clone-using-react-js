import React from 'react';
import ExploreTabs from '../../components/Explore/ExploreTabs';
import Filter from '../../components/Explore/Filter';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import FooterForMobileDevices from '../../components/FrequentlyUsed/FooterForMobileDevices';
import { useEffect, useState } from 'react';
import getAdvertisements from '../../Services/GetAdvertisements'


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

const Explore = () => {
    // LOGIC
    const classes = useStyles();
    const SearchShow = useSelector(state => state.SearchShow)

    const CardShow = useSelector(state => state.CardShow)

    const [advertisement, setAdvertisement] = useState([])
    useEffect(() => {
        const AdvertisementGet = async () => {
            setAdvertisement(await getAdvertisements('Explore').catch(err => console.log(err)))
        }
        AdvertisementGet()
    }, [])
    return (
        <Layout FooterDisplay={false}>
            {/* ADVERTISEMENT COMPONENT FROM FREQUENTLY USED COMPONENTS */}
            <Advertisement advertisements={advertisement} />

            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item xs={12} md={4} lg={3} className={classes.hideComponent} style={{ display: SearchShow ? 'block' : 'none' }}  >
                    <Filter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item xs={12} md={8} lg={9} style={{ display: CardShow ? 'block' : 'none' }} >
                    <ExploreTabs />
                </Grid>
            </Grid>
            <div className={classes.FooterForMobileDevices} >
                <FooterForMobileDevices
                    toSearchText='LISTINGS'
                    id='search-1'
                />
            </div>
        </Layout >);
}
export default React.memo(Explore);