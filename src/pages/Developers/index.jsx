import React, { useState, useEffect } from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DeveloperListings from '../../components/Developers/DeveloperListings';
import DeveloperFilter from '../../components/Developers/DeveloperFilter';
import FooterForMobileDevices from '../../components/FrequentlyUsed/FooterForMobileDevices';
import getAdvertisements from '../../Services/GetAdvertisements'
import AgentDeveloperGetShortDetail from '../../Services/AgentDeveloperGetShortDetail'


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
    const dispatch = useDispatch()
    const DeveloperSearchShow = useSelector(state => state.DeveloperSearchShow)
    const DeveloperCardShow = useSelector(state => state.DeveloperCardShow)
    const [advertisement, setAdvertisement] = useState([])

    // FOR ADVERTISEMENT
    useEffect(() => {
        const AdvertisementGet = async () => {
            if (localStorage.getItem("developer_page_advertisement")) {
                setAdvertisement(JSON.parse(localStorage.getItem("developer_page_advertisement")))
            }
            else {
                const response = await getAdvertisements('Devlopers')
                setAdvertisement(response)
                localStorage.setItem("developer_page_advertisement", JSON.stringify(response));
            }
        }
        AdvertisementGet()
    }, [])



    // FOR DEVELOPER SHORT DETAILS
    useEffect(() => {
        const GetShortDetailAgentDeveloper = async () => {
            if (localStorage.getItem("developers_card_data")) {
                dispatch({ type: 'set_developer_list', payload: JSON.parse(localStorage.getItem("developers_card_data")) })
            }
            else {
                const response = await AgentDeveloperGetShortDetail('developer', 'shortdeveloper')
                dispatch({ type: 'set_developer_list', payload: response })
                localStorage.setItem("developers_card_data", JSON.stringify(response));
            }
        }
        GetShortDetailAgentDeveloper()
    }, [dispatch])


    console.log('Developer Search Show', DeveloperSearchShow)
    console.log('Developer Card Show', DeveloperCardShow)

    return (
        <Layout FooterDisplay={false}>
            <Advertisement
                advertisements={advertisement}
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