import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCards from '../../FrequentlyUsed/AbaadeeCards';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles, useStylesBase } from '../../FrequentlyUsed/PaginationStyles'
import ExploreGetProperties from '../../../Services/ExploreGetProperties'
import { v4 as uuidv4 } from 'uuid';
import CircularProgress from '@material-ui/core/CircularProgress';

const BuyTab = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    const [showProperties, setshowProperties] = useState([])

    useEffect(() => {
        let mounted = true
        async function GetPropertiesExplore() {
            if (mounted) {
                setshowProperties(await ExploreGetProperties('Buy'))
            }
        }
        GetPropertiesExplore()
        // cancel subscription to useEffect
        return () => mounted = false;
    }, [])

    return (
        <>
            <div className={classes.ResultCount}>
                <span>{showProperties.length} Results Found</span>
            </div>

            {
                showProperties.length === 0 ?
                    <div className={classes.progressBarContainer}><CircularProgress size={60} /></div>
                    :
                    <Grid container spacing={3}>
                        {
                            showProperties.map(value => (
                                <Grid item xs={12} md={6} key={uuidv4()}>
                                    <AbaadeeCards
                                        buildingName={value.building_name}
                                        location={`${value.location}, ${value.city}`}
                                        areaSize={value.area_size}
                                        areaUnit={value.area_unit}
                                        beds={value.beds}
                                        price={value.price}
                                        cover_image={value.cover_image && value.cover_image[0]}
                                        MainBox={{ maxWidth: '95%' }} />
                                </Grid>
                            ))
                        }
                    </Grid>
            }
            <Pagination count={10}
                className={classes.paginationContainer}
                classes={classesBase}
                size="large"
            />
        </>
    );
}
export default React.memo(BuyTab);