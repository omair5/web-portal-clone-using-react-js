import React from 'react';
import Layout from '../../components/Layout/Layout';
// import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropertyImageGallery from '../../components/Project/ImageGallery';
import ContactForm from '../../components/Project/ContactForm';
import DetailsColumn1 from '../../components/Project/DetailsColumn1';
import DetailsColumn2 from '../../components/Project/DetailsColumn2';
import PropertyDescription from '../../components/Project/PropertyDescription';
import GeneralInformation from '../../components/Project/GeneralInformation';
// import GetPropertyData from '../../Services/GetPropertyData'
import MainFeatures from '../../components/Project/MainFeatures';
import Utilities from '../../components/Project/Utilities';
import Facing from '../../components/Project/Facing';
import BusinessAndCommunication from '../../components/Project/BusinessAndCommunication';
import PropertyLocation from '../../components/Project/PropertyLocation';
// import SkeletonForPropertyDetail from '../../components/SkeletonForPropertyDetail.jsx';
import ProjectLogo from './doha.png'
import FloorPlan from '../../components/Project/FloorPlan';
import PaymentPlan from '../../components/Project/PaymentPlan';
import GoToTop from '../../GoToTop';


const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
        "& h1": {
            color: 'rgb(76, 84, 85)',
            margin: '30px 0px'
        }
    },
    projectLogoContainer: {
        display: 'flex',
        alignItems: 'center',
        '& h4': {
            color: 'gray'
        },
        '& h5': {
            color: 'gray'
        }
    },
    projectLogo: {
        height: '100px',
        width: '100px'
    }
});

const Project = () => {
    const classes = useStyles();
    // getting property id from url
    // const { propertyId } = useParams()
    // setting state to load property data
    // const [propertyData, setpropertyData] = useState('')
    // useEffect(() => {
    //     async function PropertyDataGet() {
    //         const [data] = await GetPropertyData(propertyId)
    //         setpropertyData(data)
    //     }
    //     PropertyDataGet().catch(err => console.log(err))
    // }, [propertyId])

    return (
        <>
            <Layout FooterDisplay={true}>
                {/* {propertyData ? */}
                <Container maxWidth="lg" className={classes.mainContainer}>
                    <div className={classes.projectLogoContainer}>
                        <img src={ProjectLogo} alt="project logo" className={classes.projectLogo} />
                        <div>
                            <h2>DOHA MALL & RESIDENCY</h2>
                            <h5>Bahria Town Karachi , Karachi</h5>
                            <h4>PKR 43.8 LAKH To 11.04 CRORE </h4>
                        </div>
                    </div>
                    <Grid container spacing={3}>
                        {/* MAIN LONG VERTICAL GRID 1 */}
                        <Grid item xs={12} md={8}>
                            <PropertyImageGallery
                                images={['https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/']}
                            />
                            <h1>ABOUT THIS PROJECT</h1>
                            {/* DETAILS MAIN GRID */}
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <DetailsColumn1
                                        locality={'Bahria Town Karachi'}
                                        city={'Karachi'}
                                        total_area={'343 square feet'}
                                        project_type={'shops & residential'}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <DetailsColumn2
                                        price={'pkr 4.38 lakh TO 11.04 crore'}
                                        payment={'5 years installment plan'}
                                        developer={'jeewa group of companies'}
                                        estimated_completion_year={'2025'}
                                    />
                                </Grid>
                            </Grid>
                            {/* DESCRIPTION */}
                            <h1>DESCRIPTION</h1>
                            <PropertyDescription
                                // description={propertyData.property_description}
                                description={'hello world'}

                            />
                            {/* AMENITIES */}
                            {/* {(propertyData.general_info.length === 0) && (propertyData.main_features.length === 0) && (propertyData.utilities.length === 0) && (propertyData.business_and_communication.length === 0) && (propertyData.facing.length === 0) ? null : */}
                            <div>
                                <h1 style={{ marginBottom: '5px' }}>AMENITIES</h1>
                                <GeneralInformation generalInfo={['bed', 'bath']} />
                                <MainFeatures mainFeatures={['dining room', 'hall', 'kitchen']} />
                                <Utilities utilities={['water', 'gas']} />
                                <BusinessAndCommunication business_and_communication={['cctv', 'camera']} />
                                <Facing facing={['north', 'south']} />
                            </div>
                            {/* } */}

                            {/* PROPERTY LOCATION */}
                            <h1>PROPERTY LOCATION</h1>
                            <PropertyLocation
                                lat={34.454}
                                lng={98.765}
                            />
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <ContactForm />
                        </Grid>

                    </Grid>

                    {/* FLOOR PLAN */}
                    <h1>FLOOR PLAN</h1>
                    <FloorPlan />

                    {/* PAYMENT PLAN */}
                    <h1>PAYMENT PLAN</h1>
                    <PaymentPlan />

                </Container>
                {/* : <SkeletonForPropertyDetail />
                } */}
                <GoToTop />
            </Layout>
        </>
    );
}
export default React.memo(Project);