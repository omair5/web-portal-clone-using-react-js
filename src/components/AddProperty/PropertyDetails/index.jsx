import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
var converter = require('number-to-words');


const useStylesBase = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(59, 70, 86)"
        }
    },
}));

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                border: "2px solid rgb(59, 70, 86)" // customized
            }
        }
    },
    mainHeading: {
        backgroundColor: '#fcb812',
        color: 'black',
        padding: '10px',
        margin: '30px 0px'
    },
    mainContainer: {
        margin: '20px auto',
    },
    inputfield: {
        margin: '10px 0px',
        width: '100%',
    },
    wrapperContainer: {
        "& p": {
            color: 'rgb(76, 84, 85)',
            fontWeight: 'bolder',
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    },
    inputStyles: {
        fontSize: '15px',
        padding: '13px 10px'
    },
    inputStylesForWording: {
        color: 'gray',
        fontWeight: 'bolder',
        fontSize: '15px',
        padding: '13px 10px'
    },
    halfInputField: {
        width: '50%'
    },
    fullInputField: {
        width: '100%'
    },
    landAreaContainer: {
        margin: '10px 0px',
        width: '100%',
        padding: '13px 2px',
        borderColor: 'silver',
        borderRadius: '5px',
        "&:focus": {
            outline: 'none'
        },
    },
    mb15: {
        marginBottom: '15px'
    }
}));

const PropertyDetails = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    const dispatch = useDispatch()

    // -------------------- STATES
    const title = useSelector(state => state.PropertyDetails_Title)
    const description = useSelector(state => state.PropertyDetails_Description)
    const price = useSelector(state => state.PropertyDetails_Price)
    const landArea = useSelector(state => state.PropertyDetails_LandArea)
    const areaUnit = useSelector(state => state.PropertyDetails_AreaUnit)
    const [priceInWords, setpriceInWords] = useState('Price must contain numbers only')
    console.log(areaUnit)

    // -------------------- HANDLE CALLBACKS
    // HandleTitle
    const HandleTitle = (e) => {
        dispatch({ type: 'set_property_details_title', payload: e.target.value })
    }
    // HandleDescription
    const HandleDescription = (e) => {
        dispatch({ type: 'set_property_details_description', payload: e.target.value })
    }
    // HandlePrice
    const HandlePrice = (e) => {
        if (isNaN(e.target.value)) {
            return
        }
        else {
            dispatch({ type: 'set_property_details_price', payload: e.target.value })
            if (isFinite(1000 / e.target.value)) {
                setpriceInWords(converter.toWords(e.target.value));
            }
            else {
                setpriceInWords('Price must contain numbers only');
            }
        }
    }
    // HandleLandArea
    const HandleLandArea = (e) => {
        if (isNaN(e.target.value)) {
            return
        }
        else {
            dispatch({ type: 'set_property_details_land_area', payload: e.target.value })
        }
    }
    // HandleAreaUnit
    const HandleAreaUnit = (e) => {
        dispatch({ type: 'set_property_details_area_unit', payload: e.target.value })
    }
    return (
        <>
            <h4 className={classes.mainHeading}>PROPERTY DETAILS</h4>
            <Container maxWidth="sm" className={classes.mainContainer}>
                {/* PROPERTY TITLE */}
                <div className={`${classes.wrapperContainer} ${classes.mb15}`}>
                    <p>Property Title * </p>
                    <TextField
                        value={title}
                        onChange={HandleTitle}
                        id="property-title"
                        variant="outlined"
                        fullWidth={true}
                        className={classes.inputfield}
                        classes={classesBase}
                        inputProps={{
                            className: classes.inputStyles,
                        }}
                    />
                </div>

                {/* PROPERTY Description */}
                <div className={`${classes.wrapperContainer} ${classes.mb15}`}>
                    <p>Description * </p>
                    <TextField
                        value={description}
                        onChange={HandleDescription}
                        variant="outlined"
                        multiline
                        rows={5}
                        className={classes.inputfield}
                        InputProps={{
                            className: classes.inputStyles,
                        }}
                        classes={{
                            root: classes.root
                        }}
                    />
                </div>

                {/* All Inclusive Price: (PKR)  */}
                <div className={classes.wrapperContainer}>
                    <p>All Inclusive Price: (PKR) * </p>
                    <TextField
                        value={price}
                        onChange={HandlePrice}
                        id="price"
                        variant="outlined"
                        fullWidth={true}
                        className={`${classes.inputfield} ${classes.halfInputField}`}
                        classes={classesBase}
                        autoComplete='off'
                        inputProps={{
                            className: classes.inputStyles,
                        }}
                    />
                </div>

                {/* PRICE IN WORDS */}
                <div className={`${classes.wrapperContainer} ${classes.mb15}`}>
                    <TextField
                        value={priceInWords}
                        id="price-in-words"
                        variant="outlined"
                        fullWidth={true}
                        className={classes.inputfield}
                        classes={classesBase}
                        disabled={true}
                        inputProps={{
                            className: classes.inputStylesForWording,
                        }}
                    />
                </div>

                <Grid container spacing={2}>
                    {/* Land Area  */}
                    <Grid item xs={12} md={6}>
                        <div className={classes.wrapperContainer}>
                            <p>Land Area *</p>
                            <TextField
                                value={landArea}
                                onChange={HandleLandArea}
                                id="land-area"
                                variant="outlined"
                                fullWidth={true}
                                className={`${classes.inputfield} ${classes.fullInputField}`}
                                classes={classesBase}
                                autoComplete='off'
                                inputProps={{
                                    className: classes.inputStyles,
                                }}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {/* UNIT */}
                        <div className={classes.wrapperContainer}>
                            <p>Unit *</p>
                            <select name="square-feet" id="square-feet" className={classes.landAreaContainer} onChange={HandleAreaUnit}>
                                <option value='Square Feet'>Square Feet</option>
                                <option value="Square Yards">Square Yards</option>
                                <option value="Square Meters">Square Meters</option>
                                <option value="Marla">Marla</option>
                                <option value="Kanal">Kanal</option>
                            </select>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default React.memo(PropertyDetails);