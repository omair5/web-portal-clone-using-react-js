import React, { useState, useEffect } from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import OurPartners from '../../components/Partners/OurPartners';
import PartnerHeader from '../../components/Partners/PartnerHeader';
import GoToTop from '../../GoToTop'
import getAdvertisements from '../../Services/GetAdvertisements'


const Partners = () => {
    const [advertisement, setAdvertisement] = useState([])
    useEffect(() => {
        const AdvertisementGet = async () => {
            setAdvertisement(await getAdvertisements('Blogs'))
        }
        AdvertisementGet()
    }, [])
    return (
        <Layout FooterDisplay={true}>
            <Advertisement
                advertisements={advertisement}
            />
            <PartnerHeader />
            <OurPartners />
            <GoToTop />
        </Layout>);
}

export default Partners;