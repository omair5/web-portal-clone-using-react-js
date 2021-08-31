import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FooterImage from './LoaderFooter.png'
import { Link } from 'react-router-dom'
import AppleIcon from '@material-ui/icons/Apple';
import PlayStoreIcon from './playstore.png'


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
                            <h4 className='get-app'>Get The Abaadee's App</h4>
                            {/* <TextField placeholder='ENTER YOUR EMAIL' style={{ outline: '1px solid white', width: '100%', padding: '8px', marginTop: '10px' }} InputProps={{ style: { fontSize: '1.3rem', color: 'white' }, disableUnderline: true }} /> */}
                            <a className='app-btn' href={'https://play.google.com/store/apps/details?id=com.abaadee.app'} target='_blank' rel="noreferrer">
                                <div ><img src={PlayStoreIcon} alt="playstore" height={25} width={25} style={{ marginRight: '5px' }} /> </div>
                                <div><span className='storeHeading'>GET IT ON</span> <br /> <span className='storeName'>Google Play</span> </div>
                            </a>

                            <a className='app-btn' href={'https://apps.apple.com/sa/app/abaadee/id1531668953'} target='_blank' rel="noreferrer">
                                <div ><AppleIcon style={{ fontSize: '30px', marginRight: '7px' }} /></div>
                                <div><span className='storeHeading'>Download on the</span> <br /> <span className='storeName'>App Store</span> </div>
                            </a>

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