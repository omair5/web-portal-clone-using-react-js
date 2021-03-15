import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import AbaadeeButton from '../../FrequentlyUsed/Button';
import AutoCompleteTextField from '../../FrequentlyUsed/AutoCompleteTextField';
import RangeBox from '../../FrequentlyUsed/RangeBox';

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

const ExploreSearchs = () => {
    const classes = useStyles();

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
            {/* PRICE RANGE SELECTOR */}
            <RangeBox />

            {/* SEARCH BUTTON  */}
            <AbaadeeButton
                innerContent={'SEARCH'}
                buttonIcon={<SearchIcon style={{ fontSize: '25px' }} />}
            />
        </div >
    );
}

export default React.memo(ExploreSearchs);
