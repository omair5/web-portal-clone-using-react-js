import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer'>
            <Container maxWidth='lg' className='footer-container'>
                <Grid container >
                    <Grid item xs={6} md={3} >
                        <h4 className='yellow-color'>Get Started</h4>
                        <div className='footer-links'>
                            <p>Add A Property</p>
                            <p>Real Estate Agent</p>
                            <p>Real Estate Developer</p>
                            <p>Explore Properties</p>
                        </div>
                    </Grid>

                    <Grid item xs={6} md={3} >
                        <h4 className='yellow-color'>About</h4>
                        <div className='footer-links'>
                            <p>Blogs</p>
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Area Guide</p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3}  >
                        <h4 className='yellow-color'>Follow Us</h4>
                        <div className='footer-links'>
                            <p> <FontAwesomeIcon icon={faFacebookF} style={{ paddingRight: '2px' }} /> Facebook</p>
                            <p> <FontAwesomeIcon icon={faTwitter} style={{ paddingRight: '5px' }} />Twitter</p>
                            <p><FontAwesomeIcon icon={faYoutube} style={{ paddingRight: '5px' }} />YouTube</p>
                            <p> <FontAwesomeIcon icon={faInstagram} style={{ paddingRight: '5px' }} />Instagram</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <div >
                            <h4 className='yellow-color'>SUBSCRIBE TO OUR NEWSLETTER</h4>
                            <TextField placeholder='ENTER YOUR EMAIL' style={{ outline: '1px solid white', width: '100%', padding: '8px', marginTop: '10px' }} InputProps={{ style: { fontSize: '1.3rem', color: 'white' }, disableUnderline: true }} />
                            <Button variant="contained" style={{ width: '100%', marginTop: '10px', padding: '8px', backgroundColor: 'rgb(252, 184, 22)', color: 'white', fontSize: '1.8rem' }}>SUBSCRIBE</Button>
                        </div>
                    </Grid>
                </Grid>
                <hr className='footer-hr' />
                <div className='footer-log-container'>
                    <Grid container >
                        <Grid item xs={12} md={6} >
                            <div className='footer-log' >
                                <h2>Abaadee.com</h2>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className='footer-copyRights'>
                                <p>Copyright 2020 © All rights Reserved by Abaadee</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}

export default React.memo(Footer);