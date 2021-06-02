import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles, useStylesBase } from '../../FrequentlyUsed/PaginationStyles'
import AbaadeeCardForProject from '../../FrequentlyUsed/AbaadeeCardForProject';

const ProjectTab = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <AbaadeeCardForProject />
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