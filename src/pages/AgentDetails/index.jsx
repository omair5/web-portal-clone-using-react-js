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
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GetAgentDeveloperDetail from '../../Services/GetAgentDeveloperDetail'
import { useState } from 'react';
import SkeletonForAgentAndDeveloperDetail from '../../components/SkeletonForAgentAndDeveloperDetail'
import AgentInterview from '../../components/AgentDetail/AgentInterview';

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
    const { id } = useParams()
    const [agentDetail, setagentDetail] = useState('')

    useEffect(() => {
        const DetailOfAgentAndDeveloper = async () => {
            setagentDetail(await GetAgentDeveloperDetail('agent', id))
        }
        DetailOfAgentAndDeveloper()
    }, [id])

    // console.log('looking forthis ', agentDetail)
    return (
        <Layout FooterDisplay={true}>
            {agentDetail ?
                <div>
                    <Header
                        coverImage={agentDetail.image}
                        logo={agentDetail.image}
                        agentName={agentDetail.name}
                        agentRating={agentDetail.agent_rating}
                        location={agentDetail.address}
                    />
                    <Container maxWidth="lg" className={classes.mainContainer}>
                        <Grid container spacing={3}>
                            {/* MAIN LONG VERTICAL GRID 1 */}
                            <Grid item xs={12} md={8} >
                                <h1>CONTACT DETAIL</h1>
                                <AgentContactDetail
                                    agentName={agentDetail.name}
                                    email={agentDetail.email}
                                    address={agentDetail.address}
                                    mobilePhone={agentDetail.number}
                                    officePhone={agentDetail.office_no}
                                />

                                {
                                    agentDetail.description &&
                                    <div>
                                        <h1>DESCRIPTION</h1>
                                        <AgentDescription
                                            description={agentDetail.description}
                                        />
                                    </div>
                                }

                                {
                                    (agentDetail.fb_link === '' && agentDetail.twitter_link === '' && agentDetail.youtube_link === '' && agentDetail.insta_link === '' && agentDetail.other_link === '') ? null :
                                        <div>
                                            <h1>SOCIAL PLATFORMS</h1>
                                            <AgentSocialLinks
                                                fb={agentDetail.fb_link}
                                                twitter={agentDetail.twitter_link}
                                                youtube={agentDetail.youtube_link}
                                                instagram={agentDetail.insta_link}
                                                web={agentDetail.other_link}
                                            />
                                        </div>
                                }

                                {
                                    agentDetail.video_link &&
                                    <div>
                                        <h1>AGENT INTERVIEW</h1>
                                        <AgentInterview
                                            agentInterview={agentDetail.video_link}
                                        />
                                    </div>
                                }
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
                </div> :
                <SkeletonForAgentAndDeveloperDetail />
            }
        </Layout>
    );
}
export default AgentDetails;