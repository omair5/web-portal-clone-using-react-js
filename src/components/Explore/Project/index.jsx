import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCardForProject from '../../FrequentlyUsed/AbaadeeCardForProject';
import AgentDeveloperGetShortDetail from '../../../Services/AgentDeveloperGetShortDetail'
import { useSelector, useDispatch } from 'react-redux';
import SkeletonForPropertyCard from '../../SkeletonForPropertyCard';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'


const ProjectTab = () => {
    const dispatch = useDispatch()
    const projectList = useSelector(state => state.ProjectList)

    // FOR PROJECT SHORT DETAILS
    useEffect(() => {
        const GetShortDetailAgentDeveloperProject = async () => {
            dispatch({ type: 'set_project_list', payload: await AgentDeveloperGetShortDetail('shortproject') })
        }
        GetShortDetailAgentDeveloperProject()
    }, [])

    // GENERATING SLUG 
    const generateSlug = (value) => {
        return value.toLowerCase().replace(/ /g, '-')
    }

    return (
        <>
            <Grid container spacing={3}>
                {
                    projectList.length === 0 ?
                        Array(5).fill().map(() => (
                            <Grid item xs={12} md={6} key={uuidv4()}>
                                <SkeletonForPropertyCard />
                            </Grid>
                        ))
                        :
                        projectList.map((value) => (
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
        </>
    );
}
export default React.memo(ProjectTab);