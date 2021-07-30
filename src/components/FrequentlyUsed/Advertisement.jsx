import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slider from "react-slick";
import Default from './default.jpg'
import { v4 as uuidv4 } from 'uuid';

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '20px auto',
        maxHeight: '100px',
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    },
    links: {
        textDecoration: 'none',
        outline: 'none',
        margin: 'none'
    }
}));
const Advertisement = ({ advertisements }) => {
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
                    {advertisements.length === 0 ?
                        <img src={Default} alt={'placeholder'} height={100} width={100} />
                        :
                        advertisements.map(value => (
                            <a href={value.redirect_link} target='_blank' rel="noreferrer" className={classes.links} key={uuidv4}>
                                <img src={value.advertisement_image} alt={value.alt_text} height={100} width={'100%'} className={classes.links} />
                            </a>
                        ))
                    }
                </Slider>
            </Container>
        </>
    );
}
export default React.memo(Advertisement);