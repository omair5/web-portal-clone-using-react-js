import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import GetBlogData from '../../Services/GetBlogData';
import Container from '@material-ui/core/Container';
import BlogHeader from '../../components/BlogDetail/BlogHeader';
import BlogTitleImage from '../../components/BlogDetail/BlogTitleImage';
import BlogDescription from '../../components/BlogDetail/BlogDescription';
import { makeStyles } from '@material-ui/core/styles';
import SkeletonForBlogDetail from '../../components/SkeletonForBlogDetail';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px auto',
        overflow: 'hidden'
    }
}));



const BlogDetail = () => {
    const classes = useStyles();
    const { id } = useParams()
    const [blogData, setblogData] = useState('')

    // FETCHING BLOG DATA ON COMPONENT MOUNT
    useEffect(() => {
        (
            async () => {
                setblogData(await GetBlogData(id))
            }
        )()
    }, [id])

    return (
        <Layout FooterDisplay={true}>
            {
                blogData ?
                    <Container maxWidth="lg" className={classes.mainContainer} >
                        <BlogHeader
                            blog_title={blogData.blog_title}
                            blog_category={blogData.blog_category}
                            blog_date={blogData.blog_date}
                        />

                        <BlogTitleImage
                            blog_image={blogData.blog_title_image}
                        />

                        <BlogDescription
                            blog_description={blogData.blog_description}
                        />
                    </Container>
                    : <SkeletonForBlogDetail />
            }

            <GoToTop />
        </Layout>
    );
}
export default BlogDetail;