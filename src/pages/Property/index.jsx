import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropertyImageGallery from '../../components/Property/ImageGallery';
import ContactForm from '../../components/Property/ContactForm';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     mainHeading: {
//         textAlign: 'center',
//         padding: '15px 0px'
//     }
// });

const Property = () => {
    // const classes = useStyles();
    const { propertyId } = useParams()
    console.log(propertyId)
    return (
        <>
            <Layout FooterDisplay={true}>
                <Container maxWidth="lg" >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} style={{ backgroundColor: 'red' }}>
                            <PropertyImageGallery />
                        </Grid>
                        <Grid item xs={12} md={4} style={{ backgroundColor: 'green' }}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </>
    );
}

export default React.memo(Property);