import React from 'react';
import Header from '../../components/AgentDetail/Header';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const AgentDetails = () => {
    return (
        <Layout FooterDisplay={true}>
            <Header />
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {/* MAIN LONG VERTICAL GRID 1 */}
                    <Grid item xs={12} md={8}>

                    </Grid>

                    {/* CONTACT FORM GRID */}
                    <Grid item xs={12} md={4} >

                    </Grid>
                </Grid>
            </Container>
            <GoToTop />
        </Layout>
    );
}
export default AgentDetails;