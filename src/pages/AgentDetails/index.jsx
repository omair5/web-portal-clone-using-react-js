import React from 'react';
import Header from '../../components/AgentDetail/Header';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AgentContactForm from '../../components/AgentDetail/AgentContactForm';
import AgentContactDetail from '../../components/AgentDetail/AgentContactDetail';
import AgentDescription from '../../components/AgentDetail/AgentDescription'
import { makeStyles } from '@material-ui/core/styles';
import AgentSocialLinks from '../../components/AgentDetail/AgentSocialLinks';
import AgentProperties from '../../components/AgentDetail/AgentProperties';

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
        "& h1": {
            color: 'rgb(76, 84, 85)',
            margin: '30px 0px'
        }
    },
    agentProperties: {
        textAlign: 'center'
    }
});


const AgentDetails = () => {
    const classes = useStyles();
    return (
        <Layout FooterDisplay={true}>
            <Header />
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    {/* MAIN LONG VERTICAL GRID 1 */}
                    <Grid item xs={12} md={8} >
                        <h1>CONTACT DETAIL</h1>
                        <AgentContactDetail />
                        <h1>DESCRIPTION</h1>
                        <AgentDescription />
                        <h1>SOCIAL PLATFORMS</h1>
                        <AgentSocialLinks />
                    </Grid>

                    {/* CONTACT FORM GRID */}
                    <Grid item xs={12} md={4} >
                        <AgentContactForm />
                    </Grid>
                </Grid>

                {/* AGENT PROPERTIES */}
                <h1 className={classes.agentProperties}>AGENT PROPERTIES</h1>
                <AgentProperties />
            </Container>
            <GoToTop />
        </Layout>
    );
}
export default AgentDetails;