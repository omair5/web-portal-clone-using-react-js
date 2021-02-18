import React, { useEffect, useState } from 'react';
import styles from './gototop.module.css'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
const GoToTop = () => {
    const [goToTop, setGoToTop] = useState(false)
    const HandleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const testing = () => {
        if (!goToTop && window.pageYOffset >= 200) {
            setGoToTop(true)
        }
        else if (goToTop && window.pageYOffset < 200) {
            setGoToTop(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', testing)
        // cleanup this component
        return () => {
            document.removeEventListener('scroll', testing);
        };
    })

    return (
        <>
            {goToTop ?
                <div className={styles.gotoTop} onClick={HandleTop}>
                    <ExpandLessRoundedIcon className={styles.UpArrow} style={{ fontSize: '40px' }} />
                </div>
                : null}
        </>
    );
}
export default React.memo(GoToTop);