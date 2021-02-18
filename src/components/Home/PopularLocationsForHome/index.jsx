import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './locationsForHome.module.css'

const PopularLocationsForHome = () => {
    return (
        <Container maxWidth='lg' className={styles.mainBox}>
            <h2 className={styles.marginBottom}>Popular Locations For Homes</h2>
            <hr />
            <Grid container className={styles.marginTop}>
                <Grid item xs={12} sm={6} md={4} >
                    <h3>Lahore</h3>
                    <Box className={styles.city_links} mt={2}>
                        <p>Houses For Sale in DHA Defence</p>
                        <p>Houses For Sale in Bahria Town</p>
                        <p>Houses For Sale in Paragon City</p>
                        <p>Houses For Sale in Johar Town</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.wrapper2}>
                    <h3>Karachi</h3>
                    <Box className={styles.city_links} mt={2} >
                        <p>Houses For Sale in Bahria Town</p>
                        <p>Flat For Sale in Bahria Town</p>
                        <p>Houses For Sale in DHA Defence</p>
                        <p>Flats For Sale in DHA Defence</p>
                        <p>Flats For Sale in Gulistan-e-Jauhar</p>
                        <p>Flats For Sale in Gulshan-e-Iqbal</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.wrapper3}>
                    <h3>Islamabad & Rawalpindi</h3>
                    <Box className={styles.city_links} mt={2}>
                        <p>Flats For Rent in Karachi</p>
                        <p>Flats For Rent in Islamabad</p>
                        <p>Flats For Rent in Lahore</p>
                        <p>Flats For Rent in Rawalpindi</p>
                    </Box>
                </Grid>
            </Grid>
        </Container >);
}

export default React.memo(PopularLocationsForHome);