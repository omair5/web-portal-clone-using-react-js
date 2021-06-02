import React from 'react';
import LoaderImage from './Loader.png'
import LoaderSmallScreen from './LoaderSmallScreen.png'
import styles from './Loader.module.css'
import Footer from './LoaderFooter.png'
const Loader = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <picture className={styles.LoaderContainer}>
                    <source srcSet={`${LoaderSmallScreen} 400w, ${LoaderSmallScreen} 650w, ${LoaderImage} 1200w `} />
                    <img src={LoaderImage} alt='Loader' />
                </picture>
            </div>
            <div>
                <img src={Footer} alt="pakistan skyline" className={styles.footer} />
            </div>
        </>
    );
}
export default React.memo(Loader);