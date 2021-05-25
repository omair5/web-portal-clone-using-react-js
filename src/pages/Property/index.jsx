import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropertyImageGallery from '../../components/Property/ImageGallery';
import ContactForm from '../../components/Property/ContactForm';
import { makeStyles } from '@material-ui/core/styles';
import DetailsColumn1 from '../../components/Property/DetailsColumn1';
import DetailsColumn2 from '../../components/Property/DetailsColumn2';
import PropertyDescription from '../../components/Property/PropertyDescription';
import GeneralInformation from '../../components/Property/GeneralInformation';
import GetPropertyData from '../../Services/GetPropertyData'
import MainFeatures from '../../components/Property/MainFeatures';
import Utilities from '../../components/Property/Utilities';
import Facing from '../../components/Property/Facing';
import BusinessAndCommunication from '../../components/Property/BusinessAndCommunication';
import PropertyLocation from '../../components/Property/PropertyLocation';
import SkeletonForPropertyDetail from '../../components/SkeletonForPropertyDetail.jsx';

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
        "& h1": {
            color: 'rgb(76, 84, 85)',
            margin: '30px 0px'
        }
    }
});

const Property = () => {
    const classes = useStyles();
    // getting property if from url
    const { propertyId } = useParams()
    // setting state to load property data
    const [propertyData, setpropertyData] = useState('')
    useEffect(() => {
        async function PropertyDataGet() {
            const [data] = await GetPropertyData(propertyId)
            setpropertyData(data)
        }
        PropertyDataGet().catch(err => console.log(err))
    }, [propertyId])
    return (
        <>
            <Layout FooterDisplay={true}>
                {propertyData ?
                    <Container maxWidth="lg" className={classes.mainContainer}>
                        <Grid container spacing={3}>
                            {/* MAIN LONG VERTICAL GRID 1 */}
                            <Grid item xs={12} md={8}>
                                <PropertyImageGallery
                                    images={propertyData.images}
                                />
                                <h1>ABOUT THIS PROPERTY</h1>
                                {/* DETAILS MAIN GRID */}
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <DetailsColumn1
                                            type={propertyData.property_type}
                                            price={propertyData.price}
                                            location={propertyData.location}
                                            city={propertyData.city}
                                            bedrooms={propertyData.beds}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <DetailsColumn2
                                            bathrooms={propertyData.baths}
                                            purpose={propertyData.purpose}
                                            area={propertyData.land_area}
                                            areaUnit={propertyData.area_unit}
                                            postedAt={propertyData.created_at}
                                        />
                                    </Grid>
                                </Grid>
                                {/* DESCRIPTION */}
                                <h1>DESCRIPTION</h1>
                                <PropertyDescription
                                    description={propertyData.property_description}
                                />
                                {/* AMENITIES */}
                                {(propertyData.general_info.length === 0) && (propertyData.main_features.length === 0) && (propertyData.utilities.length === 0) && (propertyData.business_and_communication.length === 0) && (propertyData.facing.length === 0) ? null :
                                    <div>
                                        <h1 style={{ marginBottom: '5px' }}>AMENITIES</h1>
                                        <GeneralInformation generalInfo={propertyData.general_info} />
                                        <MainFeatures mainFeatures={propertyData.main_features} />
                                        <Utilities utilities={propertyData.utilities} />
                                        <BusinessAndCommunication business_and_communication={propertyData.business_and_communication} />
                                        <Facing facing={propertyData.facing} />
                                    </div>
                                }

                                {/* PROPERTY LOCATION */}
                                <h1>PROPERTY LOCATION</h1>
                                <PropertyLocation lat={propertyData.latitude} lng={propertyData.longitude} />
                            </Grid>

                            <Grid item xs={12} md={4} >
                                <ContactForm
                                    price={propertyData.price}
                                />
                            </Grid>

                        </Grid>
                    </Container> : <SkeletonForPropertyDetail />
                }
            </Layout>
        </>
    );
}

export default React.memo(Property);

// import React from 'react';
// import Layout from '../../components/Layout/Layout';

// import SkeletonForPropertyDetail from '../../components/SkeletonForPropertyDetail.jsx';
// const Property = () => {
//     return (
//         <Layout FooterDisplay={true}>
//             <SkeletonForPropertyDetail />
//         </Layout>
//     );
// }

// export default Property;