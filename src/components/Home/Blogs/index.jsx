import React, { useState } from 'react';
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import BlogPost from '../../Blog/BlogPosts';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import SkeletonForBlog from '../../SkeletonForBlog';
import GetRecentBlogs from '../../../Services/HomeGetRecentBlogs'

const Blogs = () => {
    const [homeBlogs, sethomeBlogs] = useState([])
    console.log('its late now', homeBlogs)

    // FETCHING Blogs
    useEffect(() => {
        (
            async () => {
                if (localStorage.getItem("home_recent_blogs")) {
                    sethomeBlogs(JSON.parse(localStorage.getItem("home_recent_blogs")))
                }
                else {
                    const { data } = await GetRecentBlogs()
                    sethomeBlogs(data)
                    localStorage.setItem("home_recent_blogs", JSON.stringify(data));
                }
            }
        )()
    }, [])

    // GENERATING SLUG 
    const GenerateSlug = (value) => {
        return value.toLowerCase().replace(/ /g, '-')
    }

    return (
        <div style={{ margin: '5rem 0' }}>
            <h1 style={{ margin: '1rem', textAlign: 'center', textTransform: 'uppercase' }}>Recent from the Blog</h1>
            <Container maxWidth="lg" >
                <Grid container spacing={3}>

                    {
                        homeBlogs.length === 0 ?
                            Array(3).fill().map(() => (
                                <Grid item xs={12} md={6} lg={4} key={uuidv4()}>
                                    <SkeletonForBlog />
                                </Grid>
                            )) :

                            homeBlogs.map(value => (
                                <Grid item xs={12} md={6} lg={4} key={uuidv4()}>
                                    <Link to={`/blog/${GenerateSlug('Real Estate Blog')}/${GenerateSlug(value.BlogTitle)}/${value.BlogId}`} style={{ textDecoration: 'none' }}>
                                        <BlogPost
                                            BlogImage={value.BlogImage}
                                            BlogType='Real Estate Trends'
                                            BlogDate={value.BlogDate}
                                            BlogTitle={value.BlogTitle}
                                            BlogShortDescription={value.BlogShortDescription}
                                        />
                                    </Link>
                                </Grid>
                            ))
                    }
                </Grid>
            </Container>
        </div>
    );
}
export default React.memo(Blogs);