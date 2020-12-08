import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './newprojects.module.css'
import propertyImage from './images/property.jpeg'
import AbaadeeCards from '../../FrequentlyUsed/AbaadeeCards';

const NewProjects = () => {
    return (
        <Container maxWidth='lg' className={styles.cardMainBox}>
            <h1 className={`${styles.marginBottom} text-center`}>DISCOVER NEW PROJECTS</h1>

            <Grid container spacing={2}>

                {/* CARD 1 */}
                <Grid item xs={12} sm={6} md={4} >
                    <AbaadeeCards
                        buildingName={'BILAL PLAZA'}
                        location={'Malir, Karachi, Pakistan'}
                        squareFeet={460}
                        bed={3}
                        price={'1.39 CRORE'}
                        builderLogo={propertyImage}
                    />
                </Grid>

                {/* CARD 2 */}
                <Grid item xs={12} sm={6} md={4} >
                    <AbaadeeCards
                        buildingName={'BILAL PLAZA'}
                        location={'Malir, Karachi, Pakistan'}
                        squareFeet={460}
                        bed={3}
                        price={'1.39 CRORE'}
                        builderLogo={propertyImage}
                    />
                </Grid>

                {/* CARD 3 */}
                <Grid item xs={12} sm={6} md={4} >
                    <AbaadeeCards
                        buildingName={'BILAL PLAZA'}
                        location={'Malir, Karachi, Pakistan'}
                        squareFeet={460}
                        bed={3}
                        price={'1.39 CRORE'}
                        builderLogo={propertyImage}
                    />
                </Grid>
            </Grid>
        </Container>);

}

export default NewProjects;