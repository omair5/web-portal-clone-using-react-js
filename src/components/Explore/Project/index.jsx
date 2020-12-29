import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbaadeeCards from '../../FrequentlyUsed/AbaadeeCards';
import propertyImage from '../../Home/NewProjects/images/property.jpeg';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles, useStylesBase } from '../../FrequentlyUsed/PaginationStyles'
const ProjectTab = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
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
            <Pagination count={10}
                className={classes.paginationContainer}
                classes={classesBase}
                size="large"
            />
        </>
    );
}

export default React.memo(ProjectTab);