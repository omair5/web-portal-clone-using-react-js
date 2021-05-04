import React from 'react';
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
import "react-image-gallery/styles/css/image-gallery.css";
import Ad1 from './Ad1.jpg'



const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        originalClass:'check'
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

];

// const useStyles = makeStyles((theme) => ({

// }));

const PropertyImageGallery = () => {
    // const classes = useStyles();

    return (
        <>
            <div >
                <ImageGallery
                    items={images}
                    lazyLoad={true}
                    showIndex={true}
                />
            </div>
        </>
    );
}

export default PropertyImageGallery;