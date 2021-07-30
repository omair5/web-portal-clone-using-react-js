import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Capital from '../images/capital.webp';
import Jeewa from '../images/jeewa.webp';
import Rupali from '../images/rupali.webp';

// STYLES
const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '20px 0px',
        "& h1": {
            margin: '0px 0px 35px',
            textAlign: 'center',
            color: 'rgb(59, 70, 86)',
            '& span': {
                borderBottom: '5px solid #fcb812'
            }
        }
    },
    PartnersLogo: {
        height: '75%',
        width: '75%',
        display: 'block',
        margin: 'auto',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        "&:hover": {
            transform: 'scale(1.2)'
        }
    }
}));

const OurPartners = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.MainContainer} >
                <h1><span>MEET OUR PARTNERS</span></h1>
                <Container maxWidth="lg">
                    <Grid container  >
                        <Grid item xs={6} sm={3} >
                            <picture >
                                <img src={Capital} alt="capital" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture>
                                <img src={Jeewa} alt="sc" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture>
                                <img src={Rupali} alt="sc" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture>
                                <img src={Jeewa} alt="sc" className={classes.PartnersLogo} />
                            </picture>

                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture>
                                <img src={Rupali} alt="sc" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture >
                                <img src={Capital} alt="capital" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture>
                                <img src={Rupali} alt="sc" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                        <Grid item xs={6} sm={3} >
                            <picture >
                                <img src={Capital} alt="capital" className={classes.PartnersLogo} />
                            </picture>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default OurPartners;