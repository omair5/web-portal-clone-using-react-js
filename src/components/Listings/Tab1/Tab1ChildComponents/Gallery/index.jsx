import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import Slider from "react-slick";
import GalleryImage from './images/galleryimage.jpg'
import { useDispatch } from 'react-redux'
import SimpleModal from './SimpleModal'
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows'


const useStyles = makeStyles(theme => ({
    MainContainer: {
        margin: '15px auto',
        position: 'relative',
    },
    icon: {
        fontSize: '20px',
        color: '#fcb812'

    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        "& p": {
            marginLeft: '10px',
            fontWeight: 'bolder'
        }
    },
    SliderContainer: {
        margin: '15px 0px',
    },
    SliderChild: {
        cursor: 'pointer',
        "&:focus": {
            outline: 'none'
        }
    },
    picture: {
        width: '90%',
        margin: 'auto'
    },
    justCheck: {
        backgroundColor: 'orange'
    }

}));

const Gallery = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const HandleClick = () => {
        dispatch({ type: 'openCarouselGallery' })
    }

    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        className: 'slides',
        cssEase: "linear",
        lazyLoad: 'progressive',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };

    return (
        <>
            <Paper style={{ overflow: 'hidden' }}>
                <Container maxWidth="lg" className={classes.MainContainer} >
                    <div className={classes.iconContainer}>
                        <CropOriginalIcon className={classes.icon} />
                        <p>Gallery</p>
                    </div>
                    <div className={classes.SliderContainer}>
                        <Slider {...settings} >
                            <div className={classes.SliderChild} >
                                <img src={GalleryImage} alt="plot" className={classes.picture} onClick={HandleClick} />
                            </div>
                            <div className={classes.SliderChild}>
                                <img src={GalleryImage} alt="plot" className={classes.picture} onClick={HandleClick} />
                            </div>
                            <div className={classes.SliderChild}>
                                <img src={GalleryImage} alt="plot" className={classes.picture} onClick={HandleClick} />
                            </div>
                            <div className={classes.SliderChild}>
                                <img src={GalleryImage} alt="plot" className={classes.picture} onClick={HandleClick} />
                            </div>
                            <div className={classes.SliderChild}>
                                <img src={GalleryImage} alt="plot" className={classes.picture} onClick={HandleClick} />
                            </div>
                        </Slider>
                    </div>
                </Container>
                <SimpleModal />
            </Paper>
        </>
    );
}

export default React.memo(Gallery);