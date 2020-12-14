import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Advertisement1 from './images/explore 1.jpg'
import Advertisement2 from './images/explore 2.jpg'
import Slider from "react-slick";

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '20px auto',
        height: '100px',
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },

    }
}));
const Advertisement = () => {
    // LOGIC
    const classes = useStyles();
    // CAROUSEL SETTING
    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        className: 'slides',
        cssEase: "linear",
    };

    // USER INTERFACE
    return (
        <>
            <Container maxWidth="md" className={classes.mainContainer}>
                <Slider {...settings}>
                    <img src={Advertisement1} alt="pearl villas" height={100} width={100} />
                    <img src={Advertisement2} alt="gohar residency" height={100} width={100} />
                </Slider>
            </Container>
        </>
    );
}

export default React.memo(Advertisement);