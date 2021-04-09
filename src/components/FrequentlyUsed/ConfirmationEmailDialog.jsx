import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mainHeading: {
        fontSize: '30px',
        textAlign: 'center',
        color: '#289947',
        padding: '10px',
        fontWeight: 'bolder'
    },
    subHeading: {
        textAlign: 'center',
        color: 'rgb(76, 84, 85)',
        padding: '10px',
        fontWeight: 'bolder'
    },
    mainContainer: {
        padding: '30px',
        borderRadius: '5px',
        "& p": {
            color: 'gray'
        }
    }
});

function ConfirmationEmailDialog() {
    const classes = useStyles();
    const open = useSelector(state => state.FrequentlyUsed_Confirmation_Dialog)
    const dispatch = useDispatch()

    // TO CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({ type: 'close_confirmation_email_dialog' })
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={classes.mainContainer}>
                    <h1 id="alert-dialog-title" className={classes.mainHeading}>ThankYou For Signing Up!</h1>
                    <h3 id="alert-dialog-title" className={classes.subHeading}>Please Check Your Email</h3>
                    <p>Dear User,
                            <br />
                            A Confirmation Link Has Been Send To Your Email. Please Verify Your Email Before Signing In.
                        </p>
                </div>

            </Dialog>
        </div >
    );
}
export default React.memo(ConfirmationEmailDialog)