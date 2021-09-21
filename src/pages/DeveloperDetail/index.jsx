import React from 'react';
import Header from '../../components/DeveloperDetail/Header';
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
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GetAgentDeveloperDetail from '../../Services/GetAgentDeveloperDetail'
import { useState } from 'react';
import SkeletonForAgentAndDeveloperDetail from '../../components/SkeletonForAgentAndDeveloperDetail'
import DeveloperInterview from '../../components/DeveloperDetail/DeveloperInterview';

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
    const { id } = useParams()
    const [developerDetail, setdeveloperDetail] = useState('')

    useEffect(() => {
        const DetailOfAgentAndDeveloper = async () => {
            setdeveloperDetail(await GetAgentDeveloperDetail('developer', id))
        }
        DetailOfAgentAndDeveloper()
        window.scrollTo(0, 0)
    }, [id])

    // console.log('looking forthis ', developerDetail)

    return (
        <Layout FooterDisplay={true}>
            {developerDetail ?
                <div>
                    <Header
                        coverImage={developerDetail.image}
                        logo={developerDetail.image}
                        developerName={developerDetail.name}
                        developerRating={developerDetail.rating}
                        location={developerDetail.address}
                    />
                    <Container maxWidth="lg" className={classes.mainContainer}>
                        <Grid container spacing={3}>
                            {/* MAIN LONG VERTICAL GRID 1 */}
                            <Grid item xs={12} md={8} >
                                <h1>CONTACT DETAIL</h1>
                                <DeveloperContactDetail
                                    developerName={developerDetail.name}
                                    email={developerDetail.email}
                                    address={developerDetail.address}
                                    mobilePhone={developerDetail.p_number}
                                    officePhone={developerDetail.office_number}
                                />

                                {
                                    developerDetail.description &&
                                    <div>
                                        <h1>DESCRIPTION</h1>
                                        <DeveloperDescription
                                            description={developerDetail.description}
                                        />
                                    </div>
                                }



                                {
                                    (developerDetail.facebook_link === '' && developerDetail.twitter_link === '' && developerDetail.youtube_link === '' && developerDetail.insta_ink === '' && developerDetail.other_link === '') ? null :
                                        <div>
                                            <h1>SOCIAL PRESENCE</h1>
                                            <DeveloperSocialLinks
                                                fb={developerDetail.facebook_link}
                                                twitter={developerDetail.twitter_link}
                                                youtube={developerDetail.youtube_link}
                                                instagram={developerDetail.insta_ink}
                                                web={developerDetail.other_link}
                                            />
                                        </div>
                                }

                                {
                                    developerDetail.memberlist.length === 0 ? null :
                                        <div>
                                            <h1>MEMBER</h1>
                                            <MemberOfInstitutions
                                                membersList={developerDetail.memberlist}
                                            />
                                        </div>

                                }

                                {
                                    developerDetail.vedio_link &&
                                    <div>
                                        <h1>DEVELOPER INTERVIEW</h1>
                                        <DeveloperInterview
                                            developerInterview={developerDetail.vedio_link}
                                        />
                                    </div>
                                }

                            </Grid>

                            {/* CONTACT FORM GRID */}
                            <Grid item xs={12} md={4} >
                                <DeveloperContactForm
                                    developer_id={id}
                                    developerName={developerDetail.name}
                                    mobilePhone={developerDetail.p_number}
                                />
                            </Grid>
                        </Grid>

                        {/* DEVELOPER PROJECTS */}
                        {
                            developerDetail.project.length !== 0 &&

                            <div>
                                <h1 className={classes.agentProperties}>DEVELOPER PROJECTS</h1>
                                <DeveloperProperties
                                    DeveloperProjects={developerDetail.project}
                                />
                            </div>
                        }

                    </Container>
                    <GoToTop />
                </div> :
                <SkeletonForAgentAndDeveloperDetail
                    page_name='DEVELOPER'
                    project_or_properties='DEVELOPER PROJECTS'
                />
            }
        </Layout>
    );
}
export default DeveloperDetail;