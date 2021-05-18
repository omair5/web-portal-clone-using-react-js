import React from 'react';
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
import Amenities from '../../components/Property/Amenities';

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
        "& h1": {
            color: 'rgb(76, 84, 85)',
            margin: '30px 0px 10px'
        }
    }
});

const Property = () => {
    const classes = useStyles();
    const { propertyId } = useParams()
    console.log(propertyId)
    return (
        <>
            <Layout FooterDisplay={true}>
                <Container maxWidth="lg" className={classes.mainContainer}>
                    <Grid container spacing={3}>

                        {/* MAIN LONG VERTICAL GRID 1 */}
                        <Grid item xs={12} md={8}>
                            <PropertyImageGallery />
                            <h1>ABOUT THIS PROPERTY</h1>
                            {/* DETAILS MAIN GRID */}
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <DetailsColumn1 />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <DetailsColumn2 />
                                </Grid>
                            </Grid>
                            {/* DESCRIPTION */}
                            <h1>DESCRIPTION</h1>
                            <PropertyDescription />
                            {/* AMENITIES */}
                            <h1>AMENITIES</h1>
                            <Amenities />
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <ContactForm />
                        </Grid>

                    </Grid>
                </Container>
            </Layout>
        </>
    );
}

export default React.memo(Property);