import React, { useState, useEffect } from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import OurPartners from '../../components/Partners/OurPartners';
import PartnerHeader from '../../components/Partners/PartnerHeader';
import GoToTop from '../../GoToTop'
import getAdvertisements from '../../Services/GetAdvertisements'
import GetPartners from '../../Services/GetPartners';

const Partners = () => {
    const [advertisement, setAdvertisement] = useState([])
    const [partners, setPartners] = useState([])
    // FETCHING ADVERTISEMNETS
    useEffect(() => {
        const AdvertisementGet = async () => {
            setAdvertisement(await getAdvertisements('Blogs'))
        }
        AdvertisementGet()
    }, [])
    // FETCHING PARTNERS DATA
    useEffect(() => {
        (
            async () => {
                setPartners(await GetPartners())
            }
        )()
    },[])

    return (
        <Layout FooterDisplay={true}>
            <Advertisement
                advertisements={advertisement}
            />
            <PartnerHeader />
            <OurPartners
                partners_list={partners}
            />
            <GoToTop />
        </Layout>);
}

export default Partners;