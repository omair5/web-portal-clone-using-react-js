import React from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Listings/Header';
import SimpleTabs from '../../components/Listings/Tabs';
const Listings = () => {
    return (
        <>
            <Layout FooterDisplay={true}>
                <Header />
                <SimpleTabs />
            </Layout>
        </>
    );
}

export default React.memo(Listings);