import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropertyImageGallery from '../../components/Project/ImageGallery';
import ContactForm from '../../components/Project/ContactForm';
import DetailsColumn1 from '../../components/Project/DetailsColumn1';
import DetailsColumn2 from '../../components/Project/DetailsColumn2';
import PropertyDescription from '../../components/Project/PropertyDescription';
import GetProjecData from '../../Services/GetProjectData'
import PropertyLocation from '../../components/Project/PropertyLocation';
import SkeletonForPropertyDetail from '../../components/SkeletonForPropertyDetail.jsx';
import FloorPlan from '../../components/Project/FloorPlan';
import PaymentPlan from '../../components/Project/PaymentPlan';
import GoToTop from '../../GoToTop';
import DisplayAmenities from '../../components/Project/DisplayAmenities';
import ShowApprovedLogo from '../../components/Project/ShowApprovedLogo';


const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
        "& h1": {
            color: 'white',
            margin: '30px 0px',
            padding: '5px 5px',
            backgroundColor: 'rgb(76, 84, 85)',
            fontSize: '22px',
            letterSpacing: '1px'
        }
    },
    projectLogoContainer: {
        display: 'flex',
        alignItems: 'center',
        '& h2': {
            textTransform: 'uppercase',
            fontSize: '28px'
        },
        '& h4': {
            color: 'gray',
            textTransform: 'capitalize'
        },
        '& h5': {
            color: 'gray',
            textTransform: 'capitalize'
        }
    },
    photoGallery: {
        marginTop: '15px'
    },
    projectLogo: {
        height: '100px',
        width: '100px'
    },
    approved: {
        margin: '10px 0px',
        "& h5": {
            textAlign: 'center',
        }
    },
    approvelogos: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Project = () => {
    const classes = useStyles();
    // getting property id from url
    const { id } = useParams()
    // setting state to load property data
    const [projectData, setprojectData] = useState('')
    // Generating Price
    const generatePrice = (value) => {
        const splitted_array = value.split(' ')
        const starting_price = `${splitted_array[1]} ${splitted_array[2]}`
        const ending_price = `${splitted_array[4]} ${splitted_array[5]}`
        return `PKR ${starting_price.toUpperCase()} TO PKR ${ending_price.toUpperCase()}`
    }

    useEffect(() => {
        (
            async function () {
                console.log('filtered data to show', await GetProjecData(parseInt(id)))
                setprojectData(await GetProjecData(parseInt(id)))
            }
        )().catch(err => console.log(err))
        window.scrollTo(0, 0)
    }, [id])

    return (
        <>
            <Layout FooterDisplay={true}>
                {projectData ?
                    <Container maxWidth="lg" className={classes.mainContainer}>
                        <Grid container spacing={3}>
                            {/* MAIN LONG VERTICAL GRID 1 */}
                            <Grid item xs={12} md={8}>

                                <div className={classes.projectLogoContainer} >
                                    <img src={projectData.project_logo} alt="project logo" className={classes.projectLogo} />
                                    <div className={classes.projectDescription}>
                                        <h2>{projectData.project_name}</h2>
                                        <h5>{projectData.location}</h5>
                                        <h4>{generatePrice(projectData.price)} </h4>
                                    </div>
                                </div>

                                <div className={classes.photoGallery}>
                                    <PropertyImageGallery
                                        images={projectData.project_images}
                                    />
                                </div>

                                <h1>ABOUT THIS PROJECT</h1>
                                {/* DETAILS MAIN GRID */}
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <DetailsColumn1
                                            locality={projectData.location}
                                            city={'Karachi'}
                                            total_area={projectData.project_area}
                                            project_type={projectData.project_type}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <DetailsColumn2
                                            price={generatePrice(projectData.price)}
                                            payment={projectData.payment_method}
                                            developer={projectData.developer_name}
                                            estimated_completion_year={projectData.completion_year}
                                        />
                                    </Grid>
                                </Grid>

                                {/* DESCRIPTION */}
                                {
                                    (!!projectData.project_description) ?
                                        <div>
                                            <h1>DESCRIPTION</h1>
                                            <PropertyDescription
                                                description={projectData.project_description}
                                            />
                                        </div> : null
                                }

                                {/* AMENITIES */}
                                <div>
                                    <h1 style={{ marginBottom: '5px' }}>AMENITIES</h1>
                                    <DisplayAmenities
                                        amenity_heading='MAIN FEATURES'
                                        amenities={projectData.main_features}
                                    />
                                    <DisplayAmenities
                                        amenity_heading='UTILITIES'
                                        amenities={projectData.utilities}
                                    />
                                    <DisplayAmenities
                                        amenity_heading='COMMUNITY FEATURES'
                                        amenities={projectData.community_features}
                                    />
                                    <DisplayAmenities
                                        amenity_heading='NEARBY'
                                        amenities={projectData.nearby_location}
                                    />
                                    <DisplayAmenities
                                        amenity_heading='BUSINESS AND COMMUNICATION'
                                        amenities={projectData.business_and_communication}
                                    />
                                    <DisplayAmenities
                                        amenity_heading='FACING'
                                        amenities={projectData.facing}
                                    />
                                </div>
                                {/* } */}

                                {/* PROPERTY LOCATION */}
                                <h1>PROJECT LOCATION</h1>
                                <PropertyLocation
                                    lat={projectData.latitude}
                                    lng={projectData.longitude}
                                />
                            </Grid>

                            {/* SIDE BAR SMALL GRID */}
                            <Grid item xs={12} md={4} >
                                <div className={classes.approved} >
                                    <h5>This Project Is Approved By</h5>
                                    <div className={classes.approvelogos}>
                                        <ShowApprovedLogo
                                            approval_list={projectData.approved_by.split(',')}
                                        />
                                    </div>
                                </div>
                                <ContactForm
                                    project_id={id}
                                    project_name={projectData.project_name}
                                    phone_number={projectData.phone_number}
                                />
                            </Grid>
                        </Grid>

                        {/* FLOOR PLAN */}
                        <h1>FLOOR PLAN</h1>
                        <FloorPlan
                            photos={projectData.floor_plan_images}
                        />

                        {/* PAYMENT PLAN */}
                        <h1>PAYMENT PLAN</h1>
                        <PaymentPlan
                            photos={projectData.payment_plan_images}
                        />

                    </Container>
                    : <SkeletonForPropertyDetail />
                }
                <GoToTop />
            </Layout>
        </>
    );
}
export default React.memo(Project);