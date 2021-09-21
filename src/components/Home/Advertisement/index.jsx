import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './advertisement.module.css'
import { useEffect } from 'react';
import getAdvertisements from '../../../Services/GetAdvertisements';
import Default from '../../FrequentlyUsed/default.jpg'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Advertisement = () => {
    const [advertisement, setAdvertisement] = useState([])

    useEffect(() => {
        const AdvertisementGet = async () => {
            if (localStorage.getItem("home_advertisement")) {
                setAdvertisement(JSON.parse(localStorage.getItem("home_advertisement")))
            }
            else {
                const response = await getAdvertisements('Home').catch(err => console.log(err))
                setAdvertisement(response)
                localStorage.setItem("home_advertisement", JSON.stringify(response));
            }
        }
        AdvertisementGet()
    }, [])

    return (
        <Container maxWidth='lg'>
            <Box className={styles.mainBox} my={3}>
                <Grid container>
                    {advertisement.length === 0 ?
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <img src={Default} alt="advertisement1" height={'150px'} width='100%' />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <img src={Default} alt="advertisement2" height={'150px'} width='100%' />
                            </Grid>
                        </Grid>
                        :
                        advertisement.map((value) => (
                            <Grid item xs={12} md={6} key={uuidv4()}>
                                <a href={value.redirect_link} target='_blank' rel="noreferrer" className={styles.links} >
                                    <img src={value.advertisement_image} alt={value.alt_text} height='150px' width='100%' className={styles.links} />
                                </a>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
}
export default React.memo(Advertisement);