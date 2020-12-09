import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCards from '../../FrequentlyUsed/AbaadeeCards';
import propertyImage from '../../Home/NewProjects/images/property.jpeg'
const ProjectTab = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <AbaadeeCards
                        buildingName={'BILAL PLAZA'}
                        location={'Malir, Karachi, Pakistan'}
                        squareFeet={460}
                        bed={3}
                        price={'1.39 CRORE'}
                        builderLogo={propertyImage}
                        MainBox={{ maxWidth: '95%' }} />
                </Grid>
            </Grid>
        </>
    );
}

export default ProjectTab;