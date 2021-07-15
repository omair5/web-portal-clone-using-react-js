import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './buyproperties.module.css'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const popular_cities_to_buy_properties_col_1 = [
    'House For Sale In Karachi',
    'House For Sale In Lahore',
    'House For Sale In Islamabad',
    'House For Sale In Rawalpindi',
    'House For Sale In Multan',
    'House For Sale In Peshawar',
    'House For Sale In Sargodha',
]

const popular_cities_to_buy_properties_col_2 = [
    'House For Sale In Sahiwal',
    'House For Sale In Sialkot',
    'House For Sale In Quetta',
    'House For Sale In Abbottabad',
    'House For Sale In Gujranwala',
    'House For Sale In Murree',
    'House For Sale In Bahawalpur',
]

const popular_cities_to_buy_properties_col_3 = [
    'Flat For Sale In Karachi',
    'Flat For Sale In Islamabad',
    'Flat For Sale In Lahore',
    'Flat For Sale In Rawalpindi',
    'Flat For Sale In Hyderabad',
    'Flat For Sale In Peshawar',
    'Flat For Sale In Faisalabad',
]

const PopularCitiesToBuyProperties = () => {

    const generateDescription = (value) => {
        return value.replace(/ /g, '-')
    }

    return (
        <Container maxWidth='lg' className={styles.mainBox}>
            <h2 className={styles.marginBottom}>Popular Cities To Buy Properties</h2>
            <hr />
            <Grid container className={styles.marginTop}>

                {/* COLUMN 1 */}
                <Grid item xs={12} md={4} >
                    <h3>Houses</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`} >

                        {popular_cities_to_buy_properties_col_1.map((value) => (
                            <Link className={styles.links} to={`/popular-cities-to-buy-properties/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                        ))}

                    </Box>
                </Grid>

                {/* COLUMN 2 */}
                <Grid item xs={12} md={4} >
                    <Box className={`${styles.city_links} ${styles.mt47}`}>

                        {popular_cities_to_buy_properties_col_2.map((value) => (
                            <Link className={styles.links} to={`/popular-cities-to-buy-properties/${generateDescription(value)}`} key={uuidv4()}><p key={uuidv4()}>{value}</p></Link>
                        ))}

                    </Box>
                </Grid>

                {/* COLUMN 3 */}
                <Grid item xs={12} md={4} className={styles.wrapper} >
                    <h3>Flats And Apartments</h3>
                    <Box className={`${styles.city_links} ${styles.mt16}`}>

                        {popular_cities_to_buy_properties_col_3.map((value) => (
                            <Link className={styles.links} to={`/popular-cities-to-buy-properties/${generateDescription(value)}`} key={uuidv4()}><p>{value}</p></Link>
                        ))}

                    </Box>
                </Grid>
            </Grid>
        </Container >);
}
export default React.memo(PopularCitiesToBuyProperties);