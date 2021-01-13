import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import RegisterDialogBox from '../../FrequentlyUsed/RegisterDialogBox';

const useStyles = makeStyles({
    register: {
        textDecoration: 'none',
        color: 'white',
        padding: '1rem',
        cursor: 'pointer',
        "&:hover": {
            color: 'black'
        }
    },
});

const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        dispatch({ type: 'OpenRegisterDialog' })
    };

    return (
        <div>
            <span className={classes.register} onClick={handleClickOpen}>Register</span>
            {/* THIS DIALOG WILL OPEN WHEN CLICKED ABOVE ON Register  */}
            <RegisterDialogBox />
        </div>
    );
}
export default React.memo(Register);
