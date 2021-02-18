import React from 'react';
import styles from './addproperty.module.css'
import Grid from '@material-ui/core/Grid';

// IMPORT FROM LOCAL COMPONENTS
import Layout from '../../components/Layout/Layout';
import AddPropertyCard from '../../components/AddProperty/AddPropertyCard';
const AddProperty = () => {
    return (
        <>
            <Layout FooterDisplay={true}>
                <div className={styles.MainContainer}>
                    <h1>CHOOSE TYPE</h1>
                    <div className={styles.CardContainer}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={4} >
                                <AddPropertyCard
                                    propertyType='SALE'
                                />
                            </Grid>

                            <Grid item xs={12} md={4} >
                                <AddPropertyCard
                                    propertyType='RENT'
                                />
                            </Grid>

                            <Grid item xs={12} md={4} >
                                <AddPropertyCard
                                    propertyType='WANTED'
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default React.memo(AddProperty);