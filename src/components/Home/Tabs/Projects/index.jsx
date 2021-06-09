import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../Buy/buy.module.css'
import Select from 'react-select';
import AreaRangeBox from '../../../FrequentlyUsed/AreaRangeBox';
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
    const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
    const [selectedOption, setselectedOption] = useState({ label: "Karachi", value: 'Karachi' })
    const [searchData, setsearchData] = useState({ ProjectTitle: '', PropertyType: '', DeveloperTitle: '' })

    // callback function to handle city change
    const handleSelect = (selectedOption) => {
        setselectedOption(selectedOption)
    }
    // callback function to handle project title, property title, developer title
    const HandleChange = (selectedValue, { name }) => {
        setsearchData({ ...searchData, [name]: selectedValue })
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const HandleSubmit = () => {
        // history.push('/explore')
        // dispatch({ type: 'set_current_tab_to_buy' })
        // dispatch({ type: '0' })
        // dispatch({ type: 'clear_explore_buy_properties' })
        // dispatch({ type: 'show_buy_properties_skeleton' })
        const search_data = {
            city: selectedOption.value,
            project_title: searchData.ProjectTitle.value,
            property_type: searchData.PropertyType.value,
            developer_title: searchData.DeveloperTitle.value,
            min_area: minArea,
            max_area: maxArea,
        }
        console.log(search_data)
        // dispatch({ type: 'set_explore_buy_tab_pagination', payload: search_data })
        // axios.post('http://localhost:3200/addproperty/getpropertydata', search_data).then(response => {
        //     console.log('this is from SEARCH', response)
        //     if (response.data.items.length !== 0) {
        //         const buy_properties_data = response.data.items.map((value) => {
        //             return {
        //                 city: value.city.city_name,
        //                 building_name: value.property_title,
        //                 location: value.Location.location_name,
        //                 area_size: value.land_area,
        //                 area_unit: value.area_unit.area_name,
        //                 beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshowbeds'}`,
        //                 bathrooms: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshowbaths'}`,
        //                 price: value.price,
        //                 cover_image: value.title_image,
        //             }
        //         })
        //         dispatch({ type: 'hide_buy_properties_skeleton' })
        //         dispatch({ type: 'buy_listings_are_found_hide_message' })
        //         dispatch({ type: 'explore_buy_properties', payload: { property_data: buy_properties_data, meta: response.data.meta } })
        //     }
        //     else {
        //         dispatch({ type: 'hide_buy_properties_skeleton' })
        //         dispatch({ type: 'no_buy_listings_are_found_show_message' })
        //     }

        // }).catch(err => {
        //     console.log(err)
        // })
    }

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
                        value={searchData.ProjectTitle}
                        onChange={HandleChange}
                        isLoading={true}
                        isSearchable={false}
                        name="ProjectTitle"
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
                        value={searchData.PropertyType}
                        onChange={HandleChange}
                        isLoading={false}
                        isSearchable={false}
                        name="PropertyType"
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
                        value={searchData.DeveloperTitle}
                        onChange={HandleChange}
                        isLoading={false}
                        isSearchable={false}
                        name="DeveloperTitle"
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
                    <AreaRangeBox
                        RangeMin={area_min_range}
                        RangeMax={area_max_range}
                        heading='Area'
                        unit={areaUnit}
                    />
                </Grid >

                {/*  SEARCH BUTTON   */}
                <Grid item xs={12} md={4} className={styles.buttonContainer} >
                    <div className={styles.searchButtonBox} onClick={HandleSubmit}>
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