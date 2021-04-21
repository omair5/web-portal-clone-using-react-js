import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Select from 'react-select';

// THESE STYLES ARE FOR SELECT BOX
export const colourStyles = {
    // THIS IS OPTION BOX
    menuList: base => ({
        ...base,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: 'white',

    }),
    // THIS IS FOR OPTIONS
    option: (styles, { isFocused }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#fcb812" : null,
            color: "white",
            fontSize: '14px',
        };
    },
    // THIS IS FOR VALUE
    singleValue: styles => ({ ...styles, fontSize: '14px', fontWeight: 'bold', color: 'rgb(59, 70, 86)' }),

    // THIS IS VALUE CONTAINER
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '0px'
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 })
}

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        minWidth: '30vw',
        minHeight: '120px',
        overflow: 'visible',
        [theme.breakpoints.down('md')]: {
            minWidth: '80vw',
        },
        "& h3": {
            textAlign: 'center',
            padding: '15px 0px',
            color: 'rgb(25,25,25)'
        }
    },
    areaUnitSelect: {
        width: '80%',
        margin: '0px auto',
    },
    button: {
        width: '50%',
        margin: "15px auto",
        padding: '15px',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'rgb(25,25,25)',
        color: '#fcb812',
        fontWeight: 'bolder',
        cursor: 'pointer'
    }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ChangeAreaUnitPopUp() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const AreaUnitPopUp = useSelector(state => state.AreaUnitPopUp)
    const [selectedOption, setselectedOption] = useState({ value: 'Square Feet', label: 'Square Feet' })

    const options = [
        { value: 'Square Feet', label: 'Square Feet' },
        { value: 'Square Yards', label: 'Square Yards' },
        { value: 'Square Meters', label: 'Square Meters' },
        { value: 'Marla', label: 'Marla' },
        { value: 'Kanal', label: 'Kanal' },
    ];

    const handleClose = () => {
        dispatch({ type: 'close_area_unit_pop_up' })
        console.log(selectedOption.value)
        switch (selectedOption.value) {
            case 'Square Feet':
                dispatch({ type: 'change_to_SQFT' })
                dispatch({ type: 'sqft_min_range' })
                dispatch({ type: 'sqft_max_range' })
                break;
            case 'Square Yards':
                dispatch({ type: 'change_to_SQYD' })
                dispatch({ type: 'sqyd_min_range' })
                dispatch({ type: 'sqyd_max_range' })
                break;
            case 'Square Meters':
                dispatch({ type: 'change_to_SQM' })
                dispatch({ type: 'sqm_min_range' })
                dispatch({ type: 'sqm_max_range' })
                break;
            case 'Marla':
                dispatch({ type: 'change_to_MARLA' })
                dispatch({ type: 'marla_min_range' })
                dispatch({ type: 'marla_max_range' })
                break;
            case 'Kanal':
                dispatch({ type: 'change_to_KANAL' })
                dispatch({ type: 'kanal_min_range' })
                dispatch({ type: 'kanal_max_range' })
                break;
            default:
                dispatch({ type: 'change_to_SQFT' })
                dispatch({ type: 'sqft_min_range' })
                dispatch({ type: 'sqft_max_range' })
        }
    };

    const handleSelect = (selectedOption) => {
        setselectedOption(selectedOption)
    }

    return (
        <div>
            <Dialog
                open={AreaUnitPopUp}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <div className={classes.mainContainer}>
                    <h3>Change Area Unit</h3>
                    <div className={classes.areaUnitSelect}>
                        <Select
                            value={selectedOption}
                            onChange={handleSelect}
                            styles={colourStyles}
                            isSearchable={false}
                            name="unit"
                            options={options}
                            placeholder="Select Unit"
                            label='unit'
                            menuPortalTarget={document.body}
                            menuPosition={'fixed'}
                        />
                    </div>
                </div>
                <button onClick={handleClose} className={classes.button}>SAVE</button>
            </Dialog>
        </div>
    );
}
export default React.memo(ChangeAreaUnitPopUp)