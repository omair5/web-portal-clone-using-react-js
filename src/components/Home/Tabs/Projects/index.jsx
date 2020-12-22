import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../Buy/buy.module.css'
import AutoCompleteTextField from '../../../FrequentlyUsed/AutoCompleteTextField';

const Projects = () => {
    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                <Grid item xs={12} md={4} >
                    {/* CITY */}
                    <AutoCompleteTextField
                        id="combo-box-demo1"
                        label='City'
                    />
                </Grid>
                <Grid item xs={12} md={4} className={styles.locationSelect}>
                    {/* Project Title */}
                    <AutoCompleteTextField
                        id="combo-box-demo2"
                        label='Project Title'
                    />
                </Grid>
                <Grid item xs={12} md={4} >
                    {/* PROPERTY TYPE */}
                    <AutoCompleteTextField
                        id="combo-box-demo3"
                        label='Property Type'
                    />
                </Grid>
            </Grid>

            {/* THIS IS ROW 2 */}
            <Grid container className={styles.secondGrid}>
                <Grid item xs={12} md={4} className={`${styles.gridtwoPadding} ${styles.locationSelect}`} >
                    {/* Developer Title */}
                    <AutoCompleteTextField
                        id="combo-box-demo4"
                        label='Developer Title'
                    />
                </Grid >
                <Grid item xs={12} md={4} className={`${styles.gridtwoPadding} ${styles.locationSelect}`} >
                    {/* Area Unit */}
                    <AutoCompleteTextField
                        id="combo-box-demo5"
                        label='Area Unit'
                    />
                </Grid>
                {/* SEARCH BUTTON */}
                <Grid item xs={12} md={4} >
                    <div className={styles.searchButtonBox}>
                        <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                        <div className={styles.search}>SEARCH</div>
                    </div>
                </Grid>
            </Grid >
        </div >
    );
}

export default React.memo(Projects);