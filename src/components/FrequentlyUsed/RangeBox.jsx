import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ExpandMore';
import styles from './PriceRangeBox.module.css'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { v4 as uuidv4 } from 'uuid';

const RangeBox = ({ Range, heading }) => {
    const [open, setOpen] = useState(false);
    const [minimumValue, setminimumValue] = useState('0')
    const [maximumValue, setmaximumValue] = useState('Any')
    const [minRange, setminRange] = useState(Range)
    const [maxRange, setmaxRange] = useState(Range)
    // const [bgcolor, setbgcolor] = useState(false)

    const HandleMinimum = (e) => {
        setminimumValue(e.target.innerText)
        const selectedValue = +e.target.innerText
        const copiedPriceRange = [...Range]
        setmaxRange(copiedPriceRange.filter(value => (value > selectedValue)))
    }

    const HandleMaximum = (e) => {
        setmaximumValue(e.target.innerText)
        const selectedValue = +e.target.innerText
        const copiedPriceRange = [...Range]
        setminRange(copiedPriceRange.filter(value => (value < selectedValue)))
    }

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className={styles.tab_slider} id='RangeBoxParent'>
                    <div onClick={handleClick}>
                        <div className={styles.mylabel}>
                            <p>{heading}</p>
                        </div>
                        <div className={styles.priceRange}>
                            <p>{minimumValue}</p>
                            <p>to</p>
                            <p>{maximumValue}</p>
                            <ArrowDropDownIcon
                                style={{
                                    marginTop: '7px', fontSize: '25px', color: 'silver',marginRight:'5px'
                                }}
                            />
                        </div>
                    </div>
                    {open &&
                        <div className={`${styles.priceBox}`} id='RangeBoxChild'>

                            <div className={styles.priceHeading}>
                                <h5>MIN</h5>
                                <div className={styles.priceValues} onClick={(e) => HandleMinimum(e)}>
                                    {minRange.map((value) => (
                                        <p key={uuidv4()}>{value}</p>
                                    ))}
                                </div >
                            </div >

                            <div className={styles.priceHeading} >
                                <h5>MAX</h5>
                                <div className={styles.priceValues} onClick={(e) => HandleMaximum(e)}>
                                    {maxRange.map(value => (
                                        <p key={uuidv4()}>{value}</p>
                                    ))}
                                </div>
                            </div >
                        </div >
                    }
                </div >
            </ClickAwayListener>
        </>
    );
}
export default React.memo(RangeBox);