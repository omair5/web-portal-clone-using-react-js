import React from 'react';
import BlogShow from '../../components/Blog/BlogShow';
import Layout from '../../components/Layout/Layout';
const Blogs = () => {
    return (
        <Layout FooterDisplay={true}>
            <BlogShow />
        </Layout>);
}
export default Blogs;