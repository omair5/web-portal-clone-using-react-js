import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignInDialogBox from '../../FrequentlyUsed/SignInDialogBox';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    sigin: {
        textDecoration: 'none',
        color: 'white',
        padding: '1rem',
        cursor: 'pointer',
        "&:hover": {
            color: 'black'
        }
    },
});

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch()


    const handleClickOpen = () => {
        dispatch({ type: 'OpenSignInDialog' })
    };

    return (
        <div>
            <span className={classes.sigin} onClick={handleClickOpen}>Sign in</span>
            {/* THIS DIALOG WILL OPEN WHEN CLICKED ABOVE ON sign in  */}
            <SignInDialogBox />
        </div>
    );
}
export default React.memo(SignIn);
