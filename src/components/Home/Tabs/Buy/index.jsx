import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from './buy.module.css'
import RangeBox from '../../../FrequentlyUsed/RangeBox';
import Select from 'react-select';
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../SelectGroupStyles'

const Buy = () => {
    const priceRange = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    const area = [0, 120, 240, 280, 320, 380, 400, 420, 440, 480, 520, 560, 600]
    const beds = [
        { value: 'studio', label: 'studio' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10+', label: '10+' },
    ];
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    // const [selectedOption, setselectedOption] = useState(null)
    // const handleSelect = (selectedOption) => {
    //     setselectedOption(selectedOption)
    //     console.log(`Option selected:`, selectedOption);
    // }

    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                {/* CITY */}
                <Grid item xs={12} md={3} className={`${styles.childContainer} ${styles.marginBottomMobile}`} >
                    <p>City</p>
                    <Select
                        // value={selectedOption}
                        // onChange={handleSelect}
                        // defaultValue={colourOptions[0]}
                        // isLoading={isLoading}
                        isSearchable={false}
                        name="city"
                        options={options}
                        placeholder="Select City"
                        label='city'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/* LOCATION */}
                <Grid item xs={12} md={6} className={`${styles.locationSelect} ${styles.childContainer} ${styles.marginBottomMobile}`}>
                    <p>Location</p>
                    <Select
                        // value={selectedOption}
                        // onChange={handleSelect}
                        // defaultValue={colourOptions[0]}
                        // isLoading={isLoading}
                        isClearable={true}
                        isSearchable={true}
                        name="location"
                        options={options}
                        placeholder="Select Location"
                        label='Location'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/*PROPERTY TYPE */}
                <Grid item xs={12} md={3} className={`${styles.childContainer} ${styles.marginBottomMobile}`}>
                    <p>Property Type</p>
                    <Select
                        isLoading={false}
                        isSearchable={false}
                        name="property type"
                        placeholder="Select Property Type"
                        label='Property Type'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                        options={PropertyTypeOptions}
                        formatGroupLabel={formatGroupLabel}
                    />
                </Grid>
            </Grid>

            {/* THIS IS ROW 2 */}
            <Grid container className={`${styles.secondGrid} ${styles.marginBottomMobile}`} >
                {/* PRICE RANGE BOX */}
                <Grid item xs={12} md={3} >
                    <RangeBox
                        Range={priceRange}
                        heading='Price Range (PKR)'
                    />
                </Grid >

                {/* AREA UNIT */}
                <Grid item xs={12} md={3} className={`${styles.gridtwoPadding} ${styles.locationSelect} ${styles.marginBottomMobile}`}  >
                    <RangeBox
                        Range={area}
                        heading='Area Range'
                    />
                </Grid >

                {/* BEDS */}
                <Grid item xs={12} md={3} className={`${styles.childContainer} ${styles.marginBottomMobile}`} style={{ marginTop: 'auto', marginBottom: '4px' }}>
                    <p>Beds</p>
                    <Select
                        // value={selectedOption}
                        // onChange={handleSelect}
                        // defaultValue={colourOptions[0]}
                        isLoading={false}
                        isSearchable={false}
                        name="beds"
                        options={beds}
                        placeholder="Select Beds"
                        label='Beds'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/*  SEARCH BUTTON   */}
                <Grid item xs={12} md={3} className={styles.buttonContainer} >
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