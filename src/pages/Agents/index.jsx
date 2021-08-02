import React, { useState, useEffect } from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import AgentListings from '../../components/Agents/AgentListings';
import AgentFilter from '../../components/Agents/AgentFilter';
import FooterForMobileDevices from '../../components/FrequentlyUsed/FooterForMobileDevices';
import getAdvertisements from '../../Services/GetAdvertisements'
import AgentDeveloperGetShortDetail from '../../Services/AgentDeveloperGetShortDetail';


const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '15px 0px',
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
    contentDisplay: {
        display: 'block'
    },
    contentHide: {
        display: 'none'
    }
}));

const Agents = () => {
    const classes = useStyles();
    const AgentSearchShow = useSelector(state => state.AgentSearchShow)
    const AgentCardShow = useSelector(state => state.AgentCardShow)
    const [advertisement, setAdvertisement] = useState([])
    const [listings, setListings] = useState([])
    // FOR ADVERTISEMENTS
    useEffect(() => {
        const AdvertisementGet = async () => {
            setAdvertisement(await getAdvertisements('Agent'))
        }
        AdvertisementGet()
    }, [])

    // FOR AGENT SHORT DETAILS
    useEffect(() => {
        const GetShortDetailAgentDeveloper = async () => {
            setListings(await AgentDeveloperGetShortDetail('shortagent'))
        }
        GetShortDetailAgentDeveloper()
    }, [])


    return (
        <Layout FooterDisplay={false}>
            <Advertisement
                advertisements={advertisement}
            />

            <Grid container className={classes.MainContainer} >
                {/* SEARCH FILTER */}
                <Grid item md={3} xs={12} className={classes.hideComponent} style={{ display: AgentSearchShow ? 'block' : 'none' }}>
                    <AgentFilter />
                </Grid>
                {/* SEARCH RESULTS */}
                <Grid item md={9} xs={12} style={{ display: AgentCardShow ? 'block' : 'none' }} >
                    <AgentListings listingsArray={listings} />
                </Grid>
            </Grid>
            <div className={classes.FooterForMobileDevices} >
                <FooterForMobileDevices
                    toSearchText='AGENTS LIST'
                    id='search-3'
                />
            </div>

        </Layout>);
}
export default Agents;