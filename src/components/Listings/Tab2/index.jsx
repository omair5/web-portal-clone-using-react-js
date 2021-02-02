import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Comments from './Tab2ChildComponents/Comments';
import LeaveAReview from './Tab2ChildComponents/LeaveAReview';


const useStyles = makeStyles(theme => ({
    forComments: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));


const Tab2 = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" >
                <Grid container spacing={3} >
                    {/* COMMENTS */}
                    <Grid item xs={12} md={7} className={classes.forComments}>
                        <Comments />
                    </Grid>
                    {/* LEAVE A REVIEW */}
                    <Grid item xs={12} md={5}>
                        <LeaveAReview />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default React.memo(Tab2);