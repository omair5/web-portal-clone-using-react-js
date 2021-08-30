import React from 'react';
import Slider from "react-slick";
import Container from '@material-ui/core/Container';
import styles from './carouselSlider.module.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState, useEffect } from 'react';
import HomeGetFeatureAgencies from '../../../Services/HomeGetFeatureAgencies';
import { v4 as uuidv4 } from 'uuid';
import SkeletonForFeaturedAgency from '../../SkeletonForFeaturedAgency';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={`${styles.arrows} ${styles.nextArrow}`} onClick={onClick}>
            <NavigateNextIcon />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={`${styles.arrows} ${styles.prevArrow}`} onClick={onClick}>
            <NavigateBeforeIcon />
        </div>
    );
}


const CarouselSlider = () => {
    const [agencyList, setagencyList] = useState([])
    // FETCHING FEATURED AGENCY DATA
    useEffect(() => {
        (
            async () => {
                setagencyList(await HomeGetFeatureAgencies())
            }
        )()
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 1500,
        focusOnSelect: false,
        className: 'slides',
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    return (
        <div className={styles.main_div}>
            <Container maxWidth="md" >
                <h1 className='text-center'> FEATURED AGENCIES </h1>
                <Slider {...settings} className={styles.slider}>
                    {
                        agencyList.length === 0 ?
                            Array(9).fill().map(() => (
                                <SkeletonForFeaturedAgency key={uuidv4()} />
                            ))
                            :
                            agencyList.map((value) => (
                                <div key={uuidv4()}>
                                    <img src={value.f_image} height={150} width={150} alt='' className={styles.imgCenter} />
                                </div>
                            ))
                    }
                </Slider>
            </Container>
        </div>
    );
}
export default React.memo(CarouselSlider);