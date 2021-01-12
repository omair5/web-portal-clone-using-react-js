import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Register: {
        textDecoration: 'none',
        color: 'white',
        padding: '1rem',
        cursor: 'pointer',
        "&:hover": {
            color: 'black'
        }
    }
});

const Register = () => {
    const classes = useStyles();

    return (
        <>
            <span className={classes.Register}>Register</span>
        </>
    );
}
export default React.memo(Register);