import React from 'react';
import LoaderImageFallback from './Loader.png'
import LoaderImage from './Loader.webp'
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <picture className={styles.LoaderContainer}>
                    <source srcSet={LoaderImage} type="image/webp" />
                    <img src={LoaderImageFallback} alt='Loader' />
                </picture>
            </div>
        </>
    );
}
export default React.memo(Loader);