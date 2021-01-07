import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    MainContainer: {
        margin: '20px auto',
        padding: "20px 0px"
    },
    hrLine: {
        border: 'none',
        height: "5px",
        backgroundColor: '#fcb812',
    },
    gridContainer: {
        marginTop: '20px',
    },
    paperContainer: {
        margin: 'auto',
        width: '90%',
        height: '250px',
        cursor: 'pointer',
        "& h4": {
            textAlign: "center",
            padding: '20px 0px'
        }
    },
    viewAllButton: {
        backgroundColor: '#fcb812',
        border: 'none',
        outline: 'none',
        width: '150px',
        padding: '15px 0',
        display: 'block',
        margin: '10px auto',
        fontWeight: 'bolder',
        cursor: 'pointer',
        borderRadius: '2px'
    }
}));

const AreaGuideCities = ({ cityName, LahoreAreas }) => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="lg" className={classes.MainContainer}>
                <h1>{cityName}</h1>
                <hr className={classes.hrLine} />
                <Grid container spacing={3} className={classes.gridContainer}>
                    {LahoreAreas.map((value, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <div className={classes.paperContainer}>
                                <img src={value.areaImage} alt="dha city" width='100%' height='70%' />
                                <h4>{value.areaName}</h4>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* AreaGuideButton is used from app.css */}
            <button className={classes.viewAllButton}>VIEW ALL</button>
        </>
    );
}
export default AreaGuideCities;
