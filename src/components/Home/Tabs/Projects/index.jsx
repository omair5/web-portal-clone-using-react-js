import React, { useState, useEffect } from 'react';
import Select from 'react-select';
// import AreaRangeBox from '../../FrequentlyUsed/AreaRangeBox';
// import FooterButtons from '../../Home/Tabs/FooterButtons';
import { useSelector, useDispatch } from 'react-redux'
// import UseStyles from './SearchStyles'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../Buy/buy.module.css'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../ColourStyles'
// import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'
import HomeFetchDeveloperName from '../../../../Services/HomeFetchDeveloperName';
import HomeGetProjectName from '../../../../Services/HomeGetProjectName';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Projects = () => {
    // const classes = UseStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    // const areaUnit = useSelector(state => state.Home_AreaUnit)
    // const area_min_range = useSelector(state => state.Home_Area_min_range)
    // const area_max_range = useSelector(state => state.Home_Area_max_range)
    // const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    // const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedOption, setselectedOption] = useState({ label: "Karachi", value: 'Karachi' })
    const [searchData, setsearchData] = useState({ ProjectTitle: '', DeveloperTitle: '' })
    const [developerNameList, setdeveloperNameList] = useState([])
    const [projectName, setprojectName] = useState([])

    // callback function to handle city change
    const handleSelect = (selectedOption) => {
        setselectedOption(selectedOption)
    }
    // callback function to handle project title, property title, developer title
    const HandleChange = (selectedValue, { name }) => {
        setsearchData({ ...searchData, [name]: selectedValue })
    }

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];

    // Fetching Developer Name
    useEffect(() => {
        (async () => {
            setdeveloperNameList(await HomeFetchDeveloperName())
        }
        )()
    }, [])

    // Fetching Project Name
    useEffect(() => {
        (
            async () => {
                setprojectName(await HomeGetProjectName())
            }
        )()
    }, [])

    const HandleSubmit = () => {
        history.push('/explore')
        dispatch({ type: 'set_current_tab_to_project' })
        dispatch({ type: '3' })
        dispatch({ type: 'clear_project_list' })
        dispatch({ type: 'show_project_list_skeleton' })
        const search_data = {
            city: selectedOption.value,
            project_title: searchData.ProjectTitle.value,
            // property_type: '',
            // property_type: searchData.PropertyType.value,
            developer_title: searchData.DeveloperTitle.value,
            // min_area: minArea,
            // max_area: maxArea,
        }
        axios.post('http://localhost:3200/project/serchproject', search_data).then(response => {
            console.log('this is from SEARCH', response)
            if (response.data.length !== 0) {
                const project_card_data = response.data.map((value) => {
                    return {
                        city: value.city,
                        location: value.location,
                        price: value.price,
                        project_cover_image: value.project_cover_image,
                        project_logo_image: value.project_logo_image,
                        project_name: value.project_name,
                        project_id: value.project_id

                    }
                })
                dispatch({ type: 'hide_project_list_skeleton' })
                dispatch({ type: 'project_listings_are_found_hide_message' })
                dispatch({ type: 'set_project_list', payload: project_card_data })

            }
            else {
                dispatch({ type: 'hide_project_list_skeleton' })
                dispatch({ type: 'no_project_listings_are_found_show_message' })
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                {/* CITY */}
                <Grid item xs={12} md={6} className={`${styles.childContainer} ${styles.marginBottomMobile}`} >
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
                <Grid item xs={12} md={6} className={`${styles.locationSelect} ${styles.childContainer} ${styles.marginBottomMobile}`} >
                    <p>Project Name</p>
                    <Select
                        value={searchData.ProjectTitle}
                        onChange={HandleChange}
                        isLoading={projectName.length === 0 && true}
                        isSearchable={false}
                        name="ProjectTitle"
                        options={projectName}
                        placeholder="Select Project Name"
                        label='Project Title'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/*PROPERTY TYPE */}
                {/* <Grid item xs={12} md={4} className={`${styles.childContainer} ${styles.marginBottomMobile}`}>
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
                </Grid> */}
            </Grid>

            {/* THIS IS ROW 2 */}
            <Grid container className={`${styles.secondGrid} ${styles.marginBottomMobile}`} >
                {/* Developer Title */}
                <Grid item xs={12} md={6} className={`${styles.childContainer} ${styles.marginBottomMobile}`} style={{ marginTop: 'auto', marginBottom: '4px' }}>
                    <p>Developer Name</p>
                    <Select
                        value={searchData.DeveloperTitle}
                        onChange={HandleChange}
                        isLoading={developerNameList.length === 0 && true}
                        isSearchable={false}
                        name="DeveloperTitle"
                        options={developerNameList}
                        placeholder="Select Developer Name"
                        label='Developer Title'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/* AREA UNIT */}
                {/* <Grid item xs={12} md={4} className={`${styles.gridtwoPadding} ${styles.locationSelect} ${styles.marginBottomMobile}`}  >
                    <AreaRangeBox
                        RangeMin={area_min_range}
                        RangeMax={area_max_range}
                        heading='Area'
                        unit={areaUnit}
                    />
                </Grid > */}

                {/*  SEARCH BUTTON   */}
                <Grid item xs={12} md={6} className={styles.buttonContainer} >
                    <div className={styles.searchButtonBox} style={{ width: '70%' }} onClick={HandleSubmit}>
                        <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                        <div className={styles.search}>SEARCH</div>
                    </div>
                </Grid>
            </Grid >

            {/* change area unit and reset buttons */}
            {/* <FooterButtons /> */}
        </div >
    );
}
export default React.memo(Projects);