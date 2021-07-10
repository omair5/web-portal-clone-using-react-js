import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AbaadeeHorizontalCard from '../../components/FrequentlyUsed/AbaadeeHorizontalCard';
import Layout from '../../components/Layout/Layout';
import HomeGetHouseForSale from '../../Services/HomeGetHouseForSale'
import Container from '@material-ui/core/Container';
import Advertisement from '../../components/FrequentlyUsed/Advertisement';
import Advertisement1 from './images/explore 1.jpg'
import Advertisement2 from './images/explore 2.jpg'
import Grid from '@material-ui/core/Grid';
import VerticalAdvertisement from '../../components/FrequentlyUsed/VerticalAdvertisement';
import { v4 as uuidv4 } from 'uuid';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles, useStylesBase } from '../../components/FrequentlyUsed/PaginationStyles'
import axios from 'axios';
import SkeletonForHomeLinks from '../../components/SkeletonForHomeLinks';


const HomeLinksSearchResult = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();

    const [data, setData] = useState([])
    const [metaForPage, setmetaForPage] = useState('')
    const [skeleton, setskeleton] = useState(true)
    const { description } = useParams()
    const slug = (description.split('-'))

    const HandleCapitalize = (value) => {
        const cpital_letter = value.charAt(0).toUpperCase()
        const remaining_string = value.slice(1)
        const result = `${cpital_letter}${remaining_string}`
        return result
    }

    const category = HandleCapitalize(slug[0])
    const purpose = HandleCapitalize(slug[2])
    const cityname = HandleCapitalize(slug[4])

    console.log(category, purpose, cityname)


    useEffect(() => {
        let mounted = true
        async function GetHouseForSaleHome() {
            if (mounted) {
                const { property_data, meta } = await HomeGetHouseForSale(category, purpose, cityname)
                setskeleton(false)
                setData(property_data)
                setmetaForPage(meta)
            }
        }
        GetHouseForSaleHome().catch(err => console.log(err))
        // cancel subscription to useEffect
        return () => mounted = false;
    }, [category, purpose, cityname])


    const HandlePageChange = (e, value) => {
        setskeleton(true)
        axios.get(`http://localhost:3200/addproperty/homelinks1/${category}/${purpose}/${cityname}?page=${value}`)
            .then(res => {
                console.log('this is AFTER PAGE NUMBER IS CHANGED', res)
                setData(res.data.items.map(value => (
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
                )))
                setskeleton(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Layout FooterDisplay={true}>

                <Container maxWidth="lg" >

                    <Advertisement
                        Ads={{ Ad1: Advertisement1, Ad2: Advertisement2 }}
                        alt={{ alt1: "pearl villas", alt2: "gohar residency" }}
                    />
                    <div style={{ textAlign: 'center', color: 'rgb(59, 70, 86)', margin: '15px auto' }}>
                        <h1>{description.replace(/-/g, ' ').toUpperCase()}</h1>
                        <h2 style={{ color: 'black' }}>{data.length ? `${metaForPage.totalItems} Results Found` : ' No Result Found'}</h2>
                    </div>
                    <Grid container spacing={3}>
                        {/* PROPERTIES */}
                        <Grid item sm={12} md={8}>
                            {/* if skeleton is true ,show skeleton component else show properties  */}
                            {skeleton ?
                                Array(5).fill().map(() => (
                                    <div key={uuidv4()}>
                                        <SkeletonForHomeLinks />
                                    </div>
                                )) :
                                data.map((value) => (
                                    <div key={uuidv4()}>
                                        <Link to={`/property/${description}/${value.propertyId}`} className={classes.link}>
                                            <AbaadeeHorizontalCard
                                                buildingName={value.building_name}
                                                location={`${value.location}, ${value.city}`}
                                                areaSize={value.area_size}
                                                areaUnit={value.area_unit}
                                                beds={value.beds}
                                                baths={value.bathrooms}
                                                price={value.price}
                                                cover_image={value.cover_image}
                                            />
                                        </Link>
                                    </div>

                                ))
                            }
                        </Grid>

                        {/* SIDE ADVERTISEMENT */}
                        <Grid item xs={12} md={4} >
                            <VerticalAdvertisement pic={Advertisement1} />
                        </Grid>

                    </Grid>
                </Container>

                {/* PAGINATION */}
                {metaForPage &&
                    <Pagination count={metaForPage.totalPages}
                        className={classes.paginationContainer}
                        classes={classesBase}
                        size="large"
                        onChange={HandlePageChange}
                    />
                }

            </Layout>
        </>
    );
}
export default React.memo(HomeLinksSearchResult);