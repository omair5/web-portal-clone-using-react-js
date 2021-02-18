import React from 'react';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Layout from '../../components/Layout/Layout';
import OurPartners from '../../components/Partners/OurPartners';
import Partner1 from './images/partner1.jpg'
import Partner2 from './images/partner2.jpg'
import GoToTop from '../../GoToTop'

const Partners = () => {
    return (
        <Layout FooterDisplay={true}>
            <Advertisement
                Ads={{ Ad1: Partner1, Ad2: Partner2 }}
                alt={{ alt1: "pearl villas", alt2: "gohar residency" }}
            />
            <OurPartners />
            <GoToTop />
        </Layout>);
}

export default Partners;