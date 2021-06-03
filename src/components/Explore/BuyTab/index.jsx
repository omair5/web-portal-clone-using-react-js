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


const BuyTab = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const classesBase = useStylesBase();
    const { property_data: BuyPropertyList, meta } = useSelector(state => state.Explore_Buy_Properties)
    const BuyPropertySkeleton = useSelector(state => state.Explore_Buy_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Buy_Not_Found_Message)
    const RequestParams = useSelector(state => state.Explore_Buy_Tab_Pagination)
    // console.log(RequestParams)
    // console.log(BuyPropertyList)
    // console.log(meta)

    const HandlePageChange = (e, value) => {
        console.log(value)
        dispatch({ type: 'show_buy_properties_skeleton' })
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
                    dispatch({ type: 'hide_buy_properties_skeleton' })
                    dispatch({ type: 'explore_buy_properties', payload: { property_data: property_data, meta: res.data.meta } })
                }
                else {
                    console.log('something went wrong')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {/* SHOW CARDS SKELETON AS LOADER */}
            {BuyPropertySkeleton ?
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
            {/* {console.log('checking this from explore buy tab', BuyPropertyList)} */}
            {BuyPropertyList.length !== 0 &&
                <Grid container spacing={3}>
                    {
                        BuyPropertyList.reverse().map(value => (
                            <Grid item xs={12} md={6} key={uuidv4()}>
                                <Link to={`/property/${value.propertyId}`} className={classes.link}>
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
export default React.memo(BuyTab);