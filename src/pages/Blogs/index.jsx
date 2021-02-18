import React from 'react';
import BlogShow from '../../components/Blog/BlogShow';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
const Blogs = () => {
    return (
        <Layout FooterDisplay={true}>
            <BlogShow />
            <GoToTop />
        </Layout>);
}
export default Blogs;