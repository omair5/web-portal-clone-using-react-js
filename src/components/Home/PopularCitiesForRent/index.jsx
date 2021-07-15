import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './citiesForRent.module.css'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const PopularCitiesForRent_col_1 = [
    'Houses For Rent in Lahore',
    'Houses For Rent in Islamabad',
    'Houses For Rent in Karachi',
    'Houses For Rent in Rawalpindi'
]

const PopularCitiesForRent_col_2 = [
    'Houses For Rent in Peshawar',
    'Houses For Rent in Sialkot',
    'Houses For Rent in Abbottabad',
    'Houses For Rent in Faisalabad'
]

const PopularCitiesForRent_col_3 = [
    'Flat For Rent in Karachi',
    'Flat For Rent in Islamabad',
    'Flat For Rent in Lahore',
    'Flat For Rent in Rawalpindi'
]

const PopularCitiesForRent = () => {

    const generateDescription = (value) => {
        return value.replace(/ /g, '-')
    }

    return (
        <Container maxWidth='lg' className={styles.mainBox}>
            <h2 className={styles.marginBottom}>Popular Cities For Rent</h2>
            <hr />
            <Grid container className={styles.marginTop} >
                {/* COLUMN 1 */}
                <Grid item xs={12} md={4} >
                    <h3>Houses</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`}>
                        {
                            PopularCitiesForRent_col_1.map((value) => (
                                <Link className={styles.links} to={`/popular-cities-for-rent/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                            ))
                        }
                    </Box>
                </Grid>

                {/* COLUMN 2 */}
                <Grid item xs={12} md={4} >
                    <Box className={`${styles.city_links} ${styles.mt47}`} >
                        {
                            PopularCitiesForRent_col_2.map((value) => (
                                <Link className={styles.links} to={`/popular-cities-for-rent/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                            ))
                        }
                    </Box>
                </Grid>

                {/* COLUMN 3 */}
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    <h3>Flats And Apartments</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`} mt={2}>
                        {
                            PopularCitiesForRent_col_3.map((value) => (
                                <Link className={styles.links} to={`/popular-cities-for-rent/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                            ))
                        }
                    </Box>
                </Grid>
            </Grid>
        </Container>);
}

export default React.memo(PopularCitiesForRent);