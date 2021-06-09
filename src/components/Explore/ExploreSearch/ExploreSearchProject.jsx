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
    const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
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
            </div>

            {/*PROPERTY TYPE */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Property Type</p>
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
            </div>

            {/* Developer Title */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Developer Title</p>
                <Select
                    value={searchData.DeveloperTitle}
                    onChange={HandleChange}
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
            <div className={classes.searchButtonBox} onClick={HandleSubmit}>
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>

            {/* change area unit and reset buttons */}
            <FooterButtons />
        </div >
    );
}
export default React.memo(ExploreSearchProject);