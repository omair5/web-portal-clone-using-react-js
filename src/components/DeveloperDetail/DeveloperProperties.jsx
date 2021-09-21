import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCardForProject from '../FrequentlyUsed/AbaadeeCardForProject'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'



const DeveloperProperties = ({ DeveloperProjects }) => {

    // GENERATING SLUG 
    const generateSlug = (value) => {
        return value.trim().toLowerCase().replace(/ /g, '-')
    }

    return (
        <>
            <Grid container spacing={3}>
                {
                    DeveloperProjects.map((value) => (
                        <Grid item xs={12} md={6} lg={4} key={uuidv4()}>
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
export default React.memo(DeveloperProperties);