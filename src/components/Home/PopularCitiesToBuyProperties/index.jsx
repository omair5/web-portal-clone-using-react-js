import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './buyproperties.module.css'

const PopularCitiesToBuyProperties = () => {
    return (
        <Container maxWidth='lg' className={styles.mainBox}>
            <h2 className={styles.marginBottom}>Popular Cities To Buy Properties</h2>
            <hr />
            <Grid container className={styles.marginTop}>
                <Grid item xs={12} md={4} >
                    <h3>Houses</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`} >
                        <p>Houses For Sale in Karachi</p>
                        <p>Houses For Sale in Lahore</p>
                        <p>Houses For Sale in Islamabad</p>
                        <p>Houses For Sale in Rawalpindi</p>
                        <p>Houses For Sale in Multan</p>
                        <p>Houses For Sale in Peshawar</p>
                        <p>Houses For Sale in Sargodha</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Box className={`${styles.city_links} ${styles.mt47}`}>
                        <p>Houses For Sale in Karachi</p>
                        <p>Houses For Sale in Lahore</p>
                        <p>Houses For Sale in Islamabad</p>
                        <p>Houses For Sale in Rawalpindi</p>
                        <p>Houses For Sale in Multan</p>
                        <p>Houses For Sale in Peshawar</p>
                        <p>Houses For Sale in Sargodha</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={styles.wrapper} >
                    <h3>Flats And Apartments</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`}>
                        <p>Houses For Sale in Karachi</p>
                        <p>Houses For Sale in Lahore</p>
                        <p>Houses For Sale in Islamabad</p>
                        <p>Houses For Sale in Rawalpindi</p>
                        <p>Houses For Sale in Multan</p>
                        <p>Houses For Sale in Peshawar</p>
                        <p>Houses For Sale in Sargodha</p>
                    </Box>
                </Grid>
            </Grid>
        </Container>);
}

export default React.memo(PopularCitiesToBuyProperties);