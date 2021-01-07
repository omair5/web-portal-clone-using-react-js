import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './advertisement.module.css'
import advertisement1 from './images/advertisement1.webp'
const Advertisement = () => {
    return (
        <Container maxWidth='lg'>
            <Box className={styles.mainBox} my={3}>
                <Grid container>
                    {/* ADVERTISEMENT 1 */}
                    <Grid item xs={12} md={6} style={{ backgroundColor: 'red' }}>
                        <img src={advertisement1} alt="advertisement1" height='100%' width='100%' />
                    </Grid>
                    {/* ADVERTISEMENT 2 */}
                    <Grid item xs={12} md={6} style={{
                        backgroundColor: 'green'
                    }} >
                        <img src={advertisement1} alt="advertisement2" height='100%' width='100%' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default React.memo(Advertisement);