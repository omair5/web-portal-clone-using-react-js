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
        fontWeight: 'bolder',
        textTransform: 'capitalize'
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
            margin: '20px auto',
            color: 'gray'
        }
    }
});

function PopUpMessage({ heading, color, message }) {
    const classes = useStyles();
    const open = useSelector(state => state.FrequentlyUsed_PopUpMessage)
    console.log('this is pop up open state', open)
    console.log(color)
    const dispatch = useDispatch()

    // TO CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({ type: 'close_FrequentlyUsed_PopUpMessage' })
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
                    <h1 id="alert-dialog-title" className={`${classes.mainHeading} ${color}`}>{heading}</h1>
                    <p> {message}</p>
                </div>

            </Dialog>
        </div >
    );
}
export default React.memo(PopUpMessage)