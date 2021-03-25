import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../Buy/buy.module.css'
import Select from 'react-select';
import RangeBox from '../../../FrequentlyUsed/RangeBox';
import FooterButtons from '../FooterButtons';
import { useSelector } from 'react-redux'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../SelectGroupStyles'

const Projects = () => {
    const areaUnit = useSelector(state => state.Home_AreaUnit)
    const area_min_range = useSelector(state => state.Home_Area_min_range)
    const area_max_range = useSelector(state => state.Home_Area_max_range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedOption, setselectedOption] = useState({ label: "Karachi", value: 'Karachi' })

    // callback function to handle city change
    const handleSelect = (selectedOption) => {
        setselectedOption(selectedOption)
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                {/* CITY */}
                <Grid item xs={12} md={4} className={`${styles.childContainer} ${styles.marginBottomMobile}`} >
                    <p>City</p>
                    <Select
                        value={selectedOption}
                        onChange={handleSelect}
                        isLoading={cities_options_list.length === 0 && true}
                        isSearchable={false}
                        name="city"
                        options={cities_options_list}
                        placeholder="Select City"
                        label='city'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/* Project Title */}
                <Grid item xs={12} md={4} className={`${styles.locationSelect} ${styles.childContainer} ${styles.marginBottomMobile}`} >
                    <p>Project Title</p>
                    <Select
                        // value={selectedOption}
                        // onChange={handleSelect}
                        // defaultValue={colourOptions[0]}
                        // isLoading={isLoading}
                        isSearchable={false}
                        name="Project Title"
                        options={options}
                        placeholder="Select Project Title"
                        label='Project Title'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/*PROPERTY TYPE */}
                <Grid item xs={12} md={4} className={`${styles.childContainer} ${styles.marginBottomMobile}`}>
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
                {/* Developer Title */}
                <Grid item xs={12} md={4} className={`${styles.childContainer} ${styles.marginBottomMobile}`} style={{ marginTop: 'auto', marginBottom: '4px' }}>
                    <p>Developer Title</p>
                    <Select
                        // value={selectedOption}
                        // onChange={handleSelect}
                        // defaultValue={colourOptions[0]}
                        isLoading={false}
                        isSearchable={false}
                        name="Developer Title"
                        options={options}
                        placeholder="Select Developer Title"
                        label='Developer Title'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/* AREA UNIT */}
                <Grid item xs={12} md={4} className={`${styles.gridtwoPadding} ${styles.locationSelect} ${styles.marginBottomMobile}`}  >
                    <RangeBox
                        RangeMin={area_min_range}
                        RangeMax={area_max_range}
                        heading='Area'
                        unit={areaUnit}
                    />
                </Grid >

                {/*  SEARCH BUTTON   */}
                <Grid item xs={12} md={4} className={styles.buttonContainer} >
                    <div className={styles.searchButtonBox}>
                        <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                        <div className={styles.search}>SEARCH</div>
                    </div>
                </Grid>
            </Grid >

            {/* change area unit and reset buttons */}
            <FooterButtons />
        </div >
    );
}
export default React.memo(Projects);