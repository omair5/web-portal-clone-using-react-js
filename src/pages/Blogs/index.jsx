import React, { useState, useEffect } from 'react';
import BlogShow from '../../components/Blog/BlogShow';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import getAdvertisements from '../../Services/GetAdvertisements'
import Advertisement from '../../components/FrequentlyUsed/Advertisement';

const Blogs = () => {
    const [advertisement, setAdvertisement] = useState([])
    useEffect(() => {
        const AdvertisementGet = async () => {
            setAdvertisement(await getAdvertisements('Blogs'))
        }
        AdvertisementGet()
    }, [])
    return (
        <Layout FooterDisplay={true}>
            <Advertisement advertisements={advertisement} />
            <BlogShow />
            <GoToTop />
        </Layout>);
}
export default Blogs;