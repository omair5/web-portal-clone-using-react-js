import React, { useRef, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styles from './PriceRangeBox.module.css'
const PriceRangeBox = () => {
    const [priceContainer, setpriceContainer] = useState(false);
    const [minimumValue, setminimumValue] = useState('0')
    const [maximumValue, setmaximumValue] = useState('10 crore')
    const [minbg, setminbg] = useState(0)
    const [maxbg, setmaxbg] = useState(0)
    const boxRef = useRef(null)

    const HandleMinimum = (e) => {
        setminimumValue(e.target.innerText)
        setminbg(parseInt(e.target.id))
    }

    const HandleMaximum = (e) => {
        setmaximumValue(e.target.innerText)
        setmaxbg(parseInt(e.target.id))

    }
    return (
        <>
            <div className={styles.tab_slider} >
                <div onClick={() => setpriceContainer(!priceContainer)}>
                    {console.log('this is price container state', priceContainer)}
                    <div className={styles.mylabel}>
                        <p>Price Range (PKR)</p>
                    </div>
                    <div className={styles.priceRange}>
                        <p>{minimumValue}</p>
                        <p>to</p>
                        <p>{maximumValue}</p>
                        <ArrowDropDownIcon />
                    </div>
                </div>
                {priceContainer &&
                    <div className={`${styles.priceBox} custom-scroll`} ref={boxRef} id='rangebox'>
                        {/* MIN VALUES */}
                        <div className={styles.priceHeading}>
                            <h5>MIN</h5>
                            <div className={styles.priceValues} onClick={(e) => HandleMinimum(e)}>
                                <p id={1} style={{ backgroundColor: minbg === 1 ? '#fcb812' : 'transparent' }}>30 lac</p>
                                <p id={2} style={{ backgroundColor: minbg === 2 ? '#fcb812' : 'transparent' }}>40 lac</p>
                                <p id={3} style={{ backgroundColor: minbg === 3 ? '#fcb812' : 'transparent' }}>50 lac</p>
                                <p id={4} style={{ backgroundColor: minbg === 4 ? '#fcb812' : 'transparent' }}>60 lac</p>
                                <p id={5} style={{ backgroundColor: minbg === 5 ? '#fcb812' : 'transparent' }}>70 lac</p>
                                <p id={6} style={{ backgroundColor: minbg === 6 ? '#fcb812' : 'transparent' }}>80 lac</p>
                                <p id={7} style={{ backgroundColor: minbg === 7 ? '#fcb812' : 'transparent' }}>90 lac</p>
                            </div >
                        </div >
                        {/* MAX VALUES */}
                        <div div className={styles.priceHeading} >
                            <h5>MAX</h5>
                            <div className={styles.priceValues} onClick={(e) => HandleMaximum(e)}>
                                <p id={1} style={{ backgroundColor: maxbg === 1 ? '#fcb812' : 'transparent' }}>5 crore</p>
                                <p id={2} style={{ backgroundColor: maxbg === 2 ? '#fcb812' : 'transparent' }}>6 crore</p>
                                <p id={3} style={{ backgroundColor: maxbg === 3 ? '#fcb812' : 'transparent' }}>7 crore</p>
                                <p id={4} style={{ backgroundColor: maxbg === 4 ? '#fcb812' : 'transparent' }}>8 crore</p>
                                <p id={5} style={{ backgroundColor: maxbg === 5 ? '#fcb812' : 'transparent' }}>9 crore</p>
                                <p id={6} style={{ backgroundColor: maxbg === 6 ? '#fcb812' : 'transparent' }}>10 crore</p>
                                <p id={7} style={{ backgroundColor: maxbg === 7 ? '#fcb812' : 'transparent' }}>11 crore</p>
                                <p id={8} style={{ backgroundColor: maxbg === 8 ? '#fcb812' : 'transparent' }}>12 crore</p>
                            </div>
                        </div >
                    </div >
                }
            </div >
        </>
    );
}

export default React.memo(PriceRangeBox);