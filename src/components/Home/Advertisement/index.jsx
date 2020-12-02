import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './advertisement.module.css'
import advertisement1 from './images/advertisement1.jpg'
const Advertisement = () => {
    return (
        <Container maxWidth='lg'>
            <Box className={styles.mainBox} my={3}>
                <Grid container>
                    {/* ADVERTISEMENT 1 */}
                    <Grid item md={6} >
                        <img src={advertisement1} alt="" height='100%' width='100%' />
                    </Grid>
                    {/* ADVERTISEMENT 2 */}
                    <Grid item md={6}>
                        <img src={advertisement1} alt="" height='100%' width='100%' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default React.memo(Advertisement);