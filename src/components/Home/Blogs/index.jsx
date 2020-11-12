import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import property from './images/property.jpeg'

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '37rem'
    },
    blogImage: {
        width: '100%',
        height: '20rem'
    },
    content: {
        padding: '1rem'
    }
}));


const Blogs = () => {
    const classes = useStyles();
    return (
        <div style={{ margin: '5rem 0' }}>
            <h1 style={{ margin: '1rem', textAlign: 'center', textTransform: 'uppercase' }}>Recent from the Blog</h1>
            <Container maxWidth="lg" >

                <Grid container spacing={3}>

                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <img src={property} alt="" className={classes.blogImage} />
                            <div className={classes.content}>
                                <p>Top Locations for the Property Investors in Karachi View post to know where to invest in Karachi the hub of Pakistan Real Estate Trends </p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <img src={property} alt="" className={classes.blogImage} />
                            <div className={classes.content}>
                                <p>Top Locations for the Property Investors in Karachi View post to know where to invest in Karachi the hub of Pakistan Real Estate Trends </p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <img src={property} alt="" className={classes.blogImage} />
                            <div className={classes.content}>
                                <p>Top Locations for the Property Investors in Karachi View post to know where to invest in Karachi the hub of Pakistan Real Estate Trends </p>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
}

export default Blogs;