import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import getAdvertisements from '../../Services/GetAdvertisements'
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogPost from '../../components/Blog/BlogPosts';
import { Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useStylesBase } from '../../components/FrequentlyUsed/PaginationStyles'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import GetBlogShortDetail from '../../Services/GetBlogShortDetail';
import SkeletonForBlog from '../../components/SkeletonForBlog';


const useStyles = makeStyles({
    MainHeading: {
        textAlign: 'center',
        padding: '15px',
        color: 'rgb(59, 70, 86)',
        '& span': {
            borderBottom: '5px solid #fcb812'
        }
    },
    BlogContainer: {
        margin: '15px auto'
    },
    paginationContainer: {
        maxWidth: '100%',
        margin: 'auto',
        marginTop: '30px',
    },
    link: {
        textDecoration: 'none'
    }
});



const Blogs = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    const [Blogs, setBlogs] = useState([])
    const [advertisement, setAdvertisement] = useState([])
    const [totalPages, setTotalPages] = useState('')

    // FETCHING ADVERTISEMENTS
    useEffect(() => {
        const AdvertisementGet = async () => {
            setAdvertisement(await getAdvertisements('Blogs'))
        }
        AdvertisementGet()
    }, [])

    // FETCHING BLOG POSTS
    useEffect(() => {
        (
            async () => {
                if (localStorage.getItem("blog_page_1")) {
                    const local_response = JSON.parse(localStorage.getItem("blog_page_1"))
                    setBlogs(local_response.data)
                    setTotalPages(local_response.totalPages)
                }
                else {
                    const response = await GetBlogShortDetail(1)
                    setBlogs(response.data)
                    setTotalPages(response.totalPages)
                    localStorage.setItem("blog_page_1", JSON.stringify(response));
                }
            }
        )()
    }, [])

    const GenerateSlug = (value) => {
        return value.trim().toLowerCase().replace(/ /g, '-')
    }

    // HANDLE PAGINATION
    const HandlePageChange = (e, value) => {
        (
            async () => {
                setBlogs([])
                if (localStorage.getItem(`blog_page_${value}`)) {
                    const local_response = JSON.parse(localStorage.getItem(`blog_page_${value}`))
                    setBlogs(local_response.data)
                    setTotalPages(local_response.totalPages)
                }
                else {
                    const response = await GetBlogShortDetail(value)
                    setBlogs(response.data)
                    setTotalPages(response.totalPages)
                    localStorage.setItem(`blog_page_${value}`, JSON.stringify(response));
                }
            }
        )()
    }

    return (
        <Layout FooterDisplay={true}>
            <Advertisement advertisements={advertisement} />

            <h1 className={classes.MainHeading}><span>REAL ESTATE BLOGS</span></h1>
            <Container maxWidth="lg" className={classes.BlogContainer} >
                <Grid container spacing={2}>
                    {Blogs.length === 0 ?

                        Array(8).fill().map(() => (
                            <Grid item xs={12} md={4} key={uuidv4()}>
                                <SkeletonForBlog />
                            </Grid>
                        ))
                        :
                        Blogs.reverse().map(value => (

                            <Grid item xs={12} md={4} key={uuidv4()}>
                                <Link to={`/blog/${GenerateSlug(value.BlogCategory)}/${GenerateSlug(value.BlogTitle)}/${value.BlogId}`} className={classes.link}>
                                    <BlogPost
                                        BlogImage={value.BlogImage}
                                        BlogType={value.BlogCategory}
                                        BlogDate={value.BlogDate}
                                        BlogTitle={value.BlogTitle}
                                        BlogShortDescription={value.BlogShortDescription}
                                    />
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>


                <Pagination count={+totalPages}
                    className={classes.paginationContainer}
                    classes={classesBase}
                    size="large"
                    onChange={HandlePageChange}
                />
            </Container>

            <GoToTop />
        </Layout>);
}
export default Blogs;