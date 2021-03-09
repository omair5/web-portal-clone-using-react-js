import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from './buy.module.css'
import AutoCompleteTextField from '../../../FrequentlyUsed/AutoCompleteTextField';
import PriceRangeBox from '../../../FrequentlyUsed/PriceRangeBox';

const Buy = () => {
    const priceRange = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                <Grid item xs={12} md={3} >
                    {/* CITY */}
                    <AutoCompleteTextField
                        id="combo-box-demo1"
                        label='City'
                    />
                </Grid>
                <Grid item xs={12} md={6} className={styles.locationSelect}>
                    {/* LOCATION */}
                    <AutoCompleteTextField
                        id="combo-box-demo2"
                        label='Location'
                    />
                </Grid>
                <Grid item xs={12} md={3} >
                    {/* PROPERTY TYPE */}
                    <AutoCompleteTextField
                        id="combo-box-demo3"
                        label='Property Type'
                    />
                </Grid>
            </Grid>

            {/* THIS IS ROW 2 */}

            {/* PRICE RANGE BOX */}
            <Grid container className={styles.secondGrid}>
                <Grid item xs={12} md={3} >
                    <PriceRangeBox
                        priceRange={priceRange}
                    />
                </Grid >

                <Grid item xs={12} md={3} className={`${styles.gridtwoPadding} ${styles.locationSelect}`} >
                    {/* AREA UNIT */}
                    <AutoCompleteTextField
                        id="combo-box-demo4"
                        label='Area Unit'
                    />
                </Grid >
                <Grid item xs={12} md={3} className={`${styles.gridtwoPadding} ${styles.locationSelect}`} >
                    {/* BEDS */}
                    <AutoCompleteTextField
                        id="combo-box-demo5"
                        label='Beds'
                    />
                </Grid>
                {/* SEARCH BUTTON */}
                <Grid item xs={12} md={3} >
                    <div className={styles.searchButtonBox}>
                        <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                        <div className={styles.search}>SEARCH</div>
                    </div>
                </Grid>
            </Grid >
        </div >
    );
}

export default React.memo(Buy);