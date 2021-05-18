import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Ad1 from './Ad1.jpg'
import Ad2 from './Ad2.jpg'
import Ad3 from './Ad3.jpg'
import Ad4 from './Ad4.png'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: `${Ad1}`,
        thumbnail: `${Ad1}`,
    },
    {
        original: `${Ad2}`,
        thumbnail: `${Ad2}`,
    },
    {
        original: `${Ad3}`,
        thumbnail: `${Ad3}`,
    }, {
        original: `${Ad4}`,
        thumbnail: `${Ad4}`,
    },

];

const PropertyImageGallery = () => {
    return (
        <>
            <ImageGallery
                items={images}
                lazyLoad={true}
                showIndex={true}
            />
        </>
    );
}
export default PropertyImageGallery;