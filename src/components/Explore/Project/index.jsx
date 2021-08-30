import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCardForProject from '../../FrequentlyUsed/AbaadeeCardForProject';
import { useSelector } from 'react-redux';
import SkeletonForPropertyCard from '../../SkeletonForPropertyCard';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import NoPropertyFound from '../../FrequentlyUsed/NoPropertyFound';


const ProjectTab = () => {
    const projectList = useSelector(state => state.ProjectList)
    const ProjectCardSkeleton = useSelector(state => state.Explore_Project_list_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Project_Not_Found_Message)

    // // FOR PROJECT SHORT DETAILS
    // useEffect(() => {
    //         const GetShortDetailAgentDeveloperProject = async () => {
    //             const projectResponse = await AgentDeveloperGetShortDetail('project', 'shortproject')
    //             console.log('this is from useEffect ', projectResponse)
    //             if (projectResponse.length !== 0) {
    //                 dispatch({ type: 'set_project_list', payload: projectResponse })
    //                 dispatch({ type: 'hide_project_list_skeleton' })
    //                 dispatch({ type: 'project_listings_are_found_hide_message' })
    //             }
    //             else {
    //                 dispatch({ type: 'hide_project_list_skeleton' })
    //                 dispatch({ type: 'set_project_list', payload: projectResponse })
    //                 dispatch({ type: 'no_project_listings_are_found_show_message' })
    //             }
    //         }
    //         GetShortDetailAgentDeveloperProject()
    // }, [dispatch])

    // GENERATING SLUG 
    const generateSlug = (value) => {
        return value.toLowerCase().replace(/ /g, '-')
    }

    return (
        <>
            <Grid container spacing={3}>
                {
                    ProjectCardSkeleton &&
                    Array(5).fill().map(() => (
                        <Grid item xs={12} md={6} key={uuidv4()}>
                            <SkeletonForPropertyCard />
                        </Grid>
                    ))
                }
                {projectList.length !== 0 &&
                    projectList.reverse().map((value) => (
                        <Grid item xs={12} md={6} key={uuidv4()}>
                            <Link to={`/project/${generateSlug(value.project_name)}/${value.project_id}`} style={{ textDecoration: 'none' }}>
                                <AbaadeeCardForProject
                                    city={value.city.city_name}
                                    location={value.location.location_name}
                                    price={value.price}
                                    cover_image={value.project_cover_image}
                                    logo={value.project_logo_image}
                                    projectName={value.project_name}
                                />
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>

            {/* SHOW MESSGAE NO PROJECT FOUND */}
            {
                ShowMessage && <NoPropertyFound />
            }
        </>
    );
}
export default React.memo(ProjectTab);