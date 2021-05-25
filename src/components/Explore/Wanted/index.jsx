import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCards from '../../FrequentlyUsed/AbaadeeCards';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles, useStylesBase } from '../../FrequentlyUsed/PaginationStyles'
import { v4 as uuidv4 } from 'uuid';
import SkeletonForCards from '../../SkeletonForCards';
import { useSelector } from 'react-redux';
import NoPropertyFound from '../../FrequentlyUsed/NoPropertyFound'
import { Link } from 'react-router-dom'


const WantedTab = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    const WantedPropertyList = useSelector(state => state.Explore_Wanted_Properties)
    const WantedPropertySkeleton = useSelector(state => state.Explore_Wanted_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Wanted_Not_Found_Message)

    return (
        <>
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
                <div className={classes.ResultCount}>
                    <span>{WantedPropertyList.length} Results Found</span>
                </div>
            }

            {/* SHOW BUY PROPERTY LIST */}
            {WantedPropertyList.length !== 0 &&
                <Grid container spacing={3}>
                    {
                        WantedPropertyList.reverse().map(value => (
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
            <Pagination count={10}
                className={classes.paginationContainer}
                classes={classesBase}
                size="large"
            />
        </>
    );
}
export default React.memo(WantedTab);