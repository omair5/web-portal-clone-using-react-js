import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ClassIcon from '@material-ui/icons/Class';
import property from './images/property.jpeg'


const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '37rem'
    },
    blogImageBox: {
        width: '100%',
        height: '20rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
            "& $blogImage": {
                transform: 'scale(1.02)'
            },
            "& $overlay": {
                opacity: 0.6
            }
        }
    },
    blogImage: {
        width: '100%',
        height: '100%',
        transition: 'all 0.3s ease',
    },
    content: {
        padding: '1rem',
        color: 'black'

    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        opacity: 0.4,
        transition: 'all 0.3s ease',
    },
    blogFooter: {
        display: 'flex',
        marginTop: '3rem',
        padding: '1rem'

    },
    categoryIcon: {
        flexBasis: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    ReadMore: {
        backgroundColor: ' rgb(252, 184, 22)',
        marginLeft: 'auto',
        padding: '1rem',
        border: 'none',
        borderRadius: '5px',
        fontWeight:'bold',
        cursor: 'pointer',
        '&:hover': {
            color: 'white'
        }
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
                            <div className={classes.blogImageBox}>
                                <img src={property} alt="" className={classes.blogImage} />
                                <div className={classes.overlay}>hello</div>
                            </div>
                            <div className={classes.content}>
                                <p>Top Locations for the Property Investors in Karachi View post to know where to invest in Karachi the hub of Pakistan Real Estate Trends </p>
                            </div>
                            <div className={classes.blogFooter}>
                                <p className={classes.categoryIcon}> <ClassIcon style={{ fontSize: '25px', color: 'rgb(252, 184, 22)' }} />Real Estate Trends</p>
                                <button className={classes.ReadMore}>READ MORE</button>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.blogImageBox}>
                                <img src={property} alt="" className={classes.blogImage} />
                                <div className={classes.overlay}>hello</div>
                            </div>
                            <div className={classes.content}>
                                <p>Top Locations for the Property Investors in Karachi View post to know where to invest in Karachi the hub of Pakistan Real Estate Trends </p>
                            </div>
                            <div className={classes.blogFooter}>
                                <p className={classes.categoryIcon}> <ClassIcon style={{ fontSize: '25px', color: 'rgb(252, 184, 22)' }} />Real Estate Trends</p>
                                <button className={classes.ReadMore}>READ MORE</button>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.blogImageBox}>
                                <img src={property} alt="" className={classes.blogImage} />
                                <div className={classes.overlay}>hello</div>
                            </div>
                            <div className={classes.content}>
                                <p>Top Locations for the Property Investors in Karachi View post to know where to invest in Karachi the hub of Pakistan Real Estate Trends </p>
                            </div>
                            <div className={classes.blogFooter}>
                                <p className={classes.categoryIcon}> <ClassIcon style={{ fontSize: '25px', color: 'rgb(252, 184, 22)' }} />Real Estate Trends</p>
                                <button className={classes.ReadMore}>READ MORE</button>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
}

export default Blogs;