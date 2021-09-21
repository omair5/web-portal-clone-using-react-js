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


const RentTab = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const classesBase = useStylesBase();
    const { property_data: RentPropertyList, meta } = useSelector(state => state.Explore_Rent_Properties)
    const RentPropertySkeleton = useSelector(state => state.Explore_Rent_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Rent_Not_Found_Message)
    const RequestParams = useSelector(state => state.Explore_Rent_Tab_Pagination)
    const RunThisEffectOnMount_ForRent = useSelector(state => state.Explore_RunThisEffectOnMount_ForRent)
    const { beds, city_name, location_name, max_area, max_price, min_area, min_price, property_type } = RequestParams


    // EXPLORE-----FETCHING RENT PROPERTIES LIST
    useEffect(() => {
        console.log('i m after component mounts working')
        let mounted = true
        if (RunThisEffectOnMount_ForRent) {
            async function GetPropertiesExplore() {
                if (mounted) {
                    if (localStorage.getItem("explore_rent_listings_page_1")) {
                        dispatch({ type: 'explore_rent_properties', payload: JSON.parse(localStorage.getItem("explore_rent_listings_page_1")) })
                    }
                    else {
                        const rent_response = await ExploreGetProperties('Rent')
                        if (rent_response.length !== 0) {
                            dispatch({ type: 'hide_rent_properties_skeleton' })
                            dispatch({ type: 'explore_rent_properties', payload: rent_response })

                        }
                        else {
                            dispatch({ type: 'hide_rent_properties_skeleton' })
                            dispatch({ type: 'explore_rent_properties', payload: rent_response })
                            dispatch({ type: 'no_rent_listings_are_found_show_message' })
                        }
                        localStorage.setItem("explore_rent_listings_page_1", JSON.stringify(rent_response));
                    }
                }
            }
            GetPropertiesExplore().catch(err => console.log(err))
        }

        // cancel subscription to useEffect
        return () => {
            mounted = false;
        }
    }, [dispatch, RunThisEffectOnMount_ForRent])


    // HANDLE PAGE CHANGE
    const HandlePageChange = (e, value) => {
        //  ON PAGE CHANGE IT WILL CHECK IF SEARCH PARAMS ARE USED OR NOT ,
        //  IF NOT USED THEN IT WILL CHECK THE LOCAL STORAGE AND IF DATA IS NOT THERE 
        //  THEN IT IS GOING TO FETCH DATA IN else STATEMENT
        if ((beds === '') && (city_name === '') && (location_name === '') && (max_area === '') && (max_price === '') && (min_area === '') && (min_price === '') && (property_type === '')) {
            if (localStorage.getItem(`explore_rent_listings_page_${value}`)) {
                console.log('hey i am going to store data in local storage')
                dispatch({ type: 'explore_rent_properties', payload: JSON.parse(localStorage.getItem(`explore_rent_listings_page_${value}`)) })
            }
            else {
                console.log('fetching data')
                dispatch({ type: 'show_rent_properties_skeleton' })
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
                            dispatch({ type: 'hide_rent_properties_skeleton' })
                            dispatch({ type: 'explore_rent_properties', payload: { property_data: property_data, meta: res.data.meta } })
                            localStorage.setItem(`explore_rent_listings_page_${value}`, JSON.stringify({ property_data: property_data, meta: res.data.meta }));
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
            dispatch({ type: 'show_rent_properties_skeleton' })
            axios.post(`http://localhost:3200/addproperty/getpropertydata?page=${value}`, RequestParams)
                .then(res => {
                    console.log('this is AFTER PAGE NUMBER IS CHANGED', res)
                    if (res.data === '') {
                        console.log('EMPTY STRING')
                        dispatch({ type: 'hide_rent_properties_skeleton' })
                        // dispatch({ type: 'no_buy_listings_are_found_show_message' })
                        dispatch({ type: 'explore_rent_properties', payload: JSON.parse(localStorage.getItem("explore_rent_listings_page_1")) })
                        dispatch({ type: 'clear_explore_rent_tab_pagination' })


                    }
                    else if (res.data.items.length === 0) {
                        console.log('EMPTY ARRAY')
                        dispatch({ type: 'hide_rent_properties_skeleton' })
                        // dispatch({ type: 'no_buy_listings_are_found_show_message' })
                        dispatch({ type: 'explore_rent_properties', payload: JSON.parse(localStorage.getItem("explore_rent_listings_page_1")) })
                        dispatch({ type: 'clear_explore_rent_tab_pagination' })
                    }
                    else {
                        console.log('ARRAY HAS SOME VALUES')
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
                        dispatch({ type: 'hide_rent_properties_skeleton' })
                        dispatch({ type: 'explore_rent_properties', payload: { property_data: property_data, meta: res.data.meta } })
                    }
                })
                .catch(err => console.log(err))
        }
    }


    // GENERATE SLUGS
    const GenerateSlugTitle = (value) => {
        return value.trim().toLowerCase().replace(/ /g, '-')
    }

    // THIS EFFECT WILL RUN ONLY WHEN COMPONENT UNMOUNTS
    useEffect(() => {
        return () => {
            console.log("cleaned up");
            dispatch({ type: 'clear_explore_rent_tab_pagination' })
            dispatch({ type: 'run_useeffect_on_mount_for_rent_tab' })
            dispatch({ type: 'rent_listings_are_found_hide_message' })
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
            {RentPropertySkeleton ?
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
            {console.log('checking this from explore buy tab', RentPropertyList)}
            {RentPropertyList.length !== 0 &&
                <Grid container spacing={3}>
                    {
                        RentPropertyList.reverse().map(value => (
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
export default React.memo(RentTab);