import React from 'react';
import Slider from "react-slick";
import Container from '@material-ui/core/Container';
import styles from './carouselSlider.module.css'
import carousel2 from './images/carousel2.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "silver", borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "silver", borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}


const CarouselSlider = () => {
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
                    <div >
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                    <div>
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                    <div>
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                    <div>
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                    <div>
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                    <div>
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                    <div>
                        <img src={carousel2} height={150} width={150} alt='' className={styles.imgCenter} />
                    </div>
                </Slider>
            </Container>
        </div>
    );

}

export default React.memo(CarouselSlider);