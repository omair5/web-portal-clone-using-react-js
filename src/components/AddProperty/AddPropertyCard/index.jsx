import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'white',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        "& p": {
            marginTop: '15px',
            fontWeight: 'bolder',
            letterSpacing: '2px'
        },
        "&:hover": {
            transform: 'scale(1.05)',

        }
    },
    homeIconContainer: {
        backgroundColor: '#fcb812',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    homeIcon: {
        fontSize: '35px',
        color: 'white'

    }
}));

const AddPropertyCard = ({ propertyType }) => {
    const classes = useStyles();
    return (
        <>
            <Link to='/packages' style={{ textDecoration: 'none' }}>
                <Paper className={classes.paper}>
                    <div className={classes.homeIconContainer}><HomeRoundedIcon className={classes.homeIcon} /></div>
                    <p>{propertyType}</p>
                </Paper>
            </Link>
        </>
    );
}
export default React.memo(AddPropertyCard);