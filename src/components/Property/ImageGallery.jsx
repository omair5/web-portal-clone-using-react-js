import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: `${Ad1}`,
//         thumbnail: `${Ad1}`,
//     },
//     {
//         original: `${Ad2}`,
//         thumbnail: `${Ad2}`,
//     },
//     {
//         original: `${Ad3}`,
//         thumbnail: `${Ad3}`,
//     }, {
//         original: `${Ad4}`,
//         thumbnail: `${Ad4}`,
//     },

// ];

const PropertyImageGallery = ({ images }) => {
    const galleryImages = images.map(value => {
        return {
            original: value.imageurl,
            thumbnail: value.imageurl
        }
    })
    return (
        <>
            <ImageGallery
                items={galleryImages}
                lazyLoad={true}
                showIndex={true}
            />
        </>
    );
}
export default React.memo(PropertyImageGallery);