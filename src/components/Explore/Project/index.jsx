import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCardForProject from '../../FrequentlyUsed/AbaadeeCardForProject';
import { useSelector } from 'react-redux';
import SkeletonForPropertyCard from '../../SkeletonForPropertyCard';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import NoPropertyFound from '../../FrequentlyUsed/NoPropertyFound';
import AgentDeveloperGetShortDetail from '../../../Services/AgentDeveloperGetShortDetail'
import { useDispatch } from 'react-redux';


const ProjectTab = () => {
    const dispatch = useDispatch()
    const projectList = useSelector(state => state.ProjectList)
    const ProjectCardSkeleton = useSelector(state => state.Explore_Project_list_Skeleton)
    const ShowMessage = useSelector(state => state.Explore_Project_Not_Found_Message)
    const Explore_RunThisEffectOnMount_ForProject = useSelector(state => state.Explore_RunThisEffectOnMount_ForProject)

    // EXPLORE-----FETCHING PROJECT LIST
    useEffect(() => {
        let mounted = true
        if (Explore_RunThisEffectOnMount_ForProject) {
            const GetShortDetailAgentDeveloperProject = async () => {
                if (mounted) {
                    if (localStorage.getItem("project_card_data")) {
                        dispatch({ type: 'set_project_list', payload: JSON.parse(localStorage.getItem("project_card_data")) })
                        dispatch({ type: 'hide_project_list_skeleton' })
                        // dispatch({ type: 'project_listings_are_found_hide_message' })
                    }
                    else {
                        const projectResponse = await AgentDeveloperGetShortDetail('project', 'shortproject')
                        if (projectResponse.length !== 0) {
                            dispatch({ type: 'set_project_list', payload: projectResponse })
                            dispatch({ type: 'hide_project_list_skeleton' })
                            // dispatch({ type: 'project_listings_are_found_hide_message' })
                            localStorage.setItem("project_card_data", JSON.stringify(projectResponse));
                        }
                        else {
                            dispatch({ type: 'hide_project_list_skeleton' })
                            dispatch({ type: 'set_project_list', payload: projectResponse })
                            dispatch({ type: 'no_project_listings_are_found_show_message' })
                        }
                    }
                }
            }
            GetShortDetailAgentDeveloperProject().catch(err => console.log(err))
        }

        // cancel subscription to useEffect
        return () => {
            mounted = false;
        }
    }, [dispatch, Explore_RunThisEffectOnMount_ForProject])


    // GENERATING SLUG 
    const generateSlug = (value) => {
        return value.trim().toLowerCase().replace(/ /g, '-')
    }

    // THIS EFFECT WILL RUN ONLY WHEN COMPONENT UNMOUNTS
    useEffect(() => {
        return () => {
            dispatch({ type: 'run_useeffect_on_mount_for_project_tab' })
            dispatch({ type: 'project_listings_are_found_hide_message' })
            console.log('unmount')
        };
    }, [dispatch]);

    return (
        <>
            {/* SHOW MESSGAE NO PROJECT FOUND */}
            {
                ShowMessage && <NoPropertyFound />
            }
            {
                ShowMessage ? <p className="text-center margin-similar-search">Showing Similar Search Results</p> : null

            }
            <Grid container spacing={3} className={'gridMargin'}>
                {
                    ProjectCardSkeleton &&
                    Array(5).fill().map(() => (
                        <Grid item xs={12} md={6} key={uuidv4()}>
                            <SkeletonForPropertyCard />
                        </Grid>
                    ))
                }


                {/* PROJECT LIST */}
                {projectList.length !== 0 &&
                    projectList.reverse().map((value) => (
                        <Grid item xs={12} md={8} lg={6} key={uuidv4()}>
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


        </>
    );
}
export default React.memo(ProjectTab);