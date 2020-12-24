import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogPost from '../FrequentlyUsed/BlogPosts';
import ClassIcon from '@material-ui/icons/Class';
import property from './images/property.jpeg'
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    MainHeading: {
        textAlign: 'center',
        padding: '15px',
        color: '#fcb812'
    },
    BlogContainer: {
        margin: '15px auto'
    }
});


const BlogShow = () => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.MainHeading}>REAL ESTATE BLOGS</h1>
            <Container maxWidth="lg" className={classes.BlogContainer} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='FEB 17'
                        />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='MARCH 10'
                        />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='NOV 12'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='APRIL 30'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='JUNE 25'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='JULY 1'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='DEC 17'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogPost
                            BlogImage={property}
                            BlogIcon={ClassIcon}
                            BlogType='Real Estate Trends'
                            BlogDate='MAY 24'
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default BlogShow;