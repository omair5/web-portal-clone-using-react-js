import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FooterImage from './LoaderFooter.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>
            <Container maxWidth='lg' className='footer-container'>
                <Grid container >
                    <Grid item xs={6} md={3} >
                        <h4 className='yellow-color'>Get Started</h4>
                        <div className='footer-links'>
                            <p><Link to='/add-property' className='link'> Add A Property</Link></p>
                            <p><Link to='/agents' className='link'> Real Estate Agent</Link></p>
                            <p><Link to='/developers' className='link'> Real Estate Developer</Link></p>
                            <p><Link to='/explore' className='link'> Explore Properties</Link></p>
                        </div>
                    </Grid>

                    <Grid item xs={6} md={3} >
                        <h4 className='yellow-color'>About</h4>
                        <div className='footer-links'>
                            <p><Link to='/blogs' className='link'> Blogs</Link></p>
                            <p><Link to='/contact' className='link'> Contact Us</Link></p>
                            <p><Link to='/about' className='link'> About Us</Link></p>
                            <p><Link to='/partners' className='link'> Partners</Link></p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3} className='wrap3'>
                        <h4 className='yellow-color'>Follow Us</h4>
                        <div className='footer-links'>
                            <p> <FontAwesomeIcon icon={faFacebookF} style={{ paddingRight: '2px' }} /><a className='link' href={'https://www.facebook.com/abaadeepk/'} target='_blank' rel="noreferrer"> Facebook</a></p>
                            <p> <FontAwesomeIcon icon={faTwitter} style={{ paddingRight: '5px' }} /><a className='link' href={'https://www.youtube.com/channel/UCYwDTTwUG6FvTCO6gqCLUxQ/videos'} target='_blank' rel="noreferrer"> Youtube</a></p>
                            <p><FontAwesomeIcon icon={faYoutube} style={{ paddingRight: '5px' }} /><a className='link' href={'https://twitter.com/abaadeepk?lang=en'} target='_blank' rel="noreferrer"> Twitter</a></p>
                            <p> <FontAwesomeIcon icon={faInstagram} style={{ paddingRight: '5px' }} /><a className='link' href={'https://www.instagram.com/abaadeepk/?hl=en'} target='_blank' rel="noreferrer"> Instagram</a></p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} className='wrap4'>
                        <div >
                            <h4 className='yellow-color'>SUBSCRIBE TO OUR NEWSLETTER</h4>
                            <TextField placeholder='ENTER YOUR EMAIL' style={{ outline: '1px solid white', width: '100%', padding: '8px', marginTop: '10px' }} InputProps={{ style: { fontSize: '1.3rem', color: 'white' }, disableUnderline: true }} />
                            <Button variant="contained" style={{ width: '100%', marginTop: '10px', padding: '8px', backgroundColor: 'rgb(252, 184, 22)', color: 'white', fontSize: '1.8rem' }}>SUBSCRIBE</Button>
                        </div>
                    </Grid>
                </Grid>
                {/* <hr className='footer-hr' /> */}
            </Container>
            <div className='footer-image'>
                <img src={FooterImage} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className='footer-log-container'>
                <p>Copyright 2021 © All rights Reserved by Abaadee.com</p>
            </div>
        </div >
    );
}

export default React.memo(Footer);