import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChangeAreaUnitPopUp from './ChangeAreaUnitPopUp';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '15px',
        "& span": {
            padding: '7px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: '#fcb812',
            cursor: 'pointer',
            margin: '0px 10px',
            borderRadius: '5px',
        },
        [theme.breakpoints.down('md')]: {
            width: '95%',
            margin: 'auto',
            marginTop: '15px',
        },
    },
}));

const FooterButtons = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const HandleOpenPopUp = () => {
        dispatch({ type: 'open_area_unit_pop_up' })
    }

    return (
        <div className={classes.footer} >
            <span onClick={HandleOpenPopUp}>Change Area Unit</span>
            <span>Reset Search</span>
            <ChangeAreaUnitPopUp />
        </div>
    )
}
export default React.memo(FooterButtons);