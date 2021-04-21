import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Select from 'react-select';
import AreaRangeBox from '../../FrequentlyUsed/AreaRangeBox';
import FooterButtons from '../../Home/Tabs/FooterButtons';
import { useSelector } from 'react-redux'
import UseStyles from './SearchStyles'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../../Home/Tabs/ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'

const ExploreSearchProject = () => {
    const classes = UseStyles();
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
        <div className={classes.mainContainer}>

            {/* CITY */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>City</p>
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
            </div>


            {/* Project Title */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Project Title</p>
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
            </div>

            {/*PROPERTY TYPE */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Property Type</p>
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
            </div>

            {/* Developer Title */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Developer Title</p>
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
            </div>

            {/* AREA UNIT */}
            <AreaRangeBox
                RangeMin={area_min_range}
                RangeMax={area_max_range}
                heading='Area'
                unit={areaUnit}
            />

            {/*  SEARCH BUTTON   */}
            <div className={classes.searchButtonBox} >
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>

            {/* change area unit and reset buttons */}
            <FooterButtons />
        </div >
    );
}
export default React.memo(ExploreSearchProject);