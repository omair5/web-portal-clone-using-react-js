import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ExpandMore';
import styles from './PriceRangeBox.module.css'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

const AreaRangeBox = ({ RangeMin, RangeMax, heading, unit }) => {
    const [open, setOpen] = useState(false);
    const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
    const [minRange, setminRange] = useState([])
    const [maxRange, setmaxRange] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setminRange(RangeMin)
        setmaxRange(RangeMax)
        dispatch({ type: 'clear_min_value_of_area' })
        dispatch({ type: 'clear_max_value_of_area' })
    }, [RangeMin, RangeMax, dispatch])

    const HandleMinimum = (e) => {
        dispatch({ type: 'set_min_value_of_area', payload: e.target.innerText })
        const selectedValue = +e.target.innerText.replace(/,/g, '')
        const copiedPriceRange = [...RangeMin]
        setmaxRange(copiedPriceRange.filter(value => (+value.replace(/,/g, '') >= selectedValue)))
    }

    const HandleMaximum = (e) => {
        dispatch({ type: 'set_max_value_of_area', payload: e.target.innerText })
        const selectedValue = +e.target.innerText.replace(/,/g, '')
        const copiedPriceRange = [...RangeMax]
        setminRange(copiedPriceRange.filter(value => (+value.replace(/,/g, '') <= selectedValue)))
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
                            <p>{heading} {unit && <span>({unit})</span>}</p>
                        </div>
                        <div className={styles.priceRange}>
                            <p>{minArea}</p>
                            <p>to</p>
                            <p>{maxArea}</p>
                            <ArrowDropDownIcon
                                style={{
                                    marginTop: '7px', fontSize: '25px', color: 'silver', marginRight: '5px'
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
export default React.memo(AreaRangeBox);