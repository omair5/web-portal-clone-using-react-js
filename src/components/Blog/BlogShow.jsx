import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogPost from '../FrequentlyUsed/BlogPosts';
import ClassIcon from '@material-ui/icons/Class';
import property from './images/property.jpeg'
import { Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useStylesBase } from '../FrequentlyUsed/PaginationStyles'


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
    }
});


const BlogShow = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();

    return (
        <>
            <h1 className={classes.MainHeading}><span>REAL ESTATE BLOGS</span></h1>
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

                <Pagination count={10}
                    className={classes.paginationContainer}
                    classes={classesBase}
                    size="large"
                />
            </Container>
        </>
    );
}

export default BlogShow;