import styles from './customArrow.module.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={`${styles.arrows} ${styles.nextArrow}`} onClick={onClick}>
            <NavigateNextIcon />
        </div>
    );
}

export function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={styles.arrows} onClick={onClick}>
            <NavigateBeforeIcon />
        </div>
    );
}