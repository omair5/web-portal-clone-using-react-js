import React from 'react';
import Header from '../../components/AgentDetail/Header';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DeveloperContactForm from '../../components/DeveloperDetail/DeveloperContactForm';
import DeveloperContactDetail from '../../components/DeveloperDetail/DeveloperContactDetail';
import DeveloperDescription from '../../components/DeveloperDetail/DeveloperDescription'
import { makeStyles } from '@material-ui/core/styles';
import DeveloperSocialLinks from '../../components/DeveloperDetail/DeveloperSocialLinks';
import DeveloperProperties from '../../components/DeveloperDetail/DeveloperProperties';
import MemberOfInstitutions from '../../components/DeveloperDetail/MemberOfInstitutions';

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


const DeveloperDetail = () => {
    const classes = useStyles();
    return (
        <Layout FooterDisplay={true}>
            <Header />
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    {/* MAIN LONG VERTICAL GRID 1 */}
                    <Grid item xs={12} md={8} >
                        <h1>CONTACT DETAIL</h1>
                        <DeveloperContactDetail />
                        <h1>DESCRIPTION</h1>
                        <DeveloperDescription />
                        <h1>SOCIAL PLATFORMS</h1>
                        <DeveloperSocialLinks />
                        <h1>Member</h1>
                        <MemberOfInstitutions />
                    </Grid>

                    {/* CONTACT FORM GRID */}
                    <Grid item xs={12} md={4} >
                        <DeveloperContactForm />
                    </Grid>
                </Grid>

                {/* AGENT PROPERTIES */}
                <h1 className={classes.agentProperties}>DEVELOPER PROJECTS</h1>
                <DeveloperProperties />
            </Container>
            <GoToTop />
        </Layout>
    );
}
export default DeveloperDetail;