import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ViewsLayout from './ViewsLayout';
import Devices from './Devices';
import Graph from './Graph';
import TopReferrers from './TopReferrers';

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto'
    },
    GraphPaper: {
        maxWidth: '95%',
        height: '470px',
        margin: '10px auto',
    },
    TopReferrers: {
        maxWidth: '95%',
        minHeight: '10%',
        margin: '10px auto'
    }
});

const ViewsAndVisitLayout = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    {/* ----------COLUMN 1---------- */}
                    <Grid item xs={12} md={4} >
                        {/* VIEWS */}
                        <ViewsLayout
                            mainHeading='Views'
                        />
                        {/* UNIQUE VIEWS */}
                        <ViewsLayout
                            mainHeading='Unique Views'
                        />
                        {/* DEVICES */}
                        <Devices />
                    </Grid>

                    {/* ----------COLUMN 2---------- */}
                    <Grid item xs={12} md={8}>
                        <Paper className={classes.GraphPaper}><Graph /></Paper>
                        <Paper className={classes.TopReferrers}><TopReferrers /></Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default React.memo(ViewsAndVisitLayout);