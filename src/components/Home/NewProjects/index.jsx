import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './newprojects.module.css'
import AbaadeeCardForProject from '../../FrequentlyUsed/AbaadeeCardForProject';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import SkeletonForPropertyCard from '../../SkeletonForPropertyCard';
import GetNewProjects from '../../../Services/AgentDeveloperGetShortDetail'
import { useEffect } from 'react';

const NewProjects = () => {
    const [projects, setProjects] = useState([])

    // FETCHING PROJECTS 
    useEffect(() => {
        (
            async () => {
                if (localStorage.getItem("home_new_projects")) {
                    setProjects(JSON.parse(localStorage.getItem("home_new_projects")))
                }
                else {
                    const response = await GetNewProjects('project', 'homeproject')
                    setProjects(response)
                    localStorage.setItem("home_new_projects", JSON.stringify(response));
                }
            }
        )()
    }, [])

    // GENERATING SLUG 
    const generateSlug = (value) => {
        return value.toLowerCase().replace(/ /g, '-')
    }

    return (
        <Container maxWidth='lg' className={styles.cardMainBox}>
            <h1 className={`${styles.marginBottom} text-center`}>DISCOVER NEW PROJECTS</h1>

            <Grid container spacing={2}>
                {
                    projects.length === 0 ?
                        Array(3).fill().map(() => (
                            <Grid item xs={12} sm={12} md={4} key={uuidv4()}>
                                <SkeletonForPropertyCard />
                            </Grid>
                        )) :
                        projects.map(value => (
                            <Grid item xs={12} sm={12} md={6} lg={4} key={uuidv4()}>
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
        </Container>);

}
export default React.memo(NewProjects);