import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import AbaadeeButton from '../../FrequentlyUsed/Button';
import AutoCompleteTextField from '../../FrequentlyUsed/AutoCompleteTextField';

// FOR GENERAL
const useStyles = makeStyles(theme => ({
    PriceSlider: {
        width: '100%',
        height: '50px',
        margin: '5px 0px',
        '& p': {
            fontSize: '15px',
            fontWeight: 'bolder'
        }
    }
}));
// FOR SLIDER
function valuetext(value) {
    return `${value}°C`;
}

const ExploreSearchs = () => {
    const classes = useStyles();
    // FOR SLIDER
    const [value, setValue] = React.useState([0, 18000000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.MainContainer}>
            {/*LOCATION  */}
            <AutoCompleteTextField
                id="combo-box-demo1"
                label="Location"
                style={{ margin: '7px 0px' }}
            />
            {/* CITY */}
            <AutoCompleteTextField
                id="combo-box-demo2"
                label="City"
                style={{ margin: '7px 0px' }}
            />
            {/* PROPERTY TYPE */}
            <AutoCompleteTextField
                id="combo-box-demo3"
                label="Property Type"
                style={{ margin: '7px 0px' }}
            />
            {/* Area Unit */}
            <AutoCompleteTextField
                id="combo-box-demo4"
                label="Area Unit"
                style={{ margin: '7px 0px' }}
            />
            {/* BEDS */}
            <AutoCompleteTextField
                id="combo-box-demo5"
                label="Beds"
                style={{ margin: '7px 0px' }}
            />
            {/* TOTAL ROOMS */}
            <AutoCompleteTextField
                id="combo-box-demo6"
                label="Total Rooms"
                style={{ margin: '7px 0px' }}
            />
            {/* RANGE SLIDER */}
            <div >
                <div className={classes.PriceSlider} >
                    <p>Price Range</p>
                    <p>PKR <span className='yellow'>{value[0]}</span> — PKR <span className='yellow'>{value[1]}</span></p>
                </div>
                <Slider
                    value={value}
                    onChange={handleChange}
                    // valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    min={0}
                    step={1000}
                    max={18000000}
                    style={{ color: 'rgb(252, 184, 22)' }}
                />
            </div>
            {/* SEARCH BUTTON  */}
            <AbaadeeButton
                innerContent={'SEARCH'}
                buttonIcon={<SearchIcon style={{ fontSize: '25px' }} />}
            />
        </div >
    );
}

export default React.memo(ExploreSearchs);
