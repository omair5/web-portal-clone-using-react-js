import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ClassIcon from '@material-ui/icons/Class';
import property from './images/property.jpeg'
import BlogPost from '../../Blog/BlogPosts';

const Blogs = () => {
    return (
        <div style={{ margin: '5rem 0' }}>
            <h1 style={{ margin: '1rem', textAlign: 'center', textTransform: 'uppercase' }}>Recent from the Blog</h1>
            <Container maxWidth="lg" >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='NOV 18'
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='JAN 23'
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='MARCH 12'
                        />
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
}

export default Blogs;