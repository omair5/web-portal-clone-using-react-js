import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCards from '../../FrequentlyUsed/AbaadeeCards';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles, useStylesBase } from '../../FrequentlyUsed/PaginationStyles'
import { v4 as uuidv4 } from 'uuid';
import SkeletonForCards from '../../SkeletonForCards';
import { useSelector, useDispatch } from 'react-redux';
import NoPropertyFound from '../../FrequentlyUsed/NoPropertyFound'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ExploreGetProperties from '../../../Services/ExploreGetProperties';



const WantedTab = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const classesBase = useStylesBase();
    const { property_data: WantedPropertyList, meta } = useSelector(state => state.Explore_Wanted_Properties)
    const WantedPropertySkeleton = useSelector(state => state.Explore_Wanted_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Wanted_Not_Found_Message)
    const RequestParams = useSelector(state => state.Explore_Wanted_Tab_Pagination)
    const RunThisEffectOnMount_ForWanted = useSelector(state => state.Explore_RunThisEffectOnMount_ForWanted)
    const { beds, city_name, location_name, max_area, min_area, property_type } = RequestParams
    console.log(beds, city_name, location_name, max_area, min_area, property_type)

    // EXPLORE-----FETCHING WANTED PROPERTIES LIST
    useEffect(() => {
        let mounted = true
        if (RunThisEffectOnMount_ForWanted) {
            async function GetPropertiesExplore() {
                console.log('THIS USEEFFECT')
                if (mounted) {
                    if (localStorage.getItem("explore_wanted_listings_page_1")) {
                        dispatch({ type: 'explore_wanted_properties', payload: JSON.parse(localStorage.getItem("explore_wanted_listings_page_1")) })
                    }
                    else {
                        const wanted_response = await ExploreGetProperties('Wanted')
                        if (wanted_response.length !== 0) {
                            dispatch({ type: 'hide_wanted_properties_skeleton' })
                            dispatch({ type: 'explore_wanted_properties', payload: wanted_response })

                        }
                        else {
                            dispatch({ type: 'hide_wanted_properties_skeleton' })
                            dispatch({ type: 'explore_wanted_properties', payload: wanted_response })
                            dispatch({ type: 'no_wanted_listings_are_found_show_message' })
                        }
                        localStorage.setItem("explore_wanted_listings_page_1", JSON.stringify(wanted_response));
                    }
                }
            }
            GetPropertiesExplore().catch(err => console.log(err))
        }

        // cancel subscription to useEffect
        return () => {
            mounted = false;
        }
    }, [dispatch, RunThisEffectOnMount_ForWanted])




    const HandlePageChange = (e, value) => {
        console.log("REQUEST PARAMS------------------", RequestParams)

        //  ON PAGE CHANGE IT WILL CHECK IF SEARCH PARAMS ARE USED OR NOT ,
        //  IF NOT USED THEN IT WILL CHECK THE LOCAL STORAGE AND IF DATA IS NOT THERE 
        //  THEN IT IS GOING TO FETCH DATA IN else STATEMENT
        if ((beds === '') && (city_name === '') && (location_name === '') && (max_area === '') && (min_area === '') && (property_type === '')) {
            if (localStorage.getItem(`explore_wanted_listings_page_${value}`)) {
                console.log('local storage has data so we are setting the property array')
                dispatch({ type: 'explore_wanted_properties', payload: JSON.parse(localStorage.getItem(`explore_wanted_listings_page_${value}`)) })
            }
            else {
                console.log('fetching data and storing it in local storage')
                dispatch({ type: 'show_wanted_properties_skeleton' })
                axios.post(`http://localhost:3200/addproperty/getpropertydata?page=${value}`, RequestParams)
                    .then(res => {
                        console.log('this is AFTER PAGE NUMBER IS CHANGED', res)
                        if (res.status === 201) {
                            const property_data = res.data.items.map(value => (
                                {
                                    city: value.city.city_name,
                                    building_name: value.property_title,
                                    location: value.Location.location_name,
                                    area_size: value.land_area,
                                    area_unit: value.area_unit.area_name,
                                    beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshowbeds'}`,
                                    bathrooms: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshowbaths'}`,
                                    price: value.price,
                                    cover_image: value.title_image,
                                    property_sub_type: value.property_category.property_category_name,
                                    propertyId: value.id,
                                }
                            ))
                            dispatch({ type: 'hide_wanted_properties_skeleton' })
                            dispatch({ type: 'explore_wanted_properties', payload: { property_data: property_data, meta: res.data.meta } })
                            localStorage.setItem(`explore_wanted_listings_page_${value}`, JSON.stringify({ property_data: property_data, meta: res.data.meta }));
                        }
                        else {
                            console.log('something went wrong')
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
        // IF SEARCH PARAMS ARE USED THEN IT WILL JUST GO AND FETCH DATA 
        // IT WILL NOT LOOK THE LOCAL STORAGE
        else {
            console.log('just going to fetch data')
            dispatch({ type: 'show_wanted_properties_skeleton' })
            axios.post(`http://localhost:3200/addproperty/getpropertydata?page=${value}`, RequestParams)
                .then(response => {
                    if (response.data === '') {
                        console.log('EMPTY STRING')
                        dispatch({ type: 'hide_wanted_properties_skeleton' })
                        // dispatch({ type: 'no_buy_listings_are_found_show_message' })
                        dispatch({ type: 'explore_wanted_properties', payload: JSON.parse(localStorage.getItem("explore_wanted_listings_page_1")) })
                        dispatch({ type: 'clear_explore_wanted_tab_pagination' })

                    }
                    else if (response.data.items.length === 0) {
                        console.log('EMPTY ARRAY')
                        dispatch({ type: 'hide_wanted_properties_skeleton' })
                        // dispatch({ type: 'no_buy_listings_are_found_show_message' })
                        dispatch({ type: 'explore_wanted_properties', payload: JSON.parse(localStorage.getItem("explore_wanted_listings_page_1")) })
                        dispatch({ type: 'clear_explore_wanted_tab_pagination' })
                    }
                    else {
                        console.log('ARRAY HAS SOME VALUES')
                        const property_data = response.data.items.map(value => (
                            {
                                city: value.city.city_name,
                                building_name: value.property_title,
                                location: value.Location.location_name,
                                area_size: value.land_area,
                                area_unit: value.area_unit.area_name,
                                beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshowbeds'}`,
                                bathrooms: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshowbaths'}`,
                                price: value.price,
                                cover_image: value.title_image,
                                property_sub_type: value.property_category.property_category_name,
                                propertyId: value.id,
                            }
                        ))
                        dispatch({ type: 'hide_wanted_properties_skeleton' })
                        dispatch({ type: 'explore_wanted_properties', payload: { property_data: property_data, meta: response.data.meta } })
                    }
                })
                .catch(err => console.log(err))
        }
    }


    const GenerateSlugTitle = (value) => {
        return value.trim().toLowerCase().replace(/ /g, '-')
    }



    // THIS EFFECT WILL RUN ONLY WHEN COMPONENT UNMOUNTS
    useEffect(() => {
        return () => {
            console.log("cleaned up");
            dispatch({ type: 'clear_explore_wanted_tab_pagination' })
            dispatch({ type: 'run_useeffect_on_mount_for_wanted_tab' })
            dispatch({ type: 'wanted_listings_are_found_hide_message' })
        };
    }, [dispatch]);

    return (
        <>
            {/* SHOW MESSGAE NO PROPERTY FOUND */}
            {
                ShowMessage && <NoPropertyFound />
            }

            {
                ShowMessage ? <p className="text-center margin-similar-search">Showing Similar Search Results</p> : null

            }

            {/* SHOW CARDS SKELETON AS LOADER */}
            {WantedPropertySkeleton ?
                <Grid container spacing={3}>
                    {
                        Array(9).fill().map(() => (
                            <Grid item xs={12} md={6} key={uuidv4()}>
                                <SkeletonForCards />
                            </Grid>
                        ))
                    }
                </Grid> :
                ShowMessage ? null :
                    <div className={classes.ResultCount}>
                        <span>{meta.totalItems} Results Found</span>
                    </div>
            }

            {/* SHOW BUY PROPERTY LIST */}
            {WantedPropertyList.length !== 0 &&
                <Grid container spacing={3}>
                    {
                        WantedPropertyList.reverse().map(value => (
                            <Grid item xs={12} md={9} lg={6} key={uuidv4()}>
                                <Link to={`/property/${GenerateSlugTitle(value.building_name)}/${value.propertyId}`} className={classes.link}>
                                    <AbaadeeCards
                                        buildingName={value.building_name}
                                        location={`${value.location}, ${value.city}`}
                                        areaSize={value.area_size}
                                        areaUnit={value.area_unit}
                                        beds={value.beds}
                                        baths={value.bathrooms}
                                        price={value.price}
                                        cover_image={value.cover_image}
                                        property_sub_type={value.property_sub_type}
                                        MainBox={{ maxWidth: '95%' }}
                                    />
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            }


            {/* PAGINATION */}
            <Pagination count={meta.totalPages}
                className={classes.paginationContainer}
                classes={classesBase}
                size="large"
                onChange={HandlePageChange}
            />
        </>
    );
}
export default React.memo(WantedTab);