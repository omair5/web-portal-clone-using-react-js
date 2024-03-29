import React, { useState, useEffect } from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
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
    const dispatch = useDispatch()
    const AgentSearchShow = useSelector(state => state.AgentSearchShow)
    const AgentCardShow = useSelector(state => state.AgentCardShow)
    const [advertisement, setAdvertisement] = useState([])
    // FOR ADVERTISEMENTS
    useEffect(() => {
        const AdvertisementGet = async () => {
            if (localStorage.getItem("agent_page_advertisement")) {
                setAdvertisement(JSON.parse(localStorage.getItem("agent_page_advertisement")))
            }
            else {
                const response = await getAdvertisements('Agent')
                setAdvertisement(response)
                localStorage.setItem("agent_page_advertisement", JSON.stringify(response));
            }
        }
        AdvertisementGet()
    }, [])

    // FOR AGENT SHORT DETAILS
    useEffect(() => {
        const GetShortDetailAgentDeveloper = async () => {
            if (localStorage.getItem("agent_card_data")) {
                dispatch({ type: 'set_agent_list', payload: JSON.parse(localStorage.getItem("agent_card_data")) })
            }
            else {
                const response = await AgentDeveloperGetShortDetail('agent', 'shortagent')
                dispatch({ type: 'set_agent_list', payload: response })
                localStorage.setItem("agent_card_data", JSON.stringify(response));
            }
        }
        GetShortDetailAgentDeveloper()
    }, [dispatch])


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
                    <AgentListings />
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