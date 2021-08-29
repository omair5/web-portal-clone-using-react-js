import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './locationsForHome.module.css'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const PopularLocationsForHome_col_1 = [
    'House For Sale in DHA Defence',
    'House For Sale in Bahria Town',
    'House For Sale in Paragon City',
    'House For Sale in Johar Town',
]

const PopularLocationsForHome_col_2 = [
    'House For Sale in Bahria Town',
    'Flat For Sale in Bahria Town',
    'House For Sale in DHA Defence',
    'Flat For Sale in DHA Defence',
    'Flat For Sale in North Nazimabad',
    'Flat For Sale in Clifton',
    'Flat For Sale in Abid Town',
]

const PopularLocationsForHome_col_3 = [
    'House For Sale in Bahria Town Rawalpindi',
    'House For Sale in 9th Avenue',
    'House For Sale in Club Road',
    'House For Sale in Gulberg',
    'House For Sale in Airport Housing Society',
]

const PopularLocationsForHome = () => {

    const generateDescription = (value) => {
        return value.replace(/ /g, '-')
    }

    return (
        <Container maxWidth='lg' className={styles.mainBox}>
            <h2 className={styles.marginBottom}>Popular Locations For Homes</h2>
            <hr />
            <Grid container className={styles.marginTop}>
                {/* COLUMN 1 */}
                <Grid item xs={12} md={4} >
                    {/* <h3>Lahore</h3> */}
                    <Box className={styles.city_links} mt={2}>
                        {PopularLocationsForHome_col_1.map((value) => (
                            <Link className={styles.links} to={`/popular-locations-for-home/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                        ))}
                    </Box>
                </Grid>

                {/* COLUMN 2 */}
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    {/* <h3>Karachi</h3> */}
                    <Box className={styles.city_links} mt={2} >
                        {PopularLocationsForHome_col_2.map((value) => (
                            <Link className={styles.links} to={`/popular-locations-for-home/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                        ))}
                    </Box>
                </Grid>

                {/* COLUMN 3 */}
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    {/* <h3>Islamabad & Rawalpindi</h3> */}
                    <Box className={styles.city_links} mt={2}>
                        {PopularLocationsForHome_col_3.map((value) => (
                            <Link className={styles.links} to={`/popular-locations-for-home/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Container >);
}

export default React.memo(PopularLocationsForHome);