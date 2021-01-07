import React, { useEffect, useRef, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styles from './PriceRangeBox.module.css'
const PriceRangeBox = () => {
    const [priceContainer, setpriceContainer] = useState(false);
    const [minimumValue, setminimumValue] = useState('0')
    const [maximumValue, setmaximumValue] = useState('10 crore')
    const [minbg, setminbg] = useState(0)
    const [maxbg, setmaxbg] = useState(0)
    const searchRef = useRef(null)

    const HandleMinimum = (e) => {
        setminimumValue(e.target.innerText)
        setminbg(parseInt(e.target.id))
    }

    const HandleMaximum = (e) => {
        setmaximumValue(e.target.innerText)
        setmaxbg(parseInt(e.target.id))

    }

    useEffect(() => {
        document.addEventListener('click', function (e) {
            if ((e.target.parentElement.className === 'PriceRangeBox_priceRange__ulkxQ') || (e.target.parentElement.className === 'PriceRangeBox_priceValues__4zsF_') || (e.target.className === 'PriceRangeBox_priceBox__1jyZb custom-scroll') || (e.target.parentElement.className === 'PriceRangeBox_priceHeading__2LgRW')) {
                return
            }
            else {
                setpriceContainer(false)
            }
        })
    }, [searchRef])

    return (
        <>
            <div className={styles.tab_slider} id='RangeBoxParent'>
                <div onClick={() => setpriceContainer(!priceContainer)}>
                    <div className={styles.mylabel}>
                        <p>Price Range (PKR)</p>
                    </div>
                    <div className={styles.priceRange}>
                        <p>{minimumValue}</p>
                        <p>to</p>
                        <p>{maximumValue}</p>
                        <ArrowDropDownIcon style={{ marginTop: '7px', fontSize: '20px' }} />
                    </div>
                </div>
                {priceContainer &&
                    <div className={`${styles.priceBox} custom-scroll`} ref={searchRef} id='RangeBoxChild'>

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