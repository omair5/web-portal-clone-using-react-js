import React from 'react';
import ContactForm from '../../components/ContactUs/ContactForm';
import FindUsAt from '../../components/ContactUs/FindUsAt';
import LocationMap from '../../components/ContactUs/LocationMap';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
const ContactUs = () => {
    return (
        <Layout FooterDisplay={true}>
            <FindUsAt />
            <ContactForm />
            <LocationMap />
            <GoToTop />
        </Layout>
    );
}

export default ContactUs;