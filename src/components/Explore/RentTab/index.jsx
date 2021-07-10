import React from 'react';
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


const RentTab = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const classesBase = useStylesBase();
    const { property_data: RentPropertyList, meta } = useSelector(state => state.Explore_Rent_Properties)
    const RentPropertySkeleton = useSelector(state => state.Explore_Rent_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Rent_Not_Found_Message)
    const RequestParams = useSelector(state => state.Explore_Rent_Tab_Pagination)

    const HandlePageChange = (e, value) => {
        console.log(value)
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
                            propertyId: value.id,
                        }
                    ))
                    dispatch({ type: 'hide_rent_properties_skeleton' })
                    dispatch({ type: 'explore_rent_properties', payload: { property_data: property_data, meta: res.data.meta } })
                }
                else {
                    console.log('something went wrong')
                }

            })
            .catch(err => console.log(err))
    }

    const GenerateSlugTitle = (value) => {
        return value.toLowerCase().replace(/ /g, '-')
    }
    
    return (
        <>
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
                            <Grid item xs={12} md={6} key={uuidv4()}>
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
                                        MainBox={{ maxWidth: '95%' }}
                                    />
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            }

            {/* SHOW MESSGAE NO PROPERTY FOUND */}
            {
                ShowMessage && <NoPropertyFound />
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