import React from 'react';
import AapKaPropertyPartner from '../../components/AboutUs/AapKaPropertyPartner';
import AboutHeader from '../../components/AboutUs/AboutHeader';
import AboutSection from '../../components/AboutUs/AboutSection';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
const AboutUs = () => {
    return (
        <Layout FooterDisplay={true}>
            <AboutHeader />
            <AapKaPropertyPartner />
            <AboutSection />
            <GoToTop />
        </Layout>);
}

export default AboutUs;