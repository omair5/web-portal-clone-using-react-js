import React from 'react';
import AapKaPropertyPartner from '../../components/AboutUs/AapKaPropertyPartner';
import AboutHeader from '../../components/AboutUs/AboutHeader';
import AboutSection from '../../components/AboutUs/AboutSection';
import Layout from '../../components/Layout/Layout';
const AboutUs = () => {
    return (
        <Layout>
            <AboutHeader />
            <AapKaPropertyPartner />
            <AboutSection />
        </Layout>);
}

export default AboutUs;