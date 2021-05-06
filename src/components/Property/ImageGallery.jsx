import React from 'react';
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
import "react-image-gallery/styles/css/image-gallery.css";
import Ad1 from './Ad1.jpg'
import Ad2 from './Ad2.jpg'
import Ad3 from './Ad3.jpg'
import Ad4 from './Ad4.png'


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        // backgroundColor: 'pink',
        // width: '100%',
        // height: '100%'
    }
}));

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        originalClass: 'check'

    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        originalClass: 'check'

    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        originalClass: 'check'

    },
    {
        original: `${Ad1}`,
        thumbnail: `${Ad1}`,
        originalClass: 'check'

    },
    {
        original: `${Ad2}`,
        thumbnail: `${Ad2}`,
        originalClass: 'check'

    },
    {
        original: `${Ad3}`,
        thumbnail: `${Ad3}`,
        originalClass: 'check'

    }, {
        original: `${Ad4}`,
        thumbnail: `${Ad4}`,
        originalClass: 'check'

    },

];

const PropertyImageGallery = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mainContainer}>
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