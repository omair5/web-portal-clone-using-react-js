import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCardForProject from '../FrequentlyUsed/AbaadeeCardForProject'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        minWidth: '15%',
        display: 'block',
        margin: '30px auto',
        padding: '20px',
        outline: 'none',
        border: 'none',
        fontSize: '15px',
        fontWeight: 'bold',
        borderRadius: '7px',
        backgroundColor: '#fcb812',
        cursor: 'pointer',
        color: 'rgb(59, 70, 86)',
        transition: 'all 0.5s ease',
        "&:hover": {
            color: 'white',
            transform: 'scale(1.03)'
        }
    },

}));

const DeveloperProperties = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <AbaadeeCardForProject />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <AbaadeeCardForProject />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <AbaadeeCardForProject />
                </Grid>
            </Grid>
            <button className={classes.buttonContainer}>
                View All
            </button>

        </>
    );
}

export default React.memo(DeveloperProperties);