import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './citiesForRent.module.css'

const PopularCitiesForRent = () => {
    return (
        <Container maxWidth='lg' className={styles.mainBox}>
            <h2 className={styles.marginBottom}>Popular Cities For Rent</h2>
            <hr />
            <Grid container className={styles.marginTop} >
                <Grid item xs={12} md={4} >
                    <h3>Houses</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`}>
                        <p>Houses For Rent in Lahore</p>
                        <p>Houses For Rent in Islamabad</p>
                        <p>Houses For Sale in Karachi</p>
                        <p>Houses For Rent in Rawalpindi</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Box className={`${styles.city_links} ${styles.mt47}`} >
                        <p>Houses For Rent in Peshawar</p>
                        <p>Houses For Rent in Sialkot</p>
                        <p>Houses For Rent in Abbottabad</p>
                        <p>Houses For Rent in Faisalabad</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    <h3>Flats And Apartments</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`} mt={2}>
                        <p>Flats For Rent in Karachi</p>
                        <p>Flats For Rent in Islamabad</p>
                        <p>Flats For Rent in Lahore</p>
                        <p>Flats For Rent in Rawalpindi</p>
                    </Box>
                </Grid>
            </Grid>
        </Container>);
}

export default React.memo(PopularCitiesForRent);